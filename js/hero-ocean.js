// Hero ocean: a trimmed Ultra Water view (MIT, Copyright (c) 2026 Humpalumps).
// Full notices: vendor/ultra-water/LICENSE and vendor/ultra-water/THIRD_PARTY_NOTICES.md
// https://github.com/Humpalumps/Ultra-Water
import * as THREE from 'three';
import { OceanSim, defaultOceanParams } from '../vendor/ultra-water/src/water/OceanSim.js';
import { OceanSurface } from '../vendor/ultra-water/src/water/OceanSurface.js';
import { bakeShoreMap } from '../vendor/ultra-water/src/water/shoreMap.js';
import { bakeWaterTextures } from '../vendor/ultra-water/src/water/bakeTextures.js';
import { SkySystem } from '../vendor/ultra-water/src/scene/sky.js';
import { islandHeight } from '../vendor/ultra-water/src/scene/islandHeight.js';
import { FloaterShadow } from '../vendor/ultra-water/src/scene/floaterShadow.js';
import { createTerrain } from '../vendor/ultra-water/src/scene/terrain.js';
import { PostFX } from '../vendor/ultra-water/src/engine/PostFX.js';

const PURPLE = {
  absorption: [0.22, 0.85, 0.1],
  scatter: [0.05, 0, 0.09],
  foam: [0.8, 0.66, 0.88],
};

function webgl2() {
  try {
    const gl = document.createElement('canvas').getContext('webgl2');
    return !!gl;
  } catch {
    return false;
  }
}

function depthSampler(renderer) {
  const depth = new THREE.DepthTexture(4, 4);
  depth.type = THREE.UnsignedIntType;
  depth.compareFunction = THREE.LessEqualCompare;
  depth.minFilter = depth.magFilter = THREE.LinearFilter;
  const rt = new THREE.WebGLRenderTarget(4, 4, { depthTexture: depth });
  const prev = renderer.getRenderTarget();
  renderer.setRenderTarget(rt);
  renderer.clear(true, true, true);
  renderer.setRenderTarget(prev);
  return depth;
}

function start(hero) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const stage = hero.querySelector('.ocean-stage');
  if (!stage || reduced || !webgl2()) {
    if (stage) stage.dataset.ocean = 'static';
    return;
  }

  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  stage.appendChild(canvas);
  const credit = document.createElement('a');
  credit.className = 'ocean-credit';
  credit.href = 'https://github.com/Humpalumps/Ultra-Water';
  credit.target = '_blank';
  credit.rel = 'noopener';
  credit.textContent = '海面 · 即時演算 · Ultra Water';
  stage.appendChild(credit);

  let renderer;
  const fail = () => {
    stage.dataset.ocean = 'static';
    hero.classList.remove('has-ocean');
    canvas.remove();
    credit.remove();
    try { renderer?.dispose(); } catch { /* context already gone */ }
  };
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      depth: false,
      stencil: false,
      alpha: false,
      powerPreference: 'high-performance',
    });
  } catch {
    fail();
    return;
  }
  renderer.autoClear = false;
  renderer.setClearColor(0x1e1b3a, 1);
  // PostFX already writes sRGB. Leave the drawing buffer linear so it is not encoded twice.
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

  try {
  const coarse = matchMedia('(pointer: coarse)').matches;
  const camera = new THREE.PerspectiveCamera(46, 1, 0.5, 80000);
  const look = new THREE.Vector3();

  const sky = new SkySystem(renderer);
  sky.params.elevation = 26;
  sky.params.azimuth = 214;
  sky.params.cloudCoverage = 0.22;
  sky.params.turbidity = 2.4;
  sky.update();

  const ocean = new OceanSim(renderer, defaultOceanParams());
  const shore = bakeShoreMap(islandHeight, 1800, 256);
  const foam = bakeWaterTextures(renderer);
  const floatShadow = new FloaterShadow(32);
  floatShadow.clear(renderer);
  const surface = new OceanSurface(ocean, shore, sky, floatShadow.uniforms);
  surface.uniforms.uFoamTex.value = foam.foam;
  surface.uniforms.uReflection.value = new THREE.DataTexture(new Uint8Array(4), 1, 1);
  surface.uniforms.uReflection.value.needsUpdate = true;
  surface.uniforms.uShadowMap.value = depthSampler(renderer);
  surface.uniforms.uAbsorption.value.fromArray(PURPLE.absorption);
  surface.uniforms.uScatterColor.value.fromArray(PURPLE.scatter);
  surface.uniforms.uFoamTint.value.fromArray(PURPLE.foam);
  surface.uniforms.uGlint.value = 0.45;

  // Repo shoreline: island mesh, wet sand, and the swash film (waves running up the beach).
  // Caustic maps stay neutral; the hero does not run the caustic splat pass.
  const flat = new THREE.DataTexture(new Uint8Array(16 * 4).fill(255), 4, 4);
  flat.wrapS = flat.wrapT = THREE.RepeatWrapping;
  flat.magFilter = THREE.LinearFilter;
  flat.minFilter = THREE.LinearMipmapLinearFilter;
  flat.generateMipmaps = true;
  flat.needsUpdate = true;
  const terrain = createTerrain({
    sky,
    caustics: { uCaustics: { value: flat }, uCausticsDeep: { value: flat } },
    floatShadow: floatShadow.uniforms,
    water: surface.uniforms,
    absorption: surface.uniforms.uAbsorption.value,
  });
  terrain.uniforms.uCausticStrength.value = 0;
  terrain.group.traverse((obj) => { obj.castShadow = obj.receiveShadow = false; });

  const skyScene = new THREE.Scene();
  skyScene.environment = sky.cube;
  const sunLight = new THREE.DirectionalLight(0xfff2e4, 3.4);
  sunLight.position.copy(sky.sunDir).multiplyScalar(2000);
  skyScene.add(sky.background, terrain.group, sunLight, new THREE.AmbientLight(0x9eb0d4, 0.45));
  const waterScene = new THREE.Scene();
  waterScene.add(surface.mesh);

  // Open ocean, and the repo's Breakers shoreline (low, along the sand, waves up the beach).
  function coast(bearingDeg) {
    const a = THREE.MathUtils.degToRad(bearingDeg);
    let r = 100;
    while (r < 800 && islandHeight(Math.cos(a) * r, Math.sin(a) * r) > 0) r += 2;
    return new THREE.Vector2(Math.cos(a) * r, Math.sin(a) * r);
  }
  const sunBearing = Math.atan2(sky.sunDir.z, sky.sunDir.x);
  const beachBearing = sunBearing + 1.9;
  const beachCoast = coast(THREE.MathUtils.radToDeg(beachBearing));
  const shots = [
    { name: 'ocean', pos: new THREE.Vector3(1680, 7.2, 420), target: new THREE.Vector3(2480, 1.4, 1280) },
    {
      name: 'beach',
      pos: new THREE.Vector3(
        beachCoast.x + Math.cos(beachBearing) * 35 + Math.sin(beachBearing) * 40,
        3.2,
        beachCoast.y + Math.sin(beachBearing) * 35 - Math.cos(beachBearing) * 40,
      ),
      target: new THREE.Vector3(
        beachCoast.x - Math.sin(beachBearing) * 30,
        0.4,
        beachCoast.y + Math.cos(beachBearing) * 30,
      ),
    },
  ];
  let shot = 0;
  camera.position.copy(shots[0].pos);
  look.copy(shots[0].target);
  camera.lookAt(look);
  stage.dataset.shot = shots[0].name;

  // Straight lerp would pass through the island, so the move lifts over the water.
  let mode = 'hold';
  let move = 0;
  let hold = 0;
  const fromP = new THREE.Vector3();
  const fromT = new THREE.Vector3();
  const toP = new THREE.Vector3();
  const toT = new THREE.Vector3();
  const HOLD = 10;
  const MOVE = 3.2;
  function applyMove(k) {
    const e = k * k * (3 - 2 * k);
    camera.position.lerpVectors(fromP, toP, e);
    look.lerpVectors(fromT, toT, e);
    camera.position.y += Math.sin(e * Math.PI) * 80;
    camera.lookAt(look);
  }

  const post = new PostFX(renderer);
  post.params.bloomStrength = 0;
  post.params.exposure = 1.05;

  let hdr = null;
  function resize() {
    const w = Math.max(1, stage.clientWidth);
    const h = Math.max(1, stage.clientHeight);
    const cap = coarse ? 1 : 1.25;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, cap));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const size = renderer.getDrawingBufferSize(new THREE.Vector2());
    hdr?.dispose();
    hdr = new THREE.WebGLRenderTarget(size.x, size.y, {
      type: THREE.HalfFloatType,
      samples: 2,
      generateMipmaps: false,
      depthTexture: new THREE.DepthTexture(size.x, size.y, THREE.FloatType),
    });
    surface.uniforms.uSceneColor.value = hdr.texture;
    surface.uniforms.uSceneDepth.value = hdr.depthTexture;
    surface.uniforms.uResolution.value.set(size.x, size.y);
    post.setSize(size.x, size.y);
  }
  const ro = new ResizeObserver(resize);
  ro.observe(stage);
  resize();

  let raf = 0;
  let onscreen = true;
  let elapsed = 0;
  let last = performance.now();

  function running() {
    return onscreen && !document.hidden && stage.clientWidth > 0 && stage.clientHeight > 0;
  }
  function mark() {
    stage.dataset.ocean = running() && raf ? 'running' : 'paused';
  }
  function loop(now) {
    raf = 0;
    if (!running()) {
      last = now;
      mark();
      return;
    }
    const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
    last = now;
    elapsed += dt;
    if (mode === 'move') {
      move = Math.min(1, move + dt / MOVE);
      applyMove(move);
      stage.dataset.shot = move >= 1 ? shots[shot].name : 'move';
      if (move >= 1) {
        mode = 'hold';
        hold = 0;
        camera.position.copy(toP);
        look.copy(toT);
        camera.lookAt(look);
      }
    } else {
      hold += dt;
      camera.position.copy(shots[shot].pos);
      look.copy(shots[shot].target);
      camera.lookAt(look);
      if (hold >= HOLD) {
        const next = (shot + 1) % shots.length;
        fromP.copy(shots[shot].pos);
        fromT.copy(shots[shot].target);
        toP.copy(shots[next].pos);
        toT.copy(shots[next].target);
        shot = next;
        mode = 'move';
        move = 0;
        stage.dataset.shot = 'move';
      }
    }
    ocean.update(dt);
    surface.update(camera, elapsed % 3600);
    renderer.setRenderTarget(hdr);
    renderer.clear(true, true, false);
    renderer.render(skyScene, camera);
    renderer.render(waterScene, camera);
    renderer.setRenderTarget(null);
    post.render(hdr.texture, dt);
    raf = requestAnimationFrame(loop);
    mark();
  }
  function kick() {
    if (!raf) {
      last = performance.now();
      raf = requestAnimationFrame(loop);
    }
    mark();
  }

  const io = new IntersectionObserver((entries) => {
    onscreen = entries.some((e) => e.isIntersecting);
    if (onscreen) kick();
    else mark();
  }, { threshold: 0 });
  io.observe(hero);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) mark();
    else kick();
  });

  hero.classList.add('has-ocean');
  kick();
  } catch {
    fail();
  }
}

const hero = document.querySelector('.hero');
if (hero) start(hero);
