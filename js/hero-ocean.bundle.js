var qs = Object.defineProperty;
var Ys = (i, e, t) => e in i ? qs(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var ua = (i, e, t) => Ys(i, typeof e != "symbol" ? e + "" : e, t);
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ft = "srgb", fi = "srgb-linear", Yi = "linear", Je = "srgb";
const Yn = "300 es";
function Ks(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function Ki(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Zs() {
  const i = Ki("canvas");
  return i.style.display = "block", i;
}
const fa = {};
function da(...i) {
  const e = "THREE." + i.shift();
  console.log(e, ...i);
}
function fs(i) {
  const e = i[0];
  if (typeof e == "string" && e.startsWith("TSL:")) {
    const t = i[1];
    t && t.isStackTrace ? i[0] += " " + t.getLocation() : i[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return i;
}
function Re(...i) {
  i = fs(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.warn(t.getError(e)) : console.warn(e, ...i);
  }
}
function qe(...i) {
  i = fs(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.error(t.getError(e)) : console.error(e, ...i);
  }
}
function Wn(...i) {
  const e = i.join(" ");
  e in fa || (fa[e] = !0, Re(...i));
}
function $s(i, e, t) {
  return new Promise(function(n, r) {
    function a() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(a, t);
          break;
        default:
          n();
      }
    }
    setTimeout(a, t);
  });
}
const Js = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
};
class yn {
  /**
   * Adds the given event listener to the given event type.
   *
   * @param {string} type - The type of event to listen to.
   * @param {Function} listener - The function that gets called when the event is fired.
   */
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  /**
   * Returns `true` if the given event listener has been added to the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to check.
   * @return {boolean} Whether the given event listener has been added to the given event type.
   */
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  /**
   * Removes the given event listener from the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to remove.
   */
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const r = n[e];
    if (r !== void 0) {
      const a = r.indexOf(t);
      a !== -1 && r.splice(a, 1);
    }
  }
  /**
   * Dispatches an event object.
   *
   * @param {Object} event - The event that gets fired.
   */
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let a = 0, s = r.length; a < s; a++)
        r[a].call(this, e);
      e.target = null;
    }
  }
}
const St = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let ha = 1234567;
const oi = Math.PI / 180, di = 180 / Math.PI;
function Zn() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (St[i & 255] + St[i >> 8 & 255] + St[i >> 16 & 255] + St[i >> 24 & 255] + "-" + St[e & 255] + St[e >> 8 & 255] + "-" + St[e >> 16 & 15 | 64] + St[e >> 24 & 255] + "-" + St[t & 63 | 128] + St[t >> 8 & 255] + "-" + St[t >> 16 & 255] + St[t >> 24 & 255] + St[n & 255] + St[n >> 8 & 255] + St[n >> 16 & 255] + St[n >> 24 & 255]).toLowerCase();
}
function Ge(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function kr(i, e) {
  return (i % e + e) % e;
}
function Qs(i, e, t, n, r) {
  return n + (i - e) * (r - n) / (t - e);
}
function js(i, e, t) {
  return i !== e ? (t - i) / (e - i) : 0;
}
function li(i, e, t) {
  return (1 - t) * i + t * e;
}
function eo(i, e, t, n) {
  return li(i, e, 1 - Math.exp(-t * n));
}
function to(i, e = 1) {
  return e - Math.abs(kr(i, e * 2) - e);
}
function no(i, e, t) {
  return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * (3 - 2 * i));
}
function io(i, e, t) {
  return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * i * (i * (i * 6 - 15) + 10));
}
function ro(i, e) {
  return i + Math.floor(Math.random() * (e - i + 1));
}
function ao(i, e) {
  return i + Math.random() * (e - i);
}
function so(i) {
  return i * (0.5 - Math.random());
}
function oo(i) {
  i !== void 0 && (ha = i);
  let e = ha += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function lo(i) {
  return i * oi;
}
function co(i) {
  return i * di;
}
function uo(i) {
  return i > 0 && Number.isInteger(i) && 2 ** Math.round(Math.log2(i)) === i;
}
function fo(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function ho(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function po(i, e, t, n, r) {
  const a = Math.cos, s = Math.sin, o = a(t / 2), c = s(t / 2), l = a((e + n) / 2), f = s((e + n) / 2), d = a((e - n) / 2), u = s((e - n) / 2), h = a((n - e) / 2), _ = s((n - e) / 2);
  switch (r) {
    case "XYX":
      i.set(o * f, c * d, c * u, o * l);
      break;
    case "YZY":
      i.set(c * u, o * f, c * d, o * l);
      break;
    case "ZXZ":
      i.set(c * d, c * u, o * f, o * l);
      break;
    case "XZX":
      i.set(o * f, c * _, c * h, o * l);
      break;
    case "YXY":
      i.set(c * h, o * f, c * _, o * l);
      break;
    case "ZYZ":
      i.set(c * _, c * h, o * f, o * l);
      break;
    default:
      Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
  }
}
function Vn(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
    case Uint8ClampedArray:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("THREE.MathUtils: Invalid component type.");
  }
}
function yt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
    case Uint8ClampedArray:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("THREE.MathUtils: Invalid component type.");
  }
}
const ci = {
  DEG2RAD: oi,
  RAD2DEG: di,
  /**
   * Generate a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)
   * (universally unique identifier).
   *
   * @static
   * @method
   * @return {string} The UUID.
   */
  generateUUID: Zn,
  /**
   * Clamps the given value between min and max.
   *
   * @static
   * @method
   * @param {number} value - The value to clamp.
   * @param {number} min - The min value.
   * @param {number} max - The max value.
   * @return {number} The clamped value.
   */
  clamp: Ge,
  /**
   * Computes the Euclidean modulo of the given parameters that
   * is `( ( n % m ) + m ) % m`.
   *
   * @static
   * @method
   * @param {number} n - The first parameter.
   * @param {number} m - The second parameter.
   * @return {number} The Euclidean modulo.
   */
  euclideanModulo: kr,
  /**
   * Performs a linear mapping from range `<a1, a2>` to range `<b1, b2>`
   * for the given value.
   *
   * @static
   * @method
   * @param {number} x - The value to be mapped.
   * @param {number} a1 - Minimum value for range A.
   * @param {number} a2 - Maximum value for range A.
   * @param {number} b1 - Minimum value for range B.
   * @param {number} b2 - Maximum value for range B.
   * @return {number} The mapped value.
   */
  mapLinear: Qs,
  /**
   * Returns the percentage in the closed interval `[0, 1]` of the given value
   * between the start and end point.
   *
   * @static
   * @method
   * @param {number} x - The start point
   * @param {number} y - The end point.
   * @param {number} value - A value between start and end.
   * @return {number} The interpolation factor.
   */
  inverseLerp: js,
  /**
   * Returns a value linearly interpolated from two known points based on the given interval -
   * `t = 0` will return `x` and `t = 1` will return `y`.
   *
   * @static
   * @method
   * @param {number} x - The start point
   * @param {number} y - The end point.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {number} The interpolated value.
   */
  lerp: li,
  /**
   * Smoothly interpolate a number from `x` to `y` in  a spring-like manner using a delta
   * time to maintain frame rate independent movement. For details, see
   * [Frame rate independent damping using lerp](http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/).
   *
   * @static
   * @method
   * @param {number} x - The current point.
   * @param {number} y - The target point.
   * @param {number} lambda - A higher lambda value will make the movement more sudden,
   * and a lower value will make the movement more gradual.
   * @param {number} dt - Delta time in seconds.
   * @return {number} The interpolated value.
   */
  damp: eo,
  /**
   * Returns a value that alternates between `0` and the given `length` parameter.
   *
   * @static
   * @method
   * @param {number} x - The value to pingpong.
   * @param {number} [length=1] - The positive value the function will pingpong to.
   * @return {number} The alternated value.
   */
  pingpong: to,
  /**
   * Returns a value in the range `[0,1]` that represents the percentage that `x` has
   * moved between `min` and `max`, but smoothed or slowed down the closer `x` is to
   * the `min` and `max`.
   *
   * See [Smoothstep](http://en.wikipedia.org/wiki/Smoothstep) for more details.
   *
   * @static
   * @method
   * @param {number} x - The value to evaluate based on its position between min and max.
   * @param {number} min - The min value. Any x value below min will be `0`.
   * @param {number} max - The max value. Any x value above max will be `1`.
   * @return {number} The alternated value.
   */
  smoothstep: no,
  /**
   * A [variation on smoothstep](https://en.wikipedia.org/wiki/Smoothstep#Variations)
   * that has zero 1st and 2nd order derivatives at x=0 and x=1.
   *
   * @static
   * @method
   * @param {number} x - The value to evaluate based on its position between min and max.
   * @param {number} min - The min value. Any x value below min will be `0`.
   * @param {number} max - The max value. Any x value above max will be `1`.
   * @return {number} The alternated value.
   */
  smootherstep: io,
  /**
   * Returns a random integer from `<low, high>` interval.
   *
   * @static
   * @method
   * @param {number} low - The lower value boundary.
   * @param {number} high - The upper value boundary
   * @return {number} A random integer.
   */
  randInt: ro,
  /**
   * Returns a random float from `<low, high>` interval.
   *
   * @static
   * @method
   * @param {number} low - The lower value boundary.
   * @param {number} high - The upper value boundary
   * @return {number} A random float.
   */
  randFloat: ao,
  /**
   * Returns a random integer from `<-range/2, range/2>` interval.
   *
   * @static
   * @method
   * @param {number} range - Defines the value range.
   * @return {number} A random float.
   */
  randFloatSpread: so,
  /**
   * Returns a deterministic pseudo-random float in the interval `[0, 1]`.
   *
   * @static
   * @method
   * @param {number} [s] - The integer seed.
   * @return {number} A random float.
   */
  seededRandom: oo,
  /**
   * Converts degrees to radians.
   *
   * @static
   * @method
   * @param {number} degrees - A value in degrees.
   * @return {number} The converted value in radians.
   */
  degToRad: lo,
  /**
   * Converts radians to degrees.
   *
   * @static
   * @method
   * @param {number} radians - A value in radians.
   * @return {number} The converted value in degrees.
   */
  radToDeg: co,
  /**
   * Returns `true` if the given number is a power of two.
   *
   * @static
   * @method
   * @param {number} value - The value to check.
   * @return {boolean} Whether the given number is a power of two or not.
   */
  isPowerOfTwo: uo,
  /**
   * Returns the smallest power of two that is greater than or equal to the given number.
   *
   * @static
   * @method
   * @param {number} value - The value to find a POT for.
   * @return {number} The smallest power of two that is greater than or equal to the given number.
   */
  ceilPowerOfTwo: fo,
  /**
   * Returns the largest power of two that is less than or equal to the given number.
   *
   * @static
   * @method
   * @param {number} value - The value to find a POT for.
   * @return {number} The largest power of two that is less than or equal to the given number.
   */
  floorPowerOfTwo: ho,
  /**
   * Sets the given quaternion from the [Intrinsic Proper Euler Angles](https://en.wikipedia.org/wiki/Euler_angles)
   * defined by the given angles and order.
   *
   * Rotations are applied to the axes in the order specified by order:
   * rotation by angle `a` is applied first, then by angle `b`, then by angle `c`.
   *
   * @static
   * @method
   * @param {Quaternion} q - The quaternion to set.
   * @param {number} a - The rotation applied to the first axis, in radians.
   * @param {number} b - The rotation applied to the second axis, in radians.
   * @param {number} c - The rotation applied to the third axis, in radians.
   * @param {('XYX'|'XZX'|'YXY'|'YZY'|'ZXZ'|'ZYZ')} order - A string specifying the axes order.
   */
  setQuaternionFromProperEuler: po,
  /**
   * Normalizes the given value according to the given typed array.
   *
   * @static
   * @method
   * @param {number} value - The float value in the range `[0,1]` to normalize.
   * @param {TypedArray} array - The typed array that defines the data type of the value.
   * @return {number} The normalize value.
   */
  normalize: yt,
  /**
   * Denormalizes the given value according to the given typed array.
   *
   * @static
   * @method
   * @param {number} value - The value to denormalize.
   * @param {TypedArray} array - The typed array that defines the data type of the value.
   * @return {number} The denormalize (float) value in the range `[0,1]`.
   */
  denormalize: Vn
}, Zr = class Zr {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(e = 0, t = 0) {
    this.x = e, this.y = t;
  }
  /**
   * Alias for {@link Vector2#x}.
   *
   * @type {number}
   */
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  /**
   * Alias for {@link Vector2#y}.
   *
   * @type {number}
   */
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @return {Vector2} A reference to this vector.
   */
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector2} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @param {number} value - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("THREE.Vector2: index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("THREE.Vector2: index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector2} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector2} v - The vector to copy.
   * @return {Vector2} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector2} v - The vector to add.
   * @return {Vector2} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector2} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector2} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector2} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector2} v - The vector to subtract.
   * @return {Vector2} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector2} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector2} v - The vector to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector2} v - The vector to divide.
   * @return {Vector2} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector2} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * Multiplies this vector (with an implicit 1 as the 3rd component) by
   * the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {Vector2} A reference to this vector.
   */
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  /**
   * If this vector's x or y value is greater than the given vector's x or y
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  /**
   * If this vector's x or y value is less than the given vector's x or y
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  /**
   * If this vector's x or y value is greater than the max vector's x or y
   * value, it is replaced by the corresponding value.
   * If this vector's x or y value is less than the min vector's x or y value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector2} min - The minimum x and y values.
   * @param {Vector2} max - The maximum x and y values in the desired range.
   * @return {Vector2} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = Ge(this.x, e.x, t.x), this.y = Ge(this.y, e.y, t.y), this;
  }
  /**
   * If this vector's x or y values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x or y values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = Ge(this.x, e, t), this.y = Ge(this.y, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ge(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector2} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x and y = -y.
   *
   * @return {Vector2} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the cross product with.
   * @return {number} The result of the cross product.
   */
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0) to (x, y). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0) to (x, y).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Computes the angle in radians of this vector with respect to the positive x-axis.
   *
   * @return {number} The angle in radians.
   */
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector2} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ge(n, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector2} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector2} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector2} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector2} v1 - The first vector.
   * @param {Vector2} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector2} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]` and y
   * value to be `array[ offset + 1 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector2} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector2} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  /**
   * Rotates this vector around the given center by the given angle.
   *
   * @param {Vector2} center - The point around which to rotate.
   * @param {number} angle - The angle to rotate, in radians.
   * @return {Vector2} A reference to this vector.
   */
  rotateAround(e, t) {
    const n = Math.cos(t), r = Math.sin(t), a = this.x - e.x, s = this.y - e.y;
    return this.x = a * n - s * r + e.x, this.y = a * r + s * n + e.y, this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
};
Zr.prototype.isVector2 = !0;
let De = Zr;
class $n {
  /**
   * Constructs a new quaternion.
   *
   * @param {number} [x=0] - The x value of this quaternion.
   * @param {number} [y=0] - The y value of this quaternion.
   * @param {number} [z=0] - The z value of this quaternion.
   * @param {number} [w=1] - The w value of this quaternion.
   */
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  /**
   * Interpolates between two quaternions via SLERP. This implementation assumes the
   * quaternion data are managed in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @param {number} t - The interpolation factor. A value in the range `[0,1]` will interpolate. A value outside the range `[0,1]` will extrapolate.
   * @see {@link Quaternion#slerp}
   */
  static slerpFlat(e, t, n, r, a, s, o) {
    let c = n[r + 0], l = n[r + 1], f = n[r + 2], d = n[r + 3], u = a[s + 0], h = a[s + 1], _ = a[s + 2], M = a[s + 3];
    if (d !== M || c !== u || l !== h || f !== _) {
      let g = c * u + l * h + f * _ + d * M;
      g < 0 && (u = -u, h = -h, _ = -_, M = -M, g = -g);
      let p = 1 - o;
      if (g < 0.9995) {
        const A = Math.acos(g), R = Math.sin(A);
        p = Math.sin(p * A) / R, o = Math.sin(o * A) / R, c = c * p + u * o, l = l * p + h * o, f = f * p + _ * o, d = d * p + M * o;
      } else {
        c = c * p + u * o, l = l * p + h * o, f = f * p + _ * o, d = d * p + M * o;
        const A = 1 / Math.sqrt(c * c + l * l + f * f + d * d);
        c *= A, l *= A, f *= A, d *= A;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = f, e[t + 3] = d;
  }
  /**
   * Multiplies two quaternions. This implementation assumes the quaternion data are managed
   * in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @return {Array<number>} The destination array.
   * @see {@link Quaternion#multiplyQuaternions}.
   */
  static multiplyQuaternionsFlat(e, t, n, r, a, s) {
    const o = n[r], c = n[r + 1], l = n[r + 2], f = n[r + 3], d = a[s], u = a[s + 1], h = a[s + 2], _ = a[s + 3];
    return e[t] = o * _ + f * d + c * h - l * u, e[t + 1] = c * _ + f * u + l * d - o * h, e[t + 2] = l * _ + f * h + o * u - c * d, e[t + 3] = f * _ - o * d - c * u - l * h, e;
  }
  /**
   * The x value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  /**
   * The y value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  /**
   * The z value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  /**
   * The w value of this quaternion.
   *
   * @type {number}
   * @default 1
   */
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  /**
   * Sets the quaternion components.
   *
   * @param {number} x - The x value of this quaternion.
   * @param {number} y - The y value of this quaternion.
   * @param {number} z - The z value of this quaternion.
   * @param {number} w - The w value of this quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  /**
   * Returns a new quaternion with copied values from this instance.
   *
   * @return {Quaternion} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  /**
   * Copies the values of the given quaternion to this instance.
   *
   * @param {Quaternion} quaternion - The quaternion to copy.
   * @return {Quaternion} A reference to this quaternion.
   */
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the rotation specified by the given
   * Euler angles.
   *
   * @param {Euler} euler - The Euler angles.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromEuler(e, t = !0) {
    const n = e._x, r = e._y, a = e._z, s = e._order, o = Math.cos, c = Math.sin, l = o(n / 2), f = o(r / 2), d = o(a / 2), u = c(n / 2), h = c(r / 2), _ = c(a / 2);
    switch (s) {
      case "XYZ":
        this._x = u * f * d + l * h * _, this._y = l * h * d - u * f * _, this._z = l * f * _ + u * h * d, this._w = l * f * d - u * h * _;
        break;
      case "YXZ":
        this._x = u * f * d + l * h * _, this._y = l * h * d - u * f * _, this._z = l * f * _ - u * h * d, this._w = l * f * d + u * h * _;
        break;
      case "ZXY":
        this._x = u * f * d - l * h * _, this._y = l * h * d + u * f * _, this._z = l * f * _ + u * h * d, this._w = l * f * d - u * h * _;
        break;
      case "ZYX":
        this._x = u * f * d - l * h * _, this._y = l * h * d + u * f * _, this._z = l * f * _ - u * h * d, this._w = l * f * d + u * h * _;
        break;
      case "YZX":
        this._x = u * f * d + l * h * _, this._y = l * h * d + u * f * _, this._z = l * f * _ - u * h * d, this._w = l * f * d - u * h * _;
        break;
      case "XZY":
        this._x = u * f * d - l * h * _, this._y = l * h * d - u * f * _, this._z = l * f * _ + u * h * d, this._w = l * f * d + u * h * _;
        break;
      default:
        Re("Quaternion: .setFromEuler() encountered an unknown order: " + s);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given axis and angle.
   *
   * @param {Vector3} axis - The normalized axis.
   * @param {number} angle - The angle in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], a = t[8], s = t[1], o = t[5], c = t[9], l = t[2], f = t[6], d = t[10], u = n + o + d;
    if (u > 0) {
      const h = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / h, this._x = (f - c) * h, this._y = (a - l) * h, this._z = (s - r) * h;
    } else if (n > o && n > d) {
      const h = 2 * Math.sqrt(1 + n - o - d);
      this._w = (f - c) / h, this._x = 0.25 * h, this._y = (r + s) / h, this._z = (a + l) / h;
    } else if (o > d) {
      const h = 2 * Math.sqrt(1 + o - n - d);
      this._w = (a - l) / h, this._x = (r + s) / h, this._y = 0.25 * h, this._z = (c + f) / h;
    } else {
      const h = 2 * Math.sqrt(1 + d - n - o);
      this._w = (s - r) / h, this._x = (a + l) / h, this._y = (c + f) / h, this._z = 0.25 * h;
    }
    return this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion to the rotation required to rotate the direction vector
   * `vFrom` to the direction vector `vTo`.
   *
   * @param {Vector3} vFrom - The first (normalized) direction vector.
   * @param {Vector3} vTo - The second (normalized) direction vector.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  /**
   * Returns the angle between this quaternion and the given one in radians.
   *
   * @param {Quaternion} q - The quaternion to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Ge(this.dot(e), -1, 1)));
  }
  /**
   * Rotates this quaternion by a given angular step to the given quaternion.
   * The method ensures that the final quaternion will not overshoot `q`.
   *
   * @param {Quaternion} q - The target quaternion.
   * @param {number} step - The angular step in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  /**
   * Sets this quaternion to the identity quaternion; that is, to the
   * quaternion that represents "no rotation".
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  identity() {
    return this.set(0, 0, 0, 1);
  }
  /**
   * Inverts this quaternion via {@link Quaternion#conjugate}. The
   * quaternion is assumed to have unit length.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  invert() {
    return this.conjugate();
  }
  /**
   * Returns the rotational conjugate of this quaternion. The conjugate of a
   * quaternion represents the same rotation in the opposite direction about
   * the rotational axis.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  /**
   * Calculates the dot product of this quaternion and the given one.
   *
   * @param {Quaternion} v - The quaternion to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  /**
   * Computes the squared Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector. This can be useful if you are comparing the
   * lengths of two quaternions, as this is a slightly more efficient calculation than
   * {@link Quaternion#length}.
   *
   * @return {number} The squared Euclidean length.
   */
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  /**
   * Computes the Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector.
   *
   * @return {number} The Euclidean length.
   */
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  /**
   * Normalizes this quaternion - that is, calculated the quaternion that performs
   * the same rotation as this one, but has a length equal to `1`.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  /**
   * Multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  /**
   * Pre-multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  /**
   * Multiplies the given quaternions and stores the result in this instance.
   *
   * @param {Quaternion} a - The first quaternion.
   * @param {Quaternion} b - The second quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, a = e._z, s = e._w, o = t._x, c = t._y, l = t._z, f = t._w;
    return this._x = n * f + s * o + r * l - a * c, this._y = r * f + s * c + a * o - n * l, this._z = a * f + s * l + n * c - r * o, this._w = s * f - n * o - r * c - a * l, this._onChangeCallback(), this;
  }
  /**
   * Performs a spherical linear interpolation between this quaternion and the target quaternion.
   *
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor. A value in the range `[0,1]` will interpolate. A value outside the range `[0,1]` will extrapolate.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerp(e, t) {
    let n = e._x, r = e._y, a = e._z, s = e._w, o = this.dot(e);
    o < 0 && (n = -n, r = -r, a = -a, s = -s, o = -o);
    let c = 1 - t;
    if (o < 0.9995) {
      const l = Math.acos(o), f = Math.sin(l);
      c = Math.sin(c * l) / f, t = Math.sin(t * l) / f, this._x = this._x * c + n * t, this._y = this._y * c + r * t, this._z = this._z * c + a * t, this._w = this._w * c + s * t, this._onChangeCallback();
    } else
      this._x = this._x * c + n * t, this._y = this._y * c + r * t, this._z = this._z * c + a * t, this._w = this._w * c + s * t, this.normalize();
    return this;
  }
  /**
   * Performs a spherical linear interpolation between the given quaternions
   * and stores the result in this quaternion.
   *
   * @param {Quaternion} qa - The source quaternion.
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  /**
   * Sets this quaternion to a uniformly random, normalized quaternion.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), a = Math.sqrt(n);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      a * Math.sin(t),
      a * Math.cos(t)
    );
  }
  /**
   * Returns `true` if this quaternion is equal with the given one.
   *
   * @param {Quaternion} quaternion - The quaternion to test for equality.
   * @return {boolean} Whether this quaternion is equal with the given one.
   */
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  /**
   * Sets this quaternion's components from the given array.
   *
   * @param {Array<number>} array - An array holding the quaternion component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this quaternion to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The quaternion components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  /**
   * Sets the components of this quaternion from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
   * @param {number} index - The index into the attribute.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the
   * numerical elements of this quaternion in an array of format `[x, y, z, w]`.
   *
   * @return {Array<number>} The serialized quaternion.
   */
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
const $r = class $r {
  /**
   * Constructs a new 3D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   */
  constructor(e = 0, t = 0, n = 0) {
    this.x = e, this.y = t, this.z = n;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @return {Vector3} A reference to this vector.
   */
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector3} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  /**
   * Sets the vector's x component to the given value.
   *
   * @param {number} x - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value.
   *
   * @param {number} y - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Sets the vector's z component to the given value.
   *
   * @param {number} z - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setZ(e) {
    return this.z = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @param {number} value - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("THREE.Vector3: index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("THREE.Vector3: index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector3} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3} v - The vector to copy.
   * @return {Vector3} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector3} v - The vector to add.
   * @return {Vector3} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector3} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector3|Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector3} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector3} v - The vector to subtract.
   * @return {Vector3} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector3} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector3} v - The vector to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  /**
   * Multiplies the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  /**
   * Applies the given Euler rotation to this vector.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Vector3} A reference to this vector.
   */
  applyEuler(e) {
    return this.applyQuaternion(pa.setFromEuler(e));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(e, t) {
    return this.applyQuaternion(pa.setFromAxisAngle(e, t));
  }
  /**
   * Multiplies this vector with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, a = e.elements;
    return this.x = a[0] * t + a[3] * n + a[6] * r, this.y = a[1] * t + a[4] * n + a[7] * r, this.z = a[2] * t + a[5] * n + a[8] * r, this;
  }
  /**
   * Multiplies this vector by the given normal matrix and normalizes
   * the result.
   *
   * @param {Matrix3} m - The normal matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  /**
   * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
   * divides by perspective.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, a = e.elements, s = 1 / (a[3] * t + a[7] * n + a[11] * r + a[15]);
    return this.x = (a[0] * t + a[4] * n + a[8] * r + a[12]) * s, this.y = (a[1] * t + a[5] * n + a[9] * r + a[13]) * s, this.z = (a[2] * t + a[6] * n + a[10] * r + a[14]) * s, this;
  }
  /**
   * Applies the given Quaternion to this vector.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Vector3} A reference to this vector.
   */
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, a = e.x, s = e.y, o = e.z, c = e.w, l = 2 * (s * r - o * n), f = 2 * (o * t - a * r), d = 2 * (a * n - s * t);
    return this.x = t + c * l + s * d - o * f, this.y = n + c * f + o * l - a * d, this.z = r + c * d + a * f - s * l, this;
  }
  /**
   * Projects this vector from world space into the camera's normalized
   * device coordinate (NDC) space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  /**
   * Unprojects this vector from the camera's normalized device coordinate (NDC)
   * space into world space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  /**
   * Transforms this vector by the upper left 3x3 sub-matrix of the given 4x4 matrix,
   * and normalizes the result.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Vector3} A reference to this vector.
   */
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * r, this.y = a[1] * t + a[5] * n + a[9] * r, this.z = a[2] * t + a[6] * n + a[10] * r, this.normalize();
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector3} v - The vector to divide.
   * @return {Vector3} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector3} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * If this vector's x, y or z value is greater than the given vector's x, y or z
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  /**
   * If this vector's x, y or z value is less than the given vector's x, y or z
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  /**
   * If this vector's x, y or z value is greater than the max vector's x, y or z
   * value, it is replaced by the corresponding value.
   * If this vector's x, y or z value is less than the min vector's x, y or z value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector3} min - The minimum x, y and z values.
   * @param {Vector3} max - The maximum x, y and z values in the desired range.
   * @return {Vector3} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = Ge(this.x, e.x, t.x), this.y = Ge(this.y, e.y, t.y), this.z = Ge(this.z, e.z, t.z), this;
  }
  /**
   * If this vector's x, y or z values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y or z values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = Ge(this.x, e, t), this.y = Ge(this.y, e, t), this.z = Ge(this.z, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ge(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector3} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y and z = -z.
   *
   * @return {Vector3} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector3} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector3} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector3} v1 - The first vector.
   * @param {Vector3} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the cross product with.
   * @return {Vector3} The result of the cross product.
   */
  cross(e) {
    return this.crossVectors(this, e);
  }
  /**
   * Calculates the cross product of the given vectors and stores the result
   * in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  crossVectors(e, t) {
    const n = e.x, r = e.y, a = e.z, s = t.x, o = t.y, c = t.z;
    return this.x = r * c - a * o, this.y = a * s - n * c, this.z = n * o - r * s, this;
  }
  /**
   * Projects this vector onto the given one.
   *
   * @param {Vector3} v - The vector to project to.
   * @return {Vector3} A reference to this vector.
   */
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  /**
   * Projects this vector onto a plane by subtracting this
   * vector projected onto the plane's normal from this vector.
   *
   * @param {Vector3} planeNormal - The plane normal.
   * @return {Vector3} A reference to this vector.
   */
  projectOnPlane(e) {
    return ar.copy(this).projectOnVector(e), this.sub(ar);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(e) {
    return this.sub(ar.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector3} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ge(n, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector3} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {Spherical} s - The spherical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} phi - The phi angle in radians.
   * @param {number} theta - The theta angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {Cylindrical} c - The cylindrical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} theta - The theta angle in radians.
   * @param {number} y - The y value.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  /**
   * Sets the vector components to the scale elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  /**
   * Sets the vector components from the given Euler angles.
   *
   * @param {Euler} e - The Euler angles to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  /**
   * Sets the vector components from the RGB components of the
   * given color.
   *
   * @param {Color} c - The color to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector3} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`
   * and z value to be `array[ offset + 2 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector3} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector3} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  /**
   * Sets this vector to a uniformly random point on a unit sphere.
   *
   * @return {Vector3} A reference to this vector.
   */
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
};
$r.prototype.isVector3 = !0;
let k = $r;
const ar = /* @__PURE__ */ new k(), pa = /* @__PURE__ */ new $n(), Jr = class Jr {
  /**
   * Constructs a new 3x3 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   */
  constructor(e, t, n, r, a, s, o, c, l) {
    this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, a, s, o, c, l);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @return {Matrix3} A reference to this matrix.
   */
  set(e, t, n, r, a, s, o, c, l) {
    const f = this.elements;
    return f[0] = e, f[1] = r, f[2] = o, f[3] = t, f[4] = a, f[5] = c, f[6] = n, f[7] = s, f[8] = l, this;
  }
  /**
   * Sets this matrix to the 3x3 identity matrix.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix3} m - The matrix to copy.
   * @return {Matrix3} A reference to this matrix.
   */
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix3} A reference to this matrix.
   */
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  /**
   * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  /**
   * Post-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  /**
   * Pre-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  /**
   * Multiples the given 3x3 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix3} a - The first matrix.
   * @param {Matrix3} b - The second matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, a = this.elements, s = n[0], o = n[3], c = n[6], l = n[1], f = n[4], d = n[7], u = n[2], h = n[5], _ = n[8], M = r[0], g = r[3], p = r[6], A = r[1], R = r[4], S = r[7], y = r[2], T = r[5], w = r[8];
    return a[0] = s * M + o * A + c * y, a[3] = s * g + o * R + c * T, a[6] = s * p + o * S + c * w, a[1] = l * M + f * A + d * y, a[4] = l * g + f * R + d * T, a[7] = l * p + f * S + d * w, a[2] = u * M + h * A + _ * y, a[5] = u * g + h * R + _ * T, a[8] = u * p + h * S + _ * w, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], a = e[3], s = e[4], o = e[5], c = e[6], l = e[7], f = e[8];
    return t * s * f - t * o * l - n * a * f + n * o * c + r * a * l - r * s * c;
  }
  /**
   * Inverts this matrix, using the [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], a = e[3], s = e[4], o = e[5], c = e[6], l = e[7], f = e[8], d = f * s - o * l, u = o * c - f * a, h = l * a - s * c, _ = t * d + n * u + r * h;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const M = 1 / _;
    return e[0] = d * M, e[1] = (r * l - f * n) * M, e[2] = (o * n - r * s) * M, e[3] = u * M, e[4] = (f * t - r * c) * M, e[5] = (r * a - o * t) * M, e[6] = h * M, e[7] = (n * c - l * t) * M, e[8] = (s * t - n * a) * M, this;
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  /**
   * Computes the normal matrix which is the inverse transpose of the upper
   * left 3x3 portion of the given 4x4 matrix.
   *
   * @param {Matrix4} matrix4 - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  /**
   * Transposes this matrix into the supplied array, and returns itself unchanged.
   *
   * @param {Array<number>} r - An array to store the transposed matrix elements.
   * @return {Matrix3} A reference to this matrix.
   */
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  /**
   * Sets the UV transform matrix from offset, repeat, rotation, and center.
   *
   * @param {number} tx - Offset x.
   * @param {number} ty - Offset y.
   * @param {number} sx - Repeat x.
   * @param {number} sy - Repeat y.
   * @param {number} rotation - Rotation, in radians. Positive values rotate counterclockwise.
   * @param {number} cx - Center x of rotation.
   * @param {number} cy - Center y of rotation
   * @return {Matrix3} A reference to this matrix.
   */
  setUvTransform(e, t, n, r, a, s, o) {
    const c = Math.cos(a), l = Math.sin(a);
    return this.set(
      n * c,
      n * l,
      -n * (c * s + l * o) + s + e,
      -r * l,
      r * c,
      -r * (-l * s + c * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  /**
   * Scales this matrix with the given scalar values.
   *
   * @deprecated
   * @param {number} sx - The amount to scale in the X axis.
   * @param {number} sy - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  scale(e, t) {
    return Wn("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(sr.makeScale(e, t)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @deprecated
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(e) {
    return Wn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(sr.makeRotation(-e)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @deprecated
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(e, t) {
    return Wn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(sr.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  /**
   * Sets this matrix as a 2D translation transform.
   *
   * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D rotational transformation.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D scale transform.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix3} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix3} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix3} A clone of this instance.
   */
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
Jr.prototype.isMatrix3 = !0;
let Pe = Jr;
const sr = /* @__PURE__ */ new Pe(), ma = /* @__PURE__ */ new Pe().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), ga = /* @__PURE__ */ new Pe().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
function mo() {
  const i = {
    enabled: !0,
    workingColorSpace: fi,
    /**
     * Implementations of supported color spaces.
     *
     * Required:
     *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
     *	- whitePoint: reference white [ x y ]
     *	- transfer: transfer function (pre-defined)
     *	- toXYZ: Matrix3 RGB to XYZ transform
     *	- fromXYZ: Matrix3 XYZ to RGB transform
     *	- luminanceCoefficients: RGB luminance coefficients
     *
     * Optional:
     *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace, toneMappingMode: 'extended' | 'standard' }
     *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
     *
     * Reference:
     * - https://www.russellcottrell.com/photo/matrixCalculator.htm
     */
    spaces: {},
    convert: function(r, a, s) {
      return this.enabled === !1 || a === s || !a || !s || (this.spaces[a].transfer === Je && (r.r = rn(r.r), r.g = rn(r.g), r.b = rn(r.b)), this.spaces[a].primaries !== this.spaces[s].primaries && (r.applyMatrix3(this.spaces[a].toXYZ), r.applyMatrix3(this.spaces[s].fromXYZ)), this.spaces[s].transfer === Je && (r.r = Xn(r.r), r.g = Xn(r.g), r.b = Xn(r.b))), r;
    },
    workingToColorSpace: function(r, a) {
      return this.convert(r, this.workingColorSpace, a);
    },
    colorSpaceToWorking: function(r, a) {
      return this.convert(r, a, this.workingColorSpace);
    },
    getPrimaries: function(r) {
      return this.spaces[r].primaries;
    },
    getTransfer: function(r) {
      return r === "" ? Yi : this.spaces[r].transfer;
    },
    getToneMappingMode: function(r) {
      return this.spaces[r].outputColorSpaceConfig.toneMappingMode || "standard";
    },
    getLuminanceCoefficients: function(r, a = this.workingColorSpace) {
      return r.fromArray(this.spaces[a].luminanceCoefficients);
    },
    define: function(r) {
      Object.assign(this.spaces, r);
    },
    // Internal APIs
    _getMatrix: function(r, a, s) {
      return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ);
    },
    _getDrawingBufferColorSpace: function(r) {
      return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(r = this.workingColorSpace) {
      return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
    },
    // Deprecated
    fromWorkingColorSpace: function(r, a) {
      return Wn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(r, a);
    },
    toWorkingColorSpace: function(r, a) {
      return Wn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(r, a);
    }
  }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({
    [fi]: {
      primaries: e,
      whitePoint: n,
      transfer: Yi,
      toXYZ: ma,
      fromXYZ: ga,
      luminanceCoefficients: t,
      workingColorSpaceConfig: { unpackColorSpace: Ft },
      outputColorSpaceConfig: { drawingBufferColorSpace: Ft }
    },
    [Ft]: {
      primaries: e,
      whitePoint: n,
      transfer: Je,
      toXYZ: ma,
      fromXYZ: ga,
      luminanceCoefficients: t,
      outputColorSpaceConfig: { drawingBufferColorSpace: Ft }
    }
  }), i;
}
const ke = /* @__PURE__ */ mo();
function rn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Xn(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let An;
class go {
  /**
   * Returns a data URI containing a representation of the given image.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement)} image - The image object.
   * @param {string} [type='image/png'] - Indicates the image format.
   * @return {string} The data URI.
   */
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let n;
    if (e instanceof HTMLCanvasElement)
      n = e;
    else {
      An === void 0 && (An = Ki("canvas")), An.width = e.width, An.height = e.height;
      const r = An.getContext("2d");
      e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), n = An;
    }
    return n.toDataURL(t);
  }
  /**
   * Converts the given sRGB image data to linear color space.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement|ImageBitmap|Object)} image - The image object.
   * @return {HTMLCanvasElement|Object} The converted image.
   */
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Ki("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), a = r.data;
      for (let s = 0; s < a.length; s++)
        a[s] = rn(a[s] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(rn(t[n] / 255) * 255) : t[n] = rn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let _o = 0;
class zr {
  /**
   * Constructs a new texture source.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(e = null) {
    this.isTextureSource = !0, Object.defineProperty(this, "id", { value: _o++ }), this.uuid = Zn(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  /**
   * Returns the dimensions of the source into the given target vector.
   *
   * @param {(Vector2|Vector3)} target - The target object the result is written into.
   * @return {(Vector2|Vector3)} The dimensions of the source.
   */
  getSize(e) {
    const t = this.data;
    return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e;
  }
  /**
   * When the property is set to `true`, the engine allocates the memory
   * for the texture (if necessary) and triggers the actual texture upload
   * to the GPU next time the source is used.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  /**
   * Serializes the source into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized source.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let a;
      if (Array.isArray(r)) {
        a = [];
        for (let s = 0, o = r.length; s < o; s++)
          r[s].isDataTexture ? a.push(or(r[s].image)) : a.push(or(r[s]));
      } else
        a = or(r);
      n.url = a;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function or(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? go.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (Re("Texture: Unable to serialize Texture."), {});
}
let vo = 0;
const lr = /* @__PURE__ */ new k();
class bt extends yn {
  /**
   * Constructs a new texture.
   *
   * @param {?Object} [image=Texture.DEFAULT_IMAGE] - The image holding the texture data.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space.
   */
  constructor(e = bt.DEFAULT_IMAGE, t = bt.DEFAULT_MAPPING, n = 1001, r = 1001, a = 1006, s = 1008, o = 1023, c = 1009, l = bt.DEFAULT_ANISOTROPY, f = "") {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: vo++ }), this.uuid = Zn(), this.name = "", this.source = new zr(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = a, this.minFilter = s, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new De(0, 0), this.repeat = new De(1, 1), this.center = new De(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Pe(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = f, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0, this.normalized = !1;
  }
  /**
   * The width of the texture in pixels.
   */
  get width() {
    return this.source.getSize(lr).x;
  }
  /**
   * The height of the texture in pixels.
   */
  get height() {
    return this.source.getSize(lr).y;
  }
  /**
   * The depth of the texture in pixels.
   */
  get depth() {
    return this.source.getSize(lr).z;
  }
  /**
   * The image object holding the texture data.
   *
   * @type {?Object}
   */
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  /**
   * Updates the texture transformation matrix from the properties {@link Texture#offset},
   * {@link Texture#repeat}, {@link Texture#rotation}, and {@link Texture#center}.
   */
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  /**
   * Adds a range of data in the data texture to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Returns a new texture with copied values from this instance.
   *
   * @return {Texture} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given texture to this instance.
   *
   * @param {Texture} source - The texture to copy.
   * @return {Texture} A reference to this instance.
   */
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.normalized = e.normalized, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  /**
   * Sets this texture's properties based on `values`.
   * @param {Object} values - A container with texture parameters.
   */
  setValues(e) {
    for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === void 0) {
        Re(`Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n;
    }
  }
  /**
   * Serializes the texture into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized texture.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.7,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      normalized: this.normalized,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Texture#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Transforms the given uv vector with the textures uv transformation matrix.
   *
   * @param {Vector2} uv - The uv vector.
   * @return {Vector2} The transformed uv vector.
   */
  transformUv(e) {
    if (this.mapping !== 300) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  /**
   * Setting this property to `true` indicates the engine the texture
   * must be updated in the next render. This triggers a texture upload
   * to the GPU and ensures correct texture parameter configuration.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  /**
   * Setting this property to `true` indicates the engine the PMREM
   * must be regenerated.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
bt.DEFAULT_IMAGE = null;
bt.DEFAULT_MAPPING = 300;
bt.DEFAULT_ANISOTROPY = 1;
const Qr = class Qr {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.x = e, this.y = t, this.z = n, this.w = r;
  }
  /**
   * Alias for {@link Vector4#z}.
   *
   * @type {number}
   */
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  /**
   * Alias for {@link Vector4#w}.
   *
   * @type {number}
   */
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @param {number} w - The value of the w component.
   * @return {Vector4} A reference to this vector.
   */
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector4} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setZ(e) {
    return this.z = e, this;
  }
  /**
   * Sets the vector's w component to the given value
   *
   * @param {number} w - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setW(e) {
    return this.w = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @param {number} value - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("THREE.Vector4: index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("THREE.Vector4: index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector4} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3|Vector4} v - The vector to copy.
   * @return {Vector4} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector4} v - The vector to add.
   * @return {Vector4} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector4} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector4} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector4} v - The vector to subtract.
   * @return {Vector4} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector4} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector4} v - The vector to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  /**
   * Multiplies this vector with the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, a = this.w, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r + s[12] * a, this.y = s[1] * t + s[5] * n + s[9] * r + s[13] * a, this.z = s[2] * t + s[6] * n + s[10] * r + s[14] * a, this.w = s[3] * t + s[7] * n + s[11] * r + s[15] * a, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector4} v - The vector to divide.
   * @return {Vector4} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector4} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * Sets the x, y and z components of this
   * vector to the quaternion's axis and w to the angle.
   *
   * @param {Quaternion} q - The Quaternion to set.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  /**
   * Sets the x, y and z components of this
   * vector to the axis of rotation and w to the angle.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper left 3x3 matrix is a pure rotation matrix.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, a;
    const c = e.elements, l = c[0], f = c[4], d = c[8], u = c[1], h = c[5], _ = c[9], M = c[2], g = c[6], p = c[10];
    if (Math.abs(f - u) < 0.01 && Math.abs(d - M) < 0.01 && Math.abs(_ - g) < 0.01) {
      if (Math.abs(f + u) < 0.1 && Math.abs(d + M) < 0.1 && Math.abs(_ + g) < 0.1 && Math.abs(l + h + p - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const R = (l + 1) / 2, S = (h + 1) / 2, y = (p + 1) / 2, T = (f + u) / 4, w = (d + M) / 4, v = (_ + g) / 4;
      return R > S && R > y ? R < 0.01 ? (n = 0, r = 0.707106781, a = 0.707106781) : (n = Math.sqrt(R), r = T / n, a = w / n) : S > y ? S < 0.01 ? (n = 0.707106781, r = 0, a = 0.707106781) : (r = Math.sqrt(S), n = T / r, a = v / r) : y < 0.01 ? (n = 0.707106781, r = 0.707106781, a = 0) : (a = Math.sqrt(y), n = w / a, r = v / a), this.set(n, r, a, t), this;
    }
    let A = Math.sqrt((g - _) * (g - _) + (d - M) * (d - M) + (u - f) * (u - f));
    return Math.abs(A) < 1e-3 && (A = 1), this.x = (g - _) / A, this.y = (d - M) / A, this.z = (u - f) / A, this.w = Math.acos((l + h + p - 1) / 2), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the given vector's x, y, z or w
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w value is less than the given vector's x, y, z or w
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the max vector's x, y, z or w
   * value, it is replaced by the corresponding value.
   * If this vector's x, y, z or w value is less than the min vector's x, y, z or w value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector4} min - The minimum x, y and z values.
   * @param {Vector4} max - The maximum x, y and z values in the desired range.
   * @return {Vector4} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = Ge(this.x, e.x, t.x), this.y = Ge(this.y, e.y, t.y), this.z = Ge(this.z, e.z, t.z), this.w = Ge(this.w, e.w, t.w), this;
  }
  /**
   * If this vector's x, y, z or w values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y, z or w values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = Ge(this.x, e, t), this.y = Ge(this.y, e, t), this.z = Ge(this.z, e, t), this.w = Ge(this.w, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ge(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector4} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y, z = -z, w = -w.
   *
   * @return {Vector4} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector4} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0, 0) to (x, y, z, w). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0, 0) to (x, y, z, w).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector4} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector4} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector4} v1 - The first vector.
   * @param {Vector4} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector4} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`,
   * z value to be `array[ offset + 2 ]`, w value to be `array[ offset + 3 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector4} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector4} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
};
Qr.prototype.isVector4 = !0;
let ze = Qr;
class xo extends yn {
  /**
   * Render target options.
   *
   * @typedef {Object} RenderTarget~Options
   * @property {boolean} [generateMipmaps=false] - Whether to generate mipmaps or not.
   * @property {number} [magFilter=LinearFilter] - The mag filter.
   * @property {number} [minFilter=LinearFilter] - The min filter.
   * @property {number} [format=RGBAFormat] - The texture format.
   * @property {number} [type=UnsignedByteType] - The texture type.
   * @property {?string} [internalFormat=null] - The texture's internal format.
   * @property {number} [wrapS=ClampToEdgeWrapping] - The texture's uv wrapping mode.
   * @property {number} [wrapT=ClampToEdgeWrapping] - The texture's uv wrapping mode.
   * @property {number} [anisotropy=1] - The texture's anisotropy value.
   * @property {string} [colorSpace=NoColorSpace] - The texture's color space.
   * @property {boolean} [depthBuffer=true] - Whether to allocate a depth buffer or not.
   * @property {boolean} [stencilBuffer=false] - Whether to allocate a stencil buffer or not.
   * @property {boolean} [resolveColorBuffer=true] - Whether to resolve the color buffer or not. Only relevant for multisampled render targets.
   * @property {boolean} [resolveDepthBuffer=true] - Whether to resolve the depth buffer or not. Only relevant for multisampled render targets.
   * @property {boolean} [resolveStencilBuffer=true] - Whether to resolve the stencil buffer or not. Only relevant for multisampled render targets.
   * @property {boolean} [storeMultisampledColorBuffer=true] - Whether to store the multisampled color buffer or not. Setting to `false` saves memory bandwidth when the multisampled data are not needed after a render pass.
   * @property {boolean} [storeMultisampledDepthBuffer=true] - Whether to store the multisampled depth buffer or not. Setting to `false` saves memory bandwidth when the multisampled data are not needed after a render pass.
   * @property {boolean} [storeMultisampledStencilBuffer=true] - Whether to store the multisampled stencil buffer or not. Setting to `false` saves memory bandwidth when the multisampled data are not needed after a render pass.
   * @property {?Texture} [depthTexture=null] - Reference to a depth texture.
   * @property {number} [samples=0] - The MSAA samples count.
   * @property {number} [count=1] - Defines the number of color attachments . Must be at least `1`.
   * @property {number} [depth=1] - The texture depth.
   * @property {boolean} [multiview=false] - Whether this target is used for multiview rendering (WebGL OVR_multiview2 extension).
   * @property {boolean} [useArrayDepthTexture=false] - Whether to create the depth texture as an array texture for per-layer depth testing. This is separate from multiview so layered render targets can use array depth without the multiview extension.
   */
  /**
   * Constructs a new render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = 1, n = {}) {
    super(), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: 1006,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveColorBuffer: !0,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      storeMultisampledColorBuffer: !0,
      storeMultisampledDepthBuffer: !0,
      storeMultisampledStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1,
      depth: 1,
      multiview: !1,
      useArrayDepthTexture: !1
    }, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new ze(0, 0, e, t), this.scissorTest = !1, this.viewport = new ze(0, 0, e, t), this.textures = [];
    const r = { width: e, height: t, depth: n.depth }, a = new bt(r), s = n.count;
    for (let o = 0; o < s; o++)
      this.textures[o] = a.clone(), this.textures[o].isRenderTargetTexture = !0, this.textures[o].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveColorBuffer = n.resolveColorBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.storeMultisampledColorBuffer = n.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = n.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = n.storeMultisampledStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview, this.useArrayDepthTexture = n.useArrayDepthTexture;
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: 1006,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null
    };
    e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let n = 0; n < this.textures.length; n++)
      this.textures[n].setValues(t);
  }
  /**
   * The texture representing the default color attachment.
   *
   * @type {Texture}
   */
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && this._depthTexture.renderTarget === this && (this._depthTexture.renderTarget = null), e !== null && e.renderTarget === null && (e.renderTarget = this), this._depthTexture = e;
  }
  /**
   * Instead of saving the depth in a renderbuffer, a texture
   * can be used instead which is useful for further processing
   * e.g. in context of post-processing.
   *
   * @type {?DepthTexture}
   * @default null
   */
  get depthTexture() {
    return this._depthTexture;
  }
  /**
   * Sets the size of this render target.
   *
   * @param {number} width - The width.
   * @param {number} height - The height.
   * @param {number} [depth=1] - The depth.
   */
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let r = 0, a = this.textures.length; r < a; r++)
        this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n, this.textures[r].isData3DTexture !== !0 && (this.textures[r].isArrayTexture = this.textures[r].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  /**
   * Returns a new render target with copied values from this instance.
   *
   * @return {RenderTarget} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the settings of the given render target. This is a structural copy so
   * no resources are shared between render targets after the copy. That includes
   * all MRT textures and the depth texture.
   *
   * @param {RenderTarget} source - The render target to copy.
   * @return {RenderTarget} A reference to this instance.
   */
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, n = e.textures.length; t < n; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
      const r = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new zr(r);
    }
    if (this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveColorBuffer = e.resolveColorBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, this.storeMultisampledColorBuffer = e.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = e.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = e.storeMultisampledStencilBuffer, e.depthTexture !== null)
      if (e.depthTexture.renderTarget === e) {
        const t = e.depthTexture.clone();
        t.renderTarget = null, this.depthTexture = t;
      } else
        this.depthTexture = e.depthTexture;
    return this.samples = e.samples, this.multiview = e.multiview, this.useArrayDepthTexture = e.useArrayDepthTexture, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires RenderTarget#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class st extends xo {
  /**
   * Constructs a new 3D render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class ds extends bt {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  /**
   * Copies the values of the given texture to this instance.
   *
   * @param {DataArrayTexture} source - The texture to copy.
   * @return {DataArrayTexture} A reference to this instance.
   */
  copy(e) {
    return super.copy(e), this.wrapR = e.wrapR, this;
  }
  /**
   * Describes that a specific layer of the texture needs to be updated.
   * Normally when {@link Texture#needsUpdate} is set to `true`, the
   * entire data texture array is sent to the GPU. Marking specific
   * layers will only transmit subsets of all mipmaps associated with a
   * specific depth in the array which is often much more performant.
   *
   * @param {number} layerIndex - The layer index that should be updated.
   */
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  /**
   * Resets the layer updates registry.
   */
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class So extends bt {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
  /**
   * Copies the values of the given texture to this instance.
   *
   * @param {Data3DTexture} source - The texture to copy.
   * @return {Data3DTexture} A reference to this instance.
   */
  copy(e) {
    return super.copy(e), this.wrapR = e.wrapR, this;
  }
}
const $i = class $i {
  /**
   * Constructs a new 4x4 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   */
  constructor(e, t, n, r, a, s, o, c, l, f, d, u, h, _, M, g) {
    this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, a, s, o, c, l, f, d, u, h, _, M, g);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   * @return {Matrix4} A reference to this matrix.
   */
  set(e, t, n, r, a, s, o, c, l, f, d, u, h, _, M, g) {
    const p = this.elements;
    return p[0] = e, p[4] = t, p[8] = n, p[12] = r, p[1] = a, p[5] = s, p[9] = o, p[13] = c, p[2] = l, p[6] = f, p[10] = d, p[14] = u, p[3] = h, p[7] = _, p[11] = M, p[15] = g, this;
  }
  /**
   * Sets this matrix to the 4x4 identity matrix.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix4} A clone of this instance.
   */
  clone() {
    return new $i().fromArray(this.elements);
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix4} m - The matrix to copy.
   * @return {Matrix4} A reference to this matrix.
   */
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  /**
   * Copies the translation component of the given matrix
   * into this matrix's translation component.
   *
   * @param {Matrix4} m - The matrix to copy the translation component.
   * @return {Matrix4} A reference to this matrix.
   */
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  /**
   * Set the upper 3x3 elements of this matrix to the values of given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the basis vectors of this matrix into the three vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  extractBasis(e, t, n) {
    return this.determinantAffine() === 0 ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this) : (e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this);
  }
  /**
   * Sets the given basis vectors to this matrix.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the rotation component of the given matrix
   * into this matrix's rotation component.
   *
   * Note: This method does not support reflection matrices.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  extractRotation(e) {
    if (e.determinantAffine() === 0)
      return this.identity();
    const t = this.elements, n = e.elements, r = 1 / wn.setFromMatrixColumn(e, 0).length(), a = 1 / wn.setFromMatrixColumn(e, 1).length(), s = 1 / wn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = 0, t[8] = n[8] * s, t[9] = n[9] * s, t[10] = n[10] * s, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  /**
   * Sets the rotation component (the upper left 3x3 matrix) of this matrix to
   * the rotation specified by the given Euler angles. The rest of
   * the matrix is set to the identity. Depending on the {@link Euler#order},
   * there are six possible outcomes. See [this page](https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix)
   * for a complete list.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, a = e.z, s = Math.cos(n), o = Math.sin(n), c = Math.cos(r), l = Math.sin(r), f = Math.cos(a), d = Math.sin(a);
    if (e.order === "XYZ") {
      const u = s * f, h = s * d, _ = o * f, M = o * d;
      t[0] = c * f, t[4] = -c * d, t[8] = l, t[1] = h + _ * l, t[5] = u - M * l, t[9] = -o * c, t[2] = M - u * l, t[6] = _ + h * l, t[10] = s * c;
    } else if (e.order === "YXZ") {
      const u = c * f, h = c * d, _ = l * f, M = l * d;
      t[0] = u + M * o, t[4] = _ * o - h, t[8] = s * l, t[1] = s * d, t[5] = s * f, t[9] = -o, t[2] = h * o - _, t[6] = M + u * o, t[10] = s * c;
    } else if (e.order === "ZXY") {
      const u = c * f, h = c * d, _ = l * f, M = l * d;
      t[0] = u - M * o, t[4] = -s * d, t[8] = _ + h * o, t[1] = h + _ * o, t[5] = s * f, t[9] = M - u * o, t[2] = -s * l, t[6] = o, t[10] = s * c;
    } else if (e.order === "ZYX") {
      const u = s * f, h = s * d, _ = o * f, M = o * d;
      t[0] = c * f, t[4] = _ * l - h, t[8] = u * l + M, t[1] = c * d, t[5] = M * l + u, t[9] = h * l - _, t[2] = -l, t[6] = o * c, t[10] = s * c;
    } else if (e.order === "YZX") {
      const u = s * c, h = s * l, _ = o * c, M = o * l;
      t[0] = c * f, t[4] = M - u * d, t[8] = _ * d + h, t[1] = d, t[5] = s * f, t[9] = -o * f, t[2] = -l * f, t[6] = h * d + _, t[10] = u - M * d;
    } else if (e.order === "XZY") {
      const u = s * c, h = s * l, _ = o * c, M = o * l;
      t[0] = c * f, t[4] = -d, t[8] = l * f, t[1] = u * d + M, t[5] = s * f, t[9] = h * d - _, t[2] = _ * d - h, t[6] = o * f, t[10] = M * d + u;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  /**
   * Sets the rotation component of this matrix to the rotation specified by
   * the given Quaternion as outlined [here](https://en.wikipedia.org/wiki/Rotation_matrix#Quaternion)
   * The rest of the matrix is set to the identity.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromQuaternion(e) {
    return this.compose(Mo, e, Eo);
  }
  /**
   * Sets the rotation component of the transformation matrix, looking from `eye` towards
   * `target`, and oriented by the up-direction.
   *
   * @param {Vector3} eye - The eye vector.
   * @param {Vector3} target - The target vector.
   * @param {Vector3} up - The up vector.
   * @return {Matrix4} A reference to this matrix.
   */
  lookAt(e, t, n) {
    const r = this.elements;
    return wt.subVectors(e, t), wt.lengthSq() === 0 && (wt.z = 1), wt.normalize(), ln.crossVectors(n, wt), ln.lengthSq() === 0 && (Math.abs(n.z) === 1 ? wt.x += 1e-4 : wt.z += 1e-4, wt.normalize(), ln.crossVectors(n, wt)), ln.normalize(), _i.crossVectors(wt, ln), r[0] = ln.x, r[4] = _i.x, r[8] = wt.x, r[1] = ln.y, r[5] = _i.y, r[9] = wt.y, r[2] = ln.z, r[6] = _i.z, r[10] = wt.z, this;
  }
  /**
   * Post-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  /**
   * Pre-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  /**
   * Multiples the given 4x4 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix4} a - The first matrix.
   * @param {Matrix4} b - The second matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, a = this.elements, s = n[0], o = n[4], c = n[8], l = n[12], f = n[1], d = n[5], u = n[9], h = n[13], _ = n[2], M = n[6], g = n[10], p = n[14], A = n[3], R = n[7], S = n[11], y = n[15], T = r[0], w = r[4], v = r[8], b = r[12], L = r[1], F = r[5], B = r[9], V = r[13], I = r[2], G = r[6], J = r[10], W = r[14], ne = r[3], X = r[7], Z = r[11], ee = r[15];
    return a[0] = s * T + o * L + c * I + l * ne, a[4] = s * w + o * F + c * G + l * X, a[8] = s * v + o * B + c * J + l * Z, a[12] = s * b + o * V + c * W + l * ee, a[1] = f * T + d * L + u * I + h * ne, a[5] = f * w + d * F + u * G + h * X, a[9] = f * v + d * B + u * J + h * Z, a[13] = f * b + d * V + u * W + h * ee, a[2] = _ * T + M * L + g * I + p * ne, a[6] = _ * w + M * F + g * G + p * X, a[10] = _ * v + M * B + g * J + p * Z, a[14] = _ * b + M * V + g * W + p * ee, a[3] = A * T + R * L + S * I + y * ne, a[7] = A * w + R * F + S * G + y * X, a[11] = A * v + R * B + S * J + y * Z, a[15] = A * b + R * V + S * W + y * ee, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], a = e[12], s = e[1], o = e[5], c = e[9], l = e[13], f = e[2], d = e[6], u = e[10], h = e[14], _ = e[3], M = e[7], g = e[11], p = e[15], A = c * h - l * u, R = o * h - l * d, S = o * u - c * d, y = s * h - l * f, T = s * u - c * f, w = s * d - o * f;
    return t * (M * A - g * R + p * S) - n * (_ * A - g * y + p * T) + r * (_ * R - M * y + p * w) - a * (_ * S - M * T + g * w);
  }
  /**
   * Computes and returns the determinant of the 4x4 matrix, but assumes the
   * matrix is affine, saving some computations.
   *
   * For affine matrices (like an object's world matrix), this value equals the
   * full 4x4 {@link Matrix4#determinant} but is cheaper to compute.
   *
   * Assumes the bottom row is [0, 0, 0, 1].
   *
   * @return {number} The determinant of the matrix.
   */
  determinantAffine() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], a = e[1], s = e[5], o = e[9], c = e[2], l = e[6], f = e[10];
    return t * (s * f - o * l) - n * (a * f - o * c) + r * (a * l - s * c);
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  /**
   * Sets the position component for this matrix from the given vector,
   * without affecting the rest of the matrix.
   *
   * @param {number|Vector3} x - The x component of the vector or alternatively the vector object.
   * @param {number} y - The y component of the vector.
   * @param {number} z - The z component of the vector.
   * @return {Matrix4} A reference to this matrix.
   */
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  /**
   * Inverts this matrix, using the [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], a = e[3], s = e[4], o = e[5], c = e[6], l = e[7], f = e[8], d = e[9], u = e[10], h = e[11], _ = e[12], M = e[13], g = e[14], p = e[15], A = t * o - n * s, R = t * c - r * s, S = t * l - a * s, y = n * c - r * o, T = n * l - a * o, w = r * l - a * c, v = f * M - d * _, b = f * g - u * _, L = f * p - h * _, F = d * g - u * M, B = d * p - h * M, V = u * p - h * g, I = A * V - R * B + S * F + y * L - T * b + w * v;
    if (I === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const G = 1 / I;
    return e[0] = (o * V - c * B + l * F) * G, e[1] = (r * B - n * V - a * F) * G, e[2] = (M * w - g * T + p * y) * G, e[3] = (u * T - d * w - h * y) * G, e[4] = (c * L - s * V - l * b) * G, e[5] = (t * V - r * L + a * b) * G, e[6] = (g * S - _ * w - p * R) * G, e[7] = (f * w - u * S + h * R) * G, e[8] = (s * B - o * L + l * v) * G, e[9] = (n * L - t * B - a * v) * G, e[10] = (_ * T - M * S + p * A) * G, e[11] = (d * S - f * T - h * A) * G, e[12] = (o * b - s * F - c * v) * G, e[13] = (t * F - n * b + r * v) * G, e[14] = (M * R - _ * y - g * A) * G, e[15] = (f * y - d * R + u * A) * G, this;
  }
  /**
   * Scales each of the first three columns of this matrix by the corresponding component of the given vector.
   *
   * @param {Vector3} v - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, a = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= a, t[1] *= n, t[5] *= r, t[9] *= a, t[2] *= n, t[6] *= r, t[10] *= a, t[3] *= n, t[7] *= r, t[11] *= a, this;
  }
  /**
   * Gets the maximum scale value of the three axes.
   *
   * @return {number} The maximum scale.
   */
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  /**
   * Sets this matrix as a translation transform from the given vector.
   *
   * @param {number|Vector3} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @param {number} z - The amount to translate in the z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the X axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Y axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Z axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the given axis by
   * the given angle.
   *
   * @param {Vector3} axis - The normalized rotation axis.
   * @param {number} angle - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), a = 1 - n, s = e.x, o = e.y, c = e.z, l = a * s, f = a * o;
    return this.set(
      l * s + n,
      l * o - r * c,
      l * c + r * o,
      0,
      l * o + r * c,
      f * o + n,
      f * c - r * s,
      0,
      l * c - r * o,
      f * c + r * s,
      a * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a scale transformation.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @param {number} z - The amount to scale in the Z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a shear transformation.
   *
   * @param {number} xy - The amount to shear X by Y.
   * @param {number} xz - The amount to shear X by Z.
   * @param {number} yx - The amount to shear Y by X.
   * @param {number} yz - The amount to shear Y by Z.
   * @param {number} zx - The amount to shear Z by X.
   * @param {number} zy - The amount to shear Z by Y.
   * @return {Matrix4} A reference to this matrix.
   */
  makeShear(e, t, n, r, a, s) {
    return this.set(
      1,
      n,
      a,
      0,
      e,
      1,
      s,
      0,
      t,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix to the transformation composed of the given position,
   * rotation (Quaternion) and scale.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  compose(e, t, n) {
    const r = this.elements, a = t._x, s = t._y, o = t._z, c = t._w, l = a + a, f = s + s, d = o + o, u = a * l, h = a * f, _ = a * d, M = s * f, g = s * d, p = o * d, A = c * l, R = c * f, S = c * d, y = n.x, T = n.y, w = n.z;
    return r[0] = (1 - (M + p)) * y, r[1] = (h + S) * y, r[2] = (_ - R) * y, r[3] = 0, r[4] = (h - S) * T, r[5] = (1 - (u + p)) * T, r[6] = (g + A) * T, r[7] = 0, r[8] = (_ + R) * w, r[9] = (g - A) * w, r[10] = (1 - (u + M)) * w, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  /**
   * Decomposes this matrix into its position, rotation and scale components
   * and provides the result in the given objects.
   *
   * Note: Not all matrices are decomposable in this way. For example, if an
   * object has a non-uniformly scaled parent, then the object's world matrix
   * may not be decomposable, and this method may not be appropriate.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  decompose(e, t, n) {
    const r = this.elements;
    e.x = r[12], e.y = r[13], e.z = r[14];
    const a = this.determinantAffine();
    if (a === 0)
      return n.set(1, 1, 1), t.identity(), this;
    let s = wn.set(r[0], r[1], r[2]).length();
    const o = wn.set(r[4], r[5], r[6]).length(), c = wn.set(r[8], r[9], r[10]).length();
    a < 0 && (s = -s), Bt.copy(this);
    const l = 1 / s, f = 1 / o, d = 1 / c;
    return Bt.elements[0] *= l, Bt.elements[1] *= l, Bt.elements[2] *= l, Bt.elements[4] *= f, Bt.elements[5] *= f, Bt.elements[6] *= f, Bt.elements[8] *= d, Bt.elements[9] *= d, Bt.elements[10] *= d, t.setFromRotationMatrix(Bt), n.x = s, n.y = o, n.z = c, this;
  }
  /**
  	 * Creates a perspective projection matrix. This is used internally by
  	 * {@link PerspectiveCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makePerspective(e, t, n, r, a, s, o = 2e3, c = !1) {
    const l = this.elements, f = 2 * a / (t - e), d = 2 * a / (n - r), u = (t + e) / (t - e), h = (n + r) / (n - r);
    let _, M;
    if (c)
      _ = a / (s - a), M = s * a / (s - a);
    else if (o === 2e3)
      _ = -(s + a) / (s - a), M = -2 * s * a / (s - a);
    else if (o === 2001)
      _ = -s / (s - a), M = -s * a / (s - a);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = f, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = d, l[9] = h, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = _, l[14] = M, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  /**
  	 * Creates a orthographic projection matrix. This is used internally by
  	 * {@link OrthographicCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makeOrthographic(e, t, n, r, a, s, o = 2e3, c = !1) {
    const l = this.elements, f = 2 / (t - e), d = 2 / (n - r), u = -(t + e) / (t - e), h = -(n + r) / (n - r);
    let _, M;
    if (c)
      _ = 1 / (s - a), M = s / (s - a);
    else if (o === 2e3)
      _ = -2 / (s - a), M = -(s + a) / (s - a);
    else if (o === 2001)
      _ = -1 / (s - a), M = -a / (s - a);
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = f, l[4] = 0, l[8] = 0, l[12] = u, l[1] = 0, l[5] = d, l[9] = 0, l[13] = h, l[2] = 0, l[6] = 0, l[10] = _, l[14] = M, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix4} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix4} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
};
$i.prototype.isMatrix4 = !0;
let lt = $i;
const wn = /* @__PURE__ */ new k(), Bt = /* @__PURE__ */ new lt(), Mo = /* @__PURE__ */ new k(0, 0, 0), Eo = /* @__PURE__ */ new k(1, 1, 1), ln = /* @__PURE__ */ new k(), _i = /* @__PURE__ */ new k(), wt = /* @__PURE__ */ new k(), _a = /* @__PURE__ */ new lt(), va = /* @__PURE__ */ new $n();
class En {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(e = 0, t = 0, n = 0, r = En.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r;
  }
  /**
   * The angle of the x axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  /**
   * The angle of the y axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  /**
   * The angle of the z axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  /**
   * A string representing the order that the rotations are applied.
   *
   * @type {string}
   * @default 'XYZ'
   */
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  /**
   * Sets the Euler components.
   *
   * @param {number} x - The angle of the x axis in radians.
   * @param {number} y - The angle of the y axis in radians.
   * @param {number} z - The angle of the z axis in radians.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  /**
   * Returns a new Euler instance with copied values from this instance.
   *
   * @return {Euler} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  /**
   * Copies the values of the given Euler instance to this instance.
   *
   * @param {Euler} euler - The Euler instance to copy.
   * @return {Euler} A reference to this Euler instance.
   */
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a pure rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements, a = r[0], s = r[4], o = r[8], c = r[1], l = r[5], f = r[9], d = r[2], u = r[6], h = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Ge(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-f, h), this._z = Math.atan2(-s, a)) : (this._x = Math.atan2(u, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ge(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(o, h), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, a), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ge(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-d, h), this._z = Math.atan2(-s, l)) : (this._y = 0, this._z = Math.atan2(c, a));
        break;
      case "ZYX":
        this._y = Math.asin(-Ge(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(u, h), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-s, l));
        break;
      case "YZX":
        this._z = Math.asin(Ge(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-f, l), this._y = Math.atan2(-d, a)) : (this._x = 0, this._y = Math.atan2(o, h));
        break;
      case "XZY":
        this._z = Math.asin(-Ge(s, -1, 1)), Math.abs(s) < 0.9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(o, a)) : (this._x = Math.atan2(-f, h), this._y = 0);
        break;
      default:
        Re("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a normalized quaternion.
   *
   * @param {Quaternion} q - A normalized Quaternion.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromQuaternion(e, t, n) {
    return _a.makeRotationFromQuaternion(e), this.setFromRotationMatrix(_a, t, n);
  }
  /**
   * Sets the angles of this Euler instance from the given vector.
   *
   * @param {Vector3} v - The vector.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  /**
   * Resets the euler angle with a new order by creating a quaternion from this
   * euler angle and then setting this euler angle with the quaternion and the
   * new order.
   *
   * Warning: This discards revolution information.
   *
   * @param {string} [newOrder] - A string representing the new order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  reorder(e) {
    return va.setFromEuler(this), this.setFromQuaternion(va, e);
  }
  /**
   * Returns `true` if this Euler instance is equal with the given one.
   *
   * @param {Euler} euler - The Euler instance to test for equality.
   * @return {boolean} Whether this Euler instance is equal with the given one.
   */
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  /**
   * Sets this Euler instance's components to values from the given array. The first three
   * entries of the array are assign to the x,y and z components. An optional fourth entry
   * defines the Euler order.
   *
   * @param {Array<number,number,number,?string>} array - An array holding the Euler component values.
   * @return {Euler} A reference to this Euler instance.
   */
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this Euler instance to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number,number,number,string>} [array=[]] - The target array holding the Euler components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number,number,number,string>} The Euler components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
En.DEFAULT_ORDER = "XYZ";
class hs {
  /**
   * Constructs a new layers instance, with membership
   * initially set to layer `0`.
   */
  constructor() {
    this.mask = 1;
  }
  /**
   * Sets membership to the given layer, and remove membership all other layers.
   *
   * @param {number} layer - The layer to set.
   */
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  /**
   * Adds membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  /**
   * Adds membership to all layers.
   */
  enableAll() {
    this.mask = -1;
  }
  /**
   * Toggles the membership of the given layer.
   *
   * @param {number} layer - The layer to toggle.
   */
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  /**
   * Removes membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  /**
   * Removes the membership from all layers.
   */
  disableAll() {
    this.mask = 0;
  }
  /**
   * Returns `true` if this and the given layers object have at least one
   * layer in common.
   *
   * @param {Layers} layers - The layers to test.
   * @return {boolean } Whether this and the given layers object have at least one layer in common or not.
   */
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  /**
   * Returns `true` if the given layer is enabled.
   *
   * @param {number} layer - The layer to test.
   * @return {boolean } Whether the given layer is enabled or not.
   */
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let yo = 0;
const xa = /* @__PURE__ */ new k(), Rn = /* @__PURE__ */ new $n(), $t = /* @__PURE__ */ new lt(), vi = /* @__PURE__ */ new k(), jn = /* @__PURE__ */ new k(), To = /* @__PURE__ */ new k(), bo = /* @__PURE__ */ new $n(), Sa = /* @__PURE__ */ new k(1, 0, 0), Ma = /* @__PURE__ */ new k(0, 1, 0), Ea = /* @__PURE__ */ new k(0, 0, 1), ya = { type: "added" }, Ao = { type: "removed" }, Cn = { type: "childadded", child: null }, cr = { type: "childremoved", child: null };
class Ct extends yn {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: yo++ }), this.uuid = Zn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ct.DEFAULT_UP.clone();
    const e = new k(), t = new En(), n = new $n(), r = new k(1, 1, 1);
    function a() {
      n.setFromEuler(t, !1);
    }
    function s() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(a), n._onChange(s), Object.defineProperties(this, {
      /**
       * Represents the object's local position.
       *
       * @name Object3D#position
       * @type {Vector3}
       * @default (0,0,0)
       */
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      /**
       * Represents the object's local rotation as Euler angles, in radians.
       *
       * @name Object3D#rotation
       * @type {Euler}
       * @default (0,0,0)
       */
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      /**
       * Represents the object's local rotation as Quaternions.
       *
       * @name Object3D#quaternion
       * @type {Quaternion}
       */
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      /**
       * Represents the object's local scale.
       *
       * @name Object3D#scale
       * @type {Vector3}
       * @default (1,1,1)
       */
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      /**
       * Represents the object's model-view matrix.
       *
       * @name Object3D#modelViewMatrix
       * @type {Matrix4}
       */
      modelViewMatrix: {
        value: new lt()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new Pe()
      }
    }), this.matrix = new lt(), this.matrixWorld = new lt(), this.matrixAutoUpdate = Ct.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new hs(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeShadow() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onAfterShadow() {
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onAfterRender() {
  }
  /**
   * Applies the given transformation matrix to the object and updates the object's position,
   * rotation and scale.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   */
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  /**
   * Applies a rotation represented by given the quaternion to the 3D object.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Object3D} A reference to this instance.
   */
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  /**
   * Sets the given rotation represented as an axis/angle couple to the 3D object.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   */
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  /**
   * Sets the given rotation represented as Euler angles to the 3D object.
   *
   * @param {Euler} euler - The Euler angles.
   */
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  /**
   * Sets the given rotation represented as rotation matrix to the 3D object.
   *
   * @param {Matrix4} m - Although a 4x4 matrix is expected, the upper 3x3 portion must be
   * a pure rotation matrix (i.e, unscaled).
   */
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  /**
   * Sets the given rotation represented as a Quaternion to the 3D object.
   *
   * @param {Quaternion} q - The Quaternion
   */
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  /**
   * Rotates the 3D object along an axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnAxis(e, t) {
    return Rn.setFromAxisAngle(e, t), this.quaternion.multiply(Rn), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(e, t) {
    return Rn.setFromAxisAngle(e, t), this.quaternion.premultiply(Rn), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(e) {
    return this.rotateOnAxis(Sa, e);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(e) {
    return this.rotateOnAxis(Ma, e);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(e) {
    return this.rotateOnAxis(Ea, e);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(e, t) {
    return xa.copy(e).applyQuaternion(this.quaternion), this.position.add(xa.multiplyScalar(t)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(e) {
    return this.translateOnAxis(Sa, e);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(e) {
    return this.translateOnAxis(Ma, e);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(e) {
    return this.translateOnAxis(Ea, e);
  }
  /**
   * Converts the given vector from this 3D object's local space to world space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  /**
   * Converts the given vector from this 3D object's world space to local space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4($t.copy(this.matrixWorld).invert());
  }
  /**
   * Rotates the object to face a point in world space.
   *
   * This method does not support objects having non-uniformly-scaled parent(s).
   *
   * @param {number|Vector3} x - The x coordinate in world space. Alternatively, a vector representing a position in world space
   * @param {number} [y] - The y coordinate in world space.
   * @param {number} [z] - The z coordinate in world space.
   */
  lookAt(e, t, n) {
    e.isVector3 ? vi.copy(e) : vi.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), jn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? $t.lookAt(jn, vi, this.up) : $t.lookAt(vi, jn, this.up), this.quaternion.setFromRotationMatrix($t), r && ($t.extractRotation(r.matrixWorld), Rn.setFromRotationMatrix($t), this.quaternion.premultiply(Rn.invert()));
  }
  /**
   * Adds the given 3D object as a child to this 3D object. An arbitrary number of
   * objects may be added. Any current parent on an object passed in here will be
   * removed, since an object can have at most one parent.
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to add.
   * @return {Object3D} A reference to this instance.
   */
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (qe("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(ya), Cn.child = e, this.dispatchEvent(Cn), Cn.child = null) : qe("Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  /**
   * Removes the given 3D object as child from this 3D object.
   * An arbitrary number of objects may be removed.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @param {Object3D} object - The 3D object to remove.
   * @return {Object3D} A reference to this instance.
   */
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ao), cr.child = e, this.dispatchEvent(cr), cr.child = null), this;
  }
  /**
   * Removes this 3D object from its current parent.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  /**
   * Removes all child objects.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  clear() {
    return this.remove(...this.children);
  }
  /**
   * Adds the given 3D object as a child of this 3D object, while maintaining the object's world
   * transform. This method does not support scene graphs having non-uniformly-scaled nodes(s).
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to attach.
   * @return {Object3D} A reference to this instance.
   */
  attach(e) {
    return this.updateWorldMatrix(!0, !1), $t.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), $t.multiply(e.parent.matrixWorld)), e.applyMatrix4($t), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(ya), Cn.child = e, this.dispatchEvent(Cn), Cn.child = null, this;
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching ID.
   *
   * @param {number} id - The id.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching name.
   *
   * @param {string} name - The name.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const s = this.children[n].getObjectByProperty(e, t);
      if (s !== void 0)
        return s;
    }
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns all 3D objects with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @param {Array<Object3D>} result - The method stores the result in this array.
   * @return {Array<Object3D>} The found 3D objects.
   */
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let a = 0, s = r.length; a < s; a++)
      r[a].getObjectsByProperty(e, t, n);
    return n;
  }
  /**
   * Returns a vector representing the position of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's position in world space.
   */
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  /**
   * Returns a Quaternion representing the position of the 3D object in world space.
   *
   * @param {Quaternion} target - The target Quaternion the result is stored to.
   * @return {Quaternion} The 3D object's rotation in world space.
   */
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(jn, e, To), e;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(jn, bo, e), e;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  /**
   * Abstract method to get intersections between a casted ray and this
   * 3D object. Renderable 3D objects such as {@link Mesh}, {@link Line} or {@link Points}
   * implement this method in order to use raycasting.
   *
   * @abstract
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - An array holding the result of the method.
   */
  raycast() {
  }
  /**
   * Abstract method to test whether this 3D object intersects the given frustum.
   * Renderable 3D objects such as {@link Mesh}, {@link Line} or {@link Points}
   * implement this method in order to use frustum culling.
   *
   * @abstract
   * @param {Frustum|FrustumArray} frustum - The frustum to test.
   * @return {boolean|undefined} Whether this 3D object intersects the given frustum or not.
   */
  intersectsFrustum() {
  }
  /**
   * Executes the callback on this 3D object and all descendants.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverse(e);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for visible 3D objects.
   * Descendants of invisible 3D objects are not traversed.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverseVisible(e);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for all ancestors.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  /**
   * Updates the transformation matrix in local space by computing it from the current
   * position, rotation and scale values.
   */
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    const e = this.pivot;
    if (e !== null) {
      const t = e.x, n = e.y, r = e.z, a = this.matrix.elements;
      a[12] += t - a[0] * t - a[4] * n - a[8] * r, a[13] += n - a[1] * t - a[5] * n - a[9] * r, a[14] += r - a[2] * t - a[6] * n - a[10] * r;
    }
    this.matrixWorldNeedsUpdate = !0;
  }
  /**
   * Updates the transformation matrix in world space of this 3D objects and its descendants.
   *
   * To ensure correct results, this method also recomputes the 3D object's transformation matrix in
   * local space. The computation of the local and world matrix can be controlled with the
   * {@link Object3D#matrixAutoUpdate} and {@link Object3D#matrixWorldAutoUpdate} flags which are both
   * `true` by default.  Set these flags to `false` if you need more control over the update matrix process.
   *
   * @param {boolean} [force=false] - When set to `true`, a recomputation of world matrices is forced even
   * when {@link Object3D#matrixWorldNeedsUpdate} is `false`.
   */
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].updateMatrixWorld(e);
  }
  /**
   * An alternative version of {@link Object3D#updateMatrixWorld} with more control over the
   * update of ancestor and descendant nodes.
   *
   * @param {boolean} [updateParents=false] Whether ancestor nodes should be updated or not.
   * @param {boolean} [updateChildren=false] Whether descendant nodes should be updated or not.
   * @param {boolean} [force=false] - When set to `true`, a recomputation of world matrices is forced even
   * when {@link Object3D#matrixWorldNeedsUpdate} is `false`.
   */
  updateWorldMatrix(e, t, n = !1) {
    const r = this.parent;
    if (e === !0 && r !== null && r.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || n) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, n = !0), t === !0) {
      const a = this.children;
      for (let s = 0, o = a.length; s < o; s++)
        a[s].updateWorldMatrix(!1, !0, n);
    }
  }
  /**
   * Serializes the 3D object into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized 3D object.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.7,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, r.name = this.name, r.castShadow = this.castShadow, r.receiveShadow = this.receiveShadow, r.visible = this.visible, r.frustumCulled = this.frustumCulled, r.renderOrder = this.renderOrder, r.static = this.static, r.matrixAutoUpdate = this.matrixAutoUpdate, Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.pivot !== null && (r.pivot = this.pivot.toArray()), this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((o) => ({
      ...o,
      boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
      boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0
    })), r.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
    function a(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = a(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, f = c.length; l < f; l++) {
            const d = c[l];
            a(e.shapes, d);
          }
        else
          a(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (a(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(a(e.materials, this.material[c]));
        r.material = o;
      } else
        r.material = a(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        r.animations.push(a(e.animations, c));
      }
    }
    if (t) {
      const o = s(e.geometries), c = s(e.materials), l = s(e.textures), f = s(e.images), d = s(e.shapes), u = s(e.skeletons), h = s(e.animations), _ = s(e.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), f.length > 0 && (n.images = f), d.length > 0 && (n.shapes = d), u.length > 0 && (n.skeletons = u), h.length > 0 && (n.animations = h), _.length > 0 && (n.nodes = _);
    }
    return n.object = r, n;
    function s(o) {
      const c = [];
      for (const l in o) {
        const f = o[l];
        delete f.metadata, c.push(f);
      }
      return c;
    }
  }
  /**
   * Returns a new 3D object with copied values from this instance.
   *
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are also cloned.
   * @return {Object3D} A clone of this instance.
   */
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  /**
   * Copies the values of the given 3D object to this instance.
   *
   * @param {Object3D} source - The 3D object to copy.
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are cloned.
   * @return {Object3D} A reference to this instance.
   */
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.pivot = e.pivot !== null ? e.pivot.clone() : null, this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * Geometries, materials and textures are potentially shared with other
   * 3D objects and must be disposed of separately.
   *
   * @fires Object3D#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
Ct.DEFAULT_UP = /* @__PURE__ */ new k(0, 1, 0);
Ct.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
class xi extends Ct {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const wo = { type: "move" };
class ur {
  /**
   * Constructs a new XR controller.
   */
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  /**
   * Returns a group representing the hand space of the XR controller.
   *
   * @return {Group} A group representing the hand space of the XR controller.
   */
  getHandSpace() {
    return this._hand === null && (this._hand = new xi(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new xi(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new k(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new k()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new xi(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new k(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new k(), this._grip.eventsEnabled = !1), this._grip;
  }
  /**
   * Dispatches the given event to the groups representing
   * the different coordinate spaces of the XR controller.
   *
   * @param {Object} event - The event to dispatch.
   * @return {WebXRController} A reference to this instance.
   */
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  /**
   * Connects the controller with the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  /**
   * Disconnects the controller from the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  /**
   * Updates the controller with the given input source, XR frame and reference space.
   * This updates the transformations of the groups that represent the different
   * coordinate systems of the controller.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @param {XRFrame} frame - The XR frame.
   * @param {XRReferenceSpace} referenceSpace - The reference space.
   * @return {WebXRController} A reference to this instance.
   */
  update(e, t, n) {
    let r = null, a = null, s = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        s = !0;
        for (const M of e.hand.values()) {
          const g = t.getJointPose(M, n), p = this._getHandJoint(l, M);
          g !== null && (p.matrix.fromArray(g.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = g.radius), p.visible = g !== null;
        }
        const f = l.joints["index-finger-tip"], d = l.joints["thumb-tip"], u = f.position.distanceTo(d.position), h = 0.02, _ = 5e-3;
        l.inputState.pinching && u > h + _ ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && u <= h - _ && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (a = t.getPose(e.gripSpace, n), a !== null && (c.matrix.fromArray(a.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, a.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(a.linearVelocity)) : c.hasLinearVelocity = !1, a.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(a.angularVelocity)) : c.hasAngularVelocity = !1, c.eventsEnabled && c.dispatchEvent({
          type: "gripUpdated",
          data: e,
          target: this
        })));
      o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && a !== null && (r = a), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(wo)));
    }
    return o !== null && (o.visible = r !== null), c !== null && (c.visible = a !== null), l !== null && (l.visible = s !== null), this;
  }
  /**
   * Returns a group representing the hand joint for the given input joint.
   *
   * @private
   * @param {Group} hand - The group representing the hand space.
   * @param {XRJointSpace} inputjoint - The hand joint data.
   * @return {Group} A group representing the hand joint for the given input joint.
   */
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new xi();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const ps = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, cn = { h: 0, s: 0, l: 0 }, Si = { h: 0, s: 0, l: 0 };
function fr(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class We {
  /**
   * Constructs a new color.
   *
   * Note that standard method of specifying color in three.js is with a hexadecimal triplet,
   * and that method is used throughout the rest of the documentation.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   */
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  /**
   * Sets the colors's components from the given values.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   * @return {Color} A reference to this color.
   */
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  /**
   * Sets the colors's components to the given scalar value.
   *
   * @param {number} scalar - The scalar value.
   * @return {Color} A reference to this color.
   */
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  /**
   * Sets this color from a hexadecimal value.
   *
   * @param {number} hex - The hexadecimal value.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHex(e, t = Ft) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, ke.colorSpaceToWorking(this, t), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} r - Red channel value between `0.0` and `1.0`.
   * @param {number} g - Green channel value between `0.0` and `1.0`.
   * @param {number} b - Blue channel value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setRGB(e, t, n, r = ke.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, ke.colorSpaceToWorking(this, r), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHSL(e, t, n, r = ke.workingColorSpace) {
    if (e = kr(e, 1), t = Ge(t, 0, 1), n = Ge(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const a = n <= 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - a;
      this.r = fr(s, a, e + 1 / 3), this.g = fr(s, a, e), this.b = fr(s, a, e - 1 / 3);
    }
    return ke.colorSpaceToWorking(this, r), this;
  }
  /**
   * Sets this color from a CSS-style string. For example, `rgb(250, 0,0)`,
   * `rgb(100%, 0%, 0%)`, `hsl(0, 100%, 50%)`, `#ff0000`, `#f00`, or `red` ( or
   * any [X11 color name](https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart) -
   * all 140 color names are supported).
   *
   * @param {string} style - Color as a CSS-style string.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setStyle(e, t = Ft) {
    function n(a) {
      a !== void 0 && parseFloat(a) < 1 && Re("Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let a;
      const s = r[1], o = r[2];
      switch (s) {
        case "rgb":
        case "rgba":
          if (a = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(a[4]), this.setRGB(
              Math.min(255, parseInt(a[1], 10)) / 255,
              Math.min(255, parseInt(a[2], 10)) / 255,
              Math.min(255, parseInt(a[3], 10)) / 255,
              t
            );
          if (a = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(a[4]), this.setRGB(
              Math.min(100, parseInt(a[1], 10)) / 100,
              Math.min(100, parseInt(a[2], 10)) / 100,
              Math.min(100, parseInt(a[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (a = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(a[4]), this.setHSL(
              parseFloat(a[1]) / 360,
              parseFloat(a[2]) / 100,
              parseFloat(a[3]) / 100,
              t
            );
          break;
        default:
          Re("Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const a = r[1], s = a.length;
      if (s === 3)
        return this.setRGB(
          parseInt(a.charAt(0), 16) / 15,
          parseInt(a.charAt(1), 16) / 15,
          parseInt(a.charAt(2), 16) / 15,
          t
        );
      if (s === 6)
        return this.setHex(parseInt(a, 16), t);
      Re("Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  /**
   * Sets this color from a color name. Faster than {@link Color#setStyle} if
   * you don't need the other CSS-style formats.
   *
   * For convenience, the list of names is exposed in `Color.NAMES` as a hash.
   * ```js
   * Color.NAMES.aliceblue // returns 0xF0F8FF
   * ```
   *
   * @param {string} style - The color name.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setColorName(e, t = Ft) {
    const n = ps[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : Re("Color: Unknown color " + e), this;
  }
  /**
   * Returns a new color with copied values from this instance.
   *
   * @return {Color} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  /**
   * Copies the values of the given color to this instance.
   *
   * @param {Color} color - The color to copy.
   * @return {Color} A reference to this color.
   */
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copySRGBToLinear(e) {
    return this.r = rn(e.r), this.g = rn(e.g), this.b = rn(e.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(e) {
    return this.r = Xn(e.r), this.g = Xn(e.g), this.b = Xn(e.b), this;
  }
  /**
   * Converts this color from `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  /**
   * Converts this color from `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  /**
   * Returns the hexadecimal value of this color.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {number} The hexadecimal value.
   */
  getHex(e = Ft) {
    return ke.workingToColorSpace(Mt.copy(this), e), Math.round(Ge(Mt.r * 255, 0, 255)) * 65536 + Math.round(Ge(Mt.g * 255, 0, 255)) * 256 + Math.round(Ge(Mt.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(e = Ft) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  /**
   * Converts the colors RGB values into the HSL format and stores them into the
   * given target object.
   *
   * @param {{h:number,s:number,l:number}} target - The target object that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {{h:number,s:number,l:number}} The HSL representation of this color.
   */
  getHSL(e, t = ke.workingColorSpace) {
    ke.workingToColorSpace(Mt.copy(this), t);
    const n = Mt.r, r = Mt.g, a = Mt.b, s = Math.max(n, r, a), o = Math.min(n, r, a);
    let c, l;
    const f = (o + s) / 2;
    if (o === s)
      c = 0, l = 0;
    else {
      const d = s - o;
      switch (l = f <= 0.5 ? d / (s + o) : d / (2 - s - o), s) {
        case n:
          c = (r - a) / d + (r < a ? 6 : 0);
          break;
        case r:
          c = (a - n) / d + 2;
          break;
        case a:
          c = (n - r) / d + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = f, e;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(e, t = ke.workingColorSpace) {
    return ke.workingToColorSpace(Mt.copy(this), t), e.r = Mt.r, e.g = Mt.g, e.b = Mt.b, e;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(e = Ft) {
    ke.workingToColorSpace(Mt.copy(this), e);
    const t = Mt.r, n = Mt.g, r = Mt.b;
    return e !== Ft ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  /**
   * Adds the given HSL values to this color's values.
   * Internally, this converts the color's RGB values to HSL, adds HSL
   * and then converts the color back to RGB.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @return {Color} A reference to this color.
   */
  offsetHSL(e, t, n) {
    return this.getHSL(cn), this.setHSL(cn.h + e, cn.s + t, cn.l + n);
  }
  /**
   * Adds the RGB values of the given color to the RGB values of this color.
   *
   * @param {Color} color - The color to add.
   * @return {Color} A reference to this color.
   */
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  /**
   * Adds the RGB values of the given colors and stores the result in this instance.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @return {Color} A reference to this color.
   */
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  /**
   * Adds the given scalar value to the RGB values of this color.
   *
   * @param {number} s - The scalar to add.
   * @return {Color} A reference to this color.
   */
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  /**
   * Subtracts the RGB values of the given color from the RGB values of this color.
   *
   * @param {Color} color - The color to subtract.
   * @return {Color} A reference to this color.
   */
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  /**
   * Multiplies the RGB values of the given color with the RGB values of this color.
   *
   * @param {Color} color - The color to multiply.
   * @return {Color} A reference to this color.
   */
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  /**
   * Multiplies the given scalar value with the RGB values of this color.
   *
   * @param {number} s - The scalar to multiply.
   * @return {Color} A reference to this color.
   */
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  /**
   * Linearly interpolates this color's RGB values toward the RGB values of the
   * given color. The alpha argument can be thought of as the ratio between
   * the two colors, where `0.0` is this color and `1.0` is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  /**
   * Linearly interpolates between the given colors and stores the result in this instance.
   * The alpha argument can be thought of as the ratio between the two colors, where `0.0`
   * is the first and `1.0` is the second color.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  /**
   * Linearly interpolates this color's HSL values toward the HSL values of the
   * given color. It differs from {@link Color#lerp} by not interpolating straight
   * from one color to the other, but instead going through all the hues in between
   * those two colors. The alpha argument can be thought of as the ratio between
   * the two colors, where 0.0 is this color and 1.0 is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpHSL(e, t) {
    this.getHSL(cn), e.getHSL(Si);
    const n = li(cn.h, Si.h, t), r = li(cn.s, Si.s, t), a = li(cn.l, Si.l, t);
    return this.setHSL(n, r, a), this;
  }
  /**
   * Sets the color's RGB components from the given 3D vector.
   *
   * @param {Vector3} v - The vector to set.
   * @return {Color} A reference to this color.
   */
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  /**
   * Transforms this color with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix.
   * @return {Color} A reference to this color.
   */
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, a = e.elements;
    return this.r = a[0] * t + a[3] * n + a[6] * r, this.g = a[1] * t + a[4] * n + a[7] * r, this.b = a[2] * t + a[5] * n + a[8] * r, this;
  }
  /**
   * Returns `true` if this color is equal with the given one.
   *
   * @param {Color} c - The color to test for equality.
   * @return {boolean} Whether this bounding color is equal with the given one.
   */
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  /**
   * Sets this color's RGB components from the given array.
   *
   * @param {Array<number>} array - An array holding the RGB values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Color} A reference to this color.
   */
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  /**
   * Writes the RGB components of this color to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the color components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The color components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  /**
   * Sets the components of this color from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding color data.
   * @param {number} index - The index into the attribute.
   * @return {Color} A reference to this color.
   */
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the color
   * as a hexadecimal value.
   *
   * @return {number} The hexadecimal value.
   */
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Mt = /* @__PURE__ */ new We();
We.NAMES = ps;
class Ta extends Ct {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new En(), this.environmentIntensity = 1, this.environmentRotation = new En(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), t.object.backgroundBlurriness = this.backgroundBlurriness, t.object.backgroundIntensity = this.backgroundIntensity, t.object.backgroundRotation = this.backgroundRotation.toArray(), t.object.environmentIntensity = this.environmentIntensity, t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
const Gt = /* @__PURE__ */ new k(), Jt = /* @__PURE__ */ new k(), dr = /* @__PURE__ */ new k(), Qt = /* @__PURE__ */ new k(), Pn = /* @__PURE__ */ new k(), Dn = /* @__PURE__ */ new k(), ba = /* @__PURE__ */ new k(), hr = /* @__PURE__ */ new k(), pr = /* @__PURE__ */ new k(), mr = /* @__PURE__ */ new k(), gr = /* @__PURE__ */ new ze(), _r = /* @__PURE__ */ new ze(), vr = /* @__PURE__ */ new ze();
class zt {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(e = new k(), t = new k(), n = new k()) {
    this.a = e, this.b = t, this.c = n;
  }
  /**
   * Computes the normal vector of a triangle.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Gt.subVectors(e, t), r.cross(Gt);
    const a = r.lengthSq();
    return a > 0 ? r.multiplyScalar(1 / Math.sqrt(a)) : r.set(0, 0, 0);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  static getBarycoord(e, t, n, r, a) {
    Gt.subVectors(r, t), Jt.subVectors(n, t), dr.subVectors(e, t);
    const s = Gt.dot(Gt), o = Gt.dot(Jt), c = Gt.dot(dr), l = Jt.dot(Jt), f = Jt.dot(dr), d = s * l - o * o;
    if (d === 0)
      return a.set(0, 0, 0), null;
    const u = 1 / d, h = (l * c - o * f) * u, _ = (s * f - o * c) * u;
    return a.set(1 - h - _, _, h);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, Qt) === null ? !1 : Qt.x >= 0 && Qt.y >= 0 && Qt.x + Qt.y <= 1;
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} p1 - The first corner of the triangle.
   * @param {Vector3} p2 - The second corner of the triangle.
   * @param {Vector3} p3 - The third corner of the triangle.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  static getInterpolation(e, t, n, r, a, s, o, c) {
    return this.getBarycoord(e, t, n, r, Qt) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(a, Qt.x), c.addScaledVector(s, Qt.y), c.addScaledVector(o, Qt.z), c);
  }
  /**
   * Computes the value barycentrically interpolated for the given attribute and indices.
   *
   * @param {BufferAttribute} attr - The attribute to interpolate.
   * @param {number} i1 - Index of first vertex.
   * @param {number} i2 - Index of second vertex.
   * @param {number} i3 - Index of third vertex.
   * @param {Vector3} barycoord - The barycoordinate value to use to interpolate.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The interpolated attribute value.
   */
  static getInterpolatedAttribute(e, t, n, r, a, s) {
    return gr.setScalar(0), _r.setScalar(0), vr.setScalar(0), gr.fromBufferAttribute(e, t), _r.fromBufferAttribute(e, n), vr.fromBufferAttribute(e, r), s.setScalar(0), s.addScaledVector(gr, a.x), s.addScaledVector(_r, a.y), s.addScaledVector(vr, a.z), s;
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  static isFrontFacing(e, t, n, r) {
    return Gt.subVectors(n, t), Jt.subVectors(e, t), Gt.cross(Jt).dot(r) < 0;
  }
  /**
   * Sets the triangle's vertices by copying the given values.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  /**
   * Sets the triangle's vertices by copying the given array values.
   *
   * @param {Array<Vector3>} points - An array with 3D points.
   * @param {number} i0 - The array index representing the first corner of the triangle.
   * @param {number} i1 - The array index representing the second corner of the triangle.
   * @param {number} i2 - The array index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  /**
   * Sets the triangle's vertices by copying the given attribute values.
   *
   * @param {BufferAttribute} attribute - A buffer attribute with 3D points data.
   * @param {number} i0 - The attribute index representing the first corner of the triangle.
   * @param {number} i1 - The attribute index representing the second corner of the triangle.
   * @param {number} i2 - The attribute index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  /**
   * Returns a new triangle with copied values from this instance.
   *
   * @return {Triangle} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given triangle to this instance.
   *
   * @param {Triangle} triangle - The triangle to copy.
   * @return {Triangle} A reference to this triangle.
   */
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  /**
   * Computes the area of the triangle.
   *
   * @return {number} The triangle's area.
   */
  getArea() {
    return Gt.subVectors(this.c, this.b), Jt.subVectors(this.a, this.b), Gt.cross(Jt).length() * 0.5;
  }
  /**
   * Computes the midpoint of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's midpoint.
   */
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  /**
   * Computes the normal of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  getNormal(e) {
    return zt.getNormal(this.a, this.b, this.c, e);
  }
  /**
   * Computes a plane the triangle lies within.
   *
   * @param {Plane} target - The target vector that is used to store the method's result.
   * @return {Plane} The plane the triangle lies within.
   */
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  getBarycoord(e, t) {
    return zt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  getInterpolation(e, t, n, r, a) {
    return zt.getInterpolation(e, this.a, this.b, this.c, t, n, r, a);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  containsPoint(e) {
    return zt.containsPoint(e, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(e) {
    return zt.isFrontFacing(this.a, this.b, this.c, e);
  }
  /**
   * Returns `true` if this triangle intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this triangle intersects with the given box or not.
   */
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  /**
   * Returns the closest point on the triangle to the given point.
   *
   * @param {Vector3} p - The point to compute the closest point for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on the triangle.
   */
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, a = this.c;
    let s, o;
    Pn.subVectors(r, n), Dn.subVectors(a, n), hr.subVectors(e, n);
    const c = Pn.dot(hr), l = Dn.dot(hr);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    pr.subVectors(e, r);
    const f = Pn.dot(pr), d = Dn.dot(pr);
    if (f >= 0 && d <= f)
      return t.copy(r);
    const u = c * d - f * l;
    if (u <= 0 && c >= 0 && f <= 0)
      return s = c / (c - f), t.copy(n).addScaledVector(Pn, s);
    mr.subVectors(e, a);
    const h = Pn.dot(mr), _ = Dn.dot(mr);
    if (_ >= 0 && h <= _)
      return t.copy(a);
    const M = h * l - c * _;
    if (M <= 0 && l >= 0 && _ <= 0)
      return o = l / (l - _), t.copy(n).addScaledVector(Dn, o);
    const g = f * _ - h * d;
    if (g <= 0 && d - f >= 0 && h - _ >= 0)
      return ba.subVectors(a, r), o = (d - f) / (d - f + (h - _)), t.copy(r).addScaledVector(ba, o);
    const p = 1 / (g + M + u);
    return s = M * p, o = u * p, t.copy(n).addScaledVector(Pn, s).addScaledVector(Dn, o);
  }
  /**
   * Returns `true` if this triangle is equal with the given one.
   *
   * @param {Triangle} triangle - The triangle to test for equality.
   * @return {boolean} Whether this triangle is equal with the given one.
   */
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
class hi {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(e = new k(1 / 0, 1 / 0, 1 / 0), t = new k(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  /**
   * Sets the lower and upper boundaries of this box.
   * Please note that this method only copies the values from the given objects.
   *
   * @param {Vector3} min - The lower boundary of the box.
   * @param {Vector3} max - The upper boundary of the box.
   * @return {Box3} A reference to this bounding box.
   */
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<number>} array - An array holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(kt.fromArray(e, t));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - A buffer attribute holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(kt.fromBufferAttribute(e, t));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<Vector3>} points - An array holding 3D position data as instances of {@link Vector3}.
   * @return {Box3} A reference to this bounding box.
   */
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  /**
   * Centers this box on the given center vector and sets this box's width, height and
   * depth to the given size values.
   *
   * @param {Vector3} center - The center of the box.
   * @param {Vector3} size - The x, y and z dimensions of the box.
   * @return {Box3} A reference to this bounding box.
   */
  setFromCenterAndSize(e, t) {
    const n = kt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  /**
   * Computes the world-axis-aligned bounding box for the given 3D object
   * (including its children), accounting for the object's, and children's,
   * world transforms. The function may result in a larger box than strictly necessary.
   *
   * Note: To compute the correct bounding box, make sure the given 3D object
   * has an up-to-date world matrix that reflects the current transformation of its
   * ancestor nodes. Call `object.updateWorldMatrix( true, false )` beforehand if
   * you're unsure.
   *
   * @param {Object3D} object - The 3D object to compute the bounding box for.
   * @param {boolean} [precise=false] - If set to `true`, the method computes the smallest
   * world-axis-aligned bounding box at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  /**
   * Returns a new box with copied values from this instance.
   *
   * @return {Box3} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given box to this instance.
   *
   * @param {Box3} box - The box to copy.
   * @return {Box3} A reference to this bounding box.
   */
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  /**
   * Makes this box empty which means in encloses a zero space in 3D.
   *
   * @return {Box3} A reference to this bounding box.
   */
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  /**
   * Returns true if this box includes zero points within its bounds.
   * Note that a box with equal lower and upper bounds still includes one
   * point, the one both bounds share.
   *
   * @return {boolean} Whether this box is empty or not.
   */
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  /**
   * Returns the center point of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The center point.
   */
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  /**
   * Returns the dimensions of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The size.
   */
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  /**
   * Expands the boundaries of this box to include the given point.
   *
   * @param {Vector3} point - The point that should be included by the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  /**
   * Expands this box equilaterally by the given vector. The width of this
   * box will be expanded by the x component of the vector in both
   * directions. The height of this box will be expanded by the y component of
   * the vector in both directions. The depth of this box will be
   * expanded by the z component of the vector in both directions.
   *
   * @param {Vector3} vector - The vector that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  /**
   * Expands each dimension of the box by the given scalar. If negative, the
   * dimensions of the box will be contracted.
   *
   * @param {number} scalar - The scalar value that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  /**
   * Expands the boundaries of this box to include the given 3D object and
   * its children, accounting for the object's, and children's, world
   * transforms. The function may result in a larger box than strictly
   * necessary (unless the precise parameter is set to true).
   *
   * @param {Object3D} object - The 3D object that should expand the bounding box.
   * @param {boolean} precise - If set to `true`, the method expands the bounding box
   * as little as necessary at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const a = n.getAttribute("position");
      if (t === !0 && a !== void 0 && e.isInstancedMesh !== !0)
        for (let s = 0, o = a.count; s < o; s++)
          e.isMesh === !0 ? e.getVertexPosition(s, kt) : kt.fromBufferAttribute(a, s), kt.applyMatrix4(e.matrixWorld), this.expandByPoint(kt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Mi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Mi.copy(n.boundingBox)), Mi.applyMatrix4(e.matrixWorld), this.union(Mi);
    }
    const r = e.children;
    for (let a = 0, s = r.length; a < s; a++)
      this.expandByObject(r[a], t);
    return this;
  }
  /**
   * Returns `true` if the given point lies within or on the boundaries of this box.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the bounding box contains the given point or not.
   */
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  /**
   * Returns `true` if this bounding box includes the entirety of the given bounding box.
   * If this box and the given one are identical, this function also returns `true`.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box contains the given bounding box or not.
   */
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  /**
   * Returns a point as a proportion of this box's width, height and depth.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A point as a proportion of this box's width, height and depth.
   */
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  /**
   * Returns `true` if the given bounding box intersects with this bounding box.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with this bounding box.
   */
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  /**
   * Returns `true` if the given bounding sphere intersects with this bounding box.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with this bounding box.
   */
  intersectsSphere(e) {
    return this.clampPoint(e.center, kt), kt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  /**
   * Returns `true` if the given plane intersects with this bounding box.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether the given plane intersects with this bounding box.
   */
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  /**
   * Returns `true` if the given triangle intersects with this bounding box.
   *
   * @param {Triangle} triangle - The triangle to test.
   * @return {boolean} Whether the given triangle intersects with this bounding box.
   */
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ei), Ei.subVectors(this.max, ei), Ln.subVectors(e.a, ei), Fn.subVectors(e.b, ei), In.subVectors(e.c, ei), un.subVectors(Fn, Ln), fn.subVectors(In, Fn), _n.subVectors(Ln, In);
    let t = [
      0,
      -un.z,
      un.y,
      0,
      -fn.z,
      fn.y,
      0,
      -_n.z,
      _n.y,
      un.z,
      0,
      -un.x,
      fn.z,
      0,
      -fn.x,
      _n.z,
      0,
      -_n.x,
      -un.y,
      un.x,
      0,
      -fn.y,
      fn.x,
      0,
      -_n.y,
      _n.x,
      0
    ];
    return !xr(t, Ln, Fn, In, Ei) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !xr(t, Ln, Fn, In, Ei)) ? !1 : (yi.crossVectors(un, fn), t = [yi.x, yi.y, yi.z], xr(t, Ln, Fn, In, Ei));
  }
  /**
   * Clamps the given point within the bounds of this box.
   *
   * @param {Vector3} point - The point to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  /**
   * Returns the euclidean distance from any edge of this box to the specified point. If
   * the given point lies inside of this box, the distance will be `0`.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The euclidean distance.
   */
  distanceToPoint(e) {
    return this.clampPoint(e, kt).distanceTo(e);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(kt).length() * 0.5), e;
  }
  /**
   * Computes the intersection of this bounding box and the given one, setting the upper
   * bound of this box to the lesser of the two boxes' upper bounds and the
   * lower bound of this box to the greater of the two boxes' lower bounds. If
   * there's no overlap, makes this box empty.
   *
   * @param {Box3} box - The bounding box to intersect with.
   * @return {Box3} A reference to this bounding box.
   */
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  /**
   * Computes the union of this box and another and the given one, setting the upper
   * bound of this box to the greater of the two boxes' upper bounds and the
   * lower bound of this box to the lesser of the two boxes' lower bounds.
   *
   * @param {Box3} box - The bounding box that will be unioned with this instance.
   * @return {Box3} A reference to this bounding box.
   */
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  /**
   * Transforms this bounding box by the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Box3} A reference to this bounding box.
   */
  applyMatrix4(e) {
    return this.isEmpty() ? this : (jt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), jt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), jt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), jt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), jt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), jt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), jt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), jt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(jt), this);
  }
  /**
   * Adds the given offset to both the upper and lower bounds of this bounding box,
   * effectively moving it in 3D space.
   *
   * @param {Vector3} offset - The offset that should be used to translate the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  /**
   * Returns `true` if this bounding box is equal with the given one.
   *
   * @param {Box3} box - The box to test for equality.
   * @return {boolean} Whether this bounding box is equal with the given one.
   */
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      min: this.min.toArray(),
      max: this.max.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @param {Object} json - The serialized json to set the box from.
   * @return {Box3} A reference to this bounding box.
   */
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const jt = [
  /* @__PURE__ */ new k(),
  /* @__PURE__ */ new k(),
  /* @__PURE__ */ new k(),
  /* @__PURE__ */ new k(),
  /* @__PURE__ */ new k(),
  /* @__PURE__ */ new k(),
  /* @__PURE__ */ new k(),
  /* @__PURE__ */ new k()
], kt = /* @__PURE__ */ new k(), Mi = /* @__PURE__ */ new hi(), Ln = /* @__PURE__ */ new k(), Fn = /* @__PURE__ */ new k(), In = /* @__PURE__ */ new k(), un = /* @__PURE__ */ new k(), fn = /* @__PURE__ */ new k(), _n = /* @__PURE__ */ new k(), ei = /* @__PURE__ */ new k(), Ei = /* @__PURE__ */ new k(), yi = /* @__PURE__ */ new k(), vn = /* @__PURE__ */ new k();
function xr(i, e, t, n, r) {
  for (let a = 0, s = i.length - 3; a <= s; a += 3) {
    vn.fromArray(i, a);
    const o = r.x * Math.abs(vn.x) + r.y * Math.abs(vn.y) + r.z * Math.abs(vn.z), c = e.dot(vn), l = t.dot(vn), f = n.dot(vn);
    if (Math.max(-Math.max(c, l, f), Math.min(c, l, f)) > o)
      return !1;
  }
  return !0;
}
const dt = /* @__PURE__ */ new k(), Ti = /* @__PURE__ */ new De();
let Ro = 0;
class Vt extends yn {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {TypedArray} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n = !1) {
    if (super(), Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Ro++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0;
  }
  /**
   * A callback function that is executed after the renderer has transferred the attribute
   * array data to the GPU.
   */
  onUploadCallback() {
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  /**
   * Sets the usage of this buffer attribute.
   *
   * @param {(StaticDrawUsage|DynamicDrawUsage|StreamDrawUsage|StaticReadUsage|DynamicReadUsage|StreamReadUsage|StaticCopyUsage|DynamicCopyUsage|StreamCopyUsage)} value - The usage to set.
   * @return {BufferAttribute} A reference to this buffer attribute.
   */
  setUsage(e) {
    return this.usage = e, this;
  }
  /**
   * Adds a range of data in the data array to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Copies the values of the given buffer attribute to this instance.
   *
   * @param {BufferAttribute} source - The buffer attribute to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  /**
   * Copies a vector from the given buffer attribute to this one. The start
   * and destination position in the attribute buffers are represented by the
   * given indices.
   *
   * @param {number} index1 - The destination index into this buffer attribute.
   * @param {BufferAttribute} attribute - The buffer attribute to copy from.
   * @param {number} index2 - The source index into the given buffer attribute.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, a = this.itemSize; r < a; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  /**
   * Copies the given array data into this buffer attribute.
   *
   * @param {(TypedArray|Array)} array - The array to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyArray(e) {
    return this.array.set(e), this;
  }
  /**
   * Applies the given 3x3 matrix to the given attribute. Works with
   * item size `2` and `3`.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Ti.fromBufferAttribute(this, t), Ti.applyMatrix3(e), this.setXY(t, Ti.x, Ti.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        dt.fromBufferAttribute(this, t), dt.applyMatrix3(e), this.setXYZ(t, dt.x, dt.y, dt.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      dt.fromBufferAttribute(this, t), dt.applyMatrix4(e), this.setXYZ(t, dt.x, dt.y, dt.z);
    return this;
  }
  /**
   * Applies the given 3x3 normal matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix3} m - The normal matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      dt.fromBufferAttribute(this, t), dt.applyNormalMatrix(e), this.setXYZ(t, dt.x, dt.y, dt.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3` and with direction vectors.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      dt.fromBufferAttribute(this, t), dt.transformDirection(e), this.setXYZ(t, dt.x, dt.y, dt.z);
    return this;
  }
  /**
   * Sets the given array data in the buffer attribute.
   *
   * @param {(TypedArray|Array)} value - The array data to set.
   * @param {number} [offset=0] - The offset in this buffer attribute's array.
   * @return {BufferAttribute} A reference to this instance.
   */
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  /**
   * Returns the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @return {number} The returned value.
   */
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Vn(n, this.array)), n;
  }
  /**
   * Sets the given value to the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @param {number} value - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setComponent(e, t, n) {
    return this.normalized && (n = yt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Vn(t, this.array)), t;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(e, t) {
    return this.normalized && (t = yt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Vn(t, this.array)), t;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(e, t) {
    return this.normalized && (t = yt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Vn(t, this.array)), t;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(e, t) {
    return this.normalized && (t = yt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Vn(t, this.array)), t;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(e, t) {
    return this.normalized && (t = yt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  /**
   * Sets the x and y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = yt(t, this.array), n = yt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  /**
   * Sets the x, y and z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = yt(t, this.array), n = yt(n, this.array), r = yt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  /**
   * Sets the x, y, z and w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @param {number} w - The value for the w component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZW(e, t, n, r, a) {
    return e *= this.itemSize, this.normalized && (t = yt(t, this.array), n = yt(n, this.array), r = yt(r, this.array), a = yt(a, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = a, this;
  }
  /**
   * Sets the given callback function that is executed after the Renderer has transferred
   * the attribute array data to the GPU. Can be used to perform clean-up operations after
   * the upload when attribute data are not needed anymore on the CPU side.
   *
   * @param {Function} callback - The `onUpload()` callback.
   * @return {BufferAttribute} A reference to this instance.
   */
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  /**
   * Returns a new buffer attribute with copied values from this instance.
   *
   * @return {BufferAttribute} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  /**
   * Serializes the buffer attribute into JSON.
   *
   * @return {Object} A JSON object representing the serialized buffer attribute.
   */
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return e.name = this.name, e.usage = this.usage, e.gpuType = this.gpuType, e;
  }
  /**
   * Disposes of the buffer attribute. Available only in {@link WebGPURenderer}.
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class ms extends Vt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint16Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class gs extends Vt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Ht extends Vt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Float32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
const Co = /* @__PURE__ */ new hi(), ti = /* @__PURE__ */ new k(), Sr = /* @__PURE__ */ new k();
class Vr {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(e = new k(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  /**
   * Sets the sphere's components by copying the given values.
   *
   * @param {Vector3} center - The center.
   * @param {number} radius - The radius.
   * @return {Sphere} A reference to this sphere.
   */
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  /**
   * Computes the minimum bounding sphere for list of points.
   * If the optional center point is given, it is used as the sphere's
   * center. Otherwise, the center of the axis-aligned bounding box
   * encompassing the points is calculated.
   *
   * @param {Array<Vector3>} points - A list of points in 3D space.
   * @param {Vector3} [optionalCenter] - The center of the sphere.
   * @return {Sphere} A reference to this sphere.
   */
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Co.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let a = 0, s = e.length; a < s; a++)
      r = Math.max(r, n.distanceToSquared(e[a]));
    return this.radius = Math.sqrt(r), this;
  }
  /**
   * Copies the values of the given sphere to this instance.
   *
   * @param {Sphere} sphere - The sphere to copy.
   * @return {Sphere} A reference to this sphere.
   */
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  /**
   * Returns `true` if the sphere is empty (the radius set to a negative number).
   *
   * Spheres with a radius of `0` contain only their center point and are not
   * considered to be empty.
   *
   * @return {boolean} Whether this sphere is empty or not.
   */
  isEmpty() {
    return this.radius < 0;
  }
  /**
   * Makes this sphere empty which means in encloses a zero space in 3D.
   *
   * @return {Sphere} A reference to this sphere.
   */
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  /**
   * Returns `true` if this sphere contains the given point inclusive of
   * the surface of the sphere.
   *
   * @param {Vector3} point - The point to check.
   * @return {boolean} Whether this sphere contains the given point or not.
   */
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  /**
   * Returns the closest distance from the boundary of the sphere to the
   * given point. If the sphere contains the point, the distance will
   * be negative.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The distance to the point.
   */
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  /**
   * Returns `true` if this sphere intersects with the given one.
   *
   * @param {Sphere} sphere - The sphere to test.
   * @return {boolean} Whether this sphere intersects with the given one or not.
   */
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  /**
   * Returns `true` if this sphere intersects with the given box.
   *
   * @param {Box3} box - The box to test.
   * @return {boolean} Whether this sphere intersects with the given box or not.
   */
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  /**
   * Returns `true` if this sphere intersects with the given plane.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether this sphere intersects with the given plane or not.
   */
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  /**
   * Clamps a point within the sphere. If the point is outside the sphere, it
   * will clamp it to the closest point on the edge of the sphere. Points
   * already inside the sphere will not be affected.
   *
   * @param {Vector3} point - The plane to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  /**
   * Returns a bounding box that encloses this sphere.
   *
   * @param {Box3} target - The target box that is used to store the method's result.
   * @return {Box3} The bounding box that encloses this sphere.
   */
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  /**
   * Transforms this sphere with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Sphere} A reference to this sphere.
   */
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  /**
   * Translates the sphere's center by the given offset.
   *
   * @param {Vector3} offset - The offset.
   * @return {Sphere} A reference to this sphere.
   */
  translate(e) {
    return this.center.add(e), this;
  }
  /**
   * Expands the boundaries of this sphere to include the given point.
   *
   * @param {Vector3} point - The point to include.
   * @return {Sphere} A reference to this sphere.
   */
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    ti.subVectors(e, this.center);
    const t = ti.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(ti, r / n), this.radius += r;
    }
    return this;
  }
  /**
   * Expands this sphere to enclose both the original sphere and the given sphere.
   *
   * @param {Sphere} sphere - The sphere to include.
   * @return {Sphere} A reference to this sphere.
   */
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Sr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ti.copy(e.center).add(Sr)), this.expandByPoint(ti.copy(e.center).sub(Sr))), this);
  }
  /**
   * Returns `true` if this sphere is equal with the given one.
   *
   * @param {Sphere} sphere - The sphere to test for equality.
   * @return {boolean} Whether this bounding sphere is equal with the given one.
   */
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  /**
   * Returns a new sphere with copied values from this instance.
   *
   * @return {Sphere} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      radius: this.radius,
      center: this.center.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @param {Object} json - The serialized json to set the sphere from.
   * @return {Sphere} A reference to this bounding sphere.
   */
  fromJSON(e) {
    return this.radius = e.radius, this.center.fromArray(e.center), this;
  }
}
let Po = 0;
const Lt = /* @__PURE__ */ new lt(), Mr = /* @__PURE__ */ new Ct(), Un = /* @__PURE__ */ new k(), Rt = /* @__PURE__ */ new hi(), ni = /* @__PURE__ */ new hi(), _t = /* @__PURE__ */ new k();
class Nt extends yn {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Po++ }), this.uuid = Zn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {}, this._transformed = !1;
  }
  /**
   * Returns the index of this geometry.
   *
   * @return {?BufferAttribute} The index. Returns `null` if no index is defined.
   */
  getIndex() {
    return this.index;
  }
  /**
   * Sets the given index to this geometry.
   *
   * @param {Array<number>|BufferAttribute} index - The index to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Ks(e) ? gs : ms)(e, 1) : this.index = e, this;
  }
  /**
   * Sets the given indirect attribute to this geometry.
   *
   * @param {BufferAttribute} indirect - The attribute holding indirect draw calls.
   * @param {number|Array<number>} [indirectOffset=0] - The offset, in bytes, into the indirect drawing buffer where the value data begins. If an array is provided, multiple indirect draw calls will be made for each offset.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndirect(e, t = 0) {
    return this.indirect = e, this.indirectOffset = t, this;
  }
  /**
   * Returns the indirect attribute of this geometry.
   *
   * @return {?BufferAttribute} The indirect attribute. Returns `null` if no indirect attribute is defined.
   */
  getIndirect() {
    return this.indirect;
  }
  /**
   * Returns the buffer attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {BufferAttribute|InterleavedBufferAttribute|undefined} The buffer attribute.
   * Returns `undefined` if not attribute has been found.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Sets the given attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @param {BufferAttribute|InterleavedBufferAttribute} attribute - The attribute to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  /**
   * Deletes the attribute for the given name.
   *
   * @param {string} name - The attribute name to delete.
   * @return {BufferGeometry} A reference to this instance.
   */
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  /**
   * Returns `true` if this geometry has an attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {boolean} Whether this geometry has an attribute for the given name or not.
   */
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  /**
   * Adds a group to this geometry.
   *
   * @param {number} start - The first element in this draw call. That is the first
   * vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - Specifies how many vertices (or indices) are part of this group.
   * @param {number} [materialIndex=0] - The material array index to use.
   */
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  /**
   * Clears all groups.
   */
  clearGroups() {
    this.groups = [];
  }
  /**
   * Sets the draw range for this geometry.
   *
   * @param {number} start - The first vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - For non-indexed BufferGeometry, `count` is the number of vertices to render.
   * For indexed BufferGeometry, `count` is the number of indices to render.
   */
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  /**
   * Applies the given 4x4 transformation matrix to the geometry.
   *
   * @param {Matrix4} matrix - The matrix to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const a = new Pe().getNormalMatrix(e);
      n.applyNormalMatrix(a), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this._transformed = !0, this;
  }
  /**
   * Applies the rotation represented by the Quaternion to the geometry.
   *
   * @param {Quaternion} q - The Quaternion to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyQuaternion(e) {
    return Lt.makeRotationFromQuaternion(e), this.applyMatrix4(Lt), this;
  }
  /**
   * Rotates the geometry about the X axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateX(e) {
    return Lt.makeRotationX(e), this.applyMatrix4(Lt), this;
  }
  /**
   * Rotates the geometry about the Y axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateY(e) {
    return Lt.makeRotationY(e), this.applyMatrix4(Lt), this;
  }
  /**
   * Rotates the geometry about the Z axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateZ(e) {
    return Lt.makeRotationZ(e), this.applyMatrix4(Lt), this;
  }
  /**
   * Translates the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#position} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x offset.
   * @param {number} y - The y offset.
   * @param {number} z - The z offset.
   * @return {BufferGeometry} A reference to this instance.
   */
  translate(e, t, n) {
    return Lt.makeTranslation(e, t, n), this.applyMatrix4(Lt), this;
  }
  /**
   * Scales the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#scale} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x scale.
   * @param {number} y - The y scale.
   * @param {number} z - The z scale.
   * @return {BufferGeometry} A reference to this instance.
   */
  scale(e, t, n) {
    return Lt.makeScale(e, t, n), this.applyMatrix4(Lt), this;
  }
  /**
   * Rotates the geometry to face a point in 3D space. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#lookAt} for typical
   * real-time mesh rotation.
   *
   * @param {Vector3} vector - The target point.
   * @return {BufferGeometry} A reference to this instance.
   */
  lookAt(e) {
    return Mr.lookAt(e), Mr.updateMatrix(), this.applyMatrix4(Mr.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Un).negate(), this.translate(Un.x, Un.y, Un.z), this;
  }
  /**
   * Defines a geometry by creating a `position` attribute based on the given array of points. The array
   * can hold 2D or 3D vectors. When using two-dimensional data, the `z` coordinate for all vertices is
   * set to `0`.
   *
   * If the method is used with an existing `position` attribute, the vertex data are overwritten with the
   * data from the array. The length of the array must match the vertex count.
   *
   * @param {Array<Vector2>|Array<Vector3>} points - The points.
   * @return {BufferGeometry} A reference to this instance.
   */
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let r = 0, a = e.length; r < a; r++) {
        const s = e[r];
        n.push(s.x, s.y, s.z || 0);
      }
      this.setAttribute("position", new Ht(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        const a = e[r];
        t.setXYZ(r, a.x, a.y, a.z || 0);
      }
      e.length > t.count && Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
    }
    return this;
  }
  /**
   * Computes the bounding box of the geometry, and updates the `boundingBox` member.
   * The bounding box is not computed by the engine; it must be computed by your app.
   * You may need to recompute the bounding box if the geometry vertices are modified.
   */
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new hi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new k(-1 / 0, -1 / 0, -1 / 0),
        new k(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const a = t[n];
          Rt.setFromBufferAttribute(a), this.morphTargetsRelative ? (_t.addVectors(this.boundingBox.min, Rt.min), this.boundingBox.expandByPoint(_t), _t.addVectors(this.boundingBox.max, Rt.max), this.boundingBox.expandByPoint(_t)) : (this.boundingBox.expandByPoint(Rt.min), this.boundingBox.expandByPoint(Rt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  /**
   * Computes the bounding sphere of the geometry, and updates the `boundingSphere` member.
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if the geometry vertices are modified.
   */
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Vr());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new k(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Rt.setFromBufferAttribute(e), t)
        for (let a = 0, s = t.length; a < s; a++) {
          const o = t[a];
          ni.setFromBufferAttribute(o), this.morphTargetsRelative ? (_t.addVectors(Rt.min, ni.min), Rt.expandByPoint(_t), _t.addVectors(Rt.max, ni.max), Rt.expandByPoint(_t)) : (Rt.expandByPoint(ni.min), Rt.expandByPoint(ni.max));
        }
      Rt.getCenter(n);
      let r = 0;
      for (let a = 0, s = e.count; a < s; a++)
        _t.fromBufferAttribute(e, a), r = Math.max(r, n.distanceToSquared(_t));
      if (t)
        for (let a = 0, s = t.length; a < s; a++) {
          const o = t[a], c = this.morphTargetsRelative;
          for (let l = 0, f = o.count; l < f; l++)
            _t.fromBufferAttribute(o, l), c && (Un.fromBufferAttribute(e, l), _t.add(Un)), r = Math.max(r, n.distanceToSquared(_t));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  /**
   * Calculates and adds a tangent attribute to this geometry.
   *
   * The computation is only supported for indexed geometries and if position, normal, and uv attributes
   * are defined. When using a tangent space normal map, prefer the MikkTSpace algorithm provided by
   * {@link BufferGeometryUtils#computeMikkTSpaceTangents} instead.
   */
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, r = t.normal, a = t.uv;
    let s = this.getAttribute("tangent");
    (s === void 0 || s.count !== n.count) && (s = new Vt(new Float32Array(4 * n.count), 4), this.setAttribute("tangent", s));
    const o = [], c = [];
    for (let v = 0; v < n.count; v++)
      o[v] = new k(), c[v] = new k();
    const l = new k(), f = new k(), d = new k(), u = new De(), h = new De(), _ = new De(), M = new k(), g = new k();
    function p(v, b, L) {
      l.fromBufferAttribute(n, v), f.fromBufferAttribute(n, b), d.fromBufferAttribute(n, L), u.fromBufferAttribute(a, v), h.fromBufferAttribute(a, b), _.fromBufferAttribute(a, L), f.sub(l), d.sub(l), h.sub(u), _.sub(u);
      const F = 1 / (h.x * _.y - _.x * h.y);
      isFinite(F) && (M.copy(f).multiplyScalar(_.y).addScaledVector(d, -h.y).multiplyScalar(F), g.copy(d).multiplyScalar(h.x).addScaledVector(f, -_.x).multiplyScalar(F), o[v].add(M), o[b].add(M), o[L].add(M), c[v].add(g), c[b].add(g), c[L].add(g));
    }
    let A = this.groups;
    A.length === 0 && (A = [{
      start: 0,
      count: e.count
    }]);
    for (let v = 0, b = A.length; v < b; ++v) {
      const L = A[v], F = L.start, B = L.count;
      for (let V = F, I = F + B; V < I; V += 3)
        p(
          e.getX(V + 0),
          e.getX(V + 1),
          e.getX(V + 2)
        );
    }
    const R = new k(), S = new k(), y = new k(), T = new k();
    function w(v) {
      y.fromBufferAttribute(r, v), T.copy(y);
      const b = o[v];
      R.copy(b), R.sub(y.multiplyScalar(y.dot(b))).normalize(), S.crossVectors(T, b);
      const F = S.dot(c[v]) < 0 ? -1 : 1;
      s.setXYZW(v, R.x, R.y, R.z, F);
    }
    for (let v = 0, b = A.length; v < b; ++v) {
      const L = A[v], F = L.start, B = L.count;
      for (let V = F, I = F + B; V < I; V += 3)
        w(e.getX(V + 0)), w(e.getX(V + 1)), w(e.getX(V + 2));
    }
    this._transformed = !0;
  }
  /**
   * Computes vertex normals for the given vertex data. For indexed geometries, the method sets
   * each vertex normal to be the average of the face normals of the faces that share that vertex.
   * For non-indexed geometries, vertices are not shared, and the method sets each vertex normal
   * to be the same as the face normal.
   */
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0 || n.count !== t.count)
        n = new Vt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let u = 0, h = n.count; u < h; u++)
          n.setXYZ(u, 0, 0, 0);
      const r = new k(), a = new k(), s = new k(), o = new k(), c = new k(), l = new k(), f = new k(), d = new k();
      if (e)
        for (let u = 0, h = e.count; u < h; u += 3) {
          const _ = e.getX(u + 0), M = e.getX(u + 1), g = e.getX(u + 2);
          r.fromBufferAttribute(t, _), a.fromBufferAttribute(t, M), s.fromBufferAttribute(t, g), f.subVectors(s, a), d.subVectors(r, a), f.cross(d), o.fromBufferAttribute(n, _), c.fromBufferAttribute(n, M), l.fromBufferAttribute(n, g), o.add(f), c.add(f), l.add(f), n.setXYZ(_, o.x, o.y, o.z), n.setXYZ(M, c.x, c.y, c.z), n.setXYZ(g, l.x, l.y, l.z);
        }
      else
        for (let u = 0, h = t.count; u < h; u += 3)
          r.fromBufferAttribute(t, u + 0), a.fromBufferAttribute(t, u + 1), s.fromBufferAttribute(t, u + 2), f.subVectors(s, a), d.subVectors(r, a), f.cross(d), n.setXYZ(u + 0, f.x, f.y, f.z), n.setXYZ(u + 1, f.x, f.y, f.z), n.setXYZ(u + 2, f.x, f.y, f.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  /**
   * Ensures every normal vector in a geometry will have a magnitude of `1`. This will
   * correct lighting on the geometry surfaces.
   */
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      _t.fromBufferAttribute(e, t), _t.normalize(), e.setXYZ(t, _t.x, _t.y, _t.z);
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, f = o.itemSize, d = o.normalized, u = new l.constructor(c.length * f);
      let h = 0, _ = 0;
      for (let M = 0, g = c.length; M < g; M++) {
        o.isInterleavedBufferAttribute ? h = c[M] * o.data.stride + o.offset : h = c[M] * f;
        for (let p = 0; p < f; p++)
          u[_++] = l[h++];
      }
      return new Vt(u, f, d);
    }
    if (this.index === null)
      return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Nt(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const c = r[o], l = e(c, n);
      t.setAttribute(o, l);
    }
    const a = this.morphAttributes;
    for (const o in a) {
      const c = [], l = a[o];
      for (let f = 0, d = l.length; f < d; f++) {
        const u = l[f], h = e(u, n);
        c.push(h);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const s = this.groups;
    for (let o = 0, c = s.length; o < c; o++) {
      const l = s[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  /**
   * Serializes the geometry into JSON.
   *
   * @return {Object} A JSON object representing the serialized geometry.
   */
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.parameters !== void 0 && this._transformed === !0 ? "BufferGeometry" : this.type, e.name = this.name, Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0 && this._transformed !== !0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const r = {};
    let a = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], f = [];
      for (let d = 0, u = l.length; d < u; d++) {
        const h = l[d];
        f.push(h.toJSON(e.data));
      }
      f.length > 0 && (r[c] = f, a = !0);
    }
    a && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const s = this.groups;
    s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = o.toJSON()), e;
  }
  /**
   * Returns a new geometry with copied values from this instance.
   *
   * @return {BufferGeometry} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given geometry to this instance.
   *
   * @param {BufferGeometry} source - The geometry to copy.
   * @return {BufferGeometry} A reference to this instance.
   */
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone());
    const r = e.attributes;
    for (const l in r) {
      const f = r[l];
      this.setAttribute(l, f.clone(t));
    }
    const a = e.morphAttributes;
    for (const l in a) {
      const f = [], d = a[l];
      for (let u = 0, h = d.length; u < h; u++)
        f.push(d[u].clone(t));
      this.morphAttributes[l] = f;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const s = e.groups;
    for (let l = 0, f = s.length; l < f; l++) {
      const d = s[l];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this._transformed = e._transformed, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires BufferGeometry#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Er = /* @__PURE__ */ new k(), Do = /* @__PURE__ */ new k(), Lo = /* @__PURE__ */ new Pe();
class hn {
  /**
   * Constructs a new plane.
   *
   * @param {Vector3} [normal=(1,0,0)] - A unit length vector defining the normal of the plane.
   * @param {number} [constant=0] - The signed distance from the origin to the plane.
   */
  constructor(e = new k(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  /**
   * Sets the plane components by copying the given values.
   *
   * @param {Vector3} normal - The normal.
   * @param {number} constant - The constant.
   * @return {Plane} A reference to this plane.
   */
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  /**
   * Sets the plane components by defining `x`, `y`, `z` as the
   * plane normal and `w` as the constant.
   *
   * @param {number} x - The value for the normal's x component.
   * @param {number} y - The value for the normal's y component.
   * @param {number} z - The value for the normal's z component.
   * @param {number} w - The constant value.
   * @return {Plane} A reference to this plane.
   */
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  /**
   * Sets the plane from the given normal and coplanar point (that is a point
   * that lies onto the plane).
   *
   * @param {Vector3} normal - The normal.
   * @param {Vector3} point - A coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  /**
   * Sets the plane from three coplanar points. The winding order is
   * assumed to be counter-clockwise, and determines the direction of
   * the plane normal.
   *
   * @param {Vector3} a - The first coplanar point.
   * @param {Vector3} b - The second coplanar point.
   * @param {Vector3} c - The third coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromCoplanarPoints(e, t, n) {
    const r = Er.subVectors(n, t).cross(Do.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  /**
   * Copies the values of the given plane to this instance.
   *
   * @param {Plane} plane - The plane to copy.
   * @return {Plane} A reference to this plane.
   */
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  /**
   * Normalizes the plane normal and adjusts the constant accordingly.
   *
   * @return {Plane} A reference to this plane.
   */
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  /**
   * Negates both the plane normal and the constant.
   *
   * @return {Plane} A reference to this plane.
   */
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  /**
   * Returns the signed distance from the given point to this plane.
   *
   * @param {Vector3} point - The point to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  /**
   * Returns the signed distance from the given sphere to this plane.
   *
   * @param {Sphere} sphere - The sphere to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  /**
   * Projects a the given point onto the plane.
   *
   * @param {Vector3} point - The point to project.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The projected point on the plane.
   */
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  /**
   * Returns the intersection point of the passed line and the plane. Returns
   * `null` if the line does not intersect. Returns the line's starting point if
   * the line is coplanar with the plane.
   *
   * @param {Line3} line - The line to compute the intersection for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @param {boolean} [clampToLine=true] - Whether to clamp the intersection to the line segment.
   * @return {?Vector3} The intersection point. Returns `null` if no intersection is detected.
   */
  intersectLine(e, t, n = !0) {
    const r = e.delta(Er), a = this.normal.dot(r);
    if (a === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / a;
    return n === !0 && (s < 0 || s > 1) ? null : t.copy(e.start).addScaledVector(r, s);
  }
  /**
   * Returns `true` if the given line segment intersects with (passes through) the plane.
   *
   * @param {Line3} line - The line to test.
   * @return {boolean} Whether the given line segment intersects with the plane or not.
   */
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  /**
   * Returns `true` if the given bounding box intersects with the plane.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with the plane or not.
   */
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  /**
   * Returns `true` if the given bounding sphere intersects with the plane.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with the plane or not.
   */
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  /**
   * Returns a coplanar vector to the plane, by calculating the
   * projection of the normal at the origin onto the plane.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The coplanar point.
   */
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  /**
   * Apply a 4x4 matrix to the plane. The matrix must be an affine, homogeneous transform.
   *
   * The optional normal matrix can be pre-computed like so:
   * ```js
   * const optionalNormalMatrix = new THREE.Matrix3().getNormalMatrix( matrix );
   * ```
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @param {Matrix4} [optionalNormalMatrix] - A pre-computed normal matrix.
   * @return {Plane} A reference to this plane.
   */
  applyMatrix4(e, t) {
    const n = t || Lo.getNormalMatrix(e), r = this.coplanarPoint(Er).applyMatrix4(e), a = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(a), this;
  }
  /**
   * Translates the plane by the distance defined by the given offset vector.
   * Note that this only affects the plane constant and will not affect the normal vector.
   *
   * @param {Vector3} offset - The offset vector.
   * @return {Plane} A reference to this plane.
   */
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  /**
   * Returns `true` if this plane is equal with the given one.
   *
   * @param {Plane} plane - The plane to test for equality.
   * @return {boolean} Whether this plane is equal with the given one.
   */
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  /**
   * Returns a new plane with copied values from this instance.
   *
   * @return {Plane} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Returns a serialized structure of the plane.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      normal: this.normal.toArray(),
      constant: this.constant
    };
  }
  /**
   * Sets the plane properties from the given JSON.
   *
   * @param {Object} json - The serialized json to set the plane from.
   * @return {Plane} A reference to this plane.
   */
  fromJSON(e) {
    return this.normal.fromArray(e.normal), this.constant = e.constant, this;
  }
}
let Fo = 0;
class Ji extends yn {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Fo++ }), this.uuid = Zn(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new We(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  /**
   * Sets the alpha value to be used when running an alpha test. The material
   * will not be rendered if the opacity is lower than this value.
   *
   * @type {number}
   * @readonly
   * @default 0
   */
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  /**
   * An optional callback that is executed immediately before the material is used to render a 3D object.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Scene} scene - The scene.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Object3D} object - The 3D object.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * An optional callback that is executed immediately before the shader
   * program is compiled. This function is called with the shader source code
   * as a parameter. Useful for the modification of built-in materials.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}. The
   * recommended approach when customizing materials is to use `WebGPURenderer` with the new
   * Node Material system and [TSL](https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language).
   *
   * @param {{vertexShader:string,fragmentShader:string,uniforms:Object}} shaderobject - The object holds the uniforms and the vertex and fragment shader source.
   * @param {WebGLRenderer} renderer - A reference to the renderer.
   */
  onBeforeCompile() {
  }
  /**
   * In case {@link Material#onBeforeCompile} is used, this callback can be used to identify
   * values of settings used in `onBeforeCompile()`, so three.js can reuse a cached
   * shader or recompile the shader for this material as needed.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @return {string} The custom program cache key.
   */
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  /**
   * This method can be used to set default values from parameter objects.
   * It is a generic implementation so it can be used with different types
   * of materials.
   *
   * @param {Object} [values] - The material values to set.
   */
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          Re(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          Re(`Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector2 && n && n.isVector2 || r && r.isEuler && n && n.isEuler || r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
      }
  }
  /**
   * Serializes the material into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized material.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, n.blending = this.blending, n.side = this.side, n.shadowSide = this.shadowSide, n.vertexColors = this.vertexColors, n.opacity = this.opacity, n.transparent = this.transparent, n.blendSrc = this.blendSrc, n.blendDst = this.blendDst, n.blendEquation = this.blendEquation, n.blendSrcAlpha = this.blendSrcAlpha, n.blendDstAlpha = this.blendDstAlpha, n.blendEquationAlpha = this.blendEquationAlpha, n.blendColor = this.blendColor.getHex(), n.blendAlpha = this.blendAlpha, n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.clipIntersection = this.clipIntersection, n.clipShadows = this.clipShadows, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, n.stencilWrite = this.stencilWrite, n.polygonOffset = this.polygonOffset, n.polygonOffsetFactor = this.polygonOffsetFactor, n.polygonOffsetUnits = this.polygonOffsetUnits, n.dithering = this.dithering, n.alphaTest = this.alphaTest, n.alphaHash = this.alphaHash, n.alphaToCoverage = this.alphaToCoverage, n.premultipliedAlpha = this.premultipliedAlpha, n.forceSinglePass = this.forceSinglePass, n.allowOverride = this.allowOverride, n.visible = this.visible, n.toneMapped = this.toneMapped, n.name = this.name, this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.retroreflectivity !== void 0 && (n.retroreflectivity = this.retroreflectivity), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), Array.isArray(this.clippingPlanes) && this.clippingPlanes.length > 0 && (n.clippingPlanes = this.clippingPlanes.map((a) => a.toJSON())), this.rotation !== void 0 && (n.rotation = this.rotation), this.depthPacking !== void 0 && (n.depthPacking = this.depthPacking), this.linewidth !== void 0 && (n.linewidth = this.linewidth), this.linecap !== void 0 && (n.linecap = this.linecap), this.linejoin !== void 0 && (n.linejoin = this.linejoin), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.wireframe !== void 0 && (n.wireframe = this.wireframe), this.wireframeLinewidth !== void 0 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== void 0 && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== void 0 && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading !== void 0 && (n.flatShading = this.flatShading), this.fog !== void 0 && (n.fog = this.fog), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(a) {
      const s = [];
      for (const o in a) {
        const c = a[o];
        delete c.metadata, s.push(c);
      }
      return s;
    }
    if (t) {
      const a = r(e.textures), s = r(e.images);
      a.length > 0 && (n.textures = a), s.length > 0 && (n.images = s);
    }
    return n;
  }
  /**
   * Deserializes the material from the given JSON.
   *
   * @param {Object} json - The JSON holding the serialized material.
   * @param {Object<string,Texture>} textures - A dictionary holding textures referenced by the material.
   * @return {Material} A reference to this material.
   */
  fromJSON(e, t) {
    if (e.uuid !== void 0 && (this.uuid = e.uuid), e.name !== void 0 && (this.name = e.name), e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color), e.roughness !== void 0 && (this.roughness = e.roughness), e.metalness !== void 0 && (this.metalness = e.metalness), e.sheen !== void 0 && (this.sheen = e.sheen), e.sheenColor !== void 0 && (this.sheenColor = new We().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(e.emissive), e.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(e.specular), e.specularIntensity !== void 0 && (this.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (this.shininess = e.shininess), e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = e.clearcoatRoughness), e.dispersion !== void 0 && (this.dispersion = e.dispersion), e.retroreflectivity !== void 0 && (this.retroreflectivity = e.retroreflectivity), e.iridescence !== void 0 && (this.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (this.transmission = e.transmission), e.thickness !== void 0 && (this.thickness = e.thickness), e.attenuationDistance !== void 0 && (this.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (this.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (this.fog = e.fog), e.flatShading !== void 0 && (this.flatShading = e.flatShading), e.blending !== void 0 && (this.blending = e.blending), e.combine !== void 0 && (this.combine = e.combine), e.side !== void 0 && (this.side = e.side), e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide), e.opacity !== void 0 && (this.opacity = e.opacity), e.transparent !== void 0 && (this.transparent = e.transparent), e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc), e.depthTest !== void 0 && (this.depthTest = e.depthTest), e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite), e.clippingPlanes !== void 0 && (this.clippingPlanes = e.clippingPlanes.map((n) => new hn().fromJSON(n))), e.clipIntersection !== void 0 && (this.clipIntersection = e.clipIntersection), e.clipShadows !== void 0 && (this.clipShadows = e.clipShadows), e.depthPacking !== void 0 && (this.depthPacking = e.depthPacking), e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc), e.blendDst !== void 0 && (this.blendDst = e.blendDst), e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (this.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (this.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (this.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (this.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (this.rotation = e.rotation), e.linewidth !== void 0 && (this.linewidth = e.linewidth), e.linecap !== void 0 && (this.linecap = e.linecap), e.linejoin !== void 0 && (this.linejoin = e.linejoin), e.dashSize !== void 0 && (this.dashSize = e.dashSize), e.gapSize !== void 0 && (this.gapSize = e.gapSize), e.scale !== void 0 && (this.scale = e.scale), e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (this.dithering = e.dithering), e.alphaToCoverage !== void 0 && (this.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (this.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride), e.visible !== void 0 && (this.visible = e.visible), e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped), e.userData !== void 0 && (this.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? this.vertexColors = e.vertexColors > 0 : this.vertexColors = e.vertexColors), e.size !== void 0 && (this.size = e.size), e.sizeAttenuation !== void 0 && (this.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (this.map = t[e.map] || null), e.matcap !== void 0 && (this.matcap = t[e.matcap] || null), e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null), e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null), e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale), e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null), e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType), e.normalScale !== void 0) {
      let n = e.normalScale;
      Array.isArray(n) === !1 && (n = [n, n]), this.normalScale = new De().fromArray(n);
    }
    return e.displacementMap !== void 0 && (this.displacementMap = t[e.displacementMap] || null), e.displacementScale !== void 0 && (this.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (this.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (this.roughnessMap = t[e.roughnessMap] || null), e.metalnessMap !== void 0 && (this.metalnessMap = t[e.metalnessMap] || null), e.emissiveMap !== void 0 && (this.emissiveMap = t[e.emissiveMap] || null), e.emissiveIntensity !== void 0 && (this.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (this.specularMap = t[e.specularMap] || null), e.specularIntensityMap !== void 0 && (this.specularIntensityMap = t[e.specularIntensityMap] || null), e.specularColorMap !== void 0 && (this.specularColorMap = t[e.specularColorMap] || null), e.envMap !== void 0 && (this.envMap = t[e.envMap] || null), e.envMapRotation !== void 0 && this.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (this.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (this.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null), e.lightMapIntensity !== void 0 && (this.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null), e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (this.gradientMap = t[e.gradientMap] || null), e.clearcoatMap !== void 0 && (this.clearcoatMap = t[e.clearcoatMap] || null), e.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null), e.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null), e.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new De().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (this.iridescenceMap = t[e.iridescenceMap] || null), e.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null), e.transmissionMap !== void 0 && (this.transmissionMap = t[e.transmissionMap] || null), e.thicknessMap !== void 0 && (this.thicknessMap = t[e.thicknessMap] || null), e.anisotropyMap !== void 0 && (this.anisotropyMap = t[e.anisotropyMap] || null), e.sheenColorMap !== void 0 && (this.sheenColorMap = t[e.sheenColorMap] || null), e.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null), this;
  }
  /**
   * Returns a new material with copied values from this instance.
   *
   * @return {Material} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given material to this instance.
   *
   * @param {Material} source - The material to copy.
   * @return {Material} A reference to this instance.
   */
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let a = 0; a !== r; ++a)
        n[a] = t[a].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Material#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Setting this property to `true` indicates the engine the material
   * needs to be recompiled.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
const en = /* @__PURE__ */ new k(), yr = /* @__PURE__ */ new k(), bi = /* @__PURE__ */ new k(), Ai = /* @__PURE__ */ new k();
class Io {
  /**
   * Constructs a new ray.
   *
   * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
   * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
   */
  constructor(e = new k(), t = new k(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  /**
   * Sets the ray's components by copying the given values.
   *
   * @param {Vector3} origin - The origin.
   * @param {Vector3} direction - The direction.
   * @return {Ray} A reference to this ray.
   */
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  /**
   * Copies the values of the given ray to this instance.
   *
   * @param {Ray} ray - The ray to copy.
   * @return {Ray} A reference to this ray.
   */
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  /**
   * Returns a vector that is located at a given distance along this ray.
   *
   * @param {number} t - The distance along the ray to retrieve a position for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A position on the ray.
   */
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  /**
   * Adjusts the direction of the ray to point at the given vector in world space.
   *
   * @param {Vector3} v - The target position.
   * @return {Ray} A reference to this ray.
   */
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  /**
   * Shift the origin of this ray along its direction by the given distance.
   *
   * @param {number} t - The distance along the ray to interpolate.
   * @return {Ray} A reference to this ray.
   */
  recast(e) {
    return this.origin.copy(this.at(e, en)), this;
  }
  /**
   * Returns the point along this ray that is closest to the given point.
   *
   * @param {Vector3} point - A point in 3D space to get the closet location on the ray for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on this ray.
   */
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  /**
   * Returns the distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The distance.
   */
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  /**
   * Returns the squared distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The squared distance.
   */
  distanceSqToPoint(e) {
    const t = en.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (en.copy(this.origin).addScaledVector(this.direction, t), en.distanceToSquared(e));
  }
  /**
   * Returns the squared distance between this ray and the given line segment.
   *
   * @param {Vector3} v0 - The start point of the line segment.
   * @param {Vector3} v1 - The end point of the line segment.
   * @param {Vector3} [optionalPointOnRay] - When provided, it receives the point on this ray that is closest to the segment.
   * @param {Vector3} [optionalPointOnSegment] - When provided, it receives the point on the line segment that is closest to this ray.
   * @return {number} The squared distance.
   */
  distanceSqToSegment(e, t, n, r) {
    yr.copy(e).add(t).multiplyScalar(0.5), bi.copy(t).sub(e).normalize(), Ai.copy(this.origin).sub(yr);
    const a = e.distanceTo(t) * 0.5, s = -this.direction.dot(bi), o = Ai.dot(this.direction), c = -Ai.dot(bi), l = Ai.lengthSq(), f = Math.abs(1 - s * s);
    let d, u, h, _;
    if (f > 0)
      if (d = s * c - o, u = s * o - c, _ = a * f, d >= 0)
        if (u >= -_)
          if (u <= _) {
            const M = 1 / f;
            d *= M, u *= M, h = d * (d + s * u + 2 * o) + u * (s * d + u + 2 * c) + l;
          } else
            u = a, d = Math.max(0, -(s * u + o)), h = -d * d + u * (u + 2 * c) + l;
        else
          u = -a, d = Math.max(0, -(s * u + o)), h = -d * d + u * (u + 2 * c) + l;
      else
        u <= -_ ? (d = Math.max(0, -(-s * a + o)), u = d > 0 ? -a : Math.min(Math.max(-a, -c), a), h = -d * d + u * (u + 2 * c) + l) : u <= _ ? (d = 0, u = Math.min(Math.max(-a, -c), a), h = u * (u + 2 * c) + l) : (d = Math.max(0, -(s * a + o)), u = d > 0 ? a : Math.min(Math.max(-a, -c), a), h = -d * d + u * (u + 2 * c) + l);
    else
      u = s > 0 ? -a : a, d = Math.max(0, -(s * u + o)), h = -d * d + u * (u + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, d), r && r.copy(yr).addScaledVector(bi, u), h;
  }
  /**
   * Intersects this ray with the given sphere, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectSphere(e, t) {
    if (e.radius < 0) return null;
    en.subVectors(e.center, this.origin);
    const n = en.dot(this.direction), r = en.dot(en) - n * n, a = e.radius * e.radius;
    if (r > a) return null;
    const s = Math.sqrt(a - r), o = n - s, c = n + s;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  /**
   * Returns `true` if this ray intersects with the given sphere.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @return {boolean} Whether this ray intersects with the given sphere or not.
   */
  intersectsSphere(e) {
    return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  /**
   * Computes the distance from the ray's origin to the given plane. Returns `null` if the ray
   * does not intersect with the plane.
   *
   * @param {Plane} plane - The plane to compute the distance to.
   * @return {?number} Whether this ray intersects with the given sphere or not.
   */
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  /**
   * Intersects this ray with the given plane, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Plane} plane - The plane to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  /**
   * Returns `true` if this ray intersects with the given plane.
   *
   * @param {Plane} plane - The plane to intersect.
   * @return {boolean} Whether this ray intersects with the given plane or not.
   */
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  /**
   * Intersects this ray with the given bounding box, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Box3} box - The box to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectBox(e, t) {
    let n, r, a, s, o, c;
    const l = 1 / this.direction.x, f = 1 / this.direction.y, d = 1 / this.direction.z, u = this.origin;
    return l >= 0 ? (n = (e.min.x - u.x) * l, r = (e.max.x - u.x) * l) : (n = (e.max.x - u.x) * l, r = (e.min.x - u.x) * l), f >= 0 ? (a = (e.min.y - u.y) * f, s = (e.max.y - u.y) * f) : (a = (e.max.y - u.y) * f, s = (e.min.y - u.y) * f), n > s || a > r || ((a > n || isNaN(n)) && (n = a), (s < r || isNaN(r)) && (r = s), d >= 0 ? (o = (e.min.z - u.z) * d, c = (e.max.z - u.z) * d) : (o = (e.max.z - u.z) * d, c = (e.min.z - u.z) * d), n > c || o > r) || ((o > n || n !== n) && (n = o), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(e) {
    return this.intersectBox(e, en) !== null;
  }
  /**
   * Intersects this ray with the given triangle, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Vector3} a - The first vertex of the triangle.
   * @param {Vector3} b - The second vertex of the triangle.
   * @param {Vector3} c - The third vertex of the triangle.
   * @param {boolean} backfaceCulling - Whether to use backface culling or not.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectTriangle(e, t, n, r, a) {
    const s = this.origin, o = this.direction, c = o.x, l = o.y, f = o.z, d = e.x - s.x, u = e.y - s.y, h = e.z - s.z, _ = t.x - s.x, M = t.y - s.y, g = t.z - s.z, p = n.x - s.x, A = n.y - s.y, R = n.z - s.z, S = Math.abs(c), y = Math.abs(l), T = Math.abs(f);
    let w, v, b, L, F, B, V, I, G, J, W, ne;
    if (S >= y && S >= T ? (b = c, B = d, G = _, ne = p, c >= 0 ? (w = l, v = f, L = u, F = h, V = M, I = g, J = A, W = R) : (w = f, v = l, L = h, F = u, V = g, I = M, J = R, W = A)) : y >= T ? (b = l, B = u, G = M, ne = A, l >= 0 ? (w = f, v = c, L = h, F = d, V = g, I = _, J = R, W = p) : (w = c, v = f, L = d, F = h, V = _, I = g, J = p, W = R)) : (b = f, B = h, G = g, ne = R, f >= 0 ? (w = c, v = l, L = d, F = u, V = _, I = M, J = p, W = A) : (w = l, v = c, L = u, F = d, V = M, I = _, J = A, W = p)), b === 0) return null;
    const X = w / b, Z = v / b, ee = 1 / b, ve = L - X * B, be = F - Z * B, et = V - X * G, Ve = I - Z * G, Ye = J - X * ne, Y = W - Z * ne, j = Ye * Ve - Y * et, _e = ve * Y - be * Ye, Ce = et * be - Ve * ve;
    if (r) {
      if (j < 0 || _e < 0 || Ce < 0) return null;
    } else if ((j < 0 || _e < 0 || Ce < 0) && (j > 0 || _e > 0 || Ce > 0)) return null;
    const me = j + _e + Ce;
    if (me === 0) return null;
    const Ue = ee * (j * B + _e * G + Ce * ne);
    return (me > 0 ? Ue < 0 : Ue > 0) ? null : this.at(Ue / me, a);
  }
  /**
   * Transforms this ray with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix4 - The transformation matrix.
   * @return {Ray} A reference to this ray.
   */
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  /**
   * Returns `true` if this ray is equal with the given one.
   *
   * @param {Ray} ray - The ray to test for equality.
   * @return {boolean} Whether this ray is equal with the given one.
   */
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  /**
   * Returns a new ray with copied values from this instance.
   *
   * @return {Ray} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class Hr extends Ji {
  /**
   * Constructs a new mesh basic material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new We(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new En(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Aa = /* @__PURE__ */ new lt(), xn = /* @__PURE__ */ new Io(), wi = /* @__PURE__ */ new Vr(), wa = /* @__PURE__ */ new k(), Ri = /* @__PURE__ */ new k(), Ci = /* @__PURE__ */ new k(), Pi = /* @__PURE__ */ new k(), Tr = /* @__PURE__ */ new k(), Di = /* @__PURE__ */ new k(), Ra = /* @__PURE__ */ new k(), Li = /* @__PURE__ */ new k();
class Pt extends Ct {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(e = new Nt(), t = new Hr()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  /**
   * Sets the values of {@link Mesh#morphTargetDictionary} and {@link Mesh#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let a = 0, s = r.length; a < s; a++) {
          const o = r[a].name || String(a);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = a;
        }
      }
    }
  }
  /**
   * Returns the local-space position of the vertex at the given index, taking into
   * account the current animation state of both morph targets and skinning.
   *
   * @param {number} index - The vertex index.
   * @param {Vector3} target - The target object that is used to store the method's result.
   * @return {Vector3} The vertex position in local space.
   */
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, a = n.morphAttributes.position, s = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (a && o) {
      Di.set(0, 0, 0);
      for (let c = 0, l = a.length; c < l; c++) {
        const f = o[c], d = a[c];
        f !== 0 && (Tr.fromBufferAttribute(d, e), s ? Di.addScaledVector(Tr, f) : Di.addScaledVector(Tr.sub(t), f));
      }
      t.add(Di);
    }
    return t;
  }
  /**
   * Returns `true` if this mesh intersects the given frustum.
   *
   * @param {Frustum|FrustumArray} frustum - The frustum to test.
   * @return {boolean} Whether this mesh intersects the given frustum or not.
   */
  intersectsFrustum(e) {
    return e.intersectsObject(this);
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    const n = this.geometry, r = this.material, a = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), wi.copy(n.boundingSphere), wi.applyMatrix4(a), xn.copy(e.ray).recast(e.near), !(wi.containsPoint(xn.origin) === !1 && (xn.intersectSphere(wi, wa) === null || xn.origin.distanceToSquared(wa) > (e.far - e.near) ** 2)) && (Aa.copy(a).invert(), xn.copy(e.ray).applyMatrix4(Aa), !(n.boundingBox !== null && xn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, xn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const a = this.geometry, s = this.material, o = a.index, c = a.attributes.position, l = a.attributes.uv, f = a.attributes.uv1, d = a.attributes.normal, u = a.groups, h = a.drawRange;
    if (o !== null)
      if (Array.isArray(s))
        for (let _ = 0, M = u.length; _ < M; _++) {
          const g = u[_], p = s[g.materialIndex], A = Math.max(g.start, h.start), R = Math.min(o.count, Math.min(g.start + g.count, h.start + h.count));
          for (let S = A, y = R; S < y; S += 3) {
            const T = o.getX(S), w = o.getX(S + 1), v = o.getX(S + 2);
            r = Fi(this, p, e, n, l, f, d, T, w, v), r && (r.faceIndex = Math.floor(S / 3), r.face.materialIndex = g.materialIndex, t.push(r));
          }
        }
      else {
        const _ = Math.max(0, h.start), M = Math.min(o.count, h.start + h.count);
        for (let g = _, p = M; g < p; g += 3) {
          const A = o.getX(g), R = o.getX(g + 1), S = o.getX(g + 2);
          r = Fi(this, s, e, n, l, f, d, A, R, S), r && (r.faceIndex = Math.floor(g / 3), t.push(r));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(s))
        for (let _ = 0, M = u.length; _ < M; _++) {
          const g = u[_], p = s[g.materialIndex], A = Math.max(g.start, h.start), R = Math.min(c.count, Math.min(g.start + g.count, h.start + h.count));
          for (let S = A, y = R; S < y; S += 3) {
            const T = S, w = S + 1, v = S + 2;
            r = Fi(this, p, e, n, l, f, d, T, w, v), r && (r.faceIndex = Math.floor(S / 3), r.face.materialIndex = g.materialIndex, t.push(r));
          }
        }
      else {
        const _ = Math.max(0, h.start), M = Math.min(c.count, h.start + h.count);
        for (let g = _, p = M; g < p; g += 3) {
          const A = g, R = g + 1, S = g + 2;
          r = Fi(this, s, e, n, l, f, d, A, R, S), r && (r.faceIndex = Math.floor(g / 3), t.push(r));
        }
      }
  }
}
function Uo(i, e, t, n, r, a, s, o) {
  let c;
  if (e.side === 1 ? c = n.intersectTriangle(s, a, r, !0, o) : c = n.intersectTriangle(r, a, s, e.side === 0, o), c === null) return null;
  Li.copy(o), Li.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(Li);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Li.clone(),
    object: i
  };
}
function Fi(i, e, t, n, r, a, s, o, c, l) {
  i.getVertexPosition(o, Ri), i.getVertexPosition(c, Ci), i.getVertexPosition(l, Pi);
  const f = Uo(i, e, t, n, Ri, Ci, Pi, Ra);
  if (f) {
    const d = new k();
    zt.getBarycoord(Ra, Ri, Ci, Pi, d), r && (f.uv = zt.getInterpolatedAttribute(r, o, c, l, d, new De())), a && (f.uv1 = zt.getInterpolatedAttribute(a, o, c, l, d, new De())), s && (f.normal = zt.getInterpolatedAttribute(s, o, c, l, d, new k()), f.normal.dot(n.direction) > 0 && f.normal.multiplyScalar(-1));
    const u = {
      a: o,
      b: c,
      c: l,
      normal: new k(),
      materialIndex: 0
    };
    zt.getNormal(Ri, Ci, Pi, u.normal), f.face = u, f.barycoord = d;
  }
  return f;
}
class Wr extends bt {
  /**
   * Constructs a new data texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=NearestFilter] - The mag filter value.
   * @param {number} [minFilter=NearestFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space.
   */
  constructor(e = null, t = 1, n = 1, r, a, s, o, c, l = 1003, f = 1003, d, u) {
    super(null, s, o, c, l, f, r, a, d, u), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Sn = /* @__PURE__ */ new Vr(), No = /* @__PURE__ */ new De(0.5, 0.5), Ii = /* @__PURE__ */ new k();
class _s {
  /**
   * Constructs a new frustum.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   */
  constructor(e = new hn(), t = new hn(), n = new hn(), r = new hn(), a = new hn(), s = new hn()) {
    this.planes = [e, t, n, r, a, s];
  }
  /**
   * Sets the frustum planes by copying the given planes.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   * @return {Frustum} A reference to this frustum.
   */
  set(e, t, n, r, a, s) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(a), o[5].copy(s), this;
  }
  /**
   * Copies the values of the given frustum to this instance.
   *
   * @param {Frustum} frustum - The frustum to copy.
   * @return {Frustum} A reference to this frustum.
   */
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  /**
   * Sets the frustum planes from the given projection matrix.
   *
   * @param {Matrix4} m - The projection matrix.
   * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} coordinateSystem - The coordinate system.
   * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
   * @return {Frustum} A reference to this frustum.
   */
  setFromProjectionMatrix(e, t = 2e3, n = !1) {
    const r = this.planes, a = e.elements, s = a[0], o = a[1], c = a[2], l = a[3], f = a[4], d = a[5], u = a[6], h = a[7], _ = a[8], M = a[9], g = a[10], p = a[11], A = a[12], R = a[13], S = a[14], y = a[15];
    if (r[0].setComponents(l - s, h - f, p - _, y - A).normalize(), r[1].setComponents(l + s, h + f, p + _, y + A).normalize(), r[2].setComponents(l + o, h + d, p + M, y + R).normalize(), r[3].setComponents(l - o, h - d, p - M, y - R).normalize(), n)
      r[4].setComponents(c, u, g, S).normalize(), r[5].setComponents(l - c, h - u, p - g, y - S).normalize();
    else if (r[4].setComponents(l - c, h - u, p - g, y - S).normalize(), t === 2e3)
      r[5].setComponents(l + c, h + u, p + g, y + S).normalize();
    else if (t === 2001)
      r[5].setComponents(c, u, g, S).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  /**
   * Returns `true` if the 3D object's bounding sphere is intersecting this frustum.
   *
   * Note that the 3D object must have a geometry so that the bounding sphere can be calculated.
   *
   * @param {Object3D} object - The 3D object to test.
   * @return {boolean} Whether the 3D object's bounding sphere is intersecting this frustum or not.
   */
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Sn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Sn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Sn);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(e) {
    Sn.center.set(0, 0, 0);
    const t = No.distanceTo(e.center);
    return Sn.radius = 0.7071067811865476 + t, Sn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Sn);
  }
  /**
   * Returns `true` if the given bounding sphere is intersecting this frustum.
   *
   * This is a fast, conservative test that favors performance over precision. It can
   * report false positives for spheres that lie outside the frustum but are not separated
   * by a single frustum plane. It never reports false negatives, so it is safe for culling.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the bounding sphere is intersecting this frustum or not.
   */
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let a = 0; a < 6; a++)
      if (t[a].distanceToPoint(n) < r)
        return !1;
    return !0;
  }
  /**
   * Returns `true` if the given bounding box is intersecting this frustum.
   *
   * This is a fast, conservative test that favors performance over precision. It can
   * report false positives for large boxes that lie outside the frustum but are not
   * separated by a single frustum plane. It never reports false negatives, so it is
   * safe for culling.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box is intersecting this frustum or not.
   */
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (Ii.x = r.normal.x > 0 ? e.max.x : e.min.x, Ii.y = r.normal.y > 0 ? e.max.y : e.min.y, Ii.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Ii) < 0)
        return !1;
    }
    return !0;
  }
  /**
   * Returns `true` if the given point lies within the frustum.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the point lies within this frustum or not.
   */
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  /**
   * Returns a new frustum with copied values from this instance.
   *
   * @return {Frustum} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class vs extends bt {
  /**
   * Constructs a new cube texture.
   *
   * @param {Array<Image>} [images=[]] - An array holding a image for each side of a cube.
   * @param {number} [mapping=CubeReflectionMapping] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space value.
   */
  constructor(e = [], t = 301, n, r, a, s, o, c, l, f) {
    super(e, t, n, r, a, s, o, c, l, f), this.isCubeTexture = !0, this.flipY = !1;
  }
  /**
   * Alias for {@link CubeTexture#image}.
   *
   * @type {Array<Image>}
   */
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class mn extends bt {
  /**
   * Constructs a new depth texture.
   *
   * @param {number} width - The width of the texture.
   * @param {number} height - The height of the texture.
   * @param {number} [type=UnsignedIntType] - The texture type.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {number} [format=DepthFormat] - The texture format.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e, t, n = 1014, r, a, s, o = 1003, c = 1003, l, f = 1026, d = 1) {
    if (f !== 1026 && f !== 1027)
      throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const u = { width: e, height: t, depth: d };
    super(u, r, a, s, o, c, f, n, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new zr(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.compareFunction = this.compareFunction, t;
  }
}
class Oo extends mn {
  /**
   * Constructs a new cube depth texture.
   *
   * @param {number} size - The size (width and height) of each cube face.
   * @param {number} [type=UnsignedIntType] - The texture type.
   * @param {number} [mapping=CubeReflectionMapping] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=NearestFilter] - The mag filter value.
   * @param {number} [minFilter=NearestFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {number} [format=DepthFormat] - The texture format.
   */
  constructor(e, t = 1014, n = 301, r, a, s = 1003, o = 1003, c, l = 1026) {
    const f = { width: e, height: e, depth: 1 }, d = [f, f, f, f, f, f];
    super(e, e, t, n, r, a, s, o, c, l), this.image = d, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
  }
  /**
   * Alias for {@link CubeDepthTexture#image}.
   *
   * @type {Array<Image>}
   */
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class xs extends bt {
  /**
   * Creates a new raw texture.
   *
   * @param {?(WebGLTexture|GPUTexture)} [sourceTexture=null] - The external texture.
   */
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = !0;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}
class Jn extends Nt {
  /**
   * Constructs a new box geometry.
   *
   * @param {number} [width=1] - The width. That is, the length of the edges parallel to the X axis.
   * @param {number} [height=1] - The height. That is, the length of the edges parallel to the Y axis.
   * @param {number} [depth=1] - The depth. That is, the length of the edges parallel to the Z axis.
   * @param {number} [widthSegments=1] - Number of segmented rectangular faces along the width of the sides.
   * @param {number} [heightSegments=1] - Number of segmented rectangular faces along the height of the sides.
   * @param {number} [depthSegments=1] - Number of segmented rectangular faces along the depth of the sides.
   */
  constructor(e = 1, t = 1, n = 1, r = 1, a = 1, s = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: r,
      heightSegments: a,
      depthSegments: s
    };
    const o = this;
    r = Math.floor(r), a = Math.floor(a), s = Math.floor(s);
    const c = [], l = [], f = [], d = [];
    let u = 0, h = 0;
    _("z", "y", "x", -1, -1, n, t, e, s, a, 0), _("z", "y", "x", 1, -1, n, t, -e, s, a, 1), _("x", "z", "y", 1, 1, e, n, t, r, s, 2), _("x", "z", "y", 1, -1, e, n, -t, r, s, 3), _("x", "y", "z", 1, -1, e, t, n, r, a, 4), _("x", "y", "z", -1, -1, e, t, -n, r, a, 5), this.setIndex(c), this.setAttribute("position", new Ht(l, 3)), this.setAttribute("normal", new Ht(f, 3)), this.setAttribute("uv", new Ht(d, 2));
    function _(M, g, p, A, R, S, y, T, w, v, b) {
      const L = S / w, F = y / v, B = S / 2, V = y / 2, I = T / 2, G = w + 1, J = v + 1;
      let W = 0, ne = 0;
      const X = new k();
      for (let Z = 0; Z < J; Z++) {
        const ee = Z * F - V;
        for (let ve = 0; ve < G; ve++) {
          const be = ve * L - B;
          X[M] = be * A, X[g] = ee * R, X[p] = I, l.push(X.x, X.y, X.z), X[M] = 0, X[g] = 0, X[p] = T > 0 ? 1 : -1, f.push(X.x, X.y, X.z), d.push(ve / w), d.push(1 - Z / v), W += 1;
        }
      }
      for (let Z = 0; Z < v; Z++)
        for (let ee = 0; ee < w; ee++) {
          const ve = u + ee + G * Z, be = u + ee + G * (Z + 1), et = u + (ee + 1) + G * (Z + 1), Ve = u + (ee + 1) + G * Z;
          c.push(ve, be, Ve), c.push(be, et, Ve), ne += 6;
        }
      o.addGroup(h, ne, b), h += ne, u += W;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {BoxGeometry} A new instance.
   */
  static fromJSON(e) {
    return new Jn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
class Qi extends Nt {
  /**
   * Constructs a new plane geometry.
   *
   * @param {number} [width=1] - The width along the X axis.
   * @param {number} [height=1] - The height along the Y axis
   * @param {number} [widthSegments=1] - The number of segments along the X axis.
   * @param {number} [heightSegments=1] - The number of segments along the Y axis.
   */
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    const a = e / 2, s = t / 2, o = Math.floor(n), c = Math.floor(r), l = o + 1, f = c + 1, d = e / o, u = t / c, h = [], _ = [], M = [], g = [];
    for (let p = 0; p < f; p++) {
      const A = p * u - s;
      for (let R = 0; R < l; R++) {
        const S = R * d - a;
        _.push(S, -A, 0), M.push(0, 0, 1), g.push(R / o), g.push(1 - p / c);
      }
    }
    for (let p = 0; p < c; p++)
      for (let A = 0; A < o; A++) {
        const R = A + l * p, S = A + l * (p + 1), y = A + 1 + l * (p + 1), T = A + 1 + l * p;
        h.push(R, S, T), h.push(S, y, T);
      }
    this.setIndex(h), this.setAttribute("position", new Ht(_, 3)), this.setAttribute("normal", new Ht(M, 3)), this.setAttribute("uv", new Ht(g, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {PlaneGeometry} A new instance.
   */
  static fromJSON(e) {
    return new Qi(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
function Kn(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      if (Ca(r))
        r.isRenderTargetTexture ? (Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone();
      else if (Array.isArray(r))
        if (Ca(r[0])) {
          const a = [];
          for (let s = 0, o = r.length; s < o; s++)
            a[s] = r[s].clone();
          e[t][n] = a;
        } else
          e[t][n] = r.slice();
      else
        e[t][n] = r;
    }
  }
  return e;
}
function Tt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = Kn(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function Ca(i) {
  return i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion);
}
function Bo(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function Ss(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : ke.workingColorSpace;
}
const Go = { clone: Kn, merge: Tt };
var ko = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, zo = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Ut extends Ji {
  /**
   * Constructs a new shader material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = ko, this.fragmentShader = zo, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Kn(e.uniforms), this.uniformsGroups = Bo(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const s = this.uniforms[r].value;
      s && s.isTexture ? t.uniforms[r] = {
        type: "t",
        value: s.toJSON(e).uuid
      } : s && s.isColor ? t.uniforms[r] = {
        type: "c",
        value: s.getHex()
      } : s && s.isVector2 ? t.uniforms[r] = {
        type: "v2",
        value: s.toArray()
      } : s && s.isVector3 ? t.uniforms[r] = {
        type: "v3",
        value: s.toArray()
      } : s && s.isVector4 ? t.uniforms[r] = {
        type: "v4",
        value: s.toArray()
      } : s && s.isMatrix3 ? t.uniforms[r] = {
        type: "m3",
        value: s.toArray()
      } : s && s.isMatrix4 ? t.uniforms[r] = {
        type: "m4",
        value: s.toArray()
      } : t.uniforms[r] = {
        value: s
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
  /**
   * Deserializes the material from the given JSON.
   *
   * @param {Object} json - The JSON holding the serialized material.
   * @param {Object<string,Texture>} textures - A dictionary holding textures referenced by the material.
   * @return {ShaderMaterial} A reference to this material.
   */
  fromJSON(e, t) {
    if (super.fromJSON(e, t), e.uniforms !== void 0)
      for (const n in e.uniforms) {
        const r = e.uniforms[n];
        switch (this.uniforms[n] = {}, r.type) {
          case "t":
            this.uniforms[n].value = t[r.value] || null;
            break;
          case "c":
            this.uniforms[n].value = new We().setHex(r.value);
            break;
          case "v2":
            this.uniforms[n].value = new De().fromArray(r.value);
            break;
          case "v3":
            this.uniforms[n].value = new k().fromArray(r.value);
            break;
          case "v4":
            this.uniforms[n].value = new ze().fromArray(r.value);
            break;
          case "m3":
            this.uniforms[n].value = new Pe().fromArray(r.value);
            break;
          case "m4":
            this.uniforms[n].value = new lt().fromArray(r.value);
            break;
          default:
            this.uniforms[n].value = r.value;
        }
      }
    if (e.defines !== void 0 && (this.defines = e.defines), e.vertexShader !== void 0 && (this.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (this.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (this.glslVersion = e.glslVersion), e.extensions !== void 0)
      for (const n in e.extensions)
        this.extensions[n] = e.extensions[n];
    return e.lights !== void 0 && (this.lights = e.lights), e.clipping !== void 0 && (this.clipping = e.clipping), this;
  }
}
class Xr extends Ut {
  /**
   * Constructs a new raw shader material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
class Vo extends Ji {
  /**
   * Constructs a new mesh depth material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Ho extends Ji {
  /**
   * Constructs a new mesh distance material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Ui = /* @__PURE__ */ new k(), Ni = /* @__PURE__ */ new $n(), qt = /* @__PURE__ */ new k();
class qr extends Ct {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new lt(), this.projectionMatrix = new lt(), this.projectionMatrixInverse = new lt(), this.coordinateSystem = 2e3, this._reversedDepth = !1;
  }
  /**
   * The flag that indicates whether the camera uses a reversed depth buffer.
   *
   * @type {boolean}
   * @default false
   */
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * This method is overwritten since cameras have a different forward vector compared to other
   * 3D objects. A camera looks down its local, negative z-axis by default.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorld.decompose(Ui, Ni, qt), qt.x === 1 && qt.y === 1 && qt.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Ui, Ni, qt.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e, t, n = !1) {
    super.updateWorldMatrix(e, t, n), this.matrixWorld.decompose(Ui, Ni, qt), qt.x === 1 && qt.y === 1 && qt.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Ui, Ni, qt.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const dn = /* @__PURE__ */ new k(), Pa = /* @__PURE__ */ new De(), Da = /* @__PURE__ */ new De();
class It extends qr {
  /**
   * Constructs a new perspective camera.
   *
   * @param {number} [fov=50] - The vertical field of view.
   * @param {number} [aspect=1] - The aspect ratio.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current {@link PerspectiveCamera#filmGauge}.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * @param {number} focalLength - Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = di * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const e = Math.tan(oi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return di * 2 * Math.atan(
      Math.tan(oi * 0.5 * this.fov) / this.zoom
    );
  }
  /**
   * Returns the width of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  /**
   * Returns the height of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets `minTarget` and `maxTarget` to the coordinates of the lower-left and upper-right corners of the view rectangle.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} minTarget - The lower-left corner of the view rectangle is written into this vector.
   * @param {Vector2} maxTarget - The upper-right corner of the view rectangle is written into this vector.
   */
  getViewBounds(e, t, n) {
    dn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(dn.x, dn.y).multiplyScalar(-e / dn.z), dn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(dn.x, dn.y).multiplyScalar(-e / dn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, Pa, Da), t.subVectors(Da, Pa);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *```
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *```
   * then for each monitor you would call it like this:
   *```js
   * const w = 1920;
   * const h = 1080;
   * const fullWidth = w * 3;
   * const fullHeight = h * 2;
   *
   * // --A--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   * // --B--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   * // --C--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   * // --D--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   * // --E--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   * // --F--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   * ```
   *
   * Note there is no reason monitors have to be the same size or in a grid.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   */
  setViewOffset(e, t, n, r, a, s) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = a, this.view.height = s, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(oi * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, a = -0.5 * r;
    const s = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = s.fullWidth, l = s.fullHeight;
      a += s.offsetX * r / c, t -= s.offsetY * n / l, r *= s.width / c, n *= s.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (a += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(a, a + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
class pi extends qr {
  /**
   * Constructs a new orthographic camera.
   *
   * @param {number} [left=-1] - The left plane of the camera's frustum.
   * @param {number} [right=1] - The right plane of the camera's frustum.
   * @param {number} [top=1] - The top plane of the camera's frustum.
   * @param {number} [bottom=-1] - The bottom plane of the camera's frustum.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(e = -1, t = 1, n = 1, r = -1, a = 0.1, s = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = a, this.far = s, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   * @see {@link PerspectiveCamera#setViewOffset}
   */
  setViewOffset(e, t, n, r, a, s) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = a, this.view.height = s, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let a = n - e, s = n + e, o = r + t, c = r - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, f = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      a += l * this.view.offsetX, s = a + l * this.view.width, o -= f * this.view.offsetY, c = o - f * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(a, s, o, c, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Nn = -90, On = 1;
class Wo extends Ct {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new It(Nn, On, e, t);
    r.layers = this.layers, this.add(r);
    const a = new It(Nn, On, e, t);
    a.layers = this.layers, this.add(a);
    const s = new It(Nn, On, e, t);
    s.layers = this.layers, this.add(s);
    const o = new It(Nn, On, e, t);
    o.layers = this.layers, this.add(o);
    const c = new It(Nn, On, e, t);
    c.layers = this.layers, this.add(c);
    const l = new It(Nn, On, e, t);
    l.layers = this.layers, this.add(l);
  }
  /**
   * Must be called when the coordinate system of the cube camera is changed.
   */
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, a, s, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === 2e3)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), a.up.set(0, 0, -1), a.lookAt(0, 1, 0), s.up.set(0, 0, 1), s.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === 2001)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), a.up.set(0, 0, 1), a.lookAt(0, 1, 0), s.up.set(0, 0, -1), s.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  /**
   * Calling this method will render the given scene with the given renderer
   * into the cube render target of the camera.
   *
   * @param {(Renderer|WebGLRenderer)} renderer - The renderer.
   * @param {Scene} scene - The scene to render.
   */
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [a, s, o, c, l, f] = this.children, d = e.getRenderTarget(), u = e.getActiveCubeFace(), h = e.getActiveMipmapLevel(), _ = e.xr.enabled;
    e.xr.enabled = !1;
    const M = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1;
    let g = !1;
    e.isWebGLRenderer === !0 ? g = e.state.buffers.depth.getReversed() : g = e.reversedDepthBuffer, e.setRenderTarget(n, 0, r), g && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 1, r), g && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 2, r), g && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 3, r), g && e.autoClear === !1 && e.clearDepth(), e.render(t, c), e.setRenderTarget(n, 4, r), g && e.autoClear === !1 && e.clearDepth(), e.render(t, l), n.texture.generateMipmaps = M, e.setRenderTarget(n, 5, r), g && e.autoClear === !1 && e.clearDepth(), e.render(t, f), e.setRenderTarget(d, u, h), e.xr.enabled = _, n.texture.needsPMREMUpdate = !0;
  }
}
class Xo extends It {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
  }
}
const jr = class jr {
  /**
   * Constructs a new 2x2 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   */
  constructor(e, t, n, r) {
    this.elements = [
      1,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r);
  }
  /**
   * Sets this matrix to the 2x2 identity matrix.
   *
   * @return {Matrix2} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix2} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let n = 0; n < 4; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} n11 - 1-1 matrix element.
   * @param {number} n12 - 1-2 matrix element.
   * @param {number} n21 - 2-1 matrix element.
   * @param {number} n22 - 2-2 matrix element.
   * @return {Matrix2} A reference to this matrix.
   */
  set(e, t, n, r) {
    const a = this.elements;
    return a[0] = e, a[2] = t, a[1] = n, a[3] = r, this;
  }
};
jr.prototype.isMatrix2 = !0;
let La = jr;
function Fa(i, e, t, n) {
  const r = qo(n);
  switch (t) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case 1021:
      return i * e;
    case 1028:
      return i * e / r.components * r.byteLength;
    case 1029:
      return i * e / r.components * r.byteLength;
    case 1030:
      return i * e * 2 / r.components * r.byteLength;
    case 1031:
      return i * e * 2 / r.components * r.byteLength;
    case 1022:
      return i * e * 3 / r.components * r.byteLength;
    case 1023:
      return i * e * 4 / r.components * r.byteLength;
    case 1033:
      return i * e * 4 / r.components * r.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case 33776:
    case 33777:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 33778:
    case 33779:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case 35841:
    case 35843:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case 35840:
    case 35842:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case 36196:
    case 37492:
    case 37488:
    case 37489:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 37496:
    case 37490:
    case 37491:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case 37808:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37809:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case 37810:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case 37811:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case 37812:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case 37813:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case 37814:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case 37815:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case 37816:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case 37817:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case 37818:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case 37819:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case 37820:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case 37821:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case 36492:
    case 36494:
    case 36495:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case 36283:
    case 36284:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case 36285:
    case 36286:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function qo(i) {
  switch (i) {
    case 1009:
    case 1010:
      return { byteLength: 1, components: 1 };
    case 1012:
    case 1011:
    case 1016:
      return { byteLength: 2, components: 1 };
    case 1017:
    case 1018:
      return { byteLength: 2, components: 4 };
    case 1014:
    case 1013:
    case 1015:
      return { byteLength: 4, components: 1 };
    case 35902:
    case 35899:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: "186"
} }));
typeof window < "u" && (window.__THREE__ ? Re("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "186");
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
function Ms() {
  let i = null, e = !1, t = null, n = null;
  function r(a, s) {
    n = i.requestAnimationFrame(r), t(a, s);
  }
  return {
    start: function() {
      e !== !0 && t !== null && i !== null && (n = i.requestAnimationFrame(r), e = !0);
    },
    stop: function() {
      i !== null && i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(a) {
      t = a;
    },
    setContext: function(a) {
      i = a;
    }
  };
}
function Yo(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, c) {
    const l = o.array, f = o.usage, d = l.byteLength, u = i.createBuffer();
    i.bindBuffer(c, u), i.bufferData(c, l, f), o.onUploadCallback();
    let h;
    if (l instanceof Float32Array)
      h = i.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array)
      h = i.HALF_FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? h = i.HALF_FLOAT : h = i.UNSIGNED_SHORT;
    else if (l instanceof Int16Array)
      h = i.SHORT;
    else if (l instanceof Uint32Array)
      h = i.UNSIGNED_INT;
    else if (l instanceof Int32Array)
      h = i.INT;
    else if (l instanceof Int8Array)
      h = i.BYTE;
    else if (l instanceof Uint8Array)
      h = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray)
      h = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return {
      buffer: u,
      type: h,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: d
    };
  }
  function n(o, c, l) {
    const f = c.array, d = c.updateRanges;
    if (i.bindBuffer(l, o), d.length === 0)
      i.bufferSubData(l, 0, f);
    else {
      d.sort((h, _) => h.start - _.start);
      let u = 0;
      for (let h = 1; h < d.length; h++) {
        const _ = d[u], M = d[h];
        M.start <= _.start + _.count + 1 ? _.count = Math.max(
          _.count,
          M.start + M.count - _.start
        ) : (++u, d[u] = M);
      }
      d.length = u + 1;
      for (let h = 0, _ = d.length; h < _; h++) {
        const M = d[h];
        i.bufferSubData(
          l,
          M.start * f.BYTES_PER_ELEMENT,
          f,
          M.start,
          M.count
        );
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function a(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = e.get(o);
    c && (i.deleteBuffer(c.buffer), e.delete(o));
  }
  function s(o, c) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const f = e.get(o);
      (!f || f.version < o.version) && e.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const l = e.get(o);
    if (l === void 0)
      e.set(o, t(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(l.buffer, o, c), l.version = o.version;
    }
  }
  return {
    get: r,
    remove: a,
    update: s
  };
}
var Ko = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Zo = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, $o = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Jo = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Qo = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, jo = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, el = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, tl = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, nl = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`, il = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, rl = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, al = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, sl = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, ol = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, ll = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, cl = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, ul = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, fl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, dl = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, hl = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`, pl = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`, ml = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`, gl = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`, _l = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, vl = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, xl = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`, Sl = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Ml = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, El = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, yl = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Tl = "gl_FragColor = linearToOutputTexel( gl_FragColor );", bl = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Al = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`, wl = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`, Rl = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Cl = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Pl = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Dl = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Ll = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Fl = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Il = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Ul = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Nl = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Ol = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Bl = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Gl = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`, kl = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`, zl = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Vl = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Hl = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Wl = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Xl = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, ql = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Yl = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Kl = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Zl = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, $l = `#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`, Jl = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Ql = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, jl = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, ec = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, tc = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, nc = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, ic = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, rc = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, ac = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, sc = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, oc = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, lc = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, cc = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, uc = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, fc = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, dc = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, hc = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, pc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, mc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, gc = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`, _c = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, vc = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, xc = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Sc = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Mc = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Ec = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, yc = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`, Tc = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, bc = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Ac = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, wc = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Rc = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Cc = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Pc = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`, Dc = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Lc = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Fc = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Ic = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Uc = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Nc = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Oc = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Bc = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Gc = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, kc = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, zc = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Vc = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Hc = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Wc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Xc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, qc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Yc = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Kc = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Zc = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, $c = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Jc = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Qc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, jc = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, eu = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, tu = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, nu = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, iu = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`, ru = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, au = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, su = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, ou = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, lu = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, cu = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, uu = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, fu = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, du = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, hu = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, pu = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, mu = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, gu = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, _u = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, vu = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, xu = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Su = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Mu = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Eu = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, yu = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Tu = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, bu = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Au = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, wu = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ie = {
  alphahash_fragment: Ko,
  alphahash_pars_fragment: Zo,
  alphamap_fragment: $o,
  alphamap_pars_fragment: Jo,
  alphatest_fragment: Qo,
  alphatest_pars_fragment: jo,
  aomap_fragment: el,
  aomap_pars_fragment: tl,
  batching_pars_vertex: nl,
  batching_vertex: il,
  begin_vertex: rl,
  beginnormal_vertex: al,
  bsdfs: sl,
  iridescence_fragment: ol,
  bumpmap_pars_fragment: ll,
  clipping_planes_fragment: cl,
  clipping_planes_pars_fragment: ul,
  clipping_planes_pars_vertex: fl,
  clipping_planes_vertex: dl,
  color_fragment: hl,
  color_pars_fragment: pl,
  color_pars_vertex: ml,
  color_vertex: gl,
  common: _l,
  cube_uv_reflection_fragment: vl,
  defaultnormal_vertex: xl,
  displacementmap_pars_vertex: Sl,
  displacementmap_vertex: Ml,
  emissivemap_fragment: El,
  emissivemap_pars_fragment: yl,
  colorspace_fragment: Tl,
  colorspace_pars_fragment: bl,
  envmap_fragment: Al,
  envmap_common_pars_fragment: wl,
  envmap_pars_fragment: Rl,
  envmap_pars_vertex: Cl,
  envmap_physical_pars_fragment: kl,
  envmap_vertex: Pl,
  fog_vertex: Dl,
  fog_pars_vertex: Ll,
  fog_fragment: Fl,
  fog_pars_fragment: Il,
  gradientmap_pars_fragment: Ul,
  lightmap_pars_fragment: Nl,
  lights_lambert_fragment: Ol,
  lights_lambert_pars_fragment: Bl,
  lights_pars_begin: Gl,
  lights_toon_fragment: zl,
  lights_toon_pars_fragment: Vl,
  lights_phong_fragment: Hl,
  lights_phong_pars_fragment: Wl,
  lights_physical_fragment: Xl,
  lights_physical_pars_fragment: ql,
  lights_fragment_begin: Yl,
  lights_fragment_maps: Kl,
  lights_fragment_end: Zl,
  lightprobes_pars_fragment: $l,
  logdepthbuf_fragment: Jl,
  logdepthbuf_pars_fragment: Ql,
  logdepthbuf_pars_vertex: jl,
  logdepthbuf_vertex: ec,
  map_fragment: tc,
  map_pars_fragment: nc,
  map_particle_fragment: ic,
  map_particle_pars_fragment: rc,
  metalnessmap_fragment: ac,
  metalnessmap_pars_fragment: sc,
  morphinstance_vertex: oc,
  morphcolor_vertex: lc,
  morphnormal_vertex: cc,
  morphtarget_pars_vertex: uc,
  morphtarget_vertex: fc,
  normal_fragment_begin: dc,
  normal_fragment_maps: hc,
  normal_pars_fragment: pc,
  normal_pars_vertex: mc,
  normal_vertex: gc,
  normalmap_pars_fragment: _c,
  clearcoat_normal_fragment_begin: vc,
  clearcoat_normal_fragment_maps: xc,
  clearcoat_pars_fragment: Sc,
  iridescence_pars_fragment: Mc,
  opaque_fragment: Ec,
  packing: yc,
  premultiplied_alpha_fragment: Tc,
  project_vertex: bc,
  dithering_fragment: Ac,
  dithering_pars_fragment: wc,
  roughnessmap_fragment: Rc,
  roughnessmap_pars_fragment: Cc,
  shadowmap_pars_fragment: Pc,
  shadowmap_pars_vertex: Dc,
  shadowmap_vertex: Lc,
  shadowmask_pars_fragment: Fc,
  skinbase_vertex: Ic,
  skinning_pars_vertex: Uc,
  skinning_vertex: Nc,
  skinnormal_vertex: Oc,
  specularmap_fragment: Bc,
  specularmap_pars_fragment: Gc,
  tonemapping_fragment: kc,
  tonemapping_pars_fragment: zc,
  transmission_fragment: Vc,
  transmission_pars_fragment: Hc,
  uv_pars_fragment: Wc,
  uv_pars_vertex: Xc,
  uv_vertex: qc,
  worldpos_vertex: Yc,
  background_vert: Kc,
  background_frag: Zc,
  backgroundCube_vert: $c,
  backgroundCube_frag: Jc,
  cube_vert: Qc,
  cube_frag: jc,
  depth_vert: eu,
  depth_frag: tu,
  distance_vert: nu,
  distance_frag: iu,
  equirect_vert: ru,
  equirect_frag: au,
  linedashed_vert: su,
  linedashed_frag: ou,
  meshbasic_vert: lu,
  meshbasic_frag: cu,
  meshlambert_vert: uu,
  meshlambert_frag: fu,
  meshmatcap_vert: du,
  meshmatcap_frag: hu,
  meshnormal_vert: pu,
  meshnormal_frag: mu,
  meshphong_vert: gu,
  meshphong_frag: _u,
  meshphysical_vert: vu,
  meshphysical_frag: xu,
  meshtoon_vert: Su,
  meshtoon_frag: Mu,
  points_vert: Eu,
  points_frag: yu,
  shadow_vert: Tu,
  shadow_frag: bu,
  sprite_vert: Au,
  sprite_frag: wu
}, ue = {
  common: {
    diffuse: { value: /* @__PURE__ */ new We(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Pe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Pe() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Pe() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Pe() },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 },
    // basic, lambert, phong
    dfgLUT: { value: null }
    // DFG LUT for physically-based rendering
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Pe() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Pe() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Pe() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Pe() },
    normalScale: { value: /* @__PURE__ */ new De(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Pe() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Pe() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Pe() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Pe() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new We(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    sunLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    sunLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    sunShadowMatrix: { value: [] },
    sunShadowCascade: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null },
    probesSH: { value: null },
    probesMin: { value: /* @__PURE__ */ new k() },
    probesMax: { value: /* @__PURE__ */ new k() },
    probesResolution: { value: /* @__PURE__ */ new k() }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new We(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Pe() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Pe() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new We(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new De(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Pe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Pe() },
    alphaTest: { value: 0 }
  }
}, Zt = {
  basic: {
    uniforms: /* @__PURE__ */ Tt([
      ue.common,
      ue.specularmap,
      ue.envmap,
      ue.aomap,
      ue.lightmap,
      ue.fog
    ]),
    vertexShader: Ie.meshbasic_vert,
    fragmentShader: Ie.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Tt([
      ue.common,
      ue.specularmap,
      ue.envmap,
      ue.aomap,
      ue.lightmap,
      ue.emissivemap,
      ue.bumpmap,
      ue.normalmap,
      ue.displacementmap,
      ue.fog,
      ue.lights,
      {
        emissive: { value: /* @__PURE__ */ new We(0) },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ie.meshlambert_vert,
    fragmentShader: Ie.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Tt([
      ue.common,
      ue.specularmap,
      ue.envmap,
      ue.aomap,
      ue.lightmap,
      ue.emissivemap,
      ue.bumpmap,
      ue.normalmap,
      ue.displacementmap,
      ue.fog,
      ue.lights,
      {
        emissive: { value: /* @__PURE__ */ new We(0) },
        specular: { value: /* @__PURE__ */ new We(1118481) },
        shininess: { value: 30 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ie.meshphong_vert,
    fragmentShader: Ie.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Tt([
      ue.common,
      ue.envmap,
      ue.aomap,
      ue.lightmap,
      ue.emissivemap,
      ue.bumpmap,
      ue.normalmap,
      ue.displacementmap,
      ue.roughnessmap,
      ue.metalnessmap,
      ue.fog,
      ue.lights,
      {
        emissive: { value: /* @__PURE__ */ new We(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ie.meshphysical_vert,
    fragmentShader: Ie.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Tt([
      ue.common,
      ue.aomap,
      ue.lightmap,
      ue.emissivemap,
      ue.bumpmap,
      ue.normalmap,
      ue.displacementmap,
      ue.gradientmap,
      ue.fog,
      ue.lights,
      {
        emissive: { value: /* @__PURE__ */ new We(0) }
      }
    ]),
    vertexShader: Ie.meshtoon_vert,
    fragmentShader: Ie.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Tt([
      ue.common,
      ue.bumpmap,
      ue.normalmap,
      ue.displacementmap,
      ue.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ie.meshmatcap_vert,
    fragmentShader: Ie.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Tt([
      ue.points,
      ue.fog
    ]),
    vertexShader: Ie.points_vert,
    fragmentShader: Ie.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Tt([
      ue.common,
      ue.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ie.linedashed_vert,
    fragmentShader: Ie.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Tt([
      ue.common,
      ue.displacementmap
    ]),
    vertexShader: Ie.depth_vert,
    fragmentShader: Ie.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Tt([
      ue.common,
      ue.bumpmap,
      ue.normalmap,
      ue.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ie.meshnormal_vert,
    fragmentShader: Ie.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Tt([
      ue.sprite,
      ue.fog
    ]),
    vertexShader: Ie.sprite_vert,
    fragmentShader: Ie.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Pe() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ie.background_vert,
    fragmentShader: Ie.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Pe() }
    },
    vertexShader: Ie.backgroundCube_vert,
    fragmentShader: Ie.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ie.cube_vert,
    fragmentShader: Ie.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ie.equirect_vert,
    fragmentShader: Ie.equirect_frag
  },
  distance: {
    uniforms: /* @__PURE__ */ Tt([
      ue.common,
      ue.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new k() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ie.distance_vert,
    fragmentShader: Ie.distance_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Tt([
      ue.lights,
      ue.fog,
      {
        color: { value: /* @__PURE__ */ new We(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ie.shadow_vert,
    fragmentShader: Ie.shadow_frag
  }
};
Zt.physical = {
  uniforms: /* @__PURE__ */ Tt([
    Zt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Pe() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Pe() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new De(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Pe() },
      dispersion: { value: 0 },
      retroreflectivity: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Pe() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Pe() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new We(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Pe() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Pe() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Pe() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new De() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Pe() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new We(0) },
      specularColor: { value: /* @__PURE__ */ new We(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Pe() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Pe() },
      anisotropyVector: { value: /* @__PURE__ */ new De() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Pe() }
    }
  ]),
  vertexShader: Ie.meshphysical_vert,
  fragmentShader: Ie.meshphysical_frag
};
const Oi = { r: 0, b: 0, g: 0 }, Ru = /* @__PURE__ */ new lt(), Es = /* @__PURE__ */ new Pe();
Es.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Cu(i, e, t, n, r, a) {
  const s = new We(0);
  let o = r === !0 ? 0 : 1, c, l, f = null, d = 0, u = null;
  function h(A) {
    let R = A.isScene === !0 ? A.background : null;
    if (R && R.isTexture) {
      const S = A.backgroundBlurriness > 0;
      R = e.get(R, S);
    }
    return R;
  }
  function _(A) {
    let R = !1;
    const S = h(A);
    S === null ? g(s, o) : S && S.isColor && (g(S, 1), R = !0);
    const y = i.xr.getEnvironmentBlendMode();
    y === "additive" ? t.buffers.color.setClear(0, 0, 0, 1, a) : y === "alpha-blend" && t.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || R) && (t.buffers.depth.setTest(!0), t.buffers.depth.setMask(!0), t.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function M(A, R) {
    const S = h(R);
    S && (S.isCubeTexture || S.mapping === 306) ? (l === void 0 && (l = new Pt(
      new Jn(1, 1, 1),
      new Ut({
        name: "BackgroundCubeMaterial",
        uniforms: Kn(Zt.backgroundCube.uniforms),
        vertexShader: Zt.backgroundCube.vertexShader,
        fragmentShader: Zt.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(y, T, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(l.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), n.update(l)), l.material.uniforms.envMap.value = S, l.material.uniforms.backgroundBlurriness.value = R.backgroundBlurriness, l.material.uniforms.backgroundIntensity.value = R.backgroundIntensity, l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ru.makeRotationFromEuler(R.backgroundRotation)).transpose(), S.isCubeTexture && S.isRenderTargetTexture === !1 && l.material.uniforms.backgroundRotation.value.premultiply(Es), l.material.toneMapped = ke.getTransfer(S.colorSpace) !== Je, (f !== S || d !== S.version || u !== i.toneMapping) && (l.material.needsUpdate = !0, f = S, d = S.version, u = i.toneMapping), l.layers.enableAll(), A.unshift(l, l.geometry, l.material, 0, 0, null)) : S && S.isTexture && (c === void 0 && (c = new Pt(
      new Qi(2, 2),
      new Ut({
        name: "BackgroundMaterial",
        uniforms: Kn(Zt.background.uniforms),
        vertexShader: Zt.background.vertexShader,
        fragmentShader: Zt.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), n.update(c)), c.material.uniforms.t2D.value = S, c.material.uniforms.backgroundIntensity.value = R.backgroundIntensity, c.material.toneMapped = ke.getTransfer(S.colorSpace) !== Je, S.matrixAutoUpdate === !0 && S.updateMatrix(), c.material.uniforms.uvTransform.value.copy(S.matrix), (f !== S || d !== S.version || u !== i.toneMapping) && (c.material.needsUpdate = !0, f = S, d = S.version, u = i.toneMapping), c.layers.enableAll(), A.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function g(A, R) {
    A.getRGB(Oi, Ss(i)), t.buffers.color.setClear(Oi.r, Oi.g, Oi.b, R, a);
  }
  function p() {
    l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return {
    getClearColor: function() {
      return s;
    },
    setClearColor: function(A, R = 1) {
      s.set(A), o = R, g(s, o);
    },
    getClearAlpha: function() {
      return o;
    },
    setClearAlpha: function(A) {
      o = A, g(s, o);
    },
    render: _,
    addToRenderList: M,
    dispose: p
  };
}
function Pu(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = u(null);
  let a = r, s = !1;
  function o(F, B, V, I, G) {
    let J = !1;
    const W = d(F, I, V, B);
    a !== W && (a = W, l(a.object)), J = h(F, I, V, G), J && _(F, I, V, G), G !== null && e.update(G, i.ELEMENT_ARRAY_BUFFER), (J || s) && (s = !1, S(F, B, V, I), G !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(G).buffer));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(F) {
    return i.bindVertexArray(F);
  }
  function f(F) {
    return i.deleteVertexArray(F);
  }
  function d(F, B, V, I) {
    const G = I.wireframe === !0;
    let J = n[B.id];
    J === void 0 && (J = {}, n[B.id] = J);
    const W = F.isInstancedMesh === !0 ? F.id : 0;
    let ne = J[W];
    ne === void 0 && (ne = {}, J[W] = ne);
    let X = ne[V.id];
    X === void 0 && (X = {}, ne[V.id] = X);
    let Z = X[G];
    return Z === void 0 && (Z = u(c()), X[G] = Z), Z;
  }
  function u(F) {
    const B = [], V = [], I = [];
    for (let G = 0; G < t; G++)
      B[G] = 0, V[G] = 0, I[G] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: B,
      enabledAttributes: V,
      attributeDivisors: I,
      object: F,
      attributes: {},
      index: null
    };
  }
  function h(F, B, V, I) {
    const G = a.attributes, J = B.attributes;
    let W = 0;
    const ne = V.getAttributes();
    for (const X in ne)
      if (ne[X].location >= 0) {
        const ee = G[X];
        let ve = J[X];
        if (ve === void 0 && (X === "instanceMatrix" && F.instanceMatrix && (ve = F.instanceMatrix), X === "instanceColor" && F.instanceColor && (ve = F.instanceColor)), ee === void 0 || ee.attribute !== ve || ve && ee.data !== ve.data) return !0;
        W++;
      }
    return a.attributesNum !== W || a.index !== I;
  }
  function _(F, B, V, I) {
    const G = {}, J = B.attributes;
    let W = 0;
    const ne = V.getAttributes();
    for (const X in ne)
      if (ne[X].location >= 0) {
        let ee = J[X];
        ee === void 0 && (X === "instanceMatrix" && F.instanceMatrix && (ee = F.instanceMatrix), X === "instanceColor" && F.instanceColor && (ee = F.instanceColor));
        const ve = {};
        ve.attribute = ee, ee && ee.data && (ve.data = ee.data), G[X] = ve, W++;
      }
    a.attributes = G, a.attributesNum = W, a.index = I;
  }
  function M() {
    const F = a.newAttributes;
    for (let B = 0, V = F.length; B < V; B++)
      F[B] = 0;
  }
  function g(F) {
    p(F, 0);
  }
  function p(F, B) {
    const V = a.newAttributes, I = a.enabledAttributes, G = a.attributeDivisors;
    V[F] = 1, I[F] === 0 && (i.enableVertexAttribArray(F), I[F] = 1), G[F] !== B && (i.vertexAttribDivisor(F, B), G[F] = B);
  }
  function A() {
    const F = a.newAttributes, B = a.enabledAttributes;
    for (let V = 0, I = B.length; V < I; V++)
      B[V] !== F[V] && (i.disableVertexAttribArray(V), B[V] = 0);
  }
  function R(F, B, V, I, G, J, W) {
    W === !0 ? i.vertexAttribIPointer(F, B, V, G, J) : i.vertexAttribPointer(F, B, V, I, G, J);
  }
  function S(F, B, V, I) {
    M();
    const G = I.attributes, J = V.getAttributes(), W = B.defaultAttributeValues;
    for (const ne in J) {
      const X = J[ne];
      if (X.location >= 0) {
        let Z = G[ne];
        if (Z === void 0 && (ne === "instanceMatrix" && F.instanceMatrix && (Z = F.instanceMatrix), ne === "instanceColor" && F.instanceColor && (Z = F.instanceColor)), Z !== void 0) {
          const ee = Z.normalized, ve = Z.itemSize, be = e.get(Z);
          if (be === void 0) continue;
          const et = be.buffer, Ve = be.type, Ye = be.bytesPerElement, Y = Ve === i.INT || Ve === i.UNSIGNED_INT || Z.gpuType === 1013;
          if (Z.isInterleavedBufferAttribute) {
            const j = Z.data, _e = j.stride, Ce = Z.offset;
            if (j.isInstancedInterleavedBuffer) {
              for (let me = 0; me < X.locationSize; me++)
                p(X.location + me, j.meshPerAttribute);
              F.isInstancedMesh !== !0 && I._maxInstanceCount === void 0 && (I._maxInstanceCount = j.meshPerAttribute * j.count);
            } else
              for (let me = 0; me < X.locationSize; me++)
                g(X.location + me);
            i.bindBuffer(i.ARRAY_BUFFER, et);
            for (let me = 0; me < X.locationSize; me++)
              R(
                X.location + me,
                ve / X.locationSize,
                Ve,
                ee,
                _e * Ye,
                (Ce + ve / X.locationSize * me) * Ye,
                Y
              );
          } else {
            if (Z.isInstancedBufferAttribute) {
              for (let j = 0; j < X.locationSize; j++)
                p(X.location + j, Z.meshPerAttribute);
              F.isInstancedMesh !== !0 && I._maxInstanceCount === void 0 && (I._maxInstanceCount = Z.meshPerAttribute * Z.count);
            } else
              for (let j = 0; j < X.locationSize; j++)
                g(X.location + j);
            i.bindBuffer(i.ARRAY_BUFFER, et);
            for (let j = 0; j < X.locationSize; j++)
              R(
                X.location + j,
                ve / X.locationSize,
                Ve,
                ee,
                ve * Ye,
                ve / X.locationSize * j * Ye,
                Y
              );
          }
        } else if (W !== void 0) {
          const ee = W[ne];
          if (ee !== void 0)
            switch (ee.length) {
              case 2:
                i.vertexAttrib2fv(X.location, ee);
                break;
              case 3:
                i.vertexAttrib3fv(X.location, ee);
                break;
              case 4:
                i.vertexAttrib4fv(X.location, ee);
                break;
              default:
                i.vertexAttrib1fv(X.location, ee);
            }
        }
      }
    }
    A();
  }
  function y() {
    b();
    for (const F in n) {
      const B = n[F];
      for (const V in B) {
        const I = B[V];
        for (const G in I) {
          const J = I[G];
          for (const W in J)
            f(J[W].object), delete J[W];
          delete I[G];
        }
      }
      delete n[F];
    }
  }
  function T(F) {
    if (n[F.id] === void 0) return;
    const B = n[F.id];
    for (const V in B) {
      const I = B[V];
      for (const G in I) {
        const J = I[G];
        for (const W in J)
          f(J[W].object), delete J[W];
        delete I[G];
      }
    }
    delete n[F.id];
  }
  function w(F) {
    for (const B in n) {
      const V = n[B];
      for (const I in V) {
        const G = V[I];
        if (G[F.id] === void 0) continue;
        const J = G[F.id];
        for (const W in J)
          f(J[W].object), delete J[W];
        delete G[F.id];
      }
    }
  }
  function v(F) {
    for (const B in n) {
      const V = n[B], I = F.isInstancedMesh === !0 ? F.id : 0, G = V[I];
      if (G !== void 0) {
        for (const J in G) {
          const W = G[J];
          for (const ne in W)
            f(W[ne].object), delete W[ne];
          delete G[J];
        }
        delete V[I], Object.keys(V).length === 0 && delete n[B];
      }
    }
  }
  function b() {
    L(), s = !0, a !== r && (a = r, l(a.object));
  }
  function L() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: b,
    resetDefaultState: L,
    dispose: y,
    releaseStatesOfGeometry: T,
    releaseStatesOfObject: v,
    releaseStatesOfProgram: w,
    initAttributes: M,
    enableAttribute: g,
    disableUnusedAttributes: A
  };
}
function Du(i, e, t) {
  let n;
  function r(c) {
    n = c;
  }
  function a(c, l) {
    i.drawArrays(n, c, l), t.update(l, n, 1);
  }
  function s(c, l, f) {
    f !== 0 && (i.drawArraysInstanced(n, c, l, f), t.update(l, n, f));
  }
  function o(c, l, f) {
    if (f === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, l, 0, f);
    let u = 0;
    for (let h = 0; h < f; h++)
      u += l[h];
    t.update(u, n, 1);
  }
  this.setMode = r, this.render = a, this.renderInstances = s, this.renderMultiDraw = o;
}
function Lu(i, e, t, n) {
  let r;
  function a() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function s(w) {
    return !(w !== 1023 && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const v = w === 1016 && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(w !== 1009 && w !== 1015 && !v && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE));
  }
  function c(w) {
    if (w === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      w = "mediump";
    }
    return w === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const f = c(l);
  f !== l && (Re("WebGLRenderer:", l, "not supported, using", f, "instead."), l = f);
  const d = t.logarithmicDepthBuffer === !0, u = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control");
  t.reversedDepthBuffer === !0 && u === !1 && Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
  const h = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), _ = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), M = i.getParameter(i.MAX_TEXTURE_SIZE), g = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), p = i.getParameter(i.MAX_VERTEX_ATTRIBS), A = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), R = i.getParameter(i.MAX_VARYING_VECTORS), S = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), y = i.getParameter(i.MAX_SAMPLES), T = i.getParameter(i.SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: a,
    getMaxPrecision: c,
    textureFormatReadable: s,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: d,
    reversedDepthBuffer: u,
    maxTextures: h,
    maxVertexTextures: _,
    maxTextureSize: M,
    maxCubemapSize: g,
    maxAttributes: p,
    maxVertexUniforms: A,
    maxVaryings: R,
    maxFragmentUniforms: S,
    maxSamples: y,
    samples: T
  };
}
function Fu(i) {
  const e = this;
  let t = null, n = 0, r = !1, a = !1;
  const s = new hn(), o = new Pe(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, u) {
    const h = d.length !== 0 || u || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = u, n = d.length, h;
  }, this.beginShadows = function() {
    a = !0, f(null);
  }, this.endShadows = function() {
    a = !1;
  }, this.setGlobalState = function(d, u) {
    t = f(d, u, 0);
  }, this.setState = function(d, u, h) {
    const _ = d.clippingPlanes, M = d.clipIntersection, g = d.clipShadows, p = i.get(d);
    if (!r || _ === null || _.length === 0 || a && !g)
      a ? f(null) : l();
    else {
      const A = a ? 0 : n, R = A * 4;
      let S = p.clippingState || null;
      c.value = S, S = f(_, u, R, h);
      for (let y = 0; y !== R; ++y)
        S[y] = t[y];
      p.clippingState = S, this.numIntersection = M ? this.numPlanes : 0, this.numPlanes += A;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function f(d, u, h, _) {
    const M = d !== null ? d.length : 0;
    let g = null;
    if (M !== 0) {
      if (g = c.value, _ !== !0 || g === null) {
        const p = h + M * 4, A = u.matrixWorldInverse;
        o.getNormalMatrix(A), (g === null || g.length < p) && (g = new Float32Array(p));
        for (let R = 0, S = h; R !== M; ++R, S += 4)
          s.copy(d[R]).applyMatrix4(A, o), s.normal.toArray(g, S), g[S + 3] = s.constant;
      }
      c.value = g, c.needsUpdate = !0;
    }
    return e.numPlanes = M, e.numIntersection = 0, g;
  }
}
const Hn = 4, Iu = 6, Uu = 20, Nu = 256, ii = /* @__PURE__ */ new pi(), Ia = /* @__PURE__ */ new We();
let br = null, Ar = 0, wr = 0, Rr = !1;
const Ou = /* @__PURE__ */ new k(), Mn = /* @__PURE__ */ new k();
class Ua {
  /**
   * Constructs a new PMREM generator.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   */
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety.
   *
   * @param {Scene} scene - The scene to be captured.
   * @param {number} [sigma=0] - The blur radius in radians.
   * @param {number} [near=0.1] - The near plane distance.
   * @param {number} [far=100] - The far plane distance.
   * @param {Object} [options={}] - The configuration options.
   * @param {number} [options.size=256] - The texture size of the PMREM.
   * @param {Vector3} [options.position=origin] - The position of the internal cube camera that renders the scene.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromScene(e, t = 0, n = 0.1, r = 100, a = {}) {
    const {
      size: s = 256,
      position: o = Ou
    } = a;
    br = this._renderer.getRenderTarget(), Ar = this._renderer.getActiveCubeFace(), wr = this._renderer.getActiveMipmapLevel(), Rr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(s);
    const c = this._allocateTargets();
    return c.depthBuffer = !0, this._sceneToCubeUV(e, n, r, c, o), t > 0 && this._blur(c, 0, 0, t), this._applyPMREM(c), this._cleanup(c), c;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512), as this matches best
   * with the 256 x 256 cubemap output. The minimum supported input image size
   * is 64 x 32.
   *
   * @param {Texture} equirectangular - The equirectangular texture to be converted.
   * @param {?WebGLRenderTarget} [renderTarget=null] - The render target to use.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256, as this matches best
   * with the 256 x 256 cubemap output. The minimum supported input cube
   * size is 16 x 16 per face.
   *
   * @param {Texture} cubemap - The cubemap texture to be converted.
   * @param {?WebGLRenderTarget} [renderTarget=null] - The render target to use.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Ba(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Oa(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodMeshes.length; e++)
      this._lodMeshes[e].geometry.dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(br, Ar, wr), this._renderer.xr.enabled = Rr, e.scissorTest = !1, Bn(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), br = this._renderer.getRenderTarget(), Ar = this._renderer.getActiveCubeFace(), wr = this._renderer.getActiveMipmapLevel(), Rr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: 1006,
      minFilter: 1006,
      generateMipmaps: !1,
      type: 1016,
      format: 1023,
      colorSpace: fi,
      depthBuffer: !1
    }, r = Na(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Na(e, t, n);
      const { _lodMax: a } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods } = Bu(a)), this._blurMaterial = ku(a, e, t), this._ggxMaterial = Gu(a, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Pt(new Nt(), e);
    this._renderer.compile(t, ii);
  }
  _sceneToCubeUV(e, t, n, r, a) {
    const c = new It(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], f = [1, 1, 1, -1, -1, -1], d = this._renderer, u = d.autoClear, h = d.toneMapping;
    d.getClearColor(Ia), d.toneMapping = 0, d.autoClear = !1, d.state.buffers.depth.getReversed() && (d.setRenderTarget(r), d.clearDepth(), d.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new Pt(
      new Jn(),
      new Hr({
        name: "PMREM.Background",
        side: 1,
        depthWrite: !1,
        depthTest: !1
      })
    ));
    const M = this._backgroundBox, g = M.material;
    let p = !1;
    const A = e.background;
    A ? A.isColor && (g.color.copy(A), e.background = null, p = !0) : (g.color.copy(Ia), p = !0);
    for (let R = 0; R < 6; R++) {
      const S = R % 3;
      S === 0 ? (c.up.set(0, l[R], 0), c.position.set(a.x, a.y, a.z), c.lookAt(a.x + f[R], a.y, a.z)) : S === 1 ? (c.up.set(0, 0, l[R]), c.position.set(a.x, a.y, a.z), c.lookAt(a.x, a.y + f[R], a.z)) : (c.up.set(0, l[R], 0), c.position.set(a.x, a.y, a.z), c.lookAt(a.x, a.y, a.z + f[R]));
      const y = this._cubeSize;
      Bn(r, S * y, R > 2 ? y : 0, y, y), d.setRenderTarget(r), p && d.render(M, c), d.render(e, c);
    }
    d.toneMapping = h, d.autoClear = u, e.background = A;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ba()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Oa());
    const a = r ? this._cubemapMaterial : this._equirectMaterial, s = this._lodMeshes[0];
    s.material = a;
    const o = a.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    Bn(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(s, ii);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodMeshes.length;
    for (let a = 1; a < r; a++)
      this._applyGGXFilter(e, a - 1, a);
    t.autoClear = n;
  }
  /**
   * Applies GGX VNDF importance sampling filter to generate a prefiltered environment map.
   * Uses Monte Carlo integration with VNDF importance sampling to accurately represent the
   * GGX BRDF for physically-based rendering. Reads from the previous LOD level and
   * applies incremental roughness filtering to avoid over-blurring.
   *
   * @private
   * @param {WebGLRenderTarget} cubeUVRenderTarget
   * @param {number} lodIn - Source LOD level to read from
   * @param {number} lodOut - Target LOD level to write to
   */
  _applyGGXFilter(e, t, n) {
    const r = this._renderer, a = this._pingPongRenderTarget, s = this._ggxMaterial, o = this._lodMeshes[n];
    o.material = s;
    const c = s.uniforms, l = n / (this._lodMeshes.length - 1), f = t / (this._lodMeshes.length - 1), d = Math.sqrt(l * l - f * f), u = l * 1.25, h = d * u, { _lodMax: _ } = this, M = this._sizeLods[n], g = 3 * M * (n > _ - Hn ? n - _ + Hn : 0), p = 4 * (this._cubeSize - M);
    c.envMap.value = e.texture, c.roughness.value = h, c.mipInt.value = _ - t, Bn(a, g, p, 3 * M, 2 * M), r.setRenderTarget(a), r.render(o, ii), c.envMap.value = a.texture, c.roughness.value = 0, c.mipInt.value = _ - n, Bn(e, g, p, 3 * M, 2 * M), r.setRenderTarget(e), r.render(o, ii);
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Each pass importance-samples
   * the Gaussian along a spiral kernel (Golden Angle), which distributes samples
   * isotropically on the sphere (no pole artifacts).
   *
   * Used for initial scene blur in fromScene() method when sigma > 0.
   *
   * @private
   * @param {WebGLRenderTarget} cubeUVRenderTarget
   * @param {number} lodIn
   * @param {number} lodOut
   * @param {number} sigma
   */
  _blur(e, t, n, r) {
    const a = this._pingPongRenderTarget, s = Math.min(r, Math.PI) / Math.SQRT2;
    this._blurPass(e, a, t, n, s), this._blurPass(a, e, n, n, s);
  }
  _blurPass(e, t, n, r, a) {
    const s = this._renderer, o = this._blurMaterial, c = this._lodMeshes[r];
    c.material = o;
    const l = o.uniforms;
    l.envMap.value = e.texture, l.sigma.value = a, l.mipInt.value = this._lodMax - n;
    const f = this._sizeLods[r], d = 3 * f * (r > this._lodMax - Hn ? r - this._lodMax + Hn : 0), u = 4 * (this._cubeSize - f);
    Bn(t, d, u, 3 * f, 2 * f), s.setRenderTarget(t), s.render(c, ii);
  }
}
function Bu(i) {
  const e = [], t = [];
  let n = i;
  const r = i - Hn + 1 + Iu;
  for (let a = 0; a < r; a++) {
    const s = Math.pow(2, n);
    e.push(s);
    const o = 1 / (s - 2), c = -o, l = 1 + o, f = [c, c, l, c, l, l, c, c, l, l, c, l], d = 6, u = 6, h = 3, _ = new Float32Array(h * u * d), M = new Float32Array(h * u * d);
    for (let p = 0; p < d; p++) {
      const A = p % 3 * 2 / 3 - 1, R = p > 2 ? 0 : -1, S = [
        A,
        R,
        0,
        A + 2 / 3,
        R,
        0,
        A + 2 / 3,
        R + 1,
        0,
        A,
        R,
        0,
        A + 2 / 3,
        R + 1,
        0,
        A,
        R + 1,
        0
      ];
      _.set(S, h * u * p);
      for (let y = 0; y < u; y++) {
        const T = f[y * 2] * 2 - 1, w = f[y * 2 + 1] * 2 - 1;
        p === 0 ? Mn.set(1, w, T) : p === 1 ? Mn.set(-T, 1, -w) : p === 2 ? Mn.set(-T, w, 1) : p === 3 ? Mn.set(-1, w, -T) : p === 4 ? Mn.set(-T, -1, w) : Mn.set(T, w, -1), Mn.toArray(M, (p * u + y) * h);
      }
    }
    const g = new Nt();
    g.setAttribute("position", new Vt(_, h)), g.setAttribute("outputDirection", new Vt(M, h)), t.push(new Pt(g, null)), n > Hn && n--;
  }
  return { lodMeshes: t, sizeLods: e };
}
function Na(i, e, t) {
  const n = new st(i, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Bn(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function Gu(i, e, t) {
  return new Ut({
    name: "PMREMGGXConvolution",
    defines: {
      GGX_SAMPLES: Nu,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      roughness: { value: 0 },
      mipInt: { value: 0 }
    },
    vertexShader: ji(),
    fragmentShader: (
      /* glsl */
      `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function ku(i, e, t) {
  return new Ut({
    name: "SphericalGaussianBlur",
    defines: {
      SAMPLES: Uu,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      sigma: { value: 0 },
      mipInt: { value: 0 }
    },
    vertexShader: ji(),
    fragmentShader: (
      /* glsl */
      `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Oa() {
  return new Ut({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: ji(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ba() {
  return new Ut({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: ji(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function ji() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
class Yr extends st {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new vs(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
  }
  /**
   * Converts the given equirectangular texture to a cube map.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Texture} texture - The equirectangular texture.
   * @return {WebGLCubeRenderTarget} A reference to this cube render target.
   */
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, r = new Jn(5, 5, 5), a = new Ut({
      name: "CubemapFromEquirect",
      uniforms: Kn(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    a.uniforms.tEquirect.value = t;
    const s = new Pt(r, a), o = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new Wo(1, 10, this).update(e, s), t.minFilter = o, s.geometry.dispose(), s.material.dispose(), this;
  }
  /**
   * Clears this cube render target.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {boolean} [color=true] - Whether the color buffer should be cleared or not.
   * @param {boolean} [depth=true] - Whether the depth buffer should be cleared or not.
   * @param {boolean} [stencil=true] - Whether the stencil buffer should be cleared or not.
   */
  clear(e, t = !0, n = !0, r = !0) {
    const a = e.getRenderTarget();
    for (let s = 0; s < 6; s++)
      e.setRenderTarget(this, s), e.clear(t, n, r);
    e.setRenderTarget(a);
  }
}
function zu(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n = null;
  function r(u, h = !1) {
    return u == null ? null : h ? s(u) : a(u);
  }
  function a(u) {
    if (u && u.isTexture) {
      const h = u.mapping;
      if (h === 303 || h === 304)
        if (e.has(u)) {
          const _ = e.get(u).texture;
          return o(_, u.mapping);
        } else {
          const _ = u.image;
          if (_ && _.height > 0) {
            const M = new Yr(_.height);
            return M.fromEquirectangularTexture(i, u), e.set(u, M), u.addEventListener("dispose", l), o(M.texture, u.mapping);
          } else
            return null;
        }
    }
    return u;
  }
  function s(u) {
    if (u && u.isTexture) {
      const h = u.mapping, _ = h === 303 || h === 304, M = h === 301 || h === 302;
      if (_ || M) {
        let g = t.get(u);
        const p = g !== void 0 ? g.texture.pmremVersion : 0;
        if (u.isRenderTargetTexture && u.pmremVersion !== p)
          return n === null && (n = new Ua(i)), g = _ ? n.fromEquirectangular(u, g) : n.fromCubemap(u, g), g.texture.pmremVersion = u.pmremVersion, t.set(u, g), g.texture;
        if (g !== void 0)
          return g.texture;
        {
          const A = u.image;
          return _ && A && A.height > 0 || M && A && c(A) ? (n === null && (n = new Ua(i)), g = _ ? n.fromEquirectangular(u) : n.fromCubemap(u), g.texture.pmremVersion = u.pmremVersion, t.set(u, g), u.addEventListener("dispose", f), g.texture) : null;
        }
      }
    }
    return u;
  }
  function o(u, h) {
    return h === 303 ? u.mapping = 301 : h === 304 && (u.mapping = 302), u;
  }
  function c(u) {
    let h = 0;
    const _ = 6;
    for (let M = 0; M < _; M++)
      u[M] !== void 0 && h++;
    return h === _;
  }
  function l(u) {
    const h = u.target;
    h.removeEventListener("dispose", l);
    const _ = e.get(h);
    _ !== void 0 && (e.delete(h), _.dispose());
  }
  function f(u) {
    const h = u.target;
    h.removeEventListener("dispose", f);
    const _ = t.get(h);
    _ !== void 0 && (t.delete(h), _.dispose());
  }
  function d() {
    e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n !== null && (n.dispose(), n = null);
  }
  return {
    get: r,
    dispose: d
  };
}
function Vu(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    const r = i.getExtension(n);
    return e[n] = r, r;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const r = t(n);
      return r === null && Wn("WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function Hu(i, e, t, n) {
  const r = {}, a = /* @__PURE__ */ new WeakMap();
  function s(d) {
    const u = d.target;
    u.index !== null && e.remove(u.index);
    for (const _ in u.attributes)
      e.remove(u.attributes[_]);
    u.removeEventListener("dispose", s), delete r[u.id];
    const h = a.get(u);
    h && (e.remove(h), a.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount, t.memory.geometries--;
  }
  function o(d, u) {
    return r[u.id] === !0 || (u.addEventListener("dispose", s), r[u.id] = !0, t.memory.geometries++), u;
  }
  function c(d) {
    const u = d.attributes;
    for (const h in u)
      e.update(u[h], i.ARRAY_BUFFER);
  }
  function l(d) {
    const u = [], h = d.index, _ = d.attributes.position;
    let M = 0;
    if (_ === void 0)
      return;
    if (h !== null) {
      const A = h.array;
      M = h.version;
      for (let R = 0, S = A.length; R < S; R += 3) {
        const y = A[R + 0], T = A[R + 1], w = A[R + 2];
        u.push(y, T, T, w, w, y);
      }
    } else {
      const A = _.array;
      M = _.version;
      for (let R = 0, S = A.length / 3 - 1; R < S; R += 3) {
        const y = R + 0, T = R + 1, w = R + 2;
        u.push(y, T, T, w, w, y);
      }
    }
    const g = new (_.count >= 65535 ? gs : ms)(u, 1);
    g.version = M;
    const p = a.get(d);
    p && e.remove(p), a.set(d, g);
  }
  function f(d) {
    const u = a.get(d);
    if (u) {
      const h = d.index;
      h !== null && u.version < h.version && l(d);
    } else
      l(d);
    return a.get(d);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: f
  };
}
function Wu(i, e, t) {
  let n;
  function r(d) {
    n = d;
  }
  let a, s;
  function o(d) {
    a = d.type, s = d.bytesPerElement;
  }
  function c(d, u) {
    i.drawElements(n, u, a, d * s), t.update(u, n, 1);
  }
  function l(d, u, h) {
    h !== 0 && (i.drawElementsInstanced(n, u, a, d * s, h), t.update(u, n, h));
  }
  function f(d, u, h) {
    if (h === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, u, 0, a, d, 0, h);
    let M = 0;
    for (let g = 0; g < h; g++)
      M += u[g];
    t.update(M, n, 1);
  }
  this.setMode = r, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = f;
}
function Xu(i) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(a, s, o) {
    switch (t.calls++, s) {
      case i.TRIANGLES:
        t.triangles += o * (a / 3);
        break;
      case i.LINES:
        t.lines += o * (a / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (a - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * a;
        break;
      case i.POINTS:
        t.points += o * a;
        break;
      default:
        qe("WebGLInfo: Unknown draw mode:", s);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function qu(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new ze();
  function a(s, o, c) {
    const l = s.morphTargetInfluences, f = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, d = f !== void 0 ? f.length : 0;
    let u = n.get(o);
    if (u === void 0 || u.count !== d) {
      let L = function() {
        v.dispose(), n.delete(o), o.removeEventListener("dispose", L);
      };
      var h = L;
      u !== void 0 && u.texture.dispose();
      const _ = o.morphAttributes.position !== void 0, M = o.morphAttributes.normal !== void 0, g = o.morphAttributes.color !== void 0, p = o.morphAttributes.position || [], A = o.morphAttributes.normal || [], R = o.morphAttributes.color || [];
      let S = 0;
      _ === !0 && (S = 1), M === !0 && (S = 2), g === !0 && (S = 3);
      let y = o.attributes.position.count * S, T = 1;
      y > e.maxTextureSize && (T = Math.ceil(y / e.maxTextureSize), y = e.maxTextureSize);
      const w = new Float32Array(y * T * 4 * d), v = new ds(w, y, T, d);
      v.type = 1015, v.needsUpdate = !0;
      const b = S * 4;
      for (let F = 0; F < d; F++) {
        const B = p[F], V = A[F], I = R[F], G = y * T * 4 * F;
        for (let J = 0; J < B.count; J++) {
          const W = J * b;
          _ === !0 && (r.fromBufferAttribute(B, J), w[G + W + 0] = r.x, w[G + W + 1] = r.y, w[G + W + 2] = r.z, w[G + W + 3] = 0), M === !0 && (r.fromBufferAttribute(V, J), w[G + W + 4] = r.x, w[G + W + 5] = r.y, w[G + W + 6] = r.z, w[G + W + 7] = 0), g === !0 && (r.fromBufferAttribute(I, J), w[G + W + 8] = r.x, w[G + W + 9] = r.y, w[G + W + 10] = r.z, w[G + W + 11] = I.itemSize === 4 ? r.w : 1);
        }
      }
      u = {
        count: d,
        texture: v,
        size: new De(y, T)
      }, n.set(o, u), o.addEventListener("dispose", L);
    }
    if (s.isInstancedMesh === !0 && s.morphTexture !== null)
      c.getUniforms().setValue(i, "morphTexture", s.morphTexture, t);
    else {
      let _ = 0;
      for (let g = 0; g < l.length; g++)
        _ += l[g];
      const M = o.morphTargetsRelative ? 1 : 1 - _;
      c.getUniforms().setValue(i, "morphTargetBaseInfluence", M), c.getUniforms().setValue(i, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(i, "morphTargetsTexture", u.texture, t), c.getUniforms().setValue(i, "morphTargetsTextureSize", u.size);
  }
  return {
    update: a
  };
}
function Yu(i, e, t, n, r) {
  let a = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const f = r.render.frame, d = l.geometry, u = e.get(l, d);
    if (a.get(u) !== f && (e.update(u), a.set(u, f)), l.isInstancedMesh && (l.hasEventListener("dispose", c) === !1 && l.addEventListener("dispose", c), a.get(l) !== f && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), a.set(l, f))), l.isSkinnedMesh) {
      const h = l.skeleton;
      a.get(h) !== f && (h.update(), a.set(h, f));
    }
    return u;
  }
  function o() {
    a = /* @__PURE__ */ new WeakMap();
  }
  function c(l) {
    const f = l.target;
    f.removeEventListener("dispose", c), n.releaseStatesOfObject(f), t.remove(f.instanceMatrix), f.instanceColor !== null && t.remove(f.instanceColor);
  }
  return {
    update: s,
    dispose: o
  };
}
const Ku = {
  1: "LINEAR_TONE_MAPPING",
  2: "REINHARD_TONE_MAPPING",
  3: "CINEON_TONE_MAPPING",
  4: "ACES_FILMIC_TONE_MAPPING",
  6: "AGX_TONE_MAPPING",
  7: "NEUTRAL_TONE_MAPPING",
  5: "CUSTOM_TONE_MAPPING"
};
function Zu(i, e, t, n, r, a) {
  const s = new st(e, t, {
    type: i,
    depthBuffer: r,
    stencilBuffer: a,
    samples: n ? 4 : 0,
    storeMultisampledDepthBuffer: !1,
    storeMultisampledStencilBuffer: !1,
    resolveDepthBuffer: !1,
    resolveStencilBuffer: !1
  });
  let o = null, c = null;
  const l = new Nt();
  l.setAttribute("position", new Ht([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), l.setAttribute("uv", new Ht([0, 2, 0, 0, 2, 0], 2));
  const f = new Xr({
    uniforms: {
      tDiffuse: { value: null }
    },
    vertexShader: (
      /* glsl */
      `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`
    ),
    fragmentShader: (
      /* glsl */
      `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`
    ),
    depthTest: !1,
    depthWrite: !1
  }), d = new Pt(l, f), u = new pi(-1, 1, 1, -1, 0, 1);
  let h = null, _ = null, M = !1, g, p = null, A = [], R = !1;
  this.setSize = function(S, y) {
    s.setSize(S, y), o !== null && o.setSize(S, y), c !== null && c.setSize(S, y);
    for (let T = 0; T < A.length; T++) {
      const w = A[T];
      w.setSize && w.setSize(S, y);
    }
  }, this.setEffects = function(S) {
    A = S, R = A.length > 0 && A[0].isRenderPass === !0;
    const y = s.width, T = s.height;
    A.length > 0 && o === null && (o = new st(y, T, { type: 1016, depthBuffer: !1, stencilBuffer: !1 }), c = new st(y, T, { type: 1016, depthBuffer: !1, stencilBuffer: !1 }));
    for (let w = 0; w < A.length; w++) {
      const v = A[w];
      v.setSize && v.setSize(y, T);
    }
  }, this.begin = function(S, y) {
    if (M || S.toneMapping === 0 && A.length === 0) return !1;
    if (p = y, y !== null) {
      const T = y.width, w = y.height;
      (s.width !== T || s.height !== w) && this.setSize(T, w);
    }
    return R === !1 && S.setRenderTarget(s), g = S.toneMapping, S.toneMapping = 0, !0;
  }, this.hasRenderPass = function() {
    return R;
  }, this.end = function(S, y) {
    S.toneMapping = g, M = !0;
    let T = s, w = o;
    for (let v = 0; v < A.length; v++) {
      const b = A[v];
      b.enabled !== !1 && (b.render(S, w, T, y), b.needsSwap !== !1 && (T = w, w = w === o ? c : o));
    }
    if (h !== S.outputColorSpace || _ !== S.toneMapping) {
      h = S.outputColorSpace, _ = S.toneMapping, f.defines = {}, ke.getTransfer(h) === Je && (f.defines.SRGB_TRANSFER = "");
      const v = Ku[_];
      v && (f.defines[v] = ""), f.needsUpdate = !0;
    }
    f.uniforms.tDiffuse.value = T.texture, S.setRenderTarget(p), S.render(d, u), p = null, M = !1;
  }, this.isCompositing = function() {
    return M;
  }, this.dispose = function() {
    s.dispose(), o !== null && o.dispose(), c !== null && c.dispose(), l.dispose(), f.dispose();
  };
}
const ys = /* @__PURE__ */ new bt(), Nr = /* @__PURE__ */ new mn(1, 1), Ts = /* @__PURE__ */ new ds(), bs = /* @__PURE__ */ new So(), As = /* @__PURE__ */ new vs(), Ga = [], ka = [], za = new Float32Array(16), Va = new Float32Array(9), Ha = new Float32Array(4);
function Qn(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let a = Ga[r];
  if (a === void 0 && (a = new Float32Array(r), Ga[r] = a), e !== 0) {
    n.toArray(a, 0);
    for (let s = 1, o = 0; s !== e; ++s)
      o += t, i[s].toArray(a, o);
  }
  return a;
}
function pt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function mt(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function er(i, e) {
  let t = ka[e];
  t === void 0 && (t = new Int32Array(e), ka[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function $u(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function Ju(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (pt(t, e)) return;
    i.uniform2fv(this.addr, e), mt(t, e);
  }
}
function Qu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (pt(t, e)) return;
    i.uniform3fv(this.addr, e), mt(t, e);
  }
}
function ju(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (pt(t, e)) return;
    i.uniform4fv(this.addr, e), mt(t, e);
  }
}
function ef(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (pt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), mt(t, e);
  } else {
    if (pt(t, n)) return;
    Ha.set(n), i.uniformMatrix2fv(this.addr, !1, Ha), mt(t, n);
  }
}
function tf(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (pt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), mt(t, e);
  } else {
    if (pt(t, n)) return;
    Va.set(n), i.uniformMatrix3fv(this.addr, !1, Va), mt(t, n);
  }
}
function nf(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (pt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), mt(t, e);
  } else {
    if (pt(t, n)) return;
    za.set(n), i.uniformMatrix4fv(this.addr, !1, za), mt(t, n);
  }
}
function rf(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function af(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (pt(t, e)) return;
    i.uniform2iv(this.addr, e), mt(t, e);
  }
}
function sf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (pt(t, e)) return;
    i.uniform3iv(this.addr, e), mt(t, e);
  }
}
function of(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (pt(t, e)) return;
    i.uniform4iv(this.addr, e), mt(t, e);
  }
}
function lf(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function cf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (pt(t, e)) return;
    i.uniform2uiv(this.addr, e), mt(t, e);
  }
}
function uf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (pt(t, e)) return;
    i.uniform3uiv(this.addr, e), mt(t, e);
  }
}
function ff(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (pt(t, e)) return;
    i.uniform4uiv(this.addr, e), mt(t, e);
  }
}
function df(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let a;
  this.type === i.SAMPLER_2D_SHADOW ? (Nr.compareFunction = t.isReversedDepthBuffer() ? 518 : 515, a = Nr) : a = ys, t.setTexture2D(e || a, r);
}
function hf(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || bs, r);
}
function pf(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || As, r);
}
function mf(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || Ts, r);
}
function gf(i) {
  switch (i) {
    case 5126:
      return $u;
    // FLOAT
    case 35664:
      return Ju;
    // _VEC2
    case 35665:
      return Qu;
    // _VEC3
    case 35666:
      return ju;
    // _VEC4
    case 35674:
      return ef;
    // _MAT2
    case 35675:
      return tf;
    // _MAT3
    case 35676:
      return nf;
    // _MAT4
    case 5124:
    case 35670:
      return rf;
    // INT, BOOL
    case 35667:
    case 35671:
      return af;
    // _VEC2
    case 35668:
    case 35672:
      return sf;
    // _VEC3
    case 35669:
    case 35673:
      return of;
    // _VEC4
    case 5125:
      return lf;
    // UINT
    case 36294:
      return cf;
    // _VEC2
    case 36295:
      return uf;
    // _VEC3
    case 36296:
      return ff;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return df;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return hf;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return pf;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return mf;
  }
}
function _f(i, e) {
  i.uniform1fv(this.addr, e);
}
function vf(i, e) {
  const t = Qn(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function xf(i, e) {
  const t = Qn(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Sf(i, e) {
  const t = Qn(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Mf(i, e) {
  const t = Qn(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Ef(i, e) {
  const t = Qn(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function yf(i, e) {
  const t = Qn(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Tf(i, e) {
  i.uniform1iv(this.addr, e);
}
function bf(i, e) {
  i.uniform2iv(this.addr, e);
}
function Af(i, e) {
  i.uniform3iv(this.addr, e);
}
function wf(i, e) {
  i.uniform4iv(this.addr, e);
}
function Rf(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Cf(i, e) {
  i.uniform2uiv(this.addr, e);
}
function Pf(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Df(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Lf(i, e, t) {
  const n = this.cache, r = e.length, a = er(t, r);
  pt(n, a) || (i.uniform1iv(this.addr, a), mt(n, a));
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? s = Nr : s = ys;
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || s, a[o]);
}
function Ff(i, e, t) {
  const n = this.cache, r = e.length, a = er(t, r);
  pt(n, a) || (i.uniform1iv(this.addr, a), mt(n, a));
  for (let s = 0; s !== r; ++s)
    t.setTexture3D(e[s] || bs, a[s]);
}
function If(i, e, t) {
  const n = this.cache, r = e.length, a = er(t, r);
  pt(n, a) || (i.uniform1iv(this.addr, a), mt(n, a));
  for (let s = 0; s !== r; ++s)
    t.setTextureCube(e[s] || As, a[s]);
}
function Uf(i, e, t) {
  const n = this.cache, r = e.length, a = er(t, r);
  pt(n, a) || (i.uniform1iv(this.addr, a), mt(n, a));
  for (let s = 0; s !== r; ++s)
    t.setTexture2DArray(e[s] || Ts, a[s]);
}
function Nf(i) {
  switch (i) {
    case 5126:
      return _f;
    // FLOAT
    case 35664:
      return vf;
    // _VEC2
    case 35665:
      return xf;
    // _VEC3
    case 35666:
      return Sf;
    // _VEC4
    case 35674:
      return Mf;
    // _MAT2
    case 35675:
      return Ef;
    // _MAT3
    case 35676:
      return yf;
    // _MAT4
    case 5124:
    case 35670:
      return Tf;
    // INT, BOOL
    case 35667:
    case 35671:
      return bf;
    // _VEC2
    case 35668:
    case 35672:
      return Af;
    // _VEC3
    case 35669:
    case 35673:
      return wf;
    // _VEC4
    case 5125:
      return Rf;
    // UINT
    case 36294:
      return Cf;
    // _VEC2
    case 36295:
      return Pf;
    // _VEC3
    case 36296:
      return Df;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return Lf;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Ff;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return If;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Uf;
  }
}
class Of {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = gf(t.type);
  }
}
class Bf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Nf(t.type);
  }
}
class Gf {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let a = 0, s = r.length; a !== s; ++a) {
      const o = r[a];
      o.setValue(e, t[o.id], n);
    }
  }
}
const Cr = /(\w+)(\])?(\[|\.)?/g;
function Wa(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function kf(i, e, t) {
  const n = i.name, r = n.length;
  for (Cr.lastIndex = 0; ; ) {
    const a = Cr.exec(n), s = Cr.lastIndex;
    let o = a[1];
    const c = a[2] === "]", l = a[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && s + 2 === r) {
      Wa(t, l === void 0 ? new Of(o, i, e) : new Bf(o, i, e));
      break;
    } else {
      let d = t.map[o];
      d === void 0 && (d = new Gf(o), Wa(t, d)), t = d;
    }
  }
}
class Hi {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const o = e.getActiveUniform(t, s), c = e.getUniformLocation(t, o.name);
      kf(o, c, this);
    }
    const r = [], a = [];
    for (const s of this.seq)
      s.type === e.SAMPLER_2D_SHADOW || s.type === e.SAMPLER_CUBE_SHADOW || s.type === e.SAMPLER_2D_ARRAY_SHADOW ? r.push(s) : a.push(s);
    r.length > 0 && (this.seq = r.concat(a));
  }
  setValue(e, t, n, r) {
    const a = this.map[t];
    a !== void 0 && a.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let a = 0, s = t.length; a !== s; ++a) {
      const o = t[a], c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, a = e.length; r !== a; ++r) {
      const s = e[r];
      s.id in t && n.push(s);
    }
    return n;
  }
}
function Xa(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const zf = 37297;
let Vf = 0;
function Hf(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), a = Math.min(e + 6, t.length);
  for (let s = r; s < a; s++) {
    const o = s + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[s]}`);
  }
  return n.join(`
`);
}
const qa = /* @__PURE__ */ new Pe();
function Wf(i) {
  ke._getMatrix(qa, ke.workingColorSpace, i);
  const e = `mat3( ${qa.elements.map((t) => t.toFixed(4))} )`;
  switch (ke.getTransfer(i)) {
    case Yi:
      return [e, "LinearTransferOETF"];
    case Je:
      return [e, "sRGBTransferOETF"];
    default:
      return Re("WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"];
  }
}
function Ya(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), a = (i.getShaderInfoLog(e) || "").trim();
  if (n && a === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(a);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + a + `

` + Hf(i.getShaderSource(e), o);
  } else
    return a;
}
function Xf(i, e) {
  const t = Wf(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
const qf = {
  1: "Linear",
  2: "Reinhard",
  3: "Cineon",
  4: "ACESFilmic",
  6: "AgX",
  7: "Neutral",
  5: "Custom"
};
function Yf(i, e) {
  const t = qf[e];
  return t === void 0 ? (Re("WebGLProgram: Unsupported toneMapping:", e), "vec3 " + i + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const Bi = /* @__PURE__ */ new k();
function Kf() {
  ke.getLuminanceCoefficients(Bi);
  const i = Bi.x.toFixed(4), e = Bi.y.toFixed(4), t = Bi.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function Zf(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(si).join(`
`);
}
function $f(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Jf(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const a = i.getActiveAttrib(e, r), s = a.name;
    let o = 1;
    a.type === i.FLOAT_MAT2 && (o = 2), a.type === i.FLOAT_MAT3 && (o = 3), a.type === i.FLOAT_MAT4 && (o = 4), t[s] = {
      type: a.type,
      location: i.getAttribLocation(e, s),
      locationSize: o
    };
  }
  return t;
}
function si(i) {
  return i !== "";
}
function Ka(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_SUN_LIGHTS/g, e.numSunLights).replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g, e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Za(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Qf = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Or(i) {
  return i.replace(Qf, ed);
}
const jf = /* @__PURE__ */ new Map();
function ed(i, e) {
  let t = Ie[e];
  if (t === void 0) {
    const n = jf.get(e);
    if (n !== void 0)
      t = Ie[n], Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("THREE.WebGLProgram: Can not resolve #include <" + e + ">");
  }
  return Or(t);
}
const td = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function $a(i) {
  return i.replace(td, nd);
}
function nd(i, e, t, n) {
  let r = "";
  for (let a = parseInt(e); a < parseInt(t); a++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + a + " ]").replace(/UNROLLED_LOOP_INDEX/g, a);
  return r;
}
function Ja(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
const id = {
  1: "SHADOWMAP_TYPE_PCF",
  3: "SHADOWMAP_TYPE_VSM"
};
function rd(i) {
  return id[i.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
const ad = {
  301: "ENVMAP_TYPE_CUBE",
  302: "ENVMAP_TYPE_CUBE",
  306: "ENVMAP_TYPE_CUBE_UV"
};
function sd(i) {
  return i.envMap === !1 ? "ENVMAP_TYPE_CUBE" : ad[i.envMapMode] || "ENVMAP_TYPE_CUBE";
}
const od = {
  302: "ENVMAP_MODE_REFRACTION"
};
function ld(i) {
  return i.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : od[i.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
const cd = {
  0: "ENVMAP_BLENDING_MULTIPLY",
  1: "ENVMAP_BLENDING_MIX",
  2: "ENVMAP_BLENDING_ADD"
};
function ud(i) {
  return i.envMap === !1 ? "ENVMAP_BLENDING_NONE" : cd[i.combine] || "ENVMAP_BLENDING_NONE";
}
function fd(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function dd(i, e, t, n) {
  const r = i.getContext(), a = t.defines;
  let s = t.vertexShader, o = t.fragmentShader;
  const c = rd(t), l = sd(t), f = ld(t), d = ud(t), u = fd(t), h = Zf(t), _ = $f(a), M = r.createProgram();
  let g, p, A = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (g = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(si).join(`
`), g.length > 0 && (g += `
`), p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(si).join(`
`), p.length > 0 && (p += `
`)) : (g = [
    Ja(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + f : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexNormals ? "#define HAS_NORMAL" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(si).join(`
`), p = [
    Ja(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + f : "",
    t.envMap ? "#define " + d : "",
    u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "",
    u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "",
    u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.retroreflection ? "#define USE_RETROREFLECTION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas || t.batchingColor ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    t.toneMapping !== 0 ? Ie.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== 0 ? Yf("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ie.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Xf("linearToOutputTexel", t.outputColorSpace),
    Kf(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(si).join(`
`)), s = Or(s), s = Ka(s, t), s = Za(s, t), o = Or(o), o = Ka(o, t), o = Za(o, t), s = $a(s), o = $a(o), t.isRawShaderMaterial !== !0 && (A = `#version 300 es
`, g = [
    h,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + g, p = [
    "#define varying in",
    t.glslVersion === Yn ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Yn ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + p);
  const R = A + g + s, S = A + p + o, y = Xa(r, r.VERTEX_SHADER, R), T = Xa(r, r.FRAGMENT_SHADER, S);
  r.attachShader(M, y), r.attachShader(M, T), t.index0AttributeName !== void 0 ? r.bindAttribLocation(M, 0, t.index0AttributeName) : t.hasPositionAttribute === !0 && r.bindAttribLocation(M, 0, "position"), r.linkProgram(M);
  function w(F) {
    if (i.debug.checkShaderErrors) {
      const B = r.getProgramInfoLog(M) || "", V = r.getShaderInfoLog(y) || "", I = r.getShaderInfoLog(T) || "", G = B.trim(), J = V.trim(), W = I.trim();
      let ne = !0, X = !0;
      if (r.getProgramParameter(M, r.LINK_STATUS) === !1)
        if (ne = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, M, y, T);
        else {
          const Z = Ya(r, y, "vertex"), ee = Ya(r, T, "fragment");
          qe(
            "WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(M, r.VALIDATE_STATUS) + `

Material Name: ` + F.name + `
Material Type: ` + F.type + `

Program Info Log: ` + G + `
` + Z + `
` + ee
          );
        }
      else G !== "" ? Re("WebGLProgram: Program Info Log:", G) : (J === "" || W === "") && (X = !1);
      X && (F.diagnostics = {
        runnable: ne,
        programLog: G,
        vertexShader: {
          log: J,
          prefix: g
        },
        fragmentShader: {
          log: W,
          prefix: p
        }
      });
    }
    r.deleteShader(y), r.deleteShader(T), v = new Hi(r, M), b = Jf(r, M);
  }
  let v;
  this.getUniforms = function() {
    return v === void 0 && w(this), v;
  };
  let b;
  this.getAttributes = function() {
    return b === void 0 && w(this), b;
  };
  let L = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return L === !1 && (L = r.getProgramParameter(M, zf)), L;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(M), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Vf++, this.cacheKey = e, this.usedTimes = 1, this.program = M, this.vertexShader = y, this.fragmentShader = T, this;
}
let hd = 0;
class pd {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e, t, n) {
    const r = this._getShaderCacheForMaterial(e);
    return r.has(t) === !1 && (r.add(t), t.usedTimes++), r.has(n) === !1 && (r.add(n), n.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderStage(e) {
    return this._getShaderStage(e.vertexShader);
  }
  getFragmentShaderStage(e) {
    return this._getShaderStage(e.fragmentShader);
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new md(e), t.set(e, n)), n;
  }
}
class md {
  constructor(e) {
    this.id = hd++, this.code = e, this.usedTimes = 0;
  }
}
function gd(i) {
  return i === 1030 || i === 37490 || i === 36285;
}
function _d(i, e, t, n, r, a) {
  const s = new hs(), o = new pd(), c = /* @__PURE__ */ new Set(), l = [], f = /* @__PURE__ */ new Map(), d = n.logarithmicDepthBuffer;
  let u = n.precision;
  const h = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distance",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function _(v) {
    return c.add(v), v === 0 ? "uv" : `uv${v}`;
  }
  function M(v, b, L, F, B, V) {
    const I = F.fog, G = B.geometry, J = v.isMeshStandardMaterial || v.isMeshLambertMaterial || v.isMeshPhongMaterial ? F.environment : null, W = v.isMeshStandardMaterial || v.isMeshLambertMaterial && !v.envMap || v.isMeshPhongMaterial && !v.envMap, ne = e.get(v.envMap || J, W), X = ne && ne.mapping === 306 ? ne.image.height : null, Z = h[v.type];
    v.precision !== null && (u = n.getMaxPrecision(v.precision), u !== v.precision && Re("WebGLProgram.getParameters:", v.precision, "not supported, using", u, "instead."));
    const ee = G.morphAttributes.position || G.morphAttributes.normal || G.morphAttributes.color, ve = ee !== void 0 ? ee.length : 0;
    let be = 0;
    G.morphAttributes.position !== void 0 && (be = 1), G.morphAttributes.normal !== void 0 && (be = 2), G.morphAttributes.color !== void 0 && (be = 3);
    let et, Ve, Ye, Y;
    if (Z) {
      const nt = Zt[Z];
      et = nt.vertexShader, Ve = nt.fragmentShader;
    } else {
      et = v.vertexShader, Ve = v.fragmentShader;
      const nt = o.getVertexShaderStage(v), Ke = o.getFragmentShaderStage(v);
      o.update(v, nt, Ke), Ye = nt.id, Y = Ke.id;
    }
    const j = i.getRenderTarget(), _e = i.state.buffers.depth.getReversed(), Ce = B.isInstancedMesh === !0, me = B.isBatchedMesh === !0, Ue = !!v.map, ht = !!v.matcap, Ne = !!ne, Xe = !!v.aoMap, tt = !!v.lightMap, Be = !!v.bumpMap && v.wireframe === !1, at = !!v.normalMap, gt = !!v.displacementMap, At = !!v.emissiveMap, ot = !!v.metalnessMap, ut = !!v.roughnessMap, D = v.anisotropy > 0, vt = v.clearcoat > 0, $e = v.dispersion > 0, E = v.retroreflectivity > 0, m = v.iridescence > 0, U = v.sheen > 0, z = v.transmission > 0, q = D && !!v.anisotropyMap, ie = vt && !!v.clearcoatMap, re = vt && !!v.clearcoatNormalMap, K = vt && !!v.clearcoatRoughnessMap, Q = m && !!v.iridescenceMap, ae = m && !!v.iridescenceThicknessMap, ye = U && !!v.sheenColorMap, ce = U && !!v.sheenRoughnessMap, se = !!v.specularMap, Te = !!v.specularColorMap, we = !!v.specularIntensityMap, Le = z && !!v.transmissionMap, P = z && !!v.thicknessMap, oe = !!v.gradientMap, $ = !!v.alphaMap, le = v.alphaTest > 0, he = !!v.alphaHash, te = !!v.extensions;
    let Ae = 0;
    v.toneMapped && (j === null || j.isXRRenderTarget === !0) && (Ae = i.toneMapping);
    const Me = {
      shaderID: Z,
      shaderType: v.type,
      shaderName: v.name,
      vertexShader: et,
      fragmentShader: Ve,
      defines: v.defines,
      customVertexShaderID: Ye,
      customFragmentShaderID: Y,
      isRawShaderMaterial: v.isRawShaderMaterial === !0,
      glslVersion: v.glslVersion,
      precision: u,
      batching: me,
      batchingColor: me && B._colorsTexture !== null,
      instancing: Ce,
      instancingColor: Ce && B.instanceColor !== null,
      instancingMorph: Ce && B.morphTexture !== null,
      outputColorSpace: j === null ? i.outputColorSpace : j.isXRRenderTarget === !0 ? j.texture.colorSpace : ke.workingColorSpace,
      alphaToCoverage: !!v.alphaToCoverage,
      map: Ue,
      matcap: ht,
      envMap: Ne,
      envMapMode: Ne && ne.mapping,
      envMapCubeUVHeight: X,
      aoMap: Xe,
      lightMap: tt,
      bumpMap: Be,
      normalMap: at,
      displacementMap: gt,
      emissiveMap: At,
      normalMapObjectSpace: at && v.normalMapType === 1,
      normalMapTangentSpace: at && v.normalMapType === 0,
      packedNormalMap: at && v.normalMapType === 0 && gd(v.normalMap.format),
      metalnessMap: ot,
      roughnessMap: ut,
      anisotropy: D,
      anisotropyMap: q,
      clearcoat: vt,
      clearcoatMap: ie,
      clearcoatNormalMap: re,
      clearcoatRoughnessMap: K,
      dispersion: $e,
      retroreflection: E,
      iridescence: m,
      iridescenceMap: Q,
      iridescenceThicknessMap: ae,
      sheen: U,
      sheenColorMap: ye,
      sheenRoughnessMap: ce,
      specularMap: se,
      specularColorMap: Te,
      specularIntensityMap: we,
      transmission: z,
      transmissionMap: Le,
      thicknessMap: P,
      gradientMap: oe,
      opaque: v.transparent === !1 && v.blending === 1 && v.alphaToCoverage === !1,
      alphaMap: $,
      alphaTest: le,
      alphaHash: he,
      combine: v.combine,
      //
      mapUv: Ue && _(v.map.channel),
      aoMapUv: Xe && _(v.aoMap.channel),
      lightMapUv: tt && _(v.lightMap.channel),
      bumpMapUv: Be && _(v.bumpMap.channel),
      normalMapUv: at && _(v.normalMap.channel),
      displacementMapUv: gt && _(v.displacementMap.channel),
      emissiveMapUv: At && _(v.emissiveMap.channel),
      metalnessMapUv: ot && _(v.metalnessMap.channel),
      roughnessMapUv: ut && _(v.roughnessMap.channel),
      anisotropyMapUv: q && _(v.anisotropyMap.channel),
      clearcoatMapUv: ie && _(v.clearcoatMap.channel),
      clearcoatNormalMapUv: re && _(v.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: K && _(v.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Q && _(v.iridescenceMap.channel),
      iridescenceThicknessMapUv: ae && _(v.iridescenceThicknessMap.channel),
      sheenColorMapUv: ye && _(v.sheenColorMap.channel),
      sheenRoughnessMapUv: ce && _(v.sheenRoughnessMap.channel),
      specularMapUv: se && _(v.specularMap.channel),
      specularColorMapUv: Te && _(v.specularColorMap.channel),
      specularIntensityMapUv: we && _(v.specularIntensityMap.channel),
      transmissionMapUv: Le && _(v.transmissionMap.channel),
      thicknessMapUv: P && _(v.thicknessMap.channel),
      alphaMapUv: $ && _(v.alphaMap.channel),
      //
      vertexTangents: !!G.attributes.tangent && (at || D),
      vertexNormals: !!G.attributes.normal,
      vertexColors: v.vertexColors,
      vertexAlphas: v.vertexColors === !0 && !!G.attributes.color && G.attributes.color.itemSize === 4,
      pointsUvs: B.isPoints === !0 && !!G.attributes.uv && (Ue || $),
      fog: !!I,
      useFog: v.fog === !0,
      fogExp2: !!I && I.isFogExp2,
      flatShading: v.wireframe === !1 && (v.flatShading === !0 || G.attributes.normal === void 0 && at === !1 && (v.isMeshLambertMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isMeshPhysicalMaterial)),
      sizeAttenuation: v.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      reversedDepthBuffer: _e,
      skinning: B.isSkinnedMesh === !0,
      hasPositionAttribute: G.attributes.position !== void 0,
      morphTargets: G.morphAttributes.position !== void 0,
      morphNormals: G.morphAttributes.normal !== void 0,
      morphColors: G.morphAttributes.color !== void 0,
      morphTargetsCount: ve,
      morphTextureStride: be,
      numSunLights: b.sun.length,
      numDirLights: b.directional.length,
      numPointLights: b.point.length,
      numSpotLights: b.spot.length,
      numSpotLightMaps: b.spotLightMap.length,
      numRectAreaLights: b.rectArea.length,
      numHemiLights: b.hemi.length,
      numSunLightShadows: b.sunShadowMap.length,
      numDirLightShadows: b.directionalShadowMap.length,
      numPointLightShadows: b.pointShadowMap.length,
      numSpotLightShadows: b.spotShadowMap.length,
      numSpotLightShadowsWithMaps: b.numSpotLightShadowsWithMaps,
      numLightProbes: b.numLightProbes,
      numLightProbeGrids: V.length,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: v.dithering,
      shadowMapEnabled: i.shadowMap.enabled && L.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Ae,
      decodeVideoTexture: Ue && v.map.isVideoTexture === !0 && ke.getTransfer(v.map.colorSpace) === Je,
      decodeVideoTextureEmissive: At && v.emissiveMap.isVideoTexture === !0 && ke.getTransfer(v.emissiveMap.colorSpace) === Je,
      premultipliedAlpha: v.premultipliedAlpha,
      doubleSided: v.side === 2,
      flipSided: v.side === 1,
      useDepthPacking: v.depthPacking >= 0,
      depthPacking: v.depthPacking || 0,
      index0AttributeName: v.index0AttributeName,
      extensionClipCullDistance: te && v.extensions.clipCullDistance === !0 && t.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (te && v.extensions.multiDraw === !0 || me) && t.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: t.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: v.customProgramCacheKey()
    };
    return Me.vertexUv1s = c.has(1), Me.vertexUv2s = c.has(2), Me.vertexUv3s = c.has(3), c.clear(), Me;
  }
  function g(v) {
    const b = [];
    if (v.shaderID ? b.push(v.shaderID) : (b.push(v.customVertexShaderID), b.push(v.customFragmentShaderID)), v.defines !== void 0)
      for (const L in v.defines)
        b.push(L), b.push(v.defines[L]);
    return v.isRawShaderMaterial === !1 && (p(b, v), A(b, v), b.push(i.outputColorSpace)), b.push(v.customProgramCacheKey), b.join();
  }
  function p(v, b) {
    v.push(b.precision), v.push(b.outputColorSpace), v.push(b.envMapMode), v.push(b.envMapCubeUVHeight), v.push(b.mapUv), v.push(b.alphaMapUv), v.push(b.lightMapUv), v.push(b.aoMapUv), v.push(b.bumpMapUv), v.push(b.normalMapUv), v.push(b.displacementMapUv), v.push(b.emissiveMapUv), v.push(b.metalnessMapUv), v.push(b.roughnessMapUv), v.push(b.anisotropyMapUv), v.push(b.clearcoatMapUv), v.push(b.clearcoatNormalMapUv), v.push(b.clearcoatRoughnessMapUv), v.push(b.iridescenceMapUv), v.push(b.iridescenceThicknessMapUv), v.push(b.sheenColorMapUv), v.push(b.sheenRoughnessMapUv), v.push(b.specularMapUv), v.push(b.specularColorMapUv), v.push(b.specularIntensityMapUv), v.push(b.transmissionMapUv), v.push(b.thicknessMapUv), v.push(b.combine), v.push(b.fogExp2), v.push(b.sizeAttenuation), v.push(b.morphTargetsCount), v.push(b.morphAttributeCount), v.push(b.numSunLights), v.push(b.numDirLights), v.push(b.numPointLights), v.push(b.numSpotLights), v.push(b.numSpotLightMaps), v.push(b.numHemiLights), v.push(b.numRectAreaLights), v.push(b.numSunLightShadows), v.push(b.numDirLightShadows), v.push(b.numPointLightShadows), v.push(b.numSpotLightShadows), v.push(b.numSpotLightShadowsWithMaps), v.push(b.numLightProbes), v.push(b.shadowMapType), v.push(b.toneMapping), v.push(b.numClippingPlanes), v.push(b.numClipIntersection), v.push(b.depthPacking);
  }
  function A(v, b) {
    s.disableAll(), b.instancing && s.enable(0), b.instancingColor && s.enable(1), b.instancingMorph && s.enable(2), b.matcap && s.enable(3), b.envMap && s.enable(4), b.normalMapObjectSpace && s.enable(5), b.normalMapTangentSpace && s.enable(6), b.clearcoat && s.enable(7), b.iridescence && s.enable(8), b.alphaTest && s.enable(9), b.vertexColors && s.enable(10), b.vertexAlphas && s.enable(11), b.vertexUv1s && s.enable(12), b.vertexUv2s && s.enable(13), b.vertexUv3s && s.enable(14), b.vertexTangents && s.enable(15), b.anisotropy && s.enable(16), b.alphaHash && s.enable(17), b.batching && s.enable(18), b.dispersion && s.enable(19), b.retroreflection && s.enable(24), b.batchingColor && s.enable(20), b.gradientMap && s.enable(21), b.packedNormalMap && s.enable(22), b.vertexNormals && s.enable(23), v.push(s.mask), s.disableAll(), b.fog && s.enable(0), b.useFog && s.enable(1), b.flatShading && s.enable(2), b.logarithmicDepthBuffer && s.enable(3), b.reversedDepthBuffer && s.enable(4), b.skinning && s.enable(5), b.morphTargets && s.enable(6), b.morphNormals && s.enable(7), b.morphColors && s.enable(8), b.premultipliedAlpha && s.enable(9), b.shadowMapEnabled && s.enable(10), b.doubleSided && s.enable(11), b.flipSided && s.enable(12), b.useDepthPacking && s.enable(13), b.dithering && s.enable(14), b.transmission && s.enable(15), b.sheen && s.enable(16), b.opaque && s.enable(17), b.pointsUvs && s.enable(18), b.decodeVideoTexture && s.enable(19), b.decodeVideoTextureEmissive && s.enable(20), b.alphaToCoverage && s.enable(21), b.numLightProbeGrids > 0 && s.enable(22), b.hasPositionAttribute && s.enable(23), v.push(s.mask);
  }
  function R(v) {
    const b = h[v.type];
    let L;
    if (b) {
      const F = Zt[b];
      L = Go.clone(F.uniforms);
    } else
      L = v.uniforms;
    return L;
  }
  function S(v, b) {
    let L = f.get(b);
    return L !== void 0 ? ++L.usedTimes : (L = new dd(i, b, v, r), l.push(L), f.set(b, L)), L;
  }
  function y(v) {
    if (--v.usedTimes === 0) {
      const b = l.indexOf(v);
      l[b] = l[l.length - 1], l.pop(), f.delete(v.cacheKey), v.destroy();
    }
  }
  function T(v) {
    o.remove(v);
  }
  function w() {
    o.dispose();
  }
  return {
    getParameters: M,
    getProgramCacheKey: g,
    getUniforms: R,
    acquireProgram: S,
    releaseProgram: y,
    releaseShaderCache: T,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: l,
    dispose: w
  };
}
function vd() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(s) {
    return i.has(s);
  }
  function t(s) {
    let o = i.get(s);
    return o === void 0 && (o = {}, i.set(s, o)), o;
  }
  function n(s) {
    i.delete(s);
  }
  function r(s, o, c) {
    i.get(s)[o] = c;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: r,
    dispose: a
  };
}
function xd(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.materialVariant !== e.materialVariant ? i.materialVariant - e.materialVariant : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function Qa(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function ja() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function a() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function s(u) {
    let h = 0;
    return u.isInstancedMesh && (h += 2), u.isSkinnedMesh && (h += 1), h;
  }
  function o(u, h, _, M, g, p) {
    let A = i[e];
    return A === void 0 ? (A = {
      id: u.id,
      object: u,
      geometry: h,
      material: _,
      materialVariant: s(u),
      groupOrder: M,
      renderOrder: u.renderOrder,
      z: g,
      group: p
    }, i[e] = A) : (A.id = u.id, A.object = u, A.geometry = h, A.material = _, A.materialVariant = s(u), A.groupOrder = M, A.renderOrder = u.renderOrder, A.z = g, A.group = p), e++, A;
  }
  function c(u, h, _, M, g, p, A) {
    A.reversedDepth === !0 && (g = -g);
    const R = o(u, h, _, M, g, p);
    _.transmission > 0 ? n.push(R) : _.transparent === !0 ? r.push(R) : t.push(R);
  }
  function l(u, h, _, M, g, p) {
    const A = o(u, h, _, M, g, p);
    _.transmission > 0 ? n.unshift(A) : _.transparent === !0 ? r.unshift(A) : t.unshift(A);
  }
  function f(u, h) {
    t.length > 1 && t.sort(u || xd), n.length > 1 && n.sort(h || Qa), r.length > 1 && r.sort(h || Qa);
  }
  function d() {
    for (let u = e, h = i.length; u < h; u++) {
      const _ = i[u];
      if (_.id === null) break;
      _.id = null, _.object = null, _.geometry = null, _.material = null, _.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: a,
    push: c,
    unshift: l,
    finish: d,
    sort: f
  };
}
function Sd() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const a = i.get(n);
    let s;
    return a === void 0 ? (s = new ja(), i.set(n, [s])) : r >= a.length ? (s = new ja(), a.push(s)) : s = a[r], s;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Md() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "SunLight":
        case "DirectionalLight":
          t = {
            direction: new k(),
            color: new We()
          };
          break;
        case "SpotLight":
          t = {
            position: new k(),
            direction: new k(),
            color: new We(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new k(),
            color: new We(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new k(),
            skyColor: new We(),
            groundColor: new We()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new We(),
            position: new k(),
            halfWidth: new k(),
            halfHeight: new k()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function Ed() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "SunLight":
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new De()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new De()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new De(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let yd = 0;
function Td(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function bd(i) {
  const e = new Md(), t = Ed(), n = {
    version: 0,
    hash: {
      sunLength: -1,
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numSunShadows: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    sun: [],
    sunShadow: [],
    sunShadowMap: [],
    sunShadowMatrix: [],
    sunShadowCascade: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let l = 0; l < 9; l++) n.probe.push(new k());
  const r = new k(), a = new lt(), s = new lt();
  function o(l) {
    let f = 0, d = 0, u = 0;
    for (let B = 0; B < 9; B++) n.probe[B].set(0, 0, 0);
    let h = 0, _ = 0, M = 0, g = 0, p = 0, A = 0, R = 0, S = 0, y = 0, T = 0, w = 0, v = 0, b = 0, L = 0;
    l.sort(Td);
    for (let B = 0, V = l.length; B < V; B++) {
      const I = l[B], G = I.color, J = I.intensity, W = I.distance;
      let ne = null;
      if (I.shadow && I.shadow.map && (I.shadow.map.texture.format === 1030 ? ne = I.shadow.map.texture : ne = I.shadow.map.depthTexture || I.shadow.map.texture), I.isAmbientLight)
        f += G.r * J, d += G.g * J, u += G.b * J;
      else if (I.isLightProbe) {
        for (let X = 0; X < 9; X++)
          n.probe[X].addScaledVector(I.sh.coefficients[X], J);
        L++;
      } else if (I.isSunLight) {
        const X = e.get(I);
        if (X.color.copy(I.color).multiplyScalar(I.intensity), I.castShadow) {
          const Z = I.shadow, ee = t.get(I);
          ee.shadowIntensity = Z.intensity, ee.shadowBias = Z.bias, ee.shadowNormalBias = Z.normalBias, ee.shadowRadius = Z.radius, ee.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()), n.sunShadow[_] = ee, n.sunShadowMap[_] = ne;
          const ve = Z.getViewportCount();
          for (let be = 0; be < ve; be++)
            n.sunShadowMatrix[M + be] = Z.getMatrix(be), n.sunShadowCascade[M + be] = Z._cascadeData[be];
          M += ve, _++;
        }
        n.sun[h] = X, h++;
      } else if (I.isDirectionalLight) {
        const X = e.get(I);
        if (X.color.copy(I.color).multiplyScalar(I.intensity), I.castShadow) {
          const Z = I.shadow, ee = t.get(I);
          ee.shadowIntensity = Z.intensity, ee.shadowBias = Z.bias, ee.shadowNormalBias = Z.normalBias, ee.shadowRadius = Z.radius, ee.shadowMapSize = Z.mapSize, n.directionalShadow[g] = ee, n.directionalShadowMap[g] = ne, n.directionalShadowMatrix[g] = I.shadow.matrix, y++;
        }
        n.directional[g] = X, g++;
      } else if (I.isSpotLight) {
        const X = e.get(I);
        X.position.setFromMatrixPosition(I.matrixWorld), X.color.copy(G).multiplyScalar(J), X.distance = W, X.coneCos = Math.cos(I.angle), X.penumbraCos = Math.cos(I.angle * (1 - I.penumbra)), X.decay = I.decay, n.spot[A] = X;
        const Z = I.shadow;
        if (I.map && (n.spotLightMap[v] = I.map, v++, Z.updateMatrices(I), I.castShadow && b++), n.spotLightMatrix[A] = Z.matrix, I.castShadow) {
          const ee = t.get(I);
          ee.shadowIntensity = Z.intensity, ee.shadowBias = Z.bias, ee.shadowNormalBias = Z.normalBias, ee.shadowRadius = Z.radius, ee.shadowMapSize = Z.mapSize, n.spotShadow[A] = ee, n.spotShadowMap[A] = ne, w++;
        }
        A++;
      } else if (I.isRectAreaLight) {
        const X = e.get(I);
        X.color.copy(G).multiplyScalar(J), X.halfWidth.set(I.width * 0.5, 0, 0), X.halfHeight.set(0, I.height * 0.5, 0), n.rectArea[R] = X, R++;
      } else if (I.isPointLight) {
        const X = e.get(I);
        if (X.color.copy(I.color).multiplyScalar(I.intensity), X.distance = I.distance, X.decay = I.decay, I.castShadow) {
          const Z = I.shadow, ee = t.get(I);
          ee.shadowIntensity = Z.intensity, ee.shadowBias = Z.bias, ee.shadowNormalBias = Z.normalBias, ee.shadowRadius = Z.radius, ee.shadowMapSize = Z.mapSize, ee.shadowCameraNear = Z.camera.near, ee.shadowCameraFar = Z.camera.far, n.pointShadow[p] = ee, n.pointShadowMap[p] = ne, n.pointShadowMatrix[p] = I.shadow.matrix, T++;
        }
        n.point[p] = X, p++;
      } else if (I.isHemisphereLight) {
        const X = e.get(I);
        X.skyColor.copy(I.color).multiplyScalar(J), X.groundColor.copy(I.groundColor).multiplyScalar(J), n.hemi[S] = X, S++;
      }
    }
    R > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ue.LTC_FLOAT_1, n.rectAreaLTC2 = ue.LTC_FLOAT_2) : (n.rectAreaLTC1 = ue.LTC_HALF_1, n.rectAreaLTC2 = ue.LTC_HALF_2)), n.ambient[0] = f, n.ambient[1] = d, n.ambient[2] = u;
    const F = n.hash;
    (F.sunLength !== h || F.directionalLength !== g || F.pointLength !== p || F.spotLength !== A || F.rectAreaLength !== R || F.hemiLength !== S || F.numSunShadows !== _ || F.numDirectionalShadows !== y || F.numPointShadows !== T || F.numSpotShadows !== w || F.numSpotMaps !== v || F.numLightProbes !== L) && (n.sun.length = h, n.directional.length = g, n.spot.length = A, n.rectArea.length = R, n.point.length = p, n.hemi.length = S, n.sunShadow.length = _, n.sunShadowMap.length = _, n.sunShadowMatrix.length = M, n.sunShadowCascade.length = M, n.directionalShadow.length = y, n.directionalShadowMap.length = y, n.directionalShadowMatrix.length = y, n.pointShadow.length = T, n.pointShadowMap.length = T, n.pointShadowMatrix.length = T, n.spotShadow.length = w, n.spotShadowMap.length = w, n.spotLightMatrix.length = w + v - b, n.spotLightMap.length = v, n.numSpotLightShadowsWithMaps = b, n.numLightProbes = L, F.sunLength = h, F.directionalLength = g, F.pointLength = p, F.spotLength = A, F.rectAreaLength = R, F.hemiLength = S, F.numSunShadows = _, F.numDirectionalShadows = y, F.numPointShadows = T, F.numSpotShadows = w, F.numSpotMaps = v, F.numLightProbes = L, n.version = yd++);
  }
  function c(l, f) {
    let d = 0, u = 0, h = 0, _ = 0, M = 0, g = 0;
    const p = f.matrixWorldInverse;
    for (let A = 0, R = l.length; A < R; A++) {
      const S = l[A];
      if (S.isSunLight) {
        const y = n.sun[d];
        y.direction.setFromMatrixPosition(S.matrixWorld), y.direction.transformDirection(p), d++;
      } else if (S.isDirectionalLight) {
        const y = n.directional[u];
        y.direction.setFromMatrixPosition(S.matrixWorld), r.setFromMatrixPosition(S.target.matrixWorld), y.direction.sub(r), y.direction.transformDirection(p), u++;
      } else if (S.isSpotLight) {
        const y = n.spot[_];
        y.position.setFromMatrixPosition(S.matrixWorld), y.position.applyMatrix4(p), y.direction.setFromMatrixPosition(S.matrixWorld), r.setFromMatrixPosition(S.target.matrixWorld), y.direction.sub(r), y.direction.transformDirection(p), _++;
      } else if (S.isRectAreaLight) {
        const y = n.rectArea[M];
        y.position.setFromMatrixPosition(S.matrixWorld), y.position.applyMatrix4(p), s.identity(), a.copy(S.matrixWorld), a.premultiply(p), s.extractRotation(a), y.halfWidth.set(S.width * 0.5, 0, 0), y.halfHeight.set(0, S.height * 0.5, 0), y.halfWidth.applyMatrix4(s), y.halfHeight.applyMatrix4(s), M++;
      } else if (S.isPointLight) {
        const y = n.point[h];
        y.position.setFromMatrixPosition(S.matrixWorld), y.position.applyMatrix4(p), h++;
      } else if (S.isHemisphereLight) {
        const y = n.hemi[g];
        y.direction.setFromMatrixPosition(S.matrixWorld), y.direction.transformDirection(p), g++;
      }
    }
  }
  return {
    setup: o,
    setupView: c,
    state: n
  };
}
function es(i) {
  const e = new bd(i), t = [], n = [], r = [];
  function a(u) {
    d.camera = u, t.length = 0, n.length = 0, r.length = 0;
  }
  function s(u) {
    t.push(u);
  }
  function o(u) {
    n.push(u);
  }
  function c(u) {
    r.push(u);
  }
  function l() {
    e.setup(t);
  }
  function f(u) {
    e.setupView(t, u);
  }
  const d = {
    lightsArray: t,
    shadowsArray: n,
    lightProbeGridArray: r,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
    textureUnits: 0
  };
  return {
    init: a,
    state: d,
    setupLights: l,
    setupLightsView: f,
    pushLight: s,
    pushShadow: o,
    pushLightProbeGrid: c
  };
}
function Ad(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, a = 0) {
    const s = e.get(r);
    let o;
    return s === void 0 ? (o = new es(i), e.set(r, [o])) : a >= s.length ? (o = new es(i), s.push(o)) : o = s[a], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
const wd = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Rd = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`, Cd = [
  /* @__PURE__ */ new k(1, 0, 0),
  /* @__PURE__ */ new k(-1, 0, 0),
  /* @__PURE__ */ new k(0, 1, 0),
  /* @__PURE__ */ new k(0, -1, 0),
  /* @__PURE__ */ new k(0, 0, 1),
  /* @__PURE__ */ new k(0, 0, -1)
], Pd = [
  /* @__PURE__ */ new k(0, -1, 0),
  /* @__PURE__ */ new k(0, -1, 0),
  /* @__PURE__ */ new k(0, 0, 1),
  /* @__PURE__ */ new k(0, 0, -1),
  /* @__PURE__ */ new k(0, -1, 0),
  /* @__PURE__ */ new k(0, -1, 0)
], ts = /* @__PURE__ */ new lt(), ri = /* @__PURE__ */ new k(), Pr = /* @__PURE__ */ new k();
function Dd(i, e, t) {
  let n = new _s();
  const r = new De(), a = new De(), s = new ze(), o = new Vo(), c = new Ho(), l = {}, f = t.maxTextureSize, d = { 0: 1, 1: 0, 2: 2 }, u = new Ut({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new De() },
      radius: { value: 4 }
    },
    vertexShader: wd,
    fragmentShader: Rd
  }), h = u.clone();
  h.defines.HORIZONTAL_PASS = 1;
  const _ = new Nt();
  _.setAttribute(
    "position",
    new Vt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const M = new Pt(_, u), g = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let p = this.type;
  this.render = function(T, w, v) {
    if (g.enabled === !1 || g.autoUpdate === !1 && g.needsUpdate === !1 || T.length === 0) return;
    this.type === 2 && (Re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."), this.type = 1);
    const b = i.getRenderTarget(), L = i.getActiveCubeFace(), F = i.getActiveMipmapLevel(), B = i.state;
    B.setBlending(0), B.buffers.depth.getReversed() === !0 ? B.buffers.color.setClear(0, 0, 0, 0) : B.buffers.color.setClear(1, 1, 1, 1), B.buffers.depth.setTest(!0), B.setScissorTest(!1);
    const V = p !== this.type;
    V && w.traverse(function(I) {
      I.material && (Array.isArray(I.material) ? I.material.forEach((G) => G.needsUpdate = !0) : I.material.needsUpdate = !0);
    });
    for (let I = 0, G = T.length; I < G; I++) {
      const J = T[I], W = J.shadow;
      if (W === void 0) {
        Re("WebGLShadowMap:", J, "has no shadow.");
        continue;
      }
      if (W.autoUpdate === !1 && W.needsUpdate === !1) continue;
      r.copy(W.mapSize);
      const ne = W.getFrameExtents();
      r.multiply(ne), a.copy(W.mapSize), (r.x > f || r.y > f) && (r.x > f && (a.x = Math.floor(f / ne.x), r.x = a.x * ne.x, W.mapSize.x = a.x), r.y > f && (a.y = Math.floor(f / ne.y), r.y = a.y * ne.y, W.mapSize.y = a.y));
      const X = i.state.buffers.depth.getReversed();
      if (W.camera._reversedDepth = X, W.map === null || V === !0) {
        if (W.map !== null && (W.map.depthTexture !== null && (W.map.depthTexture.dispose(), W.map.depthTexture = null), W.map.dispose()), this.type === 3) {
          if (J.isPointLight) {
            Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          W.map = new st(r.x, r.y, {
            format: 1030,
            type: 1016,
            minFilter: 1006,
            magFilter: 1006,
            generateMipmaps: !1
          }), W.map.texture.name = J.name + ".shadowMap", W.map.depthTexture = new mn(r.x, r.y, 1015), W.map.depthTexture.name = J.name + ".shadowMapDepth", W.map.depthTexture.format = 1026, W.map.depthTexture.compareFunction = null, W.map.depthTexture.minFilter = 1003, W.map.depthTexture.magFilter = 1003;
        } else
          J.isPointLight ? (W.map = new Yr(r.x), W.map.depthTexture = new Oo(r.x, 1014)) : (W.map = new st(r.x, r.y), W.map.depthTexture = new mn(r.x, r.y, 1014)), W.map.depthTexture.name = J.name + ".shadowMap", W.map.depthTexture.format = 1026, this.type === 1 ? (W.map.depthTexture.compareFunction = X ? 518 : 515, W.map.depthTexture.minFilter = 1006, W.map.depthTexture.magFilter = 1006) : (W.map.depthTexture.compareFunction = null, W.map.depthTexture.minFilter = 1003, W.map.depthTexture.magFilter = 1003);
        W.camera.updateProjectionMatrix();
      }
      W.map.isWebGLCubeRenderTarget !== !0 && (W.map.width !== r.x || W.map.height !== r.y) && W.map.setSize(r.x, r.y);
      const Z = W.map.isWebGLCubeRenderTarget ? 6 : W.getViewportCount();
      J.isPointLight !== !0 && W.updateMatrices(J, v);
      for (let ee = 0; ee < Z; ee++) {
        const ve = W.getCamera(ee);
        if (J.isPointLight) {
          const be = W.camera, et = W.matrix, Ve = J.distance || be.far;
          Ve !== be.far && (be.far = Ve, be.updateProjectionMatrix()), ri.setFromMatrixPosition(J.matrixWorld), be.position.copy(ri), Pr.copy(be.position), Pr.add(Cd[ee]), be.up.copy(Pd[ee]), be.lookAt(Pr), be.updateMatrixWorld(), et.makeTranslation(-ri.x, -ri.y, -ri.z), ts.multiplyMatrices(be.projectionMatrix, be.matrixWorldInverse), W._frustum.setFromProjectionMatrix(ts, be.coordinateSystem, be.reversedDepth);
        }
        if (W.map.isWebGLCubeRenderTarget)
          i.setRenderTarget(W.map, ee), i.clear();
        else {
          ee === 0 && (i.setRenderTarget(W.map), i.clear());
          const be = W.getViewport(ee);
          s.set(
            a.x * be.x,
            a.y * be.y,
            a.x * be.z,
            a.y * be.w
          ), B.viewport(s);
        }
        n = W.getFrustum(ee), S(w, v, ve, J, this.type);
      }
      W.isPointLightShadow !== !0 && this.type === 3 && A(W, v), W.needsUpdate = !1;
    }
    p = this.type, g.needsUpdate = !1, i.setRenderTarget(b, L, F);
  };
  function A(T, w) {
    const v = e.update(M);
    u.defines.VSM_SAMPLES !== T.blurSamples && (u.defines.VSM_SAMPLES = T.blurSamples, h.defines.VSM_SAMPLES = T.blurSamples, u.needsUpdate = !0, h.needsUpdate = !0), T.mapPass === null ? T.mapPass = new st(r.x, r.y, {
      format: 1030,
      type: 1016
    }) : (T.mapPass.width !== T.map.width || T.mapPass.height !== T.map.height) && T.mapPass.setSize(T.map.width, T.map.height), u.uniforms.shadow_pass.value = T.map.depthTexture, u.uniforms.resolution.value.set(T.map.width, T.map.height), u.uniforms.radius.value = T.radius, i.setRenderTarget(T.mapPass), i.clear(), i.renderBufferDirect(w, null, v, u, M, null), h.uniforms.shadow_pass.value = T.mapPass.texture, h.uniforms.resolution.value.set(T.map.width, T.map.height), h.uniforms.radius.value = T.radius, i.setRenderTarget(T.map), i.clear(), i.renderBufferDirect(w, null, v, h, M, null);
  }
  function R(T, w, v, b) {
    let L = null;
    const F = v.isPointLight === !0 ? T.customDistanceMaterial : T.customDepthMaterial;
    if (F !== void 0)
      L = F;
    else if (L = v.isPointLight === !0 ? c : o, i.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0 || w.alphaToCoverage === !0) {
      const B = L.uuid, V = w.uuid;
      let I = l[B];
      I === void 0 && (I = {}, l[B] = I);
      let G = I[V];
      G === void 0 && (G = L.clone(), I[V] = G, w.addEventListener("dispose", y)), L = G;
    }
    if (L.visible = w.visible, L.wireframe = w.wireframe, b === 3 ? L.side = w.shadowSide !== null ? w.shadowSide : w.side : L.side = w.shadowSide !== null ? w.shadowSide : d[w.side], L.alphaMap = w.alphaMap, L.alphaTest = w.alphaToCoverage === !0 ? 0.5 : w.alphaTest, L.map = w.map, L.clipShadows = w.clipShadows, L.clippingPlanes = w.clippingPlanes, L.clipIntersection = w.clipIntersection, L.displacementMap = w.displacementMap, L.displacementScale = w.displacementScale, L.displacementBias = w.displacementBias, L.wireframeLinewidth = w.wireframeLinewidth, L.linewidth = w.linewidth, v.isPointLight === !0 && L.isMeshDistanceMaterial === !0) {
      const B = i.properties.get(L);
      B.light = v;
    }
    return L;
  }
  function S(T, w, v, b, L) {
    if (T.visible === !1) return;
    if (T.layers.test(w.layers) && (T.isMesh || T.isLine || T.isPoints) && (T.castShadow || T.receiveShadow && L === 3) && (!T.frustumCulled || T.intersectsFrustum(n))) {
      T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse, T.matrixWorld);
      const V = e.update(T), I = T.material;
      if (Array.isArray(I)) {
        const G = V.groups;
        for (let J = 0, W = G.length; J < W; J++) {
          const ne = G[J], X = I[ne.materialIndex];
          if (X && X.visible) {
            const Z = R(T, X, b, L);
            T.onBeforeShadow(i, T, w, v, V, Z, ne), i.renderBufferDirect(v, null, V, Z, T, ne), T.onAfterShadow(i, T, w, v, V, Z, ne);
          }
        }
      } else if (I.visible) {
        const G = R(T, I, b, L);
        T.onBeforeShadow(i, T, w, v, V, G, null), i.renderBufferDirect(v, null, V, G, T, null), T.onAfterShadow(i, T, w, v, V, G, null);
      }
    }
    const B = T.children;
    for (let V = 0, I = B.length; V < I; V++)
      S(B[V], w, v, b, L);
  }
  function y(T) {
    T.target.removeEventListener("dispose", y);
    for (const v in l) {
      const b = l[v], L = T.target.uuid;
      L in b && (b[L].dispose(), delete b[L]);
    }
  }
}
function Ld(i, e) {
  function t() {
    let P = !1;
    const oe = new ze();
    let $ = null;
    const le = new ze(0, 0, 0, 0);
    return {
      setMask: function(he) {
        $ !== he && !P && (i.colorMask(he, he, he, he), $ = he);
      },
      setLocked: function(he) {
        P = he;
      },
      setClear: function(he, te, Ae, Me, nt) {
        nt === !0 && (he *= Me, te *= Me, Ae *= Me), oe.set(he, te, Ae, Me), le.equals(oe) === !1 && (i.clearColor(he, te, Ae, Me), le.copy(oe));
      },
      reset: function() {
        P = !1, $ = null, le.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let P = !1, oe = !1, $ = null, le = null, he = null;
    return {
      setReversed: function(te) {
        if (oe !== te) {
          const Ae = e.get("EXT_clip_control");
          te ? Ae.clipControlEXT(Ae.LOWER_LEFT_EXT, Ae.ZERO_TO_ONE_EXT) : Ae.clipControlEXT(Ae.LOWER_LEFT_EXT, Ae.NEGATIVE_ONE_TO_ONE_EXT), oe = te;
          const Me = he;
          he = null, this.setClear(Me);
        }
      },
      getReversed: function() {
        return oe;
      },
      setTest: function(te) {
        te ? j(i.DEPTH_TEST) : _e(i.DEPTH_TEST);
      },
      setMask: function(te) {
        $ !== te && !P && (i.depthMask(te), $ = te);
      },
      setFunc: function(te) {
        if (oe && (te = Js[te]), le !== te) {
          switch (te) {
            case 0:
              i.depthFunc(i.NEVER);
              break;
            case 1:
              i.depthFunc(i.ALWAYS);
              break;
            case 2:
              i.depthFunc(i.LESS);
              break;
            case 3:
              i.depthFunc(i.LEQUAL);
              break;
            case 4:
              i.depthFunc(i.EQUAL);
              break;
            case 5:
              i.depthFunc(i.GEQUAL);
              break;
            case 6:
              i.depthFunc(i.GREATER);
              break;
            case 7:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          le = te;
        }
      },
      setLocked: function(te) {
        P = te;
      },
      setClear: function(te) {
        he !== te && (he = te, oe && (te = 1 - te), i.clearDepth(te));
      },
      reset: function() {
        P = !1, $ = null, le = null, he = null, oe = !1;
      }
    };
  }
  function r() {
    let P = !1, oe = null, $ = null, le = null, he = null, te = null, Ae = null, Me = null, nt = null;
    return {
      setTest: function(Ke) {
        P || (Ke ? j(i.STENCIL_TEST) : _e(i.STENCIL_TEST));
      },
      setMask: function(Ke) {
        oe !== Ke && !P && (i.stencilMask(Ke), oe = Ke);
      },
      setFunc: function(Ke, Ot, Wt) {
        ($ !== Ke || le !== Ot || he !== Wt) && (i.stencilFunc(Ke, Ot, Wt), $ = Ke, le = Ot, he = Wt);
      },
      setOp: function(Ke, Ot, Wt) {
        (te !== Ke || Ae !== Ot || Me !== Wt) && (i.stencilOp(Ke, Ot, Wt), te = Ke, Ae = Ot, Me = Wt);
      },
      setLocked: function(Ke) {
        P = Ke;
      },
      setClear: function(Ke) {
        nt !== Ke && (i.clearStencil(Ke), nt = Ke);
      },
      reset: function() {
        P = !1, oe = null, $ = null, le = null, he = null, te = null, Ae = null, Me = null, nt = null;
      }
    };
  }
  const a = new t(), s = new n(), o = new r(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let f = {}, d = {}, u = {}, h = /* @__PURE__ */ new WeakMap(), _ = [], M = null, g = !1, p = null, A = null, R = null, S = null, y = null, T = null, w = null, v = new We(0, 0, 0), b = 0, L = !1, F = null, B = null, V = null, I = null, G = null;
  const J = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let W = !1, ne = 0;
  const X = i.getParameter(i.VERSION);
  X.indexOf("WebGL") !== -1 ? (ne = parseFloat(/^WebGL (\d)/.exec(X)[1]), W = ne >= 1) : X.indexOf("OpenGL ES") !== -1 && (ne = parseFloat(/^OpenGL ES (\d)/.exec(X)[1]), W = ne >= 2);
  let Z = null, ee = {};
  const ve = i.getParameter(i.SCISSOR_BOX), be = i.getParameter(i.VIEWPORT), et = new ze().fromArray(ve), Ve = new ze().fromArray(be);
  function Ye(P, oe, $, le) {
    const he = new Uint8Array(4), te = i.createTexture();
    i.bindTexture(P, te), i.texParameteri(P, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(P, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Ae = 0; Ae < $; Ae++)
      P === i.TEXTURE_3D || P === i.TEXTURE_2D_ARRAY ? i.texImage3D(oe, 0, i.RGBA, 1, 1, le, 0, i.RGBA, i.UNSIGNED_BYTE, he) : i.texImage2D(oe + Ae, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, he);
    return te;
  }
  const Y = {};
  Y[i.TEXTURE_2D] = Ye(i.TEXTURE_2D, i.TEXTURE_2D, 1), Y[i.TEXTURE_CUBE_MAP] = Ye(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Y[i.TEXTURE_2D_ARRAY] = Ye(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Y[i.TEXTURE_3D] = Ye(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), a.setClear(0, 0, 0, 1), s.setClear(1), o.setClear(0), j(i.DEPTH_TEST), s.setFunc(3), Be(!1), at(1), j(i.CULL_FACE), Xe(0);
  function j(P) {
    f[P] !== !0 && (i.enable(P), f[P] = !0);
  }
  function _e(P) {
    f[P] !== !1 && (i.disable(P), f[P] = !1);
  }
  function Ce(P, oe) {
    return u[P] !== oe ? (i.bindFramebuffer(P, oe), u[P] = oe, P === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = oe), P === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = oe), !0) : !1;
  }
  function me(P, oe) {
    let $ = _, le = !1;
    if (P) {
      $ = h.get(oe), $ === void 0 && ($ = [], h.set(oe, $));
      const he = P.textures;
      if ($.length !== he.length || $[0] !== i.COLOR_ATTACHMENT0) {
        for (let te = 0, Ae = he.length; te < Ae; te++)
          $[te] = i.COLOR_ATTACHMENT0 + te;
        $.length = he.length, le = !0;
      }
    } else
      $[0] !== i.BACK && ($[0] = i.BACK, le = !0);
    le && i.drawBuffers($);
  }
  function Ue(P) {
    return M !== P ? (i.useProgram(P), M = P, !0) : !1;
  }
  const ht = {
    100: i.FUNC_ADD,
    101: i.FUNC_SUBTRACT,
    102: i.FUNC_REVERSE_SUBTRACT
  };
  ht[103] = i.MIN, ht[104] = i.MAX;
  const Ne = {
    200: i.ZERO,
    201: i.ONE,
    202: i.SRC_COLOR,
    204: i.SRC_ALPHA,
    210: i.SRC_ALPHA_SATURATE,
    208: i.DST_COLOR,
    206: i.DST_ALPHA,
    203: i.ONE_MINUS_SRC_COLOR,
    205: i.ONE_MINUS_SRC_ALPHA,
    209: i.ONE_MINUS_DST_COLOR,
    207: i.ONE_MINUS_DST_ALPHA,
    211: i.CONSTANT_COLOR,
    212: i.ONE_MINUS_CONSTANT_COLOR,
    213: i.CONSTANT_ALPHA,
    214: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function Xe(P, oe, $, le, he, te, Ae, Me, nt, Ke) {
    if (P === 0) {
      g === !0 && (_e(i.BLEND), g = !1);
      return;
    }
    if (g === !1 && (j(i.BLEND), g = !0), P !== 5) {
      if (P !== p || Ke !== L) {
        if ((A !== 100 || y !== 100) && (i.blendEquation(i.FUNC_ADD), A = 100, y = 100), Ke)
          switch (P) {
            case 1:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case 3:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case 4:
              i.blendFuncSeparate(i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ZERO, i.ONE);
              break;
            default:
              qe("WebGLState: Invalid blending: ", P);
              break;
          }
        else
          switch (P) {
            case 1:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case 3:
              qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case 4:
              qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              qe("WebGLState: Invalid blending: ", P);
              break;
          }
        R = null, S = null, T = null, w = null, v.set(0, 0, 0), b = 0, p = P, L = Ke;
      }
      return;
    }
    he = he || oe, te = te || $, Ae = Ae || le, (oe !== A || he !== y) && (i.blendEquationSeparate(ht[oe], ht[he]), A = oe, y = he), ($ !== R || le !== S || te !== T || Ae !== w) && (i.blendFuncSeparate(Ne[$], Ne[le], Ne[te], Ne[Ae]), R = $, S = le, T = te, w = Ae), (Me.equals(v) === !1 || nt !== b) && (i.blendColor(Me.r, Me.g, Me.b, nt), v.copy(Me), b = nt), p = P, L = !1;
  }
  function tt(P, oe) {
    P.side === 2 ? _e(i.CULL_FACE) : j(i.CULL_FACE);
    let $ = P.side === 1;
    oe && ($ = !$), Be($), P.blending === 1 && P.transparent === !1 ? Xe(0) : Xe(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.blendColor, P.blendAlpha, P.premultipliedAlpha), s.setFunc(P.depthFunc), s.setTest(P.depthTest), s.setMask(P.depthWrite), a.setMask(P.colorWrite);
    const le = P.stencilWrite;
    o.setTest(le), le && (o.setMask(P.stencilWriteMask), o.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), o.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), At(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits), P.alphaToCoverage === !0 ? j(i.SAMPLE_ALPHA_TO_COVERAGE) : _e(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Be(P) {
    F !== P && (P ? i.frontFace(i.CW) : i.frontFace(i.CCW), F = P);
  }
  function at(P) {
    P !== 0 ? (j(i.CULL_FACE), P !== B && (P === 1 ? i.cullFace(i.BACK) : P === 2 ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : _e(i.CULL_FACE), B = P;
  }
  function gt(P) {
    P !== V && (W && i.lineWidth(P), V = P);
  }
  function At(P, oe, $) {
    P ? (j(i.POLYGON_OFFSET_FILL), (I !== oe || G !== $) && (I = oe, G = $, s.getReversed() && (oe = -oe), i.polygonOffset(oe, $))) : _e(i.POLYGON_OFFSET_FILL);
  }
  function ot(P) {
    P ? j(i.SCISSOR_TEST) : _e(i.SCISSOR_TEST);
  }
  function ut(P) {
    P === void 0 && (P = i.TEXTURE0 + J - 1), Z !== P && (i.activeTexture(P), Z = P);
  }
  function D(P, oe, $) {
    $ === void 0 && (Z === null ? $ = i.TEXTURE0 + J - 1 : $ = Z);
    let le = ee[$];
    le === void 0 && (le = { type: void 0, texture: void 0 }, ee[$] = le), (le.type !== P || le.texture !== oe) && (Z !== $ && (i.activeTexture($), Z = $), i.bindTexture(P, oe || Y[P]), le.type = P, le.texture = oe);
  }
  function vt() {
    const P = ee[Z];
    P !== void 0 && P.type !== void 0 && (i.bindTexture(P.type, null), P.type = void 0, P.texture = void 0);
  }
  function $e() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (P) {
      qe("WebGLState:", P);
    }
  }
  function E() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (P) {
      qe("WebGLState:", P);
    }
  }
  function m() {
    try {
      i.texSubImage2D(...arguments);
    } catch (P) {
      qe("WebGLState:", P);
    }
  }
  function U() {
    try {
      i.texSubImage3D(...arguments);
    } catch (P) {
      qe("WebGLState:", P);
    }
  }
  function z() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (P) {
      qe("WebGLState:", P);
    }
  }
  function q() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (P) {
      qe("WebGLState:", P);
    }
  }
  function ie() {
    try {
      i.texStorage2D(...arguments);
    } catch (P) {
      qe("WebGLState:", P);
    }
  }
  function re() {
    try {
      i.texStorage3D(...arguments);
    } catch (P) {
      qe("WebGLState:", P);
    }
  }
  function K() {
    try {
      i.texImage2D(...arguments);
    } catch (P) {
      qe("WebGLState:", P);
    }
  }
  function Q() {
    try {
      i.texImage3D(...arguments);
    } catch (P) {
      qe("WebGLState:", P);
    }
  }
  function ae(P) {
    return d[P] !== void 0 ? d[P] : i.getParameter(P);
  }
  function ye(P, oe) {
    d[P] !== oe && (i.pixelStorei(P, oe), d[P] = oe);
  }
  function ce(P) {
    et.equals(P) === !1 && (i.scissor(P.x, P.y, P.z, P.w), et.copy(P));
  }
  function se(P) {
    Ve.equals(P) === !1 && (i.viewport(P.x, P.y, P.z, P.w), Ve.copy(P));
  }
  function Te(P, oe) {
    let $ = l.get(oe);
    $ === void 0 && ($ = /* @__PURE__ */ new WeakMap(), l.set(oe, $));
    let le = $.get(P);
    le === void 0 && (le = i.getUniformBlockIndex(oe, P.name), $.set(P, le));
  }
  function we(P, oe) {
    const le = l.get(oe).get(P);
    c.get(oe) !== le && (i.uniformBlockBinding(oe, le, P.__bindingPointIndex), c.set(oe, le));
  }
  function Le() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), s.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), i.pixelStorei(i.PACK_ALIGNMENT, 4), i.pixelStorei(i.UNPACK_ALIGNMENT, 4), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !1), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.BROWSER_DEFAULT_WEBGL), i.pixelStorei(i.PACK_ROW_LENGTH, 0), i.pixelStorei(i.PACK_SKIP_PIXELS, 0), i.pixelStorei(i.PACK_SKIP_ROWS, 0), i.pixelStorei(i.UNPACK_ROW_LENGTH, 0), i.pixelStorei(i.UNPACK_IMAGE_HEIGHT, 0), i.pixelStorei(i.UNPACK_SKIP_PIXELS, 0), i.pixelStorei(i.UNPACK_SKIP_ROWS, 0), i.pixelStorei(i.UNPACK_SKIP_IMAGES, 0), f = {}, d = {}, Z = null, ee = {}, u = {}, h = /* @__PURE__ */ new WeakMap(), _ = [], M = null, g = !1, p = null, A = null, R = null, S = null, y = null, T = null, w = null, v = new We(0, 0, 0), b = 0, L = !1, F = null, B = null, V = null, I = null, G = null, et.set(0, 0, i.canvas.width, i.canvas.height), Ve.set(0, 0, i.canvas.width, i.canvas.height), a.reset(), s.reset(), o.reset();
  }
  return {
    buffers: {
      color: a,
      depth: s,
      stencil: o
    },
    enable: j,
    disable: _e,
    bindFramebuffer: Ce,
    drawBuffers: me,
    useProgram: Ue,
    setBlending: Xe,
    setMaterial: tt,
    setFlipSided: Be,
    setCullFace: at,
    setLineWidth: gt,
    setPolygonOffset: At,
    setScissorTest: ot,
    activeTexture: ut,
    bindTexture: D,
    unbindTexture: vt,
    compressedTexImage2D: $e,
    compressedTexImage3D: E,
    texImage2D: K,
    texImage3D: Q,
    pixelStorei: ye,
    getParameter: ae,
    updateUBOMapping: Te,
    uniformBlockBinding: we,
    texStorage2D: ie,
    texStorage3D: re,
    texSubImage2D: m,
    texSubImage3D: U,
    compressedTexSubImage2D: z,
    compressedTexSubImage3D: q,
    scissor: ce,
    viewport: se,
    reset: Le
  };
}
function Fd(i, e, t, n, r, a, s) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new De(), f = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new Set();
  let u;
  const h = /* @__PURE__ */ new WeakMap();
  let _ = !1;
  try {
    _ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function M(E, m) {
    return _ ? new OffscreenCanvas(E, m) : Ki("canvas");
  }
  function g(E, m, U) {
    let z = 1;
    const q = $e(E);
    if ((q.width > U || q.height > U) && (z = U / Math.max(q.width, q.height)), z < 1)
      if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
        const ie = Math.floor(z * q.width), re = Math.floor(z * q.height);
        u === void 0 && (u = M(ie, re));
        const K = m ? M(ie, re) : u;
        return K.width = ie, K.height = re, K.getContext("2d").drawImage(E, 0, 0, ie, re), Re("WebGLRenderer: Texture has been resized from (" + q.width + "x" + q.height + ") to (" + ie + "x" + re + ")."), K;
      } else
        return "data" in E && Re("WebGLRenderer: Image in DataTexture is too big (" + q.width + "x" + q.height + ")."), E;
    return E;
  }
  function p(E) {
    return E.generateMipmaps;
  }
  function A(E) {
    i.generateMipmap(E);
  }
  function R(E) {
    return E.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : E.isWebGL3DRenderTarget ? i.TEXTURE_3D : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function S(E, m, U, z, q, ie = !1) {
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let re;
    z && (re = e.get("EXT_texture_norm16"), re || Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
    let K = m;
    if (m === i.RED && (U === i.FLOAT && (K = i.R32F), U === i.HALF_FLOAT && (K = i.R16F), U === i.UNSIGNED_BYTE && (K = i.R8), U === i.UNSIGNED_SHORT && re && (K = re.R16_EXT), U === i.SHORT && re && (K = re.R16_SNORM_EXT)), m === i.RED_INTEGER && (U === i.UNSIGNED_BYTE && (K = i.R8UI), U === i.UNSIGNED_SHORT && (K = i.R16UI), U === i.UNSIGNED_INT && (K = i.R32UI), U === i.BYTE && (K = i.R8I), U === i.SHORT && (K = i.R16I), U === i.INT && (K = i.R32I)), m === i.RG && (U === i.FLOAT && (K = i.RG32F), U === i.HALF_FLOAT && (K = i.RG16F), U === i.UNSIGNED_BYTE && (K = i.RG8), U === i.UNSIGNED_SHORT && re && (K = re.RG16_EXT), U === i.SHORT && re && (K = re.RG16_SNORM_EXT)), m === i.RG_INTEGER && (U === i.UNSIGNED_BYTE && (K = i.RG8UI), U === i.UNSIGNED_SHORT && (K = i.RG16UI), U === i.UNSIGNED_INT && (K = i.RG32UI), U === i.BYTE && (K = i.RG8I), U === i.SHORT && (K = i.RG16I), U === i.INT && (K = i.RG32I)), m === i.RGB_INTEGER && (U === i.UNSIGNED_BYTE && (K = i.RGB8UI), U === i.UNSIGNED_SHORT && (K = i.RGB16UI), U === i.UNSIGNED_INT && (K = i.RGB32UI), U === i.BYTE && (K = i.RGB8I), U === i.SHORT && (K = i.RGB16I), U === i.INT && (K = i.RGB32I)), m === i.RGBA_INTEGER && (U === i.UNSIGNED_BYTE && (K = i.RGBA8UI), U === i.UNSIGNED_SHORT && (K = i.RGBA16UI), U === i.UNSIGNED_INT && (K = i.RGBA32UI), U === i.BYTE && (K = i.RGBA8I), U === i.SHORT && (K = i.RGBA16I), U === i.INT && (K = i.RGBA32I)), m === i.RGB && (U === i.UNSIGNED_SHORT && re && (K = re.RGB16_EXT), U === i.SHORT && re && (K = re.RGB16_SNORM_EXT), U === i.UNSIGNED_INT_5_9_9_9_REV && (K = i.RGB9_E5), U === i.UNSIGNED_INT_10F_11F_11F_REV && (K = i.R11F_G11F_B10F)), m === i.RGBA) {
      const Q = ie ? Yi : ke.getTransfer(q);
      U === i.FLOAT && (K = i.RGBA32F), U === i.HALF_FLOAT && (K = i.RGBA16F), U === i.UNSIGNED_BYTE && (K = Q === Je ? i.SRGB8_ALPHA8 : i.RGBA8), U === i.UNSIGNED_SHORT && re && (K = re.RGBA16_EXT), U === i.SHORT && re && (K = re.RGBA16_SNORM_EXT), U === i.UNSIGNED_SHORT_4_4_4_4 && (K = i.RGBA4), U === i.UNSIGNED_SHORT_5_5_5_1 && (K = i.RGB5_A1);
    }
    return (K === i.R16F || K === i.R32F || K === i.RG16F || K === i.RG32F || K === i.RGBA16F || K === i.RGBA32F) && e.get("EXT_color_buffer_float"), K;
  }
  function y(E, m) {
    let U;
    return E ? m === null || m === 1014 || m === 1020 ? U = i.DEPTH24_STENCIL8 : m === 1015 ? U = i.DEPTH32F_STENCIL8 : m === 1012 && (U = i.DEPTH24_STENCIL8, Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : m === null || m === 1014 || m === 1020 ? U = i.DEPTH_COMPONENT24 : m === 1015 ? U = i.DEPTH_COMPONENT32F : m === 1012 && (U = i.DEPTH_COMPONENT16), U;
  }
  function T(E, m) {
    return p(E) === !0 || E.isFramebufferTexture && E.minFilter !== 1003 && E.minFilter !== 1006 ? Math.log2(Math.max(m.width, m.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? m.mipmaps.length : 1;
  }
  function w(E) {
    const m = E.target;
    m.removeEventListener("dispose", w), b(m), m.isVideoTexture && f.delete(m), m.isHTMLTexture && d.delete(m);
  }
  function v(E) {
    const m = E.target;
    m.removeEventListener("dispose", v), F(m);
  }
  function b(E) {
    const m = n.get(E);
    if (m.__webglInit === void 0) return;
    const U = E.source, z = h.get(U);
    if (z) {
      const q = z[m.__cacheKey];
      q.usedTimes--, q.usedTimes === 0 && L(E), Object.keys(z).length === 0 && h.delete(U);
    }
    n.remove(E);
  }
  function L(E) {
    const m = n.get(E);
    i.deleteTexture(m.__webglTexture);
    const U = E.source, z = h.get(U);
    delete z[m.__cacheKey], s.memory.textures--;
  }
  function F(E) {
    const m = n.get(E);
    if (E.depthTexture && (E.depthTexture.dispose(), n.remove(E.depthTexture)), E.isWebGLCubeRenderTarget)
      for (let z = 0; z < 6; z++) {
        if (Array.isArray(m.__webglFramebuffer[z]))
          for (let q = 0; q < m.__webglFramebuffer[z].length; q++) i.deleteFramebuffer(m.__webglFramebuffer[z][q]);
        else
          i.deleteFramebuffer(m.__webglFramebuffer[z]);
        m.__webglDepthbuffer && i.deleteRenderbuffer(m.__webglDepthbuffer[z]);
      }
    else {
      if (Array.isArray(m.__webglFramebuffer))
        for (let z = 0; z < m.__webglFramebuffer.length; z++) i.deleteFramebuffer(m.__webglFramebuffer[z]);
      else
        i.deleteFramebuffer(m.__webglFramebuffer);
      if (m.__webglDepthbuffer && i.deleteRenderbuffer(m.__webglDepthbuffer), m.__webglMultisampledFramebuffer && i.deleteFramebuffer(m.__webglMultisampledFramebuffer), m.__webglColorRenderbuffer)
        for (let z = 0; z < m.__webglColorRenderbuffer.length; z++)
          m.__webglColorRenderbuffer[z] && i.deleteRenderbuffer(m.__webglColorRenderbuffer[z]);
      m.__webglDepthRenderbuffer && i.deleteRenderbuffer(m.__webglDepthRenderbuffer);
    }
    const U = E.textures;
    for (let z = 0, q = U.length; z < q; z++) {
      const ie = n.get(U[z]);
      ie.__webglTexture && (i.deleteTexture(ie.__webglTexture), s.memory.textures--), n.remove(U[z]);
    }
    n.remove(E);
  }
  let B = 0;
  function V() {
    B = 0;
  }
  function I() {
    return B;
  }
  function G(E) {
    B = E;
  }
  function J() {
    const E = B;
    return E >= r.maxTextures && Re("WebGLTextures: Trying to use " + (E + 1) + " texture units while this GPU supports only " + r.maxTextures), B += 1, E;
  }
  function W(E) {
    const m = [];
    return m.push(E.wrapS), m.push(E.wrapT), m.push(E.wrapR || 0), m.push(E.magFilter), m.push(E.minFilter), m.push(E.anisotropy), m.push(E.internalFormat), m.push(E.format), m.push(E.type), m.push(E.generateMipmaps), m.push(E.premultiplyAlpha), m.push(E.flipY), m.push(E.unpackAlignment), m.push(E.colorSpace), m.join();
  }
  function ne(E, m) {
    const U = n.get(E);
    if (E.isVideoTexture && D(E), E.isRenderTargetTexture === !1 && E.isExternalTexture !== !0 && E.version > 0 && U.__version !== E.version) {
      const z = E.image;
      if (z === null)
        Re("WebGLRenderer: Texture marked for update but no image data found.");
      else if (z.complete === !1)
        Re("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        _e(U, E, m);
        return;
      }
    } else E.isExternalTexture && (U.__webglTexture = E.sourceTexture ? E.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D, U.__webglTexture, i.TEXTURE0 + m);
  }
  function X(E, m) {
    const U = n.get(E);
    if (E.isRenderTargetTexture === !1 && E.version > 0 && U.__version !== E.version) {
      _e(U, E, m);
      return;
    } else E.isExternalTexture && (U.__webglTexture = E.sourceTexture ? E.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D_ARRAY, U.__webglTexture, i.TEXTURE0 + m);
  }
  function Z(E, m) {
    const U = n.get(E);
    if (E.isRenderTargetTexture === !1 && E.version > 0 && U.__version !== E.version) {
      _e(U, E, m);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, U.__webglTexture, i.TEXTURE0 + m);
  }
  function ee(E, m) {
    const U = n.get(E);
    if (E.isCubeDepthTexture !== !0 && E.version > 0 && U.__version !== E.version) {
      Ce(U, E, m);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, U.__webglTexture, i.TEXTURE0 + m);
  }
  const ve = {
    1e3: i.REPEAT,
    1001: i.CLAMP_TO_EDGE,
    1002: i.MIRRORED_REPEAT
  }, be = {
    1003: i.NEAREST,
    1004: i.NEAREST_MIPMAP_NEAREST,
    1005: i.NEAREST_MIPMAP_LINEAR,
    1006: i.LINEAR,
    1007: i.LINEAR_MIPMAP_NEAREST,
    1008: i.LINEAR_MIPMAP_LINEAR
  }, et = {
    512: i.NEVER,
    519: i.ALWAYS,
    513: i.LESS,
    515: i.LEQUAL,
    514: i.EQUAL,
    518: i.GEQUAL,
    516: i.GREATER,
    517: i.NOTEQUAL
  };
  function Ve(E, m) {
    if (m.type === 1015 && e.has("OES_texture_float_linear") === !1 && (m.magFilter === 1006 || m.magFilter === 1007 || m.magFilter === 1005 || m.magFilter === 1008 || m.minFilter === 1006 || m.minFilter === 1007 || m.minFilter === 1005 || m.minFilter === 1008) && Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(E, i.TEXTURE_WRAP_S, ve[m.wrapS]), i.texParameteri(E, i.TEXTURE_WRAP_T, ve[m.wrapT]), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, ve[m.wrapR]), i.texParameteri(E, i.TEXTURE_MAG_FILTER, be[m.magFilter]), i.texParameteri(E, i.TEXTURE_MIN_FILTER, be[m.minFilter]), m.compareFunction && (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, et[m.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (m.magFilter === 1003 || m.minFilter !== 1005 && m.minFilter !== 1008 || m.type === 1015 && e.has("OES_texture_float_linear") === !1) return;
      if (m.anisotropy > 1 || n.get(m).__currentAnisotropy) {
        const U = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(E, U.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(m.anisotropy, r.getMaxAnisotropy())), n.get(m).__currentAnisotropy = m.anisotropy;
      }
    }
  }
  function Ye(E, m) {
    let U = !1;
    E.__webglInit === void 0 && (E.__webglInit = !0, m.addEventListener("dispose", w));
    const z = m.source;
    let q = h.get(z);
    q === void 0 && (q = {}, h.set(z, q));
    const ie = W(m);
    if (ie !== E.__cacheKey) {
      q[ie] === void 0 && (q[ie] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, s.memory.textures++, U = !0), q[ie].usedTimes++;
      const re = q[E.__cacheKey];
      re !== void 0 && (q[E.__cacheKey].usedTimes--, re.usedTimes === 0 && L(m)), E.__cacheKey = ie, E.__webglTexture = q[ie].texture;
    }
    return U;
  }
  function Y(E, m, U) {
    return Math.floor(Math.floor(E / U) / m);
  }
  function j(E, m, U, z) {
    const ie = E.updateRanges;
    if (ie.length === 0)
      t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, m.width, m.height, U, z, m.data);
    else {
      ie.sort((ye, ce) => ye.start - ce.start);
      let re = 0;
      for (let ye = 1; ye < ie.length; ye++) {
        const ce = ie[re], se = ie[ye], Te = ce.start + ce.count, we = Y(se.start, m.width, 4), Le = Y(ce.start, m.width, 4);
        se.start <= Te + 1 && we === Le && Y(se.start + se.count - 1, m.width, 4) === we ? ce.count = Math.max(
          ce.count,
          se.start + se.count - ce.start
        ) : (++re, ie[re] = se);
      }
      ie.length = re + 1;
      const K = t.getParameter(i.UNPACK_ROW_LENGTH), Q = t.getParameter(i.UNPACK_SKIP_PIXELS), ae = t.getParameter(i.UNPACK_SKIP_ROWS);
      t.pixelStorei(i.UNPACK_ROW_LENGTH, m.width);
      for (let ye = 0, ce = ie.length; ye < ce; ye++) {
        const se = ie[ye], Te = Math.floor(se.start / 4), we = Math.ceil(se.count / 4), Le = Te % m.width, P = Math.floor(Te / m.width), oe = we, $ = 1;
        t.pixelStorei(i.UNPACK_SKIP_PIXELS, Le), t.pixelStorei(i.UNPACK_SKIP_ROWS, P), t.texSubImage2D(i.TEXTURE_2D, 0, Le, P, oe, $, U, z, m.data);
      }
      E.clearUpdateRanges(), t.pixelStorei(i.UNPACK_ROW_LENGTH, K), t.pixelStorei(i.UNPACK_SKIP_PIXELS, Q), t.pixelStorei(i.UNPACK_SKIP_ROWS, ae);
    }
  }
  function _e(E, m, U) {
    let z = i.TEXTURE_2D;
    (m.isDataArrayTexture || m.isCompressedArrayTexture) && (z = i.TEXTURE_2D_ARRAY), m.isData3DTexture && (z = i.TEXTURE_3D);
    const q = Ye(E, m), ie = m.source;
    t.bindTexture(z, E.__webglTexture, i.TEXTURE0 + U);
    const re = n.get(ie);
    if (ie.version !== re.__version || q === !0) {
      if (t.activeTexture(i.TEXTURE0 + U), (typeof ImageBitmap < "u" && m.image instanceof ImageBitmap) === !1) {
        const $ = ke.getPrimaries(ke.workingColorSpace), le = m.colorSpace === "" ? null : ke.getPrimaries(m.colorSpace), he = m.colorSpace === "" || $ === le ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
        t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, m.flipY), t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, m.premultiplyAlpha), t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, he);
      }
      t.pixelStorei(i.UNPACK_ALIGNMENT, m.unpackAlignment);
      let Q = g(m.image, !1, r.maxTextureSize);
      Q = vt(m, Q);
      const ae = a.convert(m.format, m.colorSpace), ye = a.convert(m.type);
      let ce = S(m.internalFormat, ae, ye, m.normalized, m.colorSpace, m.isVideoTexture);
      Ve(z, m);
      let se;
      const Te = m.mipmaps, we = m.isVideoTexture !== !0, Le = re.__version === void 0 || q === !0, P = ie.dataReady, oe = T(m, Q);
      if (m.isDepthTexture)
        ce = y(m.format === 1027, m.type), Le && (we ? t.texStorage2D(i.TEXTURE_2D, 1, ce, Q.width, Q.height) : t.texImage2D(i.TEXTURE_2D, 0, ce, Q.width, Q.height, 0, ae, ye, null));
      else if (m.isDataTexture)
        if (Te.length > 0) {
          we && Le && t.texStorage2D(i.TEXTURE_2D, oe, ce, Te[0].width, Te[0].height);
          for (let $ = 0, le = Te.length; $ < le; $++)
            se = Te[$], we ? P && t.texSubImage2D(i.TEXTURE_2D, $, 0, 0, se.width, se.height, ae, ye, se.data) : t.texImage2D(i.TEXTURE_2D, $, ce, se.width, se.height, 0, ae, ye, se.data);
          m.generateMipmaps = !1;
        } else
          we ? (Le && t.texStorage2D(i.TEXTURE_2D, oe, ce, Q.width, Q.height), P && j(m, Q, ae, ye)) : t.texImage2D(i.TEXTURE_2D, 0, ce, Q.width, Q.height, 0, ae, ye, Q.data);
      else if (m.isCompressedTexture)
        if (m.isCompressedArrayTexture) {
          we && Le && t.texStorage3D(i.TEXTURE_2D_ARRAY, oe, ce, Te[0].width, Te[0].height, Q.depth);
          for (let $ = 0, le = Te.length; $ < le; $++)
            if (se = Te[$], m.format !== 1023)
              if (ae !== null)
                if (we) {
                  if (P)
                    if (m.layerUpdates.size > 0) {
                      const he = Fa(se.width, se.height, m.format, m.type);
                      for (const te of m.layerUpdates) {
                        const Ae = se.data.subarray(
                          te * he / se.data.BYTES_PER_ELEMENT,
                          (te + 1) * he / se.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, $, 0, 0, te, se.width, se.height, 1, ae, Ae);
                      }
                    } else
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, $, 0, 0, 0, se.width, se.height, Q.depth, ae, se.data);
                } else
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, $, ce, se.width, se.height, Q.depth, 0, se.data, 0, 0);
              else
                Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              we ? P && t.texSubImage3D(i.TEXTURE_2D_ARRAY, $, 0, 0, 0, se.width, se.height, Q.depth, ae, ye, se.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, $, ce, se.width, se.height, Q.depth, 0, ae, ye, se.data);
          m.layerUpdates.size > 0 && m.clearLayerUpdates();
        } else {
          we && Le && t.texStorage2D(i.TEXTURE_2D, oe, ce, Te[0].width, Te[0].height);
          for (let $ = 0, le = Te.length; $ < le; $++)
            se = Te[$], m.format !== 1023 ? ae !== null ? we ? P && t.compressedTexSubImage2D(i.TEXTURE_2D, $, 0, 0, se.width, se.height, ae, se.data) : t.compressedTexImage2D(i.TEXTURE_2D, $, ce, se.width, se.height, 0, se.data) : Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : we ? P && t.texSubImage2D(i.TEXTURE_2D, $, 0, 0, se.width, se.height, ae, ye, se.data) : t.texImage2D(i.TEXTURE_2D, $, ce, se.width, se.height, 0, ae, ye, se.data);
        }
      else if (m.isDataArrayTexture)
        if (we) {
          if (Le && t.texStorage3D(i.TEXTURE_2D_ARRAY, oe, ce, Q.width, Q.height, Q.depth), P)
            if (m.layerUpdates.size > 0) {
              const $ = Fa(Q.width, Q.height, m.format, m.type);
              for (const le of m.layerUpdates) {
                const he = Q.data.subarray(
                  le * $ / Q.data.BYTES_PER_ELEMENT,
                  (le + 1) * $ / Q.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, le, Q.width, Q.height, 1, ae, ye, he);
              }
              m.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Q.width, Q.height, Q.depth, ae, ye, Q.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, ce, Q.width, Q.height, Q.depth, 0, ae, ye, Q.data);
      else if (m.isData3DTexture)
        we ? (Le && t.texStorage3D(i.TEXTURE_3D, oe, ce, Q.width, Q.height, Q.depth), P && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Q.width, Q.height, Q.depth, ae, ye, Q.data)) : t.texImage3D(i.TEXTURE_3D, 0, ce, Q.width, Q.height, Q.depth, 0, ae, ye, Q.data);
      else if (m.isFramebufferTexture) {
        if (Le)
          if (we)
            t.texStorage2D(i.TEXTURE_2D, oe, ce, Q.width, Q.height);
          else {
            let $ = Q.width, le = Q.height;
            for (let he = 0; he < oe; he++)
              t.texImage2D(i.TEXTURE_2D, he, ce, $, le, 0, ae, ye, null), $ >>= 1, le >>= 1;
          }
      } else if (m.isHTMLTexture) {
        if ("texElementImage2D" in i) {
          const $ = i.canvas;
          if ($.hasAttribute("layoutsubtree") || $.setAttribute("layoutsubtree", "true"), Q.parentNode !== $) {
            $.appendChild(Q), d.add(m), $.onpaint = (le) => {
              const he = le.changedElements;
              for (const te of d)
                he.includes(te.image) && (te.needsUpdate = !0);
            }, $.requestPaint();
            return;
          }
          if (i.texElementImage2D.length === 3)
            i.texElementImage2D(i.TEXTURE_2D, i.RGBA8, Q);
          else {
            const he = i.RGBA, te = i.RGBA, Ae = i.UNSIGNED_BYTE;
            i.texElementImage2D(i.TEXTURE_2D, 0, he, te, Ae, Q);
          }
          i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE);
        }
      } else if (Te.length > 0) {
        if (we && Le) {
          const $ = $e(Te[0]);
          t.texStorage2D(i.TEXTURE_2D, oe, ce, $.width, $.height);
        }
        for (let $ = 0, le = Te.length; $ < le; $++)
          se = Te[$], we ? P && t.texSubImage2D(i.TEXTURE_2D, $, 0, 0, ae, ye, se) : t.texImage2D(i.TEXTURE_2D, $, ce, ae, ye, se);
        m.generateMipmaps = !1;
      } else if (we) {
        if (Le) {
          const $ = $e(Q);
          t.texStorage2D(i.TEXTURE_2D, oe, ce, $.width, $.height);
        }
        P && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ae, ye, Q);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, ce, ae, ye, Q);
      p(m) && A(z), re.__version = ie.version, m.onUpdate && m.onUpdate(m);
    }
    E.__version = m.version;
  }
  function Ce(E, m, U) {
    if (m.image.length !== 6) return;
    const z = Ye(E, m), q = m.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + U);
    const ie = n.get(q);
    if (q.version !== ie.__version || z === !0) {
      t.activeTexture(i.TEXTURE0 + U);
      const re = ke.getPrimaries(ke.workingColorSpace), K = m.colorSpace === "" ? null : ke.getPrimaries(m.colorSpace), Q = m.colorSpace === "" || re === K ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, m.flipY), t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, m.premultiplyAlpha), t.pixelStorei(i.UNPACK_ALIGNMENT, m.unpackAlignment), t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Q);
      const ae = m.isCompressedTexture || m.image[0].isCompressedTexture, ye = m.image[0] && m.image[0].isDataTexture, ce = [];
      for (let te = 0; te < 6; te++)
        !ae && !ye ? ce[te] = g(m.image[te], !0, r.maxCubemapSize) : ce[te] = ye ? m.image[te].image : m.image[te], ce[te] = vt(m, ce[te]);
      const se = ce[0], Te = a.convert(m.format, m.colorSpace), we = a.convert(m.type), Le = S(m.internalFormat, Te, we, m.normalized, m.colorSpace), P = m.isVideoTexture !== !0, oe = ie.__version === void 0 || z === !0, $ = q.dataReady;
      let le = T(m, se);
      Ve(i.TEXTURE_CUBE_MAP, m);
      let he;
      if (ae) {
        P && oe && t.texStorage2D(i.TEXTURE_CUBE_MAP, le, Le, se.width, se.height);
        for (let te = 0; te < 6; te++) {
          he = ce[te].mipmaps;
          for (let Ae = 0; Ae < he.length; Ae++) {
            const Me = he[Ae];
            m.format !== 1023 ? Te !== null ? P ? $ && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, Ae, 0, 0, Me.width, Me.height, Te, Me.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, Ae, Le, Me.width, Me.height, 0, Me.data) : Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : P ? $ && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, Ae, 0, 0, Me.width, Me.height, Te, we, Me.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, Ae, Le, Me.width, Me.height, 0, Te, we, Me.data);
          }
        }
      } else {
        if (he = m.mipmaps, P && oe) {
          he.length > 0 && le++;
          const te = $e(ce[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, le, Le, te.width, te.height);
        }
        for (let te = 0; te < 6; te++)
          if (ye) {
            P ? $ && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, 0, 0, 0, ce[te].width, ce[te].height, Te, we, ce[te].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, 0, Le, ce[te].width, ce[te].height, 0, Te, we, ce[te].data);
            for (let Ae = 0; Ae < he.length; Ae++) {
              const nt = he[Ae].image[te].image;
              P ? $ && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, Ae + 1, 0, 0, nt.width, nt.height, Te, we, nt.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, Ae + 1, Le, nt.width, nt.height, 0, Te, we, nt.data);
            }
          } else {
            P ? $ && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, 0, 0, 0, Te, we, ce[te]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, 0, Le, Te, we, ce[te]);
            for (let Ae = 0; Ae < he.length; Ae++) {
              const Me = he[Ae];
              P ? $ && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, Ae + 1, 0, 0, Te, we, Me.image[te]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, Ae + 1, Le, Te, we, Me.image[te]);
            }
          }
      }
      p(m) && A(i.TEXTURE_CUBE_MAP), ie.__version = q.version, m.onUpdate && m.onUpdate(m);
    }
    E.__version = m.version;
  }
  function me(E, m, U, z, q, ie) {
    const re = a.convert(U.format, U.colorSpace), K = a.convert(U.type), Q = S(U.internalFormat, re, K, U.normalized, U.colorSpace), ae = n.get(m), ye = n.get(U);
    if (ye.__renderTarget = m, !ae.__hasExternalTextures) {
      const ce = Math.max(1, m.width >> ie), se = Math.max(1, m.height >> ie);
      q === i.TEXTURE_3D || q === i.TEXTURE_2D_ARRAY ? t.texImage3D(q, ie, Q, ce, se, m.depth, 0, re, K, null) : t.texImage2D(q, ie, Q, ce, se, 0, re, K, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, E), ut(m) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, z, q, ye.__webglTexture, 0, ot(m)) : (q === i.TEXTURE_2D || q >= i.TEXTURE_CUBE_MAP_POSITIVE_X && q <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, z, q, ye.__webglTexture, ie), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Ue(E, m, U) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, E), m.depthBuffer) {
      const z = m.depthTexture, q = z && z.isDepthTexture ? z.type : null, ie = y(m.stencilBuffer, q), re = m.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
      ut(m) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ot(m), ie, m.width, m.height) : U ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ot(m), ie, m.width, m.height) : i.renderbufferStorage(i.RENDERBUFFER, ie, m.width, m.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, re, i.RENDERBUFFER, E);
    } else {
      const z = m.textures;
      for (let q = 0; q < z.length; q++) {
        const ie = z[q], re = a.convert(ie.format, ie.colorSpace), K = a.convert(ie.type), Q = S(ie.internalFormat, re, K, ie.normalized, ie.colorSpace);
        ut(m) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ot(m), Q, m.width, m.height) : U ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ot(m), Q, m.width, m.height) : i.renderbufferStorage(i.RENDERBUFFER, Q, m.width, m.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function ht(E, m, U) {
    const z = m.isWebGLCubeRenderTarget === !0;
    if (t.bindFramebuffer(i.FRAMEBUFFER, E), !(m.depthTexture && m.depthTexture.isDepthTexture))
      throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
    const q = n.get(m.depthTexture);
    if (q.__renderTarget = m, (!q.__webglTexture || m.depthTexture.image.width !== m.width || m.depthTexture.image.height !== m.height) && (m.depthTexture.image.width = m.width, m.depthTexture.image.height = m.height, m.depthTexture.needsUpdate = !0), z) {
      if (q.__webglInit === void 0 && (q.__webglInit = !0, m.depthTexture.addEventListener("dispose", w)), q.__webglTexture === void 0) {
        q.__webglTexture = i.createTexture(), t.bindTexture(i.TEXTURE_CUBE_MAP, q.__webglTexture), Ve(i.TEXTURE_CUBE_MAP, m.depthTexture);
        const ae = a.convert(m.depthTexture.format), ye = a.convert(m.depthTexture.type);
        let ce;
        m.depthTexture.format === 1026 ? ce = i.DEPTH_COMPONENT24 : m.depthTexture.format === 1027 && (ce = i.DEPTH24_STENCIL8);
        for (let se = 0; se < 6; se++)
          i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + se, 0, ce, m.width, m.height, 0, ae, ye, null);
      }
    } else
      ne(m.depthTexture, 0);
    const ie = q.__webglTexture, re = ot(m), K = z ? i.TEXTURE_CUBE_MAP_POSITIVE_X + U : i.TEXTURE_2D, Q = m.depthTexture.format === 1027 ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
    if (m.depthTexture.format === 1026)
      ut(m) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Q, K, ie, 0, re) : i.framebufferTexture2D(i.FRAMEBUFFER, Q, K, ie, 0);
    else if (m.depthTexture.format === 1027)
      ut(m) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Q, K, ie, 0, re) : i.framebufferTexture2D(i.FRAMEBUFFER, Q, K, ie, 0);
    else
      throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");
  }
  function Ne(E) {
    const m = n.get(E), U = E.isWebGLCubeRenderTarget === !0;
    if (m.__boundDepthTexture !== E.depthTexture) {
      const z = E.depthTexture;
      if (m.__depthDisposeCallback && m.__depthDisposeCallback(), z) {
        const q = () => {
          delete m.__boundDepthTexture, delete m.__depthDisposeCallback, z.removeEventListener("dispose", q);
        };
        z.addEventListener("dispose", q), m.__depthDisposeCallback = q;
      }
      m.__boundDepthTexture = z;
    }
    if (E.depthTexture && !m.__autoAllocateDepthBuffer)
      if (U)
        for (let z = 0; z < 6; z++)
          ht(m.__webglFramebuffer[z], E, z);
      else {
        const z = E.texture.mipmaps;
        z && z.length > 0 ? ht(m.__webglFramebuffer[0], E, 0) : ht(m.__webglFramebuffer, E, 0);
      }
    else if (U) {
      m.__webglDepthbuffer = [];
      for (let z = 0; z < 6; z++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, m.__webglFramebuffer[z]), m.__webglDepthbuffer[z] === void 0)
          m.__webglDepthbuffer[z] = i.createRenderbuffer(), Ue(m.__webglDepthbuffer[z], E, !1);
        else {
          const q = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ie = m.__webglDepthbuffer[z];
          i.bindRenderbuffer(i.RENDERBUFFER, ie), i.framebufferRenderbuffer(i.FRAMEBUFFER, q, i.RENDERBUFFER, ie);
        }
    } else {
      const z = E.texture.mipmaps;
      if (z && z.length > 0 ? t.bindFramebuffer(i.FRAMEBUFFER, m.__webglFramebuffer[0]) : t.bindFramebuffer(i.FRAMEBUFFER, m.__webglFramebuffer), m.__webglDepthbuffer === void 0)
        m.__webglDepthbuffer = i.createRenderbuffer(), Ue(m.__webglDepthbuffer, E, !1);
      else {
        const q = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ie = m.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, ie), i.framebufferRenderbuffer(i.FRAMEBUFFER, q, i.RENDERBUFFER, ie);
      }
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Xe(E, m, U) {
    const z = n.get(E);
    m !== void 0 && me(z.__webglFramebuffer, E, E.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), U !== void 0 && Ne(E);
  }
  function tt(E) {
    const m = E.texture, U = n.get(E), z = n.get(m);
    E.addEventListener("dispose", v);
    const q = E.textures, ie = E.isWebGLCubeRenderTarget === !0, re = q.length > 1;
    if (re || (z.__webglTexture === void 0 && (z.__webglTexture = i.createTexture()), z.__version = m.version, s.memory.textures++), ie) {
      U.__webglFramebuffer = [];
      for (let K = 0; K < 6; K++)
        if (m.mipmaps && m.mipmaps.length > 0) {
          U.__webglFramebuffer[K] = [];
          for (let Q = 0; Q < m.mipmaps.length; Q++)
            U.__webglFramebuffer[K][Q] = i.createFramebuffer();
        } else
          U.__webglFramebuffer[K] = i.createFramebuffer();
    } else {
      if (m.mipmaps && m.mipmaps.length > 0) {
        U.__webglFramebuffer = [];
        for (let K = 0; K < m.mipmaps.length; K++)
          U.__webglFramebuffer[K] = i.createFramebuffer();
      } else
        U.__webglFramebuffer = i.createFramebuffer();
      if (re)
        for (let K = 0, Q = q.length; K < Q; K++) {
          const ae = n.get(q[K]);
          ae.__webglTexture === void 0 && (ae.__webglTexture = i.createTexture(), s.memory.textures++);
        }
      if (E.samples > 0 && ut(E) === !1) {
        U.__webglMultisampledFramebuffer = i.createFramebuffer(), U.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, U.__webglMultisampledFramebuffer);
        for (let K = 0; K < q.length; K++) {
          const Q = q[K];
          U.__webglColorRenderbuffer[K] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, U.__webglColorRenderbuffer[K]);
          const ae = a.convert(Q.format, Q.colorSpace), ye = a.convert(Q.type), ce = S(Q.internalFormat, ae, ye, Q.normalized, Q.colorSpace, E.isXRRenderTarget === !0), se = ot(E);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, se, ce, E.width, E.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + K, i.RENDERBUFFER, U.__webglColorRenderbuffer[K]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), E.depthBuffer && (U.__webglDepthRenderbuffer = i.createRenderbuffer(), Ue(U.__webglDepthRenderbuffer, E, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (ie) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, z.__webglTexture), Ve(i.TEXTURE_CUBE_MAP, m);
      for (let K = 0; K < 6; K++)
        if (m.mipmaps && m.mipmaps.length > 0)
          for (let Q = 0; Q < m.mipmaps.length; Q++)
            me(U.__webglFramebuffer[K][Q], E, m, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + K, Q);
        else
          me(U.__webglFramebuffer[K], E, m, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0);
      p(m) && A(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (re) {
      for (let K = 0, Q = q.length; K < Q; K++) {
        const ae = q[K], ye = n.get(ae);
        let ce = i.TEXTURE_2D;
        (E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (ce = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(ce, ye.__webglTexture), Ve(ce, ae), me(U.__webglFramebuffer, E, ae, i.COLOR_ATTACHMENT0 + K, ce, 0), p(ae) && A(ce);
      }
      t.unbindTexture();
    } else {
      let K = i.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (K = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(K, z.__webglTexture), Ve(K, m), m.mipmaps && m.mipmaps.length > 0)
        for (let Q = 0; Q < m.mipmaps.length; Q++)
          me(U.__webglFramebuffer[Q], E, m, i.COLOR_ATTACHMENT0, K, Q);
      else
        me(U.__webglFramebuffer, E, m, i.COLOR_ATTACHMENT0, K, 0);
      p(m) && A(K), t.unbindTexture();
    }
    E.depthBuffer && Ne(E);
  }
  function Be(E) {
    const m = E.textures;
    for (let U = 0, z = m.length; U < z; U++) {
      const q = m[U];
      if (p(q)) {
        const ie = R(E), re = n.get(q).__webglTexture;
        t.bindTexture(ie, re), A(ie), t.unbindTexture();
      }
    }
  }
  const at = [], gt = [];
  function At(E) {
    if (E.samples > 0) {
      if (ut(E) === !1) {
        const m = E.textures, U = E.width, z = E.height;
        let q = i.COLOR_BUFFER_BIT;
        const ie = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, re = n.get(E), K = m.length > 1;
        if (K)
          for (let ae = 0; ae < m.length; ae++)
            t.bindFramebuffer(i.FRAMEBUFFER, re.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ae, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, re.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ae, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, re.__webglMultisampledFramebuffer);
        const Q = E.texture.mipmaps;
        Q && Q.length > 0 ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, re.__webglFramebuffer[0]) : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, re.__webglFramebuffer);
        for (let ae = 0; ae < m.length; ae++) {
          if (E.resolveDepthBuffer && (E.depthBuffer && (q |= i.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && (q |= i.STENCIL_BUFFER_BIT)), K) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, re.__webglColorRenderbuffer[ae]);
            const ye = n.get(m[ae]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, ye, 0);
          }
          i.blitFramebuffer(0, 0, U, z, 0, 0, U, z, q, i.NEAREST), c === !0 && (at.length = 0, gt.length = 0, at.push(i.COLOR_ATTACHMENT0 + ae), E.depthBuffer && E.storeMultisampledDepthBuffer === !1 && (at.push(ie), gt.push(ie), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, gt)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, at));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), K)
          for (let ae = 0; ae < m.length; ae++) {
            t.bindFramebuffer(i.FRAMEBUFFER, re.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ae, i.RENDERBUFFER, re.__webglColorRenderbuffer[ae]);
            const ye = n.get(m[ae]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, re.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ae, i.TEXTURE_2D, ye, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, re.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.storeMultisampledDepthBuffer === !1 && c) {
        const m = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [m]);
      }
    }
  }
  function ot(E) {
    return Math.min(r.maxSamples, E.samples);
  }
  function ut(E) {
    const m = n.get(E);
    return E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && m.__useRenderToTexture !== !1;
  }
  function D(E) {
    const m = s.render.frame;
    f.get(E) !== m && (f.set(E, m), E.update());
  }
  function vt(E, m) {
    const U = E.colorSpace, z = E.format, q = E.type;
    return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || U !== fi && U !== "" && (ke.getTransfer(U) === Je ? (z !== 1023 || q !== 1009) && Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : qe("WebGLTextures: Unsupported texture color space:", U)), m;
  }
  function $e(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (l.width = E.naturalWidth || E.width, l.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (l.width = E.displayWidth, l.height = E.displayHeight) : (l.width = E.width, l.height = E.height), l;
  }
  this.allocateTextureUnit = J, this.resetTextureUnits = V, this.getTextureUnits = I, this.setTextureUnits = G, this.setTexture2D = ne, this.setTexture2DArray = X, this.setTexture3D = Z, this.setTextureCube = ee, this.rebindTextures = Xe, this.setupRenderTarget = tt, this.updateRenderTargetMipmap = Be, this.updateMultisampleRenderTarget = At, this.setupDepthRenderbuffer = Ne, this.setupFrameBufferTexture = me, this.useMultisampledRTT = ut, this.isReversedDepthBuffer = function() {
    return t.buffers.depth.getReversed();
  };
}
function Id(i, e) {
  function t(n, r = "") {
    let a;
    const s = ke.getTransfer(r);
    if (n === 1009) return i.UNSIGNED_BYTE;
    if (n === 1017) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === 1018) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === 35902) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === 35899) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === 1010) return i.BYTE;
    if (n === 1011) return i.SHORT;
    if (n === 1012) return i.UNSIGNED_SHORT;
    if (n === 1013) return i.INT;
    if (n === 1014) return i.UNSIGNED_INT;
    if (n === 1015) return i.FLOAT;
    if (n === 1016) return i.HALF_FLOAT;
    if (n === 1021) return i.ALPHA;
    if (n === 1022) return i.RGB;
    if (n === 1023) return i.RGBA;
    if (n === 1026) return i.DEPTH_COMPONENT;
    if (n === 1027) return i.DEPTH_STENCIL;
    if (n === 1028) return i.RED;
    if (n === 1029) return i.RED_INTEGER;
    if (n === 1030) return i.RG;
    if (n === 1031) return i.RG_INTEGER;
    if (n === 1033) return i.RGBA_INTEGER;
    if (n === 33776 || n === 33777 || n === 33778 || n === 33779)
      if (s === Je)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (n === 33776) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === 33777) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === 33778) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === 33779) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (n === 33776) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === 33777) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === 33778) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === 33779) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === 35840 || n === 35841 || n === 35842 || n === 35843)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (n === 35840) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === 35841) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === 35842) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === 35843) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === 36196 || n === 37492 || n === 37496 || n === 37488 || n === 37489 || n === 37490 || n === 37491)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (n === 36196 || n === 37492) return s === Je ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (n === 37496) return s === Je ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
        if (n === 37488) return a.COMPRESSED_R11_EAC;
        if (n === 37489) return a.COMPRESSED_SIGNED_R11_EAC;
        if (n === 37490) return a.COMPRESSED_RG11_EAC;
        if (n === 37491) return a.COMPRESSED_SIGNED_RG11_EAC;
      } else
        return null;
    if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (n === 37808) return s === Je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809) return s === Je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810) return s === Je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811) return s === Je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812) return s === Je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813) return s === Je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814) return s === Je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815) return s === Je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816) return s === Je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817) return s === Je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818) return s === Je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819) return s === Je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820) return s === Je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821) return s === Je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === 36492 || n === 36494 || n === 36495)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (n === 36492) return s === Je ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === 36494) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === 36495) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === 36283 || n === 36284 || n === 36285 || n === 36286)
      if (a = e.get("EXT_texture_compression_rgtc"), a !== null) {
        if (n === 36283) return a.COMPRESSED_RED_RGTC1_EXT;
        if (n === 36284) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === 36285) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === 36286) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === 1020 ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const Ud = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Nd = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Od {
  /**
   * Constructs a new depth sensing module.
   */
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  /**
   * Inits the depth sensing module
   *
   * @param {XRWebGLDepthInformation} depthData - The XR depth data.
   * @param {XRRenderState} renderState - The XR render state.
   */
  init(e, t) {
    if (this.texture === null) {
      const n = new xs(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
    }
  }
  /**
   * Returns a plane mesh that visualizes the depth texture.
   *
   * @param {ArrayCamera} cameraXR - The XR camera.
   * @return {?Mesh} The plane mesh.
   */
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new Ut({
        vertexShader: Ud,
        fragmentShader: Nd,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new Pt(new Qi(20, 20), n);
    }
    return this.mesh;
  }
  /**
   * Resets the module
   */
  reset() {
    this.texture = null, this.mesh = null;
  }
  /**
   * Returns a texture representing the depth of the user's environment.
   *
   * @return {?ExternalTexture} The depth texture.
   */
  getDepthTexture() {
    return this.texture;
  }
}
class Bd extends yn {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(e, t) {
    super();
    const n = this;
    let r = null, a = 1, s = null, o = "local-floor", c = 1, l = null, f = null, d = null, u = null, h = null, _ = null;
    const M = typeof XRWebGLBinding < "u", g = new Od(), p = {}, A = t.getContextAttributes();
    let R = null, S = null;
    const y = [], T = [], w = new De();
    let v = null, b = null;
    const L = new It();
    L.viewport = new ze();
    const F = new It();
    F.viewport = new ze();
    const B = [L, F], V = new Xo();
    let I = null, G = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(Y) {
      let j = y[Y];
      return j === void 0 && (j = new ur(), y[Y] = j), j.getTargetRaySpace();
    }, this.getControllerGrip = function(Y) {
      let j = y[Y];
      return j === void 0 && (j = new ur(), y[Y] = j), j.getGripSpace();
    }, this.getHand = function(Y) {
      let j = y[Y];
      return j === void 0 && (j = new ur(), y[Y] = j), j.getHandSpace();
    };
    function J(Y) {
      const j = T.indexOf(Y.inputSource);
      if (j === -1)
        return;
      const _e = y[j];
      _e !== void 0 && (_e.update(Y.inputSource, Y.frame, l || s), _e.dispatchEvent({ type: Y.type, data: Y.inputSource }));
    }
    function W() {
      r.removeEventListener("select", J), r.removeEventListener("selectstart", J), r.removeEventListener("selectend", J), r.removeEventListener("squeeze", J), r.removeEventListener("squeezestart", J), r.removeEventListener("squeezeend", J), r.removeEventListener("end", W), r.removeEventListener("inputsourceschange", ne);
      for (let Y = 0; Y < y.length; Y++) {
        const j = T[Y];
        j !== null && (T[Y] = null, y[Y].disconnect(j));
      }
      I = null, G = null, g.reset();
      for (const Y in p)
        delete p[Y];
      if (e.setRenderTarget(R), h = null, u = null, d = null, r = null, S = null, Ye.stop(), n.isPresenting = !1, e.setPixelRatio(v), e.setSize(w.width, w.height, !1), b !== null) {
        const Y = b.camera;
        Y.fov = b.fov, Y.zoom = b.zoom, Y.updateProjectionMatrix(), b = null;
      }
      n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Y) {
      a = Y, n.isPresenting === !0 && Re("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Y) {
      o = Y, n.isPresenting === !0 && Re("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || s;
    }, this.setReferenceSpace = function(Y) {
      l = Y;
    }, this.getBaseLayer = function() {
      return u !== null ? u : h;
    }, this.getBinding = function() {
      return d === null && M && (d = new XRWebGLBinding(r, t)), d;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(Y) {
      if (r = Y, r !== null) {
        if (R = e.getRenderTarget(), r.addEventListener("select", J), r.addEventListener("selectstart", J), r.addEventListener("selectend", J), r.addEventListener("squeeze", J), r.addEventListener("squeezestart", J), r.addEventListener("squeezeend", J), r.addEventListener("end", W), r.addEventListener("inputsourceschange", ne), A.xrCompatible !== !0 && await t.makeXRCompatible(), v = e.getPixelRatio(), e.getSize(w), M && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let _e = null, Ce = null, me = null;
          A.depth && (me = A.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, _e = A.stencil ? 1027 : 1026, Ce = A.stencil ? 1020 : 1014);
          const Ue = {
            colorFormat: t.RGBA8,
            depthFormat: me,
            scaleFactor: a
          };
          d = this.getBinding(), u = d.createProjectionLayer(Ue), r.updateRenderState({ layers: [u] }), e.setPixelRatio(1), e.setSize(u.textureWidth, u.textureHeight, !1), S = new st(
            u.textureWidth,
            u.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new mn(u.textureWidth, u.textureHeight, Ce, void 0, void 0, void 0, void 0, void 0, void 0, _e),
              stencilBuffer: A.stencil,
              colorSpace: e.outputColorSpace,
              samples: A.antialias ? 4 : 0,
              resolveDepthBuffer: u.ignoreDepthValues === !1,
              resolveStencilBuffer: u.ignoreDepthValues === !1,
              storeMultisampledDepthBuffer: u.ignoreDepthValues === !1,
              storeMultisampledStencilBuffer: u.ignoreDepthValues === !1
            }
          );
        } else {
          const _e = {
            antialias: A.antialias,
            alpha: !0,
            depth: A.depth,
            stencil: A.stencil,
            framebufferScaleFactor: a
          };
          h = new XRWebGLLayer(r, t, _e), r.updateRenderState({ baseLayer: h }), e.setPixelRatio(1), e.setSize(h.framebufferWidth, h.framebufferHeight, !1), S = new st(
            h.framebufferWidth,
            h.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              colorSpace: e.outputColorSpace,
              stencilBuffer: A.stencil,
              resolveDepthBuffer: h.ignoreDepthValues === !1,
              resolveStencilBuffer: h.ignoreDepthValues === !1,
              storeMultisampledDepthBuffer: h.ignoreDepthValues === !1,
              storeMultisampledStencilBuffer: h.ignoreDepthValues === !1
            }
          );
        }
        S.isXRRenderTarget = !0, this.setFoveation(c), l = null, s = await r.requestReferenceSpace(o), Ye.setContext(r), Ye.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return g.getDepthTexture();
    };
    function ne(Y) {
      for (let j = 0; j < Y.removed.length; j++) {
        const _e = Y.removed[j], Ce = T.indexOf(_e);
        Ce >= 0 && (T[Ce] = null, y[Ce].disconnect(_e));
      }
      for (let j = 0; j < Y.added.length; j++) {
        const _e = Y.added[j];
        let Ce = T.indexOf(_e);
        if (Ce === -1) {
          for (let Ue = 0; Ue < y.length; Ue++)
            if (Ue >= T.length) {
              T.push(_e), Ce = Ue;
              break;
            } else if (T[Ue] === null) {
              T[Ue] = _e, Ce = Ue;
              break;
            }
          if (Ce === -1) break;
        }
        const me = y[Ce];
        me && me.connect(_e);
      }
    }
    const X = new k(), Z = new k();
    function ee(Y, j, _e) {
      X.setFromMatrixPosition(j.matrixWorld), Z.setFromMatrixPosition(_e.matrixWorld);
      const Ce = X.distanceTo(Z), me = j.projectionMatrix.elements, Ue = _e.projectionMatrix.elements, ht = me[14] / (me[10] - 1), Ne = me[14] / (me[10] + 1), Xe = (me[9] + 1) / me[5], tt = (me[9] - 1) / me[5], Be = (me[8] - 1) / me[0], at = (Ue[8] + 1) / Ue[0], gt = ht * Be, At = ht * at, ot = Ce / (-Be + at), ut = ot * -Be;
      if (j.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale), Y.translateX(ut), Y.translateZ(ot), Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale), Y.matrixWorldInverse.copy(Y.matrixWorld).invert(), me[10] === -1)
        Y.projectionMatrix.copy(j.projectionMatrix), Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);
      else {
        const D = ht + ot, vt = Ne + ot, $e = gt - ut, E = At + (Ce - ut), m = Xe * Ne / vt * D, U = tt * Ne / vt * D;
        Y.projectionMatrix.makePerspective($e, E, m, U, D, vt), Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert();
      }
    }
    function ve(Y, j) {
      j === null ? Y.matrixWorld.copy(Y.matrix) : Y.matrixWorld.multiplyMatrices(j.matrixWorld, Y.matrix), Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
    }
    this.updateCamera = function(Y) {
      if (r === null) return;
      let j = Y.near, _e = Y.far;
      g.texture !== null && (g.depthNear > 0 && (j = g.depthNear), g.depthFar > 0 && (_e = g.depthFar)), V.near = F.near = L.near = j, V.far = F.far = L.far = _e, (I !== V.near || G !== V.far) && (r.updateRenderState({
        depthNear: V.near,
        depthFar: V.far
      }), I = V.near, G = V.far), V.layers.mask = Y.layers.mask | 6, L.layers.mask = V.layers.mask & -5, F.layers.mask = V.layers.mask & -3;
      const Ce = Y.parent, me = V.cameras;
      ve(V, Ce);
      for (let Ue = 0; Ue < me.length; Ue++)
        ve(me[Ue], Ce);
      me.length === 2 ? ee(V, L, F) : V.projectionMatrix.copy(L.projectionMatrix), b === null && Y.isPerspectiveCamera && (b = { camera: Y, fov: Y.fov, zoom: Y.zoom }), be(Y, V, Ce);
    };
    function be(Y, j, _e) {
      _e === null ? Y.matrix.copy(j.matrixWorld) : (Y.matrix.copy(_e.matrixWorld), Y.matrix.invert(), Y.matrix.multiply(j.matrixWorld)), Y.matrix.decompose(Y.position, Y.quaternion, Y.scale), Y.updateMatrixWorld(!0), Y.projectionMatrix.copy(j.projectionMatrix), Y.projectionMatrixInverse.copy(j.projectionMatrixInverse), Y.isPerspectiveCamera && (Y.fov = di * 2 * Math.atan(1 / Y.projectionMatrix.elements[5]), Y.zoom = 1);
    }
    this.getCamera = function() {
      return V;
    }, this.getFoveation = function() {
      if (!(u === null && h === null))
        return c;
    }, this.setFoveation = function(Y) {
      c = Y, u !== null && (u.fixedFoveation = Y), h !== null && h.fixedFoveation !== void 0 && (h.fixedFoveation = Y);
    }, this.hasDepthSensing = function() {
      return g.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return g.getMesh(V);
    }, this.getCameraTexture = function(Y) {
      return p[Y];
    };
    let et = null;
    function Ve(Y, j) {
      if (f = j.getViewerPose(l || s), _ = j, f !== null) {
        const _e = f.views;
        h !== null && (e.setRenderTargetFramebuffer(S, h.framebuffer), e.setRenderTarget(S));
        let Ce = !1;
        _e.length !== V.cameras.length && (V.cameras.length = 0, Ce = !0);
        for (let Ne = 0; Ne < _e.length; Ne++) {
          const Xe = _e[Ne];
          let tt = null;
          if (h !== null)
            tt = h.getViewport(Xe);
          else {
            const at = d.getViewSubImage(u, Xe);
            tt = at.viewport, Ne === 0 && (e.setRenderTargetTextures(
              S,
              at.colorTexture,
              at.depthStencilTexture
            ), e.setRenderTarget(S));
          }
          let Be = B[Ne];
          Be === void 0 && (Be = new It(), Be.layers.enable(Ne), Be.viewport = new ze(), B[Ne] = Be), Be.matrix.fromArray(Xe.transform.matrix), Be.matrix.decompose(Be.position, Be.quaternion, Be.scale), Be.projectionMatrix.fromArray(Xe.projectionMatrix), Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(), Be.viewport.set(tt.x, tt.y, tt.width, tt.height), Ne === 0 && (V.matrix.copy(Be.matrix), V.matrix.decompose(V.position, V.quaternion, V.scale)), Ce === !0 && V.cameras.push(Be);
        }
        const me = r.enabledFeatures;
        if (me && me.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && M) {
          d = n.getBinding();
          const Ne = d.getDepthInformation(_e[0]);
          Ne && Ne.isValid && Ne.texture && g.init(Ne, r.renderState);
        }
        if (me && me.includes("camera-access") && M) {
          e.state.unbindTexture(), d = n.getBinding();
          for (let Ne = 0; Ne < _e.length; Ne++) {
            const Xe = _e[Ne].camera;
            if (Xe) {
              let tt = p[Xe];
              tt || (tt = new xs(), p[Xe] = tt);
              const Be = d.getCameraImage(Xe);
              tt.sourceTexture = Be;
            }
          }
        }
      }
      for (let _e = 0; _e < y.length; _e++) {
        const Ce = T[_e], me = y[_e];
        Ce !== null && me !== void 0 && me.update(Ce, j, l || s);
      }
      et && et(Y, j), j.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: j }), _ = null;
    }
    const Ye = new Ms();
    Ye.setAnimationLoop(Ve), this.setAnimationLoop = function(Y) {
      et = Y;
    }, this.dispose = function() {
    };
  }
}
const Gd = /* @__PURE__ */ new lt(), ws = /* @__PURE__ */ new Pe();
ws.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function kd(i, e) {
  function t(g, p) {
    g.matrixAutoUpdate === !0 && g.updateMatrix(), p.value.copy(g.matrix);
  }
  function n(g, p) {
    p.color.getRGB(g.fogColor.value, Ss(i)), p.isFog ? (g.fogNear.value = p.near, g.fogFar.value = p.far) : p.isFogExp2 && (g.fogDensity.value = p.density);
  }
  function r(g, p, A, R, S) {
    p.isNodeMaterial ? p.uniformsNeedUpdate = !1 : p.isMeshBasicMaterial ? a(g, p) : p.isMeshLambertMaterial ? (a(g, p), p.envMap && (g.envMapIntensity.value = p.envMapIntensity)) : p.isMeshToonMaterial ? (a(g, p), d(g, p)) : p.isMeshPhongMaterial ? (a(g, p), f(g, p), p.envMap && (g.envMapIntensity.value = p.envMapIntensity)) : p.isMeshStandardMaterial ? (a(g, p), u(g, p), p.isMeshPhysicalMaterial && h(g, p, S)) : p.isMeshMatcapMaterial ? (a(g, p), _(g, p)) : p.isMeshDepthMaterial ? a(g, p) : p.isMeshDistanceMaterial ? (a(g, p), M(g, p)) : p.isMeshNormalMaterial ? a(g, p) : p.isLineBasicMaterial ? (s(g, p), p.isLineDashedMaterial && o(g, p)) : p.isPointsMaterial ? c(g, p, A, R) : p.isSpriteMaterial ? l(g, p) : p.isShadowMaterial ? (g.color.value.copy(p.color), g.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function a(g, p) {
    g.opacity.value = p.opacity, p.color && g.diffuse.value.copy(p.color), p.emissive && g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (g.map.value = p.map, t(p.map, g.mapTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, t(p.alphaMap, g.alphaMapTransform)), p.bumpMap && (g.bumpMap.value = p.bumpMap, t(p.bumpMap, g.bumpMapTransform), g.bumpScale.value = p.bumpScale, p.side === 1 && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, t(p.normalMap, g.normalMapTransform), g.normalScale.value.copy(p.normalScale), p.side === 1 && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, t(p.displacementMap, g.displacementMapTransform), g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias), p.emissiveMap && (g.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, g.emissiveMapTransform)), p.specularMap && (g.specularMap.value = p.specularMap, t(p.specularMap, g.specularMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
    const A = e.get(p), R = A.envMap, S = A.envMapRotation;
    R && (g.envMap.value = R, g.envMapRotation.value.setFromMatrix4(Gd.makeRotationFromEuler(S)).transpose(), R.isCubeTexture && R.isRenderTargetTexture === !1 && g.envMapRotation.value.premultiply(ws), g.reflectivity.value = p.reflectivity, g.ior.value = p.ior, g.refractionRatio.value = p.refractionRatio), p.lightMap && (g.lightMap.value = p.lightMap, g.lightMapIntensity.value = p.lightMapIntensity, t(p.lightMap, g.lightMapTransform)), p.aoMap && (g.aoMap.value = p.aoMap, g.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, g.aoMapTransform));
  }
  function s(g, p) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, p.map && (g.map.value = p.map, t(p.map, g.mapTransform));
  }
  function o(g, p) {
    g.dashSize.value = p.dashSize, g.totalSize.value = p.dashSize + p.gapSize, g.scale.value = p.scale;
  }
  function c(g, p, A, R) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.size.value = p.size * A, g.scale.value = R * 0.5, p.map && (g.map.value = p.map, t(p.map, g.uvTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, t(p.alphaMap, g.alphaMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
  }
  function l(g, p) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.rotation.value = p.rotation, p.map && (g.map.value = p.map, t(p.map, g.mapTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, t(p.alphaMap, g.alphaMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
  }
  function f(g, p) {
    g.specular.value.copy(p.specular), g.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function d(g, p) {
    p.gradientMap && (g.gradientMap.value = p.gradientMap);
  }
  function u(g, p) {
    g.metalness.value = p.metalness, p.metalnessMap && (g.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, g.metalnessMapTransform)), g.roughness.value = p.roughness, p.roughnessMap && (g.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, g.roughnessMapTransform)), p.envMap && (g.envMapIntensity.value = p.envMapIntensity);
  }
  function h(g, p, A) {
    g.ior.value = p.ior, p.sheen > 0 && (g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), g.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (g.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, g.sheenColorMapTransform)), p.sheenRoughnessMap && (g.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, g.sheenRoughnessMapTransform))), p.clearcoat > 0 && (g.clearcoat.value = p.clearcoat, g.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (g.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, g.clearcoatMapTransform)), p.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, g.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (g.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, g.clearcoatNormalMapTransform), g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === 1 && g.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (g.dispersion.value = p.dispersion), p.retroreflectivity > 0 && (g.retroreflectivity.value = p.retroreflectivity), p.iridescence > 0 && (g.iridescence.value = p.iridescence, g.iridescenceIOR.value = p.iridescenceIOR, g.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], g.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (g.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, g.iridescenceMapTransform)), p.iridescenceThicknessMap && (g.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, g.iridescenceThicknessMapTransform))), p.transmission > 0 && (g.transmission.value = p.transmission, g.transmissionSamplerMap.value = A.texture, g.transmissionSamplerSize.value.set(A.width, A.height), p.transmissionMap && (g.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, g.transmissionMapTransform)), g.thickness.value = p.thickness, p.thicknessMap && (g.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, g.thicknessMapTransform)), g.attenuationDistance.value = p.attenuationDistance, g.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (g.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (g.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, g.anisotropyMapTransform))), g.specularIntensity.value = p.specularIntensity, g.specularColor.value.copy(p.specularColor), p.specularColorMap && (g.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, g.specularColorMapTransform)), p.specularIntensityMap && (g.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, g.specularIntensityMapTransform));
  }
  function _(g, p) {
    p.matcap && (g.matcap.value = p.matcap);
  }
  function M(g, p) {
    const A = e.get(p).light;
    g.referencePosition.value.setFromMatrixPosition(A.matrixWorld), g.nearDistance.value = A.shadow.camera.near, g.farDistance.value = A.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function zd(i, e, t, n) {
  let r = {}, a = {}, s = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(S, y) {
    const T = y.program;
    n.uniformBlockBinding(S, T);
  }
  function l(S, y) {
    let T = r[S.id];
    T === void 0 && (g(S), T = f(S), r[S.id] = T, S.addEventListener("dispose", A));
    const w = y.program;
    n.updateUBOMapping(S, w);
    const v = e.render.frame;
    a[S.id] !== v && (u(S), a[S.id] = v);
  }
  function f(S) {
    const y = d();
    S.__bindingPointIndex = y;
    const T = i.createBuffer(), w = S.__size, v = S.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, T), i.bufferData(i.UNIFORM_BUFFER, w, v), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, y, T), T;
  }
  function d() {
    for (let S = 0; S < o; S++)
      if (s.indexOf(S) === -1)
        return s.push(S), S;
    return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function u(S) {
    const y = r[S.id], T = S.uniforms, w = S.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, y);
    for (let v = 0, b = T.length; v < b; v++) {
      const L = T[v];
      if (Array.isArray(L))
        for (let F = 0, B = L.length; F < B; F++)
          h(L[F], v, F, w);
      else
        h(L, v, 0, w);
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function h(S, y, T, w) {
    if (M(S, y, T, w) === !0) {
      const v = S.__offset, b = S.value;
      if (Array.isArray(b)) {
        let L = 0;
        for (let F = 0; F < b.length; F++) {
          const B = b[F], V = p(B);
          _(B, S.__data, L), typeof B != "number" && typeof B != "boolean" && !B.isMatrix3 && !ArrayBuffer.isView(B) && (L += V.storage / Float32Array.BYTES_PER_ELEMENT);
        }
      } else
        _(b, S.__data, 0);
      i.bufferSubData(i.UNIFORM_BUFFER, v, S.__data);
    }
  }
  function _(S, y, T) {
    typeof S == "number" || typeof S == "boolean" ? y[0] = S : S.isMatrix3 ? (y[0] = S.elements[0], y[1] = S.elements[1], y[2] = S.elements[2], y[3] = 0, y[4] = S.elements[3], y[5] = S.elements[4], y[6] = S.elements[5], y[7] = 0, y[8] = S.elements[6], y[9] = S.elements[7], y[10] = S.elements[8], y[11] = 0) : ArrayBuffer.isView(S) ? y.set(new S.constructor(S.buffer, S.byteOffset, y.length)) : S.toArray(y, T);
  }
  function M(S, y, T, w) {
    const v = S.value, b = y + "_" + T;
    if (w[b] === void 0)
      return typeof v == "number" || typeof v == "boolean" ? w[b] = v : ArrayBuffer.isView(v) ? w[b] = v.slice() : w[b] = v.clone(), !0;
    {
      const L = w[b];
      if (typeof v == "number" || typeof v == "boolean") {
        if (L !== v)
          return w[b] = v, !0;
      } else {
        if (ArrayBuffer.isView(v))
          return !0;
        if (L.equals(v) === !1)
          return L.copy(v), !0;
      }
    }
    return !1;
  }
  function g(S) {
    const y = S.uniforms;
    let T = 0;
    const w = 16;
    for (let b = 0, L = y.length; b < L; b++) {
      const F = Array.isArray(y[b]) ? y[b] : [y[b]];
      for (let B = 0, V = F.length; B < V; B++) {
        const I = F[B], G = Array.isArray(I.value) ? I.value : [I.value];
        for (let J = 0, W = G.length; J < W; J++) {
          const ne = G[J], X = p(ne), Z = T % w, ee = Z % X.boundary, ve = Z + ee;
          T += ee, ve !== 0 && w - ve < X.storage && (T += w - ve), I.__data = new Float32Array(X.storage / Float32Array.BYTES_PER_ELEMENT), I.__offset = T, T += X.storage;
        }
      }
    }
    const v = T % w;
    return v > 0 && (T += w - v), S.__size = T, S.__cache = {}, this;
  }
  function p(S) {
    const y = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof S == "number" || typeof S == "boolean" ? (y.boundary = 4, y.storage = 4) : S.isVector2 ? (y.boundary = 8, y.storage = 8) : S.isVector3 || S.isColor ? (y.boundary = 16, y.storage = 12) : S.isVector4 ? (y.boundary = 16, y.storage = 16) : S.isMatrix3 ? (y.boundary = 48, y.storage = 48) : S.isMatrix4 ? (y.boundary = 64, y.storage = 64) : S.isTexture ? Re("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(S) ? (y.boundary = 16, y.storage = S.byteLength) : Re("WebGLRenderer: Unsupported uniform value type.", S), y;
  }
  function A(S) {
    const y = S.target;
    y.removeEventListener("dispose", A);
    const T = s.indexOf(y.__bindingPointIndex);
    s.splice(T, 1), i.deleteBuffer(r[y.id]), delete r[y.id], delete a[y.id];
  }
  function R() {
    for (const S in r)
      i.deleteBuffer(r[S]);
    s = [], r = {}, a = {};
  }
  return {
    bind: c,
    update: l,
    dispose: R
  };
}
const Vd = new Uint16Array([
  12469,
  15057,
  12620,
  14925,
  13266,
  14620,
  13807,
  14376,
  14323,
  13990,
  14545,
  13625,
  14713,
  13328,
  14840,
  12882,
  14931,
  12528,
  14996,
  12233,
  15039,
  11829,
  15066,
  11525,
  15080,
  11295,
  15085,
  10976,
  15082,
  10705,
  15073,
  10495,
  13880,
  14564,
  13898,
  14542,
  13977,
  14430,
  14158,
  14124,
  14393,
  13732,
  14556,
  13410,
  14702,
  12996,
  14814,
  12596,
  14891,
  12291,
  14937,
  11834,
  14957,
  11489,
  14958,
  11194,
  14943,
  10803,
  14921,
  10506,
  14893,
  10278,
  14858,
  9960,
  14484,
  14039,
  14487,
  14025,
  14499,
  13941,
  14524,
  13740,
  14574,
  13468,
  14654,
  13106,
  14743,
  12678,
  14818,
  12344,
  14867,
  11893,
  14889,
  11509,
  14893,
  11180,
  14881,
  10751,
  14852,
  10428,
  14812,
  10128,
  14765,
  9754,
  14712,
  9466,
  14764,
  13480,
  14764,
  13475,
  14766,
  13440,
  14766,
  13347,
  14769,
  13070,
  14786,
  12713,
  14816,
  12387,
  14844,
  11957,
  14860,
  11549,
  14868,
  11215,
  14855,
  10751,
  14825,
  10403,
  14782,
  10044,
  14729,
  9651,
  14666,
  9352,
  14599,
  9029,
  14967,
  12835,
  14966,
  12831,
  14963,
  12804,
  14954,
  12723,
  14936,
  12564,
  14917,
  12347,
  14900,
  11958,
  14886,
  11569,
  14878,
  11247,
  14859,
  10765,
  14828,
  10401,
  14784,
  10011,
  14727,
  9600,
  14660,
  9289,
  14586,
  8893,
  14508,
  8533,
  15111,
  12234,
  15110,
  12234,
  15104,
  12216,
  15092,
  12156,
  15067,
  12010,
  15028,
  11776,
  14981,
  11500,
  14942,
  11205,
  14902,
  10752,
  14861,
  10393,
  14812,
  9991,
  14752,
  9570,
  14682,
  9252,
  14603,
  8808,
  14519,
  8445,
  14431,
  8145,
  15209,
  11449,
  15208,
  11451,
  15202,
  11451,
  15190,
  11438,
  15163,
  11384,
  15117,
  11274,
  15055,
  10979,
  14994,
  10648,
  14932,
  10343,
  14871,
  9936,
  14803,
  9532,
  14729,
  9218,
  14645,
  8742,
  14556,
  8381,
  14461,
  8020,
  14365,
  7603,
  15273,
  10603,
  15272,
  10607,
  15267,
  10619,
  15256,
  10631,
  15231,
  10614,
  15182,
  10535,
  15118,
  10389,
  15042,
  10167,
  14963,
  9787,
  14883,
  9447,
  14800,
  9115,
  14710,
  8665,
  14615,
  8318,
  14514,
  7911,
  14411,
  7507,
  14279,
  7198,
  15314,
  9675,
  15313,
  9683,
  15309,
  9712,
  15298,
  9759,
  15277,
  9797,
  15229,
  9773,
  15166,
  9668,
  15084,
  9487,
  14995,
  9274,
  14898,
  8910,
  14800,
  8539,
  14697,
  8234,
  14590,
  7790,
  14479,
  7409,
  14367,
  7067,
  14178,
  6621,
  15337,
  8619,
  15337,
  8631,
  15333,
  8677,
  15325,
  8769,
  15305,
  8871,
  15264,
  8940,
  15202,
  8909,
  15119,
  8775,
  15022,
  8565,
  14916,
  8328,
  14804,
  8009,
  14688,
  7614,
  14569,
  7287,
  14448,
  6888,
  14321,
  6483,
  14088,
  6171,
  15350,
  7402,
  15350,
  7419,
  15347,
  7480,
  15340,
  7613,
  15322,
  7804,
  15287,
  7973,
  15229,
  8057,
  15148,
  8012,
  15046,
  7846,
  14933,
  7611,
  14810,
  7357,
  14682,
  7069,
  14552,
  6656,
  14421,
  6316,
  14251,
  5948,
  14007,
  5528,
  15356,
  5942,
  15356,
  5977,
  15353,
  6119,
  15348,
  6294,
  15332,
  6551,
  15302,
  6824,
  15249,
  7044,
  15171,
  7122,
  15070,
  7050,
  14949,
  6861,
  14818,
  6611,
  14679,
  6349,
  14538,
  6067,
  14398,
  5651,
  14189,
  5311,
  13935,
  4958,
  15359,
  4123,
  15359,
  4153,
  15356,
  4296,
  15353,
  4646,
  15338,
  5160,
  15311,
  5508,
  15263,
  5829,
  15188,
  6042,
  15088,
  6094,
  14966,
  6001,
  14826,
  5796,
  14678,
  5543,
  14527,
  5287,
  14377,
  4985,
  14133,
  4586,
  13869,
  4257,
  15360,
  1563,
  15360,
  1642,
  15358,
  2076,
  15354,
  2636,
  15341,
  3350,
  15317,
  4019,
  15273,
  4429,
  15203,
  4732,
  15105,
  4911,
  14981,
  4932,
  14836,
  4818,
  14679,
  4621,
  14517,
  4386,
  14359,
  4156,
  14083,
  3795,
  13808,
  3437,
  15360,
  122,
  15360,
  137,
  15358,
  285,
  15355,
  636,
  15344,
  1274,
  15322,
  2177,
  15281,
  2765,
  15215,
  3223,
  15120,
  3451,
  14995,
  3569,
  14846,
  3567,
  14681,
  3466,
  14511,
  3305,
  14344,
  3121,
  14037,
  2800,
  13753,
  2467,
  15360,
  0,
  15360,
  1,
  15359,
  21,
  15355,
  89,
  15346,
  253,
  15325,
  479,
  15287,
  796,
  15225,
  1148,
  15133,
  1492,
  15008,
  1749,
  14856,
  1882,
  14685,
  1886,
  14506,
  1783,
  14324,
  1608,
  13996,
  1398,
  13702,
  1183
]);
let Yt = null;
function Hd() {
  return Yt === null && (Yt = new Wr(Vd, 16, 16, 1030, 1016), Yt.name = "DFG_LUT", Yt.minFilter = 1006, Yt.magFilter = 1006, Yt.wrapS = 1001, Yt.wrapT = 1001, Yt.generateMipmaps = !1, Yt.needsUpdate = !0), Yt;
}
class Wd {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(e = {}) {
    const {
      canvas: t = Zs(),
      context: n = null,
      depth: r = !0,
      stencil: a = !1,
      alpha: s = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: f = "default",
      failIfMajorPerformanceCaveat: d = !1,
      reversedDepthBuffer: u = !1,
      outputBufferType: h = 1009
    } = e;
    this.isWebGLRenderer = !0;
    let _;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      _ = n.getContextAttributes().alpha;
    } else
      _ = s;
    const M = h, g = /* @__PURE__ */ new Set([
      1033,
      1031,
      1029
    ]), p = /* @__PURE__ */ new Set([
      1009,
      1014,
      1012,
      1020,
      1017,
      1018
    ]), A = new Uint32Array(4), R = new Int32Array(4), S = new k();
    let y = null, T = null;
    const w = [], v = [];
    let b = null;
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled.
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Diagnostics configuration for the shader generation. Only relevant for TSL.
       * @type {Object}
       * @property {boolean} keywords - Whether declaration names that collide with reserved keywords of the shading language should be renamed or not.
       */
      diagnostics: {
        keywords: !1
      },
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const L = this;
    let F = !1, B = null, V = null, I = null, G = null;
    this._outputColorSpace = Ft;
    let J = 0, W = 0, ne = null, X = -1, Z = null;
    const ee = new ze(), ve = new ze();
    let be = null;
    const et = new We(0);
    let Ve = 0, Ye = t.width, Y = t.height, j = 1, _e = null, Ce = null;
    const me = new ze(0, 0, Ye, Y), Ue = new ze(0, 0, Ye, Y);
    let ht = !1;
    const Ne = new _s();
    let Xe = !1, tt = !1;
    const Be = new lt(), at = new k(), gt = new ze(), At = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let ot = !1;
    function ut() {
      return ne === null ? j : 1;
    }
    let D = n;
    function vt(x, C) {
      return t.getContext(x, C);
    }
    let $e, E, m, U, z, q, ie, re, K, Q, ae, ye, ce, se, Te, we, Le, P, oe, $, le, he, te;
    try {
      const x = {
        alpha: !0,
        depth: r,
        stencil: a,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: f,
        failIfMajorPerformanceCaveat: d
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r186"), t.addEventListener("webglcontextlost", nt, !1), t.addEventListener("webglcontextrestored", Ke, !1), t.addEventListener("webglcontextcreationerror", Ot, !1), D === null) {
        const C = "webgl2";
        if (D = vt(C, x), D === null)
          throw vt(C) ? new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.") : new Error("THREE.WebGLRenderer: Error creating WebGL context.");
      }
      Ae();
    } catch (x) {
      throw t.removeEventListener("webglcontextlost", nt, !1), t.removeEventListener("webglcontextrestored", Ke, !1), t.removeEventListener("webglcontextcreationerror", Ot, !1), qe("WebGLRenderer: " + x.message), x;
    }
    function Ae() {
      $e = new Vu(D), $e.init(), le = new Id(D, $e), E = new Lu(D, $e, e, le), m = new Ld(D, $e), E.reversedDepthBuffer && u && m.buffers.depth.setReversed(!0), V = D.createFramebuffer(), I = D.createFramebuffer(), G = D.createFramebuffer(), U = new Xu(D), z = new vd(), q = new Fd(D, $e, m, z, E, le, U), ie = new zu(L), re = new Yo(D), he = new Pu(D, re), K = new Hu(D, re, U, he), Q = new Yu(D, K, re, he, U), P = new qu(D, E, q), Te = new Fu(z), ae = new _d(L, ie, $e, E, he, Te), ye = new kd(L, z), ce = new Sd(), se = new Ad($e), Le = new Cu(L, ie, m, Q, _, c), we = new Dd(L, Q, E), te = new zd(D, U, E, m), oe = new Du(D, $e, U), $ = new Wu(D, $e, U), U.programs = ae.programs, L.capabilities = E, L.extensions = $e, L.properties = z, L.renderLists = ce, L.shadowMap = we, L.state = m, L.info = U;
    }
    M !== 1009 && (b = new Zu(M, t.width, t.height, o, r, a));
    const Me = new Bd(L, D);
    this.xr = Me, this.getContext = function() {
      return D;
    }, this.getContextAttributes = function() {
      return D.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = $e.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = $e.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return j;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (j = x, this.setSize(Ye, Y, !1));
    }, this.getSize = function(x) {
      return x.set(Ye, Y);
    }, this.setSize = function(x, C, H = !0) {
      if (Me.isPresenting) {
        Re("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      Ye = x, Y = C, t.width = Math.floor(x * j), t.height = Math.floor(C * j), H === !0 && (t.style.width = x + "px", t.style.height = C + "px"), b !== null && b.setSize(t.width, t.height), this.setViewport(0, 0, x, C);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(Ye * j, Y * j).floor();
    }, this.setDrawingBufferSize = function(x, C, H) {
      Ye = x, Y = C, j = H, t.width = Math.floor(x * H), t.height = Math.floor(C * H), this.setViewport(0, 0, x, C);
    }, this.setEffects = function(x) {
      if (M === 1009) {
        qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (x) {
        for (let C = 0; C < x.length; C++)
          if (x[C].isOutputPass === !0) {
            Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
            break;
          }
      }
      b.setEffects(x || []);
    }, this.getCurrentViewport = function(x) {
      return x.copy(ee);
    }, this.getViewport = function(x) {
      return x.copy(me);
    }, this.setViewport = function(x, C, H, N) {
      x.isVector4 ? me.set(x.x, x.y, x.z, x.w) : me.set(x, C, H, N), m.viewport(ee.copy(me).multiplyScalar(j).round());
    }, this.getScissor = function(x) {
      return x.copy(Ue);
    }, this.setScissor = function(x, C, H, N) {
      x.isVector4 ? Ue.set(x.x, x.y, x.z, x.w) : Ue.set(x, C, H, N), m.scissor(ve.copy(Ue).multiplyScalar(j).round());
    }, this.getScissorTest = function() {
      return ht;
    }, this.setScissorTest = function(x) {
      m.setScissorTest(ht = x);
    }, this.setOpaqueSort = function(x) {
      _e = x;
    }, this.setTransparentSort = function(x) {
      Ce = x;
    }, this.getClearColor = function(x) {
      return x.copy(Le.getClearColor());
    }, this.setClearColor = function() {
      Le.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return Le.getClearAlpha();
    }, this.setClearAlpha = function() {
      Le.setClearAlpha(...arguments);
    }, this.clear = function(x = !0, C = !0, H = !0) {
      let N = 0;
      if (x) {
        let O = !1;
        if (ne !== null) {
          const de = ne.texture.format;
          O = g.has(de);
        }
        if (O) {
          const de = ne.texture.type, ge = p.has(de), fe = Le.getClearColor(), xe = Le.getClearAlpha(), Ee = fe.r, Fe = fe.g, Oe = fe.b;
          ge ? (A[0] = Ee, A[1] = Fe, A[2] = Oe, A[3] = xe, D.clearBufferuiv(D.COLOR, 0, A)) : (R[0] = Ee, R[1] = Fe, R[2] = Oe, R[3] = xe, D.clearBufferiv(D.COLOR, 0, R));
        } else
          N |= D.COLOR_BUFFER_BIT;
      }
      C && (N |= D.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), H && (N |= D.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), N !== 0 && D.clear(N);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.setNodesHandler = function(x) {
      x.setRenderer(this), B = x;
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", nt, !1), t.removeEventListener("webglcontextrestored", Ke, !1), t.removeEventListener("webglcontextcreationerror", Ot, !1), Le.dispose(), ce.dispose(), se.dispose(), z.dispose(), ie.dispose(), Q.dispose(), he.dispose(), te.dispose(), ae.dispose(), Me.dispose(), Me.removeEventListener("sessionstart", ta), Me.removeEventListener("sessionend", na), gn.stop();
    };
    function nt(x) {
      x.preventDefault(), da("WebGLRenderer: Context Lost."), F = !0;
    }
    function Ke() {
      da("WebGLRenderer: Context Restored."), F = !1;
      const x = U.autoReset, C = we.enabled, H = we.autoUpdate, N = we.needsUpdate, O = we.type;
      Ae(), U.autoReset = x, we.enabled = C, we.autoUpdate = H, we.needsUpdate = N, we.type = O;
    }
    function Ot(x) {
      qe("WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function Wt(x) {
      const C = x.target;
      C.removeEventListener("dispose", Wt), Gs(C);
    }
    function Gs(x) {
      ks(x), z.remove(x);
    }
    function ks(x) {
      const C = z.get(x).programs;
      C !== void 0 && (C.forEach(function(H) {
        ae.releaseProgram(H);
      }), x.isShaderMaterial && ae.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, C, H, N, O, de) {
      C === null && (C = At);
      const ge = O.isMesh && O.matrixWorld.determinantAffine() < 0, fe = Hs(x, C, H, N, O);
      m.setMaterial(N, ge);
      let xe = H.index, Ee = 1;
      if (N.wireframe === !0) {
        if (xe = K.getWireframeAttribute(H), xe === void 0) return;
        Ee = 2;
      }
      const Fe = H.drawRange, Oe = H.attributes.position;
      let Se = Fe.start * Ee, Ze = (Fe.start + Fe.count) * Ee;
      de !== null && (Se = Math.max(Se, de.start * Ee), Ze = Math.min(Ze, (de.start + de.count) * Ee)), xe !== null ? (Se = Math.max(Se, 0), Ze = Math.min(Ze, xe.count)) : Oe != null && (Se = Math.max(Se, 0), Ze = Math.min(Ze, Oe.count));
      const ft = Ze - Se;
      if (ft < 0 || ft === 1 / 0) return;
      he.setup(O, N, fe, H, xe);
      let rt, je = oe;
      if (xe !== null && (rt = re.get(xe), je = $, je.setIndex(rt)), O.isMesh)
        N.wireframe === !0 ? (m.setLineWidth(N.wireframeLinewidth * ut()), je.setMode(D.LINES)) : je.setMode(D.TRIANGLES);
      else if (O.isLine) {
        let xt = N.linewidth;
        xt === void 0 && (xt = 1), m.setLineWidth(xt * ut()), O.isLineSegments ? je.setMode(D.LINES) : O.isLineLoop ? je.setMode(D.LINE_LOOP) : je.setMode(D.LINE_STRIP);
      } else O.isPoints ? je.setMode(D.POINTS) : O.isSprite && je.setMode(D.TRIANGLES);
      if (O.isBatchedMesh)
        if ($e.get("WEBGL_multi_draw"))
          je.renderMultiDraw(O._multiDrawStarts, O._multiDrawCounts, O._multiDrawCount);
        else {
          const xt = O._multiDrawStarts, pe = O._multiDrawCounts, Et = O._multiDrawCount, He = xe ? re.get(xe).bytesPerElement : 1, Dt = z.get(N).currentProgram.getUniforms();
          for (let Xt = 0; Xt < Et; Xt++)
            Dt.setValue(D, "_gl_DrawID", Xt), je.render(xt[Xt] / He, pe[Xt]);
        }
      else if (O.isInstancedMesh)
        je.renderInstances(Se, ft, O.count);
      else if (H.isInstancedBufferGeometry) {
        const xt = H._maxInstanceCount !== void 0 ? H._maxInstanceCount : 1 / 0, pe = Math.min(H.instanceCount, xt);
        je.renderInstances(Se, ft, pe);
      } else
        je.render(Se, ft);
    };
    function ea(x, C, H, N) {
      B !== null && x.isNodeMaterial && B.setObject(N, x), Xe === !0 && Te.setState(x, H, !1), x.transparent === !0 && x.side === 2 && x.forceSinglePass === !1 ? (x.side = 1, x.needsUpdate = !0, gi(x, C, N), x.side = 0, x.needsUpdate = !0, gi(x, C, N), x.side = 2) : gi(x, C, N);
    }
    this.compile = function(x, C, H = null) {
      H === null && (H = x), B !== null && B.renderStart(x, C, H), T = se.get(H), T.init(C), v.push(T), H.traverseVisible(function(O) {
        O.isLight && O.layers.test(C.layers) && (T.pushLight(O), O.castShadow && T.pushShadow(O));
      }), x !== H && x.traverseVisible(function(O) {
        O.isLight && O.layers.test(C.layers) && (T.pushLight(O), O.castShadow && T.pushShadow(O));
      }), T.setupLights(), B !== null && B.updateLights(T.state.lightsArray), tt = this.localClippingEnabled, Xe = Te.init(this.clippingPlanes, tt), Xe === !0 && Te.setGlobalState(this.clippingPlanes, C), B !== null && we.render(T.state.shadowsArray, H, C);
      const N = /* @__PURE__ */ new Set();
      return x.traverse(function(O) {
        if (!(O.isMesh || O.isPoints || O.isLine || O.isSprite))
          return;
        const de = O.material;
        if (de)
          if (Array.isArray(de))
            for (let ge = 0; ge < de.length; ge++) {
              const fe = de[ge];
              ea(fe, H, C, O), N.add(fe);
            }
          else
            ea(de, H, C, O), N.add(de);
      }), T = v.pop(), B !== null && B.renderEnd(), N;
    }, this.compileAsync = function(x, C, H = null) {
      const N = this.compile(x, C, H);
      return new Promise((O) => {
        function de() {
          if (N.forEach(function(ge) {
            const xe = z.get(ge).currentProgram;
            (xe === void 0 || xe.isReady()) && N.delete(ge);
          }), N.size === 0) {
            O(x);
            return;
          }
          setTimeout(de, 10);
        }
        $e.get("KHR_parallel_shader_compile") !== null ? de() : setTimeout(de, 10);
      });
    };
    let ir = null;
    function zs(x) {
      ir && ir(x);
    }
    function ta() {
      gn.stop();
    }
    function na() {
      gn.start();
    }
    const gn = new Ms();
    gn.setAnimationLoop(zs), typeof self < "u" && gn.setContext(self), this.setAnimationLoop = function(x) {
      ir = x, Me.setAnimationLoop(x), x === null ? gn.stop() : gn.start();
    }, Me.addEventListener("sessionstart", ta), Me.addEventListener("sessionend", na), this.render = function(x, C) {
      if (C !== void 0 && C.isCamera !== !0) {
        qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (F === !0) return;
      B !== null && B.renderStart(x, C);
      const H = Me.enabled === !0 && Me.isPresenting === !0, N = b !== null && (ne === null || H) && b.begin(L, ne);
      if (x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(), C.parent === null && C.matrixWorldAutoUpdate === !0 && C.updateMatrixWorld(), Me.enabled === !0 && Me.isPresenting === !0 && (b === null || b.isCompositing() === !1) && (Me.cameraAutoUpdate === !0 && Me.updateCamera(C), C = Me.getCamera()), x.isScene === !0 && x.onBeforeRender(L, x, C, ne), T = se.get(x, v.length), T.init(C), T.state.textureUnits = q.getTextureUnits(), v.push(T), Be.multiplyMatrices(C.projectionMatrix, C.matrixWorldInverse), Ne.setFromProjectionMatrix(Be, 2e3, C.reversedDepth), tt = this.localClippingEnabled, Xe = Te.init(this.clippingPlanes, tt), y = ce.get(x, w.length), y.init(), w.push(y), Me.enabled === !0 && Me.isPresenting === !0) {
        const ge = L.xr.getDepthSensingMesh();
        ge !== null && rr(ge, C, -1 / 0, L.sortObjects);
      }
      rr(x, C, 0, L.sortObjects), y.finish(), B !== null && B.updateLights(T.state.lightsArray), L.sortObjects === !0 && y.sort(_e, Ce), ot = Me.enabled === !1 || Me.isPresenting === !1 || Me.hasDepthSensing() === !1, ot && Le.addToRenderList(y, x), this.info.render.frame++, this.info.autoReset === !0 && this.info.reset(), Xe === !0 && Te.beginShadows();
      const O = T.state.shadowsArray;
      if (we.render(O, x, C), Xe === !0 && Te.endShadows(), (N && b.hasRenderPass()) === !1) {
        const ge = y.opaque, fe = y.transmissive;
        if (T.setupLights(), C.isArrayCamera) {
          const xe = C.cameras;
          if (fe.length > 0)
            for (let Ee = 0, Fe = xe.length; Ee < Fe; Ee++) {
              const Oe = xe[Ee];
              ra(ge, fe, x, Oe);
            }
          ot && Le.render(x);
          for (let Ee = 0, Fe = xe.length; Ee < Fe; Ee++) {
            const Oe = xe[Ee];
            ia(y, x, Oe, Oe.viewport);
          }
        } else
          fe.length > 0 && ra(ge, fe, x, C), ot && Le.render(x), ia(y, x, C);
      }
      ne !== null && W === 0 && (q.updateMultisampleRenderTarget(ne), q.updateRenderTargetMipmap(ne)), N && b.end(L), x.isScene === !0 && x.onAfterRender(L, x, C), he.resetDefaultState(), X = -1, Z = null, v.pop(), v.length > 0 ? (T = v[v.length - 1], q.setTextureUnits(T.state.textureUnits), Xe === !0 && Te.setGlobalState(L.clippingPlanes, T.state.camera)) : T = null, w.pop(), w.length > 0 ? y = w[w.length - 1] : y = null, B !== null && B.renderEnd();
    };
    function rr(x, C, H, N) {
      if (x.visible === !1) return;
      if (x.layers.test(C.layers)) {
        if (x.isGroup)
          H = x.renderOrder;
        else if (x.isLOD)
          x.autoUpdate === !0 && x.update(C);
        else if (x.isLightProbeGrid)
          T.pushLightProbeGrid(x);
        else if (x.isLight)
          T.pushLight(x), x.castShadow && T.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || x.intersectsFrustum(Ne)) {
            N && gt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Be);
            const ge = Q.update(x), fe = x.material;
            fe.visible && y.push(x, ge, fe, H, gt.z, null, C);
          }
        } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || x.intersectsFrustum(Ne))) {
          const ge = Q.update(x), fe = x.material;
          if (N && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), gt.copy(x.boundingSphere.center)) : (ge.boundingSphere === null && ge.computeBoundingSphere(), gt.copy(ge.boundingSphere.center)), gt.applyMatrix4(x.matrixWorld).applyMatrix4(Be)), Array.isArray(fe)) {
            const xe = ge.groups;
            for (let Ee = 0, Fe = xe.length; Ee < Fe; Ee++) {
              const Oe = xe[Ee], Se = fe[Oe.materialIndex];
              Se && Se.visible && y.push(x, ge, Se, H, gt.z, Oe, C);
            }
          } else fe.visible && y.push(x, ge, fe, H, gt.z, null, C);
        }
      }
      const de = x.children;
      for (let ge = 0, fe = de.length; ge < fe; ge++)
        rr(de[ge], C, H, N);
    }
    function ia(x, C, H, N) {
      const { opaque: O, transmissive: de, transparent: ge } = x;
      T.setupLightsView(H), Xe === !0 && Te.setGlobalState(L.clippingPlanes, H), N && m.viewport(ee.copy(N)), O.length > 0 && mi(O, C, H), de.length > 0 && mi(de, C, H), ge.length > 0 && mi(ge, C, H), m.buffers.depth.setTest(!0), m.buffers.depth.setMask(!0), m.buffers.color.setMask(!0), m.setPolygonOffset(!1);
    }
    function ra(x, C, H, N) {
      if ((H.isScene === !0 ? H.overrideMaterial : null) !== null)
        return;
      if (T.state.transmissionRenderTarget[N.id] === void 0) {
        const Se = $e.has("EXT_color_buffer_half_float") || $e.has("EXT_color_buffer_float");
        T.state.transmissionRenderTarget[N.id] = new st(1, 1, {
          generateMipmaps: !0,
          type: Se ? 1016 : 1009,
          minFilter: 1008,
          samples: Math.max(4, E.samples),
          // to avoid feedback loops, the transmission render target requires a resolve, see #26177
          stencilBuffer: a,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          storeMultisampledDepthBuffer: !1,
          storeMultisampledStencilBuffer: !1,
          colorSpace: ke.workingColorSpace
        });
      }
      const de = T.state.transmissionRenderTarget[N.id], ge = N.viewport || ee;
      de.setSize(ge.z * L.transmissionResolutionScale, ge.w * L.transmissionResolutionScale);
      const fe = L.getRenderTarget(), xe = L.getActiveCubeFace(), Ee = L.getActiveMipmapLevel();
      L.setRenderTarget(de), L.getClearColor(et), Ve = L.getClearAlpha(), Ve < 1 && L.setClearColor(16777215, 0.5), L.clear(), ot && Le.render(H);
      const Fe = L.toneMapping;
      L.toneMapping = 0;
      const Oe = N.viewport;
      if (N.viewport !== void 0 && (N.viewport = void 0), T.setupLightsView(N), Xe === !0 && Te.setGlobalState(L.clippingPlanes, N), mi(x, H, N), q.updateMultisampleRenderTarget(de), q.updateRenderTargetMipmap(de), $e.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Se = !1;
        for (let Ze = 0, ft = C.length; Ze < ft; Ze++) {
          const rt = C[Ze], { object: je, geometry: xt, material: pe, group: Et } = rt;
          if (pe.side === 2 && je.layers.test(N.layers)) {
            const He = pe.side;
            pe.side = 1, pe.needsUpdate = !0, aa(je, H, N, xt, pe, Et), pe.side = He, pe.needsUpdate = !0, Se = !0;
          }
        }
        Se === !0 && (q.updateMultisampleRenderTarget(de), q.updateRenderTargetMipmap(de));
      }
      L.setRenderTarget(fe, xe, Ee), L.setClearColor(et, Ve), Oe !== void 0 && (N.viewport = Oe), L.toneMapping = Fe;
    }
    function mi(x, C, H) {
      const N = C.isScene === !0 ? C.overrideMaterial : null;
      for (let O = 0, de = x.length; O < de; O++) {
        const ge = x[O], { object: fe, geometry: xe, group: Ee } = ge;
        let Fe = ge.material;
        Fe.allowOverride === !0 && N !== null && (Fe = N), fe.layers.test(H.layers) && aa(fe, C, H, xe, Fe, Ee);
      }
    }
    function aa(x, C, H, N, O, de) {
      B !== null && O.isNodeMaterial && B.setObject(x, O), x.onBeforeRender(L, C, H, N, O, de), x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), O.onBeforeRender(L, C, H, N, x, de), O.transparent === !0 && O.side === 2 && O.forceSinglePass === !1 ? (O.side = 1, O.needsUpdate = !0, L.renderBufferDirect(H, C, N, O, x, de), O.side = 0, O.needsUpdate = !0, L.renderBufferDirect(H, C, N, O, x, de), O.side = 2) : L.renderBufferDirect(H, C, N, O, x, de), x.onAfterRender(L, C, H, N, O, de);
    }
    function gi(x, C, H) {
      C.isScene !== !0 && (C = At);
      const N = z.get(x), O = T.state.lights, de = T.state.shadowsArray, ge = O.state.version, fe = ae.getParameters(x, O.state, de, C, H, T.state.lightProbeGridArray), xe = ae.getProgramCacheKey(fe);
      let Ee = N.programs;
      N.environment = x.isMeshStandardMaterial || x.isMeshLambertMaterial || x.isMeshPhongMaterial ? C.environment : null, N.fog = C.fog;
      const Fe = x.isMeshStandardMaterial || x.isMeshLambertMaterial && !x.envMap || x.isMeshPhongMaterial && !x.envMap;
      N.envMap = ie.get(x.envMap || N.environment, Fe), N.envMapRotation = N.environment !== null && x.envMap === null ? C.environmentRotation : x.envMapRotation, Ee === void 0 && (x.addEventListener("dispose", Wt), Ee = /* @__PURE__ */ new Map(), N.programs = Ee);
      let Oe = Ee.get(xe);
      if (Oe !== void 0) {
        if (N.currentProgram === Oe && N.lightsStateVersion === ge)
          return oa(x, fe), Oe;
      } else
        fe.uniforms = ae.getUniforms(x), B !== null && x.isNodeMaterial && B.build(x, H, fe), x.onBeforeCompile(fe, L), Oe = ae.acquireProgram(fe, xe), Ee.set(xe, Oe), N.uniforms = fe.uniforms;
      const Se = N.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === !0) && (Se.clippingPlanes = Te.uniform), oa(x, fe), N.needsLights = Xs(x), N.lightsStateVersion = ge, N.needsLights && (Se.ambientLightColor.value = O.state.ambient, Se.lightProbe.value = O.state.probe, Se.sunLights.value = O.state.sun, Se.sunLightShadows.value = O.state.sunShadow, Se.directionalLights.value = O.state.directional, Se.directionalLightShadows.value = O.state.directionalShadow, Se.spotLights.value = O.state.spot, Se.spotLightShadows.value = O.state.spotShadow, Se.rectAreaLights.value = O.state.rectArea, Se.ltc_1.value = O.state.rectAreaLTC1, Se.ltc_2.value = O.state.rectAreaLTC2, Se.pointLights.value = O.state.point, Se.pointLightShadows.value = O.state.pointShadow, Se.hemisphereLights.value = O.state.hemi, Se.sunShadowMatrix.value = O.state.sunShadowMatrix, Se.sunShadowCascade.value = O.state.sunShadowCascade, Se.directionalShadowMatrix.value = O.state.directionalShadowMatrix, Se.spotLightMatrix.value = O.state.spotLightMatrix, Se.spotLightMap.value = O.state.spotLightMap, Se.pointShadowMatrix.value = O.state.pointShadowMatrix), N.lightProbeGrid = T.state.lightProbeGridArray.length > 0, N.currentProgram = Oe, N.uniformsList = null, Oe;
    }
    function sa(x) {
      if (x.uniformsList === null) {
        const C = x.currentProgram.getUniforms();
        x.uniformsList = Hi.seqWithValue(C.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function oa(x, C) {
      const H = z.get(x);
      H.outputColorSpace = C.outputColorSpace, H.batching = C.batching, H.batchingColor = C.batchingColor, H.instancing = C.instancing, H.instancingColor = C.instancingColor, H.instancingMorph = C.instancingMorph, H.skinning = C.skinning, H.morphTargets = C.morphTargets, H.morphNormals = C.morphNormals, H.morphColors = C.morphColors, H.morphTargetsCount = C.morphTargetsCount, H.numClippingPlanes = C.numClippingPlanes, H.numIntersection = C.numClipIntersection, H.vertexAlphas = C.vertexAlphas, H.vertexTangents = C.vertexTangents, H.toneMapping = C.toneMapping;
    }
    function Vs(x, C) {
      if (x.length === 0) return null;
      if (x.length === 1)
        return x[0].texture !== null ? x[0] : null;
      S.setFromMatrixPosition(C.matrixWorld);
      for (let H = 0, N = x.length; H < N; H++) {
        const O = x[H];
        if (O.texture !== null && O.boundingBox.containsPoint(S)) return O;
      }
      return null;
    }
    function Hs(x, C, H, N, O) {
      C.isScene !== !0 && (C = At), q.resetTextureUnits();
      const de = C.fog, ge = N.isMeshStandardMaterial || N.isMeshLambertMaterial || N.isMeshPhongMaterial ? C.environment : null, fe = ne === null ? L.outputColorSpace : ne.isXRRenderTarget === !0 ? ne.texture.colorSpace : ke.workingColorSpace, xe = N.isMeshStandardMaterial || N.isMeshLambertMaterial && !N.envMap || N.isMeshPhongMaterial && !N.envMap, Ee = ie.get(N.envMap || ge, xe), Fe = N.vertexColors === !0 && !!H.attributes.color && H.attributes.color.itemSize === 4, Oe = !!H.attributes.tangent && (!!N.normalMap || N.anisotropy > 0), Se = !!H.morphAttributes.position, Ze = !!H.morphAttributes.normal, ft = !!H.morphAttributes.color;
      let rt = 0;
      N.toneMapped && (ne === null || ne.isXRRenderTarget === !0) && (rt = L.toneMapping);
      const je = H.morphAttributes.position || H.morphAttributes.normal || H.morphAttributes.color, xt = je !== void 0 ? je.length : 0, pe = z.get(N), Et = T.state.lights;
      if (Xe === !0 && (tt === !0 || x !== Z)) {
        const it = x === Z && N.id === X;
        Te.setState(N, x, it);
      }
      let He = !1;
      N.version === pe.__version ? (pe.needsLights && pe.lightsStateVersion !== Et.state.version || pe.outputColorSpace !== fe || O.isBatchedMesh && pe.batching === !1 || !O.isBatchedMesh && pe.batching === !0 || O.isBatchedMesh && pe.batchingColor === !0 && O._colorsTexture === null || O.isBatchedMesh && pe.batchingColor === !1 && O._colorsTexture !== null || O.isInstancedMesh && pe.instancing === !1 || !O.isInstancedMesh && pe.instancing === !0 || O.isSkinnedMesh && pe.skinning === !1 || !O.isSkinnedMesh && pe.skinning === !0 || O.isInstancedMesh && pe.instancingColor === !0 && O.instanceColor === null || O.isInstancedMesh && pe.instancingColor === !1 && O.instanceColor !== null || O.isInstancedMesh && pe.instancingMorph === !0 && O.morphTexture === null || O.isInstancedMesh && pe.instancingMorph === !1 && O.morphTexture !== null || pe.envMap !== Ee || N.fog === !0 && pe.fog !== de || pe.numClippingPlanes !== void 0 && (pe.numClippingPlanes !== Te.numPlanes || pe.numIntersection !== Te.numIntersection) || pe.vertexAlphas !== Fe || pe.vertexTangents !== Oe || pe.morphTargets !== Se || pe.morphNormals !== Ze || pe.morphColors !== ft || pe.toneMapping !== rt || pe.morphTargetsCount !== xt || !!pe.lightProbeGrid != T.state.lightProbeGridArray.length > 0) && (He = !0) : (He = !0, pe.__version = N.version);
      let Dt = pe.currentProgram;
      He === !0 && (Dt = gi(N, C, O), B && N.isNodeMaterial && B.onUpdateProgram(N, Dt, pe));
      let Xt = !1, an = !1, Tn = !1;
      const Qe = Dt.getUniforms(), ct = pe.uniforms;
      if (m.useProgram(Dt.program) && (Xt = !0, an = !0, Tn = !0), N.id !== X && (X = N.id, an = !0), pe.needsLights) {
        const it = Vs(T.state.lightProbeGridArray, O);
        pe.lightProbeGrid !== it && (pe.lightProbeGrid = it, an = !0);
      }
      if (Xt || Z !== x) {
        m.buffers.depth.getReversed() && x.reversedDepth !== !0 && (x._reversedDepth = !0, x.updateProjectionMatrix()), Qe.setValue(D, "projectionMatrix", x.projectionMatrix), Qe.setValue(D, "viewMatrix", x.matrixWorldInverse);
        const on = Qe.map.cameraPosition;
        on !== void 0 && on.setValue(D, at.setFromMatrixPosition(x.matrixWorld)), E.logarithmicDepthBuffer && Qe.setValue(
          D,
          "logDepthBufFC",
          2 / (Math.log(x.far + 1) / Math.LN2)
        ), (N.isMeshPhongMaterial || N.isMeshToonMaterial || N.isMeshLambertMaterial || N.isMeshBasicMaterial || N.isMeshStandardMaterial || N.isShaderMaterial) && Qe.setValue(D, "isOrthographic", x.isOrthographicCamera === !0), Z !== x && (Z = x, an = !0, Tn = !0);
      }
      if (pe.needsLights && (Et.state.sunShadowMap.length > 0 && Qe.setValue(D, "sunShadowMap", Et.state.sunShadowMap, q), Et.state.directionalShadowMap.length > 0 && Qe.setValue(D, "directionalShadowMap", Et.state.directionalShadowMap, q), Et.state.spotShadowMap.length > 0 && Qe.setValue(D, "spotShadowMap", Et.state.spotShadowMap, q), Et.state.pointShadowMap.length > 0 && Qe.setValue(D, "pointShadowMap", Et.state.pointShadowMap, q)), O.isSkinnedMesh) {
        Qe.setOptional(D, O, "bindMatrix"), Qe.setOptional(D, O, "bindMatrixInverse");
        const it = O.skeleton;
        it && (it.boneTexture === null && it.computeBoneTexture(), Qe.setValue(D, "boneTexture", it.boneTexture, q));
      }
      O.isBatchedMesh && (Qe.setOptional(D, O, "batchingTexture"), Qe.setValue(D, "batchingTexture", O._matricesTexture, q), Qe.setOptional(D, O, "batchingIdTexture"), Qe.setValue(D, "batchingIdTexture", O._indirectTexture, q), Qe.setOptional(D, O, "batchingColorTexture"), O._colorsTexture !== null && Qe.setValue(D, "batchingColorTexture", O._colorsTexture, q));
      const sn = H.morphAttributes;
      if ((sn.position !== void 0 || sn.normal !== void 0 || sn.color !== void 0) && P.update(O, H, Dt), (an || pe.receiveShadow !== O.receiveShadow) && (pe.receiveShadow = O.receiveShadow, Qe.setValue(D, "receiveShadow", O.receiveShadow)), (N.isMeshStandardMaterial || N.isMeshLambertMaterial || N.isMeshPhongMaterial) && N.envMap === null && C.environment !== null && (ct.envMapIntensity.value = C.environmentIntensity), ct.dfgLUT !== void 0 && (ct.dfgLUT.value = Hd()), an) {
        if (Qe.setValue(D, "toneMappingExposure", L.toneMappingExposure), pe.needsLights && Ws(ct, Tn), de && N.fog === !0 && ye.refreshFogUniforms(ct, de), ye.refreshMaterialUniforms(ct, N, j, Y, T.state.transmissionRenderTarget[x.id]), pe.needsLights && pe.lightProbeGrid) {
          const it = pe.lightProbeGrid;
          ct.probesSH.value = it.texture, ct.probesMin.value.copy(it.boundingBox.min), ct.probesMax.value.copy(it.boundingBox.max), ct.probesResolution.value.copy(it.resolution);
        }
        Hi.upload(D, sa(pe), ct, q);
      }
      if (N.isShaderMaterial && N.uniformsNeedUpdate === !0 && (Hi.upload(D, sa(pe), ct, q), N.uniformsNeedUpdate = !1), N.isSpriteMaterial && Qe.setValue(D, "center", O.center), Qe.setValue(D, "modelViewMatrix", O.modelViewMatrix), Qe.setValue(D, "normalMatrix", O.normalMatrix), Qe.setValue(D, "modelMatrix", O.matrixWorld), N.uniformsGroups !== void 0) {
        const it = N.uniformsGroups;
        for (let on = 0, bn = it.length; on < bn; on++) {
          const ca = it[on];
          te.update(ca, Dt), te.bind(ca, Dt);
        }
      }
      return Dt;
    }
    function Ws(x, C) {
      x.ambientLightColor.needsUpdate = C, x.lightProbe.needsUpdate = C, x.sunLights.needsUpdate = C, x.sunLightShadows.needsUpdate = C, x.directionalLights.needsUpdate = C, x.directionalLightShadows.needsUpdate = C, x.pointLights.needsUpdate = C, x.pointLightShadows.needsUpdate = C, x.spotLights.needsUpdate = C, x.spotLightShadows.needsUpdate = C, x.rectAreaLights.needsUpdate = C, x.hemisphereLights.needsUpdate = C;
    }
    function Xs(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return J;
    }, this.getActiveMipmapLevel = function() {
      return W;
    }, this.getRenderTarget = function() {
      return ne;
    }, this.setRenderTargetTextures = function(x, C, H) {
      const N = z.get(x);
      N.__autoAllocateDepthBuffer = x.resolveDepthBuffer === !1, N.__autoAllocateDepthBuffer === !1 && (N.__useRenderToTexture = !1), z.get(x.texture).__webglTexture = C, z.get(x.depthTexture).__webglTexture = N.__autoAllocateDepthBuffer ? void 0 : H, N.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(x, C) {
      const H = z.get(x);
      H.__webglFramebuffer = C, H.__useDefaultFramebuffer = C === void 0;
    }, this.setRenderTarget = function(x, C = 0, H = 0) {
      ne = x, J = C, W = H;
      let N = null, O = !1, de = !1;
      if (x) {
        const fe = z.get(x);
        if (fe.__useDefaultFramebuffer !== void 0) {
          m.bindFramebuffer(D.FRAMEBUFFER, fe.__webglFramebuffer), ee.copy(x.viewport), ve.copy(x.scissor), be = x.scissorTest, m.viewport(ee), m.scissor(ve), m.setScissorTest(be), X = -1;
          return;
        } else if (fe.__webglFramebuffer === void 0)
          q.setupRenderTarget(x);
        else if (fe.__hasExternalTextures)
          q.rebindTextures(x, z.get(x.texture).__webglTexture, z.get(x.depthTexture).__webglTexture);
        else if (x.depthBuffer) {
          const Fe = x.depthTexture;
          if (fe.__boundDepthTexture !== Fe) {
            if (Fe !== null && z.has(Fe) && (x.width !== Fe.image.width || x.height !== Fe.image.height))
              throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");
            q.setupDepthRenderbuffer(x);
          }
        }
        const xe = x.texture;
        (xe.isData3DTexture || xe.isDataArrayTexture || xe.isCompressedArrayTexture) && (de = !0);
        const Ee = z.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(Ee[C]) ? N = Ee[C][H] : N = Ee[C], O = !0) : x.samples > 0 && q.useMultisampledRTT(x) === !1 ? N = z.get(x).__webglMultisampledFramebuffer : Array.isArray(Ee) ? N = Ee[H] : N = Ee, ee.copy(x.viewport), ve.copy(x.scissor), be = x.scissorTest;
      } else
        ee.copy(me).multiplyScalar(j).floor(), ve.copy(Ue).multiplyScalar(j).floor(), be = ht;
      if (H !== 0 && (N = V), m.bindFramebuffer(D.FRAMEBUFFER, N) && m.drawBuffers(x, N), m.viewport(ee), m.scissor(ve), m.setScissorTest(be), O) {
        const fe = z.get(x.texture);
        D.framebufferTexture2D(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_CUBE_MAP_POSITIVE_X + C, fe.__webglTexture, H);
      } else if (de) {
        const fe = C;
        for (let xe = 0; xe < x.textures.length; xe++) {
          const Ee = z.get(x.textures[xe]);
          D.framebufferTextureLayer(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0 + xe, Ee.__webglTexture, H, fe);
        }
      } else if (x !== null && H !== 0) {
        const fe = z.get(x.texture);
        D.framebufferTexture2D(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_2D, fe.__webglTexture, H);
      }
      X = -1;
    };
    function la(x) {
      const C = z.get(x);
      return (C.__readFormat !== x.format || C.__readType !== x.type) && (C.__readFormat = x.format, C.__readType = x.type, C.__formatReadable = E.textureFormatReadable(x.format), C.__typeReadable = E.textureTypeReadable(x.type)), C;
    }
    this.readRenderTargetPixels = function(x, C, H, N, O, de, ge, fe = 0) {
      if (!(x && x.isWebGLRenderTarget)) {
        qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let xe = z.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && ge !== void 0 && (xe = xe[ge]), xe) {
        m.bindFramebuffer(D.FRAMEBUFFER, xe);
        try {
          const Ee = x.textures[fe], Fe = Ee.format, Oe = Ee.type;
          x.textures.length > 1 && D.readBuffer(D.COLOR_ATTACHMENT0 + fe);
          const Se = la(Ee);
          if (Se.__formatReadable === !1) {
            qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (Se.__typeReadable === !1) {
            qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          C >= 0 && C <= x.width - N && H >= 0 && H <= x.height - O && D.readPixels(C, H, N, O, le.convert(Fe), le.convert(Oe), de);
        } finally {
          const Ee = ne !== null ? z.get(ne).__webglFramebuffer : null;
          m.bindFramebuffer(D.FRAMEBUFFER, Ee);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, C, H, N, O, de, ge, fe = 0) {
      if (!(x && x.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let xe = z.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && ge !== void 0 && (xe = xe[ge]), xe)
        if (C >= 0 && C <= x.width - N && H >= 0 && H <= x.height - O) {
          m.bindFramebuffer(D.FRAMEBUFFER, xe);
          const Ee = x.textures[fe], Fe = Ee.format, Oe = Ee.type;
          x.textures.length > 1 && D.readBuffer(D.COLOR_ATTACHMENT0 + fe);
          const Se = la(Ee);
          if (Se.__formatReadable === !1)
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (Se.__typeReadable === !1)
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const Ze = D.createBuffer();
          D.bindBuffer(D.PIXEL_PACK_BUFFER, Ze), D.bufferData(D.PIXEL_PACK_BUFFER, de.byteLength, D.STREAM_READ), D.readPixels(C, H, N, O, le.convert(Fe), le.convert(Oe), 0), D.bindBuffer(D.PIXEL_PACK_BUFFER, null);
          const ft = ne !== null ? z.get(ne).__webglFramebuffer : null;
          m.bindFramebuffer(D.FRAMEBUFFER, ft);
          const rt = D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return D.flush(), await $s(D, rt, 4), D.bindBuffer(D.PIXEL_PACK_BUFFER, Ze), D.getBufferSubData(D.PIXEL_PACK_BUFFER, 0, de), D.bindBuffer(D.PIXEL_PACK_BUFFER, null), D.deleteBuffer(Ze), D.deleteSync(rt), de;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(x, C = null, H = 0) {
      const N = Math.pow(2, -H), O = Math.floor(x.image.width * N), de = Math.floor(x.image.height * N), ge = C !== null ? C.x : 0, fe = C !== null ? C.y : 0;
      q.setTexture2D(x, 0), D.copyTexSubImage2D(D.TEXTURE_2D, H, 0, 0, ge, fe, O, de), m.unbindTexture();
    }, this.copyTextureToTexture = function(x, C, H = null, N = null, O = 0, de = 0) {
      let ge, fe, xe, Ee, Fe, Oe, Se, Ze, ft;
      const rt = x.isCompressedTexture ? x.mipmaps[de] : x.image;
      if (H !== null)
        ge = H.max.x - H.min.x, fe = H.max.y - H.min.y, xe = H.isBox3 ? H.max.z - H.min.z : 1, Ee = H.min.x, Fe = H.min.y, Oe = H.isBox3 ? H.min.z : 0;
      else {
        const ct = Math.pow(2, -O);
        ge = Math.floor(rt.width * ct), fe = Math.floor(rt.height * ct), x.isDataArrayTexture ? xe = rt.depth : x.isData3DTexture ? xe = Math.floor(rt.depth * ct) : xe = 1, Ee = 0, Fe = 0, Oe = 0;
      }
      N !== null ? (Se = N.x, Ze = N.y, ft = N.z) : (Se = 0, Ze = 0, ft = 0);
      const je = le.convert(C.format), xt = le.convert(C.type);
      let pe;
      C.isData3DTexture ? (q.setTexture3D(C, 0), pe = D.TEXTURE_3D) : C.isDataArrayTexture || C.isCompressedArrayTexture ? (q.setTexture2DArray(C, 0), pe = D.TEXTURE_2D_ARRAY) : (q.setTexture2D(C, 0), pe = D.TEXTURE_2D), m.activeTexture(D.TEXTURE0), m.pixelStorei(D.UNPACK_FLIP_Y_WEBGL, C.flipY), m.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL, C.premultiplyAlpha), m.pixelStorei(D.UNPACK_ALIGNMENT, C.unpackAlignment);
      const Et = m.getParameter(D.UNPACK_ROW_LENGTH), He = m.getParameter(D.UNPACK_IMAGE_HEIGHT), Dt = m.getParameter(D.UNPACK_SKIP_PIXELS), Xt = m.getParameter(D.UNPACK_SKIP_ROWS), an = m.getParameter(D.UNPACK_SKIP_IMAGES);
      m.pixelStorei(D.UNPACK_ROW_LENGTH, rt.width), m.pixelStorei(D.UNPACK_IMAGE_HEIGHT, rt.height), m.pixelStorei(D.UNPACK_SKIP_PIXELS, Ee), m.pixelStorei(D.UNPACK_SKIP_ROWS, Fe), m.pixelStorei(D.UNPACK_SKIP_IMAGES, Oe);
      const Tn = x.isDataArrayTexture || x.isData3DTexture, Qe = C.isDataArrayTexture || C.isData3DTexture;
      if (x.isDepthTexture) {
        const ct = z.get(x), sn = z.get(C), it = z.get(ct.__renderTarget), on = z.get(sn.__renderTarget);
        m.bindFramebuffer(D.READ_FRAMEBUFFER, it.__webglFramebuffer), m.bindFramebuffer(D.DRAW_FRAMEBUFFER, on.__webglFramebuffer);
        for (let bn = 0; bn < xe; bn++)
          Tn && (D.framebufferTextureLayer(D.READ_FRAMEBUFFER, D.COLOR_ATTACHMENT0, z.get(x).__webglTexture, O, Oe + bn), D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER, D.COLOR_ATTACHMENT0, z.get(C).__webglTexture, de, ft + bn)), D.blitFramebuffer(Ee, Fe, ge, fe, Se, Ze, ge, fe, D.DEPTH_BUFFER_BIT, D.NEAREST);
        m.bindFramebuffer(D.READ_FRAMEBUFFER, null), m.bindFramebuffer(D.DRAW_FRAMEBUFFER, null);
      } else if (O !== 0 || x.isRenderTargetTexture || z.has(x)) {
        const ct = z.get(x), sn = z.get(C);
        m.bindFramebuffer(D.READ_FRAMEBUFFER, I), m.bindFramebuffer(D.DRAW_FRAMEBUFFER, G);
        for (let it = 0; it < xe; it++)
          Tn ? D.framebufferTextureLayer(D.READ_FRAMEBUFFER, D.COLOR_ATTACHMENT0, ct.__webglTexture, O, Oe + it) : D.framebufferTexture2D(D.READ_FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_2D, ct.__webglTexture, O), Qe ? D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER, D.COLOR_ATTACHMENT0, sn.__webglTexture, de, ft + it) : D.framebufferTexture2D(D.DRAW_FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_2D, sn.__webglTexture, de), O !== 0 ? D.blitFramebuffer(Ee, Fe, ge, fe, Se, Ze, ge, fe, D.COLOR_BUFFER_BIT, D.NEAREST) : Qe ? D.copyTexSubImage3D(pe, de, Se, Ze, ft + it, Ee, Fe, ge, fe) : D.copyTexSubImage2D(pe, de, Se, Ze, Ee, Fe, ge, fe);
        m.bindFramebuffer(D.READ_FRAMEBUFFER, null), m.bindFramebuffer(D.DRAW_FRAMEBUFFER, null);
      } else
        Qe ? x.isDataTexture || x.isData3DTexture ? D.texSubImage3D(pe, de, Se, Ze, ft, ge, fe, xe, je, xt, rt.data) : C.isCompressedArrayTexture ? D.compressedTexSubImage3D(pe, de, Se, Ze, ft, ge, fe, xe, je, rt.data) : D.texSubImage3D(pe, de, Se, Ze, ft, ge, fe, xe, je, xt, rt) : x.isDataTexture ? D.texSubImage2D(D.TEXTURE_2D, de, Se, Ze, ge, fe, je, xt, rt.data) : x.isCompressedTexture ? D.compressedTexSubImage2D(D.TEXTURE_2D, de, Se, Ze, rt.width, rt.height, je, rt.data) : D.texSubImage2D(D.TEXTURE_2D, de, Se, Ze, ge, fe, je, xt, rt);
      m.pixelStorei(D.UNPACK_ROW_LENGTH, Et), m.pixelStorei(D.UNPACK_IMAGE_HEIGHT, He), m.pixelStorei(D.UNPACK_SKIP_PIXELS, Dt), m.pixelStorei(D.UNPACK_SKIP_ROWS, Xt), m.pixelStorei(D.UNPACK_SKIP_IMAGES, an), de === 0 && C.generateMipmaps && D.generateMipmap(pe), m.unbindTexture();
    }, this.initRenderTarget = function(x) {
      z.get(x).__webglFramebuffer === void 0 && q.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? q.setTextureCube(x, 0) : x.isData3DTexture ? q.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? q.setTexture2DArray(x, 0) : q.setTexture2D(x, 0), m.unbindTexture();
    }, this.resetState = function() {
      J = 0, W = 0, ne = null, m.reset(), he.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  /**
   * Defines the coordinate system of the renderer.
   *
   * In `WebGLRenderer`, the value is always `WebGLCoordinateSystem`.
   *
   * @type {WebGLCoordinateSystem|WebGPUCoordinateSystem}
   * @default WebGLCoordinateSystem
   * @readonly
   */
  get coordinateSystem() {
    return 2e3;
  }
  /**
   * Defines the output color space of the renderer.
   *
   * @type {SRGBColorSpace|LinearSRGBColorSpace}
   * @default SRGBColorSpace
   */
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = ke._getDrawingBufferColorSpace(e), t.unpackColorSpace = ke._getUnpackColorSpace();
  }
}
const Rs = new Nt();
Rs.setAttribute("position", new Ht([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
const Xd = new pi(-1, 1, 1, -1, 0, 1), qd = (
  /* glsl */
  `
in vec3 position;
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`
);
function nn(i, e = {}, t = {}) {
  return new Xr({
    glslVersion: Yn,
    vertexShader: qd,
    fragmentShader: i,
    uniforms: e,
    depthTest: !1,
    depthWrite: !1,
    ...t
  });
}
class qn {
  constructor(e) {
    this.mesh = new Pt(Rs, e), this.mesh.frustumCulled = !1;
  }
  get material() {
    return this.mesh.material;
  }
  set material(e) {
    this.mesh.material = e;
  }
  render(e, t) {
    e.setRenderTarget(t), e.render(this.mesh, Xd);
  }
}
const Kt = 256, Yd = 8, ai = [600, 85, 12, 2.1], Wi = 9.81, Kd = 74e-6, Br = 300, tr = (
  /* glsl */
  `
precision highp float;
precision highp int;
#define N ${Kt}
#define PI 3.14159265359
#define G ${Wi.toFixed(2)}
#define ST ${Kd.toExponential()}
vec2 cmul(vec2 a, vec2 b) { return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x); }
float omega(float k) { return sqrt(G * k + ST * k * k * k); }
`
), Zd = tr + /* glsl */
`
uniform vec4 uSpecA[2]; // scale, angle, spreadBlend, swell
uniform vec4 uSpecB[2]; // alpha, peakOmega, gamma, shortWavesFade
uniform vec4 uLength;
uniform vec4 uCut;      // c0 hi, c1 hi, c2 hi, -
uniform float uCapFade; // short-wave fade for cascade 3 (cascades 0-2 use uSpecB.w)
uniform uint uSeed;
out vec4 outColor;

uvec2 pcg2d(uvec2 v) {
  v = v * 1664525u + 1013904223u;
  v.x += v.y * 1664525u; v.y += v.x * 1664525u;
  v ^= v >> 16u;
  v.x += v.y * 1664525u; v.y += v.x * 1664525u;
  v ^= v >> 16u;
  return v;
}

vec2 gauss(ivec2 id, int c) {
  uvec2 h = pcg2d(uvec2(id) + uvec2(uint(c) * 7919u, uint(c) * 104729u) + uSeed);
  float u1 = (float(h.x) + 1.0) / 4294967296.0;
  float u2 = float(h.y) / 4294967296.0;
  float r = sqrt(-2.0 * log(u1));
  return r * vec2(cos(2.0 * PI * u2), sin(2.0 * PI * u2));
}

float jonswap(float w, vec4 a, vec4 b) {
  float wp = b.y;
  float sigma = w <= wp ? 0.07 : 0.09;
  float r = exp(-(w - wp) * (w - wp) / (2.0 * sigma * sigma * wp * wp));
  float iw = 1.0 / w;
  float q = wp * iw;
  return a.x * b.x * G * G * iw * iw * iw * iw * iw * exp(-1.25 * q * q * q * q) * pow(b.z, r);
}

float normalisation(float s) {
  float s2 = s * s, s3 = s2 * s, s4 = s3 * s;
  if (s < 5.0) return -0.000564 * s4 + 0.00776 * s3 - 0.044 * s2 + 0.192 * s + 0.163;
  return -4.80e-08 * s4 + 1.07e-05 * s3 - 9.53e-04 * s2 + 5.90e-02 * s + 3.93e-01;
}

float directional(float theta, float w, vec4 a, vec4 b) {
  float x = w / b.y;
  float s = x > 1.0 ? 9.77 * pow(x, -2.5) : 6.97 * pow(x, 5.0);
  s += 16.0 * tanh(min(x, 20.0)) * a.w * a.w;
  float t = theta - a.y;
  float cosine2s = normalisation(s) * pow(abs(cos(0.5 * t)), 2.0 * s);
  return mix(2.0 / PI * cos(t) * cos(t), cosine2s, a.z);
}

vec2 h0(ivec2 id, int c) {
  float L = uLength[c];
  float dk = 2.0 * PI / L;
  vec2 k = vec2(id - N / 2) * dk;
  float kl = length(k);
  float lo = c == 0 ? 1e-4 : uCut[c - 1];
  float hi = c == 3 ? 1e4 : uCut[c];
  if (kl < lo || kl > hi) return vec2(0.0);
  float w = omega(kl);
  float dwdk = (G + 3.0 * ST * kl * kl) / (2.0 * w);
  float theta = atan(k.y, k.x);
  float S = 0.0;
  for (int i = 0; i < 2; i++) {
    if (uSpecA[i].x <= 0.0) continue;
    float fade = c == 3 ? uCapFade : uSpecB[i].w;
    S += jonswap(w, uSpecA[i], uSpecB[i]) * directional(theta, w, uSpecA[i], uSpecB[i])
       * exp(-fade * fade * kl * kl);
  }
  return gauss(id, c) * sqrt(2.0 * S * dwdk / kl * dk * dk);
}

void main() {
  ivec2 p = ivec2(gl_FragCoord.xy);
  int c = p.y / N;
  ivec2 id = ivec2(p.x, p.y - c * N);
  vec2 a = h0(id, c);
  vec2 b = h0((N - id) % N, c);
  outColor = vec4(a, b.x, -b.y); // h0(k), conj(h0(-k))
}`, $d = tr + /* glsl */
`
uniform highp sampler2D uH0;
uniform vec4 uLength;
uniform float uTime;
layout(location = 0) out vec4 out0;
layout(location = 1) out vec4 out1;

// two real fields packed as one complex spectrum: IFFT(A + iB) = a + ib
vec2 pack2(vec2 a, vec2 b) { return vec2(a.x - b.y, a.y + b.x); }

void main() {
  ivec2 p = ivec2(gl_FragCoord.xy);
  int c = p.y / N;
  vec2 k = vec2(ivec2(p.x, p.y - c * N) - N / 2) * (2.0 * PI / uLength[c]);
  float kl = length(k);
  float ik = kl > 1e-6 ? 1.0 / kl : 0.0;
  const float W0 = 2.0 * PI / ${Br.toFixed(1)};
  // ω = n·W0; phase reduced to [0, 2π) before sin/cos (the capillary cascade reaches ω ≈ 130)
  float ph = 2.0 * PI * fract(floor(omega(kl) / W0) * (uTime / ${Br.toFixed(1)}));
  vec2 e = vec2(cos(ph), sin(ph));
  vec4 h0 = texelFetch(uH0, p, 0);
  vec2 h = cmul(h0.xy, e) + cmul(h0.zw, vec2(e.x, -e.y));
  vec2 ih = vec2(-h.y, h.x);

  vec2 dx = ih * k.x * ik, dz = ih * k.y * ik;
  vec2 dxdx = -h * k.x * k.x * ik, dzdz = -h * k.y * k.y * ik, dxdz = -h * k.x * k.y * ik;
  vec2 dydx = ih * k.x, dydz = ih * k.y;

  out0 = vec4(pack2(dx, dz), pack2(h, dxdz));
  out1 = vec4(pack2(dydx, dydz), pack2(dxdx, dzdz));
}`, Jd = tr + /* glsl */
`
uniform highp sampler2D uIn0;
uniform highp sampler2D uIn1;
uniform int uSub;      // sub-transform size 2..N
uniform int uVertical;
layout(location = 0) out vec4 out0;
layout(location = 1) out vec4 out1;

void main() {
  ivec2 p = ivec2(gl_FragCoord.xy);
  int i = uVertical == 1 ? p.y % N : p.x;
  int hs = uSub >> 1;
  int e = (i / uSub) * hs + (i & (hs - 1));
  ivec2 pe, po;
  if (uVertical == 1) { int base = p.y - i; pe = ivec2(p.x, base + e); po = ivec2(p.x, base + e + N / 2); }
  else { pe = ivec2(e, p.y); po = ivec2(e + N / 2, p.y); }
  float a = 2.0 * PI * float(i & (uSub - 1)) / float(uSub);
  vec2 tw = vec2(cos(a), sin(a));
  vec4 e0 = texelFetch(uIn0, pe, 0), o0 = texelFetch(uIn0, po, 0);
  vec4 e1 = texelFetch(uIn1, pe, 0), o1 = texelFetch(uIn1, po, 0);
  out0 = vec4(e0.xy + cmul(tw, o0.xy), e0.zw + cmul(tw, o0.zw));
  out1 = vec4(e1.xy + cmul(tw, o1.xy), e1.zw + cmul(tw, o1.zw));
}`, Qd = tr + /* glsl */
`
uniform highp sampler2D uIn0;
uniform highp sampler2D uIn1;
uniform sampler2D uPrev;
uniform int uCascade;
uniform float uLambda;
uniform float uDt;
uniform float uFoamRecovery;
layout(location = 0) out vec4 outDisp;
layout(location = 1) out vec4 outSlope;

void main() {
  ivec2 id = ivec2(gl_FragCoord.xy);
  ivec2 p = id + ivec2(0, uCascade * N);
  // undo the centred-k frequency shift
  float s = ((id.x + id.y) & 1) == 0 ? 1.0 : -1.0;
  vec4 a = texelFetch(uIn0, p, 0) * s; // Dx, Dz, Dy, Dxz
  vec4 b = texelFetch(uIn1, p, 0) * s; // Dyx, Dyz, Dxx, Dzz
  float dxx = uLambda * b.z, dzz = uLambda * b.w, dxz = uLambda * a.w;
  float jac = (1.0 + dxx) * (1.0 + dzz) - dxz * dxz;
  vec2 slope = b.xy / max(vec2(1.0 + dxx, 1.0 + dzz), vec2(0.2));
  float prev = texelFetch(uPrev, id, 0).w;
  // foam follows the jacobian down instantly and recovers at a dt-based rate
  float turb = min(jac, prev + uDt * uFoamRecovery / max(jac, 0.5));
  outDisp = vec4(uLambda * a.x, a.z, uLambda * a.y, turb);
  outSlope = vec4(slope, slope * slope);
}`;
function ns(i, e) {
  const t = e * 1e3;
  return {
    alpha: 0.076 * Math.pow(Wi * t / (i * i), -0.22),
    peakOmega: 22 * Math.pow(i * t / (Wi * Wi), -0.33)
  };
}
const Cs = () => ({
  windSpeed: 9,
  windDirection: 20,
  fetchKm: 120,
  spreadBlend: 0.85,
  windSwell: 0.25,
  gamma: 3.3,
  shortWavesFade: 0.04,
  // cascade 3 only (calibration knob): 0.004 is the bare capillary spectrum, but its
  // mean square slope (0.145) is 3x Cox-Munk for the whole sea and turns the water to
  // brushed metal; 0.08 keeps fine ripples up close and the water glossy
  capillaryFade: 0.08,
  waveScale: 1,
  swellScale: 0.7,
  swellWindSpeed: 7,
  swellDirection: -15,
  swellFetchKm: 900,
  swellSwell: 1,
  choppiness: 0.85,
  foamRecovery: 0.7,
  timeScale: 1
});
class jd {
  constructor(e, t = Cs()) {
    this.renderer = e, this.params = t, this.time = 0, this.dirty = !0, this.parity = 0;
    const n = {
      type: 1015,
      minFilter: 1003,
      magFilter: 1003,
      depthBuffer: !1,
      generateMipmaps: !1
    }, r = Kt * ai.length;
    this.h0RT = new st(Kt, r, n);
    const a = { ...n, type: 1016, count: 2 };
    this.ping = new st(Kt, r, a), this.pong = new st(Kt, r, a);
    const s = {
      type: 1016,
      minFilter: 1008,
      magFilter: 1006,
      wrapS: 1e3,
      wrapT: 1e3,
      generateMipmaps: !0,
      anisotropy: e.capabilities.getMaxAnisotropy(),
      depthBuffer: !1,
      count: 2
    };
    this.out = ai.map(() => [new st(Kt, Kt, s), new st(Kt, Kt, s)]);
    const o = e.getClearColor(new We()), c = e.getClearAlpha();
    e.setClearColor(0, 1);
    for (const f of this.out) for (const d of f)
      e.setRenderTarget(d), e.clear(!0, !1, !1);
    e.setClearColor(o, c), e.setRenderTarget(null);
    const l = new ze(...ai);
    this.initMat = nn(Zd, {
      uSpecA: { value: [new ze(), new ze()] },
      uSpecB: { value: [new ze(), new ze()] },
      uLength: { value: l },
      // cascade c owns [cut[c-1], cut[c]); each cut sits at 6 fundamentals of the next cascade
      uCut: { value: new ze(...ai.slice(1).map((f) => 2 * Math.PI / f * 6), 0) },
      uCapFade: { value: 0 },
      uSeed: { value: 1337 }
    }), this.evolveMat = nn($d, {
      uH0: { value: this.h0RT.texture },
      uLength: { value: l },
      uTime: { value: 0 }
    }), this.fftMat = nn(Jd, {
      uIn0: { value: null },
      uIn1: { value: null },
      uSub: { value: 2 },
      uVertical: { value: 0 }
    }), this.assembleMat = nn(Qd, {
      uIn0: { value: null },
      uIn1: { value: null },
      uPrev: { value: null },
      uCascade: { value: 0 },
      uLambda: { value: 1 },
      uDt: { value: 0 },
      uFoamRecovery: { value: 0.45 }
    }), this.quad = new qn(this.initMat), this.lengths = ai, this.displacement = this.out.map((f) => f[0].textures[0]), this.slope = this.out.map((f) => f[0].textures[1]);
  }
  updateSpectrum() {
    const e = this.params, t = this.initMat.uniforms, n = ns(e.windSpeed, e.fetchKm), r = ns(e.swellWindSpeed, e.swellFetchKm), a = ci.degToRad;
    t.uSpecA.value[0].set(e.waveScale, a(e.windDirection), e.spreadBlend, e.windSwell), t.uSpecB.value[0].set(n.alpha, n.peakOmega, e.gamma, e.shortWavesFade), t.uSpecA.value[1].set(e.swellScale * e.waveScale, a(e.swellDirection), 1, e.swellSwell), t.uSpecB.value[1].set(r.alpha, r.peakOmega, e.gamma, e.shortWavesFade), t.uCapFade.value = e.capillaryFade, this.quad.material = this.initMat, this.quad.render(this.renderer, this.h0RT), this.dirty = !1;
  }
  update(e, t) {
    const n = this.params;
    t == null || t.begin("sim.evolve"), this.dirty && this.updateSpectrum(), e *= n.timeScale, this.time = (this.time + e) % Br;
    const r = this.renderer, a = this.quad;
    this.evolveMat.uniforms.uTime.value = this.time, a.material = this.evolveMat, a.render(r, this.ping), t == null || t.begin("sim.fft");
    let s = this.ping, o = this.pong;
    const c = this.fftMat.uniforms;
    a.material = this.fftMat;
    for (let d = 0; d < 2; d++) {
      c.uVertical.value = d;
      for (let u = 1; u <= Yd; u++)
        c.uSub.value = 1 << u, c.uIn0.value = s.textures[0], c.uIn1.value = s.textures[1], a.render(r, o), [s, o] = [o, s];
    }
    t == null || t.begin("sim.assemble");
    const l = this.assembleMat.uniforms;
    l.uIn0.value = s.textures[0], l.uIn1.value = s.textures[1], l.uLambda.value = n.choppiness, l.uDt.value = e, l.uFoamRecovery.value = n.foamRecovery, a.material = this.assembleMat;
    const f = this.parity ^ 1;
    for (let d = 0; d < this.out.length; d++)
      l.uCascade.value = d, l.uPrev.value = this.out[d][this.parity].textures[0], a.render(r, this.out[d][f]), this.displacement[d] = this.out[d][f].textures[0], this.slope[d] = this.out[d][f].textures[1];
    this.parity = f;
  }
}
const eh = (
  /* glsl */
  `
uniform highp sampler2DShadow uFloatShadow;
uniform mat4 uFloatShadowMatrix;
uniform float uFloatShadowBias;   // depth units; 0 = no casters this frame
float floatShadow(vec3 p) {
  if (uFloatShadowBias <= 0.0) return 1.0;
  vec3 sc = (uFloatShadowMatrix * vec4(p, 1.0)).xyz;
  if (any(lessThan(sc, vec3(0.0))) || any(greaterThan(sc, vec3(1.0)))) return 1.0;
  return texture(uFloatShadow, vec3(sc.xy, sc.z - uFloatShadowBias));
}`
), Gn = new k();
class th {
  constructor(e = 1024) {
    const t = new mn(e, e, 1015);
    t.compareFunction = 515, t.minFilter = t.magFilter = 1006, this.target = new st(e, e, { format: 1028, depthTexture: t, generateMipmaps: !1 }), this.camera = new pi(), this.material = new Hr({ colorWrite: !1, side: 2 }), this.uniforms = {
      uFloatShadow: { value: t },
      uFloatShadowMatrix: { value: new lt() },
      uFloatShadowBias: { value: 0 }
    };
  }
  // root: a Scene holding only the floaters; bodies: [{ pos, radius }]; sunDir: towards the sun
  update(e, t, n, r) {
    const a = this.uniforms;
    if (this.ready || (this.clear(e), this.ready = !0), !n.length || r.y <= 0.01) {
      a.uFloatShadowBias.value = 0;
      return;
    }
    Gn.set(0, 0, 0);
    for (const l of n) Gn.add(l.pos);
    Gn.divideScalar(n.length);
    let s = 1;
    for (const l of n) s = Math.max(s, l.pos.distanceTo(Gn) + l.radius);
    const o = this.camera;
    o.left = o.bottom = -s, o.right = o.top = s, o.near = 1, o.far = s + 3e3, o.position.copy(Gn).addScaledVector(r, s + 20), o.lookAt(Gn), o.updateProjectionMatrix(), o.updateMatrixWorld(), a.uFloatShadowMatrix.value.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1).multiply(o.projectionMatrix).multiply(o.matrixWorldInverse), a.uFloatShadowBias.value = 0.03 / (o.far - o.near);
    const c = e.getRenderTarget();
    t.overrideMaterial = this.material, e.setRenderTarget(this.target), e.clear(!1, !0, !1), e.render(t, o), t.overrideMaterial = null, e.setRenderTarget(c);
  }
  clear(e) {
    const t = e.getRenderTarget();
    e.setRenderTarget(this.target), e.clear(!1, !0, !1), e.setRenderTarget(t);
  }
}
const Gi = 384, nh = 60, Xi = 1, Ps = 3e3, ih = 6e4;
function is(i) {
  const e = 1 + 2 * Math.PI / i, t = [];
  for (let o = Xi / 16; o < Xi * 0.99; o *= 1.12) t.push(o);
  for (let o = Xi; o < Ps; o *= e) t.push(o);
  t.push(ih);
  const n = new Float32Array((1 + t.length * i) * 3);
  let r = 3;
  for (const o of t)
    for (let c = 0; c < i; c++) {
      const l = c / i * Math.PI * 2;
      n[r++] = Math.cos(l) * o, n[r++] = 0, n[r++] = Math.sin(l) * o;
    }
  const a = [];
  for (let o = 0; o < i; o++) a.push(0, 1 + (o + 1) % i, 1 + o);
  for (let o = 0; o < t.length - 1; o++) {
    const c = 1 + o * i, l = c + i;
    for (let f = 0; f < i; f++) {
      const d = (f + 1) % i;
      a.push(c + f, c + d, l + f, c + d, l + d, l + f);
    }
  }
  const s = new Nt();
  return s.setAttribute("position", new Vt(n, 3)), s.setIndex(new Vt(new Uint32Array(a), 1)), s;
}
const rh = (
  /* glsl */
  `
uniform sampler2D uShore;
uniform sampler2D uTravel;   // wave travel time from the coast (s), propagation dir xz, shoaling
uniform float uShoreExtent;
uniform float uTime;
uniform vec4 uShoreWave;   // amplitude, wavelength, speed, steepness
uniform vec2 uSwellDir;    // propagation direction of the swell (xz)

vec4 shoreSample(vec2 xz) {
  vec2 uv = xz / uShoreExtent + 0.5;
  if (any(lessThan(uv, vec2(0.0))) || any(greaterThan(uv, vec2(1.0)))) return vec4(-60.0, 1e4, 0.0, 0.0);
  return textureLod(uShore, uv, 0.0);
}
vec4 travelSample(vec2 xz) {
  vec2 uv = xz / uShoreExtent + 0.5;
  if (any(lessThan(uv, vec2(0.0))) || any(greaterThan(uv, vec2(1.0)))) return vec4(0.0);
  return textureLod(uTravel, uv, 0.0);
}

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + 1.0), u.x), u.y);
}

// phase offset along the coast, the slowly drifting sets, and how much of the swell a
// coast facing dir receives
float shoreNoisePhase(vec2 xz) { return vnoise(xz * 0.0042) * 9.0 + vnoise(xz * 0.011 + 7.0) * 2.5; }
float shoreGroup(vec2 xz) { return 0.45 + 0.55 * vnoise(xz * 0.004 + vec2(uTime * 0.021, -uTime * 0.017)); }
float shoreExposure(vec2 dir) { return mix(0.25, 1.0, smoothstep(-0.3, 0.7, dot(dir, uSwellDir))); }
vec2 shoreDir(vec4 sh, vec4 tr) { return dot(tr.yz, tr.yz) > 0.25 ? normalize(tr.yz) : -sh.zw / max(length(sh.zw), 1e-3); }
`
), Ds = (
  /* glsl */
  `
#define N_TEX ${Kt.toFixed(1)}
#define PI 3.14159265359
uniform sampler2D uDisp0, uDisp1, uDisp2;           // the capillary cascade is slopes only
uniform sampler2D uSlope0, uSlope1, uSlope2, uSlope3;
uniform vec4 uLength;
uniform vec2 uWaveDamp;    // depth where long swell fully exists, chop strength in shallows
uniform vec4 uImpact[8];      // x, z, age (s), amplitude (m); amplitude 0 = free slot
uniform float uImpactSize[8]; // splash radius (m)
${rh}

// Ripple rings from objects hitting the water (Cauchy-Poisson): by stationary phase a
// point impulse gives local wavenumber k = g t^2 / (4 r^2) at radius r and phase k r, so
// long waves race ahead and short ones trail inside. A splash of radius L excites
// ~ (kL)^2 exp(-(kL)^2); kMax band-limits to what the mesh or pixel can show.
// Returns (height, dh/dx, dh/dz).
vec3 impactWaves(vec2 xz, float kMax) {
  vec3 o = vec3(0.0);
  for (int i = 0; i < 8; i++) {
    vec4 e = uImpact[i];
    if (e.w <= 0.0) continue;
    vec2 dv = xz - e.xy;
    float r = length(dv) + 1e-3, L = uImpactSize[i];
    float k = 9.81 * e.z * e.z / (4.0 * r * r);
    float kl2 = k * k * L * L;
    float amp = e.w * 2.72 * kl2 * exp(-kl2 - k * k / (kMax * kMax) - 0.12 * e.z) * L / (L + r);
    float ph = k * r;
    o.x += amp * cos(ph);
    o.yz += dv / r * (amp * k * sin(ph));
  }
  return o;
}

// FFT cascade weights by water depth: long swell is replaced by shore waves in the
// shallows, chop survives almost to the beach.
vec3 cascadeDamp(float depth) {
  float swell = smoothstep(2.0, uWaveDamp.x, depth);
  float chop = smoothstep(-0.4, 2.0, depth) * mix(uWaveDamp.y, 1.0, smoothstep(0.0, 10.0, depth));
  return vec3(swell, chop, chop);
}

// Travelling breakers on the eikonal travel-time field (shoreMap.js): phase = w (tau + t)
// with local wavenumber w / sqrt(g depth), so fronts slow down, bunch up and bend around
// the bathymetry on their way in. Gerstner push along the propagation direction, Green's
// law + ray-tube shoaling, breaking limit A <= 0.42*depth.
// Breaking crests pitch forward of their base (plunging lip), glow where thin (lip) and
// leave lace behind in the surf zone (residual).
// wave0 = (amplitude, k, omega, phase) and breaking (0..1) of the main train, for spray
struct Shore { vec3 disp; vec2 slope; float foam; vec4 wave0; float breaking0; vec2 dir; float lip; float residual; };
Shore shoreWaves(vec2 xz, vec4 sh) {
  Shore o = Shore(vec3(0.0), vec2(0.0), 0.0, vec4(0.0), 0.0, vec2(0.0), 0.0, 0.0);
  float depth = -sh.x, sdf = sh.y;
  float gl = length(sh.zw);
  float env = smoothstep(180.0, 70.0, sdf) * smoothstep(0.35, 0.8, gl) * smoothstep(-0.9, 0.5, depth);
  if (env <= 0.0 || uShoreWave.x <= 0.0) return o;
  vec4 tr = travelSample(xz);
  vec2 dir = shoreDir(sh, tr);
  o.dir = dir;
  // coasts facing the swell get the big sets, lee shores only small ones
  env *= shoreExposure(dir);
  float shoal = dot(tr.yz, tr.yz) > 0.25 ? tr.w : pow(clamp(max(depth, 0.6) / 14.0, 0.04, 1.0), -0.25);
  float cel = sqrt(9.81 * clamp(depth, 0.3, 14.0));
  float amax = 0.42 * max(depth, 0.0) + 0.14;
  float noisePhase = shoreNoisePhase(xz);
  float group = shoreGroup(xz);
  float pinch = 0.85;   // total horizontal compression allowed (Jacobian stays > 0.15)
  for (int i = 0; i < 2; i++) {
    float lambda = uShoreWave.y * (i == 0 ? 1.0 : 0.61);
    float w = sqrt(9.81 * 2.0 * PI / lambda) * uShoreWave.z;
    float k = w / cel;
    float a = min(uShoreWave.x * (i == 0 ? 1.0 : 0.45) * env * shoal * group, amax * (i == 0 ? 1.0 : 0.5));
    float ph = w * (tr.x + uTime) + noisePhase * (i == 0 ? 1.0 : 1.37) + float(i) * 2.1;
    float c = 0.5 + 0.5 * cos(ph);
    float s = sin(ph);
    const float P = 1.6;           // narrower crests, flatter troughs
    float cp = pow(c, P - 1.0);
    float rel = a / max(depth, 0.05);
    // sections of each crest break early or late (peeling), new layout every wave
    float cycle = floor((ph + PI) / (2.0 * PI));
    float early = vnoise(xz * 0.03 + vec2(cycle * 7.3, cycle * 3.1 + float(i) * 31.0));
    float breaking = smoothstep(0.12 + 0.14 * early, 0.3 + 0.2 * early, rel);
    // plunging only around the break point; the inner surf zone runs as a bore
    float pitch = i == 0 ? 2.0 * uShoreWave.w * a * smoothstep(0.16, 0.28, rel) * (1.0 - smoothstep(0.4, 0.6, rel)) : 0.0;
    // a heightfield can't overhang: the lean (up to 1.08 pitch k of compression just
    // ahead of the crest) and both trains' Gerstner pinch share one budget, so the
    // surface never folds over into a glassy fin
    pitch = min(pitch, 0.35 / (1.08 * k));
    pinch -= 1.08 * pitch * k;
    float qak = min(pinch, uShoreWave.w * a * k * 8.0);
    pinch -= qak;
    float c5 = c * c * c * c * c;
    o.disp.y += a * (2.0 * cp * c - 0.78);
    o.disp.xz += dir * ((qak / k) * s + pitch * c5 * c);
    o.slope += dir * (a * k * P * cp * s / max(1.0 - qak * cos(ph) + 3.0 * pitch * k * c5 * s, 0.2));
    // whitewater: on the crest and trailing behind it once the wave is near breaking
    float psi = mod(ph + PI, 2.0 * PI) - PI;
    float f = breaking * smoothstep(-0.45, 0.0, psi) * exp(-max(psi, 0.0) * 0.8);
    o.foam += f;
    if (i == 0) {
      o.wave0 = vec4(a, k, w, ph);
      o.breaking0 = breaking;
      o.lip = breaking * c5 * smoothstep(0.6, -0.2, psi);
      // (the lace outlives single crests: no peeling, or it would pop between waves)
      o.residual = smoothstep(0.18, 0.4, rel) * (0.3 + 0.45 * exp(-mod(ph, 2.0 * PI) * 0.4));
    }
  }
  return o;
}

// Full surface displacement at an undisplaced xz; lod per cascade (0 = finest).
vec3 waterDisplacement(vec2 xz, vec3 lod) {
  vec4 sh = shoreSample(xz);
  vec3 damp = cascadeDamp(-sh.x);
  vec3 d = textureLod(uDisp0, xz / uLength.x, max(lod.x, 0.0)).xyz * damp.x
         + textureLod(uDisp1, xz / uLength.y, max(lod.y, 0.0)).xyz * damp.y
         + textureLod(uDisp2, xz / uLength.z, max(lod.z, 0.0)).xyz * damp.z;
  d += shoreWaves(xz, sh).disp;
  // rings at their world position; cell size back from the finest lod
  d.y += impactWaves(xz + d.xz, 2.0 * N_TEX / (exp2(lod.z - 1.0) * uLength.z)).x;
  return d;
}

// Surface at world xz: invert the choppy horizontal displacement by fixed-point
// iteration, then read the height there. Returns the displacement; .y is the height.
vec3 waterAt(vec2 q, vec3 lod) {
  vec2 p = q;
  vec3 d = vec3(0.0);
  for (int i = 0; i < 4; i++) { d = waterDisplacement(p, lod); p = q - d.xz; }
  return waterDisplacement(p, lod);
}
`
), ah = Ds + /* glsl */
`
uniform float uGridScale;
uniform float uCellStep;
uniform float uWind;
out vec3 vWorld;
out vec2 vXZ;
out float vUnresolved;

void main() {
  vec2 local = position.xz;
  float r = length(local);
  float scale = r > ${(Ps * 2).toFixed(1)} ? 1.0 : uGridScale;
  vec2 xz = cameraPosition.xz + local * scale;
  float cell = max(r, ${Xi.toFixed(1)}) * uCellStep * scale;

  // +1 LOD bias: box-filtered mips still leak a little past Nyquist
  vec3 d = waterDisplacement(xz, log2(cell * N_TEX / uLength.xyz) + 1.0);
  // Cox-Munk mean square slope minus what the cascades carry (each one's 1x1 mip is its
  // mean square slope): the rest is sub-texel roughness
  vec4 m0 = textureLod(uSlope0, vec2(0.5), 8.0), m1 = textureLod(uSlope1, vec2(0.5), 8.0);
  vec4 m2 = textureLod(uSlope2, vec2(0.5), 8.0), m3 = textureLod(uSlope3, vec2(0.5), 8.0);
  vUnresolved = max(0.003 + 0.00512 * uWind - (m0.z + m0.w + m1.z + m1.w + m2.z + m2.w + m3.z + m3.w), 0.0);

  vXZ = xz;
  vWorld = vec3(xz.x + d.x, d.y, xz.y + d.z);
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}`, sh = Ds + eh + /* glsl */
`
precision highp sampler2DShadow;
uniform vec2 uResolution;
uniform vec2 uNearFar;
uniform sampler2D uSceneColor;
uniform sampler2D uSceneDepth;
uniform sampler2D uReflection;
uniform mat4 uReflMatrix;
uniform samplerCube uSkyCube;
uniform float uSkyMaxLod;
uniform sampler2D uFoamTex;
uniform sampler2DShadow uShadowMap;
uniform mat4 uShadowMatrix;
uniform float uShadowBias;  // depth units
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uAbsorption;
uniform vec3 uScatterColor;
uniform vec3 uFoamTint;     // thin foam: the water colour showing through the bubbles
uniform vec4 uSSS;          // peak strength, view strength, shadow strength, -
uniform vec4 uFoam;         // bias, scale, shore band (m), brightness
uniform vec4 uOptics;       // base roughness, refraction strength, reflection distortion, fog density
uniform vec3 uCamForward;
uniform int uDebug;
uniform float uGlint;
uniform float uCamSide;     // -1 camera above the surface, 1 below, 0 straddling it
in vec3 vWorld;
in vec2 vXZ;
in float vUnresolved;
out vec4 fragColor;

float linearDepth(float d) {
  float z = d * 2.0 - 1.0;
  return 2.0 * uNearFar.x * uNearFar.y / (uNearFar.y + uNearFar.x - z * (uNearFar.y - uNearFar.x));
}

float sunShadow(vec3 p) {
  float s = 1.0;
  vec4 sc = uShadowMatrix * vec4(p, 1.0);
  // one hardware 2x2 PCF tap: texels are ~0.44 m, soft enough on moving water. The water
  // casts nothing, so the bias only has to cover depth precision.
  if (all(greaterThan(sc.xy, vec2(0.0))) && all(lessThan(sc.xyz, vec3(1.0)))) s = texture(uShadowMap, vec3(sc.xy, sc.z - uShadowBias));
  return min(s, floatShadow(p));
}

// Poisson count with mean lam from one uniform number: inverse CDF, normal (logistic)
// approximation for large means
float poisson(float lam, float u) {
  if (lam > 6.0) return max(0.0, lam + sqrt(lam) * log(u / (1.0 - u)) / 1.702);
  float p = exp(-lam), F = p, n = 0.0;
  for (int k = 0; k < 14; k++) { if (u <= F) break; n += 1.0; p *= lam / n; F += p; }
  return n;
}

vec3 skyLod(vec3 dir, float lod) {
  dir.y = max(dir.y, 0.0);
  return textureLod(uSkyCube, dir, lod).rgb;
}

void main() {
  // folded crests flip triangles; drop faces that can't face the camera's side
  if (gl_FrontFacing ? uCamSide > 0.5 : uCamSide < -0.5) discard;
  vec3 toCam = cameraPosition - vWorld;
  float dist = length(toCam);
  vec3 V = toCam / dist;
  vec2 uv = gl_FragCoord.xy / uResolution;

  // --- surface: slopes + slope variance from the three cascades -----------------
  vec4 sh = shoreSample(vXZ);
  float depthBelow = -sh.x;
  vec3 damp = cascadeDamp(depthBelow);
  vec4 s0 = texture(uSlope0, vXZ / uLength.x) * damp.x;
  vec4 s1 = texture(uSlope1, vXZ / uLength.y) * damp.y;
  vec4 s2 = texture(uSlope2, vXZ / uLength.z) * damp.z;
  vec4 s3 = texture(uSlope3, vXZ / uLength.w) * damp.z;
  s0.zw *= damp.x; s1.zw *= damp.y; s2.zw *= damp.z; s3.zw *= damp.z;   // second moments scale by damp^2
  Shore shore = shoreWaves(vXZ, sh);
  vec2 fwXZ = fwidth(vXZ);
  vec3 imp = impactWaves(vWorld.xz, 2.0 / max(max(fwXZ.x, fwXZ.y), 1e-3));
  vec2 slope = s0.xy + s1.xy + s2.xy + s3.xy + shore.slope + imp.yz;
  vec2 variance = max(s0.zw - s0.xy * s0.xy, 0.0) + max(s1.zw - s1.xy * s1.xy, 0.0)
                + max(s2.zw - s2.xy * s2.xy, 0.0) + max(s3.zw - s3.xy * s3.xy, 0.0);
  vec3 Nrm = normalize(vec3(-slope.x, 1.0, -slope.y));
  // the normal's tilt as a screen offset: project a small world step along it
  vec3 vp = (viewMatrix * vec4(vWorld, 1.0)).xyz;
  vec3 dv = mat3(viewMatrix) * vec3(Nrm.x, 0.0, Nrm.z);
  vec2 nS = dv.xy - vp.xy / vp.z * dv.z;

  // geometric specular AA (Kaplanyan): normal change across the pixel adds variance
  vec3 dndx = dFdx(Nrm), dndy = dFdy(Nrm);
  float geoVar = min(0.25 * (dot(dndx, dndx) + dot(dndy, dndy)), 0.18);
  float alpha2 = uOptics.x * uOptics.x + vUnresolved * damp.z * damp.z + variance.x + variance.y + geoVar;
  float alpha = sqrt(alpha2);

  float NoV = max(dot(Nrm, V), 1e-4);
  float NoL = dot(Nrm, uSunDir);
  float shadow = sunShadow(vWorld);

  // --- foam -------------------------------------------------------------------
  float t0 = texture(uDisp0, vXZ / uLength.x).w, t1 = texture(uDisp1, vXZ / uLength.y).w, t2 = texture(uDisp2, vXZ / uLength.z).w;
  float jac = mix(1.0, t0, damp.x) + mix(1.0, t1, damp.y) + mix(1.0, t2, damp.z) - 2.0;
  float foam = clamp((uFoam.x - jac) * uFoam.y, 0.0, 1.0);

  // --- seen from below: Snell's window + total internal reflection ---------------
  // (the camera->surface water column is fogged later by the underwater pass)
  if (!gl_FrontFacing) {
    vec3 Nu = -Nrm;
    float cosI = dot(V, Nu);
    // outside Snell's window total internal reflection mirrors the deep water: the same
    // colour the underwater pass fogs towards, for the reflected direction
    vec3 Rd = reflect(-V, Nu);
    vec3 ambientU = skyLod(vec3(0.0, 1.0, 0.0), uSkyMaxLod);
    vec3 deep = uScatterColor * (ambientU + uSunColor * max(uSunDir.y, 0.0)) * mix(0.55, 1.35, Rd.y * 0.5 + 0.5);
    vec3 colU = deep;
    // the window edge (critical angle) blurred by the sub-pixel roughness, so rough
    // patches fade between window and mirror instead of switching
    const float COS_CRIT = 0.6614;   // sqrt(1 - 1/1.33^2)
    float edge = max(alpha * 1.5, 0.02);
    float win = smoothstep(COS_CRIT - edge, COS_CRIT + edge, cosI);
    if (win > 0.0) {
      vec3 Tdir = refract(-V, Nu, 1.33);
      if (dot(Tdir, Tdir) == 0.0) Tdir = normalize(-V - Nu * dot(-V, Nu));   // grazing, just past the edge
      float cosT = max(dot(Tdir, Nrm), 0.0);
      float Fu = 0.02 + 0.98 * pow(1.0 - cosT, 5.0);
      // sky through the window is the refracted direction (the 180-degree sky squeezed
      // into the ~97-degree cone); anything opaque above water comes from the frame
      vec2 wuv = uv + nS * 0.04;
      vec3 above = textureLod(uSceneDepth, wuv, 0.0).r > 0.999999
        ? skyLod(Tdir, clamp(log2(alpha * 900.0), 0.0, uSkyMaxLod)) : textureLod(uSceneColor, wuv, 0.0).rgb;
      // sun through the window: GGX transmission lobe, widened by the roughness
      float aT = max(alpha * 1.4, 0.03), mu = max(dot(Tdir, uSunDir), 0.0);
      float dT = mu * mu * (aT * aT - 1.0) + 1.0;
      float sunLobe = aT * aT / (PI * dT * dT) * 0.25;
      colU = mix(deep, mix(above + uSunColor * sunLobe * shadow, deep, Fu), win);
    }
    colU *= 1.0 - 0.55 * max(foam, clamp(shore.foam, 0.0, 1.0));
    // alpha tags what the pixel sees for the underwater pass: 0 underside, 2 top
    // (everything else writes 1, so MSAA edge averages never look like the other face)
    fragColor = vec4(colU, 0.0);
    return;
  }

  // --- refraction + absorption -------------------------------------------------
  float waterDepth = linearDepth(gl_FragCoord.z);
  float sceneDepth = linearDepth(textureLod(uSceneDepth, uv, 0.0).r);
  float viewCos = max(dot(-V, uCamForward), 0.05);
  float thick = max(sceneDepth - waterDepth, 0.0) / viewCos;
  vec2 ruv = uv + nS * uOptics.y * clamp(thick * 0.25, 0.0, 1.0) / max(waterDepth * 0.02, 1.0);
  float rDepth = linearDepth(textureLod(uSceneDepth, ruv, 0.0).r);
  // the offset landed on something in front of the water: fall back towards no offset,
  // smoothly so object edges don't get a hard outline
  float keep = smoothstep(waterDepth - 0.3, waterDepth + 0.3, rDepth);
  ruv = mix(uv, ruv, keep);
  thick = mix(thick, max(rDepth - waterDepth, 0.0) / viewCos, keep);
  vec3 refracted = textureLod(uSceneColor, ruv, 0.0).rgb;
  vec3 T = exp(-uAbsorption * thick);

  // shoreline contact foam where the water gets thin (in the shallows only: around
  // floating props it would be a white frill)
  float contact = (1.0 - smoothstep(0.0, uFoam.z, thick * viewCos)) * smoothstep(6.0, 2.0, depthBelow);
  foam = max(foam, contact * 0.9);
  float shoreFoam = clamp(shore.foam, 0.0, 1.0);

  // --- lighting ------------------------------------------------------------------
  vec3 ambient = skyLod(vec3(0.0, 1.0, 0.0), uSkyMaxLod);
  vec3 sun = uSunColor * shadow;
  // in-scatter of the water column (sun + sky), then Atlas-style SSS on crests
  vec3 inscatter = uScatterColor * (ambient + uSunColor * (0.3 + 0.7 * shadow) * max(uSunDir.y, 0.0));
  float h = max(vWorld.y, 0.0);
  float k1 = uSSS.x * h * pow(clamp(dot(uSunDir, -V), 0.0, 1.0), 4.0) * pow(0.5 - 0.5 * NoL, 3.0);
  float k2 = uSSS.y * pow(NoV, 2.0);
  vec3 sss = (k1 + k2) * uScatterColor * sun + uSSS.z * max(NoL, 0.0) * uScatterColor * sun;
  // thin breaking lips: sunlight through about a metre of water glows turquoise,
  // strongest looking into the sun
  sss += shore.lip * sun * exp(-uAbsorption * 2.0) * 0.06 * (0.3 + 2.5 * pow(clamp(dot(uSunDir, -V), 0.0, 1.0), 3.0));
  vec3 body = refracted * T + (inscatter + sss) * (1.0 - T);

  // Fresnel with roughness-aware F90 (Lagarde) so the rough far field doesn't go white
  const float F0 = 0.02;
  float F90 = max(1.0 - 0.7 * sqrt(alpha), F0);
  float F = F0 + (F90 - F0) * pow(1.0 - NoV, 5.0);

  // --- reflection: half-res planar (terrain) over the sky cube -----------------------
  vec3 R = reflect(-V, Nrm);
  R.y = abs(R.y);
  float lod = clamp(log2(alpha * 650.0), 0.0, uSkyMaxLod);
  vec3 refl = skyLod(R, lod);
  // (premultiplied: the target clears to 0, so blurred mips fade to the sky, not black)
  vec4 pc = uReflMatrix * vec4(vWorld.x, 0.0, vWorld.z, 1.0);
  vec2 puv = pc.xy / pc.w + nS * uOptics.z / max(1.0, waterDepth * 0.01);
  vec4 planar = textureLod(uReflection, puv, clamp(log2(alpha * 300.0), 0.0, 6.0));
  refl = refl * (1.0 - planar.a) + planar.rgb;

  // --- sun specular: GGX, alpha floored so the sun acts as a small area light ---------
  float aS = max(alpha, 0.015);
  float aS2 = aS * aS;
  vec3 H = normalize(uSunDir + V);
  float NoH = max(dot(Nrm, H), 0.0);
  float nl = max(NoL, 0.0);
  float dd = NoH * NoH * (aS2 - 1.0) + 1.0;
  float D = aS2 / (PI * dd * dd);
  float vis = 0.5 / (nl * sqrt(NoV * NoV * (1.0 - aS2) + aS2) + NoV * sqrt(nl * nl * (1.0 - aS2) + aS2) + 1e-5);
  float Fs = F0 + (1.0 - F0) * pow(1.0 - max(dot(V, H), 0.0), 5.0);
  vec3 spec = sun * (PI * D * vis * Fs * nl);

  // glitter: the lobe as a finite number of sub-pixel facets. Per cell of about the
  // pixel footprint the expected count mirroring the sun is lam = facet density * area *
  // D * (sun solid angle / 4 VoH); a Poisson draw / lam scales the smooth lobe (mean 1,
  // energy kept). Dense cells (close to the lobe core, far away) stay smooth, sparse
  // ones break into points; each cell crossfades between draws so they twinkle.
  if (uGlint > 0.0 && dot(spec, vec3(1.0)) > 0.02) {
    const float FACETS = 2e4;   // per m^2 (calibration knob)
    float lf = log2(max(max(fwXZ.x, fwXZ.y), 1e-3)) + 1.0;
    float l0 = floor(lf);
    float per = FACETS * D * NoH * 6.8e-5 / (4.0 * max(dot(V, H), 0.05));
    float m = 0.0;
    for (int j = 0; j < 2; j++) {
      float l = l0 + float(j), sz = exp2(l);
      vec2 cell = floor(vXZ / sz);
      float lam = per * sz * sz;
      float tt = uTime * 3.0 + hash12(cell + l * 17.17) * 64.0, it = floor(tt);
      float n0 = poisson(lam, clamp(hash12(cell * 1.31 + it * 3.7), 1e-4, 0.9999));
      float n1 = poisson(lam, clamp(hash12(cell * 1.31 + (it + 1.0) * 3.7), 1e-4, 0.9999));
      m += (j == 0 ? 1.0 - (lf - l0) : lf - l0) * min(mix(n0, n1, smoothstep(0.0, 1.0, tt - it)) / max(lam, 1e-4), 300.0);
    }
    spec *= mix(1.0, m, uGlint * smoothstep(4.0, 30.0, dist));
  }

  vec3 col = mix(body, refl, F) + spec;

  // --- foam surface: eroded by age via the pattern threshold, kills specular ----------
  // erosion: dense foam is nearly solid, ageing foam thins out to the lace network
  // (texture taps only where there is foam; most of the ocean has none). Each source
  // also gives a billow height + gradient (world) and a density for the shading.
  float cover = 0.0, pat = 0.0, fh = 0.5, dens = 0.0;
  vec2 fg = vec2(0.0);
  if (foam > 0.0) {
    vec4 t0 = texture(uFoamTex, vXZ * 0.11);
    pat = t0.r * 0.65 + texture(uFoamTex, vXZ * 0.031 + 0.37).r * 0.35;
    cover = smoothstep(1.05 - foam, 1.3 - foam, pat) * sqrt(foam);
    fh = t0.g; fg = (t0.ba - 0.5) * 64.0 * 0.11; dens = foam;
  }
  if (shoreFoam > 0.0) {
    // whitewater rides shoreward with the bore: a world-space flow map at the phase
    // speed, two phases crossfaded every half period (which also makes it churn). On the
    // displaced surface, so the crest pinch doesn't squash it into streaks; a coordinate
    // tied to the front direction would shear wherever the fronts curve.
    const float FLOW_T = 2.5;   // s
    vec2 vel = shore.dir * shore.wave0.z / max(shore.wave0.y, 1e-3);
    float f0 = fract(uTime / FLOW_T), f1 = fract(uTime / FLOW_T + 0.5), wb = abs(2.0 * f0 - 1.0);
    vec4 b0 = texture(uFoamTex, (vWorld.xz - vel * (f0 * FLOW_T)) * 0.15);
    vec4 b1 = texture(uFoamTex, (vWorld.xz - vel * (f1 * FLOW_T)) * 0.15 + 0.43);
    float sh_ = mix(b0.g, b1.g, wb);
    float sPattern = mix(b0.r, b1.r, wb) * 0.3 + sh_ * 0.45 + texture(uFoamTex, vWorld.xz * 0.023 + 0.5).r * 0.25;
    float sCover = smoothstep(1.0 - shoreFoam * 1.1, 1.2 - shoreFoam * 1.1, sPattern) * sqrt(shoreFoam);
    if (sCover >= cover) {
      pat = sPattern; fh = sh_; dens = shoreFoam;
      fg = mix(b0.ba, b1.ba, wb) * (64.0 * 0.15) - 32.0 * 0.15;
    }
    cover = max(cover, sCover);
  }
  if (shore.residual > 0.0) {
    // lace left behind in the surf zone, drifting shoreward (two-phase flow map)
    float fp = fract(uTime / 8.0);
    vec2 drift = shore.dir * 2.8;
    float r0 = texture(uFoamTex, (vWorld.xz - drift * fp) * 0.06).r;
    float r1 = texture(uFoamTex, (vWorld.xz - drift * fract(fp + 0.5)) * 0.06 + 0.5).r;
    float rp = mix(r0, r1, abs(2.0 * fp - 1.0));
    float rCover = smoothstep(1.2 - shore.residual, 1.35 - shore.residual, rp) * shore.residual;
    if (rCover >= cover) { pat = rp; fh = 0.5; fg = vec2(0.0); dens = shore.residual * 0.5; }
    cover = max(cover, rCover);
  }
  if (cover > 0.0) {
    // billows bump the normal (whitewater is lumpy, thin lace lies flat) and shade
    // their creases; thin foam is a bubble film tinted by the water under it, dense foam
    // a bright diffuse white with a little sheen on the bubble tops
    vec3 fN = normalize(Nrm - vec3(fg.x, 0.0, fg.y) * (0.03 + 0.12 * dens));
    float fl = dot(fN, uSunDir);
    float ao = mix(0.45, 1.0, smoothstep(0.15, 0.75, fh));
    float solid = smoothstep(0.2, 0.9, dens * (0.55 + 0.7 * fh));
    vec3 foamAlbedo = mix(uFoamTint, vec3(0.95), max(solid, smoothstep(0.3, 0.9, pat) * 0.6));
    vec3 lit = sun * (0.15 + 0.85 * clamp(fl * 0.8 + 0.2, 0.0, 1.0)) * mix(ao, 1.0, 0.4) + ambient * 1.1 * ao;
    // sun behind the crest shines through the thin foam on top
    lit += sun * pow(clamp(dot(uSunDir, -V), 0.0, 1.0), 4.0) * 0.4 * (1.0 - solid);
    vec3 foamCol = uFoam.w * foamAlbedo * lit;
    foamCol += sun * pow(max(dot(fN, H), 0.0), 90.0) * 0.5 * smoothstep(0.55, 0.85, fh) * solid;
    col = mix(col, foamCol, cover * mix(0.8, 1.0, solid));
  }

  // --- aerial perspective into the horizon sky ---------------------------------------
  float fog = 1.0 - exp(-dist * uOptics.w);
  col = mix(col, skyLod(-V, 3.0), fog);

  if (uDebug == 1) col = Nrm * 0.5 + 0.5;
  else if (uDebug == 2) col = spec;
  else if (uDebug == 3) col = vec3(foam, cover, shoreFoam);
  else if (uDebug == 4) col = vec3(alpha * 5.0, sqrt(geoVar) * 5.0, sqrt(variance.x + variance.y) * 5.0);
  else if (uDebug == 5) col = vec3(F);
  else if (uDebug == 6) col = body;
  else if (uDebug == 7) col = refl;
  fragColor = vec4(col, 2.0);
}`;
class oh {
  constructor(e, t, n, r) {
    this.sim = e, this.uniforms = {
      uDisp0: { value: null },
      uDisp1: { value: null },
      uDisp2: { value: null },
      uSlope0: { value: null },
      uSlope1: { value: null },
      uSlope2: { value: null },
      uSlope3: { value: null },
      uLength: { value: new ze(...e.lengths) },
      uWind: { value: 0 },
      uImpact: { value: Array.from({ length: 8 }, () => new ze()) },
      uImpactSize: { value: new Array(8).fill(1) },
      uShore: { value: t.texture },
      uTravel: { value: t.travel },
      uShoreExtent: { value: t.extent },
      uTime: { value: 0 },
      uShoreWave: { value: new ze(0.55, 30, 1, 1) },
      uWaveDamp: { value: new De(26, 0.55) },
      uSwellDir: { value: new De(1, 0) },
      uGridScale: { value: 1 },
      uCellStep: { value: 2 * Math.PI / Gi },
      uResolution: { value: new De(1, 1) },
      uNearFar: { value: new De(0.5, 8e4) },
      uSceneColor: { value: null },
      uSceneDepth: { value: null },
      uReflection: { value: null },
      uReflMatrix: { value: new lt() },
      uSkyCube: { value: n.cube },
      uSkyMaxLod: { value: Math.log2(n.cubeSize) },
      uFoamTex: { value: null },
      uShadowMap: { value: null },
      uShadowMatrix: { value: new lt() },
      uShadowBias: { value: 1e-5 },
      ...r,
      uSunDir: { value: n.sunDir },
      uSunColor: { value: n.sunColor },
      uAbsorption: { value: new k(0.42, 0.075, 0.048) },
      uScatterColor: { value: new We(0, 0.05, 0.08) },
      uFoamTint: { value: new We(0.62, 0.78, 0.82) },
      uSSS: { value: new ze(1.6, 0.06, 0.05, 0) },
      uFoam: { value: new ze(0.05, 1.3, 0.35, 0.85) },
      uOptics: { value: new ze(0.02, 0.06, 0.04, 1 / 18e3) },
      uCamForward: { value: new k() },
      uDebug: { value: 0 },
      uGlint: { value: 0.6 },
      uCamSide: { value: -1 }
    }, this.material = new Ut({
      glslVersion: Yn,
      vertexShader: ah,
      fragmentShader: sh,
      uniforms: this.uniforms,
      side: 2
    }), this.grids = [is(Gi), is(Gi / 2)], this.mesh = new Pt(this.grids[0], this.material), this.mesh.frustumCulled = !1;
  }
  update(e, t) {
    const n = this.uniforms, r = this.sim;
    n.uDisp0.value = r.displacement[0], n.uDisp1.value = r.displacement[1], n.uDisp2.value = r.displacement[2], n.uSlope0.value = r.slope[0], n.uSlope1.value = r.slope[1], n.uSlope2.value = r.slope[2], n.uSlope3.value = r.slope[3], n.uWind.value = r.params.windSpeed, n.uTime.value = t;
    const a = ci.degToRad(r.params.swellDirection);
    n.uSwellDir.value.set(-Math.cos(a), -Math.sin(a)), n.uGridScale.value = Math.max(1, Math.abs(e.position.y) / 2);
    const s = Math.abs(e.position.y) > nh ? 1 : 0;
    this.mesh.geometry = this.grids[s], n.uCellStep.value = 2 * Math.PI / (Gi >> s), n.uNearFar.value.set(e.near, e.far), e.getWorldDirection(n.uCamForward.value);
  }
}
const qi = 1e20;
function rs(i, e, t, n, r) {
  let a = 0;
  n[0] = 0, r[0] = -qi, r[1] = qi;
  for (let s = 1; s < e; s++) {
    let o = (i[s] + s * s - (i[n[a]] + n[a] * n[a])) / (2 * s - 2 * n[a]);
    for (; o <= r[a]; )
      a--, o = (i[s] + s * s - (i[n[a]] + n[a] * n[a])) / (2 * s - 2 * n[a]);
    a++, n[a] = s, r[a] = o, r[a + 1] = qi;
  }
  a = 0;
  for (let s = 0; s < e; s++) {
    for (; r[a + 1] < s; ) a++;
    t[s] = (s - n[a]) * (s - n[a]) + i[n[a]];
  }
}
function as(i, e) {
  const t = new Float64Array(e * e);
  for (let o = 0; o < t.length; o++) t[o] = i[o] ? 0 : qi;
  const n = new Float64Array(e), r = new Float64Array(e), a = new Int32Array(e), s = new Float64Array(e + 1);
  for (let o = 0; o < e; o++) {
    for (let c = 0; c < e; c++) n[c] = t[c * e + o];
    rs(n, e, r, a, s);
    for (let c = 0; c < e; c++) t[c * e + o] = r[c];
  }
  for (let o = 0; o < e; o++) {
    for (let c = 0; c < e; c++) n[c] = t[o * e + c];
    rs(n, e, r, a, s);
    for (let c = 0; c < e; c++) t[o * e + c] = r[c];
  }
  return t;
}
const kn = (i, e) => i < 0 ? 0 : i > e ? e : i;
function pn(i, e, t) {
  const n = new Float32Array(i.length), r = new Float32Array(i.length), a = 2 * t + 1, s = e - 1;
  for (let o = 0; o < e; o++) {
    const c = o * e;
    let l = 0;
    for (let f = -t; f <= t; f++) l += i[c + kn(f, s)];
    for (let f = 0; f < e; f++)
      n[c + f] = l / a, l += i[c + kn(f + t + 1, s)] - i[c + kn(f - t, s)];
  }
  for (let o = 0; o < e; o++) {
    let c = 0;
    for (let l = -t; l <= t; l++) c += n[kn(l, s) * e + o];
    for (let l = 0; l < e; l++)
      r[l * e + o] = c / a, c += n[kn(l + t + 1, s) * e + o] - n[kn(l - t, s) * e + o];
  }
  return r;
}
function Ls(i, e) {
  const t = new Wr(i, e, e, 1023, 1015);
  return t.minFilter = t.magFilter = 1006, t.wrapS = t.wrapT = 1001, t.needsUpdate = !0, t;
}
const lh = 9.81, ch = 0.3, Fs = 14, uh = 64, ss = 50, Dr = 3, fh = 300, os = 1 / 25;
function dh(i, e) {
  const t = e * e, n = i.slice(), r = new Uint8Array(t), a = new Int32Array(t), s = new Int32Array(t);
  for (let o = 0; o < t; o++) {
    if (i[o] || r[o]) continue;
    let c = 0, l = 0;
    for (a[c++] = o, r[o] = 1; c > 0; ) {
      const f = a[--c], d = f % e;
      s[l++] = f, d > 0 && !i[f - 1] && !r[f - 1] && (r[f - 1] = 1, a[c++] = f - 1), d < e - 1 && !i[f + 1] && !r[f + 1] && (r[f + 1] = 1, a[c++] = f + 1), f >= e && !i[f - e] && !r[f - e] && (r[f - e] = 1, a[c++] = f - e), f < t - e && !i[f + e] && !r[f + e] && (r[f + e] = 1, a[c++] = f + e);
    }
    if (l < uh) for (let f = 0; f < l; f++) n[s[f]] = 1;
  }
  return n;
}
function hh(i, e, t, n) {
  for (let r = 0; r < e.length; r++)
    e[r] = Math.sqrt(lh * Math.min(Fs, Math.max(ch, -i[r]))), t[r] = n / e[r];
}
function ph(i, e, t, n, r, a) {
  const s = a + 2;
  e.fill(2);
  for (let o = 0; o < a; o++) e.fill(1, (o + 1) * s + 1, (o + 1) * s + 1 + a);
  for (let o = 0; o < a; o++) for (let c = 0; c < a; c++) {
    const l = o * a + c, f = n[l], d = t[l];
    let u = 1 / 0, h = 1 / 0;
    if (c > 0 && n[l - 1] !== f && (u = d / (d - t[l - 1])), c < a - 1 && n[l + 1] !== f && (u = Math.min(u, d / (d - t[l + 1]))), o > 0 && n[l - a] !== f && (h = d / (d - t[l - a])), o < a - 1 && n[l + a] !== f && (h = Math.min(h, d / (d - t[l + a]))), u === 1 / 0 && h === 1 / 0) continue;
    const _ = u === 1 / 0 ? h : h === 1 / 0 ? u : u * h / (Math.sqrt(u * u + h * h) || 1), M = l + 2 * o + s + 1;
    i[M] = _ * r[l], e[M] = 2;
  }
}
function ki(i, e, t, n, r, a) {
  const s = n + 2;
  let o = 0;
  for (let c = 0, l = a > 0 ? 0 : n - 1; c < n; c++, l += a)
    for (let f = 0, d = r > 0 ? 0 : n - 1; f < n; f++, d += r) {
      const u = l * n + d, h = u + 2 * l + s + 1;
      if (e[h] !== 1) continue;
      e[h] = 0;
      const _ = i[h - 1], M = i[h + 1], g = i[h - s], p = i[h + s], A = _ < M ? _ : M, R = g < p ? g : p, S = t[u], y = A > R ? A - R : R - A, T = y >= S ? (A < R ? A : R) + S : 0.5 * (A + R + Math.sqrt(2 * S * S - y * y));
      T < i[h] - 1e-4 && (i[h] = T, o++, e[h - 1] === 0 && (e[h - 1] = 1), e[h + 1] === 0 && (e[h + 1] = 1), e[h - s] === 0 && (e[h - s] = 1), e[h + s] === 0 && (e[h + s] = 1));
    }
  return o;
}
const mh = (i, e, t, n) => ki(i, e, t, n, 1, 1) + ki(i, e, t, n, -1, 1) + ki(i, e, t, n, 1, -1) + ki(i, e, t, n, -1, -1);
function gh(i, e, t) {
  const n = new Float32Array(t * t);
  for (let r = 0; r < t; r++) for (let a = 0; a < t; a++) {
    const s = r * t + a, o = i[s + 2 * r + t + 3];
    n[s] = o === 1 / 0 ? 0 : e[s] ? o : -o;
  }
  return n;
}
function _h(i, e, t, n, r, a, s) {
  for (let o = 0; o < a; o++) {
    const c = o > 0 ? -a : 0, l = o < a - 1 ? a : 0;
    for (let f = 0; f < a; f++) {
      const d = o * a + f, u = f > 0 ? -1 : 0, h = f < a - 1 ? 1 : 0, _ = i[d + h] - i[d + u], M = i[d + l] - i[d + c], g = Math.sqrt(_ * _ + M * M);
      g > 1e-9 && (t[d] = -_ / g, n[d] = -M / g);
      const p = Math.min(1, Math.max(0, (g / (2 * s) * e[d] - 0.7) / 0.25));
      r[d] = p * p * (3 - 2 * p);
    }
  }
}
function vh(i, e, t, n, r) {
  const a = new Float32Array(n * n);
  for (let s = 0; s < n; s++) {
    const o = s > 0 ? -n : 0, c = s < n - 1 ? n : 0;
    for (let l = 0; l < n; l++) {
      const f = s * n + l, d = l > 0 ? -1 : 0, u = l < n - 1 ? 1 : 0, h = -(i[f + u] - i[f + d] + e[f + c] - e[f + o]) / (2 * r);
      a[f] = Math.min(os, Math.max(-os, h)) * t[f];
    }
  }
  return a;
}
function xh(i, e, t, n, r, a) {
  const s = r >> 1, o = new Float32Array(s * s), c = Dr * a, l = Math.ceil(2.5 * ss / c), f = new Float32Array(l);
  for (let d = 0; d < l; d++) f[d] = Math.exp(-d * c / ss) * c;
  for (let d = 0; d < s; d++) for (let u = 0; u < s; u++) {
    const h = 2 * u, _ = 2 * d, M = _ * r + h, g = Math.min(1, Math.max(0, (fh - n[M]) / 80));
    if (n[M] < -3 * a || g === 0) continue;
    let p = h, A = _, R = 0;
    for (let S = 0; S < l; S++) {
      const y = Math.min(r - 2, p | 0), T = Math.min(r - 2, A | 0), w = T * r + y, v = p - y, b = A - T, L = (1 - v) * (1 - b), F = v * (1 - b), B = (1 - v) * b, V = v * b;
      if (R += f[S] * (i[w] * L + i[w + 1] * F + i[w + r] * B + i[w + r + 1] * V), p -= Dr * (e[w] * L + e[w + 1] * F + e[w + r] * B + e[w + r + 1] * V), A -= Dr * (t[w] * L + t[w + 1] * F + t[w + r] * B + t[w + r + 1] * V), p < 0 || A < 0 || p > r - 1 || A > r - 1) break;
    }
    o[d * s + u] = R * g;
  }
  return o;
}
function Sh(i, e, t, n, r, a, s) {
  const o = s >> 1, c = new Float32Array(s * s * 4);
  for (let l = 0; l < s; l++) {
    const f = Math.min(o - 1, l * 0.5), d = Math.min(o - 2, f | 0), u = f - d;
    for (let h = 0; h < s; h++) {
      const _ = Math.min(o - 1, h * 0.5), M = Math.min(o - 2, _ | 0), g = _ - M, p = d * o + M, A = (n[p] * (1 - g) + n[p + 1] * g) * (1 - u) + (n[p + o] * (1 - g) + n[p + o + 1] * g) * u, R = l * s + h, S = 1 / Math.sqrt(Math.sqrt(Math.min(1, Math.max(0.04, Math.max(-r[R], 0.6) / Fs))));
      c[R * 4] = i[R], c[R * 4 + 1] = e[R], c[R * 4 + 2] = t[R], c[R * 4 + 3] = Math.min(2.5, Math.max(0.3, A === 0 ? S : S * Math.exp(0.5 * A))) * a[R];
    }
  }
  return c;
}
function Mh(i, e, t, n, r) {
  const a = n * n, s = dh(e, n), o = new Float32Array(a), c = new Float64Array(a);
  hh(i, o, c, r);
  const l = new Float64Array((n + 2) * (n + 2)).fill(1 / 0), f = new Uint8Array((n + 2) * (n + 2));
  ph(l, f, i, s, c, n);
  for (let A = 0; A < 12 && mh(l, f, c, n) > 0; A++) ;
  const d = pn(pn(gh(l, s, n), n, 2), n, 2), u = new Float32Array(a), h = new Float32Array(a), _ = new Float32Array(a);
  _h(d, o, u, h, _, n, r);
  const M = pn(pn(vh(u, h, _, n, r), n, 2), n, 2), g = pn(pn(_, n, 2), n, 2), p = Sh(d, u, h, xh(M, u, h, t, n, r), i, g, n);
  return { travel: Ls(p, n), travelData: p };
}
function Eh(i, e, t = 512) {
  const n = e / t, r = new Float32Array(t * t), a = new Uint8Array(t * t), s = new Uint8Array(t * t);
  for (let d = 0; d < t; d++) for (let u = 0; u < t; u++) {
    const h = i(((u + 0.5) / t - 0.5) * e, ((d + 0.5) / t - 0.5) * e), _ = d * t + u;
    r[_] = h, a[_] = h > 0, s[_] = h <= 0;
  }
  const o = as(a, t), c = as(s, t);
  let l = new Float32Array(t * t);
  for (let d = 0; d < l.length; d++)
    l[d] = s[d] ? (Math.sqrt(o[d]) - 0.5) * n : -(Math.sqrt(c[d]) - 0.5) * n;
  l = pn(pn(l, t, 2), t, 2);
  const f = new Float32Array(t * t * 4);
  for (let d = 0; d < t; d++) for (let u = 0; u < t; u++) {
    const h = d * t + u, _ = (M, g) => l[Math.min(t - 1, Math.max(0, g)) * t + Math.min(t - 1, Math.max(0, M))];
    f[h * 4] = r[h], f[h * 4 + 1] = l[h], f[h * 4 + 2] = (_(u + 1, d) - _(u - 1, d)) / (2 * n), f[h * 4 + 3] = (_(u, d + 1) - _(u, d - 1)) / (2 * n);
  }
  return { texture: Ls(f, t), extent: e, data: f, size: t, ...Mh(r, s, l, t, n) };
}
const yh = (
  /* glsl */
  `
precision highp float;
in vec2 vUv;
out vec4 outColor;
vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
// tileable voronoi: cell ids wrap at period
vec2 voronoi(vec2 p, float period) {
  vec2 i = floor(p), f = fract(p);
  float f1 = 8.0, f2 = 8.0;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec2 g = vec2(x, y);
    vec2 o = hash22(mod(i + g, period));
    float d = length(g + o - f);
    if (d < f1) { f2 = f1; f1 = d; } else if (d < f2) f2 = d;
  }
  return vec2(f1, f2);
}
// cauliflower whitewater: every voronoi cell bulges (dome over the distance to its
// edge, creased where cells meet), at three scales
float billow(vec2 uv) {
  vec2 a = voronoi(uv * 7.0 + 0.3, 7.0), b = voronoi(uv * 17.0 + 0.7, 17.0), c = voronoi(uv * 41.0 + 0.1, 41.0);
  return 0.5 * sqrt(clamp((a.y - a.x) * 2.2, 0.0, 1.0)) + 0.32 * sqrt(clamp((b.y - b.x) * 2.2, 0.0, 1.0))
       + 0.18 * sqrt(clamp((c.y - c.x) * 2.2, 0.0, 1.0));
}
void main() {
  vec2 a = voronoi(vUv * 9.0, 9.0);
  vec2 b = voronoi(vUv * 23.0 + 0.5, 23.0);
  vec2 c = voronoi(vUv * 61.0, 61.0);
  float lace = 1.0 - smoothstep(0.0, 0.22, a.y - a.x);
  float fine = 1.0 - smoothstep(0.0, 0.16, b.y - b.x);
  float bubbles = smoothstep(0.55, 0.15, c.x);
  float v = lace * 0.55 + fine * 0.3 + bubbles * 0.25 + (1.0 - a.x) * 0.25;
  const float e = 1.0 / 1024.0;
  vec2 g = vec2(billow(vUv + vec2(e, 0.0)) - billow(vUv - vec2(e, 0.0)), billow(vUv + vec2(0.0, e)) - billow(vUv - vec2(0.0, e))) / (2.0 * e);
  outColor = vec4(clamp(v * 0.85, 0.0, 1.0), billow(vUv), clamp(0.5 + g / 64.0, 0.0, 1.0));
}`
);
function Th(i, e, t) {
  const n = new st(t, t, {
    wrapS: 1e3,
    wrapT: 1e3,
    minFilter: 1008,
    magFilter: 1006,
    generateMipmaps: !0,
    depthBuffer: !1,
    anisotropy: i.capabilities.getMaxAnisotropy()
  }), r = nn(e);
  return new qn(r).render(i, n), r.dispose(), i.setRenderTarget(null), n.texture;
}
function bh(i) {
  return { foam: Th(i, yh, 512) };
}
const tn = 6360, ui = 6460, Is = 0.01, Ah = 256, wh = 64, Zi = 32, Us = 192, Ns = 108;
function Rh(i) {
  const e = i.turbidity * i.turbidity;
  return {
    rayleigh: [5802e-6, 0.013558, 0.0331].map((t) => t * i.rayleigh),
    mieScattering: 3996e-6 * e,
    mieExtinction: 444e-5 * e,
    ozone: [65e-5, 1881e-6, 85e-6]
  };
}
function Ch(i, e, t) {
  const n = i * (2 * tn + i) + t * (2 * (tn + i) * e + t);
  return n / (Math.sqrt(tn * tn + n) + tn);
}
function Ph(i, e, t, n = [0, 0, 0]) {
  const r = tn + e, a = Math.max(-r * t + Math.sqrt(Math.max(r * r * (t * t - 1) + ui * ui, 0)), 0), s = [0, 0, 0];
  for (let o = 0; o < 40; o++) {
    const c = Math.max(Ch(e, t, a * ((o + 0.5) / 40) ** 2), 0), l = (2 * o + 1) * a / 1600, f = Math.exp(-c / 8) * l, d = Math.exp(-c / 1.2) * l, u = Math.max(0, 1 - Math.abs(c - 25) / 15) * l;
    for (let h = 0; h < 3; h++) s[h] += i.rayleigh[h] * f + i.mieExtinction * d + i.ozone[h] * u;
  }
  for (let o = 0; o < 3; o++) n[o] = Math.exp(-s[o]);
  return n;
}
const Dh = Is, nr = (
  /* glsl */
  `
precision highp float;
precision highp sampler2D;
#define PI 3.14159265359
const float RB = ${tn.toFixed(1)}, RT = ${ui.toFixed(1)}, OBS_H = ${Is};
const float H_TOP = ${Math.sqrt(ui * ui - tn * tn).toFixed(4)};  // sqrt(RT^2 - RB^2)
const float MIE_G = 0.8;
const float GROUND_ALBEDO = 0.1;
const vec2 SKY_RES = vec2(${Us}.0, ${Ns}.0);
uniform vec3 uRayleigh;     // Rayleigh scattering at sea level (1/km)
uniform vec2 uMie;          // aerosol scattering, extinction at sea level (1/km)
uniform vec3 uOzone;        // ozone absorption at the layer peak (1/km)
uniform float uSunIllum;    // sun illuminance outside the atmosphere
uniform sampler2D uTransLut;
uniform sampler2D uMsLut;
uniform sampler2D uSkyView;

vec2 toSub(vec2 u, vec2 n) { return u * (n - 1.0) / n + 0.5 / n; }
vec2 fromSub(vec2 u, vec2 n) { return (u - 0.5 / n) * n / (n - 1.0); }

// altitude after travelling t along a ray from altitude h with zenith cosine mu; r = radius
float altAt(float h, float mu, float t, out float r) {
  float q = h * (2.0 * RB + h) + t * (2.0 * (RB + h) * mu + t);  // r^2 - RB^2 without cancellation
  r = sqrt(RB * RB + q);
  return q / (r + RB);
}

struct Medium { vec3 ray; float mie; vec3 scat; vec3 ext; };
Medium medium(float h) {
  h = max(h, 0.0);
  float dM = exp(-h / 1.2);
  Medium m;
  m.ray = uRayleigh * exp(-h / 8.0);
  m.mie = uMie.x * dM;
  m.scat = m.ray + m.mie;
  m.ext = m.ray + uMie.y * dM + uOzone * max(0.0, 1.0 - abs(h - 25.0) / 15.0);  // ozone: tent 10..40 km
  return m;
}

float distTop(float r, float mu) { return max(-r * mu + sqrt(max(r * r * (mu * mu - 1.0) + RT * RT, 0.0)), 0.0); }

// Bruneton's transmittance parameterisation (covers the rays that miss the ground)
vec2 transUv(float h, float mu) {
  float r = RB + h, rho = sqrt(max(h, 0.0) * (2.0 * RB + h));
  float dMin = RT - r, dMax = rho + H_TOP;
  return vec2((distTop(r, mu) - dMin) / (dMax - dMin), rho / H_TOP);
}
vec3 transmittance(float h, float mu) { return textureLod(uTransLut, transUv(h, mu), 0.0).rgb; }

// 0 where the planet hides the sun from altitude h (radius r)
float sunVisible(float h, float r, float muS) { return step(-sqrt(max(h, 0.0) * (2.0 * RB + h)) / r, muS); }

// sky-view LUT, upper hemisphere only (the observer is at sea level): u = sqrt of the azimuth
// cosine to the sun, v = sqrt(elevation / 90deg) so texels crowd the horizon
vec3 skyView(vec3 d, vec3 sunDir) {
  float v = sqrt(asin(clamp(d.y, 0.0, 1.0)) / (0.5 * PI));
  float cosPhi = dot(d.xz, sunDir.xz) * inversesqrt(max(dot(d.xz, d.xz) * dot(sunDir.xz, sunDir.xz), 1e-12));
  float u = sqrt(clamp(0.5 - 0.5 * cosPhi, 0.0, 1.0));
  return textureLod(uSkyView, toSub(vec2(u, v), SKY_RES), 0.0).rgb;
}
`
), Kr = (
  /* glsl */
  `
in vec2 vUv;
out vec4 fragColor;
`
), Os = (
  /* glsl */
  `
float rayleighPhase(float c) { return 0.0596831 * (1.0 + c * c); }
float miePhase(float c) {
  float k = 1.0 + MIE_G * MIE_G - 2.0 * MIE_G * c;
  return (1.0 - MIE_G * MIE_G) / (4.0 * PI * k * sqrt(k));
}
vec3 multiScatter(float h, float muS) {
  vec2 uv = clamp(vec2(muS * 0.5 + 0.5, h / (RT - RB)), 0.0, 1.0);
  return textureLod(uMsLut, toSub(uv, vec2(${Zi}.0)), 0.0).rgb;
}
vec3 integrate(float h, float mu, float muS, float nu, int n, out vec3 fms) {
  float r0 = RB + h;
  float gd = r0 * r0 * (mu * mu - 1.0) + RB * RB;
  bool ground = mu < 0.0 && gd >= 0.0;
  float tMax = ground ? max(-r0 * mu - sqrt(gd), 0.0) : distTop(r0, mu);
#ifdef MS_PASS
  float pR = 1.0 / (4.0 * PI), pM = pR;
#else
  float pR = rayleighPhase(nu), pM = miePhase(nu);
#endif
  vec3 L = vec3(0.0), T = vec3(1.0);
  fms = vec3(0.0);
  float k = tMax / float(n * n);
  for (int i = 0; i < n; i++) {
    float fi = float(i);
    float t = k * (fi + 0.5) * (fi + 0.5), dt = k * (2.0 * fi + 1.0);
    float r;
    float ht = altAt(h, mu, t, r);
    float muSt = clamp((r0 * muS + t * nu) / r, -1.0, 1.0);
    Medium m = medium(ht);
    vec3 S = transmittance(ht, muSt) * sunVisible(ht, r, muSt) * (m.ray * pR + m.mie * pM);
#ifndef MS_PASS
    S += m.scat * multiScatter(ht, muSt);
#endif
    vec3 Ts = exp(-m.ext * dt);
    vec3 seg = (1.0 - Ts) / max(m.ext, vec3(1e-7));
    L += T * S * seg;
    fms += T * m.scat * seg;
    T *= Ts;
  }
#ifdef MS_PASS
  if (ground) {
    float muSg = clamp((r0 * muS + tMax * nu) / RB, -1.0, 1.0);
    L += T * transmittance(0.0, muSg) * max(muSg, 0.0) * (GROUND_ALBEDO / PI);
  }
#endif
  return L;
}
`
), Lh = nr + Kr + /* glsl */
`
void main() {
  float rho = H_TOP * vUv.y;
  float r = sqrt(rho * rho + RB * RB), h = rho * rho / (r + RB);
  float dMin = RT - r, d = mix(dMin, rho + H_TOP, vUv.x);
  float mu = d <= 0.0 ? 1.0 : clamp((H_TOP * H_TOP - rho * rho - d * d) / (2.0 * r * d), -1.0, 1.0);
  vec3 od = vec3(0.0);
  for (int i = 0; i < 40; i++) {
    float fi = float(i), rr;
    od += medium(altAt(h, mu, d * (fi + 0.5) * (fi + 0.5) / 1600.0, rr)).ext * (2.0 * fi + 1.0);
  }
  fragColor = vec4(exp(-od * (d / 1600.0)), 1.0);
}`, Fh = `#define MS_PASS
` + nr + Kr + Os + /* glsl */
`
void main() {
  vec2 uv = fromSub(vUv, vec2(${Zi}.0));
  float muS = uv.x * 2.0 - 1.0, h = max(uv.y * (RT - RB), OBS_H);
  float sinS = sqrt(max(1.0 - muS * muS, 0.0));
  vec3 L = vec3(0.0), F = vec3(0.0), fms;
  for (int j = 0; j < 8; j++) {
    float mu = 1.0 - 2.0 * (float(j) + 0.5) / 8.0, sinV = sqrt(1.0 - mu * mu);
    for (int i = 0; i < 8; i++) {
      float nu = cos(2.0 * PI * (float(i) + 0.5) / 8.0) * sinV * sinS + mu * muS;
      L += integrate(h, mu, muS, nu, 20, fms);
      F += fms;
    }
  }
  fragColor = vec4((L / 64.0) / (1.0 - F / 64.0), 1.0);
}`, Ih = nr + Kr + Os + /* glsl */
`
uniform float uSunMu;
void main() {
  vec2 uv = fromSub(vUv, SKY_RES);
  float cosPhi = 1.0 - 2.0 * uv.x * uv.x, elev = 0.5 * PI * uv.y * uv.y;
  float mu = sin(elev), cosE = cos(elev);
  vec3 v = vec3(cosE * cosPhi, mu, cosE * sqrt(max(1.0 - cosPhi * cosPhi, 0.0)));
  vec3 s = vec3(sqrt(max(1.0 - uSunMu * uSunMu, 0.0)), uSunMu, 0.0);
  vec3 fms;
  fragColor = vec4(integrate(OBS_H, mu, uSunMu, dot(v, s), 32, fms) * uSunIllum, 1.0);
}`, Lr = (i, e) => new st(i, e, {
  type: 1016,
  depthBuffer: !1,
  generateMipmaps: !1,
  minFilter: 1006,
  magFilter: 1006
});
class Uh {
  constructor() {
    this.transRT = Lr(Ah, wh), this.msRT = Lr(Zi, Zi), this.skyRT = Lr(Us, Ns), this.uniforms = {
      uRayleigh: { value: new k() },
      uMie: { value: new De() },
      uOzone: { value: new k() },
      uSunIllum: { value: 1 },
      uTransLut: { value: this.transRT.texture },
      uMsLut: { value: this.msRT.texture },
      uSkyView: { value: this.skyRT.texture }
    };
    const { uTransLut: e, uMsLut: t, uSkyView: n, ...r } = this.uniforms;
    this.transPass = new qn(nn(Lh, r)), this.msPass = new qn(nn(Fh, { ...r, uTransLut: e })), this.skyPass = new qn(nn(Ih, { ...r, uTransLut: e, uMsLut: t, uSunMu: { value: 0 } }));
  }
  // c: atmosphereCoefficients(); sunMu: sun zenith cosine; sunIllum: illuminance at the top
  update(e, t, n, r) {
    const a = this.uniforms;
    a.uRayleigh.value.fromArray(t.rayleigh), a.uMie.value.set(t.mieScattering, t.mieExtinction), a.uOzone.value.fromArray(t.ozone), a.uSunIllum.value = r, this.skyPass.material.uniforms.uSunMu.value = n, this.transPass.render(e, this.transRT), this.msPass.render(e, this.msRT), this.skyPass.render(e, this.skyRT);
  }
}
const ls = 1024, Nh = 2.5, Oh = (
  /* glsl */
  `
out vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * mat4(mat3(viewMatrix)) * vec4(position, 1.0);
  gl_Position = p.xyww; // far plane
}`
), Bh = (
  /* glsl */
  `
uniform samplerCube uCube;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
in vec3 vDir;
out vec4 fragColor;
void main() {
  vec3 d = normalize(vDir);
  vec4 sky = textureLod(uCube, vec3(d.x, max(d.y, 0.0), d.z), 0.0);
  float c = dot(d, uSunDir);
  // 0.27 deg disc with limb darkening, plus a tight glow; hidden by clouds (cube alpha)
  float disc = smoothstep(0.999985, 0.999992, c) * (0.6 + 0.4 * smoothstep(0.999985, 1.0, c));
  vec3 col = sky.rgb + uSunColor * (disc * 900.0 + pow(max(c, 0.0), 2200.0) * 1.5) * step(0.0, d.y) * sky.a;
  fragColor = vec4(col, 1.0);
}`
), Gh = nr + /* glsl */
`
const float CLOUD_H = ${Nh.toFixed(2)};
const vec3 WATER = vec3(0.02, 0.035, 0.045);  // deep-water body reflectance for the lower hemisphere
uniform int uFace;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uCloudCoverage;
in vec2 vUv;
out vec4 fragColor;

vec3 faceDir(vec2 uv) {
  vec2 c = uv * 2.0 - 1.0;
  if (uFace == 0) return vec3(1.0, -c.y, -c.x);
  if (uFace == 1) return vec3(-1.0, -c.y, c.x);
  if (uFace == 2) return vec3(c.x, 1.0, c.y);
  if (uFace == 3) return vec3(c.x, -1.0, -c.y);
  if (uFace == 4) return vec3(c.x, -c.y, 1.0);
  return vec3(-c.x, -c.y, -1.0);
}

// cloud layer ported from three's Sky.js (static: time = 0, its cloudScale/elevation/density)
vec2 gradient(vec2 i) {
  vec3 p = fract(i.xyx * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yzx + 33.33);
  return fract((p.xx + p.yz) * p.zy) * 2.0 - 1.0;
}
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = dot(gradient(i), f);
  float b = dot(gradient(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
  float c = dot(gradient(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
  float d = dot(gradient(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y) * 1.6;
}
float fbm(vec2 p) {
  float s = 0.0, a = 1.0;
  for (int i = 0; i < 4; i++) { s += a * noise(p); a *= 0.5; p *= 2.0; }
  return s;
}

void main() {
  vec3 d = normalize(faceDir(vUv));
  vec3 up = skyView(vec3(0.0, 1.0, 0.0), uSunDir);
  if (d.y < 0.0) {
    // below the horizon: sea, Fresnel between the mirrored sky and a dark water body
    float F = 0.02 + 0.98 * pow(1.0 + d.y, 5.0);
    vec3 body = WATER * (uSunColor * max(uSunDir.y, 0.0) + up);
    fragColor = vec4(mix(body, skyView(vec3(d.x, -d.y, d.z), uSunDir), F), 1.0);
    return;
  }
  vec3 col = skyView(d, uSunDir);
  float vis = 1.0;
  if (d.y > 1e-3 && uCloudCoverage > 0.0) {
    vec2 p = d.xz / d.y * 0.396;   // cloudScale 2e-4 * 1000 / mix(1, 0.1, cloudElevation 0.55)
    float n = clamp(fbm(p) * 0.7 + 0.5, 0.0, 1.0);
    float th = 1.0 - clamp(uCloudCoverage + noise(p * 0.3) * 0.222, 0.0, 1.0);  // clear gaps / dense banks
    float fade = smoothstep(0.0, 0.063, d.y);
    float mask = smoothstep(th, th + 0.3, n) * fade;
    float depth = max(0.0, n - th);
    float beer = exp(-4.0 * depth);
    float shade = mix(0.45, 1.0, clamp(beer * (1.0 - beer * beer) * 2.6, 0.0, 1.0));  // beer-powder
    float c = dot(d, uSunDir);
    float silver = clamp(0.51 / pow(1.49 - c * 1.4, 1.5), 0.0, 3.0);  // HG g = 0.7 rim toward the sun
    float edge = mask * (1.0 - mask) * 4.0;
    float alpha = (1.0 - exp(-depth * 6.6)) * fade;                    // cloudDensity 0.55

    // the deck point along d: sunlight through the atmosphere (and planet shadow) to it, and the
    // eye-to-deck transmittance so distant clouds dissolve into the haze
    float r0 = RB + OBS_H, rc = RB + CLOUD_H;
    float t = -r0 * d.y + sqrt(r0 * r0 * d.y * d.y + (rc - r0) * (rc + r0));
    float muV = (r0 * d.y + t) / rc;
    float muS = clamp((r0 * uSunDir.y + t * c) / rc, -1.0, 1.0);
    vec3 sun = uSunIllum * transmittance(CLOUD_H, muS) * sunVisible(CLOUD_H, rc, muS) * 0.22;  // albedo/pi
    vec3 cloud = up + sun * (shade + silver * edge * 0.6);
    vec3 tv = clamp(transmittance(OBS_H, d.y) / max(transmittance(CLOUD_H, muV), vec3(1e-4)), 0.0, 1.0);
    col = mix(col, mix(col, cloud, tv), alpha);
    vis = 1.0 - alpha;
  }
  fragColor = vec4(col, vis);
}`;
class kh {
  constructor(e) {
    this.renderer = e, this.cubeSize = ls, this.sunDir = new k(0, 1, 0), this.sunColor = new k(1, 1, 1), this.params = { elevation: 3.5, azimuth: 205, turbidity: 2, rayleigh: 1, cloudCoverage: 0.38, sunIntensity: 9 }, this.atmosphere = new Uh(), this.cubeRT = new Yr(ls, {
      type: 1016,
      generateMipmaps: !0,
      depthBuffer: !1,
      minFilter: 1008,
      magFilter: 1006
    }), this.cube = this.cubeRT.texture, this.cubePass = new qn(nn(Gh, {
      ...this.atmosphere.uniforms,
      uFace: { value: 0 },
      uSunDir: { value: this.sunDir },
      uSunColor: { value: this.sunColor },
      uCloudCoverage: { value: 0 }
    })), this.camera = new qr(), this.background = new Pt(
      new Jn(1, 1, 1),
      new Ut({
        glslVersion: Yn,
        vertexShader: Oh,
        fragmentShader: Bh,
        uniforms: { uCube: { value: this.cube }, uSunDir: { value: this.sunDir }, uSunColor: { value: this.sunColor } },
        side: 1,
        depthWrite: !1
      })
    ), this.background.frustumCulled = !1, this.background.renderOrder = 1e3;
  }
  update() {
    const e = this.params, t = this.renderer, n = ci.degToRad(90 - e.elevation), r = ci.degToRad(e.azimuth);
    this.sunDir.setFromSphericalCoords(1, n, r);
    const a = Rh(e), s = Ph(a, Dh, Math.max(this.sunDir.y, 0)), o = ci.smoothstep(e.elevation, -2, 2);
    this.sunColor.set(s[0], s[1], s[2]).multiplyScalar(e.sunIntensity * o);
    const c = t.getRenderTarget(), l = t.getActiveCubeFace(), f = t.getActiveMipmapLevel();
    this.atmosphere.update(t, a, this.sunDir.y, Math.PI * e.sunIntensity);
    const d = this.cubePass.material.uniforms;
    d.uCloudCoverage.value = e.cloudCoverage;
    for (let u = 0; u < 6; u++)
      d.uFace.value = u, this.cube.generateMipmaps = u === 5, t.setRenderTarget(this.cubeRT, u), t.render(this.cubePass.mesh, this.camera);
    t.setRenderTarget(c, l, f), this.cube.needsPMREMUpdate = !0;
  }
}
function zi(i, e, t) {
  let n = Math.imul(i, 374761393) ^ Math.imul(e, 668265263) ^ Math.imul(t, 2147483647);
  return n = Math.imul(n ^ n >>> 13, 1274126177), ((n ^ n >>> 16) >>> 0) / 4294967295;
}
function Bs(i, e, t = 0) {
  const n = Math.floor(i), r = Math.floor(e), a = i - n, s = e - r, o = a * a * (3 - 2 * a), c = s * s * (3 - 2 * s), l = zi(n, r, t), f = zi(n + 1, r, t), d = zi(n, r + 1, t), u = zi(n + 1, r + 1, t);
  return (l + (f - l) * o + (d - l) * c + (l - f - d + u) * o * c) * 2 - 1;
}
function Fr(i, e, t = 5, n = 0) {
  let r = 0, a = 0.5, s = 0;
  for (let o = 0; o < t; o++) {
    r += a * Bs(i, e, n + o * 17), s += a;
    const c = 1.6 * i - 1.2 * e, l = 1.2 * i + 1.6 * e;
    i = c, e = l, a *= 0.5;
  }
  return r / s;
}
function zh(i, e, t = 5, n = 0) {
  let r = 0, a = 0.5, s = 0;
  for (let o = 0; o < t; o++) {
    const c = 1 - Math.abs(Bs(i, e, n + o * 31));
    r += a * c * c, s += a;
    const l = 1.6 * i - 1.2 * e, f = 1.2 * i + 1.6 * e;
    i = l, e = f, a *= 0.5;
  }
  return r / s;
}
const Ir = (i, e, t) => {
  const n = Math.min(1, Math.max(0, (t - i) / (e - i)));
  return n * n * (3 - 2 * n);
};
function Vh(i, e) {
  const t = Fr(i * 35e-4 + 11.3, e * 35e-4 - 4.1, 4, 3), n = Math.hypot(i - 40 * t, e + 30 * t) * (1 + 0.32 * Fr(i * 3e-3, e * 3e-3, 3, 7));
  let r = 62 * Math.exp(-((n / 190) ** 2)) + 15 * Math.exp(-((n / 430) ** 2)) - 10;
  r -= 32 * Ir(380, 1100, n);
  const a = Ir(4, 40, r);
  return r += a * 26 * (zh(i * 9e-3, e * 9e-3, 5, 1) - 0.45), r > 0 && r < 5 ? r *= 0.55 + 0.09 * r : r <= 0 && r > -14 && (r = -14 * Math.pow(-r / 14, 1.8)), r += 1.2 * Fr(i * 0.05, e * 0.05, 3, 9) * Ir(-30, 2, r), r;
}
const Vi = 6, Gr = 32, Hh = (
  /* glsl */
  `
in vec3 position;
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`
), Wh = (
  /* glsl */
  `
precision highp float;
precision highp sampler2D;
in vec2 vUv;
out vec4 fragColor;
`
), cs = (
  /* glsl */
  `
uniform sampler2D tSrc;
uniform vec2 uTexel; // source texel size
#ifdef PREFILTER
uniform vec4 uCurve; // threshold-knee, 2*knee, 0.25/knee, threshold
uniform float uClamp;
#endif

float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }

vec3 tap(vec2 o) {
  vec3 c = texture(tSrc, vUv + o * uTexel).rgb;
#ifdef PREFILTER
  c = max(c, 0.0); // negatives (and NaN on most GPUs) -> 0
  float l = max(luma(c), 1e-4);
  c *= min(1.0, uClamp / l);
  l = min(l, uClamp);
  float q = clamp(l - uCurve.x, 0.0, uCurve.y);
  c *= max(uCurve.z * q * q, l - uCurve.w) / l;
#endif
  return c;
}

void main() {
  vec3 a = tap(vec2(-2.0, 2.0)), b = tap(vec2(0.0, 2.0)), c = tap(vec2(2.0, 2.0));
  vec3 d = tap(vec2(-2.0, 0.0)), e = tap(vec2(0.0, 0.0)), f = tap(vec2(2.0, 0.0));
  vec3 g = tap(vec2(-2.0, -2.0)), h = tap(vec2(0.0, -2.0)), i = tap(vec2(2.0, -2.0));
  vec3 j = tap(vec2(-1.0, 1.0)), k = tap(vec2(1.0, 1.0)), l = tap(vec2(-1.0, -1.0)), m = tap(vec2(1.0, -1.0));
  vec3 g0 = (a + b + d + e) * 0.25, g1 = (b + c + e + f) * 0.25;
  vec3 g2 = (d + e + g + h) * 0.25, g3 = (e + f + h + i) * 0.25;
  vec3 g4 = (j + k + l + m) * 0.25;
#ifdef PREFILTER
  float w0 = 0.125 / (1.0 + luma(g0)), w1 = 0.125 / (1.0 + luma(g1));
  float w2 = 0.125 / (1.0 + luma(g2)), w3 = 0.125 / (1.0 + luma(g3));
  float w4 = 0.5 / (1.0 + luma(g4));
  vec3 r = (g0 * w0 + g1 * w1 + g2 * w2 + g3 * w3 + g4 * w4) / (w0 + w1 + w2 + w3 + w4);
#else
  vec3 r = g4 * 0.5 + (g0 + g1 + g2 + g3) * 0.125;
#endif
  fragColor = vec4(r, 1.0);
}`
), Xh = (
  /* glsl */
  `
uniform sampler2D tSrc;
uniform vec2 uTexel; // source (coarser) texel size
void main() {
  vec4 d = uTexel.xyxy * vec4(1.0, 1.0, -1.0, 0.0);
  vec3 s = texture(tSrc, vUv - d.xy).rgb + texture(tSrc, vUv - d.wy).rgb * 2.0 + texture(tSrc, vUv - d.zy).rgb
    + texture(tSrc, vUv + d.zw).rgb * 2.0 + texture(tSrc, vUv).rgb * 4.0 + texture(tSrc, vUv + d.xw).rgb * 2.0
    + texture(tSrc, vUv + d.zy).rgb + texture(tSrc, vUv + d.wy).rgb * 2.0 + texture(tSrc, vUv + d.xy).rgb;
  fragColor = vec4(s * (1.0 / 16.0), 1.0);
}`
), qh = (
  /* glsl */
  `
uniform sampler2D tSrc;
uniform vec2 uJitter; // [0,1)^2
void main() {
  float s = 0.0;
  for (int j = 0; j < 4; j++) for (int i = 0; i < 4; i++) {
    vec2 o = (vec2(float(i), float(j)) + uJitter) * 0.25 - 0.5;
    vec3 c = max(texture(tSrc, vUv + o * ${(1 / Gr).toFixed(8)}).rgb, 0.0);
    s += log2(clamp(dot(c, vec3(0.2126, 0.7152, 0.0722)), 1e-4, 64.0));
  }
  fragColor = vec4(s * (1.0 / 16.0), 0.0, 0.0, 1.0);
}`
), Yh = (
  /* glsl */
  `
uniform sampler2D tSrc;  // metering target, linear filtered
uniform sampler2D tPrev; // previous 1x1 state
uniform vec2 uK;         // blend factor when scene brightens (x) / darkens (y); 1 = snap
uniform vec2 uRange;     // allowed log2 luminance range (from min/max exposure)
void main() {
  float sum = 0.0;
  for (int j = 0; j < 16; j++) for (int i = 0; i < 16; i++)
    sum += texture(tSrc, (vec2(float(i), float(j)) + 0.5) * (1.0 / 16.0)).r;
  float t = clamp(sum * (1.0 / 256.0), uRange.x, uRange.y);
  float prev = texelFetch(tPrev, ivec2(0), 0).r;
  float k = t > prev ? uK.x : uK.y;
  float s = k >= 1.0 ? t : prev + (t - prev) * k;
  if (isnan(s)) s = t;
  fragColor = vec4(s, 0.0, 0.0, 1.0);
}`
), Kh = (
  /* glsl */
  `
uniform sampler2D tHdr;
uniform sampler2D tBloom;
uniform sampler2D tExp;   // 1x1 adapted log2 average luminance
uniform float uExposure;  // exposure compensation (auto) or absolute exposure
uniform float uAuto;      // 1 = auto exposure
uniform vec3 uExpo;       // keyValue, minExposure, maxExposure
uniform float uBloom;
uniform vec2 uLook;       // AgX look: power (contrast), saturation
uniform float uFrame;     // 0..255, dither seed
uniform float uDroplets;  // 0..1
uniform float uTime;      // seconds, wraps at 4096
uniform float uAspect;    // width / height
uniform float uResY;      // height in pixels

const mat3 SRGB_TO_REC2020 = mat3(
  vec3(0.6274, 0.0691, 0.0164), vec3(0.3293, 0.9195, 0.0880), vec3(0.0433, 0.0113, 0.8956));
const mat3 REC2020_TO_SRGB = mat3(
  vec3(1.6605, -0.1246, -0.0182), vec3(-0.5876, 1.1329, -0.1006), vec3(-0.0728, -0.0083, 1.1187));
const mat3 AGX_INSET = mat3(
  vec3(0.856627153315983, 0.137318972929847, 0.11189821299995),
  vec3(0.0951212405381588, 0.761241990602591, 0.0767994186031903),
  vec3(0.0482516061458583, 0.101439036467562, 0.811302368396859));
const mat3 AGX_OUTSET = mat3(
  vec3(1.1271005818144368, -0.1413297634984383, -0.14132976349843826),
  vec3(-0.11060664309660323, 1.157823702216272, -0.11060664309660294),
  vec3(-0.016493938717834573, -0.016493938717834257, 1.2519364065950405));
const float AGX_MIN_EV = -12.47393;
const float AGX_MAX_EV = 4.026069;

vec3 agxContrast(vec3 x) {
  vec3 x2 = x * x, x4 = x2 * x2;
  return 15.5 * x4 * x2 - 40.14 * x4 * x + 31.96 * x4 - 6.868 * x2 * x + 0.4298 * x2 + 0.1191 * x - 0.00232;
}

vec3 agx(vec3 c) {
  c = AGX_INSET * (SRGB_TO_REC2020 * c);
  c = clamp((log2(max(c, 1e-10)) - AGX_MIN_EV) / (AGX_MAX_EV - AGX_MIN_EV), 0.0, 1.0);
  c = agxContrast(c);
  // AgX "punchy"-style look in the encoded domain
  c = pow(max(c, 0.0), vec3(uLook.x));
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = l + uLook.y * (c - l);
  c = AGX_OUTSET * c;
  return clamp(REC2020_TO_SRGB * pow(max(c, 0.0), vec3(2.2)), 0.0, 1.0);
}

// Dave Hoskins hash without sine
vec3 hash33(vec3 p) {
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.xxy + p.yxx) * p.zyx);
}

// ---- lens droplets (only evaluated when uDroplets > 0) -----------------------------------------
// All lengths are in screen-height units (p = vUv * vec2(aspect, 1)). Each drop is a tiny lens: the
// image under it is sampled from the mirrored side of its centre, sample = centre - (K-1) * d, so it
// looks inverted and slightly magnified, with a faint dark rim.
const float DROP_K = 1.8;

// d: pixel - drop centre, r: radius. Returns (uv offset, darkening).
vec3 lensDrop(vec2 d, float r) {
  float dist = length(d);
  float cov = clamp((r - dist) * uResY + 0.5, 0.0, 1.0); // 1px AA
  if (cov <= 0.0) return vec3(0.0);
  return vec3(-d * DROP_K * cov, 0.22 * smoothstep(0.6, 1.0, dist / r) * cov);
}

// One drop (at most) per grid cell, kept inside its cell so only the own cell is tested.
vec3 dropLayer(vec2 p, float scale, float density, float seed) {
  vec2 q = p * scale + seed * 17.31;
  vec2 id = floor(q);
  vec3 h = hash33(vec3(id, seed)), g = hash33(vec3(id + 57.0, seed));
  if (h.x > density) return vec3(0.0);
  float fade = clamp((uDroplets - g.x * 0.8) * 6.0, 0.0, 1.0); // drops dry up one by one (order = g.x)
  float rf = mix(0.10, 0.24, h.y * h.y);                          // radius, cell units
  vec2 c = rf + vec2(h.z, g.y) * (1.0 - 2.0 * rf);
  return lensDrop((fract(q) - c) / scale, rf * fade / scale);
}

// A drop sliding down the lens, leaving a thin wet trail above it. speed in cycles/s.
// Head enters above the screen and leaves below with its trail fully off-screen, so the wrap never pops.
vec3 streak(vec2 p, float id, float speed, float amp) {
  const float R = 0.016, L = 0.45, W = 0.0035;
  float u = uTime * speed + id * 0.37;
  float cyc = mod(floor(u), 128.0), f = fract(u);
  f += 0.012 * sin(f * 47.0); // stick-slip
  vec3 h = hash33(vec3(id, cyc, 5.1));
  float x0 = (0.08 + 0.84 * h.x) * uAspect;
  float hy = mix(1.0 + R, -R - L, f);
  float hx = x0 + 0.006 * sin(hy * 14.0 + h.y * 6.28);
  vec3 o = lensDrop(p - vec2(hx, hy), R * amp);
  float ty = p.y - hy;
  if (ty > 0.0 && ty < L) {
    float a = smoothstep(0.0, 0.03, ty) * (1.0 - ty / L) * amp;
    float tx = (p.x - x0 - 0.006 * sin(p.y * 14.0 + h.y * 6.28)) / W;
    float cov = clamp((1.0 - abs(tx)) * W * uResY + 0.5, 0.0, 1.0) * a;
    o += vec3(-tx * W * DROP_K * cov, 0.0, 0.12 * smoothstep(0.5, 1.0, abs(tx)) * cov);
  }
  return o;
}

// Returns (uv offset, darkening).
vec3 droplets() {
  vec2 p = vUv * vec2(uAspect, 1.0);
  float sa = smoothstep(0.0, 0.4, uDroplets);
  vec3 a = dropLayer(p, 6.0, 0.30, 0.0) + dropLayer(p, 10.0, 0.20, 1.0) + dropLayer(p, 17.0, 0.06, 2.0)
    + streak(p, 0.0, 0.0625, sa) + streak(p, 1.0, 0.03125, sa);
  return vec3(a.xy / vec2(uAspect, 1.0), min(a.z, 0.5));
}

void main() {
  float ex = uExposure;
  if (uAuto > 0.5) ex *= clamp(uExpo.x * exp2(-texelFetch(tExp, ivec2(0), 0).r), uExpo.y, uExpo.z);

  vec2 uv = vUv;
  float dark = 0.0;
  if (uDroplets > 0.001) {
    vec3 dr = droplets();
    uv += dr.xy;
    dark = dr.z;
  }

  vec3 c = (texture(tHdr, uv).rgb + texture(tBloom, uv).rgb * uBloom) * (ex * (1.0 - dark));
  vec2 d = (vUv - 0.5) * 1.41421356; // |d|^2 = 1 at corners
  c = agx(c) * (1.0 - 0.08 * dot(d, d));
  vec3 o = mix(pow(c, vec3(1.0 / 2.4)) * 1.055 - 0.055, c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308))));

  // TPDF dither, +-1/255, after sRGB encoding and before the 8-bit store
  vec3 n = hash33(vec3(gl_FragCoord.xy, uFrame)) + hash33(vec3(gl_FragCoord.xy, uFrame + 17.0));
  fragColor = vec4(o + (n - 1.0) * (1.0 / 255.0), 1.0);
}`
), zn = (i, e, t = {}, n = {}) => new Xr({
  glslVersion: Yn,
  vertexShader: Hh,
  fragmentShader: Wh + i,
  uniforms: e,
  defines: t,
  depthTest: !1,
  depthWrite: !1,
  ...n
});
class Zh {
  constructor(e) {
    ua(this, "params", {
      // Exposure. autoExposure: `exposure` is a multiplier on the metered exposure (exposure compensation, 1 = neutral).
      // !autoExposure: `exposure` is the absolute exposure, as before.
      exposure: 1,
      autoExposure: !0,
      // Metered exposure = keyValue / (log-average scene luminance). 0.18 puts the scene's geometric mean at
      // middle grey, which this AgX look maps to ~0.46 sRGB. Tune: ~0.12 moodier/darker, ~0.3 airy/bright.
      keyValue: 0.18,
      adaptUp: 2.5,
      // adaptation rate (1/s) when the scene gets brighter (exposure falls); ~0.4 s time constant
      adaptDown: 1,
      // rate (1/s) when the scene gets darker (exposure rises); ~1 s time constant
      minExposure: 0.05,
      // metered exposure clamp (linear multipliers, ~ -4.3 .. +4.3 EV around 1)
      maxExposure: 20,
      bloomStrength: 0.06,
      bloomThreshold: 1,
      bloomClamp: 64,
      contrast: 1.12,
      saturation: 1.3,
      droplets: 0
      // 0..1 lens water droplets; 0 costs nothing
    });
    this.renderer = e, this.geometry = new Nt(), this.geometry.setAttribute("position", new Ht([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3)), this.mesh = new Pt(this.geometry), this.mesh.frustumCulled = !1, this.camera = new pi(-1, 1, 1, -1, 0, 1);
    const t = () => ({ tSrc: { value: null }, uTexel: { value: null } });
    this.matPre = zn(cs, { ...t(), uCurve: { value: new ze() }, uClamp: { value: 64 } }, { PREFILTER: 1 }), this.matDown = zn(cs, t()), this.matUp = zn(Xh, t(), {}, {
      blending: 5,
      blendEquation: 100,
      blendSrc: 201,
      blendDst: 201
    }), this.matMeter = zn(qh, { tSrc: { value: null }, uJitter: { value: new De() } }), this.matAdapt = zn(Yh, {
      tSrc: { value: null },
      tPrev: { value: null },
      uK: { value: new De(1, 1) },
      uRange: { value: new De(-8, 4) }
    }), this.matComp = zn(Kh, {
      tHdr: { value: null },
      tBloom: { value: null },
      tExp: { value: null },
      uExposure: { value: 1 },
      uAuto: { value: 1 },
      uExpo: { value: new k(0.18, 0.05, 20) },
      uBloom: { value: 0 },
      uLook: { value: new De(1, 1) },
      uFrame: { value: 0 },
      uDroplets: { value: 0 },
      uTime: { value: 0 },
      uAspect: { value: 1 },
      uResY: { value: 1 }
    }), this.levels = [], this.texel = [new De()];
    for (let a = 0; a < Vi; a++)
      this.levels.push(new st(1, 1, {
        type: 1016,
        format: 1023,
        minFilter: 1006,
        magFilter: 1006,
        wrapS: 1001,
        wrapT: 1001,
        depthBuffer: !1,
        stencilBuffer: !1,
        generateMipmaps: !1
      })), this.texel.push(new De());
    this.meterRT = new st(Gr, Gr, {
      type: 1016,
      format: 1023,
      minFilter: 1006,
      magFilter: 1006,
      depthBuffer: !1,
      stencilBuffer: !1,
      generateMipmaps: !1
    });
    const n = e.extensions.has("EXT_color_buffer_float");
    this.adapt = [0, 1].map(() => new st(1, 1, {
      type: n ? 1015 : 1016,
      format: 1023,
      minFilter: 1003,
      magFilter: 1003,
      depthBuffer: !1,
      stencilBuffer: !1,
      generateMipmaps: !1
    })), this._cur = 0, this._snap = !0, this._frame = 0, this._time = 0;
    const r = e.getDrawingBufferSize(new De());
    this.setSize(r.x, r.y);
  }
  setSize(e, t) {
    let n = Math.max(1, Math.floor(e)), r = Math.max(1, Math.floor(t));
    this.matComp.uniforms.uAspect.value = n / r, this.matComp.uniforms.uResY.value = r, this._snap = !0, this.texel[0].set(1 / n, 1 / r);
    for (let a = 0; a < Vi; a++)
      n = Math.max(1, Math.floor(n / 2)), r = Math.max(1, Math.floor(r / 2)), this.levels[a].setSize(n, r), this.texel[a + 1].set(1 / n, 1 / r);
  }
  _pass(e, t) {
    this.mesh.material = e, this.renderer.setRenderTarget(t), this.renderer.render(this.mesh, this.camera);
  }
  _blit(e, t, n, r) {
    e.uniforms.tSrc.value = t, e.uniforms.uTexel.value = n, this._pass(e, r);
  }
  // Two tiny passes: HDR -> 32x32 log2 luminance -> 1x1 mean + temporal adaptation (all on the GPU).
  _meterExposure(e, t) {
    const n = this.params, r = this.matMeter.uniforms, a = this.matAdapt.uniforms, s = this._frame;
    r.tSrc.value = e, r.uJitter.value.set(s * 0.7548776662466927 % 1, s * 0.5698402909980532 % 1), this._pass(this.matMeter, this.meterRT);
    const o = Math.max(n.keyValue, 1e-4), c = Math.max(Math.min(n.minExposure, n.maxExposure), 1e-4), l = Math.max(n.minExposure, n.maxExposure, 1e-4);
    a.tSrc.value = this.meterRT.texture, a.tPrev.value = this.adapt[this._cur].texture, a.uK.value.set(this._snap ? 1 : 1 - Math.exp(-t * n.adaptUp), this._snap ? 1 : 1 - Math.exp(-t * n.adaptDown)), a.uRange.value.set(Math.log2(o / l), Math.log2(o / c)), this._cur ^= 1, this._pass(this.matAdapt, this.adapt[this._cur]), this._snap = !1;
  }
  render(e, t = 1 / 60) {
    const n = this.renderer, r = this.params, a = this.levels, s = this.texel;
    t = t > 0 ? Math.min(t, 1) : 0, this._frame = this._frame + 1 & 255, this._time = (this._time + t) % 4096;
    const o = n.getRenderTarget(), c = n.autoClear, l = n.info.autoReset;
    n.autoClear = !1, n.info.autoReset = !1, r.autoExposure ? this._meterExposure(e, t) : this._snap = !0;
    const f = r.bloomThreshold, d = Math.max(f * 0.5, 1e-4), u = this.matPre.uniforms;
    if (u.uCurve.value.set(f - d, 2 * d, 0.25 / d, f), u.uClamp.value = r.bloomClamp, r.bloomStrength > 0) {
      this._blit(this.matPre, e, s[0], a[0]);
      for (let _ = 1; _ < Vi; _++) this._blit(this.matDown, a[_ - 1].texture, s[_], a[_]);
      for (let _ = Vi - 2; _ >= 0; _--) this._blit(this.matUp, a[_ + 1].texture, s[_ + 2], a[_]);
    }
    const h = this.matComp.uniforms;
    h.tHdr.value = e, h.tBloom.value = a[0].texture, h.tExp.value = this.adapt[this._cur].texture, h.uExposure.value = r.exposure, h.uAuto.value = r.autoExposure ? 1 : 0, h.uExpo.value.set(r.keyValue, Math.min(r.minExposure, r.maxExposure), Math.max(r.minExposure, r.maxExposure)), h.uLook.value.set(r.contrast, r.saturation), h.uBloom.value = r.bloomStrength, h.uFrame.value = this._frame, h.uDroplets.value = Math.min(Math.max(r.droplets, 0), 1), h.uTime.value = this._time, this._pass(this.matComp, null), n.setRenderTarget(o), n.autoClear = c, n.info.autoReset = l;
  }
  dispose() {
    for (const e of this.levels) e.dispose();
    this.meterRT.dispose();
    for (const e of this.adapt) e.dispose();
    for (const e of [this.matPre, this.matDown, this.matUp, this.matMeter, this.matAdapt, this.matComp]) e.dispose();
    this.geometry.dispose();
  }
}
const Ur = {
  absorption: [0.22, 0.85, 0.1],
  scatter: [0.05, 0, 0.09],
  foam: [0.8, 0.66, 0.88]
};
function $h() {
  try {
    return !!document.createElement("canvas").getContext("webgl2");
  } catch {
    return !1;
  }
}
function Jh(i) {
  const e = new mn(4, 4);
  e.type = 1014, e.compareFunction = 515, e.minFilter = e.magFilter = 1006;
  const t = new st(4, 4, { depthTexture: e }), n = i.getRenderTarget();
  return i.setRenderTarget(t), i.clear(!0, !0, !0), i.setRenderTarget(n), e;
}
function Qh(i) {
  const e = matchMedia("(prefers-reduced-motion: reduce)").matches, t = i.querySelector(".ocean-stage");
  if (!t || e || !$h()) {
    t && (t.dataset.ocean = "static");
    return;
  }
  const n = document.createElement("canvas");
  n.setAttribute("aria-hidden", "true"), t.appendChild(n);
  const r = document.createElement("a");
  r.className = "ocean-credit", r.href = "https://github.com/Humpalumps/Ultra-Water", r.target = "_blank", r.rel = "noopener", r.textContent = "海面 · Ultra Water", t.appendChild(r);
  let a;
  const s = () => {
    t.dataset.ocean = "static", i.classList.remove("has-ocean"), n.remove(), r.remove();
    try {
      a == null || a.dispose();
    } catch {
    }
  };
  try {
    a = new Wd({
      canvas: n,
      antialias: !1,
      depth: !1,
      stencil: !1,
      alpha: !1,
      powerPreference: "high-performance"
    });
  } catch {
    s();
    return;
  }
  a.autoClear = !1, a.setClearColor(1973050, 1), a.outputColorSpace = fi;
  try {
    let v = function() {
      const X = Math.max(1, t.clientWidth), Z = Math.max(1, t.clientHeight), ee = u ? 1 : 1.25;
      a.setPixelRatio(Math.min(window.devicePixelRatio || 1, ee)), a.setSize(X, Z, !1), h.aspect = X / Z, h.updateProjectionMatrix();
      const ve = a.getDrawingBufferSize(new De());
      w == null || w.dispose(), w = new st(ve.x, ve.y, {
        type: 1016,
        samples: 2,
        generateMipmaps: !1,
        depthTexture: new mn(ve.x, ve.y, 1015)
      }), R.uniforms.uSceneColor.value = w.texture, R.uniforms.uSceneDepth.value = w.depthTexture, R.uniforms.uResolution.value.set(ve.x, ve.y), T.setSize(ve.x, ve.y);
    }, I = function() {
      return F && !document.hidden && t.clientWidth > 0 && t.clientHeight > 0;
    }, G = function() {
      t.dataset.ocean = I() && L ? "running" : "paused";
    }, J = function(X) {
      if (L = 0, !I()) {
        V = X, G();
        return;
      }
      const Z = Math.min(0.05, Math.max(0, (X - V) / 1e3));
      V = X, B += Z, M.update(Z), R.update(h, B % 3600), a.setRenderTarget(w), a.clear(!0, !0, !1), a.render(S, h), a.render(y, h), T.render(w.texture, Z), L = requestAnimationFrame(J), G();
    }, W = function() {
      L || (V = performance.now(), L = requestAnimationFrame(J)), G();
    };
    var o = v, c = I, l = G, f = J, d = W;
    const u = matchMedia("(pointer: coarse)").matches, h = new It(46, 1, 0.5, 8e4);
    h.position.set(1680, 7.2, 420), h.lookAt(2480, 1.4, 1280);
    const _ = new kh(a);
    _.params.elevation = 26, _.params.azimuth = 214, _.params.cloudCoverage = 0.22, _.params.turbidity = 2.4, _.update();
    const M = new jd(a, Cs()), g = Eh(Vh, 1800, 256), p = bh(a), A = new th(32);
    A.clear(a);
    const R = new oh(M, g, _, A.uniforms);
    R.uniforms.uFoamTex.value = p.foam, R.uniforms.uReflection.value = new Wr(new Uint8Array(4), 1, 1), R.uniforms.uReflection.value.needsUpdate = !0, R.uniforms.uShadowMap.value = Jh(a), R.uniforms.uAbsorption.value.fromArray(Ur.absorption), R.uniforms.uScatterColor.value.fromArray(Ur.scatter), R.uniforms.uFoamTint.value.fromArray(Ur.foam), R.uniforms.uGlint.value = 0.45;
    const S = new Ta();
    S.add(_.background);
    const y = new Ta();
    y.add(R.mesh);
    const T = new Zh(a);
    T.params.bloomStrength = 0, T.params.exposure = 1.05;
    let w = null;
    new ResizeObserver(v).observe(t), v();
    let L = 0, F = !0, B = 0, V = performance.now();
    new IntersectionObserver((X) => {
      F = X.some((Z) => Z.isIntersecting), F ? W() : G();
    }, { threshold: 0 }).observe(i), document.addEventListener("visibilitychange", () => {
      document.hidden ? G() : W();
    }), i.classList.add("has-ocean"), W();
  } catch {
    s();
  }
}
const us = document.querySelector(".hero");
us && Qh(us);
