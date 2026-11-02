var vo = Object.defineProperty;
var xo = (i, e, t) => e in i ? vo(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var ba = (i, e, t) => xo(i, typeof e != "symbol" ? e + "" : e, t);
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ut = "srgb", Mi = "srgb-linear", or = "linear", je = "srgb";
const ei = "300 es";
function So(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function lr(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Mo() {
  const i = lr("canvas");
  return i.style.display = "block", i;
}
const wa = {};
function Aa(...i) {
  const e = "THREE." + i.shift();
  console.log(e, ...i);
}
function Is(i) {
  const e = i[0];
  if (typeof e == "string" && e.startsWith("TSL:")) {
    const t = i[1];
    t && t.isStackTrace ? i[0] += " " + t.getLocation() : i[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return i;
}
function Pe(...i) {
  i = Is(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.warn(t.getError(e)) : console.warn(e, ...i);
  }
}
function Ye(...i) {
  i = Is(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.error(t.getError(e)) : console.error(e, ...i);
  }
}
function Jn(...i) {
  const e = i.join(" ");
  e in wa || (wa[e] = !0, Pe(...i));
}
function yo(i, e, t) {
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
const Eo = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
};
class wn {
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
const Mt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Ra = 1234567;
const _i = Math.PI / 180, yi = 180 / Math.PI;
function ii() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Mt[i & 255] + Mt[i >> 8 & 255] + Mt[i >> 16 & 255] + Mt[i >> 24 & 255] + "-" + Mt[e & 255] + Mt[e >> 8 & 255] + "-" + Mt[e >> 16 & 15 | 64] + Mt[e >> 24 & 255] + "-" + Mt[t & 63 | 128] + Mt[t >> 8 & 255] + "-" + Mt[t >> 16 & 255] + Mt[t >> 24 & 255] + Mt[n & 255] + Mt[n >> 8 & 255] + Mt[n >> 16 & 255] + Mt[n >> 24 & 255]).toLowerCase();
}
function Ve(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function ea(i, e) {
  return (i % e + e) % e;
}
function To(i, e, t, n, r) {
  return n + (i - e) * (r - n) / (t - e);
}
function bo(i, e, t) {
  return i !== e ? (t - i) / (e - i) : 0;
}
function vi(i, e, t) {
  return (1 - t) * i + t * e;
}
function wo(i, e, t, n) {
  return vi(i, e, 1 - Math.exp(-t * n));
}
function Ao(i, e = 1) {
  return e - Math.abs(ea(i, e * 2) - e);
}
function Ro(i, e, t) {
  return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * (3 - 2 * i));
}
function Co(i, e, t) {
  return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * i * (i * (i * 6 - 15) + 10));
}
function Po(i, e) {
  return i + Math.floor(Math.random() * (e - i + 1));
}
function Do(i, e) {
  return i + Math.random() * (e - i);
}
function Lo(i) {
  return i * (0.5 - Math.random());
}
function Fo(i) {
  i !== void 0 && (Ra = i);
  let e = Ra += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Io(i) {
  return i * _i;
}
function Uo(i) {
  return i * yi;
}
function No(i) {
  return i > 0 && Number.isInteger(i) && 2 ** Math.round(Math.log2(i)) === i;
}
function Bo(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function Oo(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function Go(i, e, t, n, r) {
  const a = Math.cos, s = Math.sin, o = a(t / 2), l = s(t / 2), c = a((e + n) / 2), h = s((e + n) / 2), f = a((e - n) / 2), u = s((e - n) / 2), p = a((n - e) / 2), v = s((n - e) / 2);
  switch (r) {
    case "XYX":
      i.set(o * h, l * f, l * u, o * c);
      break;
    case "YZY":
      i.set(l * u, o * h, l * f, o * c);
      break;
    case "ZXZ":
      i.set(l * f, l * u, o * h, o * c);
      break;
    case "XZX":
      i.set(o * h, l * v, l * p, o * c);
      break;
    case "YXY":
      i.set(l * p, o * h, l * v, o * c);
      break;
    case "ZYZ":
      i.set(l * v, l * p, o * h, o * c);
      break;
    default:
      Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
  }
}
function Kn(i, e) {
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
function wt(i, e) {
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
const nn = {
  DEG2RAD: _i,
  RAD2DEG: yi,
  /**
   * Generate a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)
   * (universally unique identifier).
   *
   * @static
   * @method
   * @return {string} The UUID.
   */
  generateUUID: ii,
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
  clamp: Ve,
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
  euclideanModulo: ea,
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
  mapLinear: To,
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
  inverseLerp: bo,
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
  lerp: vi,
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
  damp: wo,
  /**
   * Returns a value that alternates between `0` and the given `length` parameter.
   *
   * @static
   * @method
   * @param {number} x - The value to pingpong.
   * @param {number} [length=1] - The positive value the function will pingpong to.
   * @return {number} The alternated value.
   */
  pingpong: Ao,
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
  smoothstep: Ro,
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
  smootherstep: Co,
  /**
   * Returns a random integer from `<low, high>` interval.
   *
   * @static
   * @method
   * @param {number} low - The lower value boundary.
   * @param {number} high - The upper value boundary
   * @return {number} A random integer.
   */
  randInt: Po,
  /**
   * Returns a random float from `<low, high>` interval.
   *
   * @static
   * @method
   * @param {number} low - The lower value boundary.
   * @param {number} high - The upper value boundary
   * @return {number} A random float.
   */
  randFloat: Do,
  /**
   * Returns a random integer from `<-range/2, range/2>` interval.
   *
   * @static
   * @method
   * @param {number} range - Defines the value range.
   * @return {number} A random float.
   */
  randFloatSpread: Lo,
  /**
   * Returns a deterministic pseudo-random float in the interval `[0, 1]`.
   *
   * @static
   * @method
   * @param {number} [s] - The integer seed.
   * @return {number} A random float.
   */
  seededRandom: Fo,
  /**
   * Converts degrees to radians.
   *
   * @static
   * @method
   * @param {number} degrees - A value in degrees.
   * @return {number} The converted value in radians.
   */
  degToRad: Io,
  /**
   * Converts radians to degrees.
   *
   * @static
   * @method
   * @param {number} radians - A value in radians.
   * @return {number} The converted value in degrees.
   */
  radToDeg: Uo,
  /**
   * Returns `true` if the given number is a power of two.
   *
   * @static
   * @method
   * @param {number} value - The value to check.
   * @return {boolean} Whether the given number is a power of two or not.
   */
  isPowerOfTwo: No,
  /**
   * Returns the smallest power of two that is greater than or equal to the given number.
   *
   * @static
   * @method
   * @param {number} value - The value to find a POT for.
   * @return {number} The smallest power of two that is greater than or equal to the given number.
   */
  ceilPowerOfTwo: Bo,
  /**
   * Returns the largest power of two that is less than or equal to the given number.
   *
   * @static
   * @method
   * @param {number} value - The value to find a POT for.
   * @return {number} The largest power of two that is less than or equal to the given number.
   */
  floorPowerOfTwo: Oo,
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
  setQuaternionFromProperEuler: Go,
  /**
   * Normalizes the given value according to the given typed array.
   *
   * @static
   * @method
   * @param {number} value - The float value in the range `[0,1]` to normalize.
   * @param {TypedArray} array - The typed array that defines the data type of the value.
   * @return {number} The normalize value.
   */
  normalize: wt,
  /**
   * Denormalizes the given value according to the given typed array.
   *
   * @static
   * @method
   * @param {number} value - The value to denormalize.
   * @param {TypedArray} array - The typed array that defines the data type of the value.
   * @return {number} The denormalize (float) value in the range `[0,1]`.
   */
  denormalize: Kn
}, ua = class ua {
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
    return this.x = Ve(this.x, e.x, t.x), this.y = Ve(this.y, e.y, t.y), this;
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
    return this.x = Ve(this.x, e, t), this.y = Ve(this.y, e, t), this;
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
    return this.divideScalar(n || 1).multiplyScalar(Ve(n, e, t));
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
    return Math.acos(Ve(n, -1, 1));
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
ua.prototype.isVector2 = !0;
let Re = ua;
class An {
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
    let l = n[r + 0], c = n[r + 1], h = n[r + 2], f = n[r + 3], u = a[s + 0], p = a[s + 1], v = a[s + 2], T = a[s + 3];
    if (f !== T || l !== u || c !== p || h !== v) {
      let g = l * u + c * p + h * v + f * T;
      g < 0 && (u = -u, p = -p, v = -v, T = -T, g = -g);
      let d = 1 - o;
      if (g < 0.9995) {
        const M = Math.acos(g), R = Math.sin(M);
        d = Math.sin(d * M) / R, o = Math.sin(o * M) / R, l = l * d + u * o, c = c * d + p * o, h = h * d + v * o, f = f * d + T * o;
      } else {
        l = l * d + u * o, c = c * d + p * o, h = h * d + v * o, f = f * d + T * o;
        const M = 1 / Math.sqrt(l * l + c * c + h * h + f * f);
        l *= M, c *= M, h *= M, f *= M;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = f;
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
    const o = n[r], l = n[r + 1], c = n[r + 2], h = n[r + 3], f = a[s], u = a[s + 1], p = a[s + 2], v = a[s + 3];
    return e[t] = o * v + h * f + l * p - c * u, e[t + 1] = l * v + h * u + c * f - o * p, e[t + 2] = c * v + h * p + o * u - l * f, e[t + 3] = h * v - o * f - l * u - c * p, e;
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
    const n = e._x, r = e._y, a = e._z, s = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(r / 2), f = o(a / 2), u = l(n / 2), p = l(r / 2), v = l(a / 2);
    switch (s) {
      case "XYZ":
        this._x = u * h * f + c * p * v, this._y = c * p * f - u * h * v, this._z = c * h * v + u * p * f, this._w = c * h * f - u * p * v;
        break;
      case "YXZ":
        this._x = u * h * f + c * p * v, this._y = c * p * f - u * h * v, this._z = c * h * v - u * p * f, this._w = c * h * f + u * p * v;
        break;
      case "ZXY":
        this._x = u * h * f - c * p * v, this._y = c * p * f + u * h * v, this._z = c * h * v + u * p * f, this._w = c * h * f - u * p * v;
        break;
      case "ZYX":
        this._x = u * h * f - c * p * v, this._y = c * p * f + u * h * v, this._z = c * h * v - u * p * f, this._w = c * h * f + u * p * v;
        break;
      case "YZX":
        this._x = u * h * f + c * p * v, this._y = c * p * f + u * h * v, this._z = c * h * v - u * p * f, this._w = c * h * f - u * p * v;
        break;
      case "XZY":
        this._x = u * h * f - c * p * v, this._y = c * p * f - u * h * v, this._z = c * h * v + u * p * f, this._w = c * h * f + u * p * v;
        break;
      default:
        Pe("Quaternion: .setFromEuler() encountered an unknown order: " + s);
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
    const t = e.elements, n = t[0], r = t[4], a = t[8], s = t[1], o = t[5], l = t[9], c = t[2], h = t[6], f = t[10], u = n + o + f;
    if (u > 0) {
      const p = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / p, this._x = (h - l) * p, this._y = (a - c) * p, this._z = (s - r) * p;
    } else if (n > o && n > f) {
      const p = 2 * Math.sqrt(1 + n - o - f);
      this._w = (h - l) / p, this._x = 0.25 * p, this._y = (r + s) / p, this._z = (a + c) / p;
    } else if (o > f) {
      const p = 2 * Math.sqrt(1 + o - n - f);
      this._w = (a - c) / p, this._x = (r + s) / p, this._y = 0.25 * p, this._z = (l + h) / p;
    } else {
      const p = 2 * Math.sqrt(1 + f - n - o);
      this._w = (s - r) / p, this._x = (a + c) / p, this._y = (l + h) / p, this._z = 0.25 * p;
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
    return 2 * Math.acos(Math.abs(Ve(this.dot(e), -1, 1)));
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
    const n = e._x, r = e._y, a = e._z, s = e._w, o = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + s * o + r * c - a * l, this._y = r * h + s * l + a * o - n * c, this._z = a * h + s * c + n * l - r * o, this._w = s * h - n * o - r * l - a * c, this._onChangeCallback(), this;
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
    let l = 1 - t;
    if (o < 0.9995) {
      const c = Math.acos(o), h = Math.sin(c);
      l = Math.sin(l * c) / h, t = Math.sin(t * c) / h, this._x = this._x * l + n * t, this._y = this._y * l + r * t, this._z = this._z * l + a * t, this._w = this._w * l + s * t, this._onChangeCallback();
    } else
      this._x = this._x * l + n * t, this._y = this._y * l + r * t, this._z = this._z * l + a * t, this._w = this._w * l + s * t, this.normalize();
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
const ha = class ha {
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
    return this.applyQuaternion(Ca.setFromEuler(e));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ca.setFromAxisAngle(e, t));
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
    const t = this.x, n = this.y, r = this.z, a = e.x, s = e.y, o = e.z, l = e.w, c = 2 * (s * r - o * n), h = 2 * (o * t - a * r), f = 2 * (a * n - s * t);
    return this.x = t + l * c + s * f - o * h, this.y = n + l * h + o * c - a * f, this.z = r + l * f + a * h - s * c, this;
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
    return this.x = Ve(this.x, e.x, t.x), this.y = Ve(this.y, e.y, t.y), this.z = Ve(this.z, e.z, t.z), this;
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
    return this.x = Ve(this.x, e, t), this.y = Ve(this.y, e, t), this.z = Ve(this.z, e, t), this;
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
    return this.divideScalar(n || 1).multiplyScalar(Ve(n, e, t));
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
    const n = e.x, r = e.y, a = e.z, s = t.x, o = t.y, l = t.z;
    return this.x = r * l - a * o, this.y = a * s - n * l, this.z = n * o - r * s, this;
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
    return _r.copy(this).projectOnVector(e), this.sub(_r);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(e) {
    return this.sub(_r.copy(e).multiplyScalar(2 * this.dot(e)));
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
    return Math.acos(Ve(n, -1, 1));
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
ha.prototype.isVector3 = !0;
let U = ha;
const _r = /* @__PURE__ */ new U(), Ca = /* @__PURE__ */ new An(), fa = class fa {
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
  constructor(e, t, n, r, a, s, o, l, c) {
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
    ], e !== void 0 && this.set(e, t, n, r, a, s, o, l, c);
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
  set(e, t, n, r, a, s, o, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = r, h[2] = o, h[3] = t, h[4] = a, h[5] = l, h[6] = n, h[7] = s, h[8] = c, this;
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
    const n = e.elements, r = t.elements, a = this.elements, s = n[0], o = n[3], l = n[6], c = n[1], h = n[4], f = n[7], u = n[2], p = n[5], v = n[8], T = r[0], g = r[3], d = r[6], M = r[1], R = r[4], S = r[7], y = r[2], b = r[5], A = r[8];
    return a[0] = s * T + o * M + l * y, a[3] = s * g + o * R + l * b, a[6] = s * d + o * S + l * A, a[1] = c * T + h * M + f * y, a[4] = c * g + h * R + f * b, a[7] = c * d + h * S + f * A, a[2] = u * T + p * M + v * y, a[5] = u * g + p * R + v * b, a[8] = u * d + p * S + v * A, this;
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
    const e = this.elements, t = e[0], n = e[1], r = e[2], a = e[3], s = e[4], o = e[5], l = e[6], c = e[7], h = e[8];
    return t * s * h - t * o * c - n * a * h + n * o * l + r * a * c - r * s * l;
  }
  /**
   * Inverts this matrix, using the [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], a = e[3], s = e[4], o = e[5], l = e[6], c = e[7], h = e[8], f = h * s - o * c, u = o * l - h * a, p = c * a - s * l, v = t * f + n * u + r * p;
    if (v === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const T = 1 / v;
    return e[0] = f * T, e[1] = (r * c - h * n) * T, e[2] = (o * n - r * s) * T, e[3] = u * T, e[4] = (h * t - r * l) * T, e[5] = (r * a - o * t) * T, e[6] = p * T, e[7] = (n * l - c * t) * T, e[8] = (s * t - n * a) * T, this;
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
    const l = Math.cos(a), c = Math.sin(a);
    return this.set(
      n * l,
      n * c,
      -n * (l * s + c * o) + s + e,
      -r * c,
      r * l,
      -r * (-c * s + l * o) + o + t,
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
    return Jn("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(vr.makeScale(e, t)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @deprecated
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(e) {
    return Jn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(vr.makeRotation(-e)), this;
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
    return Jn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(vr.makeTranslation(e, t)), this;
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
fa.prototype.isMatrix3 = !0;
let Le = fa;
const vr = /* @__PURE__ */ new Le(), Pa = /* @__PURE__ */ new Le().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), Da = /* @__PURE__ */ new Le().set(
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
function zo() {
  const i = {
    enabled: !0,
    workingColorSpace: Mi,
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
      return this.enabled === !1 || a === s || !a || !s || (this.spaces[a].transfer === je && (r.r = an(r.r), r.g = an(r.g), r.b = an(r.b)), this.spaces[a].primaries !== this.spaces[s].primaries && (r.applyMatrix3(this.spaces[a].toXYZ), r.applyMatrix3(this.spaces[s].fromXYZ)), this.spaces[s].transfer === je && (r.r = Qn(r.r), r.g = Qn(r.g), r.b = Qn(r.b))), r;
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
      return r === "" ? or : this.spaces[r].transfer;
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
      return Jn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(r, a);
    },
    toWorkingColorSpace: function(r, a) {
      return Jn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(r, a);
    }
  }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({
    [Mi]: {
      primaries: e,
      whitePoint: n,
      transfer: or,
      toXYZ: Pa,
      fromXYZ: Da,
      luminanceCoefficients: t,
      workingColorSpaceConfig: { unpackColorSpace: Ut },
      outputColorSpaceConfig: { drawingBufferColorSpace: Ut }
    },
    [Ut]: {
      primaries: e,
      whitePoint: n,
      transfer: je,
      toXYZ: Pa,
      fromXYZ: Da,
      luminanceCoefficients: t,
      outputColorSpaceConfig: { drawingBufferColorSpace: Ut }
    }
  }), i;
}
const We = /* @__PURE__ */ zo();
function an(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Qn(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Dn;
class ko {
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
      Dn === void 0 && (Dn = lr("canvas")), Dn.width = e.width, Dn.height = e.height;
      const r = Dn.getContext("2d");
      e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), n = Dn;
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
      const t = lr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), a = r.data;
      for (let s = 0; s < a.length; s++)
        a[s] = an(a[s] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(an(t[n] / 255) * 255) : t[n] = an(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Vo = 0;
class ta {
  /**
   * Constructs a new texture source.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(e = null) {
    this.isTextureSource = !0, Object.defineProperty(this, "id", { value: Vo++ }), this.uuid = ii(), this.data = e, this.dataReady = !0, this.version = 0;
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
          r[s].isDataTexture ? a.push(xr(r[s].image)) : a.push(xr(r[s]));
      } else
        a = xr(r);
      n.url = a;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function xr(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? ko.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (Pe("Texture: Unable to serialize Texture."), {});
}
let Ho = 0;
const Sr = /* @__PURE__ */ new U();
class Rt extends wn {
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
  constructor(e = Rt.DEFAULT_IMAGE, t = Rt.DEFAULT_MAPPING, n = 1001, r = 1001, a = 1006, s = 1008, o = 1023, l = 1009, c = Rt.DEFAULT_ANISOTROPY, h = "") {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Ho++ }), this.uuid = ii(), this.name = "", this.source = new ta(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = a, this.minFilter = s, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Re(0, 0), this.repeat = new Re(1, 1), this.center = new Re(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Le(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0, this.normalized = !1;
  }
  /**
   * The width of the texture in pixels.
   */
  get width() {
    return this.source.getSize(Sr).x;
  }
  /**
   * The height of the texture in pixels.
   */
  get height() {
    return this.source.getSize(Sr).y;
  }
  /**
   * The depth of the texture in pixels.
   */
  get depth() {
    return this.source.getSize(Sr).z;
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
        Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === void 0) {
        Pe(`Texture.setValues(): property '${t}' does not exist.`);
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
Rt.DEFAULT_IMAGE = null;
Rt.DEFAULT_MAPPING = 300;
Rt.DEFAULT_ANISOTROPY = 1;
const da = class da {
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
    const l = e.elements, c = l[0], h = l[4], f = l[8], u = l[1], p = l[5], v = l[9], T = l[2], g = l[6], d = l[10];
    if (Math.abs(h - u) < 0.01 && Math.abs(f - T) < 0.01 && Math.abs(v - g) < 0.01) {
      if (Math.abs(h + u) < 0.1 && Math.abs(f + T) < 0.1 && Math.abs(v + g) < 0.1 && Math.abs(c + p + d - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const R = (c + 1) / 2, S = (p + 1) / 2, y = (d + 1) / 2, b = (h + u) / 4, A = (f + T) / 4, _ = (v + g) / 4;
      return R > S && R > y ? R < 0.01 ? (n = 0, r = 0.707106781, a = 0.707106781) : (n = Math.sqrt(R), r = b / n, a = A / n) : S > y ? S < 0.01 ? (n = 0.707106781, r = 0, a = 0.707106781) : (r = Math.sqrt(S), n = b / r, a = _ / r) : y < 0.01 ? (n = 0.707106781, r = 0.707106781, a = 0) : (a = Math.sqrt(y), n = A / a, r = _ / a), this.set(n, r, a, t), this;
    }
    let M = Math.sqrt((g - v) * (g - v) + (f - T) * (f - T) + (u - h) * (u - h));
    return Math.abs(M) < 1e-3 && (M = 1), this.x = (g - v) / M, this.y = (f - T) / M, this.z = (u - h) / M, this.w = Math.acos((c + p + d - 1) / 2), this;
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
    return this.x = Ve(this.x, e.x, t.x), this.y = Ve(this.y, e.y, t.y), this.z = Ve(this.z, e.z, t.z), this.w = Ve(this.w, e.w, t.w), this;
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
    return this.x = Ve(this.x, e, t), this.y = Ve(this.y, e, t), this.z = Ve(this.z, e, t), this.w = Ve(this.w, e, t), this;
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
    return this.divideScalar(n || 1).multiplyScalar(Ve(n, e, t));
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
da.prototype.isVector4 = !0;
let He = da;
class Wo extends wn {
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
    }, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new He(0, 0, e, t), this.scissorTest = !1, this.viewport = new He(0, 0, e, t), this.textures = [];
    const r = { width: e, height: t, depth: n.depth }, a = new Rt(r), s = n.count;
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
      this.textures[t].source = new ta(r);
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
class ut extends Wo {
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
class Us extends Rt {
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
class Xo extends Rt {
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
const ur = class ur {
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
  constructor(e, t, n, r, a, s, o, l, c, h, f, u, p, v, T, g) {
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
    ], e !== void 0 && this.set(e, t, n, r, a, s, o, l, c, h, f, u, p, v, T, g);
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
  set(e, t, n, r, a, s, o, l, c, h, f, u, p, v, T, g) {
    const d = this.elements;
    return d[0] = e, d[4] = t, d[8] = n, d[12] = r, d[1] = a, d[5] = s, d[9] = o, d[13] = l, d[2] = c, d[6] = h, d[10] = f, d[14] = u, d[3] = p, d[7] = v, d[11] = T, d[15] = g, this;
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
    return new ur().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, r = 1 / Ln.setFromMatrixColumn(e, 0).length(), a = 1 / Ln.setFromMatrixColumn(e, 1).length(), s = 1 / Ln.setFromMatrixColumn(e, 2).length();
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
    const t = this.elements, n = e.x, r = e.y, a = e.z, s = Math.cos(n), o = Math.sin(n), l = Math.cos(r), c = Math.sin(r), h = Math.cos(a), f = Math.sin(a);
    if (e.order === "XYZ") {
      const u = s * h, p = s * f, v = o * h, T = o * f;
      t[0] = l * h, t[4] = -l * f, t[8] = c, t[1] = p + v * c, t[5] = u - T * c, t[9] = -o * l, t[2] = T - u * c, t[6] = v + p * c, t[10] = s * l;
    } else if (e.order === "YXZ") {
      const u = l * h, p = l * f, v = c * h, T = c * f;
      t[0] = u + T * o, t[4] = v * o - p, t[8] = s * c, t[1] = s * f, t[5] = s * h, t[9] = -o, t[2] = p * o - v, t[6] = T + u * o, t[10] = s * l;
    } else if (e.order === "ZXY") {
      const u = l * h, p = l * f, v = c * h, T = c * f;
      t[0] = u - T * o, t[4] = -s * f, t[8] = v + p * o, t[1] = p + v * o, t[5] = s * h, t[9] = T - u * o, t[2] = -s * c, t[6] = o, t[10] = s * l;
    } else if (e.order === "ZYX") {
      const u = s * h, p = s * f, v = o * h, T = o * f;
      t[0] = l * h, t[4] = v * c - p, t[8] = u * c + T, t[1] = l * f, t[5] = T * c + u, t[9] = p * c - v, t[2] = -c, t[6] = o * l, t[10] = s * l;
    } else if (e.order === "YZX") {
      const u = s * l, p = s * c, v = o * l, T = o * c;
      t[0] = l * h, t[4] = T - u * f, t[8] = v * f + p, t[1] = f, t[5] = s * h, t[9] = -o * h, t[2] = -c * h, t[6] = p * f + v, t[10] = u - T * f;
    } else if (e.order === "XZY") {
      const u = s * l, p = s * c, v = o * l, T = o * c;
      t[0] = l * h, t[4] = -f, t[8] = c * h, t[1] = u * f + T, t[5] = s * h, t[9] = p * f - v, t[2] = v * f - p, t[6] = o * h, t[10] = T * f + u;
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
    return this.compose(qo, e, Yo);
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
    return Pt.subVectors(e, t), Pt.lengthSq() === 0 && (Pt.z = 1), Pt.normalize(), un.crossVectors(n, Pt), un.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Pt.x += 1e-4 : Pt.z += 1e-4, Pt.normalize(), un.crossVectors(n, Pt)), un.normalize(), Ri.crossVectors(Pt, un), r[0] = un.x, r[4] = Ri.x, r[8] = Pt.x, r[1] = un.y, r[5] = Ri.y, r[9] = Pt.y, r[2] = un.z, r[6] = Ri.z, r[10] = Pt.z, this;
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
    const n = e.elements, r = t.elements, a = this.elements, s = n[0], o = n[4], l = n[8], c = n[12], h = n[1], f = n[5], u = n[9], p = n[13], v = n[2], T = n[6], g = n[10], d = n[14], M = n[3], R = n[7], S = n[11], y = n[15], b = r[0], A = r[4], _ = r[8], w = r[12], C = r[1], F = r[5], B = r[9], H = r[13], N = r[2], G = r[6], Z = r[10], V = r[14], te = r[3], q = r[7], J = r[11], ee = r[15];
    return a[0] = s * b + o * C + l * N + c * te, a[4] = s * A + o * F + l * G + c * q, a[8] = s * _ + o * B + l * Z + c * J, a[12] = s * w + o * H + l * V + c * ee, a[1] = h * b + f * C + u * N + p * te, a[5] = h * A + f * F + u * G + p * q, a[9] = h * _ + f * B + u * Z + p * J, a[13] = h * w + f * H + u * V + p * ee, a[2] = v * b + T * C + g * N + d * te, a[6] = v * A + T * F + g * G + d * q, a[10] = v * _ + T * B + g * Z + d * J, a[14] = v * w + T * H + g * V + d * ee, a[3] = M * b + R * C + S * N + y * te, a[7] = M * A + R * F + S * G + y * q, a[11] = M * _ + R * B + S * Z + y * J, a[15] = M * w + R * H + S * V + y * ee, this;
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
    const e = this.elements, t = e[0], n = e[4], r = e[8], a = e[12], s = e[1], o = e[5], l = e[9], c = e[13], h = e[2], f = e[6], u = e[10], p = e[14], v = e[3], T = e[7], g = e[11], d = e[15], M = l * p - c * u, R = o * p - c * f, S = o * u - l * f, y = s * p - c * h, b = s * u - l * h, A = s * f - o * h;
    return t * (T * M - g * R + d * S) - n * (v * M - g * y + d * b) + r * (v * R - T * y + d * A) - a * (v * S - T * b + g * A);
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
    const e = this.elements, t = e[0], n = e[4], r = e[8], a = e[1], s = e[5], o = e[9], l = e[2], c = e[6], h = e[10];
    return t * (s * h - o * c) - n * (a * h - o * l) + r * (a * c - s * l);
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
    const e = this.elements, t = e[0], n = e[1], r = e[2], a = e[3], s = e[4], o = e[5], l = e[6], c = e[7], h = e[8], f = e[9], u = e[10], p = e[11], v = e[12], T = e[13], g = e[14], d = e[15], M = t * o - n * s, R = t * l - r * s, S = t * c - a * s, y = n * l - r * o, b = n * c - a * o, A = r * c - a * l, _ = h * T - f * v, w = h * g - u * v, C = h * d - p * v, F = f * g - u * T, B = f * d - p * T, H = u * d - p * g, N = M * H - R * B + S * F + y * C - b * w + A * _;
    if (N === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const G = 1 / N;
    return e[0] = (o * H - l * B + c * F) * G, e[1] = (r * B - n * H - a * F) * G, e[2] = (T * A - g * b + d * y) * G, e[3] = (u * b - f * A - p * y) * G, e[4] = (l * C - s * H - c * w) * G, e[5] = (t * H - r * C + a * w) * G, e[6] = (g * S - v * A - d * R) * G, e[7] = (h * A - u * S + p * R) * G, e[8] = (s * B - o * C + c * _) * G, e[9] = (n * C - t * B - a * _) * G, e[10] = (v * b - T * S + d * M) * G, e[11] = (f * S - h * b - p * M) * G, e[12] = (o * w - s * F - l * _) * G, e[13] = (t * F - n * w + r * _) * G, e[14] = (T * R - v * y - g * M) * G, e[15] = (h * y - f * R + u * M) * G, this;
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
    const n = Math.cos(t), r = Math.sin(t), a = 1 - n, s = e.x, o = e.y, l = e.z, c = a * s, h = a * o;
    return this.set(
      c * s + n,
      c * o - r * l,
      c * l + r * o,
      0,
      c * o + r * l,
      h * o + n,
      h * l - r * s,
      0,
      c * l - r * o,
      h * l + r * s,
      a * l * l + n,
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
    const r = this.elements, a = t._x, s = t._y, o = t._z, l = t._w, c = a + a, h = s + s, f = o + o, u = a * c, p = a * h, v = a * f, T = s * h, g = s * f, d = o * f, M = l * c, R = l * h, S = l * f, y = n.x, b = n.y, A = n.z;
    return r[0] = (1 - (T + d)) * y, r[1] = (p + S) * y, r[2] = (v - R) * y, r[3] = 0, r[4] = (p - S) * b, r[5] = (1 - (u + d)) * b, r[6] = (g + M) * b, r[7] = 0, r[8] = (v + R) * A, r[9] = (g - M) * A, r[10] = (1 - (u + T)) * A, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
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
    let s = Ln.set(r[0], r[1], r[2]).length();
    const o = Ln.set(r[4], r[5], r[6]).length(), l = Ln.set(r[8], r[9], r[10]).length();
    a < 0 && (s = -s), zt.copy(this);
    const c = 1 / s, h = 1 / o, f = 1 / l;
    return zt.elements[0] *= c, zt.elements[1] *= c, zt.elements[2] *= c, zt.elements[4] *= h, zt.elements[5] *= h, zt.elements[6] *= h, zt.elements[8] *= f, zt.elements[9] *= f, zt.elements[10] *= f, t.setFromRotationMatrix(zt), n.x = s, n.y = o, n.z = l, this;
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
  makePerspective(e, t, n, r, a, s, o = 2e3, l = !1) {
    const c = this.elements, h = 2 * a / (t - e), f = 2 * a / (n - r), u = (t + e) / (t - e), p = (n + r) / (n - r);
    let v, T;
    if (l)
      v = a / (s - a), T = s * a / (s - a);
    else if (o === 2e3)
      v = -(s + a) / (s - a), T = -2 * s * a / (s - a);
    else if (o === 2001)
      v = -s / (s - a), T = -s * a / (s - a);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = h, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = f, c[9] = p, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = v, c[14] = T, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
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
  makeOrthographic(e, t, n, r, a, s, o = 2e3, l = !1) {
    const c = this.elements, h = 2 / (t - e), f = 2 / (n - r), u = -(t + e) / (t - e), p = -(n + r) / (n - r);
    let v, T;
    if (l)
      v = 1 / (s - a), T = s / (s - a);
    else if (o === 2e3)
      v = -2 / (s - a), T = -(s + a) / (s - a);
    else if (o === 2001)
      v = -1 / (s - a), T = -a / (s - a);
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = h, c[4] = 0, c[8] = 0, c[12] = u, c[1] = 0, c[5] = f, c[9] = 0, c[13] = p, c[2] = 0, c[6] = 0, c[10] = v, c[14] = T, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
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
ur.prototype.isMatrix4 = !0;
let Qe = ur;
const Ln = /* @__PURE__ */ new U(), zt = /* @__PURE__ */ new Qe(), qo = /* @__PURE__ */ new U(0, 0, 0), Yo = /* @__PURE__ */ new U(1, 1, 1), un = /* @__PURE__ */ new U(), Ri = /* @__PURE__ */ new U(), Pt = /* @__PURE__ */ new U(), La = /* @__PURE__ */ new Qe(), Fa = /* @__PURE__ */ new An();
class sn {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(e = 0, t = 0, n = 0, r = sn.DEFAULT_ORDER) {
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
    const r = e.elements, a = r[0], s = r[4], o = r[8], l = r[1], c = r[5], h = r[9], f = r[2], u = r[6], p = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Ve(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-s, a)) : (this._x = Math.atan2(u, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ve(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-f, a), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ve(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-f, p), this._z = Math.atan2(-s, c)) : (this._y = 0, this._z = Math.atan2(l, a));
        break;
      case "ZYX":
        this._y = Math.asin(-Ve(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(u, p), this._z = Math.atan2(l, a)) : (this._x = 0, this._z = Math.atan2(-s, c));
        break;
      case "YZX":
        this._z = Math.asin(Ve(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-f, a)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-Ve(s, -1, 1)), Math.abs(s) < 0.9999999 ? (this._x = Math.atan2(u, c), this._y = Math.atan2(o, a)) : (this._x = Math.atan2(-h, p), this._y = 0);
        break;
      default:
        Pe("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
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
    return La.makeRotationFromQuaternion(e), this.setFromRotationMatrix(La, t, n);
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
    return Fa.setFromEuler(this), this.setFromQuaternion(Fa, e);
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
sn.DEFAULT_ORDER = "XYZ";
class Ns {
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
let Ko = 0;
const Ia = /* @__PURE__ */ new U(), Fn = /* @__PURE__ */ new An(), $t = /* @__PURE__ */ new Qe(), Ci = /* @__PURE__ */ new U(), oi = /* @__PURE__ */ new U(), Zo = /* @__PURE__ */ new U(), $o = /* @__PURE__ */ new An(), Ua = /* @__PURE__ */ new U(1, 0, 0), Na = /* @__PURE__ */ new U(0, 1, 0), Ba = /* @__PURE__ */ new U(0, 0, 1), Oa = { type: "added" }, Jo = { type: "removed" }, In = { type: "childadded", child: null }, Mr = { type: "childremoved", child: null };
class Et extends wn {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Ko++ }), this.uuid = ii(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Et.DEFAULT_UP.clone();
    const e = new U(), t = new sn(), n = new An(), r = new U(1, 1, 1);
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
        value: new Qe()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new Le()
      }
    }), this.matrix = new Qe(), this.matrixWorld = new Qe(), this.matrixAutoUpdate = Et.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Ns(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
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
    return Fn.setFromAxisAngle(e, t), this.quaternion.multiply(Fn), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(e, t) {
    return Fn.setFromAxisAngle(e, t), this.quaternion.premultiply(Fn), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(e) {
    return this.rotateOnAxis(Ua, e);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(e) {
    return this.rotateOnAxis(Na, e);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(e) {
    return this.rotateOnAxis(Ba, e);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(e, t) {
    return Ia.copy(e).applyQuaternion(this.quaternion), this.position.add(Ia.multiplyScalar(t)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(e) {
    return this.translateOnAxis(Ua, e);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(e) {
    return this.translateOnAxis(Na, e);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(e) {
    return this.translateOnAxis(Ba, e);
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
    e.isVector3 ? Ci.copy(e) : Ci.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), oi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? $t.lookAt(oi, Ci, this.up) : $t.lookAt(Ci, oi, this.up), this.quaternion.setFromRotationMatrix($t), r && ($t.extractRotation(r.matrixWorld), Fn.setFromRotationMatrix($t), this.quaternion.premultiply(Fn.invert()));
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
    return e === this ? (Ye("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Oa), In.child = e, this.dispatchEvent(In), In.child = null) : Ye("Object3D.add: object not an instance of THREE.Object3D.", e), this);
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
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Jo), Mr.child = e, this.dispatchEvent(Mr), Mr.child = null), this;
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
    return this.updateWorldMatrix(!0, !1), $t.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), $t.multiply(e.parent.matrixWorld)), e.applyMatrix4($t), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Oa), In.child = e, this.dispatchEvent(In), In.child = null, this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(oi, e, Zo), e;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(oi, $o, e), e;
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
    function a(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = a(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const f = l[c];
            a(e.shapes, f);
          }
        else
          a(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (a(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(a(e.materials, this.material[l]));
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
        const l = this.animations[o];
        r.animations.push(a(e.animations, l));
      }
    }
    if (t) {
      const o = s(e.geometries), l = s(e.materials), c = s(e.textures), h = s(e.images), f = s(e.shapes), u = s(e.skeletons), p = s(e.animations), v = s(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), f.length > 0 && (n.shapes = f), u.length > 0 && (n.skeletons = u), p.length > 0 && (n.animations = p), v.length > 0 && (n.nodes = v);
    }
    return n.object = r, n;
    function s(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
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
Et.DEFAULT_UP = /* @__PURE__ */ new U(0, 1, 0);
Et.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
class mi extends Et {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Qo = { type: "move" };
class yr {
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
    return this._hand === null && (this._hand = new mi(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new mi(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new U(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new U()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new mi(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new U(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new U(), this._grip.eventsEnabled = !1), this._grip;
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
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        s = !0;
        for (const T of e.hand.values()) {
          const g = t.getJointPose(T, n), d = this._getHandJoint(c, T);
          g !== null && (d.matrix.fromArray(g.transform.matrix), d.matrix.decompose(d.position, d.rotation, d.scale), d.matrixWorldNeedsUpdate = !0, d.jointRadius = g.radius), d.visible = g !== null;
        }
        const h = c.joints["index-finger-tip"], f = c.joints["thumb-tip"], u = h.position.distanceTo(f.position), p = 0.02, v = 5e-3;
        c.inputState.pinching && u > p + v ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && u <= p - v && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (a = t.getPose(e.gripSpace, n), a !== null && (l.matrix.fromArray(a.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, a.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(a.linearVelocity)) : l.hasLinearVelocity = !1, a.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(a.angularVelocity)) : l.hasAngularVelocity = !1, l.eventsEnabled && l.dispatchEvent({
          type: "gripUpdated",
          data: e,
          target: this
        })));
      o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && a !== null && (r = a), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Qo)));
    }
    return o !== null && (o.visible = r !== null), l !== null && (l.visible = a !== null), c !== null && (c.visible = s !== null), this;
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
      const n = new mi();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Bs = {
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
}, hn = { h: 0, s: 0, l: 0 }, Pi = { h: 0, s: 0, l: 0 };
function Er(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class ze {
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
  setHex(e, t = Ut) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, We.colorSpaceToWorking(this, t), this;
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
  setRGB(e, t, n, r = We.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, We.colorSpaceToWorking(this, r), this;
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
  setHSL(e, t, n, r = We.workingColorSpace) {
    if (e = ea(e, 1), t = Ve(t, 0, 1), n = Ve(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const a = n <= 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - a;
      this.r = Er(s, a, e + 1 / 3), this.g = Er(s, a, e), this.b = Er(s, a, e - 1 / 3);
    }
    return We.colorSpaceToWorking(this, r), this;
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
  setStyle(e, t = Ut) {
    function n(a) {
      a !== void 0 && parseFloat(a) < 1 && Pe("Color: Alpha component of " + e + " will be ignored.");
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
          Pe("Color: Unknown color model " + e);
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
      Pe("Color: Invalid hex color " + e);
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
  setColorName(e, t = Ut) {
    const n = Bs[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : Pe("Color: Unknown color " + e), this;
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
    return this.r = an(e.r), this.g = an(e.g), this.b = an(e.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(e) {
    return this.r = Qn(e.r), this.g = Qn(e.g), this.b = Qn(e.b), this;
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
  getHex(e = Ut) {
    return We.workingToColorSpace(yt.copy(this), e), Math.round(Ve(yt.r * 255, 0, 255)) * 65536 + Math.round(Ve(yt.g * 255, 0, 255)) * 256 + Math.round(Ve(yt.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(e = Ut) {
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
  getHSL(e, t = We.workingColorSpace) {
    We.workingToColorSpace(yt.copy(this), t);
    const n = yt.r, r = yt.g, a = yt.b, s = Math.max(n, r, a), o = Math.min(n, r, a);
    let l, c;
    const h = (o + s) / 2;
    if (o === s)
      l = 0, c = 0;
    else {
      const f = s - o;
      switch (c = h <= 0.5 ? f / (s + o) : f / (2 - s - o), s) {
        case n:
          l = (r - a) / f + (r < a ? 6 : 0);
          break;
        case r:
          l = (a - n) / f + 2;
          break;
        case a:
          l = (n - r) / f + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(e, t = We.workingColorSpace) {
    return We.workingToColorSpace(yt.copy(this), t), e.r = yt.r, e.g = yt.g, e.b = yt.b, e;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(e = Ut) {
    We.workingToColorSpace(yt.copy(this), e);
    const t = yt.r, n = yt.g, r = yt.b;
    return e !== Ut ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
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
    return this.getHSL(hn), this.setHSL(hn.h + e, hn.s + t, hn.l + n);
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
    this.getHSL(hn), e.getHSL(Pi);
    const n = vi(hn.h, Pi.h, t), r = vi(hn.s, Pi.s, t), a = vi(hn.l, Pi.l, t);
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
const yt = /* @__PURE__ */ new ze();
ze.NAMES = Bs;
class Ga extends Et {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new sn(), this.environmentIntensity = 1, this.environmentRotation = new sn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), t.object.backgroundBlurriness = this.backgroundBlurriness, t.object.backgroundIntensity = this.backgroundIntensity, t.object.backgroundRotation = this.backgroundRotation.toArray(), t.object.environmentIntensity = this.environmentIntensity, t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
const kt = /* @__PURE__ */ new U(), Jt = /* @__PURE__ */ new U(), Tr = /* @__PURE__ */ new U(), Qt = /* @__PURE__ */ new U(), Un = /* @__PURE__ */ new U(), Nn = /* @__PURE__ */ new U(), za = /* @__PURE__ */ new U(), br = /* @__PURE__ */ new U(), wr = /* @__PURE__ */ new U(), Ar = /* @__PURE__ */ new U(), Rr = /* @__PURE__ */ new He(), Cr = /* @__PURE__ */ new He(), Pr = /* @__PURE__ */ new He();
class Ht {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(e = new U(), t = new U(), n = new U()) {
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
    r.subVectors(n, t), kt.subVectors(e, t), r.cross(kt);
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
    kt.subVectors(r, t), Jt.subVectors(n, t), Tr.subVectors(e, t);
    const s = kt.dot(kt), o = kt.dot(Jt), l = kt.dot(Tr), c = Jt.dot(Jt), h = Jt.dot(Tr), f = s * c - o * o;
    if (f === 0)
      return a.set(0, 0, 0), null;
    const u = 1 / f, p = (c * l - o * h) * u, v = (s * h - o * l) * u;
    return a.set(1 - p - v, v, p);
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
  static getInterpolation(e, t, n, r, a, s, o, l) {
    return this.getBarycoord(e, t, n, r, Qt) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(a, Qt.x), l.addScaledVector(s, Qt.y), l.addScaledVector(o, Qt.z), l);
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
    return Rr.setScalar(0), Cr.setScalar(0), Pr.setScalar(0), Rr.fromBufferAttribute(e, t), Cr.fromBufferAttribute(e, n), Pr.fromBufferAttribute(e, r), s.setScalar(0), s.addScaledVector(Rr, a.x), s.addScaledVector(Cr, a.y), s.addScaledVector(Pr, a.z), s;
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
    return kt.subVectors(n, t), Jt.subVectors(e, t), kt.cross(Jt).dot(r) < 0;
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
    return kt.subVectors(this.c, this.b), Jt.subVectors(this.a, this.b), kt.cross(Jt).length() * 0.5;
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
    return Ht.getNormal(this.a, this.b, this.c, e);
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
    return Ht.getBarycoord(e, this.a, this.b, this.c, t);
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
    return Ht.getInterpolation(e, this.a, this.b, this.c, t, n, r, a);
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
    return Ht.containsPoint(e, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(e) {
    return Ht.isFrontFacing(this.a, this.b, this.c, e);
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
    Un.subVectors(r, n), Nn.subVectors(a, n), br.subVectors(e, n);
    const l = Un.dot(br), c = Nn.dot(br);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    wr.subVectors(e, r);
    const h = Un.dot(wr), f = Nn.dot(wr);
    if (h >= 0 && f <= h)
      return t.copy(r);
    const u = l * f - h * c;
    if (u <= 0 && l >= 0 && h <= 0)
      return s = l / (l - h), t.copy(n).addScaledVector(Un, s);
    Ar.subVectors(e, a);
    const p = Un.dot(Ar), v = Nn.dot(Ar);
    if (v >= 0 && p <= v)
      return t.copy(a);
    const T = p * c - l * v;
    if (T <= 0 && c >= 0 && v <= 0)
      return o = c / (c - v), t.copy(n).addScaledVector(Nn, o);
    const g = h * v - p * f;
    if (g <= 0 && f - h >= 0 && p - v >= 0)
      return za.subVectors(a, r), o = (f - h) / (f - h + (p - v)), t.copy(r).addScaledVector(za, o);
    const d = 1 / (g + T + u);
    return s = T * d, o = u * d, t.copy(n).addScaledVector(Un, s).addScaledVector(Nn, o);
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
class Rn {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(e = new U(1 / 0, 1 / 0, 1 / 0), t = new U(-1 / 0, -1 / 0, -1 / 0)) {
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
      this.expandByPoint(Vt.fromArray(e, t));
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
      this.expandByPoint(Vt.fromBufferAttribute(e, t));
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
    const n = Vt.copy(t).multiplyScalar(0.5);
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
          e.isMesh === !0 ? e.getVertexPosition(s, Vt) : Vt.fromBufferAttribute(a, s), Vt.applyMatrix4(e.matrixWorld), this.expandByPoint(Vt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Di.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Di.copy(n.boundingBox)), Di.applyMatrix4(e.matrixWorld), this.union(Di);
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
    return this.clampPoint(e.center, Vt), Vt.distanceToSquared(e.center) <= e.radius * e.radius;
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
    this.getCenter(li), Li.subVectors(this.max, li), Bn.subVectors(e.a, li), On.subVectors(e.b, li), Gn.subVectors(e.c, li), fn.subVectors(On, Bn), dn.subVectors(Gn, On), xn.subVectors(Bn, Gn);
    let t = [
      0,
      -fn.z,
      fn.y,
      0,
      -dn.z,
      dn.y,
      0,
      -xn.z,
      xn.y,
      fn.z,
      0,
      -fn.x,
      dn.z,
      0,
      -dn.x,
      xn.z,
      0,
      -xn.x,
      -fn.y,
      fn.x,
      0,
      -dn.y,
      dn.x,
      0,
      -xn.y,
      xn.x,
      0
    ];
    return !Dr(t, Bn, On, Gn, Li) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Dr(t, Bn, On, Gn, Li)) ? !1 : (Fi.crossVectors(fn, dn), t = [Fi.x, Fi.y, Fi.z], Dr(t, Bn, On, Gn, Li));
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
    return this.clampPoint(e, Vt).distanceTo(e);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Vt).length() * 0.5), e;
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
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U()
], Vt = /* @__PURE__ */ new U(), Di = /* @__PURE__ */ new Rn(), Bn = /* @__PURE__ */ new U(), On = /* @__PURE__ */ new U(), Gn = /* @__PURE__ */ new U(), fn = /* @__PURE__ */ new U(), dn = /* @__PURE__ */ new U(), xn = /* @__PURE__ */ new U(), li = /* @__PURE__ */ new U(), Li = /* @__PURE__ */ new U(), Fi = /* @__PURE__ */ new U(), Sn = /* @__PURE__ */ new U();
function Dr(i, e, t, n, r) {
  for (let a = 0, s = i.length - 3; a <= s; a += 3) {
    Sn.fromArray(i, a);
    const o = r.x * Math.abs(Sn.x) + r.y * Math.abs(Sn.y) + r.z * Math.abs(Sn.z), l = e.dot(Sn), c = t.dot(Sn), h = n.dot(Sn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o)
      return !1;
  }
  return !0;
}
const mt = /* @__PURE__ */ new U(), Ii = /* @__PURE__ */ new Re();
let jo = 0;
class Bt extends wn {
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
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: jo++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0;
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
        Ii.fromBufferAttribute(this, t), Ii.applyMatrix3(e), this.setXY(t, Ii.x, Ii.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        mt.fromBufferAttribute(this, t), mt.applyMatrix3(e), this.setXYZ(t, mt.x, mt.y, mt.z);
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
      mt.fromBufferAttribute(this, t), mt.applyMatrix4(e), this.setXYZ(t, mt.x, mt.y, mt.z);
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
      mt.fromBufferAttribute(this, t), mt.applyNormalMatrix(e), this.setXYZ(t, mt.x, mt.y, mt.z);
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
      mt.fromBufferAttribute(this, t), mt.transformDirection(e), this.setXYZ(t, mt.x, mt.y, mt.z);
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
    return this.normalized && (n = Kn(n, this.array)), n;
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
    return this.normalized && (n = wt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Kn(t, this.array)), t;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(e, t) {
    return this.normalized && (t = wt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Kn(t, this.array)), t;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(e, t) {
    return this.normalized && (t = wt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Kn(t, this.array)), t;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(e, t) {
    return this.normalized && (t = wt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Kn(t, this.array)), t;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(e, t) {
    return this.normalized && (t = wt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
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
    return e *= this.itemSize, this.normalized && (t = wt(t, this.array), n = wt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
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
    return e *= this.itemSize, this.normalized && (t = wt(t, this.array), n = wt(n, this.array), r = wt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
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
    return e *= this.itemSize, this.normalized && (t = wt(t, this.array), n = wt(n, this.array), r = wt(r, this.array), a = wt(a, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = a, this;
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
class Os extends Bt {
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
class Gs extends Bt {
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
class Ct extends Bt {
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
const el = /* @__PURE__ */ new Rn(), ci = /* @__PURE__ */ new U(), Lr = /* @__PURE__ */ new U();
class Ei {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(e = new U(), t = -1) {
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
    t !== void 0 ? n.copy(t) : el.setFromPoints(e).getCenter(n);
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
    ci.subVectors(e, this.center);
    const t = ci.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(ci, r / n), this.radius += r;
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
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Lr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ci.copy(e.center).add(Lr)), this.expandByPoint(ci.copy(e.center).sub(Lr))), this);
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
let tl = 0;
const It = /* @__PURE__ */ new Qe(), Fr = /* @__PURE__ */ new Et(), zn = /* @__PURE__ */ new U(), Dt = /* @__PURE__ */ new Rn(), ui = /* @__PURE__ */ new Rn(), xt = /* @__PURE__ */ new U();
class Lt extends wn {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: tl++ }), this.uuid = ii(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {}, this._transformed = !1;
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
    return Array.isArray(e) ? this.index = new (So(e) ? Gs : Os)(e, 1) : this.index = e, this;
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
      const a = new Le().getNormalMatrix(e);
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
    return It.makeRotationFromQuaternion(e), this.applyMatrix4(It), this;
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
    return It.makeRotationX(e), this.applyMatrix4(It), this;
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
    return It.makeRotationY(e), this.applyMatrix4(It), this;
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
    return It.makeRotationZ(e), this.applyMatrix4(It), this;
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
    return It.makeTranslation(e, t, n), this.applyMatrix4(It), this;
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
    return It.makeScale(e, t, n), this.applyMatrix4(It), this;
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
    return Fr.lookAt(e), Fr.updateMatrix(), this.applyMatrix4(Fr.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(zn).negate(), this.translate(zn.x, zn.y, zn.z), this;
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
      this.setAttribute("position", new Ct(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        const a = e[r];
        t.setXYZ(r, a.x, a.y, a.z || 0);
      }
      e.length > t.count && Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
    }
    return this;
  }
  /**
   * Computes the bounding box of the geometry, and updates the `boundingBox` member.
   * The bounding box is not computed by the engine; it must be computed by your app.
   * You may need to recompute the bounding box if the geometry vertices are modified.
   */
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Rn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new U(-1 / 0, -1 / 0, -1 / 0),
        new U(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const a = t[n];
          Dt.setFromBufferAttribute(a), this.morphTargetsRelative ? (xt.addVectors(this.boundingBox.min, Dt.min), this.boundingBox.expandByPoint(xt), xt.addVectors(this.boundingBox.max, Dt.max), this.boundingBox.expandByPoint(xt)) : (this.boundingBox.expandByPoint(Dt.min), this.boundingBox.expandByPoint(Dt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  /**
   * Computes the bounding sphere of the geometry, and updates the `boundingSphere` member.
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if the geometry vertices are modified.
   */
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ei());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new U(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Dt.setFromBufferAttribute(e), t)
        for (let a = 0, s = t.length; a < s; a++) {
          const o = t[a];
          ui.setFromBufferAttribute(o), this.morphTargetsRelative ? (xt.addVectors(Dt.min, ui.min), Dt.expandByPoint(xt), xt.addVectors(Dt.max, ui.max), Dt.expandByPoint(xt)) : (Dt.expandByPoint(ui.min), Dt.expandByPoint(ui.max));
        }
      Dt.getCenter(n);
      let r = 0;
      for (let a = 0, s = e.count; a < s; a++)
        xt.fromBufferAttribute(e, a), r = Math.max(r, n.distanceToSquared(xt));
      if (t)
        for (let a = 0, s = t.length; a < s; a++) {
          const o = t[a], l = this.morphTargetsRelative;
          for (let c = 0, h = o.count; c < h; c++)
            xt.fromBufferAttribute(o, c), l && (zn.fromBufferAttribute(e, c), xt.add(zn)), r = Math.max(r, n.distanceToSquared(xt));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
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
      Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, r = t.normal, a = t.uv;
    let s = this.getAttribute("tangent");
    (s === void 0 || s.count !== n.count) && (s = new Bt(new Float32Array(4 * n.count), 4), this.setAttribute("tangent", s));
    const o = [], l = [];
    for (let _ = 0; _ < n.count; _++)
      o[_] = new U(), l[_] = new U();
    const c = new U(), h = new U(), f = new U(), u = new Re(), p = new Re(), v = new Re(), T = new U(), g = new U();
    function d(_, w, C) {
      c.fromBufferAttribute(n, _), h.fromBufferAttribute(n, w), f.fromBufferAttribute(n, C), u.fromBufferAttribute(a, _), p.fromBufferAttribute(a, w), v.fromBufferAttribute(a, C), h.sub(c), f.sub(c), p.sub(u), v.sub(u);
      const F = 1 / (p.x * v.y - v.x * p.y);
      isFinite(F) && (T.copy(h).multiplyScalar(v.y).addScaledVector(f, -p.y).multiplyScalar(F), g.copy(f).multiplyScalar(p.x).addScaledVector(h, -v.x).multiplyScalar(F), o[_].add(T), o[w].add(T), o[C].add(T), l[_].add(g), l[w].add(g), l[C].add(g));
    }
    let M = this.groups;
    M.length === 0 && (M = [{
      start: 0,
      count: e.count
    }]);
    for (let _ = 0, w = M.length; _ < w; ++_) {
      const C = M[_], F = C.start, B = C.count;
      for (let H = F, N = F + B; H < N; H += 3)
        d(
          e.getX(H + 0),
          e.getX(H + 1),
          e.getX(H + 2)
        );
    }
    const R = new U(), S = new U(), y = new U(), b = new U();
    function A(_) {
      y.fromBufferAttribute(r, _), b.copy(y);
      const w = o[_];
      R.copy(w), R.sub(y.multiplyScalar(y.dot(w))).normalize(), S.crossVectors(b, w);
      const F = S.dot(l[_]) < 0 ? -1 : 1;
      s.setXYZW(_, R.x, R.y, R.z, F);
    }
    for (let _ = 0, w = M.length; _ < w; ++_) {
      const C = M[_], F = C.start, B = C.count;
      for (let H = F, N = F + B; H < N; H += 3)
        A(e.getX(H + 0)), A(e.getX(H + 1)), A(e.getX(H + 2));
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
        n = new Bt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let u = 0, p = n.count; u < p; u++)
          n.setXYZ(u, 0, 0, 0);
      const r = new U(), a = new U(), s = new U(), o = new U(), l = new U(), c = new U(), h = new U(), f = new U();
      if (e)
        for (let u = 0, p = e.count; u < p; u += 3) {
          const v = e.getX(u + 0), T = e.getX(u + 1), g = e.getX(u + 2);
          r.fromBufferAttribute(t, v), a.fromBufferAttribute(t, T), s.fromBufferAttribute(t, g), h.subVectors(s, a), f.subVectors(r, a), h.cross(f), o.fromBufferAttribute(n, v), l.fromBufferAttribute(n, T), c.fromBufferAttribute(n, g), o.add(h), l.add(h), c.add(h), n.setXYZ(v, o.x, o.y, o.z), n.setXYZ(T, l.x, l.y, l.z), n.setXYZ(g, c.x, c.y, c.z);
        }
      else
        for (let u = 0, p = t.count; u < p; u += 3)
          r.fromBufferAttribute(t, u + 0), a.fromBufferAttribute(t, u + 1), s.fromBufferAttribute(t, u + 2), h.subVectors(s, a), f.subVectors(r, a), h.cross(f), n.setXYZ(u + 0, h.x, h.y, h.z), n.setXYZ(u + 1, h.x, h.y, h.z), n.setXYZ(u + 2, h.x, h.y, h.z);
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
      xt.fromBufferAttribute(e, t), xt.normalize(), e.setXYZ(t, xt.x, xt.y, xt.z);
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, h = o.itemSize, f = o.normalized, u = new c.constructor(l.length * h);
      let p = 0, v = 0;
      for (let T = 0, g = l.length; T < g; T++) {
        o.isInterleavedBufferAttribute ? p = l[T] * o.data.stride + o.offset : p = l[T] * h;
        for (let d = 0; d < h; d++)
          u[v++] = c[p++];
      }
      return new Bt(u, h, f);
    }
    if (this.index === null)
      return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Lt(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const l = r[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const a = this.morphAttributes;
    for (const o in a) {
      const l = [], c = a[o];
      for (let h = 0, f = c.length; h < f; h++) {
        const u = c[h], p = e(u, n);
        l.push(p);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const s = this.groups;
    for (let o = 0, l = s.length; o < l; o++) {
      const c = s[o];
      t.addGroup(c.start, c.count, c.materialIndex);
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
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let a = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let f = 0, u = c.length; f < u; f++) {
        const p = c[f];
        h.push(p.toJSON(e.data));
      }
      h.length > 0 && (r[l] = h, a = !0);
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
    for (const c in r) {
      const h = r[c];
      this.setAttribute(c, h.clone(t));
    }
    const a = e.morphAttributes;
    for (const c in a) {
      const h = [], f = a[c];
      for (let u = 0, p = f.length; u < p; u++)
        h.push(f[u].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const s = e.groups;
    for (let c = 0, h = s.length; c < h; c++) {
      const f = s[c];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this._transformed = e._transformed, this;
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
const Ir = /* @__PURE__ */ new U(), nl = /* @__PURE__ */ new U(), il = /* @__PURE__ */ new Le();
class mn {
  /**
   * Constructs a new plane.
   *
   * @param {Vector3} [normal=(1,0,0)] - A unit length vector defining the normal of the plane.
   * @param {number} [constant=0] - The signed distance from the origin to the plane.
   */
  constructor(e = new U(1, 0, 0), t = 0) {
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
    const r = Ir.subVectors(n, t).cross(nl.subVectors(e, t)).normalize();
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
    const r = e.delta(Ir), a = this.normal.dot(r);
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
    const n = t || il.getNormalMatrix(e), r = this.coplanarPoint(Ir).applyMatrix4(e), a = this.normal.applyMatrix3(n).normalize();
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
let rl = 0;
class Ti extends wn {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: rl++ }), this.uuid = ii(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new ze(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
          Pe(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);
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
        const l = a[o];
        delete l.metadata, s.push(l);
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
    if (e.uuid !== void 0 && (this.uuid = e.uuid), e.name !== void 0 && (this.name = e.name), e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color), e.roughness !== void 0 && (this.roughness = e.roughness), e.metalness !== void 0 && (this.metalness = e.metalness), e.sheen !== void 0 && (this.sheen = e.sheen), e.sheenColor !== void 0 && (this.sheenColor = new ze().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(e.emissive), e.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(e.specular), e.specularIntensity !== void 0 && (this.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (this.shininess = e.shininess), e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = e.clearcoatRoughness), e.dispersion !== void 0 && (this.dispersion = e.dispersion), e.retroreflectivity !== void 0 && (this.retroreflectivity = e.retroreflectivity), e.iridescence !== void 0 && (this.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (this.transmission = e.transmission), e.thickness !== void 0 && (this.thickness = e.thickness), e.attenuationDistance !== void 0 && (this.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (this.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (this.fog = e.fog), e.flatShading !== void 0 && (this.flatShading = e.flatShading), e.blending !== void 0 && (this.blending = e.blending), e.combine !== void 0 && (this.combine = e.combine), e.side !== void 0 && (this.side = e.side), e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide), e.opacity !== void 0 && (this.opacity = e.opacity), e.transparent !== void 0 && (this.transparent = e.transparent), e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc), e.depthTest !== void 0 && (this.depthTest = e.depthTest), e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite), e.clippingPlanes !== void 0 && (this.clippingPlanes = e.clippingPlanes.map((n) => new mn().fromJSON(n))), e.clipIntersection !== void 0 && (this.clipIntersection = e.clipIntersection), e.clipShadows !== void 0 && (this.clipShadows = e.clipShadows), e.depthPacking !== void 0 && (this.depthPacking = e.depthPacking), e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc), e.blendDst !== void 0 && (this.blendDst = e.blendDst), e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (this.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (this.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (this.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (this.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (this.rotation = e.rotation), e.linewidth !== void 0 && (this.linewidth = e.linewidth), e.linecap !== void 0 && (this.linecap = e.linecap), e.linejoin !== void 0 && (this.linejoin = e.linejoin), e.dashSize !== void 0 && (this.dashSize = e.dashSize), e.gapSize !== void 0 && (this.gapSize = e.gapSize), e.scale !== void 0 && (this.scale = e.scale), e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (this.dithering = e.dithering), e.alphaToCoverage !== void 0 && (this.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (this.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride), e.visible !== void 0 && (this.visible = e.visible), e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped), e.userData !== void 0 && (this.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? this.vertexColors = e.vertexColors > 0 : this.vertexColors = e.vertexColors), e.size !== void 0 && (this.size = e.size), e.sizeAttenuation !== void 0 && (this.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (this.map = t[e.map] || null), e.matcap !== void 0 && (this.matcap = t[e.matcap] || null), e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null), e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null), e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale), e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null), e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType), e.normalScale !== void 0) {
      let n = e.normalScale;
      Array.isArray(n) === !1 && (n = [n, n]), this.normalScale = new Re().fromArray(n);
    }
    return e.displacementMap !== void 0 && (this.displacementMap = t[e.displacementMap] || null), e.displacementScale !== void 0 && (this.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (this.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (this.roughnessMap = t[e.roughnessMap] || null), e.metalnessMap !== void 0 && (this.metalnessMap = t[e.metalnessMap] || null), e.emissiveMap !== void 0 && (this.emissiveMap = t[e.emissiveMap] || null), e.emissiveIntensity !== void 0 && (this.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (this.specularMap = t[e.specularMap] || null), e.specularIntensityMap !== void 0 && (this.specularIntensityMap = t[e.specularIntensityMap] || null), e.specularColorMap !== void 0 && (this.specularColorMap = t[e.specularColorMap] || null), e.envMap !== void 0 && (this.envMap = t[e.envMap] || null), e.envMapRotation !== void 0 && this.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (this.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (this.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null), e.lightMapIntensity !== void 0 && (this.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null), e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (this.gradientMap = t[e.gradientMap] || null), e.clearcoatMap !== void 0 && (this.clearcoatMap = t[e.clearcoatMap] || null), e.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null), e.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null), e.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new Re().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (this.iridescenceMap = t[e.iridescenceMap] || null), e.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null), e.transmissionMap !== void 0 && (this.transmissionMap = t[e.transmissionMap] || null), e.thicknessMap !== void 0 && (this.thicknessMap = t[e.thicknessMap] || null), e.anisotropyMap !== void 0 && (this.anisotropyMap = t[e.anisotropyMap] || null), e.sheenColorMap !== void 0 && (this.sheenColorMap = t[e.sheenColorMap] || null), e.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null), this;
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
const en = /* @__PURE__ */ new U(), Ur = /* @__PURE__ */ new U(), Ui = /* @__PURE__ */ new U(), Ni = /* @__PURE__ */ new U();
class al {
  /**
   * Constructs a new ray.
   *
   * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
   * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
   */
  constructor(e = new U(), t = new U(0, 0, -1)) {
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
    Ur.copy(e).add(t).multiplyScalar(0.5), Ui.copy(t).sub(e).normalize(), Ni.copy(this.origin).sub(Ur);
    const a = e.distanceTo(t) * 0.5, s = -this.direction.dot(Ui), o = Ni.dot(this.direction), l = -Ni.dot(Ui), c = Ni.lengthSq(), h = Math.abs(1 - s * s);
    let f, u, p, v;
    if (h > 0)
      if (f = s * l - o, u = s * o - l, v = a * h, f >= 0)
        if (u >= -v)
          if (u <= v) {
            const T = 1 / h;
            f *= T, u *= T, p = f * (f + s * u + 2 * o) + u * (s * f + u + 2 * l) + c;
          } else
            u = a, f = Math.max(0, -(s * u + o)), p = -f * f + u * (u + 2 * l) + c;
        else
          u = -a, f = Math.max(0, -(s * u + o)), p = -f * f + u * (u + 2 * l) + c;
      else
        u <= -v ? (f = Math.max(0, -(-s * a + o)), u = f > 0 ? -a : Math.min(Math.max(-a, -l), a), p = -f * f + u * (u + 2 * l) + c) : u <= v ? (f = 0, u = Math.min(Math.max(-a, -l), a), p = u * (u + 2 * l) + c) : (f = Math.max(0, -(s * a + o)), u = f > 0 ? a : Math.min(Math.max(-a, -l), a), p = -f * f + u * (u + 2 * l) + c);
    else
      u = s > 0 ? -a : a, f = Math.max(0, -(s * u + o)), p = -f * f + u * (u + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, f), r && r.copy(Ur).addScaledVector(Ui, u), p;
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
    const s = Math.sqrt(a - r), o = n - s, l = n + s;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
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
    let n, r, a, s, o, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, f = 1 / this.direction.z, u = this.origin;
    return c >= 0 ? (n = (e.min.x - u.x) * c, r = (e.max.x - u.x) * c) : (n = (e.max.x - u.x) * c, r = (e.min.x - u.x) * c), h >= 0 ? (a = (e.min.y - u.y) * h, s = (e.max.y - u.y) * h) : (a = (e.max.y - u.y) * h, s = (e.min.y - u.y) * h), n > s || a > r || ((a > n || isNaN(n)) && (n = a), (s < r || isNaN(r)) && (r = s), f >= 0 ? (o = (e.min.z - u.z) * f, l = (e.max.z - u.z) * f) : (o = (e.max.z - u.z) * f, l = (e.min.z - u.z) * f), n > l || o > r) || ((o > n || n !== n) && (n = o), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, t);
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
    const s = this.origin, o = this.direction, l = o.x, c = o.y, h = o.z, f = e.x - s.x, u = e.y - s.y, p = e.z - s.z, v = t.x - s.x, T = t.y - s.y, g = t.z - s.z, d = n.x - s.x, M = n.y - s.y, R = n.z - s.z, S = Math.abs(l), y = Math.abs(c), b = Math.abs(h);
    let A, _, w, C, F, B, H, N, G, Z, V, te;
    if (S >= y && S >= b ? (w = l, B = f, G = v, te = d, l >= 0 ? (A = c, _ = h, C = u, F = p, H = T, N = g, Z = M, V = R) : (A = h, _ = c, C = p, F = u, H = g, N = T, Z = R, V = M)) : y >= b ? (w = c, B = u, G = T, te = M, c >= 0 ? (A = h, _ = l, C = p, F = f, H = g, N = v, Z = R, V = d) : (A = l, _ = h, C = f, F = p, H = v, N = g, Z = d, V = R)) : (w = h, B = p, G = g, te = R, h >= 0 ? (A = l, _ = c, C = f, F = u, H = v, N = T, Z = d, V = M) : (A = c, _ = l, C = u, F = f, H = T, N = v, Z = M, V = d)), w === 0) return null;
    const q = A / w, J = _ / w, ee = 1 / w, be = C - q * B, Me = F - J * B, Ke = H - q * G, Oe = N - J * G, Xe = Z - q * te, Y = V - J * te, j = Xe * Oe - Y * Ke, me = be * Y - Me * Xe, Ce = Ke * Me - Oe * be;
    if (r) {
      if (j < 0 || me < 0 || Ce < 0) return null;
    } else if ((j < 0 || me < 0 || Ce < 0) && (j > 0 || me > 0 || Ce > 0)) return null;
    const re = j + me + Ce;
    if (re === 0) return null;
    const Ue = ee * (j * B + me * G + Ce * te);
    return (re > 0 ? Ue < 0 : Ue > 0) ? null : this.at(Ue / re, a);
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
class na extends Ti {
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
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new ze(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new sn(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ka = /* @__PURE__ */ new Qe(), Mn = /* @__PURE__ */ new al(), Bi = /* @__PURE__ */ new Ei(), Va = /* @__PURE__ */ new U(), Oi = /* @__PURE__ */ new U(), Gi = /* @__PURE__ */ new U(), zi = /* @__PURE__ */ new U(), Nr = /* @__PURE__ */ new U(), ki = /* @__PURE__ */ new U(), Ha = /* @__PURE__ */ new U(), Vi = /* @__PURE__ */ new U();
class Tt extends Et {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(e = new Lt(), t = new na()) {
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
      ki.set(0, 0, 0);
      for (let l = 0, c = a.length; l < c; l++) {
        const h = o[l], f = a[l];
        h !== 0 && (Nr.fromBufferAttribute(f, e), s ? ki.addScaledVector(Nr, h) : ki.addScaledVector(Nr.sub(t), h));
      }
      t.add(ki);
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
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Bi.copy(n.boundingSphere), Bi.applyMatrix4(a), Mn.copy(e.ray).recast(e.near), !(Bi.containsPoint(Mn.origin) === !1 && (Mn.intersectSphere(Bi, Va) === null || Mn.origin.distanceToSquared(Va) > (e.far - e.near) ** 2)) && (ka.copy(a).invert(), Mn.copy(e.ray).applyMatrix4(ka), !(n.boundingBox !== null && Mn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Mn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const a = this.geometry, s = this.material, o = a.index, l = a.attributes.position, c = a.attributes.uv, h = a.attributes.uv1, f = a.attributes.normal, u = a.groups, p = a.drawRange;
    if (o !== null)
      if (Array.isArray(s))
        for (let v = 0, T = u.length; v < T; v++) {
          const g = u[v], d = s[g.materialIndex], M = Math.max(g.start, p.start), R = Math.min(o.count, Math.min(g.start + g.count, p.start + p.count));
          for (let S = M, y = R; S < y; S += 3) {
            const b = o.getX(S), A = o.getX(S + 1), _ = o.getX(S + 2);
            r = Hi(this, d, e, n, c, h, f, b, A, _), r && (r.faceIndex = Math.floor(S / 3), r.face.materialIndex = g.materialIndex, t.push(r));
          }
        }
      else {
        const v = Math.max(0, p.start), T = Math.min(o.count, p.start + p.count);
        for (let g = v, d = T; g < d; g += 3) {
          const M = o.getX(g), R = o.getX(g + 1), S = o.getX(g + 2);
          r = Hi(this, s, e, n, c, h, f, M, R, S), r && (r.faceIndex = Math.floor(g / 3), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(s))
        for (let v = 0, T = u.length; v < T; v++) {
          const g = u[v], d = s[g.materialIndex], M = Math.max(g.start, p.start), R = Math.min(l.count, Math.min(g.start + g.count, p.start + p.count));
          for (let S = M, y = R; S < y; S += 3) {
            const b = S, A = S + 1, _ = S + 2;
            r = Hi(this, d, e, n, c, h, f, b, A, _), r && (r.faceIndex = Math.floor(S / 3), r.face.materialIndex = g.materialIndex, t.push(r));
          }
        }
      else {
        const v = Math.max(0, p.start), T = Math.min(l.count, p.start + p.count);
        for (let g = v, d = T; g < d; g += 3) {
          const M = g, R = g + 1, S = g + 2;
          r = Hi(this, s, e, n, c, h, f, M, R, S), r && (r.faceIndex = Math.floor(g / 3), t.push(r));
        }
      }
  }
}
function sl(i, e, t, n, r, a, s, o) {
  let l;
  if (e.side === 1 ? l = n.intersectTriangle(s, a, r, !0, o) : l = n.intersectTriangle(r, a, s, e.side === 0, o), l === null) return null;
  Vi.copy(o), Vi.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(Vi);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: Vi.clone(),
    object: i
  };
}
function Hi(i, e, t, n, r, a, s, o, l, c) {
  i.getVertexPosition(o, Oi), i.getVertexPosition(l, Gi), i.getVertexPosition(c, zi);
  const h = sl(i, e, t, n, Oi, Gi, zi, Ha);
  if (h) {
    const f = new U();
    Ht.getBarycoord(Ha, Oi, Gi, zi, f), r && (h.uv = Ht.getInterpolatedAttribute(r, o, l, c, f, new Re())), a && (h.uv1 = Ht.getInterpolatedAttribute(a, o, l, c, f, new Re())), s && (h.normal = Ht.getInterpolatedAttribute(s, o, l, c, f, new U()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = {
      a: o,
      b: l,
      c,
      normal: new U(),
      materialIndex: 0
    };
    Ht.getNormal(Oi, Gi, zi, u.normal), h.face = u, h.barycoord = f;
  }
  return h;
}
class ti extends Rt {
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
  constructor(e = null, t = 1, n = 1, r, a, s, o, l, c = 1003, h = 1003, f, u) {
    super(null, s, o, l, c, h, r, a, f, u), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Wa extends Bt {
  /**
   * Constructs a new instanced buffer attribute.
   *
   * @param {TypedArray} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   * @param {number} [meshPerAttribute=1] - How often a value of this buffer attribute should be repeated.
   */
  constructor(e, t, n, r = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = r;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const kn = /* @__PURE__ */ new Qe(), Xa = /* @__PURE__ */ new Qe(), Wi = [], qa = /* @__PURE__ */ new Rn(), ol = /* @__PURE__ */ new Qe(), hi = /* @__PURE__ */ new Tt(), fi = /* @__PURE__ */ new Ei();
class ll extends Tt {
  /**
   * Constructs a new instanced mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   * @param {number} count - The number of instances.
   */
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new Wa(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let r = 0; r < n; r++)
      this.setMatrixAt(r, ol);
  }
  /**
   * Computes the bounding box of the instanced mesh, and updates {@link InstancedMesh#boundingBox}.
   * The bounding box is not automatically computed by the engine; this method must be called by your app.
   * You may need to recompute the bounding box if an instance is transformed via {@link InstancedMesh#setMatrixAt}.
   */
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Rn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, kn), qa.copy(e.boundingBox).applyMatrix4(kn), this.boundingBox.union(qa);
  }
  /**
   * Computes the bounding sphere of the instanced mesh, and updates {@link InstancedMesh#boundingSphere}
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if an instance is transformed via {@link InstancedMesh#setMatrixAt}.
   */
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Ei()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, kn), fi.copy(e.boundingSphere).applyMatrix4(kn), this.boundingSphere.union(fi);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  /**
   * Gets the color of the defined instance.
   *
   * @param {number} index - The instance index.
   * @param {Color} color - The target object that is used to store the method's result.
   * @return {Color} A reference to the target color.
   */
  getColorAt(e, t) {
    return this.instanceColor === null ? t.setRGB(1, 1, 1) : t.fromArray(this.instanceColor.array, e * 3);
  }
  /**
   * Gets the local transformation matrix of the defined instance.
   *
   * @param {number} index - The instance index.
   * @param {Matrix4} matrix - The target object that is used to store the method's result.
   * @return {Matrix4} A reference to the target matrix.
   */
  getMatrixAt(e, t) {
    return t.fromArray(this.instanceMatrix.array, e * 16);
  }
  /**
   * Gets the morph target weights of the defined instance.
   *
   * @param {number} index - The instance index.
   * @param {Mesh} object - The target object that is used to store the method's result.
   */
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences, r = this.morphTexture.source.data.data, a = n.length + 1, s = e * a + 1;
    for (let o = 0; o < n.length; o++)
      n[o] = r[s + o];
  }
  raycast(e, t) {
    const n = this.matrixWorld, r = this.count;
    if (hi.geometry = this.geometry, hi.material = this.material, hi.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), fi.copy(this.boundingSphere), fi.applyMatrix4(n), e.ray.intersectsSphere(fi) !== !1))
      for (let a = 0; a < r; a++) {
        this.getMatrixAt(a, kn), Xa.multiplyMatrices(n, kn), hi.matrixWorld = Xa, hi.raycast(e, Wi);
        for (let s = 0, o = Wi.length; s < o; s++) {
          const l = Wi[s];
          l.instanceId = a, l.object = this, t.push(l);
        }
        Wi.length = 0;
      }
  }
  /**
   * Sets the given color to the defined instance. Make sure you set the `needsUpdate` flag of
   * {@link InstancedMesh#instanceColor} to `true` after updating all the colors.
   *
   * @param {number} index - The instance index.
   * @param {Color} color - The instance color.
   * @return {InstancedMesh} A reference to this instanced mesh.
   */
  setColorAt(e, t) {
    return this.instanceColor === null && (this.instanceColor = new Wa(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3), this;
  }
  /**
   * Sets the given local transformation matrix to the defined instance. Make sure you set the `needsUpdate` flag of
   * {@link InstancedMesh#instanceMatrix} to `true` after updating all the matrices.
   *
   * @param {number} index - The instance index.
   * @param {Matrix4} matrix - The local transformation.
   * @return {InstancedMesh} A reference to this instanced mesh.
   */
  setMatrixAt(e, t) {
    return t.toArray(this.instanceMatrix.array, e * 16), this;
  }
  /**
   * Sets the morph target weights to the defined instance. Make sure you set the `needsUpdate` flag of
   * {@link InstancedMesh#morphTexture} to `true` after updating all the influences.
   *
   * @param {number} index - The instance index.
   * @param {Mesh} object -  A mesh which `morphTargetInfluences` property containing the morph target weights
   * of a single instance.
   * @return {InstancedMesh} A reference to this instanced mesh.
   */
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, r = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new ti(new Float32Array(r * this.count), r, this.count, 1028, 1015));
    const a = this.morphTexture.source.data.data;
    let s = 0;
    for (let c = 0; c < n.length; c++)
      s += n[c];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - s, l = r * e;
    return a[l] = o, a.set(n, l + 1), this;
  }
  updateMorphTargets() {
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    super.dispose(), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
  }
}
const yn = /* @__PURE__ */ new Ei(), cl = /* @__PURE__ */ new Re(0.5, 0.5), Xi = /* @__PURE__ */ new U();
class ia {
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
  constructor(e = new mn(), t = new mn(), n = new mn(), r = new mn(), a = new mn(), s = new mn()) {
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
    const r = this.planes, a = e.elements, s = a[0], o = a[1], l = a[2], c = a[3], h = a[4], f = a[5], u = a[6], p = a[7], v = a[8], T = a[9], g = a[10], d = a[11], M = a[12], R = a[13], S = a[14], y = a[15];
    if (r[0].setComponents(c - s, p - h, d - v, y - M).normalize(), r[1].setComponents(c + s, p + h, d + v, y + M).normalize(), r[2].setComponents(c + o, p + f, d + T, y + R).normalize(), r[3].setComponents(c - o, p - f, d - T, y - R).normalize(), n)
      r[4].setComponents(l, u, g, S).normalize(), r[5].setComponents(c - l, p - u, d - g, y - S).normalize();
    else if (r[4].setComponents(c - l, p - u, d - g, y - S).normalize(), t === 2e3)
      r[5].setComponents(c + l, p + u, d + g, y + S).normalize();
    else if (t === 2001)
      r[5].setComponents(l, u, g, S).normalize();
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
      e.boundingSphere === null && e.computeBoundingSphere(), yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(yn);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(e) {
    yn.center.set(0, 0, 0);
    const t = cl.distanceTo(e.center);
    return yn.radius = 0.7071067811865476 + t, yn.applyMatrix4(e.matrixWorld), this.intersectsSphere(yn);
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
      if (Xi.x = r.normal.x > 0 ? e.max.x : e.min.x, Xi.y = r.normal.y > 0 ? e.max.y : e.min.y, Xi.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Xi) < 0)
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
class zs extends Rt {
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
  constructor(e = [], t = 301, n, r, a, s, o, l, c, h) {
    super(e, t, n, r, a, s, o, l, c, h), this.isCubeTexture = !0, this.flipY = !1;
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
class _n extends Rt {
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
  constructor(e, t, n = 1014, r, a, s, o = 1003, l = 1003, c, h = 1026, f = 1) {
    if (h !== 1026 && h !== 1027)
      throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const u = { width: e, height: t, depth: f };
    super(u, r, a, s, o, l, h, n, c), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new ta(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.compareFunction = this.compareFunction, t;
  }
}
class ul extends _n {
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
  constructor(e, t = 1014, n = 301, r, a, s = 1003, o = 1003, l, c = 1026) {
    const h = { width: e, height: e, depth: 1 }, f = [h, h, h, h, h, h];
    super(e, e, t, n, r, a, s, o, l, c), this.image = f, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
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
class ks extends Rt {
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
class ri extends Lt {
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
    const l = [], c = [], h = [], f = [];
    let u = 0, p = 0;
    v("z", "y", "x", -1, -1, n, t, e, s, a, 0), v("z", "y", "x", 1, -1, n, t, -e, s, a, 1), v("x", "z", "y", 1, 1, e, n, t, r, s, 2), v("x", "z", "y", 1, -1, e, n, -t, r, s, 3), v("x", "y", "z", 1, -1, e, t, n, r, a, 4), v("x", "y", "z", -1, -1, e, t, -n, r, a, 5), this.setIndex(l), this.setAttribute("position", new Ct(c, 3)), this.setAttribute("normal", new Ct(h, 3)), this.setAttribute("uv", new Ct(f, 2));
    function v(T, g, d, M, R, S, y, b, A, _, w) {
      const C = S / A, F = y / _, B = S / 2, H = y / 2, N = b / 2, G = A + 1, Z = _ + 1;
      let V = 0, te = 0;
      const q = new U();
      for (let J = 0; J < Z; J++) {
        const ee = J * F - H;
        for (let be = 0; be < G; be++) {
          const Me = be * C - B;
          q[T] = Me * M, q[g] = ee * R, q[d] = N, c.push(q.x, q.y, q.z), q[T] = 0, q[g] = 0, q[d] = b > 0 ? 1 : -1, h.push(q.x, q.y, q.z), f.push(be / A), f.push(1 - J / _), V += 1;
        }
      }
      for (let J = 0; J < _; J++)
        for (let ee = 0; ee < A; ee++) {
          const be = u + ee + G * J, Me = u + ee + G * (J + 1), Ke = u + (ee + 1) + G * (J + 1), Oe = u + (ee + 1) + G * J;
          l.push(be, Me, Oe), l.push(Me, Ke, Oe), te += 6;
        }
      o.addGroup(p, te, w), p += te, u += V;
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
    return new ri(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
class ra extends Lt {
  /**
   * Constructs a new polyhedron geometry.
   *
   * @param {Array<number>} [vertices] - A flat array of vertices describing the base shape.
   * @param {Array<number>} [indices] - A flat array of indices describing the base shape.
   * @param {number} [radius=1] - The radius of the shape.
   * @param {number} [detail=0] - How many levels to subdivide the geometry. The more detail, the smoother the shape.
   */
  constructor(e = [], t = [], n = 1, r = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = {
      vertices: e,
      indices: t,
      radius: n,
      detail: r
    };
    const a = [], s = [];
    o(r), c(n), h(), this.setAttribute("position", new Ct(a, 3)), this.setAttribute("normal", new Ct(a.slice(), 3)), this.setAttribute("uv", new Ct(s, 2)), r === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function o(M) {
      const R = new U(), S = new U(), y = new U();
      for (let b = 0; b < t.length; b += 3)
        p(t[b + 0], R), p(t[b + 1], S), p(t[b + 2], y), l(R, S, y, M);
    }
    function l(M, R, S, y) {
      const b = y + 1, A = [];
      for (let _ = 0; _ <= b; _++) {
        A[_] = [];
        const w = M.clone().lerp(S, _ / b), C = R.clone().lerp(S, _ / b), F = b - _;
        for (let B = 0; B <= F; B++)
          B === 0 && _ === b ? A[_][B] = w : A[_][B] = w.clone().lerp(C, B / F);
      }
      for (let _ = 0; _ < b; _++)
        for (let w = 0; w < 2 * (b - _) - 1; w++) {
          const C = Math.floor(w / 2);
          w % 2 === 0 ? (u(A[_][C + 1]), u(A[_ + 1][C]), u(A[_][C])) : (u(A[_][C + 1]), u(A[_ + 1][C + 1]), u(A[_ + 1][C]));
        }
    }
    function c(M) {
      const R = new U();
      for (let S = 0; S < a.length; S += 3)
        R.x = a[S + 0], R.y = a[S + 1], R.z = a[S + 2], R.normalize().multiplyScalar(M), a[S + 0] = R.x, a[S + 1] = R.y, a[S + 2] = R.z;
    }
    function h() {
      const M = new U();
      for (let R = 0; R < a.length; R += 3) {
        M.x = a[R + 0], M.y = a[R + 1], M.z = a[R + 2];
        const S = g(M) / 2 / Math.PI + 0.5, y = d(M) / Math.PI + 0.5;
        s.push(S, 1 - y);
      }
      v(), f();
    }
    function f() {
      for (let M = 0; M < s.length; M += 6) {
        const R = s[M + 0], S = s[M + 2], y = s[M + 4], b = Math.max(R, S, y), A = Math.min(R, S, y);
        b > 0.9 && A < 0.1 && (R < 0.2 && (s[M + 0] += 1), S < 0.2 && (s[M + 2] += 1), y < 0.2 && (s[M + 4] += 1));
      }
    }
    function u(M) {
      a.push(M.x, M.y, M.z);
    }
    function p(M, R) {
      const S = M * 3;
      R.x = e[S + 0], R.y = e[S + 1], R.z = e[S + 2];
    }
    function v() {
      const M = new U(), R = new U(), S = new U(), y = new U(), b = new Re(), A = new Re(), _ = new Re();
      for (let w = 0, C = 0; w < a.length; w += 9, C += 6) {
        M.set(a[w + 0], a[w + 1], a[w + 2]), R.set(a[w + 3], a[w + 4], a[w + 5]), S.set(a[w + 6], a[w + 7], a[w + 8]), b.set(s[C + 0], s[C + 1]), A.set(s[C + 2], s[C + 3]), _.set(s[C + 4], s[C + 5]), y.copy(M).add(R).add(S).divideScalar(3);
        const F = g(y);
        T(b, C + 0, M, F), T(A, C + 2, R, F), T(_, C + 4, S, F);
      }
    }
    function T(M, R, S, y) {
      y < 0 && M.x === 1 && (s[R] = M.x - 1), S.x === 0 && S.z === 0 && (s[R] = y / 2 / Math.PI + 0.5);
    }
    function g(M) {
      return Math.atan2(M.z, -M.x);
    }
    function d(M) {
      return Math.atan2(-M.y, Math.sqrt(M.x * M.x + M.z * M.z));
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
   * @return {PolyhedronGeometry} A new instance.
   */
  static fromJSON(e) {
    return new ra(e.vertices, e.indices, e.radius, e.detail);
  }
}
class aa extends ra {
  /**
   * Constructs a new icosahedron geometry.
   *
   * @param {number} [radius=1] - Radius of the icosahedron.
   * @param {number} [detail=0] - Setting this to a value greater than `0` adds vertices making it no longer a icosahedron.
   */
  constructor(e = 1, t = 0) {
    const n = (1 + Math.sqrt(5)) / 2, r = [
      -1,
      n,
      0,
      1,
      n,
      0,
      -1,
      -n,
      0,
      1,
      -n,
      0,
      0,
      -1,
      n,
      0,
      1,
      n,
      0,
      -1,
      -n,
      0,
      1,
      -n,
      n,
      0,
      -1,
      n,
      0,
      1,
      -n,
      0,
      -1,
      -n,
      0,
      1
    ], a = [
      0,
      11,
      5,
      0,
      5,
      1,
      0,
      1,
      7,
      0,
      7,
      10,
      0,
      10,
      11,
      1,
      5,
      9,
      5,
      11,
      4,
      11,
      10,
      2,
      10,
      7,
      6,
      7,
      1,
      8,
      3,
      9,
      4,
      3,
      4,
      2,
      3,
      2,
      6,
      3,
      6,
      8,
      3,
      8,
      9,
      4,
      9,
      5,
      2,
      4,
      11,
      6,
      2,
      10,
      8,
      6,
      7,
      9,
      8,
      1
    ];
    super(r, a, e, t), this.type = "IcosahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    };
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {IcosahedronGeometry} A new instance.
   */
  static fromJSON(e) {
    return new aa(e.radius, e.detail);
  }
}
class bi extends Lt {
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
    const a = e / 2, s = t / 2, o = Math.floor(n), l = Math.floor(r), c = o + 1, h = l + 1, f = e / o, u = t / l, p = [], v = [], T = [], g = [];
    for (let d = 0; d < h; d++) {
      const M = d * u - s;
      for (let R = 0; R < c; R++) {
        const S = R * f - a;
        v.push(S, -M, 0), T.push(0, 0, 1), g.push(R / o), g.push(1 - d / l);
      }
    }
    for (let d = 0; d < l; d++)
      for (let M = 0; M < o; M++) {
        const R = M + c * d, S = M + c * (d + 1), y = M + 1 + c * (d + 1), b = M + 1 + c * d;
        p.push(R, S, b), p.push(S, y, b);
      }
    this.setIndex(p), this.setAttribute("position", new Ct(v, 3)), this.setAttribute("normal", new Ct(T, 3)), this.setAttribute("uv", new Ct(g, 2));
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
    return new bi(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
function ni(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      if (Ya(r))
        r.isRenderTargetTexture ? (Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone();
      else if (Array.isArray(r))
        if (Ya(r[0])) {
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
function At(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = ni(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function Ya(i) {
  return i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion);
}
function hl(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function Vs(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : We.workingColorSpace;
}
const fl = { clone: ni, merge: At };
var dl = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, pl = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Ot extends Ti {
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
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = dl, this.fragmentShader = pl, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ni(e.uniforms), this.uniformsGroups = hl(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
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
            this.uniforms[n].value = new ze().setHex(r.value);
            break;
          case "v2":
            this.uniforms[n].value = new Re().fromArray(r.value);
            break;
          case "v3":
            this.uniforms[n].value = new U().fromArray(r.value);
            break;
          case "v4":
            this.uniforms[n].value = new He().fromArray(r.value);
            break;
          case "m3":
            this.uniforms[n].value = new Le().fromArray(r.value);
            break;
          case "m4":
            this.uniforms[n].value = new Qe().fromArray(r.value);
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
class sa extends Ot {
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
class Ka extends Ti {
  /**
   * Constructs a new mesh standard material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new ze(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ze(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Re(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new sn(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class ml extends Ti {
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
class gl extends Ti {
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
class Hs extends Et {
  /**
   * Constructs a new light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new ze(e), this.intensity = t;
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t;
  }
}
const Br = /* @__PURE__ */ new Qe(), Za = /* @__PURE__ */ new U(), $a = /* @__PURE__ */ new U();
class _l {
  /**
   * Constructs a new light shadow.
   *
   * @param {Camera} camera - The light's view of the world.
   */
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Re(512, 512), this.mapType = 1009, this.map = null, this.mapPass = null, this.matrix = new Qe(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new ia(), this._frameExtents = new Re(1, 1), this._viewportCount = 1, this._viewports = [
      new He(0, 0, 1, 1)
    ];
  }
  /**
   * Used internally by the renderer to get the number of viewports that need
   * to be rendered for this shadow.
   *
   * @return {number} The viewport count.
   */
  getViewportCount() {
    return this._viewportCount;
  }
  /**
   * Used internally by the renderer to get the camera that renders the given viewport.
   *
   * @param {number} [viewportIndex=0] - The viewport index.
   * @return {Camera} The shadow camera.
   */
  getCamera() {
    return this.camera;
  }
  /**
   * Gets the shadow cameras frustum. Used internally by the renderer to cull objects.
   *
   * @return {Frustum} The shadow camera frustum.
   */
  getFrustum() {
    return this._frustum;
  }
  /**
   * Update the matrices for the camera and shadow, used internally by the renderer.
   *
   * @param {Light} light - The light for which the shadow is being rendered.
   */
  updateMatrices(e) {
    const t = this.camera;
    Za.setFromMatrixPosition(e.matrixWorld), t.position.copy(Za), $a.setFromMatrixPosition(e.target.matrixWorld), t.lookAt($a), t.updateMatrixWorld(), this._updateMatrix(t, this.matrix, this._frustum);
  }
  /**
   * Updates a shadow projection matrix and its corresponding frustum.
   *
   * @private
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {Matrix4} shadowMatrix - The target shadow matrix.
   * @param {Frustum} frustum - The target frustum.
   * @param {Vector4} [viewport] - The viewport within the shadow atlas.
   */
  _updateMatrix(e, t, n, r) {
    Br.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), n.setFromProjectionMatrix(Br, e.coordinateSystem, e.reversedDepth);
    const a = this._frameExtents, s = r ? r.z / a.x : 1, o = r ? r.w / a.y : 1, l = r ? r.x / a.x : 0, c = r ? r.y / a.y : 0;
    e.coordinateSystem === 2001 || e.reversedDepth ? t.set(
      0.5 * s,
      0,
      0,
      0.5 * s + l,
      0,
      0.5 * o,
      0,
      0.5 * o + c,
      0,
      0,
      1,
      0,
      // Identity Z (preserving the correct [0, 1] range from the projection matrix)
      0,
      0,
      0,
      1
    ) : t.set(
      0.5 * s,
      0,
      0,
      0.5 * s + l,
      0,
      0.5 * o,
      0,
      0.5 * o + c,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), t.multiply(Br);
  }
  /**
   * Returns a viewport definition for the given viewport index.
   *
   * @param {number} viewportIndex - The viewport index.
   * @return {Vector4} The viewport.
   */
  getViewport(e) {
    return this._viewports[e];
  }
  /**
   * Returns the frame extends.
   *
   * @return {Vector2} The frame extends.
   */
  getFrameExtents() {
    return this._frameExtents;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  /**
   * Copies the values of the given light shadow instance to this instance.
   *
   * @param {LightShadow} source - The light shadow to copy.
   * @return {LightShadow} A reference to this light shadow instance.
   */
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this.biasNode = e.biasNode, this;
  }
  /**
   * Returns a new light shadow instance with copied values from this instance.
   *
   * @return {LightShadow} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Serializes the light shadow into JSON.
   *
   * @return {Object} A JSON object representing the serialized light shadow.
   * @see {@link ObjectLoader#parse}
   */
  toJSON() {
    const e = {};
    return e.intensity = this.intensity, e.bias = this.bias, e.normalBias = this.normalBias, e.radius = this.radius, e.blurSamples = this.blurSamples, e.mapSize = this.mapSize.toArray(), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
const qi = /* @__PURE__ */ new U(), Yi = /* @__PURE__ */ new An(), qt = /* @__PURE__ */ new U();
class oa extends Et {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Qe(), this.projectionMatrix = new Qe(), this.projectionMatrixInverse = new Qe(), this.coordinateSystem = 2e3, this._reversedDepth = !1;
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
    super.updateMatrixWorld(e), this.matrixWorld.decompose(qi, Yi, qt), qt.x === 1 && qt.y === 1 && qt.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(qi, Yi, qt.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e, t, n = !1) {
    super.updateWorldMatrix(e, t, n), this.matrixWorld.decompose(qi, Yi, qt), qt.x === 1 && qt.y === 1 && qt.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(qi, Yi, qt.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const pn = /* @__PURE__ */ new U(), Ja = /* @__PURE__ */ new Re(), Qa = /* @__PURE__ */ new Re();
class Nt extends oa {
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
    this.fov = yi * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const e = Math.tan(_i * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return yi * 2 * Math.atan(
      Math.tan(_i * 0.5 * this.fov) / this.zoom
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
    pn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(pn.x, pn.y).multiplyScalar(-e / pn.z), pn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(pn.x, pn.y).multiplyScalar(-e / pn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, Ja, Qa), t.subVectors(Qa, Ja);
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
    let t = e * Math.tan(_i * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, a = -0.5 * r;
    const s = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = s.fullWidth, c = s.fullHeight;
      a += s.offsetX * r / l, t -= s.offsetY * n / c, r *= s.width / l, n *= s.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (a += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(a, a + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
class ai extends oa {
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
    let a = n - e, s = n + e, o = r + t, l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      a += c * this.view.offsetX, s = a + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(a, s, o, l, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class vl extends _l {
  /**
   * Constructs a new directional light shadow.
   */
  constructor() {
    super(new ai(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class xl extends Hs {
  /**
   * Constructs a new directional light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Et.DEFAULT_UP), this.updateMatrix(), this.target = new Et(), this.shadow = new vl();
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.shadow = this.shadow.toJSON(), t.object.target = this.target.uuid, t;
  }
}
class Sl extends Hs {
  /**
   * Constructs a new ambient light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
const Vn = -90, Hn = 1;
class Ml extends Et {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Nt(Vn, Hn, e, t);
    r.layers = this.layers, this.add(r);
    const a = new Nt(Vn, Hn, e, t);
    a.layers = this.layers, this.add(a);
    const s = new Nt(Vn, Hn, e, t);
    s.layers = this.layers, this.add(s);
    const o = new Nt(Vn, Hn, e, t);
    o.layers = this.layers, this.add(o);
    const l = new Nt(Vn, Hn, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Nt(Vn, Hn, e, t);
    c.layers = this.layers, this.add(c);
  }
  /**
   * Must be called when the coordinate system of the cube camera is changed.
   */
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, a, s, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === 2e3)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), a.up.set(0, 0, -1), a.lookAt(0, 1, 0), s.up.set(0, 0, 1), s.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === 2001)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), a.up.set(0, 0, 1), a.lookAt(0, 1, 0), s.up.set(0, 0, -1), s.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
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
    const [a, s, o, l, c, h] = this.children, f = e.getRenderTarget(), u = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), v = e.xr.enabled;
    e.xr.enabled = !1;
    const T = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1;
    let g = !1;
    e.isWebGLRenderer === !0 ? g = e.state.buffers.depth.getReversed() : g = e.reversedDepthBuffer, e.setRenderTarget(n, 0, r), g && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 1, r), g && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 2, r), g && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 3, r), g && e.autoClear === !1 && e.clearDepth(), e.render(t, l), e.setRenderTarget(n, 4, r), g && e.autoClear === !1 && e.clearDepth(), e.render(t, c), n.texture.generateMipmaps = T, e.setRenderTarget(n, 5, r), g && e.autoClear === !1 && e.clearDepth(), e.render(t, h), e.setRenderTarget(f, u, p), e.xr.enabled = v, n.texture.needsPMREMUpdate = !0;
  }
}
class yl extends Nt {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
  }
}
const pa = class pa {
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
pa.prototype.isMatrix2 = !0;
let ja = pa;
function es(i, e, t, n) {
  const r = El(n);
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
function El(i) {
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
typeof window < "u" && (window.__THREE__ ? Pe("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "186");
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
function Ws() {
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
function Tl(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, h = o.usage, f = c.byteLength, u = i.createBuffer();
    i.bindBuffer(l, u), i.bufferData(l, c, h), o.onUploadCallback();
    let p;
    if (c instanceof Float32Array)
      p = i.FLOAT;
    else if (typeof Float16Array < "u" && c instanceof Float16Array)
      p = i.HALF_FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? p = i.HALF_FLOAT : p = i.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      p = i.SHORT;
    else if (c instanceof Uint32Array)
      p = i.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      p = i.INT;
    else if (c instanceof Int8Array)
      p = i.BYTE;
    else if (c instanceof Uint8Array)
      p = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      p = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: u,
      type: p,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: f
    };
  }
  function n(o, l, c) {
    const h = l.array, f = l.updateRanges;
    if (i.bindBuffer(c, o), f.length === 0)
      i.bufferSubData(c, 0, h);
    else {
      f.sort((p, v) => p.start - v.start);
      let u = 0;
      for (let p = 1; p < f.length; p++) {
        const v = f[u], T = f[p];
        T.start <= v.start + v.count + 1 ? v.count = Math.max(
          v.count,
          T.start + T.count - v.start
        ) : (++u, f[u] = T);
      }
      f.length = u + 1;
      for (let p = 0, v = f.length; p < v; p++) {
        const T = f[p];
        i.bufferSubData(
          c,
          T.start * h.BYTES_PER_ELEMENT,
          h,
          T.start,
          T.count
        );
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function a(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (i.deleteBuffer(l.buffer), e.delete(o));
  }
  function s(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = e.get(o);
      (!h || h.version < o.version) && e.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const c = e.get(o);
    if (c === void 0)
      e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return {
    get: r,
    remove: a,
    update: s
  };
}
var bl = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, wl = `#ifdef USE_ALPHAHASH
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
#endif`, Al = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Rl = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Cl = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Pl = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Dl = `#ifdef USE_AOMAP
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
#endif`, Ll = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Fl = `#ifdef USE_BATCHING
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
#endif`, Il = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Ul = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Nl = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Bl = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Ol = `#ifdef USE_IRIDESCENCE
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
#endif`, Gl = `#ifdef USE_BUMPMAP
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
#endif`, zl = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, kl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Vl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Hl = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Wl = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`, Xl = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`, ql = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`, Yl = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`, Kl = `#define PI 3.141592653589793
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
} // validated`, Zl = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, $l = `vec3 transformedNormal = objectNormal;
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
#endif`, Jl = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Ql = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, jl = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, ec = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, tc = "gl_FragColor = linearToOutputTexel( gl_FragColor );", nc = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, ic = `#ifdef USE_ENVMAP
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
#endif`, rc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`, ac = `#ifdef USE_ENVMAP
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
#endif`, sc = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, oc = `#ifdef USE_ENVMAP
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
#endif`, lc = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, cc = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, uc = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, hc = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, fc = `#ifdef USE_GRADIENTMAP
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
}`, dc = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, pc = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, mc = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, gc = `uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`, _c = `#ifdef USE_ENVMAP
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
#endif`, vc = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, xc = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Sc = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Mc = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, yc = `PhysicalMaterial material;
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
#endif`, Ec = `uniform sampler2D dfgLUT;
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
}`, Tc = `
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
#endif`, bc = `#if defined( RE_IndirectDiffuse )
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
#endif`, wc = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Ac = `#ifdef USE_LIGHT_PROBES_GRID
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
#endif`, Rc = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Cc = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Pc = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Dc = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Lc = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Fc = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Ic = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Uc = `#if defined( USE_POINTS_UV )
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
#endif`, Nc = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Bc = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Oc = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Gc = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, zc = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, kc = `#ifdef USE_MORPHTARGETS
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
#endif`, Vc = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Hc = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, Wc = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, Xc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, qc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Yc = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`, Kc = `#ifdef USE_NORMALMAP
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
#endif`, Zc = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, $c = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Jc = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Qc = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, jc = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, eu = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, tu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, nu = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, iu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, ru = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, au = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, su = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, ou = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, lu = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, cu = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, uu = `float getShadowMask() {
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
}`, hu = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, fu = `#ifdef USE_SKINNING
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
#endif`, du = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, pu = `#ifdef USE_SKINNING
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
#endif`, mu = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, gu = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, _u = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, vu = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, xu = `#ifdef USE_TRANSMISSION
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
#endif`, Su = `#ifdef USE_TRANSMISSION
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
#endif`, Mu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, yu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Eu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Tu = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const bu = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, wu = `uniform sampler2D t2D;
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
}`, Au = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Ru = `#ifdef ENVMAP_TYPE_CUBE
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
}`, Cu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Pu = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Du = `#include <common>
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
}`, Lu = `#if DEPTH_PACKING == 3200
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
}`, Fu = `#define DISTANCE
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
}`, Iu = `#define DISTANCE
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
}`, Uu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Nu = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Bu = `uniform float scale;
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
}`, Ou = `uniform vec3 diffuse;
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
}`, Gu = `#include <common>
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
}`, zu = `uniform vec3 diffuse;
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
}`, ku = `#define LAMBERT
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
}`, Vu = `#define LAMBERT
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
}`, Hu = `#define MATCAP
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
}`, Wu = `#define MATCAP
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
}`, Xu = `#define NORMAL
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
}`, qu = `#define NORMAL
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
}`, Yu = `#define PHONG
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
}`, Ku = `#define PHONG
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
}`, Zu = `#define STANDARD
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
}`, $u = `#define STANDARD
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
}`, Ju = `#define TOON
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
}`, Qu = `#define TOON
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
}`, ju = `uniform float size;
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
}`, eh = `uniform vec3 diffuse;
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
}`, th = `#include <common>
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
}`, nh = `uniform vec3 color;
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
}`, ih = `uniform float rotation;
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
}`, rh = `uniform vec3 diffuse;
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
}`, Ne = {
  alphahash_fragment: bl,
  alphahash_pars_fragment: wl,
  alphamap_fragment: Al,
  alphamap_pars_fragment: Rl,
  alphatest_fragment: Cl,
  alphatest_pars_fragment: Pl,
  aomap_fragment: Dl,
  aomap_pars_fragment: Ll,
  batching_pars_vertex: Fl,
  batching_vertex: Il,
  begin_vertex: Ul,
  beginnormal_vertex: Nl,
  bsdfs: Bl,
  iridescence_fragment: Ol,
  bumpmap_pars_fragment: Gl,
  clipping_planes_fragment: zl,
  clipping_planes_pars_fragment: kl,
  clipping_planes_pars_vertex: Vl,
  clipping_planes_vertex: Hl,
  color_fragment: Wl,
  color_pars_fragment: Xl,
  color_pars_vertex: ql,
  color_vertex: Yl,
  common: Kl,
  cube_uv_reflection_fragment: Zl,
  defaultnormal_vertex: $l,
  displacementmap_pars_vertex: Jl,
  displacementmap_vertex: Ql,
  emissivemap_fragment: jl,
  emissivemap_pars_fragment: ec,
  colorspace_fragment: tc,
  colorspace_pars_fragment: nc,
  envmap_fragment: ic,
  envmap_common_pars_fragment: rc,
  envmap_pars_fragment: ac,
  envmap_pars_vertex: sc,
  envmap_physical_pars_fragment: _c,
  envmap_vertex: oc,
  fog_vertex: lc,
  fog_pars_vertex: cc,
  fog_fragment: uc,
  fog_pars_fragment: hc,
  gradientmap_pars_fragment: fc,
  lightmap_pars_fragment: dc,
  lights_lambert_fragment: pc,
  lights_lambert_pars_fragment: mc,
  lights_pars_begin: gc,
  lights_toon_fragment: vc,
  lights_toon_pars_fragment: xc,
  lights_phong_fragment: Sc,
  lights_phong_pars_fragment: Mc,
  lights_physical_fragment: yc,
  lights_physical_pars_fragment: Ec,
  lights_fragment_begin: Tc,
  lights_fragment_maps: bc,
  lights_fragment_end: wc,
  lightprobes_pars_fragment: Ac,
  logdepthbuf_fragment: Rc,
  logdepthbuf_pars_fragment: Cc,
  logdepthbuf_pars_vertex: Pc,
  logdepthbuf_vertex: Dc,
  map_fragment: Lc,
  map_pars_fragment: Fc,
  map_particle_fragment: Ic,
  map_particle_pars_fragment: Uc,
  metalnessmap_fragment: Nc,
  metalnessmap_pars_fragment: Bc,
  morphinstance_vertex: Oc,
  morphcolor_vertex: Gc,
  morphnormal_vertex: zc,
  morphtarget_pars_vertex: kc,
  morphtarget_vertex: Vc,
  normal_fragment_begin: Hc,
  normal_fragment_maps: Wc,
  normal_pars_fragment: Xc,
  normal_pars_vertex: qc,
  normal_vertex: Yc,
  normalmap_pars_fragment: Kc,
  clearcoat_normal_fragment_begin: Zc,
  clearcoat_normal_fragment_maps: $c,
  clearcoat_pars_fragment: Jc,
  iridescence_pars_fragment: Qc,
  opaque_fragment: jc,
  packing: eu,
  premultiplied_alpha_fragment: tu,
  project_vertex: nu,
  dithering_fragment: iu,
  dithering_pars_fragment: ru,
  roughnessmap_fragment: au,
  roughnessmap_pars_fragment: su,
  shadowmap_pars_fragment: ou,
  shadowmap_pars_vertex: lu,
  shadowmap_vertex: cu,
  shadowmask_pars_fragment: uu,
  skinbase_vertex: hu,
  skinning_pars_vertex: fu,
  skinning_vertex: du,
  skinnormal_vertex: pu,
  specularmap_fragment: mu,
  specularmap_pars_fragment: gu,
  tonemapping_fragment: _u,
  tonemapping_pars_fragment: vu,
  transmission_fragment: xu,
  transmission_pars_fragment: Su,
  uv_pars_fragment: Mu,
  uv_pars_vertex: yu,
  uv_vertex: Eu,
  worldpos_vertex: Tu,
  background_vert: bu,
  background_frag: wu,
  backgroundCube_vert: Au,
  backgroundCube_frag: Ru,
  cube_vert: Cu,
  cube_frag: Pu,
  depth_vert: Du,
  depth_frag: Lu,
  distance_vert: Fu,
  distance_frag: Iu,
  equirect_vert: Uu,
  equirect_frag: Nu,
  linedashed_vert: Bu,
  linedashed_frag: Ou,
  meshbasic_vert: Gu,
  meshbasic_frag: zu,
  meshlambert_vert: ku,
  meshlambert_frag: Vu,
  meshmatcap_vert: Hu,
  meshmatcap_frag: Wu,
  meshnormal_vert: Xu,
  meshnormal_frag: qu,
  meshphong_vert: Yu,
  meshphong_frag: Ku,
  meshphysical_vert: Zu,
  meshphysical_frag: $u,
  meshtoon_vert: Ju,
  meshtoon_frag: Qu,
  points_vert: ju,
  points_frag: eh,
  shadow_vert: th,
  shadow_frag: nh,
  sprite_vert: ih,
  sprite_frag: rh
}, he = {
  common: {
    diffuse: { value: /* @__PURE__ */ new ze(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Le() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Le() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Le() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Le() },
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
    aoMapTransform: { value: /* @__PURE__ */ new Le() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Le() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Le() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Le() },
    normalScale: { value: /* @__PURE__ */ new Re(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Le() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Le() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Le() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Le() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new ze(16777215) }
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
    probesMin: { value: /* @__PURE__ */ new U() },
    probesMax: { value: /* @__PURE__ */ new U() },
    probesResolution: { value: /* @__PURE__ */ new U() }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new ze(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Le() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Le() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new ze(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Re(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Le() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Le() },
    alphaTest: { value: 0 }
  }
}, Zt = {
  basic: {
    uniforms: /* @__PURE__ */ At([
      he.common,
      he.specularmap,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.fog
    ]),
    vertexShader: Ne.meshbasic_vert,
    fragmentShader: Ne.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ At([
      he.common,
      he.specularmap,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new ze(0) },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ne.meshlambert_vert,
    fragmentShader: Ne.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ At([
      he.common,
      he.specularmap,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new ze(0) },
        specular: { value: /* @__PURE__ */ new ze(1118481) },
        shininess: { value: 30 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ne.meshphong_vert,
    fragmentShader: Ne.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ At([
      he.common,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.roughnessmap,
      he.metalnessmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new ze(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ne.meshphysical_vert,
    fragmentShader: Ne.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ At([
      he.common,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.gradientmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new ze(0) }
      }
    ]),
    vertexShader: Ne.meshtoon_vert,
    fragmentShader: Ne.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ At([
      he.common,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ne.meshmatcap_vert,
    fragmentShader: Ne.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ At([
      he.points,
      he.fog
    ]),
    vertexShader: Ne.points_vert,
    fragmentShader: Ne.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ At([
      he.common,
      he.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ne.linedashed_vert,
    fragmentShader: Ne.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ At([
      he.common,
      he.displacementmap
    ]),
    vertexShader: Ne.depth_vert,
    fragmentShader: Ne.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ At([
      he.common,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ne.meshnormal_vert,
    fragmentShader: Ne.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ At([
      he.sprite,
      he.fog
    ]),
    vertexShader: Ne.sprite_vert,
    fragmentShader: Ne.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Le() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ne.background_vert,
    fragmentShader: Ne.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Le() }
    },
    vertexShader: Ne.backgroundCube_vert,
    fragmentShader: Ne.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ne.cube_vert,
    fragmentShader: Ne.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ne.equirect_vert,
    fragmentShader: Ne.equirect_frag
  },
  distance: {
    uniforms: /* @__PURE__ */ At([
      he.common,
      he.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new U() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ne.distance_vert,
    fragmentShader: Ne.distance_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ At([
      he.lights,
      he.fog,
      {
        color: { value: /* @__PURE__ */ new ze(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ne.shadow_vert,
    fragmentShader: Ne.shadow_frag
  }
};
Zt.physical = {
  uniforms: /* @__PURE__ */ At([
    Zt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Le() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Le() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Re(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Le() },
      dispersion: { value: 0 },
      retroreflectivity: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Le() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Le() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new ze(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Le() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Le() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Le() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Re() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Le() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new ze(0) },
      specularColor: { value: /* @__PURE__ */ new ze(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Le() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Le() },
      anisotropyVector: { value: /* @__PURE__ */ new Re() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Le() }
    }
  ]),
  vertexShader: Ne.meshphysical_vert,
  fragmentShader: Ne.meshphysical_frag
};
const Ki = { r: 0, b: 0, g: 0 }, ah = /* @__PURE__ */ new Qe(), Xs = /* @__PURE__ */ new Le();
Xs.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function sh(i, e, t, n, r, a) {
  const s = new ze(0);
  let o = r === !0 ? 0 : 1, l, c, h = null, f = 0, u = null;
  function p(M) {
    let R = M.isScene === !0 ? M.background : null;
    if (R && R.isTexture) {
      const S = M.backgroundBlurriness > 0;
      R = e.get(R, S);
    }
    return R;
  }
  function v(M) {
    let R = !1;
    const S = p(M);
    S === null ? g(s, o) : S && S.isColor && (g(S, 1), R = !0);
    const y = i.xr.getEnvironmentBlendMode();
    y === "additive" ? t.buffers.color.setClear(0, 0, 0, 1, a) : y === "alpha-blend" && t.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || R) && (t.buffers.depth.setTest(!0), t.buffers.depth.setMask(!0), t.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function T(M, R) {
    const S = p(R);
    S && (S.isCubeTexture || S.mapping === 306) ? (c === void 0 && (c = new Tt(
      new ri(1, 1, 1),
      new Ot({
        name: "BackgroundCubeMaterial",
        uniforms: ni(Zt.backgroundCube.uniforms),
        vertexShader: Zt.backgroundCube.vertexShader,
        fragmentShader: Zt.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(y, b, A) {
      this.matrixWorld.copyPosition(A.matrixWorld);
    }, Object.defineProperty(c.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), n.update(c)), c.material.uniforms.envMap.value = S, c.material.uniforms.backgroundBlurriness.value = R.backgroundBlurriness, c.material.uniforms.backgroundIntensity.value = R.backgroundIntensity, c.material.uniforms.backgroundRotation.value.setFromMatrix4(ah.makeRotationFromEuler(R.backgroundRotation)).transpose(), S.isCubeTexture && S.isRenderTargetTexture === !1 && c.material.uniforms.backgroundRotation.value.premultiply(Xs), c.material.toneMapped = We.getTransfer(S.colorSpace) !== je, (h !== S || f !== S.version || u !== i.toneMapping) && (c.material.needsUpdate = !0, h = S, f = S.version, u = i.toneMapping), c.layers.enableAll(), M.unshift(c, c.geometry, c.material, 0, 0, null)) : S && S.isTexture && (l === void 0 && (l = new Tt(
      new bi(2, 2),
      new Ot({
        name: "BackgroundMaterial",
        uniforms: ni(Zt.background.uniforms),
        vertexShader: Zt.background.vertexShader,
        fragmentShader: Zt.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), n.update(l)), l.material.uniforms.t2D.value = S, l.material.uniforms.backgroundIntensity.value = R.backgroundIntensity, l.material.toneMapped = We.getTransfer(S.colorSpace) !== je, S.matrixAutoUpdate === !0 && S.updateMatrix(), l.material.uniforms.uvTransform.value.copy(S.matrix), (h !== S || f !== S.version || u !== i.toneMapping) && (l.material.needsUpdate = !0, h = S, f = S.version, u = i.toneMapping), l.layers.enableAll(), M.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function g(M, R) {
    M.getRGB(Ki, Vs(i)), t.buffers.color.setClear(Ki.r, Ki.g, Ki.b, R, a);
  }
  function d() {
    c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return {
    getClearColor: function() {
      return s;
    },
    setClearColor: function(M, R = 1) {
      s.set(M), o = R, g(s, o);
    },
    getClearAlpha: function() {
      return o;
    },
    setClearAlpha: function(M) {
      o = M, g(s, o);
    },
    render: v,
    addToRenderList: T,
    dispose: d
  };
}
function oh(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = u(null);
  let a = r, s = !1;
  function o(F, B, H, N, G) {
    let Z = !1;
    const V = f(F, N, H, B);
    a !== V && (a = V, c(a.object)), Z = p(F, N, H, G), Z && v(F, N, H, G), G !== null && e.update(G, i.ELEMENT_ARRAY_BUFFER), (Z || s) && (s = !1, S(F, B, H, N), G !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(G).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(F) {
    return i.bindVertexArray(F);
  }
  function h(F) {
    return i.deleteVertexArray(F);
  }
  function f(F, B, H, N) {
    const G = N.wireframe === !0;
    let Z = n[B.id];
    Z === void 0 && (Z = {}, n[B.id] = Z);
    const V = F.isInstancedMesh === !0 ? F.id : 0;
    let te = Z[V];
    te === void 0 && (te = {}, Z[V] = te);
    let q = te[H.id];
    q === void 0 && (q = {}, te[H.id] = q);
    let J = q[G];
    return J === void 0 && (J = u(l()), q[G] = J), J;
  }
  function u(F) {
    const B = [], H = [], N = [];
    for (let G = 0; G < t; G++)
      B[G] = 0, H[G] = 0, N[G] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: B,
      enabledAttributes: H,
      attributeDivisors: N,
      object: F,
      attributes: {},
      index: null
    };
  }
  function p(F, B, H, N) {
    const G = a.attributes, Z = B.attributes;
    let V = 0;
    const te = H.getAttributes();
    for (const q in te)
      if (te[q].location >= 0) {
        const ee = G[q];
        let be = Z[q];
        if (be === void 0 && (q === "instanceMatrix" && F.instanceMatrix && (be = F.instanceMatrix), q === "instanceColor" && F.instanceColor && (be = F.instanceColor)), ee === void 0 || ee.attribute !== be || be && ee.data !== be.data) return !0;
        V++;
      }
    return a.attributesNum !== V || a.index !== N;
  }
  function v(F, B, H, N) {
    const G = {}, Z = B.attributes;
    let V = 0;
    const te = H.getAttributes();
    for (const q in te)
      if (te[q].location >= 0) {
        let ee = Z[q];
        ee === void 0 && (q === "instanceMatrix" && F.instanceMatrix && (ee = F.instanceMatrix), q === "instanceColor" && F.instanceColor && (ee = F.instanceColor));
        const be = {};
        be.attribute = ee, ee && ee.data && (be.data = ee.data), G[q] = be, V++;
      }
    a.attributes = G, a.attributesNum = V, a.index = N;
  }
  function T() {
    const F = a.newAttributes;
    for (let B = 0, H = F.length; B < H; B++)
      F[B] = 0;
  }
  function g(F) {
    d(F, 0);
  }
  function d(F, B) {
    const H = a.newAttributes, N = a.enabledAttributes, G = a.attributeDivisors;
    H[F] = 1, N[F] === 0 && (i.enableVertexAttribArray(F), N[F] = 1), G[F] !== B && (i.vertexAttribDivisor(F, B), G[F] = B);
  }
  function M() {
    const F = a.newAttributes, B = a.enabledAttributes;
    for (let H = 0, N = B.length; H < N; H++)
      B[H] !== F[H] && (i.disableVertexAttribArray(H), B[H] = 0);
  }
  function R(F, B, H, N, G, Z, V) {
    V === !0 ? i.vertexAttribIPointer(F, B, H, G, Z) : i.vertexAttribPointer(F, B, H, N, G, Z);
  }
  function S(F, B, H, N) {
    T();
    const G = N.attributes, Z = H.getAttributes(), V = B.defaultAttributeValues;
    for (const te in Z) {
      const q = Z[te];
      if (q.location >= 0) {
        let J = G[te];
        if (J === void 0 && (te === "instanceMatrix" && F.instanceMatrix && (J = F.instanceMatrix), te === "instanceColor" && F.instanceColor && (J = F.instanceColor)), J !== void 0) {
          const ee = J.normalized, be = J.itemSize, Me = e.get(J);
          if (Me === void 0) continue;
          const Ke = Me.buffer, Oe = Me.type, Xe = Me.bytesPerElement, Y = Oe === i.INT || Oe === i.UNSIGNED_INT || J.gpuType === 1013;
          if (J.isInterleavedBufferAttribute) {
            const j = J.data, me = j.stride, Ce = J.offset;
            if (j.isInstancedInterleavedBuffer) {
              for (let re = 0; re < q.locationSize; re++)
                d(q.location + re, j.meshPerAttribute);
              F.isInstancedMesh !== !0 && N._maxInstanceCount === void 0 && (N._maxInstanceCount = j.meshPerAttribute * j.count);
            } else
              for (let re = 0; re < q.locationSize; re++)
                g(q.location + re);
            i.bindBuffer(i.ARRAY_BUFFER, Ke);
            for (let re = 0; re < q.locationSize; re++)
              R(
                q.location + re,
                be / q.locationSize,
                Oe,
                ee,
                me * Xe,
                (Ce + be / q.locationSize * re) * Xe,
                Y
              );
          } else {
            if (J.isInstancedBufferAttribute) {
              for (let j = 0; j < q.locationSize; j++)
                d(q.location + j, J.meshPerAttribute);
              F.isInstancedMesh !== !0 && N._maxInstanceCount === void 0 && (N._maxInstanceCount = J.meshPerAttribute * J.count);
            } else
              for (let j = 0; j < q.locationSize; j++)
                g(q.location + j);
            i.bindBuffer(i.ARRAY_BUFFER, Ke);
            for (let j = 0; j < q.locationSize; j++)
              R(
                q.location + j,
                be / q.locationSize,
                Oe,
                ee,
                be * Xe,
                be / q.locationSize * j * Xe,
                Y
              );
          }
        } else if (V !== void 0) {
          const ee = V[te];
          if (ee !== void 0)
            switch (ee.length) {
              case 2:
                i.vertexAttrib2fv(q.location, ee);
                break;
              case 3:
                i.vertexAttrib3fv(q.location, ee);
                break;
              case 4:
                i.vertexAttrib4fv(q.location, ee);
                break;
              default:
                i.vertexAttrib1fv(q.location, ee);
            }
        }
      }
    }
    M();
  }
  function y() {
    w();
    for (const F in n) {
      const B = n[F];
      for (const H in B) {
        const N = B[H];
        for (const G in N) {
          const Z = N[G];
          for (const V in Z)
            h(Z[V].object), delete Z[V];
          delete N[G];
        }
      }
      delete n[F];
    }
  }
  function b(F) {
    if (n[F.id] === void 0) return;
    const B = n[F.id];
    for (const H in B) {
      const N = B[H];
      for (const G in N) {
        const Z = N[G];
        for (const V in Z)
          h(Z[V].object), delete Z[V];
        delete N[G];
      }
    }
    delete n[F.id];
  }
  function A(F) {
    for (const B in n) {
      const H = n[B];
      for (const N in H) {
        const G = H[N];
        if (G[F.id] === void 0) continue;
        const Z = G[F.id];
        for (const V in Z)
          h(Z[V].object), delete Z[V];
        delete G[F.id];
      }
    }
  }
  function _(F) {
    for (const B in n) {
      const H = n[B], N = F.isInstancedMesh === !0 ? F.id : 0, G = H[N];
      if (G !== void 0) {
        for (const Z in G) {
          const V = G[Z];
          for (const te in V)
            h(V[te].object), delete V[te];
          delete G[Z];
        }
        delete H[N], Object.keys(H).length === 0 && delete n[B];
      }
    }
  }
  function w() {
    C(), s = !0, a !== r && (a = r, c(a.object));
  }
  function C() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: w,
    resetDefaultState: C,
    dispose: y,
    releaseStatesOfGeometry: b,
    releaseStatesOfObject: _,
    releaseStatesOfProgram: A,
    initAttributes: T,
    enableAttribute: g,
    disableUnusedAttributes: M
  };
}
function lh(i, e, t) {
  let n;
  function r(l) {
    n = l;
  }
  function a(l, c) {
    i.drawArrays(n, l, c), t.update(c, n, 1);
  }
  function s(l, c, h) {
    h !== 0 && (i.drawArraysInstanced(n, l, c, h), t.update(c, n, h));
  }
  function o(l, c, h) {
    if (h === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, c, 0, h);
    let u = 0;
    for (let p = 0; p < h; p++)
      u += c[p];
    t.update(u, n, 1);
  }
  this.setMode = r, this.render = a, this.renderInstances = s, this.renderMultiDraw = o;
}
function ch(i, e, t, n) {
  let r;
  function a() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const A = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function s(A) {
    return !(A !== 1023 && n.convert(A) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(A) {
    const _ = A === 1016 && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(A !== 1009 && A !== 1015 && !_ && n.convert(A) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE));
  }
  function l(A) {
    if (A === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      A = "mediump";
    }
    return A === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const h = l(c);
  h !== c && (Pe("WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const f = t.logarithmicDepthBuffer === !0, u = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control");
  t.reversedDepthBuffer === !0 && u === !1 && Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
  const p = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), v = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), T = i.getParameter(i.MAX_TEXTURE_SIZE), g = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), d = i.getParameter(i.MAX_VERTEX_ATTRIBS), M = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), R = i.getParameter(i.MAX_VARYING_VECTORS), S = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), y = i.getParameter(i.MAX_SAMPLES), b = i.getParameter(i.SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: a,
    getMaxPrecision: l,
    textureFormatReadable: s,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: f,
    reversedDepthBuffer: u,
    maxTextures: p,
    maxVertexTextures: v,
    maxTextureSize: T,
    maxCubemapSize: g,
    maxAttributes: d,
    maxVertexUniforms: M,
    maxVaryings: R,
    maxFragmentUniforms: S,
    maxSamples: y,
    samples: b
  };
}
function uh(i) {
  const e = this;
  let t = null, n = 0, r = !1, a = !1;
  const s = new mn(), o = new Le(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(f, u) {
    const p = f.length !== 0 || u || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = u, n = f.length, p;
  }, this.beginShadows = function() {
    a = !0, h(null);
  }, this.endShadows = function() {
    a = !1;
  }, this.setGlobalState = function(f, u) {
    t = h(f, u, 0);
  }, this.setState = function(f, u, p) {
    const v = f.clippingPlanes, T = f.clipIntersection, g = f.clipShadows, d = i.get(f);
    if (!r || v === null || v.length === 0 || a && !g)
      a ? h(null) : c();
    else {
      const M = a ? 0 : n, R = M * 4;
      let S = d.clippingState || null;
      l.value = S, S = h(v, u, R, p);
      for (let y = 0; y !== R; ++y)
        S[y] = t[y];
      d.clippingState = S, this.numIntersection = T ? this.numPlanes : 0, this.numPlanes += M;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(f, u, p, v) {
    const T = f !== null ? f.length : 0;
    let g = null;
    if (T !== 0) {
      if (g = l.value, v !== !0 || g === null) {
        const d = p + T * 4, M = u.matrixWorldInverse;
        o.getNormalMatrix(M), (g === null || g.length < d) && (g = new Float32Array(d));
        for (let R = 0, S = p; R !== T; ++R, S += 4)
          s.copy(f[R]).applyMatrix4(M, o), s.normal.toArray(g, S), g[S + 3] = s.constant;
      }
      l.value = g, l.needsUpdate = !0;
    }
    return e.numPlanes = T, e.numIntersection = 0, g;
  }
}
const $n = 4, hh = 6, fh = 20, dh = 256, di = /* @__PURE__ */ new ai(), ts = /* @__PURE__ */ new ze();
let Or = null, Gr = 0, zr = 0, kr = !1;
const ph = /* @__PURE__ */ new U(), En = /* @__PURE__ */ new U();
class ns {
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
      position: o = ph
    } = a;
    Or = this._renderer.getRenderTarget(), Gr = this._renderer.getActiveCubeFace(), zr = this._renderer.getActiveMipmapLevel(), kr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(s);
    const l = this._allocateTargets();
    return l.depthBuffer = !0, this._sceneToCubeUV(e, n, r, l, o), t > 0 && this._blur(l, 0, 0, t), this._applyPMREM(l), this._cleanup(l), l;
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
    this._cubemapMaterial === null && (this._cubemapMaterial = as(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = rs(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(Or, Gr, zr), this._renderer.xr.enabled = kr, e.scissorTest = !1, Wn(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Or = this._renderer.getRenderTarget(), Gr = this._renderer.getActiveCubeFace(), zr = this._renderer.getActiveMipmapLevel(), kr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
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
      colorSpace: Mi,
      depthBuffer: !1
    }, r = is(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = is(e, t, n);
      const { _lodMax: a } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods } = mh(a)), this._blurMaterial = _h(a, e, t), this._ggxMaterial = gh(a, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Tt(new Lt(), e);
    this._renderer.compile(t, di);
  }
  _sceneToCubeUV(e, t, n, r, a) {
    const l = new Nt(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], f = this._renderer, u = f.autoClear, p = f.toneMapping;
    f.getClearColor(ts), f.toneMapping = 0, f.autoClear = !1, f.state.buffers.depth.getReversed() && (f.setRenderTarget(r), f.clearDepth(), f.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new Tt(
      new ri(),
      new na({
        name: "PMREM.Background",
        side: 1,
        depthWrite: !1,
        depthTest: !1
      })
    ));
    const T = this._backgroundBox, g = T.material;
    let d = !1;
    const M = e.background;
    M ? M.isColor && (g.color.copy(M), e.background = null, d = !0) : (g.color.copy(ts), d = !0);
    for (let R = 0; R < 6; R++) {
      const S = R % 3;
      S === 0 ? (l.up.set(0, c[R], 0), l.position.set(a.x, a.y, a.z), l.lookAt(a.x + h[R], a.y, a.z)) : S === 1 ? (l.up.set(0, 0, c[R]), l.position.set(a.x, a.y, a.z), l.lookAt(a.x, a.y + h[R], a.z)) : (l.up.set(0, c[R], 0), l.position.set(a.x, a.y, a.z), l.lookAt(a.x, a.y, a.z + h[R]));
      const y = this._cubeSize;
      Wn(r, S * y, R > 2 ? y : 0, y, y), f.setRenderTarget(r), d && f.render(T, l), f.render(e, l);
    }
    f.toneMapping = p, f.autoClear = u, e.background = M;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = as()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = rs());
    const a = r ? this._cubemapMaterial : this._equirectMaterial, s = this._lodMeshes[0];
    s.material = a;
    const o = a.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    Wn(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(s, di);
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
    const l = s.uniforms, c = n / (this._lodMeshes.length - 1), h = t / (this._lodMeshes.length - 1), f = Math.sqrt(c * c - h * h), u = c * 1.25, p = f * u, { _lodMax: v } = this, T = this._sizeLods[n], g = 3 * T * (n > v - $n ? n - v + $n : 0), d = 4 * (this._cubeSize - T);
    l.envMap.value = e.texture, l.roughness.value = p, l.mipInt.value = v - t, Wn(a, g, d, 3 * T, 2 * T), r.setRenderTarget(a), r.render(o, di), l.envMap.value = a.texture, l.roughness.value = 0, l.mipInt.value = v - n, Wn(e, g, d, 3 * T, 2 * T), r.setRenderTarget(e), r.render(o, di);
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
    const s = this._renderer, o = this._blurMaterial, l = this._lodMeshes[r];
    l.material = o;
    const c = o.uniforms;
    c.envMap.value = e.texture, c.sigma.value = a, c.mipInt.value = this._lodMax - n;
    const h = this._sizeLods[r], f = 3 * h * (r > this._lodMax - $n ? r - this._lodMax + $n : 0), u = 4 * (this._cubeSize - h);
    Wn(t, f, u, 3 * h, 2 * h), s.setRenderTarget(t), s.render(l, di);
  }
}
function mh(i) {
  const e = [], t = [];
  let n = i;
  const r = i - $n + 1 + hh;
  for (let a = 0; a < r; a++) {
    const s = Math.pow(2, n);
    e.push(s);
    const o = 1 / (s - 2), l = -o, c = 1 + o, h = [l, l, c, l, c, c, l, l, c, c, l, c], f = 6, u = 6, p = 3, v = new Float32Array(p * u * f), T = new Float32Array(p * u * f);
    for (let d = 0; d < f; d++) {
      const M = d % 3 * 2 / 3 - 1, R = d > 2 ? 0 : -1, S = [
        M,
        R,
        0,
        M + 2 / 3,
        R,
        0,
        M + 2 / 3,
        R + 1,
        0,
        M,
        R,
        0,
        M + 2 / 3,
        R + 1,
        0,
        M,
        R + 1,
        0
      ];
      v.set(S, p * u * d);
      for (let y = 0; y < u; y++) {
        const b = h[y * 2] * 2 - 1, A = h[y * 2 + 1] * 2 - 1;
        d === 0 ? En.set(1, A, b) : d === 1 ? En.set(-b, 1, -A) : d === 2 ? En.set(-b, A, 1) : d === 3 ? En.set(-1, A, -b) : d === 4 ? En.set(-b, -1, A) : En.set(b, A, -1), En.toArray(T, (d * u + y) * p);
      }
    }
    const g = new Lt();
    g.setAttribute("position", new Bt(v, p)), g.setAttribute("outputDirection", new Bt(T, p)), t.push(new Tt(g, null)), n > $n && n--;
  }
  return { lodMeshes: t, sizeLods: e };
}
function is(i, e, t) {
  const n = new ut(i, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Wn(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function gh(i, e, t) {
  return new Ot({
    name: "PMREMGGXConvolution",
    defines: {
      GGX_SAMPLES: dh,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      roughness: { value: 0 },
      mipInt: { value: 0 }
    },
    vertexShader: hr(),
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
function _h(i, e, t) {
  return new Ot({
    name: "SphericalGaussianBlur",
    defines: {
      SAMPLES: fh,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      sigma: { value: 0 },
      mipInt: { value: 0 }
    },
    vertexShader: hr(),
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
function rs() {
  return new Ot({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: hr(),
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
function as() {
  return new Ot({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: hr(),
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
function hr() {
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
class la extends ut {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new zs(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
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
    }, r = new ri(5, 5, 5), a = new Ot({
      name: "CubemapFromEquirect",
      uniforms: ni(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    a.uniforms.tEquirect.value = t;
    const s = new Tt(r, a), o = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new Ml(1, 10, this).update(e, s), t.minFilter = o, s.geometry.dispose(), s.material.dispose(), this;
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
function vh(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n = null;
  function r(u, p = !1) {
    return u == null ? null : p ? s(u) : a(u);
  }
  function a(u) {
    if (u && u.isTexture) {
      const p = u.mapping;
      if (p === 303 || p === 304)
        if (e.has(u)) {
          const v = e.get(u).texture;
          return o(v, u.mapping);
        } else {
          const v = u.image;
          if (v && v.height > 0) {
            const T = new la(v.height);
            return T.fromEquirectangularTexture(i, u), e.set(u, T), u.addEventListener("dispose", c), o(T.texture, u.mapping);
          } else
            return null;
        }
    }
    return u;
  }
  function s(u) {
    if (u && u.isTexture) {
      const p = u.mapping, v = p === 303 || p === 304, T = p === 301 || p === 302;
      if (v || T) {
        let g = t.get(u);
        const d = g !== void 0 ? g.texture.pmremVersion : 0;
        if (u.isRenderTargetTexture && u.pmremVersion !== d)
          return n === null && (n = new ns(i)), g = v ? n.fromEquirectangular(u, g) : n.fromCubemap(u, g), g.texture.pmremVersion = u.pmremVersion, t.set(u, g), g.texture;
        if (g !== void 0)
          return g.texture;
        {
          const M = u.image;
          return v && M && M.height > 0 || T && M && l(M) ? (n === null && (n = new ns(i)), g = v ? n.fromEquirectangular(u) : n.fromCubemap(u), g.texture.pmremVersion = u.pmremVersion, t.set(u, g), u.addEventListener("dispose", h), g.texture) : null;
        }
      }
    }
    return u;
  }
  function o(u, p) {
    return p === 303 ? u.mapping = 301 : p === 304 && (u.mapping = 302), u;
  }
  function l(u) {
    let p = 0;
    const v = 6;
    for (let T = 0; T < v; T++)
      u[T] !== void 0 && p++;
    return p === v;
  }
  function c(u) {
    const p = u.target;
    p.removeEventListener("dispose", c);
    const v = e.get(p);
    v !== void 0 && (e.delete(p), v.dispose());
  }
  function h(u) {
    const p = u.target;
    p.removeEventListener("dispose", h);
    const v = t.get(p);
    v !== void 0 && (t.delete(p), v.dispose());
  }
  function f() {
    e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n !== null && (n.dispose(), n = null);
  }
  return {
    get: r,
    dispose: f
  };
}
function xh(i) {
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
      return r === null && Jn("WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function Sh(i, e, t, n) {
  const r = {}, a = /* @__PURE__ */ new WeakMap();
  function s(f) {
    const u = f.target;
    u.index !== null && e.remove(u.index);
    for (const v in u.attributes)
      e.remove(u.attributes[v]);
    u.removeEventListener("dispose", s), delete r[u.id];
    const p = a.get(u);
    p && (e.remove(p), a.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount, t.memory.geometries--;
  }
  function o(f, u) {
    return r[u.id] === !0 || (u.addEventListener("dispose", s), r[u.id] = !0, t.memory.geometries++), u;
  }
  function l(f) {
    const u = f.attributes;
    for (const p in u)
      e.update(u[p], i.ARRAY_BUFFER);
  }
  function c(f) {
    const u = [], p = f.index, v = f.attributes.position;
    let T = 0;
    if (v === void 0)
      return;
    if (p !== null) {
      const M = p.array;
      T = p.version;
      for (let R = 0, S = M.length; R < S; R += 3) {
        const y = M[R + 0], b = M[R + 1], A = M[R + 2];
        u.push(y, b, b, A, A, y);
      }
    } else {
      const M = v.array;
      T = v.version;
      for (let R = 0, S = M.length / 3 - 1; R < S; R += 3) {
        const y = R + 0, b = R + 1, A = R + 2;
        u.push(y, b, b, A, A, y);
      }
    }
    const g = new (v.count >= 65535 ? Gs : Os)(u, 1);
    g.version = T;
    const d = a.get(f);
    d && e.remove(d), a.set(f, g);
  }
  function h(f) {
    const u = a.get(f);
    if (u) {
      const p = f.index;
      p !== null && u.version < p.version && c(f);
    } else
      c(f);
    return a.get(f);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: h
  };
}
function Mh(i, e, t) {
  let n;
  function r(f) {
    n = f;
  }
  let a, s;
  function o(f) {
    a = f.type, s = f.bytesPerElement;
  }
  function l(f, u) {
    i.drawElements(n, u, a, f * s), t.update(u, n, 1);
  }
  function c(f, u, p) {
    p !== 0 && (i.drawElementsInstanced(n, u, a, f * s, p), t.update(u, n, p));
  }
  function h(f, u, p) {
    if (p === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, u, 0, a, f, 0, p);
    let T = 0;
    for (let g = 0; g < p; g++)
      T += u[g];
    t.update(T, n, 1);
  }
  this.setMode = r, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h;
}
function yh(i) {
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
        Ye("WebGLInfo: Unknown draw mode:", s);
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
function Eh(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new He();
  function a(s, o, l) {
    const c = s.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, f = h !== void 0 ? h.length : 0;
    let u = n.get(o);
    if (u === void 0 || u.count !== f) {
      let C = function() {
        _.dispose(), n.delete(o), o.removeEventListener("dispose", C);
      };
      var p = C;
      u !== void 0 && u.texture.dispose();
      const v = o.morphAttributes.position !== void 0, T = o.morphAttributes.normal !== void 0, g = o.morphAttributes.color !== void 0, d = o.morphAttributes.position || [], M = o.morphAttributes.normal || [], R = o.morphAttributes.color || [];
      let S = 0;
      v === !0 && (S = 1), T === !0 && (S = 2), g === !0 && (S = 3);
      let y = o.attributes.position.count * S, b = 1;
      y > e.maxTextureSize && (b = Math.ceil(y / e.maxTextureSize), y = e.maxTextureSize);
      const A = new Float32Array(y * b * 4 * f), _ = new Us(A, y, b, f);
      _.type = 1015, _.needsUpdate = !0;
      const w = S * 4;
      for (let F = 0; F < f; F++) {
        const B = d[F], H = M[F], N = R[F], G = y * b * 4 * F;
        for (let Z = 0; Z < B.count; Z++) {
          const V = Z * w;
          v === !0 && (r.fromBufferAttribute(B, Z), A[G + V + 0] = r.x, A[G + V + 1] = r.y, A[G + V + 2] = r.z, A[G + V + 3] = 0), T === !0 && (r.fromBufferAttribute(H, Z), A[G + V + 4] = r.x, A[G + V + 5] = r.y, A[G + V + 6] = r.z, A[G + V + 7] = 0), g === !0 && (r.fromBufferAttribute(N, Z), A[G + V + 8] = r.x, A[G + V + 9] = r.y, A[G + V + 10] = r.z, A[G + V + 11] = N.itemSize === 4 ? r.w : 1);
        }
      }
      u = {
        count: f,
        texture: _,
        size: new Re(y, b)
      }, n.set(o, u), o.addEventListener("dispose", C);
    }
    if (s.isInstancedMesh === !0 && s.morphTexture !== null)
      l.getUniforms().setValue(i, "morphTexture", s.morphTexture, t);
    else {
      let v = 0;
      for (let g = 0; g < c.length; g++)
        v += c[g];
      const T = o.morphTargetsRelative ? 1 : 1 - v;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", T), l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", u.texture, t), l.getUniforms().setValue(i, "morphTargetsTextureSize", u.size);
  }
  return {
    update: a
  };
}
function Th(i, e, t, n, r) {
  let a = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const h = r.render.frame, f = c.geometry, u = e.get(c, f);
    if (a.get(u) !== h && (e.update(u), a.set(u, h)), c.isInstancedMesh && (c.hasEventListener("dispose", l) === !1 && c.addEventListener("dispose", l), a.get(c) !== h && (t.update(c.instanceMatrix, i.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, i.ARRAY_BUFFER), a.set(c, h))), c.isSkinnedMesh) {
      const p = c.skeleton;
      a.get(p) !== h && (p.update(), a.set(p, h));
    }
    return u;
  }
  function o() {
    a = /* @__PURE__ */ new WeakMap();
  }
  function l(c) {
    const h = c.target;
    h.removeEventListener("dispose", l), n.releaseStatesOfObject(h), t.remove(h.instanceMatrix), h.instanceColor !== null && t.remove(h.instanceColor);
  }
  return {
    update: s,
    dispose: o
  };
}
const bh = {
  1: "LINEAR_TONE_MAPPING",
  2: "REINHARD_TONE_MAPPING",
  3: "CINEON_TONE_MAPPING",
  4: "ACES_FILMIC_TONE_MAPPING",
  6: "AGX_TONE_MAPPING",
  7: "NEUTRAL_TONE_MAPPING",
  5: "CUSTOM_TONE_MAPPING"
};
function wh(i, e, t, n, r, a) {
  const s = new ut(e, t, {
    type: i,
    depthBuffer: r,
    stencilBuffer: a,
    samples: n ? 4 : 0,
    storeMultisampledDepthBuffer: !1,
    storeMultisampledStencilBuffer: !1,
    resolveDepthBuffer: !1,
    resolveStencilBuffer: !1
  });
  let o = null, l = null;
  const c = new Lt();
  c.setAttribute("position", new Ct([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), c.setAttribute("uv", new Ct([0, 2, 0, 0, 2, 0], 2));
  const h = new sa({
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
  }), f = new Tt(c, h), u = new ai(-1, 1, 1, -1, 0, 1);
  let p = null, v = null, T = !1, g, d = null, M = [], R = !1;
  this.setSize = function(S, y) {
    s.setSize(S, y), o !== null && o.setSize(S, y), l !== null && l.setSize(S, y);
    for (let b = 0; b < M.length; b++) {
      const A = M[b];
      A.setSize && A.setSize(S, y);
    }
  }, this.setEffects = function(S) {
    M = S, R = M.length > 0 && M[0].isRenderPass === !0;
    const y = s.width, b = s.height;
    M.length > 0 && o === null && (o = new ut(y, b, { type: 1016, depthBuffer: !1, stencilBuffer: !1 }), l = new ut(y, b, { type: 1016, depthBuffer: !1, stencilBuffer: !1 }));
    for (let A = 0; A < M.length; A++) {
      const _ = M[A];
      _.setSize && _.setSize(y, b);
    }
  }, this.begin = function(S, y) {
    if (T || S.toneMapping === 0 && M.length === 0) return !1;
    if (d = y, y !== null) {
      const b = y.width, A = y.height;
      (s.width !== b || s.height !== A) && this.setSize(b, A);
    }
    return R === !1 && S.setRenderTarget(s), g = S.toneMapping, S.toneMapping = 0, !0;
  }, this.hasRenderPass = function() {
    return R;
  }, this.end = function(S, y) {
    S.toneMapping = g, T = !0;
    let b = s, A = o;
    for (let _ = 0; _ < M.length; _++) {
      const w = M[_];
      w.enabled !== !1 && (w.render(S, A, b, y), w.needsSwap !== !1 && (b = A, A = A === o ? l : o));
    }
    if (p !== S.outputColorSpace || v !== S.toneMapping) {
      p = S.outputColorSpace, v = S.toneMapping, h.defines = {}, We.getTransfer(p) === je && (h.defines.SRGB_TRANSFER = "");
      const _ = bh[v];
      _ && (h.defines[_] = ""), h.needsUpdate = !0;
    }
    h.uniforms.tDiffuse.value = b.texture, S.setRenderTarget(d), S.render(f, u), d = null, T = !1;
  }, this.isCompositing = function() {
    return T;
  }, this.dispose = function() {
    s.dispose(), o !== null && o.dispose(), l !== null && l.dispose(), c.dispose(), h.dispose();
  };
}
const qs = /* @__PURE__ */ new Rt(), Zr = /* @__PURE__ */ new _n(1, 1), Ys = /* @__PURE__ */ new Us(), Ks = /* @__PURE__ */ new Xo(), Zs = /* @__PURE__ */ new zs(), ss = [], os = [], ls = new Float32Array(16), cs = new Float32Array(9), us = new Float32Array(4);
function si(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let a = ss[r];
  if (a === void 0 && (a = new Float32Array(r), ss[r] = a), e !== 0) {
    n.toArray(a, 0);
    for (let s = 1, o = 0; s !== e; ++s)
      o += t, i[s].toArray(a, o);
  }
  return a;
}
function _t(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function vt(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function fr(i, e) {
  let t = os[e];
  t === void 0 && (t = new Int32Array(e), os[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function Ah(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function Rh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (_t(t, e)) return;
    i.uniform2fv(this.addr, e), vt(t, e);
  }
}
function Ch(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (_t(t, e)) return;
    i.uniform3fv(this.addr, e), vt(t, e);
  }
}
function Ph(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (_t(t, e)) return;
    i.uniform4fv(this.addr, e), vt(t, e);
  }
}
function Dh(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), vt(t, e);
  } else {
    if (_t(t, n)) return;
    us.set(n), i.uniformMatrix2fv(this.addr, !1, us), vt(t, n);
  }
}
function Lh(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), vt(t, e);
  } else {
    if (_t(t, n)) return;
    cs.set(n), i.uniformMatrix3fv(this.addr, !1, cs), vt(t, n);
  }
}
function Fh(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), vt(t, e);
  } else {
    if (_t(t, n)) return;
    ls.set(n), i.uniformMatrix4fv(this.addr, !1, ls), vt(t, n);
  }
}
function Ih(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function Uh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (_t(t, e)) return;
    i.uniform2iv(this.addr, e), vt(t, e);
  }
}
function Nh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (_t(t, e)) return;
    i.uniform3iv(this.addr, e), vt(t, e);
  }
}
function Bh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (_t(t, e)) return;
    i.uniform4iv(this.addr, e), vt(t, e);
  }
}
function Oh(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function Gh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (_t(t, e)) return;
    i.uniform2uiv(this.addr, e), vt(t, e);
  }
}
function zh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (_t(t, e)) return;
    i.uniform3uiv(this.addr, e), vt(t, e);
  }
}
function kh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (_t(t, e)) return;
    i.uniform4uiv(this.addr, e), vt(t, e);
  }
}
function Vh(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let a;
  this.type === i.SAMPLER_2D_SHADOW ? (Zr.compareFunction = t.isReversedDepthBuffer() ? 518 : 515, a = Zr) : a = qs, t.setTexture2D(e || a, r);
}
function Hh(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || Ks, r);
}
function Wh(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || Zs, r);
}
function Xh(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || Ys, r);
}
function qh(i) {
  switch (i) {
    case 5126:
      return Ah;
    // FLOAT
    case 35664:
      return Rh;
    // _VEC2
    case 35665:
      return Ch;
    // _VEC3
    case 35666:
      return Ph;
    // _VEC4
    case 35674:
      return Dh;
    // _MAT2
    case 35675:
      return Lh;
    // _MAT3
    case 35676:
      return Fh;
    // _MAT4
    case 5124:
    case 35670:
      return Ih;
    // INT, BOOL
    case 35667:
    case 35671:
      return Uh;
    // _VEC2
    case 35668:
    case 35672:
      return Nh;
    // _VEC3
    case 35669:
    case 35673:
      return Bh;
    // _VEC4
    case 5125:
      return Oh;
    // UINT
    case 36294:
      return Gh;
    // _VEC2
    case 36295:
      return zh;
    // _VEC3
    case 36296:
      return kh;
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
      return Vh;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Hh;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Wh;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Xh;
  }
}
function Yh(i, e) {
  i.uniform1fv(this.addr, e);
}
function Kh(i, e) {
  const t = si(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Zh(i, e) {
  const t = si(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function $h(i, e) {
  const t = si(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Jh(i, e) {
  const t = si(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Qh(i, e) {
  const t = si(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function jh(i, e) {
  const t = si(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function ef(i, e) {
  i.uniform1iv(this.addr, e);
}
function tf(i, e) {
  i.uniform2iv(this.addr, e);
}
function nf(i, e) {
  i.uniform3iv(this.addr, e);
}
function rf(i, e) {
  i.uniform4iv(this.addr, e);
}
function af(i, e) {
  i.uniform1uiv(this.addr, e);
}
function sf(i, e) {
  i.uniform2uiv(this.addr, e);
}
function of(i, e) {
  i.uniform3uiv(this.addr, e);
}
function lf(i, e) {
  i.uniform4uiv(this.addr, e);
}
function cf(i, e, t) {
  const n = this.cache, r = e.length, a = fr(t, r);
  _t(n, a) || (i.uniform1iv(this.addr, a), vt(n, a));
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? s = Zr : s = qs;
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || s, a[o]);
}
function uf(i, e, t) {
  const n = this.cache, r = e.length, a = fr(t, r);
  _t(n, a) || (i.uniform1iv(this.addr, a), vt(n, a));
  for (let s = 0; s !== r; ++s)
    t.setTexture3D(e[s] || Ks, a[s]);
}
function hf(i, e, t) {
  const n = this.cache, r = e.length, a = fr(t, r);
  _t(n, a) || (i.uniform1iv(this.addr, a), vt(n, a));
  for (let s = 0; s !== r; ++s)
    t.setTextureCube(e[s] || Zs, a[s]);
}
function ff(i, e, t) {
  const n = this.cache, r = e.length, a = fr(t, r);
  _t(n, a) || (i.uniform1iv(this.addr, a), vt(n, a));
  for (let s = 0; s !== r; ++s)
    t.setTexture2DArray(e[s] || Ys, a[s]);
}
function df(i) {
  switch (i) {
    case 5126:
      return Yh;
    // FLOAT
    case 35664:
      return Kh;
    // _VEC2
    case 35665:
      return Zh;
    // _VEC3
    case 35666:
      return $h;
    // _VEC4
    case 35674:
      return Jh;
    // _MAT2
    case 35675:
      return Qh;
    // _MAT3
    case 35676:
      return jh;
    // _MAT4
    case 5124:
    case 35670:
      return ef;
    // INT, BOOL
    case 35667:
    case 35671:
      return tf;
    // _VEC2
    case 35668:
    case 35672:
      return nf;
    // _VEC3
    case 35669:
    case 35673:
      return rf;
    // _VEC4
    case 5125:
      return af;
    // UINT
    case 36294:
      return sf;
    // _VEC2
    case 36295:
      return of;
    // _VEC3
    case 36296:
      return lf;
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
      return cf;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return uf;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return hf;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return ff;
  }
}
class pf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = qh(t.type);
  }
}
class mf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = df(t.type);
  }
}
class gf {
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
const Vr = /(\w+)(\])?(\[|\.)?/g;
function hs(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function _f(i, e, t) {
  const n = i.name, r = n.length;
  for (Vr.lastIndex = 0; ; ) {
    const a = Vr.exec(n), s = Vr.lastIndex;
    let o = a[1];
    const l = a[2] === "]", c = a[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && s + 2 === r) {
      hs(t, c === void 0 ? new pf(o, i, e) : new mf(o, i, e));
      break;
    } else {
      let f = t.map[o];
      f === void 0 && (f = new gf(o), hs(t, f)), t = f;
    }
  }
}
class ir {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const o = e.getActiveUniform(t, s), l = e.getUniformLocation(t, o.name);
      _f(o, l, this);
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
      const o = t[a], l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, r);
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
function fs(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const vf = 37297;
let xf = 0;
function Sf(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), a = Math.min(e + 6, t.length);
  for (let s = r; s < a; s++) {
    const o = s + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[s]}`);
  }
  return n.join(`
`);
}
const ds = /* @__PURE__ */ new Le();
function Mf(i) {
  We._getMatrix(ds, We.workingColorSpace, i);
  const e = `mat3( ${ds.elements.map((t) => t.toFixed(4))} )`;
  switch (We.getTransfer(i)) {
    case or:
      return [e, "LinearTransferOETF"];
    case je:
      return [e, "sRGBTransferOETF"];
    default:
      return Pe("WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"];
  }
}
function ps(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), a = (i.getShaderInfoLog(e) || "").trim();
  if (n && a === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(a);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + a + `

` + Sf(i.getShaderSource(e), o);
  } else
    return a;
}
function yf(i, e) {
  const t = Mf(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
const Ef = {
  1: "Linear",
  2: "Reinhard",
  3: "Cineon",
  4: "ACESFilmic",
  6: "AgX",
  7: "Neutral",
  5: "Custom"
};
function Tf(i, e) {
  const t = Ef[e];
  return t === void 0 ? (Pe("WebGLProgram: Unsupported toneMapping:", e), "vec3 " + i + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const Zi = /* @__PURE__ */ new U();
function bf() {
  We.getLuminanceCoefficients(Zi);
  const i = Zi.x.toFixed(4), e = Zi.y.toFixed(4), t = Zi.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function wf(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(gi).join(`
`);
}
function Af(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Rf(i, e) {
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
function gi(i) {
  return i !== "";
}
function ms(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_SUN_LIGHTS/g, e.numSunLights).replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g, e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function gs(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Cf = /^[ \t]*#include +<([\w\d./]+)>/gm;
function $r(i) {
  return i.replace(Cf, Df);
}
const Pf = /* @__PURE__ */ new Map();
function Df(i, e) {
  let t = Ne[e];
  if (t === void 0) {
    const n = Pf.get(e);
    if (n !== void 0)
      t = Ne[n], Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("THREE.WebGLProgram: Can not resolve #include <" + e + ">");
  }
  return $r(t);
}
const Lf = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function _s(i) {
  return i.replace(Lf, Ff);
}
function Ff(i, e, t, n) {
  let r = "";
  for (let a = parseInt(e); a < parseInt(t); a++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + a + " ]").replace(/UNROLLED_LOOP_INDEX/g, a);
  return r;
}
function vs(i) {
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
const If = {
  1: "SHADOWMAP_TYPE_PCF",
  3: "SHADOWMAP_TYPE_VSM"
};
function Uf(i) {
  return If[i.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
const Nf = {
  301: "ENVMAP_TYPE_CUBE",
  302: "ENVMAP_TYPE_CUBE",
  306: "ENVMAP_TYPE_CUBE_UV"
};
function Bf(i) {
  return i.envMap === !1 ? "ENVMAP_TYPE_CUBE" : Nf[i.envMapMode] || "ENVMAP_TYPE_CUBE";
}
const Of = {
  302: "ENVMAP_MODE_REFRACTION"
};
function Gf(i) {
  return i.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : Of[i.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
const zf = {
  0: "ENVMAP_BLENDING_MULTIPLY",
  1: "ENVMAP_BLENDING_MIX",
  2: "ENVMAP_BLENDING_ADD"
};
function kf(i) {
  return i.envMap === !1 ? "ENVMAP_BLENDING_NONE" : zf[i.combine] || "ENVMAP_BLENDING_NONE";
}
function Vf(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function Hf(i, e, t, n) {
  const r = i.getContext(), a = t.defines;
  let s = t.vertexShader, o = t.fragmentShader;
  const l = Uf(t), c = Bf(t), h = Gf(t), f = kf(t), u = Vf(t), p = wf(t), v = Af(a), T = r.createProgram();
  let g, d, M = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (g = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v
  ].filter(gi).join(`
`), g.length > 0 && (g += `
`), d = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v
  ].filter(gi).join(`
`), d.length > 0 && (d += `
`)) : (g = [
    vs(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v,
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
    t.envMap ? "#define " + h : "",
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
    t.shadowMapEnabled ? "#define " + l : "",
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
  ].filter(gi).join(`
`), d = [
    vs(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + f : "",
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
    t.shadowMapEnabled ? "#define " + l : "",
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
    t.toneMapping !== 0 ? Ne.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== 0 ? Tf("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ne.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    yf("linearToOutputTexel", t.outputColorSpace),
    bf(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(gi).join(`
`)), s = $r(s), s = ms(s, t), s = gs(s, t), o = $r(o), o = ms(o, t), o = gs(o, t), s = _s(s), o = _s(o), t.isRawShaderMaterial !== !0 && (M = `#version 300 es
`, g = [
    p,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + g, d = [
    "#define varying in",
    t.glslVersion === ei ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === ei ? "" : "#define gl_FragColor pc_fragColor",
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
` + d);
  const R = M + g + s, S = M + d + o, y = fs(r, r.VERTEX_SHADER, R), b = fs(r, r.FRAGMENT_SHADER, S);
  r.attachShader(T, y), r.attachShader(T, b), t.index0AttributeName !== void 0 ? r.bindAttribLocation(T, 0, t.index0AttributeName) : t.hasPositionAttribute === !0 && r.bindAttribLocation(T, 0, "position"), r.linkProgram(T);
  function A(F) {
    if (i.debug.checkShaderErrors) {
      const B = r.getProgramInfoLog(T) || "", H = r.getShaderInfoLog(y) || "", N = r.getShaderInfoLog(b) || "", G = B.trim(), Z = H.trim(), V = N.trim();
      let te = !0, q = !0;
      if (r.getProgramParameter(T, r.LINK_STATUS) === !1)
        if (te = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, T, y, b);
        else {
          const J = ps(r, y, "vertex"), ee = ps(r, b, "fragment");
          Ye(
            "WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(T, r.VALIDATE_STATUS) + `

Material Name: ` + F.name + `
Material Type: ` + F.type + `

Program Info Log: ` + G + `
` + J + `
` + ee
          );
        }
      else G !== "" ? Pe("WebGLProgram: Program Info Log:", G) : (Z === "" || V === "") && (q = !1);
      q && (F.diagnostics = {
        runnable: te,
        programLog: G,
        vertexShader: {
          log: Z,
          prefix: g
        },
        fragmentShader: {
          log: V,
          prefix: d
        }
      });
    }
    r.deleteShader(y), r.deleteShader(b), _ = new ir(r, T), w = Rf(r, T);
  }
  let _;
  this.getUniforms = function() {
    return _ === void 0 && A(this), _;
  };
  let w;
  this.getAttributes = function() {
    return w === void 0 && A(this), w;
  };
  let C = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return C === !1 && (C = r.getProgramParameter(T, vf)), C;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(T), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = xf++, this.cacheKey = e, this.usedTimes = 1, this.program = T, this.vertexShader = y, this.fragmentShader = b, this;
}
let Wf = 0;
class Xf {
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
    return n === void 0 && (n = new qf(e), t.set(e, n)), n;
  }
}
class qf {
  constructor(e) {
    this.id = Wf++, this.code = e, this.usedTimes = 0;
  }
}
function Yf(i) {
  return i === 1030 || i === 37490 || i === 36285;
}
function Kf(i, e, t, n, r, a) {
  const s = new Ns(), o = new Xf(), l = /* @__PURE__ */ new Set(), c = [], h = /* @__PURE__ */ new Map(), f = n.logarithmicDepthBuffer;
  let u = n.precision;
  const p = {
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
  function v(_) {
    return l.add(_), _ === 0 ? "uv" : `uv${_}`;
  }
  function T(_, w, C, F, B, H) {
    const N = F.fog, G = B.geometry, Z = _.isMeshStandardMaterial || _.isMeshLambertMaterial || _.isMeshPhongMaterial ? F.environment : null, V = _.isMeshStandardMaterial || _.isMeshLambertMaterial && !_.envMap || _.isMeshPhongMaterial && !_.envMap, te = e.get(_.envMap || Z, V), q = te && te.mapping === 306 ? te.image.height : null, J = p[_.type];
    _.precision !== null && (u = n.getMaxPrecision(_.precision), u !== _.precision && Pe("WebGLProgram.getParameters:", _.precision, "not supported, using", u, "instead."));
    const ee = G.morphAttributes.position || G.morphAttributes.normal || G.morphAttributes.color, be = ee !== void 0 ? ee.length : 0;
    let Me = 0;
    G.morphAttributes.position !== void 0 && (Me = 1), G.morphAttributes.normal !== void 0 && (Me = 2), G.morphAttributes.color !== void 0 && (Me = 3);
    let Ke, Oe, Xe, Y;
    if (J) {
      const st = Zt[J];
      Ke = st.vertexShader, Oe = st.fragmentShader;
    } else {
      Ke = _.vertexShader, Oe = _.fragmentShader;
      const st = o.getVertexShaderStage(_), $e = o.getFragmentShaderStage(_);
      o.update(_, st, $e), Xe = st.id, Y = $e.id;
    }
    const j = i.getRenderTarget(), me = i.state.buffers.depth.getReversed(), Ce = B.isInstancedMesh === !0, re = B.isBatchedMesh === !0, Ue = !!_.map, ct = !!_.matcap, De = !!te, ke = !!_.aoMap, nt = !!_.lightMap, Fe = !!_.bumpMap && _.wireframe === !1, et = !!_.normalMap, ht = !!_.displacementMap, gt = !!_.emissiveMap, it = !!_.metalnessMap, rt = !!_.roughnessMap, D = _.anisotropy > 0, ft = _.clearcoat > 0, Ze = _.dispersion > 0, E = _.retroreflectivity > 0, m = _.iridescence > 0, I = _.sheen > 0, O = _.transmission > 0, X = D && !!_.anisotropyMap, ie = ft && !!_.clearcoatMap, ae = ft && !!_.clearcoatNormalMap, K = ft && !!_.clearcoatRoughnessMap, Q = m && !!_.iridescenceMap, se = m && !!_.iridescenceThicknessMap, Ee = I && !!_.sheenColorMap, ue = I && !!_.sheenRoughnessMap, oe = !!_.specularMap, Te = !!_.specularColorMap, Ae = !!_.specularIntensityMap, Ie = O && !!_.transmissionMap, L = O && !!_.thicknessMap, le = !!_.gradientMap, $ = !!_.alphaMap, ce = _.alphaTest > 0, pe = !!_.alphaHash, ne = !!_.extensions;
    let we = 0;
    _.toneMapped && (j === null || j.isXRRenderTarget === !0) && (we = i.toneMapping);
    const Se = {
      shaderID: J,
      shaderType: _.type,
      shaderName: _.name,
      vertexShader: Ke,
      fragmentShader: Oe,
      defines: _.defines,
      customVertexShaderID: Xe,
      customFragmentShaderID: Y,
      isRawShaderMaterial: _.isRawShaderMaterial === !0,
      glslVersion: _.glslVersion,
      precision: u,
      batching: re,
      batchingColor: re && B._colorsTexture !== null,
      instancing: Ce,
      instancingColor: Ce && B.instanceColor !== null,
      instancingMorph: Ce && B.morphTexture !== null,
      outputColorSpace: j === null ? i.outputColorSpace : j.isXRRenderTarget === !0 ? j.texture.colorSpace : We.workingColorSpace,
      alphaToCoverage: !!_.alphaToCoverage,
      map: Ue,
      matcap: ct,
      envMap: De,
      envMapMode: De && te.mapping,
      envMapCubeUVHeight: q,
      aoMap: ke,
      lightMap: nt,
      bumpMap: Fe,
      normalMap: et,
      displacementMap: ht,
      emissiveMap: gt,
      normalMapObjectSpace: et && _.normalMapType === 1,
      normalMapTangentSpace: et && _.normalMapType === 0,
      packedNormalMap: et && _.normalMapType === 0 && Yf(_.normalMap.format),
      metalnessMap: it,
      roughnessMap: rt,
      anisotropy: D,
      anisotropyMap: X,
      clearcoat: ft,
      clearcoatMap: ie,
      clearcoatNormalMap: ae,
      clearcoatRoughnessMap: K,
      dispersion: Ze,
      retroreflection: E,
      iridescence: m,
      iridescenceMap: Q,
      iridescenceThicknessMap: se,
      sheen: I,
      sheenColorMap: Ee,
      sheenRoughnessMap: ue,
      specularMap: oe,
      specularColorMap: Te,
      specularIntensityMap: Ae,
      transmission: O,
      transmissionMap: Ie,
      thicknessMap: L,
      gradientMap: le,
      opaque: _.transparent === !1 && _.blending === 1 && _.alphaToCoverage === !1,
      alphaMap: $,
      alphaTest: ce,
      alphaHash: pe,
      combine: _.combine,
      //
      mapUv: Ue && v(_.map.channel),
      aoMapUv: ke && v(_.aoMap.channel),
      lightMapUv: nt && v(_.lightMap.channel),
      bumpMapUv: Fe && v(_.bumpMap.channel),
      normalMapUv: et && v(_.normalMap.channel),
      displacementMapUv: ht && v(_.displacementMap.channel),
      emissiveMapUv: gt && v(_.emissiveMap.channel),
      metalnessMapUv: it && v(_.metalnessMap.channel),
      roughnessMapUv: rt && v(_.roughnessMap.channel),
      anisotropyMapUv: X && v(_.anisotropyMap.channel),
      clearcoatMapUv: ie && v(_.clearcoatMap.channel),
      clearcoatNormalMapUv: ae && v(_.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: K && v(_.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Q && v(_.iridescenceMap.channel),
      iridescenceThicknessMapUv: se && v(_.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ee && v(_.sheenColorMap.channel),
      sheenRoughnessMapUv: ue && v(_.sheenRoughnessMap.channel),
      specularMapUv: oe && v(_.specularMap.channel),
      specularColorMapUv: Te && v(_.specularColorMap.channel),
      specularIntensityMapUv: Ae && v(_.specularIntensityMap.channel),
      transmissionMapUv: Ie && v(_.transmissionMap.channel),
      thicknessMapUv: L && v(_.thicknessMap.channel),
      alphaMapUv: $ && v(_.alphaMap.channel),
      //
      vertexTangents: !!G.attributes.tangent && (et || D),
      vertexNormals: !!G.attributes.normal,
      vertexColors: _.vertexColors,
      vertexAlphas: _.vertexColors === !0 && !!G.attributes.color && G.attributes.color.itemSize === 4,
      pointsUvs: B.isPoints === !0 && !!G.attributes.uv && (Ue || $),
      fog: !!N,
      useFog: _.fog === !0,
      fogExp2: !!N && N.isFogExp2,
      flatShading: _.wireframe === !1 && (_.flatShading === !0 || G.attributes.normal === void 0 && et === !1 && (_.isMeshLambertMaterial || _.isMeshPhongMaterial || _.isMeshStandardMaterial || _.isMeshPhysicalMaterial)),
      sizeAttenuation: _.sizeAttenuation === !0,
      logarithmicDepthBuffer: f,
      reversedDepthBuffer: me,
      skinning: B.isSkinnedMesh === !0,
      hasPositionAttribute: G.attributes.position !== void 0,
      morphTargets: G.morphAttributes.position !== void 0,
      morphNormals: G.morphAttributes.normal !== void 0,
      morphColors: G.morphAttributes.color !== void 0,
      morphTargetsCount: be,
      morphTextureStride: Me,
      numSunLights: w.sun.length,
      numDirLights: w.directional.length,
      numPointLights: w.point.length,
      numSpotLights: w.spot.length,
      numSpotLightMaps: w.spotLightMap.length,
      numRectAreaLights: w.rectArea.length,
      numHemiLights: w.hemi.length,
      numSunLightShadows: w.sunShadowMap.length,
      numDirLightShadows: w.directionalShadowMap.length,
      numPointLightShadows: w.pointShadowMap.length,
      numSpotLightShadows: w.spotShadowMap.length,
      numSpotLightShadowsWithMaps: w.numSpotLightShadowsWithMaps,
      numLightProbes: w.numLightProbes,
      numLightProbeGrids: H.length,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: _.dithering,
      shadowMapEnabled: i.shadowMap.enabled && C.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: we,
      decodeVideoTexture: Ue && _.map.isVideoTexture === !0 && We.getTransfer(_.map.colorSpace) === je,
      decodeVideoTextureEmissive: gt && _.emissiveMap.isVideoTexture === !0 && We.getTransfer(_.emissiveMap.colorSpace) === je,
      premultipliedAlpha: _.premultipliedAlpha,
      doubleSided: _.side === 2,
      flipSided: _.side === 1,
      useDepthPacking: _.depthPacking >= 0,
      depthPacking: _.depthPacking || 0,
      index0AttributeName: _.index0AttributeName,
      extensionClipCullDistance: ne && _.extensions.clipCullDistance === !0 && t.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (ne && _.extensions.multiDraw === !0 || re) && t.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: t.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: _.customProgramCacheKey()
    };
    return Se.vertexUv1s = l.has(1), Se.vertexUv2s = l.has(2), Se.vertexUv3s = l.has(3), l.clear(), Se;
  }
  function g(_) {
    const w = [];
    if (_.shaderID ? w.push(_.shaderID) : (w.push(_.customVertexShaderID), w.push(_.customFragmentShaderID)), _.defines !== void 0)
      for (const C in _.defines)
        w.push(C), w.push(_.defines[C]);
    return _.isRawShaderMaterial === !1 && (d(w, _), M(w, _), w.push(i.outputColorSpace)), w.push(_.customProgramCacheKey), w.join();
  }
  function d(_, w) {
    _.push(w.precision), _.push(w.outputColorSpace), _.push(w.envMapMode), _.push(w.envMapCubeUVHeight), _.push(w.mapUv), _.push(w.alphaMapUv), _.push(w.lightMapUv), _.push(w.aoMapUv), _.push(w.bumpMapUv), _.push(w.normalMapUv), _.push(w.displacementMapUv), _.push(w.emissiveMapUv), _.push(w.metalnessMapUv), _.push(w.roughnessMapUv), _.push(w.anisotropyMapUv), _.push(w.clearcoatMapUv), _.push(w.clearcoatNormalMapUv), _.push(w.clearcoatRoughnessMapUv), _.push(w.iridescenceMapUv), _.push(w.iridescenceThicknessMapUv), _.push(w.sheenColorMapUv), _.push(w.sheenRoughnessMapUv), _.push(w.specularMapUv), _.push(w.specularColorMapUv), _.push(w.specularIntensityMapUv), _.push(w.transmissionMapUv), _.push(w.thicknessMapUv), _.push(w.combine), _.push(w.fogExp2), _.push(w.sizeAttenuation), _.push(w.morphTargetsCount), _.push(w.morphAttributeCount), _.push(w.numSunLights), _.push(w.numDirLights), _.push(w.numPointLights), _.push(w.numSpotLights), _.push(w.numSpotLightMaps), _.push(w.numHemiLights), _.push(w.numRectAreaLights), _.push(w.numSunLightShadows), _.push(w.numDirLightShadows), _.push(w.numPointLightShadows), _.push(w.numSpotLightShadows), _.push(w.numSpotLightShadowsWithMaps), _.push(w.numLightProbes), _.push(w.shadowMapType), _.push(w.toneMapping), _.push(w.numClippingPlanes), _.push(w.numClipIntersection), _.push(w.depthPacking);
  }
  function M(_, w) {
    s.disableAll(), w.instancing && s.enable(0), w.instancingColor && s.enable(1), w.instancingMorph && s.enable(2), w.matcap && s.enable(3), w.envMap && s.enable(4), w.normalMapObjectSpace && s.enable(5), w.normalMapTangentSpace && s.enable(6), w.clearcoat && s.enable(7), w.iridescence && s.enable(8), w.alphaTest && s.enable(9), w.vertexColors && s.enable(10), w.vertexAlphas && s.enable(11), w.vertexUv1s && s.enable(12), w.vertexUv2s && s.enable(13), w.vertexUv3s && s.enable(14), w.vertexTangents && s.enable(15), w.anisotropy && s.enable(16), w.alphaHash && s.enable(17), w.batching && s.enable(18), w.dispersion && s.enable(19), w.retroreflection && s.enable(24), w.batchingColor && s.enable(20), w.gradientMap && s.enable(21), w.packedNormalMap && s.enable(22), w.vertexNormals && s.enable(23), _.push(s.mask), s.disableAll(), w.fog && s.enable(0), w.useFog && s.enable(1), w.flatShading && s.enable(2), w.logarithmicDepthBuffer && s.enable(3), w.reversedDepthBuffer && s.enable(4), w.skinning && s.enable(5), w.morphTargets && s.enable(6), w.morphNormals && s.enable(7), w.morphColors && s.enable(8), w.premultipliedAlpha && s.enable(9), w.shadowMapEnabled && s.enable(10), w.doubleSided && s.enable(11), w.flipSided && s.enable(12), w.useDepthPacking && s.enable(13), w.dithering && s.enable(14), w.transmission && s.enable(15), w.sheen && s.enable(16), w.opaque && s.enable(17), w.pointsUvs && s.enable(18), w.decodeVideoTexture && s.enable(19), w.decodeVideoTextureEmissive && s.enable(20), w.alphaToCoverage && s.enable(21), w.numLightProbeGrids > 0 && s.enable(22), w.hasPositionAttribute && s.enable(23), _.push(s.mask);
  }
  function R(_) {
    const w = p[_.type];
    let C;
    if (w) {
      const F = Zt[w];
      C = fl.clone(F.uniforms);
    } else
      C = _.uniforms;
    return C;
  }
  function S(_, w) {
    let C = h.get(w);
    return C !== void 0 ? ++C.usedTimes : (C = new Hf(i, w, _, r), c.push(C), h.set(w, C)), C;
  }
  function y(_) {
    if (--_.usedTimes === 0) {
      const w = c.indexOf(_);
      c[w] = c[c.length - 1], c.pop(), h.delete(_.cacheKey), _.destroy();
    }
  }
  function b(_) {
    o.remove(_);
  }
  function A() {
    o.dispose();
  }
  return {
    getParameters: T,
    getProgramCacheKey: g,
    getUniforms: R,
    acquireProgram: S,
    releaseProgram: y,
    releaseShaderCache: b,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: c,
    dispose: A
  };
}
function Zf() {
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
  function r(s, o, l) {
    i.get(s)[o] = l;
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
function $f(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.materialVariant !== e.materialVariant ? i.materialVariant - e.materialVariant : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function xs(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function Ss() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function a() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function s(u) {
    let p = 0;
    return u.isInstancedMesh && (p += 2), u.isSkinnedMesh && (p += 1), p;
  }
  function o(u, p, v, T, g, d) {
    let M = i[e];
    return M === void 0 ? (M = {
      id: u.id,
      object: u,
      geometry: p,
      material: v,
      materialVariant: s(u),
      groupOrder: T,
      renderOrder: u.renderOrder,
      z: g,
      group: d
    }, i[e] = M) : (M.id = u.id, M.object = u, M.geometry = p, M.material = v, M.materialVariant = s(u), M.groupOrder = T, M.renderOrder = u.renderOrder, M.z = g, M.group = d), e++, M;
  }
  function l(u, p, v, T, g, d, M) {
    M.reversedDepth === !0 && (g = -g);
    const R = o(u, p, v, T, g, d);
    v.transmission > 0 ? n.push(R) : v.transparent === !0 ? r.push(R) : t.push(R);
  }
  function c(u, p, v, T, g, d) {
    const M = o(u, p, v, T, g, d);
    v.transmission > 0 ? n.unshift(M) : v.transparent === !0 ? r.unshift(M) : t.unshift(M);
  }
  function h(u, p) {
    t.length > 1 && t.sort(u || $f), n.length > 1 && n.sort(p || xs), r.length > 1 && r.sort(p || xs);
  }
  function f() {
    for (let u = e, p = i.length; u < p; u++) {
      const v = i[u];
      if (v.id === null) break;
      v.id = null, v.object = null, v.geometry = null, v.material = null, v.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: a,
    push: l,
    unshift: c,
    finish: f,
    sort: h
  };
}
function Jf() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const a = i.get(n);
    let s;
    return a === void 0 ? (s = new Ss(), i.set(n, [s])) : r >= a.length ? (s = new Ss(), a.push(s)) : s = a[r], s;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Qf() {
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
            direction: new U(),
            color: new ze()
          };
          break;
        case "SpotLight":
          t = {
            position: new U(),
            direction: new U(),
            color: new ze(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new U(),
            color: new ze(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new U(),
            skyColor: new ze(),
            groundColor: new ze()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new ze(),
            position: new U(),
            halfWidth: new U(),
            halfHeight: new U()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function jf() {
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
            shadowMapSize: new Re()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Re()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Re(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let ed = 0;
function td(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function nd(i) {
  const e = new Qf(), t = jf(), n = {
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
  for (let c = 0; c < 9; c++) n.probe.push(new U());
  const r = new U(), a = new Qe(), s = new Qe();
  function o(c) {
    let h = 0, f = 0, u = 0;
    for (let B = 0; B < 9; B++) n.probe[B].set(0, 0, 0);
    let p = 0, v = 0, T = 0, g = 0, d = 0, M = 0, R = 0, S = 0, y = 0, b = 0, A = 0, _ = 0, w = 0, C = 0;
    c.sort(td);
    for (let B = 0, H = c.length; B < H; B++) {
      const N = c[B], G = N.color, Z = N.intensity, V = N.distance;
      let te = null;
      if (N.shadow && N.shadow.map && (N.shadow.map.texture.format === 1030 ? te = N.shadow.map.texture : te = N.shadow.map.depthTexture || N.shadow.map.texture), N.isAmbientLight)
        h += G.r * Z, f += G.g * Z, u += G.b * Z;
      else if (N.isLightProbe) {
        for (let q = 0; q < 9; q++)
          n.probe[q].addScaledVector(N.sh.coefficients[q], Z);
        C++;
      } else if (N.isSunLight) {
        const q = e.get(N);
        if (q.color.copy(N.color).multiplyScalar(N.intensity), N.castShadow) {
          const J = N.shadow, ee = t.get(N);
          ee.shadowIntensity = J.intensity, ee.shadowBias = J.bias, ee.shadowNormalBias = J.normalBias, ee.shadowRadius = J.radius, ee.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()), n.sunShadow[v] = ee, n.sunShadowMap[v] = te;
          const be = J.getViewportCount();
          for (let Me = 0; Me < be; Me++)
            n.sunShadowMatrix[T + Me] = J.getMatrix(Me), n.sunShadowCascade[T + Me] = J._cascadeData[Me];
          T += be, v++;
        }
        n.sun[p] = q, p++;
      } else if (N.isDirectionalLight) {
        const q = e.get(N);
        if (q.color.copy(N.color).multiplyScalar(N.intensity), N.castShadow) {
          const J = N.shadow, ee = t.get(N);
          ee.shadowIntensity = J.intensity, ee.shadowBias = J.bias, ee.shadowNormalBias = J.normalBias, ee.shadowRadius = J.radius, ee.shadowMapSize = J.mapSize, n.directionalShadow[g] = ee, n.directionalShadowMap[g] = te, n.directionalShadowMatrix[g] = N.shadow.matrix, y++;
        }
        n.directional[g] = q, g++;
      } else if (N.isSpotLight) {
        const q = e.get(N);
        q.position.setFromMatrixPosition(N.matrixWorld), q.color.copy(G).multiplyScalar(Z), q.distance = V, q.coneCos = Math.cos(N.angle), q.penumbraCos = Math.cos(N.angle * (1 - N.penumbra)), q.decay = N.decay, n.spot[M] = q;
        const J = N.shadow;
        if (N.map && (n.spotLightMap[_] = N.map, _++, J.updateMatrices(N), N.castShadow && w++), n.spotLightMatrix[M] = J.matrix, N.castShadow) {
          const ee = t.get(N);
          ee.shadowIntensity = J.intensity, ee.shadowBias = J.bias, ee.shadowNormalBias = J.normalBias, ee.shadowRadius = J.radius, ee.shadowMapSize = J.mapSize, n.spotShadow[M] = ee, n.spotShadowMap[M] = te, A++;
        }
        M++;
      } else if (N.isRectAreaLight) {
        const q = e.get(N);
        q.color.copy(G).multiplyScalar(Z), q.halfWidth.set(N.width * 0.5, 0, 0), q.halfHeight.set(0, N.height * 0.5, 0), n.rectArea[R] = q, R++;
      } else if (N.isPointLight) {
        const q = e.get(N);
        if (q.color.copy(N.color).multiplyScalar(N.intensity), q.distance = N.distance, q.decay = N.decay, N.castShadow) {
          const J = N.shadow, ee = t.get(N);
          ee.shadowIntensity = J.intensity, ee.shadowBias = J.bias, ee.shadowNormalBias = J.normalBias, ee.shadowRadius = J.radius, ee.shadowMapSize = J.mapSize, ee.shadowCameraNear = J.camera.near, ee.shadowCameraFar = J.camera.far, n.pointShadow[d] = ee, n.pointShadowMap[d] = te, n.pointShadowMatrix[d] = N.shadow.matrix, b++;
        }
        n.point[d] = q, d++;
      } else if (N.isHemisphereLight) {
        const q = e.get(N);
        q.skyColor.copy(N.color).multiplyScalar(Z), q.groundColor.copy(N.groundColor).multiplyScalar(Z), n.hemi[S] = q, S++;
      }
    }
    R > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = he.LTC_FLOAT_1, n.rectAreaLTC2 = he.LTC_FLOAT_2) : (n.rectAreaLTC1 = he.LTC_HALF_1, n.rectAreaLTC2 = he.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = f, n.ambient[2] = u;
    const F = n.hash;
    (F.sunLength !== p || F.directionalLength !== g || F.pointLength !== d || F.spotLength !== M || F.rectAreaLength !== R || F.hemiLength !== S || F.numSunShadows !== v || F.numDirectionalShadows !== y || F.numPointShadows !== b || F.numSpotShadows !== A || F.numSpotMaps !== _ || F.numLightProbes !== C) && (n.sun.length = p, n.directional.length = g, n.spot.length = M, n.rectArea.length = R, n.point.length = d, n.hemi.length = S, n.sunShadow.length = v, n.sunShadowMap.length = v, n.sunShadowMatrix.length = T, n.sunShadowCascade.length = T, n.directionalShadow.length = y, n.directionalShadowMap.length = y, n.directionalShadowMatrix.length = y, n.pointShadow.length = b, n.pointShadowMap.length = b, n.pointShadowMatrix.length = b, n.spotShadow.length = A, n.spotShadowMap.length = A, n.spotLightMatrix.length = A + _ - w, n.spotLightMap.length = _, n.numSpotLightShadowsWithMaps = w, n.numLightProbes = C, F.sunLength = p, F.directionalLength = g, F.pointLength = d, F.spotLength = M, F.rectAreaLength = R, F.hemiLength = S, F.numSunShadows = v, F.numDirectionalShadows = y, F.numPointShadows = b, F.numSpotShadows = A, F.numSpotMaps = _, F.numLightProbes = C, n.version = ed++);
  }
  function l(c, h) {
    let f = 0, u = 0, p = 0, v = 0, T = 0, g = 0;
    const d = h.matrixWorldInverse;
    for (let M = 0, R = c.length; M < R; M++) {
      const S = c[M];
      if (S.isSunLight) {
        const y = n.sun[f];
        y.direction.setFromMatrixPosition(S.matrixWorld), y.direction.transformDirection(d), f++;
      } else if (S.isDirectionalLight) {
        const y = n.directional[u];
        y.direction.setFromMatrixPosition(S.matrixWorld), r.setFromMatrixPosition(S.target.matrixWorld), y.direction.sub(r), y.direction.transformDirection(d), u++;
      } else if (S.isSpotLight) {
        const y = n.spot[v];
        y.position.setFromMatrixPosition(S.matrixWorld), y.position.applyMatrix4(d), y.direction.setFromMatrixPosition(S.matrixWorld), r.setFromMatrixPosition(S.target.matrixWorld), y.direction.sub(r), y.direction.transformDirection(d), v++;
      } else if (S.isRectAreaLight) {
        const y = n.rectArea[T];
        y.position.setFromMatrixPosition(S.matrixWorld), y.position.applyMatrix4(d), s.identity(), a.copy(S.matrixWorld), a.premultiply(d), s.extractRotation(a), y.halfWidth.set(S.width * 0.5, 0, 0), y.halfHeight.set(0, S.height * 0.5, 0), y.halfWidth.applyMatrix4(s), y.halfHeight.applyMatrix4(s), T++;
      } else if (S.isPointLight) {
        const y = n.point[p];
        y.position.setFromMatrixPosition(S.matrixWorld), y.position.applyMatrix4(d), p++;
      } else if (S.isHemisphereLight) {
        const y = n.hemi[g];
        y.direction.setFromMatrixPosition(S.matrixWorld), y.direction.transformDirection(d), g++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function Ms(i) {
  const e = new nd(i), t = [], n = [], r = [];
  function a(u) {
    f.camera = u, t.length = 0, n.length = 0, r.length = 0;
  }
  function s(u) {
    t.push(u);
  }
  function o(u) {
    n.push(u);
  }
  function l(u) {
    r.push(u);
  }
  function c() {
    e.setup(t);
  }
  function h(u) {
    e.setupView(t, u);
  }
  const f = {
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
    state: f,
    setupLights: c,
    setupLightsView: h,
    pushLight: s,
    pushShadow: o,
    pushLightProbeGrid: l
  };
}
function id(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, a = 0) {
    const s = e.get(r);
    let o;
    return s === void 0 ? (o = new Ms(i), e.set(r, [o])) : a >= s.length ? (o = new Ms(i), s.push(o)) : o = s[a], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
const rd = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, ad = `uniform sampler2D shadow_pass;
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
}`, sd = [
  /* @__PURE__ */ new U(1, 0, 0),
  /* @__PURE__ */ new U(-1, 0, 0),
  /* @__PURE__ */ new U(0, 1, 0),
  /* @__PURE__ */ new U(0, -1, 0),
  /* @__PURE__ */ new U(0, 0, 1),
  /* @__PURE__ */ new U(0, 0, -1)
], od = [
  /* @__PURE__ */ new U(0, -1, 0),
  /* @__PURE__ */ new U(0, -1, 0),
  /* @__PURE__ */ new U(0, 0, 1),
  /* @__PURE__ */ new U(0, 0, -1),
  /* @__PURE__ */ new U(0, -1, 0),
  /* @__PURE__ */ new U(0, -1, 0)
], ys = /* @__PURE__ */ new Qe(), pi = /* @__PURE__ */ new U(), Hr = /* @__PURE__ */ new U();
function ld(i, e, t) {
  let n = new ia();
  const r = new Re(), a = new Re(), s = new He(), o = new ml(), l = new gl(), c = {}, h = t.maxTextureSize, f = { 0: 1, 1: 0, 2: 2 }, u = new Ot({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Re() },
      radius: { value: 4 }
    },
    vertexShader: rd,
    fragmentShader: ad
  }), p = u.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const v = new Lt();
  v.setAttribute(
    "position",
    new Bt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const T = new Tt(v, u), g = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let d = this.type;
  this.render = function(b, A, _) {
    if (g.enabled === !1 || g.autoUpdate === !1 && g.needsUpdate === !1 || b.length === 0) return;
    this.type === 2 && (Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."), this.type = 1);
    const w = i.getRenderTarget(), C = i.getActiveCubeFace(), F = i.getActiveMipmapLevel(), B = i.state;
    B.setBlending(0), B.buffers.depth.getReversed() === !0 ? B.buffers.color.setClear(0, 0, 0, 0) : B.buffers.color.setClear(1, 1, 1, 1), B.buffers.depth.setTest(!0), B.setScissorTest(!1);
    const H = d !== this.type;
    H && A.traverse(function(N) {
      N.material && (Array.isArray(N.material) ? N.material.forEach((G) => G.needsUpdate = !0) : N.material.needsUpdate = !0);
    });
    for (let N = 0, G = b.length; N < G; N++) {
      const Z = b[N], V = Z.shadow;
      if (V === void 0) {
        Pe("WebGLShadowMap:", Z, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === !1 && V.needsUpdate === !1) continue;
      r.copy(V.mapSize);
      const te = V.getFrameExtents();
      r.multiply(te), a.copy(V.mapSize), (r.x > h || r.y > h) && (r.x > h && (a.x = Math.floor(h / te.x), r.x = a.x * te.x, V.mapSize.x = a.x), r.y > h && (a.y = Math.floor(h / te.y), r.y = a.y * te.y, V.mapSize.y = a.y));
      const q = i.state.buffers.depth.getReversed();
      if (V.camera._reversedDepth = q, V.map === null || H === !0) {
        if (V.map !== null && (V.map.depthTexture !== null && (V.map.depthTexture.dispose(), V.map.depthTexture = null), V.map.dispose()), this.type === 3) {
          if (Z.isPointLight) {
            Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          V.map = new ut(r.x, r.y, {
            format: 1030,
            type: 1016,
            minFilter: 1006,
            magFilter: 1006,
            generateMipmaps: !1
          }), V.map.texture.name = Z.name + ".shadowMap", V.map.depthTexture = new _n(r.x, r.y, 1015), V.map.depthTexture.name = Z.name + ".shadowMapDepth", V.map.depthTexture.format = 1026, V.map.depthTexture.compareFunction = null, V.map.depthTexture.minFilter = 1003, V.map.depthTexture.magFilter = 1003;
        } else
          Z.isPointLight ? (V.map = new la(r.x), V.map.depthTexture = new ul(r.x, 1014)) : (V.map = new ut(r.x, r.y), V.map.depthTexture = new _n(r.x, r.y, 1014)), V.map.depthTexture.name = Z.name + ".shadowMap", V.map.depthTexture.format = 1026, this.type === 1 ? (V.map.depthTexture.compareFunction = q ? 518 : 515, V.map.depthTexture.minFilter = 1006, V.map.depthTexture.magFilter = 1006) : (V.map.depthTexture.compareFunction = null, V.map.depthTexture.minFilter = 1003, V.map.depthTexture.magFilter = 1003);
        V.camera.updateProjectionMatrix();
      }
      V.map.isWebGLCubeRenderTarget !== !0 && (V.map.width !== r.x || V.map.height !== r.y) && V.map.setSize(r.x, r.y);
      const J = V.map.isWebGLCubeRenderTarget ? 6 : V.getViewportCount();
      Z.isPointLight !== !0 && V.updateMatrices(Z, _);
      for (let ee = 0; ee < J; ee++) {
        const be = V.getCamera(ee);
        if (Z.isPointLight) {
          const Me = V.camera, Ke = V.matrix, Oe = Z.distance || Me.far;
          Oe !== Me.far && (Me.far = Oe, Me.updateProjectionMatrix()), pi.setFromMatrixPosition(Z.matrixWorld), Me.position.copy(pi), Hr.copy(Me.position), Hr.add(sd[ee]), Me.up.copy(od[ee]), Me.lookAt(Hr), Me.updateMatrixWorld(), Ke.makeTranslation(-pi.x, -pi.y, -pi.z), ys.multiplyMatrices(Me.projectionMatrix, Me.matrixWorldInverse), V._frustum.setFromProjectionMatrix(ys, Me.coordinateSystem, Me.reversedDepth);
        }
        if (V.map.isWebGLCubeRenderTarget)
          i.setRenderTarget(V.map, ee), i.clear();
        else {
          ee === 0 && (i.setRenderTarget(V.map), i.clear());
          const Me = V.getViewport(ee);
          s.set(
            a.x * Me.x,
            a.y * Me.y,
            a.x * Me.z,
            a.y * Me.w
          ), B.viewport(s);
        }
        n = V.getFrustum(ee), S(A, _, be, Z, this.type);
      }
      V.isPointLightShadow !== !0 && this.type === 3 && M(V, _), V.needsUpdate = !1;
    }
    d = this.type, g.needsUpdate = !1, i.setRenderTarget(w, C, F);
  };
  function M(b, A) {
    const _ = e.update(T);
    u.defines.VSM_SAMPLES !== b.blurSamples && (u.defines.VSM_SAMPLES = b.blurSamples, p.defines.VSM_SAMPLES = b.blurSamples, u.needsUpdate = !0, p.needsUpdate = !0), b.mapPass === null ? b.mapPass = new ut(r.x, r.y, {
      format: 1030,
      type: 1016
    }) : (b.mapPass.width !== b.map.width || b.mapPass.height !== b.map.height) && b.mapPass.setSize(b.map.width, b.map.height), u.uniforms.shadow_pass.value = b.map.depthTexture, u.uniforms.resolution.value.set(b.map.width, b.map.height), u.uniforms.radius.value = b.radius, i.setRenderTarget(b.mapPass), i.clear(), i.renderBufferDirect(A, null, _, u, T, null), p.uniforms.shadow_pass.value = b.mapPass.texture, p.uniforms.resolution.value.set(b.map.width, b.map.height), p.uniforms.radius.value = b.radius, i.setRenderTarget(b.map), i.clear(), i.renderBufferDirect(A, null, _, p, T, null);
  }
  function R(b, A, _, w) {
    let C = null;
    const F = _.isPointLight === !0 ? b.customDistanceMaterial : b.customDepthMaterial;
    if (F !== void 0)
      C = F;
    else if (C = _.isPointLight === !0 ? l : o, i.localClippingEnabled && A.clipShadows === !0 && Array.isArray(A.clippingPlanes) && A.clippingPlanes.length !== 0 || A.displacementMap && A.displacementScale !== 0 || A.alphaMap && A.alphaTest > 0 || A.map && A.alphaTest > 0 || A.alphaToCoverage === !0) {
      const B = C.uuid, H = A.uuid;
      let N = c[B];
      N === void 0 && (N = {}, c[B] = N);
      let G = N[H];
      G === void 0 && (G = C.clone(), N[H] = G, A.addEventListener("dispose", y)), C = G;
    }
    if (C.visible = A.visible, C.wireframe = A.wireframe, w === 3 ? C.side = A.shadowSide !== null ? A.shadowSide : A.side : C.side = A.shadowSide !== null ? A.shadowSide : f[A.side], C.alphaMap = A.alphaMap, C.alphaTest = A.alphaToCoverage === !0 ? 0.5 : A.alphaTest, C.map = A.map, C.clipShadows = A.clipShadows, C.clippingPlanes = A.clippingPlanes, C.clipIntersection = A.clipIntersection, C.displacementMap = A.displacementMap, C.displacementScale = A.displacementScale, C.displacementBias = A.displacementBias, C.wireframeLinewidth = A.wireframeLinewidth, C.linewidth = A.linewidth, _.isPointLight === !0 && C.isMeshDistanceMaterial === !0) {
      const B = i.properties.get(C);
      B.light = _;
    }
    return C;
  }
  function S(b, A, _, w, C) {
    if (b.visible === !1) return;
    if (b.layers.test(A.layers) && (b.isMesh || b.isLine || b.isPoints) && (b.castShadow || b.receiveShadow && C === 3) && (!b.frustumCulled || b.intersectsFrustum(n))) {
      b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse, b.matrixWorld);
      const H = e.update(b), N = b.material;
      if (Array.isArray(N)) {
        const G = H.groups;
        for (let Z = 0, V = G.length; Z < V; Z++) {
          const te = G[Z], q = N[te.materialIndex];
          if (q && q.visible) {
            const J = R(b, q, w, C);
            b.onBeforeShadow(i, b, A, _, H, J, te), i.renderBufferDirect(_, null, H, J, b, te), b.onAfterShadow(i, b, A, _, H, J, te);
          }
        }
      } else if (N.visible) {
        const G = R(b, N, w, C);
        b.onBeforeShadow(i, b, A, _, H, G, null), i.renderBufferDirect(_, null, H, G, b, null), b.onAfterShadow(i, b, A, _, H, G, null);
      }
    }
    const B = b.children;
    for (let H = 0, N = B.length; H < N; H++)
      S(B[H], A, _, w, C);
  }
  function y(b) {
    b.target.removeEventListener("dispose", y);
    for (const _ in c) {
      const w = c[_], C = b.target.uuid;
      C in w && (w[C].dispose(), delete w[C]);
    }
  }
}
function cd(i, e) {
  function t() {
    let L = !1;
    const le = new He();
    let $ = null;
    const ce = new He(0, 0, 0, 0);
    return {
      setMask: function(pe) {
        $ !== pe && !L && (i.colorMask(pe, pe, pe, pe), $ = pe);
      },
      setLocked: function(pe) {
        L = pe;
      },
      setClear: function(pe, ne, we, Se, st) {
        st === !0 && (pe *= Se, ne *= Se, we *= Se), le.set(pe, ne, we, Se), ce.equals(le) === !1 && (i.clearColor(pe, ne, we, Se), ce.copy(le));
      },
      reset: function() {
        L = !1, $ = null, ce.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let L = !1, le = !1, $ = null, ce = null, pe = null;
    return {
      setReversed: function(ne) {
        if (le !== ne) {
          const we = e.get("EXT_clip_control");
          ne ? we.clipControlEXT(we.LOWER_LEFT_EXT, we.ZERO_TO_ONE_EXT) : we.clipControlEXT(we.LOWER_LEFT_EXT, we.NEGATIVE_ONE_TO_ONE_EXT), le = ne;
          const Se = pe;
          pe = null, this.setClear(Se);
        }
      },
      getReversed: function() {
        return le;
      },
      setTest: function(ne) {
        ne ? j(i.DEPTH_TEST) : me(i.DEPTH_TEST);
      },
      setMask: function(ne) {
        $ !== ne && !L && (i.depthMask(ne), $ = ne);
      },
      setFunc: function(ne) {
        if (le && (ne = Eo[ne]), ce !== ne) {
          switch (ne) {
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
          ce = ne;
        }
      },
      setLocked: function(ne) {
        L = ne;
      },
      setClear: function(ne) {
        pe !== ne && (pe = ne, le && (ne = 1 - ne), i.clearDepth(ne));
      },
      reset: function() {
        L = !1, $ = null, ce = null, pe = null, le = !1;
      }
    };
  }
  function r() {
    let L = !1, le = null, $ = null, ce = null, pe = null, ne = null, we = null, Se = null, st = null;
    return {
      setTest: function($e) {
        L || ($e ? j(i.STENCIL_TEST) : me(i.STENCIL_TEST));
      },
      setMask: function($e) {
        le !== $e && !L && (i.stencilMask($e), le = $e);
      },
      setFunc: function($e, Gt, Wt) {
        ($ !== $e || ce !== Gt || pe !== Wt) && (i.stencilFunc($e, Gt, Wt), $ = $e, ce = Gt, pe = Wt);
      },
      setOp: function($e, Gt, Wt) {
        (ne !== $e || we !== Gt || Se !== Wt) && (i.stencilOp($e, Gt, Wt), ne = $e, we = Gt, Se = Wt);
      },
      setLocked: function($e) {
        L = $e;
      },
      setClear: function($e) {
        st !== $e && (i.clearStencil($e), st = $e);
      },
      reset: function() {
        L = !1, le = null, $ = null, ce = null, pe = null, ne = null, we = null, Se = null, st = null;
      }
    };
  }
  const a = new t(), s = new n(), o = new r(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let h = {}, f = {}, u = {}, p = /* @__PURE__ */ new WeakMap(), v = [], T = null, g = !1, d = null, M = null, R = null, S = null, y = null, b = null, A = null, _ = new ze(0, 0, 0), w = 0, C = !1, F = null, B = null, H = null, N = null, G = null;
  const Z = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let V = !1, te = 0;
  const q = i.getParameter(i.VERSION);
  q.indexOf("WebGL") !== -1 ? (te = parseFloat(/^WebGL (\d)/.exec(q)[1]), V = te >= 1) : q.indexOf("OpenGL ES") !== -1 && (te = parseFloat(/^OpenGL ES (\d)/.exec(q)[1]), V = te >= 2);
  let J = null, ee = {};
  const be = i.getParameter(i.SCISSOR_BOX), Me = i.getParameter(i.VIEWPORT), Ke = new He().fromArray(be), Oe = new He().fromArray(Me);
  function Xe(L, le, $, ce) {
    const pe = new Uint8Array(4), ne = i.createTexture();
    i.bindTexture(L, ne), i.texParameteri(L, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(L, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let we = 0; we < $; we++)
      L === i.TEXTURE_3D || L === i.TEXTURE_2D_ARRAY ? i.texImage3D(le, 0, i.RGBA, 1, 1, ce, 0, i.RGBA, i.UNSIGNED_BYTE, pe) : i.texImage2D(le + we, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, pe);
    return ne;
  }
  const Y = {};
  Y[i.TEXTURE_2D] = Xe(i.TEXTURE_2D, i.TEXTURE_2D, 1), Y[i.TEXTURE_CUBE_MAP] = Xe(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Y[i.TEXTURE_2D_ARRAY] = Xe(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Y[i.TEXTURE_3D] = Xe(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), a.setClear(0, 0, 0, 1), s.setClear(1), o.setClear(0), j(i.DEPTH_TEST), s.setFunc(3), Fe(!1), et(1), j(i.CULL_FACE), ke(0);
  function j(L) {
    h[L] !== !0 && (i.enable(L), h[L] = !0);
  }
  function me(L) {
    h[L] !== !1 && (i.disable(L), h[L] = !1);
  }
  function Ce(L, le) {
    return u[L] !== le ? (i.bindFramebuffer(L, le), u[L] = le, L === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = le), L === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = le), !0) : !1;
  }
  function re(L, le) {
    let $ = v, ce = !1;
    if (L) {
      $ = p.get(le), $ === void 0 && ($ = [], p.set(le, $));
      const pe = L.textures;
      if ($.length !== pe.length || $[0] !== i.COLOR_ATTACHMENT0) {
        for (let ne = 0, we = pe.length; ne < we; ne++)
          $[ne] = i.COLOR_ATTACHMENT0 + ne;
        $.length = pe.length, ce = !0;
      }
    } else
      $[0] !== i.BACK && ($[0] = i.BACK, ce = !0);
    ce && i.drawBuffers($);
  }
  function Ue(L) {
    return T !== L ? (i.useProgram(L), T = L, !0) : !1;
  }
  const ct = {
    100: i.FUNC_ADD,
    101: i.FUNC_SUBTRACT,
    102: i.FUNC_REVERSE_SUBTRACT
  };
  ct[103] = i.MIN, ct[104] = i.MAX;
  const De = {
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
  function ke(L, le, $, ce, pe, ne, we, Se, st, $e) {
    if (L === 0) {
      g === !0 && (me(i.BLEND), g = !1);
      return;
    }
    if (g === !1 && (j(i.BLEND), g = !0), L !== 5) {
      if (L !== d || $e !== C) {
        if ((M !== 100 || y !== 100) && (i.blendEquation(i.FUNC_ADD), M = 100, y = 100), $e)
          switch (L) {
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
              Ye("WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case 1:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case 3:
              Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case 4:
              Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              Ye("WebGLState: Invalid blending: ", L);
              break;
          }
        R = null, S = null, b = null, A = null, _.set(0, 0, 0), w = 0, d = L, C = $e;
      }
      return;
    }
    pe = pe || le, ne = ne || $, we = we || ce, (le !== M || pe !== y) && (i.blendEquationSeparate(ct[le], ct[pe]), M = le, y = pe), ($ !== R || ce !== S || ne !== b || we !== A) && (i.blendFuncSeparate(De[$], De[ce], De[ne], De[we]), R = $, S = ce, b = ne, A = we), (Se.equals(_) === !1 || st !== w) && (i.blendColor(Se.r, Se.g, Se.b, st), _.copy(Se), w = st), d = L, C = !1;
  }
  function nt(L, le) {
    L.side === 2 ? me(i.CULL_FACE) : j(i.CULL_FACE);
    let $ = L.side === 1;
    le && ($ = !$), Fe($), L.blending === 1 && L.transparent === !1 ? ke(0) : ke(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.blendColor, L.blendAlpha, L.premultipliedAlpha), s.setFunc(L.depthFunc), s.setTest(L.depthTest), s.setMask(L.depthWrite), a.setMask(L.colorWrite);
    const ce = L.stencilWrite;
    o.setTest(ce), ce && (o.setMask(L.stencilWriteMask), o.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), o.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), gt(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? j(i.SAMPLE_ALPHA_TO_COVERAGE) : me(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Fe(L) {
    F !== L && (L ? i.frontFace(i.CW) : i.frontFace(i.CCW), F = L);
  }
  function et(L) {
    L !== 0 ? (j(i.CULL_FACE), L !== B && (L === 1 ? i.cullFace(i.BACK) : L === 2 ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : me(i.CULL_FACE), B = L;
  }
  function ht(L) {
    L !== H && (V && i.lineWidth(L), H = L);
  }
  function gt(L, le, $) {
    L ? (j(i.POLYGON_OFFSET_FILL), (N !== le || G !== $) && (N = le, G = $, s.getReversed() && (le = -le), i.polygonOffset(le, $))) : me(i.POLYGON_OFFSET_FILL);
  }
  function it(L) {
    L ? j(i.SCISSOR_TEST) : me(i.SCISSOR_TEST);
  }
  function rt(L) {
    L === void 0 && (L = i.TEXTURE0 + Z - 1), J !== L && (i.activeTexture(L), J = L);
  }
  function D(L, le, $) {
    $ === void 0 && (J === null ? $ = i.TEXTURE0 + Z - 1 : $ = J);
    let ce = ee[$];
    ce === void 0 && (ce = { type: void 0, texture: void 0 }, ee[$] = ce), (ce.type !== L || ce.texture !== le) && (J !== $ && (i.activeTexture($), J = $), i.bindTexture(L, le || Y[L]), ce.type = L, ce.texture = le);
  }
  function ft() {
    const L = ee[J];
    L !== void 0 && L.type !== void 0 && (i.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function Ze() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (L) {
      Ye("WebGLState:", L);
    }
  }
  function E() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (L) {
      Ye("WebGLState:", L);
    }
  }
  function m() {
    try {
      i.texSubImage2D(...arguments);
    } catch (L) {
      Ye("WebGLState:", L);
    }
  }
  function I() {
    try {
      i.texSubImage3D(...arguments);
    } catch (L) {
      Ye("WebGLState:", L);
    }
  }
  function O() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (L) {
      Ye("WebGLState:", L);
    }
  }
  function X() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (L) {
      Ye("WebGLState:", L);
    }
  }
  function ie() {
    try {
      i.texStorage2D(...arguments);
    } catch (L) {
      Ye("WebGLState:", L);
    }
  }
  function ae() {
    try {
      i.texStorage3D(...arguments);
    } catch (L) {
      Ye("WebGLState:", L);
    }
  }
  function K() {
    try {
      i.texImage2D(...arguments);
    } catch (L) {
      Ye("WebGLState:", L);
    }
  }
  function Q() {
    try {
      i.texImage3D(...arguments);
    } catch (L) {
      Ye("WebGLState:", L);
    }
  }
  function se(L) {
    return f[L] !== void 0 ? f[L] : i.getParameter(L);
  }
  function Ee(L, le) {
    f[L] !== le && (i.pixelStorei(L, le), f[L] = le);
  }
  function ue(L) {
    Ke.equals(L) === !1 && (i.scissor(L.x, L.y, L.z, L.w), Ke.copy(L));
  }
  function oe(L) {
    Oe.equals(L) === !1 && (i.viewport(L.x, L.y, L.z, L.w), Oe.copy(L));
  }
  function Te(L, le) {
    let $ = c.get(le);
    $ === void 0 && ($ = /* @__PURE__ */ new WeakMap(), c.set(le, $));
    let ce = $.get(L);
    ce === void 0 && (ce = i.getUniformBlockIndex(le, L.name), $.set(L, ce));
  }
  function Ae(L, le) {
    const ce = c.get(le).get(L);
    l.get(le) !== ce && (i.uniformBlockBinding(le, ce, L.__bindingPointIndex), l.set(le, ce));
  }
  function Ie() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), s.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), i.pixelStorei(i.PACK_ALIGNMENT, 4), i.pixelStorei(i.UNPACK_ALIGNMENT, 4), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !1), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.BROWSER_DEFAULT_WEBGL), i.pixelStorei(i.PACK_ROW_LENGTH, 0), i.pixelStorei(i.PACK_SKIP_PIXELS, 0), i.pixelStorei(i.PACK_SKIP_ROWS, 0), i.pixelStorei(i.UNPACK_ROW_LENGTH, 0), i.pixelStorei(i.UNPACK_IMAGE_HEIGHT, 0), i.pixelStorei(i.UNPACK_SKIP_PIXELS, 0), i.pixelStorei(i.UNPACK_SKIP_ROWS, 0), i.pixelStorei(i.UNPACK_SKIP_IMAGES, 0), h = {}, f = {}, J = null, ee = {}, u = {}, p = /* @__PURE__ */ new WeakMap(), v = [], T = null, g = !1, d = null, M = null, R = null, S = null, y = null, b = null, A = null, _ = new ze(0, 0, 0), w = 0, C = !1, F = null, B = null, H = null, N = null, G = null, Ke.set(0, 0, i.canvas.width, i.canvas.height), Oe.set(0, 0, i.canvas.width, i.canvas.height), a.reset(), s.reset(), o.reset();
  }
  return {
    buffers: {
      color: a,
      depth: s,
      stencil: o
    },
    enable: j,
    disable: me,
    bindFramebuffer: Ce,
    drawBuffers: re,
    useProgram: Ue,
    setBlending: ke,
    setMaterial: nt,
    setFlipSided: Fe,
    setCullFace: et,
    setLineWidth: ht,
    setPolygonOffset: gt,
    setScissorTest: it,
    activeTexture: rt,
    bindTexture: D,
    unbindTexture: ft,
    compressedTexImage2D: Ze,
    compressedTexImage3D: E,
    texImage2D: K,
    texImage3D: Q,
    pixelStorei: Ee,
    getParameter: se,
    updateUBOMapping: Te,
    uniformBlockBinding: Ae,
    texStorage2D: ie,
    texStorage3D: ae,
    texSubImage2D: m,
    texSubImage3D: I,
    compressedTexSubImage2D: O,
    compressedTexSubImage3D: X,
    scissor: ue,
    viewport: oe,
    reset: Ie
  };
}
function ud(i, e, t, n, r, a, s) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new Re(), h = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new Set();
  let u;
  const p = /* @__PURE__ */ new WeakMap();
  let v = !1;
  try {
    v = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function T(E, m) {
    return v ? new OffscreenCanvas(E, m) : lr("canvas");
  }
  function g(E, m, I) {
    let O = 1;
    const X = Ze(E);
    if ((X.width > I || X.height > I) && (O = I / Math.max(X.width, X.height)), O < 1)
      if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
        const ie = Math.floor(O * X.width), ae = Math.floor(O * X.height);
        u === void 0 && (u = T(ie, ae));
        const K = m ? T(ie, ae) : u;
        return K.width = ie, K.height = ae, K.getContext("2d").drawImage(E, 0, 0, ie, ae), Pe("WebGLRenderer: Texture has been resized from (" + X.width + "x" + X.height + ") to (" + ie + "x" + ae + ")."), K;
      } else
        return "data" in E && Pe("WebGLRenderer: Image in DataTexture is too big (" + X.width + "x" + X.height + ")."), E;
    return E;
  }
  function d(E) {
    return E.generateMipmaps;
  }
  function M(E) {
    i.generateMipmap(E);
  }
  function R(E) {
    return E.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : E.isWebGL3DRenderTarget ? i.TEXTURE_3D : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function S(E, m, I, O, X, ie = !1) {
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let ae;
    O && (ae = e.get("EXT_texture_norm16"), ae || Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
    let K = m;
    if (m === i.RED && (I === i.FLOAT && (K = i.R32F), I === i.HALF_FLOAT && (K = i.R16F), I === i.UNSIGNED_BYTE && (K = i.R8), I === i.UNSIGNED_SHORT && ae && (K = ae.R16_EXT), I === i.SHORT && ae && (K = ae.R16_SNORM_EXT)), m === i.RED_INTEGER && (I === i.UNSIGNED_BYTE && (K = i.R8UI), I === i.UNSIGNED_SHORT && (K = i.R16UI), I === i.UNSIGNED_INT && (K = i.R32UI), I === i.BYTE && (K = i.R8I), I === i.SHORT && (K = i.R16I), I === i.INT && (K = i.R32I)), m === i.RG && (I === i.FLOAT && (K = i.RG32F), I === i.HALF_FLOAT && (K = i.RG16F), I === i.UNSIGNED_BYTE && (K = i.RG8), I === i.UNSIGNED_SHORT && ae && (K = ae.RG16_EXT), I === i.SHORT && ae && (K = ae.RG16_SNORM_EXT)), m === i.RG_INTEGER && (I === i.UNSIGNED_BYTE && (K = i.RG8UI), I === i.UNSIGNED_SHORT && (K = i.RG16UI), I === i.UNSIGNED_INT && (K = i.RG32UI), I === i.BYTE && (K = i.RG8I), I === i.SHORT && (K = i.RG16I), I === i.INT && (K = i.RG32I)), m === i.RGB_INTEGER && (I === i.UNSIGNED_BYTE && (K = i.RGB8UI), I === i.UNSIGNED_SHORT && (K = i.RGB16UI), I === i.UNSIGNED_INT && (K = i.RGB32UI), I === i.BYTE && (K = i.RGB8I), I === i.SHORT && (K = i.RGB16I), I === i.INT && (K = i.RGB32I)), m === i.RGBA_INTEGER && (I === i.UNSIGNED_BYTE && (K = i.RGBA8UI), I === i.UNSIGNED_SHORT && (K = i.RGBA16UI), I === i.UNSIGNED_INT && (K = i.RGBA32UI), I === i.BYTE && (K = i.RGBA8I), I === i.SHORT && (K = i.RGBA16I), I === i.INT && (K = i.RGBA32I)), m === i.RGB && (I === i.UNSIGNED_SHORT && ae && (K = ae.RGB16_EXT), I === i.SHORT && ae && (K = ae.RGB16_SNORM_EXT), I === i.UNSIGNED_INT_5_9_9_9_REV && (K = i.RGB9_E5), I === i.UNSIGNED_INT_10F_11F_11F_REV && (K = i.R11F_G11F_B10F)), m === i.RGBA) {
      const Q = ie ? or : We.getTransfer(X);
      I === i.FLOAT && (K = i.RGBA32F), I === i.HALF_FLOAT && (K = i.RGBA16F), I === i.UNSIGNED_BYTE && (K = Q === je ? i.SRGB8_ALPHA8 : i.RGBA8), I === i.UNSIGNED_SHORT && ae && (K = ae.RGBA16_EXT), I === i.SHORT && ae && (K = ae.RGBA16_SNORM_EXT), I === i.UNSIGNED_SHORT_4_4_4_4 && (K = i.RGBA4), I === i.UNSIGNED_SHORT_5_5_5_1 && (K = i.RGB5_A1);
    }
    return (K === i.R16F || K === i.R32F || K === i.RG16F || K === i.RG32F || K === i.RGBA16F || K === i.RGBA32F) && e.get("EXT_color_buffer_float"), K;
  }
  function y(E, m) {
    let I;
    return E ? m === null || m === 1014 || m === 1020 ? I = i.DEPTH24_STENCIL8 : m === 1015 ? I = i.DEPTH32F_STENCIL8 : m === 1012 && (I = i.DEPTH24_STENCIL8, Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : m === null || m === 1014 || m === 1020 ? I = i.DEPTH_COMPONENT24 : m === 1015 ? I = i.DEPTH_COMPONENT32F : m === 1012 && (I = i.DEPTH_COMPONENT16), I;
  }
  function b(E, m) {
    return d(E) === !0 || E.isFramebufferTexture && E.minFilter !== 1003 && E.minFilter !== 1006 ? Math.log2(Math.max(m.width, m.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? m.mipmaps.length : 1;
  }
  function A(E) {
    const m = E.target;
    m.removeEventListener("dispose", A), w(m), m.isVideoTexture && h.delete(m), m.isHTMLTexture && f.delete(m);
  }
  function _(E) {
    const m = E.target;
    m.removeEventListener("dispose", _), F(m);
  }
  function w(E) {
    const m = n.get(E);
    if (m.__webglInit === void 0) return;
    const I = E.source, O = p.get(I);
    if (O) {
      const X = O[m.__cacheKey];
      X.usedTimes--, X.usedTimes === 0 && C(E), Object.keys(O).length === 0 && p.delete(I);
    }
    n.remove(E);
  }
  function C(E) {
    const m = n.get(E);
    i.deleteTexture(m.__webglTexture);
    const I = E.source, O = p.get(I);
    delete O[m.__cacheKey], s.memory.textures--;
  }
  function F(E) {
    const m = n.get(E);
    if (E.depthTexture && (E.depthTexture.dispose(), n.remove(E.depthTexture)), E.isWebGLCubeRenderTarget)
      for (let O = 0; O < 6; O++) {
        if (Array.isArray(m.__webglFramebuffer[O]))
          for (let X = 0; X < m.__webglFramebuffer[O].length; X++) i.deleteFramebuffer(m.__webglFramebuffer[O][X]);
        else
          i.deleteFramebuffer(m.__webglFramebuffer[O]);
        m.__webglDepthbuffer && i.deleteRenderbuffer(m.__webglDepthbuffer[O]);
      }
    else {
      if (Array.isArray(m.__webglFramebuffer))
        for (let O = 0; O < m.__webglFramebuffer.length; O++) i.deleteFramebuffer(m.__webglFramebuffer[O]);
      else
        i.deleteFramebuffer(m.__webglFramebuffer);
      if (m.__webglDepthbuffer && i.deleteRenderbuffer(m.__webglDepthbuffer), m.__webglMultisampledFramebuffer && i.deleteFramebuffer(m.__webglMultisampledFramebuffer), m.__webglColorRenderbuffer)
        for (let O = 0; O < m.__webglColorRenderbuffer.length; O++)
          m.__webglColorRenderbuffer[O] && i.deleteRenderbuffer(m.__webglColorRenderbuffer[O]);
      m.__webglDepthRenderbuffer && i.deleteRenderbuffer(m.__webglDepthRenderbuffer);
    }
    const I = E.textures;
    for (let O = 0, X = I.length; O < X; O++) {
      const ie = n.get(I[O]);
      ie.__webglTexture && (i.deleteTexture(ie.__webglTexture), s.memory.textures--), n.remove(I[O]);
    }
    n.remove(E);
  }
  let B = 0;
  function H() {
    B = 0;
  }
  function N() {
    return B;
  }
  function G(E) {
    B = E;
  }
  function Z() {
    const E = B;
    return E >= r.maxTextures && Pe("WebGLTextures: Trying to use " + (E + 1) + " texture units while this GPU supports only " + r.maxTextures), B += 1, E;
  }
  function V(E) {
    const m = [];
    return m.push(E.wrapS), m.push(E.wrapT), m.push(E.wrapR || 0), m.push(E.magFilter), m.push(E.minFilter), m.push(E.anisotropy), m.push(E.internalFormat), m.push(E.format), m.push(E.type), m.push(E.generateMipmaps), m.push(E.premultiplyAlpha), m.push(E.flipY), m.push(E.unpackAlignment), m.push(E.colorSpace), m.join();
  }
  function te(E, m) {
    const I = n.get(E);
    if (E.isVideoTexture && D(E), E.isRenderTargetTexture === !1 && E.isExternalTexture !== !0 && E.version > 0 && I.__version !== E.version) {
      const O = E.image;
      if (O === null)
        Pe("WebGLRenderer: Texture marked for update but no image data found.");
      else if (O.complete === !1)
        Pe("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        me(I, E, m);
        return;
      }
    } else E.isExternalTexture && (I.__webglTexture = E.sourceTexture ? E.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D, I.__webglTexture, i.TEXTURE0 + m);
  }
  function q(E, m) {
    const I = n.get(E);
    if (E.isRenderTargetTexture === !1 && E.version > 0 && I.__version !== E.version) {
      me(I, E, m);
      return;
    } else E.isExternalTexture && (I.__webglTexture = E.sourceTexture ? E.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D_ARRAY, I.__webglTexture, i.TEXTURE0 + m);
  }
  function J(E, m) {
    const I = n.get(E);
    if (E.isRenderTargetTexture === !1 && E.version > 0 && I.__version !== E.version) {
      me(I, E, m);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, I.__webglTexture, i.TEXTURE0 + m);
  }
  function ee(E, m) {
    const I = n.get(E);
    if (E.isCubeDepthTexture !== !0 && E.version > 0 && I.__version !== E.version) {
      Ce(I, E, m);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, I.__webglTexture, i.TEXTURE0 + m);
  }
  const be = {
    1e3: i.REPEAT,
    1001: i.CLAMP_TO_EDGE,
    1002: i.MIRRORED_REPEAT
  }, Me = {
    1003: i.NEAREST,
    1004: i.NEAREST_MIPMAP_NEAREST,
    1005: i.NEAREST_MIPMAP_LINEAR,
    1006: i.LINEAR,
    1007: i.LINEAR_MIPMAP_NEAREST,
    1008: i.LINEAR_MIPMAP_LINEAR
  }, Ke = {
    512: i.NEVER,
    519: i.ALWAYS,
    513: i.LESS,
    515: i.LEQUAL,
    514: i.EQUAL,
    518: i.GEQUAL,
    516: i.GREATER,
    517: i.NOTEQUAL
  };
  function Oe(E, m) {
    if (m.type === 1015 && e.has("OES_texture_float_linear") === !1 && (m.magFilter === 1006 || m.magFilter === 1007 || m.magFilter === 1005 || m.magFilter === 1008 || m.minFilter === 1006 || m.minFilter === 1007 || m.minFilter === 1005 || m.minFilter === 1008) && Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(E, i.TEXTURE_WRAP_S, be[m.wrapS]), i.texParameteri(E, i.TEXTURE_WRAP_T, be[m.wrapT]), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, be[m.wrapR]), i.texParameteri(E, i.TEXTURE_MAG_FILTER, Me[m.magFilter]), i.texParameteri(E, i.TEXTURE_MIN_FILTER, Me[m.minFilter]), m.compareFunction && (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, Ke[m.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (m.magFilter === 1003 || m.minFilter !== 1005 && m.minFilter !== 1008 || m.type === 1015 && e.has("OES_texture_float_linear") === !1) return;
      if (m.anisotropy > 1 || n.get(m).__currentAnisotropy) {
        const I = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(E, I.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(m.anisotropy, r.getMaxAnisotropy())), n.get(m).__currentAnisotropy = m.anisotropy;
      }
    }
  }
  function Xe(E, m) {
    let I = !1;
    E.__webglInit === void 0 && (E.__webglInit = !0, m.addEventListener("dispose", A));
    const O = m.source;
    let X = p.get(O);
    X === void 0 && (X = {}, p.set(O, X));
    const ie = V(m);
    if (ie !== E.__cacheKey) {
      X[ie] === void 0 && (X[ie] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, s.memory.textures++, I = !0), X[ie].usedTimes++;
      const ae = X[E.__cacheKey];
      ae !== void 0 && (X[E.__cacheKey].usedTimes--, ae.usedTimes === 0 && C(m)), E.__cacheKey = ie, E.__webglTexture = X[ie].texture;
    }
    return I;
  }
  function Y(E, m, I) {
    return Math.floor(Math.floor(E / I) / m);
  }
  function j(E, m, I, O) {
    const ie = E.updateRanges;
    if (ie.length === 0)
      t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, m.width, m.height, I, O, m.data);
    else {
      ie.sort((Ee, ue) => Ee.start - ue.start);
      let ae = 0;
      for (let Ee = 1; Ee < ie.length; Ee++) {
        const ue = ie[ae], oe = ie[Ee], Te = ue.start + ue.count, Ae = Y(oe.start, m.width, 4), Ie = Y(ue.start, m.width, 4);
        oe.start <= Te + 1 && Ae === Ie && Y(oe.start + oe.count - 1, m.width, 4) === Ae ? ue.count = Math.max(
          ue.count,
          oe.start + oe.count - ue.start
        ) : (++ae, ie[ae] = oe);
      }
      ie.length = ae + 1;
      const K = t.getParameter(i.UNPACK_ROW_LENGTH), Q = t.getParameter(i.UNPACK_SKIP_PIXELS), se = t.getParameter(i.UNPACK_SKIP_ROWS);
      t.pixelStorei(i.UNPACK_ROW_LENGTH, m.width);
      for (let Ee = 0, ue = ie.length; Ee < ue; Ee++) {
        const oe = ie[Ee], Te = Math.floor(oe.start / 4), Ae = Math.ceil(oe.count / 4), Ie = Te % m.width, L = Math.floor(Te / m.width), le = Ae, $ = 1;
        t.pixelStorei(i.UNPACK_SKIP_PIXELS, Ie), t.pixelStorei(i.UNPACK_SKIP_ROWS, L), t.texSubImage2D(i.TEXTURE_2D, 0, Ie, L, le, $, I, O, m.data);
      }
      E.clearUpdateRanges(), t.pixelStorei(i.UNPACK_ROW_LENGTH, K), t.pixelStorei(i.UNPACK_SKIP_PIXELS, Q), t.pixelStorei(i.UNPACK_SKIP_ROWS, se);
    }
  }
  function me(E, m, I) {
    let O = i.TEXTURE_2D;
    (m.isDataArrayTexture || m.isCompressedArrayTexture) && (O = i.TEXTURE_2D_ARRAY), m.isData3DTexture && (O = i.TEXTURE_3D);
    const X = Xe(E, m), ie = m.source;
    t.bindTexture(O, E.__webglTexture, i.TEXTURE0 + I);
    const ae = n.get(ie);
    if (ie.version !== ae.__version || X === !0) {
      if (t.activeTexture(i.TEXTURE0 + I), (typeof ImageBitmap < "u" && m.image instanceof ImageBitmap) === !1) {
        const $ = We.getPrimaries(We.workingColorSpace), ce = m.colorSpace === "" ? null : We.getPrimaries(m.colorSpace), pe = m.colorSpace === "" || $ === ce ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
        t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, m.flipY), t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, m.premultiplyAlpha), t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, pe);
      }
      t.pixelStorei(i.UNPACK_ALIGNMENT, m.unpackAlignment);
      let Q = g(m.image, !1, r.maxTextureSize);
      Q = ft(m, Q);
      const se = a.convert(m.format, m.colorSpace), Ee = a.convert(m.type);
      let ue = S(m.internalFormat, se, Ee, m.normalized, m.colorSpace, m.isVideoTexture);
      Oe(O, m);
      let oe;
      const Te = m.mipmaps, Ae = m.isVideoTexture !== !0, Ie = ae.__version === void 0 || X === !0, L = ie.dataReady, le = b(m, Q);
      if (m.isDepthTexture)
        ue = y(m.format === 1027, m.type), Ie && (Ae ? t.texStorage2D(i.TEXTURE_2D, 1, ue, Q.width, Q.height) : t.texImage2D(i.TEXTURE_2D, 0, ue, Q.width, Q.height, 0, se, Ee, null));
      else if (m.isDataTexture)
        if (Te.length > 0) {
          Ae && Ie && t.texStorage2D(i.TEXTURE_2D, le, ue, Te[0].width, Te[0].height);
          for (let $ = 0, ce = Te.length; $ < ce; $++)
            oe = Te[$], Ae ? L && t.texSubImage2D(i.TEXTURE_2D, $, 0, 0, oe.width, oe.height, se, Ee, oe.data) : t.texImage2D(i.TEXTURE_2D, $, ue, oe.width, oe.height, 0, se, Ee, oe.data);
          m.generateMipmaps = !1;
        } else
          Ae ? (Ie && t.texStorage2D(i.TEXTURE_2D, le, ue, Q.width, Q.height), L && j(m, Q, se, Ee)) : t.texImage2D(i.TEXTURE_2D, 0, ue, Q.width, Q.height, 0, se, Ee, Q.data);
      else if (m.isCompressedTexture)
        if (m.isCompressedArrayTexture) {
          Ae && Ie && t.texStorage3D(i.TEXTURE_2D_ARRAY, le, ue, Te[0].width, Te[0].height, Q.depth);
          for (let $ = 0, ce = Te.length; $ < ce; $++)
            if (oe = Te[$], m.format !== 1023)
              if (se !== null)
                if (Ae) {
                  if (L)
                    if (m.layerUpdates.size > 0) {
                      const pe = es(oe.width, oe.height, m.format, m.type);
                      for (const ne of m.layerUpdates) {
                        const we = oe.data.subarray(
                          ne * pe / oe.data.BYTES_PER_ELEMENT,
                          (ne + 1) * pe / oe.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, $, 0, 0, ne, oe.width, oe.height, 1, se, we);
                      }
                    } else
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, $, 0, 0, 0, oe.width, oe.height, Q.depth, se, oe.data);
                } else
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, $, ue, oe.width, oe.height, Q.depth, 0, oe.data, 0, 0);
              else
                Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Ae ? L && t.texSubImage3D(i.TEXTURE_2D_ARRAY, $, 0, 0, 0, oe.width, oe.height, Q.depth, se, Ee, oe.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, $, ue, oe.width, oe.height, Q.depth, 0, se, Ee, oe.data);
          m.layerUpdates.size > 0 && m.clearLayerUpdates();
        } else {
          Ae && Ie && t.texStorage2D(i.TEXTURE_2D, le, ue, Te[0].width, Te[0].height);
          for (let $ = 0, ce = Te.length; $ < ce; $++)
            oe = Te[$], m.format !== 1023 ? se !== null ? Ae ? L && t.compressedTexSubImage2D(i.TEXTURE_2D, $, 0, 0, oe.width, oe.height, se, oe.data) : t.compressedTexImage2D(i.TEXTURE_2D, $, ue, oe.width, oe.height, 0, oe.data) : Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ae ? L && t.texSubImage2D(i.TEXTURE_2D, $, 0, 0, oe.width, oe.height, se, Ee, oe.data) : t.texImage2D(i.TEXTURE_2D, $, ue, oe.width, oe.height, 0, se, Ee, oe.data);
        }
      else if (m.isDataArrayTexture)
        if (Ae) {
          if (Ie && t.texStorage3D(i.TEXTURE_2D_ARRAY, le, ue, Q.width, Q.height, Q.depth), L)
            if (m.layerUpdates.size > 0) {
              const $ = es(Q.width, Q.height, m.format, m.type);
              for (const ce of m.layerUpdates) {
                const pe = Q.data.subarray(
                  ce * $ / Q.data.BYTES_PER_ELEMENT,
                  (ce + 1) * $ / Q.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, ce, Q.width, Q.height, 1, se, Ee, pe);
              }
              m.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Q.width, Q.height, Q.depth, se, Ee, Q.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, ue, Q.width, Q.height, Q.depth, 0, se, Ee, Q.data);
      else if (m.isData3DTexture)
        Ae ? (Ie && t.texStorage3D(i.TEXTURE_3D, le, ue, Q.width, Q.height, Q.depth), L && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Q.width, Q.height, Q.depth, se, Ee, Q.data)) : t.texImage3D(i.TEXTURE_3D, 0, ue, Q.width, Q.height, Q.depth, 0, se, Ee, Q.data);
      else if (m.isFramebufferTexture) {
        if (Ie)
          if (Ae)
            t.texStorage2D(i.TEXTURE_2D, le, ue, Q.width, Q.height);
          else {
            let $ = Q.width, ce = Q.height;
            for (let pe = 0; pe < le; pe++)
              t.texImage2D(i.TEXTURE_2D, pe, ue, $, ce, 0, se, Ee, null), $ >>= 1, ce >>= 1;
          }
      } else if (m.isHTMLTexture) {
        if ("texElementImage2D" in i) {
          const $ = i.canvas;
          if ($.hasAttribute("layoutsubtree") || $.setAttribute("layoutsubtree", "true"), Q.parentNode !== $) {
            $.appendChild(Q), f.add(m), $.onpaint = (ce) => {
              const pe = ce.changedElements;
              for (const ne of f)
                pe.includes(ne.image) && (ne.needsUpdate = !0);
            }, $.requestPaint();
            return;
          }
          if (i.texElementImage2D.length === 3)
            i.texElementImage2D(i.TEXTURE_2D, i.RGBA8, Q);
          else {
            const pe = i.RGBA, ne = i.RGBA, we = i.UNSIGNED_BYTE;
            i.texElementImage2D(i.TEXTURE_2D, 0, pe, ne, we, Q);
          }
          i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE);
        }
      } else if (Te.length > 0) {
        if (Ae && Ie) {
          const $ = Ze(Te[0]);
          t.texStorage2D(i.TEXTURE_2D, le, ue, $.width, $.height);
        }
        for (let $ = 0, ce = Te.length; $ < ce; $++)
          oe = Te[$], Ae ? L && t.texSubImage2D(i.TEXTURE_2D, $, 0, 0, se, Ee, oe) : t.texImage2D(i.TEXTURE_2D, $, ue, se, Ee, oe);
        m.generateMipmaps = !1;
      } else if (Ae) {
        if (Ie) {
          const $ = Ze(Q);
          t.texStorage2D(i.TEXTURE_2D, le, ue, $.width, $.height);
        }
        L && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, se, Ee, Q);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, ue, se, Ee, Q);
      d(m) && M(O), ae.__version = ie.version, m.onUpdate && m.onUpdate(m);
    }
    E.__version = m.version;
  }
  function Ce(E, m, I) {
    if (m.image.length !== 6) return;
    const O = Xe(E, m), X = m.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + I);
    const ie = n.get(X);
    if (X.version !== ie.__version || O === !0) {
      t.activeTexture(i.TEXTURE0 + I);
      const ae = We.getPrimaries(We.workingColorSpace), K = m.colorSpace === "" ? null : We.getPrimaries(m.colorSpace), Q = m.colorSpace === "" || ae === K ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, m.flipY), t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, m.premultiplyAlpha), t.pixelStorei(i.UNPACK_ALIGNMENT, m.unpackAlignment), t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Q);
      const se = m.isCompressedTexture || m.image[0].isCompressedTexture, Ee = m.image[0] && m.image[0].isDataTexture, ue = [];
      for (let ne = 0; ne < 6; ne++)
        !se && !Ee ? ue[ne] = g(m.image[ne], !0, r.maxCubemapSize) : ue[ne] = Ee ? m.image[ne].image : m.image[ne], ue[ne] = ft(m, ue[ne]);
      const oe = ue[0], Te = a.convert(m.format, m.colorSpace), Ae = a.convert(m.type), Ie = S(m.internalFormat, Te, Ae, m.normalized, m.colorSpace), L = m.isVideoTexture !== !0, le = ie.__version === void 0 || O === !0, $ = X.dataReady;
      let ce = b(m, oe);
      Oe(i.TEXTURE_CUBE_MAP, m);
      let pe;
      if (se) {
        L && le && t.texStorage2D(i.TEXTURE_CUBE_MAP, ce, Ie, oe.width, oe.height);
        for (let ne = 0; ne < 6; ne++) {
          pe = ue[ne].mipmaps;
          for (let we = 0; we < pe.length; we++) {
            const Se = pe[we];
            m.format !== 1023 ? Te !== null ? L ? $ && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ne, we, 0, 0, Se.width, Se.height, Te, Se.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ne, we, Ie, Se.width, Se.height, 0, Se.data) : Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : L ? $ && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ne, we, 0, 0, Se.width, Se.height, Te, Ae, Se.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ne, we, Ie, Se.width, Se.height, 0, Te, Ae, Se.data);
          }
        }
      } else {
        if (pe = m.mipmaps, L && le) {
          pe.length > 0 && ce++;
          const ne = Ze(ue[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, ce, Ie, ne.width, ne.height);
        }
        for (let ne = 0; ne < 6; ne++)
          if (Ee) {
            L ? $ && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ne, 0, 0, 0, ue[ne].width, ue[ne].height, Te, Ae, ue[ne].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ne, 0, Ie, ue[ne].width, ue[ne].height, 0, Te, Ae, ue[ne].data);
            for (let we = 0; we < pe.length; we++) {
              const st = pe[we].image[ne].image;
              L ? $ && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ne, we + 1, 0, 0, st.width, st.height, Te, Ae, st.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ne, we + 1, Ie, st.width, st.height, 0, Te, Ae, st.data);
            }
          } else {
            L ? $ && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ne, 0, 0, 0, Te, Ae, ue[ne]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ne, 0, Ie, Te, Ae, ue[ne]);
            for (let we = 0; we < pe.length; we++) {
              const Se = pe[we];
              L ? $ && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ne, we + 1, 0, 0, Te, Ae, Se.image[ne]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ne, we + 1, Ie, Te, Ae, Se.image[ne]);
            }
          }
      }
      d(m) && M(i.TEXTURE_CUBE_MAP), ie.__version = X.version, m.onUpdate && m.onUpdate(m);
    }
    E.__version = m.version;
  }
  function re(E, m, I, O, X, ie) {
    const ae = a.convert(I.format, I.colorSpace), K = a.convert(I.type), Q = S(I.internalFormat, ae, K, I.normalized, I.colorSpace), se = n.get(m), Ee = n.get(I);
    if (Ee.__renderTarget = m, !se.__hasExternalTextures) {
      const ue = Math.max(1, m.width >> ie), oe = Math.max(1, m.height >> ie);
      X === i.TEXTURE_3D || X === i.TEXTURE_2D_ARRAY ? t.texImage3D(X, ie, Q, ue, oe, m.depth, 0, ae, K, null) : t.texImage2D(X, ie, Q, ue, oe, 0, ae, K, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, E), rt(m) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, O, X, Ee.__webglTexture, 0, it(m)) : (X === i.TEXTURE_2D || X >= i.TEXTURE_CUBE_MAP_POSITIVE_X && X <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, O, X, Ee.__webglTexture, ie), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Ue(E, m, I) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, E), m.depthBuffer) {
      const O = m.depthTexture, X = O && O.isDepthTexture ? O.type : null, ie = y(m.stencilBuffer, X), ae = m.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
      rt(m) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, it(m), ie, m.width, m.height) : I ? i.renderbufferStorageMultisample(i.RENDERBUFFER, it(m), ie, m.width, m.height) : i.renderbufferStorage(i.RENDERBUFFER, ie, m.width, m.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, ae, i.RENDERBUFFER, E);
    } else {
      const O = m.textures;
      for (let X = 0; X < O.length; X++) {
        const ie = O[X], ae = a.convert(ie.format, ie.colorSpace), K = a.convert(ie.type), Q = S(ie.internalFormat, ae, K, ie.normalized, ie.colorSpace);
        rt(m) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, it(m), Q, m.width, m.height) : I ? i.renderbufferStorageMultisample(i.RENDERBUFFER, it(m), Q, m.width, m.height) : i.renderbufferStorage(i.RENDERBUFFER, Q, m.width, m.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function ct(E, m, I) {
    const O = m.isWebGLCubeRenderTarget === !0;
    if (t.bindFramebuffer(i.FRAMEBUFFER, E), !(m.depthTexture && m.depthTexture.isDepthTexture))
      throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
    const X = n.get(m.depthTexture);
    if (X.__renderTarget = m, (!X.__webglTexture || m.depthTexture.image.width !== m.width || m.depthTexture.image.height !== m.height) && (m.depthTexture.image.width = m.width, m.depthTexture.image.height = m.height, m.depthTexture.needsUpdate = !0), O) {
      if (X.__webglInit === void 0 && (X.__webglInit = !0, m.depthTexture.addEventListener("dispose", A)), X.__webglTexture === void 0) {
        X.__webglTexture = i.createTexture(), t.bindTexture(i.TEXTURE_CUBE_MAP, X.__webglTexture), Oe(i.TEXTURE_CUBE_MAP, m.depthTexture);
        const se = a.convert(m.depthTexture.format), Ee = a.convert(m.depthTexture.type);
        let ue;
        m.depthTexture.format === 1026 ? ue = i.DEPTH_COMPONENT24 : m.depthTexture.format === 1027 && (ue = i.DEPTH24_STENCIL8);
        for (let oe = 0; oe < 6; oe++)
          i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + oe, 0, ue, m.width, m.height, 0, se, Ee, null);
      }
    } else
      te(m.depthTexture, 0);
    const ie = X.__webglTexture, ae = it(m), K = O ? i.TEXTURE_CUBE_MAP_POSITIVE_X + I : i.TEXTURE_2D, Q = m.depthTexture.format === 1027 ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
    if (m.depthTexture.format === 1026)
      rt(m) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Q, K, ie, 0, ae) : i.framebufferTexture2D(i.FRAMEBUFFER, Q, K, ie, 0);
    else if (m.depthTexture.format === 1027)
      rt(m) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Q, K, ie, 0, ae) : i.framebufferTexture2D(i.FRAMEBUFFER, Q, K, ie, 0);
    else
      throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");
  }
  function De(E) {
    const m = n.get(E), I = E.isWebGLCubeRenderTarget === !0;
    if (m.__boundDepthTexture !== E.depthTexture) {
      const O = E.depthTexture;
      if (m.__depthDisposeCallback && m.__depthDisposeCallback(), O) {
        const X = () => {
          delete m.__boundDepthTexture, delete m.__depthDisposeCallback, O.removeEventListener("dispose", X);
        };
        O.addEventListener("dispose", X), m.__depthDisposeCallback = X;
      }
      m.__boundDepthTexture = O;
    }
    if (E.depthTexture && !m.__autoAllocateDepthBuffer)
      if (I)
        for (let O = 0; O < 6; O++)
          ct(m.__webglFramebuffer[O], E, O);
      else {
        const O = E.texture.mipmaps;
        O && O.length > 0 ? ct(m.__webglFramebuffer[0], E, 0) : ct(m.__webglFramebuffer, E, 0);
      }
    else if (I) {
      m.__webglDepthbuffer = [];
      for (let O = 0; O < 6; O++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, m.__webglFramebuffer[O]), m.__webglDepthbuffer[O] === void 0)
          m.__webglDepthbuffer[O] = i.createRenderbuffer(), Ue(m.__webglDepthbuffer[O], E, !1);
        else {
          const X = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ie = m.__webglDepthbuffer[O];
          i.bindRenderbuffer(i.RENDERBUFFER, ie), i.framebufferRenderbuffer(i.FRAMEBUFFER, X, i.RENDERBUFFER, ie);
        }
    } else {
      const O = E.texture.mipmaps;
      if (O && O.length > 0 ? t.bindFramebuffer(i.FRAMEBUFFER, m.__webglFramebuffer[0]) : t.bindFramebuffer(i.FRAMEBUFFER, m.__webglFramebuffer), m.__webglDepthbuffer === void 0)
        m.__webglDepthbuffer = i.createRenderbuffer(), Ue(m.__webglDepthbuffer, E, !1);
      else {
        const X = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ie = m.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, ie), i.framebufferRenderbuffer(i.FRAMEBUFFER, X, i.RENDERBUFFER, ie);
      }
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function ke(E, m, I) {
    const O = n.get(E);
    m !== void 0 && re(O.__webglFramebuffer, E, E.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), I !== void 0 && De(E);
  }
  function nt(E) {
    const m = E.texture, I = n.get(E), O = n.get(m);
    E.addEventListener("dispose", _);
    const X = E.textures, ie = E.isWebGLCubeRenderTarget === !0, ae = X.length > 1;
    if (ae || (O.__webglTexture === void 0 && (O.__webglTexture = i.createTexture()), O.__version = m.version, s.memory.textures++), ie) {
      I.__webglFramebuffer = [];
      for (let K = 0; K < 6; K++)
        if (m.mipmaps && m.mipmaps.length > 0) {
          I.__webglFramebuffer[K] = [];
          for (let Q = 0; Q < m.mipmaps.length; Q++)
            I.__webglFramebuffer[K][Q] = i.createFramebuffer();
        } else
          I.__webglFramebuffer[K] = i.createFramebuffer();
    } else {
      if (m.mipmaps && m.mipmaps.length > 0) {
        I.__webglFramebuffer = [];
        for (let K = 0; K < m.mipmaps.length; K++)
          I.__webglFramebuffer[K] = i.createFramebuffer();
      } else
        I.__webglFramebuffer = i.createFramebuffer();
      if (ae)
        for (let K = 0, Q = X.length; K < Q; K++) {
          const se = n.get(X[K]);
          se.__webglTexture === void 0 && (se.__webglTexture = i.createTexture(), s.memory.textures++);
        }
      if (E.samples > 0 && rt(E) === !1) {
        I.__webglMultisampledFramebuffer = i.createFramebuffer(), I.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, I.__webglMultisampledFramebuffer);
        for (let K = 0; K < X.length; K++) {
          const Q = X[K];
          I.__webglColorRenderbuffer[K] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, I.__webglColorRenderbuffer[K]);
          const se = a.convert(Q.format, Q.colorSpace), Ee = a.convert(Q.type), ue = S(Q.internalFormat, se, Ee, Q.normalized, Q.colorSpace, E.isXRRenderTarget === !0), oe = it(E);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, oe, ue, E.width, E.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + K, i.RENDERBUFFER, I.__webglColorRenderbuffer[K]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), E.depthBuffer && (I.__webglDepthRenderbuffer = i.createRenderbuffer(), Ue(I.__webglDepthRenderbuffer, E, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (ie) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, O.__webglTexture), Oe(i.TEXTURE_CUBE_MAP, m);
      for (let K = 0; K < 6; K++)
        if (m.mipmaps && m.mipmaps.length > 0)
          for (let Q = 0; Q < m.mipmaps.length; Q++)
            re(I.__webglFramebuffer[K][Q], E, m, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + K, Q);
        else
          re(I.__webglFramebuffer[K], E, m, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0);
      d(m) && M(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ae) {
      for (let K = 0, Q = X.length; K < Q; K++) {
        const se = X[K], Ee = n.get(se);
        let ue = i.TEXTURE_2D;
        (E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (ue = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(ue, Ee.__webglTexture), Oe(ue, se), re(I.__webglFramebuffer, E, se, i.COLOR_ATTACHMENT0 + K, ue, 0), d(se) && M(ue);
      }
      t.unbindTexture();
    } else {
      let K = i.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (K = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(K, O.__webglTexture), Oe(K, m), m.mipmaps && m.mipmaps.length > 0)
        for (let Q = 0; Q < m.mipmaps.length; Q++)
          re(I.__webglFramebuffer[Q], E, m, i.COLOR_ATTACHMENT0, K, Q);
      else
        re(I.__webglFramebuffer, E, m, i.COLOR_ATTACHMENT0, K, 0);
      d(m) && M(K), t.unbindTexture();
    }
    E.depthBuffer && De(E);
  }
  function Fe(E) {
    const m = E.textures;
    for (let I = 0, O = m.length; I < O; I++) {
      const X = m[I];
      if (d(X)) {
        const ie = R(E), ae = n.get(X).__webglTexture;
        t.bindTexture(ie, ae), M(ie), t.unbindTexture();
      }
    }
  }
  const et = [], ht = [];
  function gt(E) {
    if (E.samples > 0) {
      if (rt(E) === !1) {
        const m = E.textures, I = E.width, O = E.height;
        let X = i.COLOR_BUFFER_BIT;
        const ie = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ae = n.get(E), K = m.length > 1;
        if (K)
          for (let se = 0; se < m.length; se++)
            t.bindFramebuffer(i.FRAMEBUFFER, ae.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + se, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, ae.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + se, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, ae.__webglMultisampledFramebuffer);
        const Q = E.texture.mipmaps;
        Q && Q.length > 0 ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ae.__webglFramebuffer[0]) : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ae.__webglFramebuffer);
        for (let se = 0; se < m.length; se++) {
          if (E.resolveDepthBuffer && (E.depthBuffer && (X |= i.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && (X |= i.STENCIL_BUFFER_BIT)), K) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, ae.__webglColorRenderbuffer[se]);
            const Ee = n.get(m[se]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Ee, 0);
          }
          i.blitFramebuffer(0, 0, I, O, 0, 0, I, O, X, i.NEAREST), l === !0 && (et.length = 0, ht.length = 0, et.push(i.COLOR_ATTACHMENT0 + se), E.depthBuffer && E.storeMultisampledDepthBuffer === !1 && (et.push(ie), ht.push(ie), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, ht)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, et));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), K)
          for (let se = 0; se < m.length; se++) {
            t.bindFramebuffer(i.FRAMEBUFFER, ae.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + se, i.RENDERBUFFER, ae.__webglColorRenderbuffer[se]);
            const Ee = n.get(m[se]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, ae.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + se, i.TEXTURE_2D, Ee, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ae.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.storeMultisampledDepthBuffer === !1 && l) {
        const m = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [m]);
      }
    }
  }
  function it(E) {
    return Math.min(r.maxSamples, E.samples);
  }
  function rt(E) {
    const m = n.get(E);
    return E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && m.__useRenderToTexture !== !1;
  }
  function D(E) {
    const m = s.render.frame;
    h.get(E) !== m && (h.set(E, m), E.update());
  }
  function ft(E, m) {
    const I = E.colorSpace, O = E.format, X = E.type;
    return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || I !== Mi && I !== "" && (We.getTransfer(I) === je ? (O !== 1023 || X !== 1009) && Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : Ye("WebGLTextures: Unsupported texture color space:", I)), m;
  }
  function Ze(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (c.width = E.naturalWidth || E.width, c.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (c.width = E.displayWidth, c.height = E.displayHeight) : (c.width = E.width, c.height = E.height), c;
  }
  this.allocateTextureUnit = Z, this.resetTextureUnits = H, this.getTextureUnits = N, this.setTextureUnits = G, this.setTexture2D = te, this.setTexture2DArray = q, this.setTexture3D = J, this.setTextureCube = ee, this.rebindTextures = ke, this.setupRenderTarget = nt, this.updateRenderTargetMipmap = Fe, this.updateMultisampleRenderTarget = gt, this.setupDepthRenderbuffer = De, this.setupFrameBufferTexture = re, this.useMultisampledRTT = rt, this.isReversedDepthBuffer = function() {
    return t.buffers.depth.getReversed();
  };
}
function hd(i, e) {
  function t(n, r = "") {
    let a;
    const s = We.getTransfer(r);
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
      if (s === je)
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
        if (n === 36196 || n === 37492) return s === je ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (n === 37496) return s === je ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
        if (n === 37488) return a.COMPRESSED_R11_EAC;
        if (n === 37489) return a.COMPRESSED_SIGNED_R11_EAC;
        if (n === 37490) return a.COMPRESSED_RG11_EAC;
        if (n === 37491) return a.COMPRESSED_SIGNED_RG11_EAC;
      } else
        return null;
    if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (n === 37808) return s === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809) return s === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810) return s === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811) return s === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812) return s === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813) return s === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814) return s === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815) return s === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816) return s === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817) return s === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818) return s === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819) return s === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820) return s === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821) return s === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === 36492 || n === 36494 || n === 36495)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (n === 36492) return s === je ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
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
const fd = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, dd = `
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
class pd {
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
      const n = new ks(e.texture);
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
      const t = e.cameras[0].viewport, n = new Ot({
        vertexShader: fd,
        fragmentShader: dd,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new Tt(new bi(20, 20), n);
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
class md extends wn {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(e, t) {
    super();
    const n = this;
    let r = null, a = 1, s = null, o = "local-floor", l = 1, c = null, h = null, f = null, u = null, p = null, v = null;
    const T = typeof XRWebGLBinding < "u", g = new pd(), d = {}, M = t.getContextAttributes();
    let R = null, S = null;
    const y = [], b = [], A = new Re();
    let _ = null, w = null;
    const C = new Nt();
    C.viewport = new He();
    const F = new Nt();
    F.viewport = new He();
    const B = [C, F], H = new yl();
    let N = null, G = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(Y) {
      let j = y[Y];
      return j === void 0 && (j = new yr(), y[Y] = j), j.getTargetRaySpace();
    }, this.getControllerGrip = function(Y) {
      let j = y[Y];
      return j === void 0 && (j = new yr(), y[Y] = j), j.getGripSpace();
    }, this.getHand = function(Y) {
      let j = y[Y];
      return j === void 0 && (j = new yr(), y[Y] = j), j.getHandSpace();
    };
    function Z(Y) {
      const j = b.indexOf(Y.inputSource);
      if (j === -1)
        return;
      const me = y[j];
      me !== void 0 && (me.update(Y.inputSource, Y.frame, c || s), me.dispatchEvent({ type: Y.type, data: Y.inputSource }));
    }
    function V() {
      r.removeEventListener("select", Z), r.removeEventListener("selectstart", Z), r.removeEventListener("selectend", Z), r.removeEventListener("squeeze", Z), r.removeEventListener("squeezestart", Z), r.removeEventListener("squeezeend", Z), r.removeEventListener("end", V), r.removeEventListener("inputsourceschange", te);
      for (let Y = 0; Y < y.length; Y++) {
        const j = b[Y];
        j !== null && (b[Y] = null, y[Y].disconnect(j));
      }
      N = null, G = null, g.reset();
      for (const Y in d)
        delete d[Y];
      if (e.setRenderTarget(R), p = null, u = null, f = null, r = null, S = null, Xe.stop(), n.isPresenting = !1, e.setPixelRatio(_), e.setSize(A.width, A.height, !1), w !== null) {
        const Y = w.camera;
        Y.fov = w.fov, Y.zoom = w.zoom, Y.updateProjectionMatrix(), w = null;
      }
      n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Y) {
      a = Y, n.isPresenting === !0 && Pe("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Y) {
      o = Y, n.isPresenting === !0 && Pe("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || s;
    }, this.setReferenceSpace = function(Y) {
      c = Y;
    }, this.getBaseLayer = function() {
      return u !== null ? u : p;
    }, this.getBinding = function() {
      return f === null && T && (f = new XRWebGLBinding(r, t)), f;
    }, this.getFrame = function() {
      return v;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(Y) {
      if (r = Y, r !== null) {
        if (R = e.getRenderTarget(), r.addEventListener("select", Z), r.addEventListener("selectstart", Z), r.addEventListener("selectend", Z), r.addEventListener("squeeze", Z), r.addEventListener("squeezestart", Z), r.addEventListener("squeezeend", Z), r.addEventListener("end", V), r.addEventListener("inputsourceschange", te), M.xrCompatible !== !0 && await t.makeXRCompatible(), _ = e.getPixelRatio(), e.getSize(A), T && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let me = null, Ce = null, re = null;
          M.depth && (re = M.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, me = M.stencil ? 1027 : 1026, Ce = M.stencil ? 1020 : 1014);
          const Ue = {
            colorFormat: t.RGBA8,
            depthFormat: re,
            scaleFactor: a
          };
          f = this.getBinding(), u = f.createProjectionLayer(Ue), r.updateRenderState({ layers: [u] }), e.setPixelRatio(1), e.setSize(u.textureWidth, u.textureHeight, !1), S = new ut(
            u.textureWidth,
            u.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new _n(u.textureWidth, u.textureHeight, Ce, void 0, void 0, void 0, void 0, void 0, void 0, me),
              stencilBuffer: M.stencil,
              colorSpace: e.outputColorSpace,
              samples: M.antialias ? 4 : 0,
              resolveDepthBuffer: u.ignoreDepthValues === !1,
              resolveStencilBuffer: u.ignoreDepthValues === !1,
              storeMultisampledDepthBuffer: u.ignoreDepthValues === !1,
              storeMultisampledStencilBuffer: u.ignoreDepthValues === !1
            }
          );
        } else {
          const me = {
            antialias: M.antialias,
            alpha: !0,
            depth: M.depth,
            stencil: M.stencil,
            framebufferScaleFactor: a
          };
          p = new XRWebGLLayer(r, t, me), r.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), S = new ut(
            p.framebufferWidth,
            p.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              colorSpace: e.outputColorSpace,
              stencilBuffer: M.stencil,
              resolveDepthBuffer: p.ignoreDepthValues === !1,
              resolveStencilBuffer: p.ignoreDepthValues === !1,
              storeMultisampledDepthBuffer: p.ignoreDepthValues === !1,
              storeMultisampledStencilBuffer: p.ignoreDepthValues === !1
            }
          );
        }
        S.isXRRenderTarget = !0, this.setFoveation(l), c = null, s = await r.requestReferenceSpace(o), Xe.setContext(r), Xe.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return g.getDepthTexture();
    };
    function te(Y) {
      for (let j = 0; j < Y.removed.length; j++) {
        const me = Y.removed[j], Ce = b.indexOf(me);
        Ce >= 0 && (b[Ce] = null, y[Ce].disconnect(me));
      }
      for (let j = 0; j < Y.added.length; j++) {
        const me = Y.added[j];
        let Ce = b.indexOf(me);
        if (Ce === -1) {
          for (let Ue = 0; Ue < y.length; Ue++)
            if (Ue >= b.length) {
              b.push(me), Ce = Ue;
              break;
            } else if (b[Ue] === null) {
              b[Ue] = me, Ce = Ue;
              break;
            }
          if (Ce === -1) break;
        }
        const re = y[Ce];
        re && re.connect(me);
      }
    }
    const q = new U(), J = new U();
    function ee(Y, j, me) {
      q.setFromMatrixPosition(j.matrixWorld), J.setFromMatrixPosition(me.matrixWorld);
      const Ce = q.distanceTo(J), re = j.projectionMatrix.elements, Ue = me.projectionMatrix.elements, ct = re[14] / (re[10] - 1), De = re[14] / (re[10] + 1), ke = (re[9] + 1) / re[5], nt = (re[9] - 1) / re[5], Fe = (re[8] - 1) / re[0], et = (Ue[8] + 1) / Ue[0], ht = ct * Fe, gt = ct * et, it = Ce / (-Fe + et), rt = it * -Fe;
      if (j.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale), Y.translateX(rt), Y.translateZ(it), Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale), Y.matrixWorldInverse.copy(Y.matrixWorld).invert(), re[10] === -1)
        Y.projectionMatrix.copy(j.projectionMatrix), Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);
      else {
        const D = ct + it, ft = De + it, Ze = ht - rt, E = gt + (Ce - rt), m = ke * De / ft * D, I = nt * De / ft * D;
        Y.projectionMatrix.makePerspective(Ze, E, m, I, D, ft), Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert();
      }
    }
    function be(Y, j) {
      j === null ? Y.matrixWorld.copy(Y.matrix) : Y.matrixWorld.multiplyMatrices(j.matrixWorld, Y.matrix), Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
    }
    this.updateCamera = function(Y) {
      if (r === null) return;
      let j = Y.near, me = Y.far;
      g.texture !== null && (g.depthNear > 0 && (j = g.depthNear), g.depthFar > 0 && (me = g.depthFar)), H.near = F.near = C.near = j, H.far = F.far = C.far = me, (N !== H.near || G !== H.far) && (r.updateRenderState({
        depthNear: H.near,
        depthFar: H.far
      }), N = H.near, G = H.far), H.layers.mask = Y.layers.mask | 6, C.layers.mask = H.layers.mask & -5, F.layers.mask = H.layers.mask & -3;
      const Ce = Y.parent, re = H.cameras;
      be(H, Ce);
      for (let Ue = 0; Ue < re.length; Ue++)
        be(re[Ue], Ce);
      re.length === 2 ? ee(H, C, F) : H.projectionMatrix.copy(C.projectionMatrix), w === null && Y.isPerspectiveCamera && (w = { camera: Y, fov: Y.fov, zoom: Y.zoom }), Me(Y, H, Ce);
    };
    function Me(Y, j, me) {
      me === null ? Y.matrix.copy(j.matrixWorld) : (Y.matrix.copy(me.matrixWorld), Y.matrix.invert(), Y.matrix.multiply(j.matrixWorld)), Y.matrix.decompose(Y.position, Y.quaternion, Y.scale), Y.updateMatrixWorld(!0), Y.projectionMatrix.copy(j.projectionMatrix), Y.projectionMatrixInverse.copy(j.projectionMatrixInverse), Y.isPerspectiveCamera && (Y.fov = yi * 2 * Math.atan(1 / Y.projectionMatrix.elements[5]), Y.zoom = 1);
    }
    this.getCamera = function() {
      return H;
    }, this.getFoveation = function() {
      if (!(u === null && p === null))
        return l;
    }, this.setFoveation = function(Y) {
      l = Y, u !== null && (u.fixedFoveation = Y), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = Y);
    }, this.hasDepthSensing = function() {
      return g.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return g.getMesh(H);
    }, this.getCameraTexture = function(Y) {
      return d[Y];
    };
    let Ke = null;
    function Oe(Y, j) {
      if (h = j.getViewerPose(c || s), v = j, h !== null) {
        const me = h.views;
        p !== null && (e.setRenderTargetFramebuffer(S, p.framebuffer), e.setRenderTarget(S));
        let Ce = !1;
        me.length !== H.cameras.length && (H.cameras.length = 0, Ce = !0);
        for (let De = 0; De < me.length; De++) {
          const ke = me[De];
          let nt = null;
          if (p !== null)
            nt = p.getViewport(ke);
          else {
            const et = f.getViewSubImage(u, ke);
            nt = et.viewport, De === 0 && (e.setRenderTargetTextures(
              S,
              et.colorTexture,
              et.depthStencilTexture
            ), e.setRenderTarget(S));
          }
          let Fe = B[De];
          Fe === void 0 && (Fe = new Nt(), Fe.layers.enable(De), Fe.viewport = new He(), B[De] = Fe), Fe.matrix.fromArray(ke.transform.matrix), Fe.matrix.decompose(Fe.position, Fe.quaternion, Fe.scale), Fe.projectionMatrix.fromArray(ke.projectionMatrix), Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(), Fe.viewport.set(nt.x, nt.y, nt.width, nt.height), De === 0 && (H.matrix.copy(Fe.matrix), H.matrix.decompose(H.position, H.quaternion, H.scale)), Ce === !0 && H.cameras.push(Fe);
        }
        const re = r.enabledFeatures;
        if (re && re.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && T) {
          f = n.getBinding();
          const De = f.getDepthInformation(me[0]);
          De && De.isValid && De.texture && g.init(De, r.renderState);
        }
        if (re && re.includes("camera-access") && T) {
          e.state.unbindTexture(), f = n.getBinding();
          for (let De = 0; De < me.length; De++) {
            const ke = me[De].camera;
            if (ke) {
              let nt = d[ke];
              nt || (nt = new ks(), d[ke] = nt);
              const Fe = f.getCameraImage(ke);
              nt.sourceTexture = Fe;
            }
          }
        }
      }
      for (let me = 0; me < y.length; me++) {
        const Ce = b[me], re = y[me];
        Ce !== null && re !== void 0 && re.update(Ce, j, c || s);
      }
      Ke && Ke(Y, j), j.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: j }), v = null;
    }
    const Xe = new Ws();
    Xe.setAnimationLoop(Oe), this.setAnimationLoop = function(Y) {
      Ke = Y;
    }, this.dispose = function() {
    };
  }
}
const gd = /* @__PURE__ */ new Qe(), $s = /* @__PURE__ */ new Le();
$s.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function _d(i, e) {
  function t(g, d) {
    g.matrixAutoUpdate === !0 && g.updateMatrix(), d.value.copy(g.matrix);
  }
  function n(g, d) {
    d.color.getRGB(g.fogColor.value, Vs(i)), d.isFog ? (g.fogNear.value = d.near, g.fogFar.value = d.far) : d.isFogExp2 && (g.fogDensity.value = d.density);
  }
  function r(g, d, M, R, S) {
    d.isNodeMaterial ? d.uniformsNeedUpdate = !1 : d.isMeshBasicMaterial ? a(g, d) : d.isMeshLambertMaterial ? (a(g, d), d.envMap && (g.envMapIntensity.value = d.envMapIntensity)) : d.isMeshToonMaterial ? (a(g, d), f(g, d)) : d.isMeshPhongMaterial ? (a(g, d), h(g, d), d.envMap && (g.envMapIntensity.value = d.envMapIntensity)) : d.isMeshStandardMaterial ? (a(g, d), u(g, d), d.isMeshPhysicalMaterial && p(g, d, S)) : d.isMeshMatcapMaterial ? (a(g, d), v(g, d)) : d.isMeshDepthMaterial ? a(g, d) : d.isMeshDistanceMaterial ? (a(g, d), T(g, d)) : d.isMeshNormalMaterial ? a(g, d) : d.isLineBasicMaterial ? (s(g, d), d.isLineDashedMaterial && o(g, d)) : d.isPointsMaterial ? l(g, d, M, R) : d.isSpriteMaterial ? c(g, d) : d.isShadowMaterial ? (g.color.value.copy(d.color), g.opacity.value = d.opacity) : d.isShaderMaterial && (d.uniformsNeedUpdate = !1);
  }
  function a(g, d) {
    g.opacity.value = d.opacity, d.color && g.diffuse.value.copy(d.color), d.emissive && g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity), d.map && (g.map.value = d.map, t(d.map, g.mapTransform)), d.alphaMap && (g.alphaMap.value = d.alphaMap, t(d.alphaMap, g.alphaMapTransform)), d.bumpMap && (g.bumpMap.value = d.bumpMap, t(d.bumpMap, g.bumpMapTransform), g.bumpScale.value = d.bumpScale, d.side === 1 && (g.bumpScale.value *= -1)), d.normalMap && (g.normalMap.value = d.normalMap, t(d.normalMap, g.normalMapTransform), g.normalScale.value.copy(d.normalScale), d.side === 1 && g.normalScale.value.negate()), d.displacementMap && (g.displacementMap.value = d.displacementMap, t(d.displacementMap, g.displacementMapTransform), g.displacementScale.value = d.displacementScale, g.displacementBias.value = d.displacementBias), d.emissiveMap && (g.emissiveMap.value = d.emissiveMap, t(d.emissiveMap, g.emissiveMapTransform)), d.specularMap && (g.specularMap.value = d.specularMap, t(d.specularMap, g.specularMapTransform)), d.alphaTest > 0 && (g.alphaTest.value = d.alphaTest);
    const M = e.get(d), R = M.envMap, S = M.envMapRotation;
    R && (g.envMap.value = R, g.envMapRotation.value.setFromMatrix4(gd.makeRotationFromEuler(S)).transpose(), R.isCubeTexture && R.isRenderTargetTexture === !1 && g.envMapRotation.value.premultiply($s), g.reflectivity.value = d.reflectivity, g.ior.value = d.ior, g.refractionRatio.value = d.refractionRatio), d.lightMap && (g.lightMap.value = d.lightMap, g.lightMapIntensity.value = d.lightMapIntensity, t(d.lightMap, g.lightMapTransform)), d.aoMap && (g.aoMap.value = d.aoMap, g.aoMapIntensity.value = d.aoMapIntensity, t(d.aoMap, g.aoMapTransform));
  }
  function s(g, d) {
    g.diffuse.value.copy(d.color), g.opacity.value = d.opacity, d.map && (g.map.value = d.map, t(d.map, g.mapTransform));
  }
  function o(g, d) {
    g.dashSize.value = d.dashSize, g.totalSize.value = d.dashSize + d.gapSize, g.scale.value = d.scale;
  }
  function l(g, d, M, R) {
    g.diffuse.value.copy(d.color), g.opacity.value = d.opacity, g.size.value = d.size * M, g.scale.value = R * 0.5, d.map && (g.map.value = d.map, t(d.map, g.uvTransform)), d.alphaMap && (g.alphaMap.value = d.alphaMap, t(d.alphaMap, g.alphaMapTransform)), d.alphaTest > 0 && (g.alphaTest.value = d.alphaTest);
  }
  function c(g, d) {
    g.diffuse.value.copy(d.color), g.opacity.value = d.opacity, g.rotation.value = d.rotation, d.map && (g.map.value = d.map, t(d.map, g.mapTransform)), d.alphaMap && (g.alphaMap.value = d.alphaMap, t(d.alphaMap, g.alphaMapTransform)), d.alphaTest > 0 && (g.alphaTest.value = d.alphaTest);
  }
  function h(g, d) {
    g.specular.value.copy(d.specular), g.shininess.value = Math.max(d.shininess, 1e-4);
  }
  function f(g, d) {
    d.gradientMap && (g.gradientMap.value = d.gradientMap);
  }
  function u(g, d) {
    g.metalness.value = d.metalness, d.metalnessMap && (g.metalnessMap.value = d.metalnessMap, t(d.metalnessMap, g.metalnessMapTransform)), g.roughness.value = d.roughness, d.roughnessMap && (g.roughnessMap.value = d.roughnessMap, t(d.roughnessMap, g.roughnessMapTransform)), d.envMap && (g.envMapIntensity.value = d.envMapIntensity);
  }
  function p(g, d, M) {
    g.ior.value = d.ior, d.sheen > 0 && (g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen), g.sheenRoughness.value = d.sheenRoughness, d.sheenColorMap && (g.sheenColorMap.value = d.sheenColorMap, t(d.sheenColorMap, g.sheenColorMapTransform)), d.sheenRoughnessMap && (g.sheenRoughnessMap.value = d.sheenRoughnessMap, t(d.sheenRoughnessMap, g.sheenRoughnessMapTransform))), d.clearcoat > 0 && (g.clearcoat.value = d.clearcoat, g.clearcoatRoughness.value = d.clearcoatRoughness, d.clearcoatMap && (g.clearcoatMap.value = d.clearcoatMap, t(d.clearcoatMap, g.clearcoatMapTransform)), d.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap, t(d.clearcoatRoughnessMap, g.clearcoatRoughnessMapTransform)), d.clearcoatNormalMap && (g.clearcoatNormalMap.value = d.clearcoatNormalMap, t(d.clearcoatNormalMap, g.clearcoatNormalMapTransform), g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale), d.side === 1 && g.clearcoatNormalScale.value.negate())), d.dispersion > 0 && (g.dispersion.value = d.dispersion), d.retroreflectivity > 0 && (g.retroreflectivity.value = d.retroreflectivity), d.iridescence > 0 && (g.iridescence.value = d.iridescence, g.iridescenceIOR.value = d.iridescenceIOR, g.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0], g.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1], d.iridescenceMap && (g.iridescenceMap.value = d.iridescenceMap, t(d.iridescenceMap, g.iridescenceMapTransform)), d.iridescenceThicknessMap && (g.iridescenceThicknessMap.value = d.iridescenceThicknessMap, t(d.iridescenceThicknessMap, g.iridescenceThicknessMapTransform))), d.transmission > 0 && (g.transmission.value = d.transmission, g.transmissionSamplerMap.value = M.texture, g.transmissionSamplerSize.value.set(M.width, M.height), d.transmissionMap && (g.transmissionMap.value = d.transmissionMap, t(d.transmissionMap, g.transmissionMapTransform)), g.thickness.value = d.thickness, d.thicknessMap && (g.thicknessMap.value = d.thicknessMap, t(d.thicknessMap, g.thicknessMapTransform)), g.attenuationDistance.value = d.attenuationDistance, g.attenuationColor.value.copy(d.attenuationColor)), d.anisotropy > 0 && (g.anisotropyVector.value.set(d.anisotropy * Math.cos(d.anisotropyRotation), d.anisotropy * Math.sin(d.anisotropyRotation)), d.anisotropyMap && (g.anisotropyMap.value = d.anisotropyMap, t(d.anisotropyMap, g.anisotropyMapTransform))), g.specularIntensity.value = d.specularIntensity, g.specularColor.value.copy(d.specularColor), d.specularColorMap && (g.specularColorMap.value = d.specularColorMap, t(d.specularColorMap, g.specularColorMapTransform)), d.specularIntensityMap && (g.specularIntensityMap.value = d.specularIntensityMap, t(d.specularIntensityMap, g.specularIntensityMapTransform));
  }
  function v(g, d) {
    d.matcap && (g.matcap.value = d.matcap);
  }
  function T(g, d) {
    const M = e.get(d).light;
    g.referencePosition.value.setFromMatrixPosition(M.matrixWorld), g.nearDistance.value = M.shadow.camera.near, g.farDistance.value = M.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function vd(i, e, t, n) {
  let r = {}, a = {}, s = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(S, y) {
    const b = y.program;
    n.uniformBlockBinding(S, b);
  }
  function c(S, y) {
    let b = r[S.id];
    b === void 0 && (g(S), b = h(S), r[S.id] = b, S.addEventListener("dispose", M));
    const A = y.program;
    n.updateUBOMapping(S, A);
    const _ = e.render.frame;
    a[S.id] !== _ && (u(S), a[S.id] = _);
  }
  function h(S) {
    const y = f();
    S.__bindingPointIndex = y;
    const b = i.createBuffer(), A = S.__size, _ = S.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, b), i.bufferData(i.UNIFORM_BUFFER, A, _), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, y, b), b;
  }
  function f() {
    for (let S = 0; S < o; S++)
      if (s.indexOf(S) === -1)
        return s.push(S), S;
    return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function u(S) {
    const y = r[S.id], b = S.uniforms, A = S.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, y);
    for (let _ = 0, w = b.length; _ < w; _++) {
      const C = b[_];
      if (Array.isArray(C))
        for (let F = 0, B = C.length; F < B; F++)
          p(C[F], _, F, A);
      else
        p(C, _, 0, A);
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function p(S, y, b, A) {
    if (T(S, y, b, A) === !0) {
      const _ = S.__offset, w = S.value;
      if (Array.isArray(w)) {
        let C = 0;
        for (let F = 0; F < w.length; F++) {
          const B = w[F], H = d(B);
          v(B, S.__data, C), typeof B != "number" && typeof B != "boolean" && !B.isMatrix3 && !ArrayBuffer.isView(B) && (C += H.storage / Float32Array.BYTES_PER_ELEMENT);
        }
      } else
        v(w, S.__data, 0);
      i.bufferSubData(i.UNIFORM_BUFFER, _, S.__data);
    }
  }
  function v(S, y, b) {
    typeof S == "number" || typeof S == "boolean" ? y[0] = S : S.isMatrix3 ? (y[0] = S.elements[0], y[1] = S.elements[1], y[2] = S.elements[2], y[3] = 0, y[4] = S.elements[3], y[5] = S.elements[4], y[6] = S.elements[5], y[7] = 0, y[8] = S.elements[6], y[9] = S.elements[7], y[10] = S.elements[8], y[11] = 0) : ArrayBuffer.isView(S) ? y.set(new S.constructor(S.buffer, S.byteOffset, y.length)) : S.toArray(y, b);
  }
  function T(S, y, b, A) {
    const _ = S.value, w = y + "_" + b;
    if (A[w] === void 0)
      return typeof _ == "number" || typeof _ == "boolean" ? A[w] = _ : ArrayBuffer.isView(_) ? A[w] = _.slice() : A[w] = _.clone(), !0;
    {
      const C = A[w];
      if (typeof _ == "number" || typeof _ == "boolean") {
        if (C !== _)
          return A[w] = _, !0;
      } else {
        if (ArrayBuffer.isView(_))
          return !0;
        if (C.equals(_) === !1)
          return C.copy(_), !0;
      }
    }
    return !1;
  }
  function g(S) {
    const y = S.uniforms;
    let b = 0;
    const A = 16;
    for (let w = 0, C = y.length; w < C; w++) {
      const F = Array.isArray(y[w]) ? y[w] : [y[w]];
      for (let B = 0, H = F.length; B < H; B++) {
        const N = F[B], G = Array.isArray(N.value) ? N.value : [N.value];
        for (let Z = 0, V = G.length; Z < V; Z++) {
          const te = G[Z], q = d(te), J = b % A, ee = J % q.boundary, be = J + ee;
          b += ee, be !== 0 && A - be < q.storage && (b += A - be), N.__data = new Float32Array(q.storage / Float32Array.BYTES_PER_ELEMENT), N.__offset = b, b += q.storage;
        }
      }
    }
    const _ = b % A;
    return _ > 0 && (b += A - _), S.__size = b, S.__cache = {}, this;
  }
  function d(S) {
    const y = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof S == "number" || typeof S == "boolean" ? (y.boundary = 4, y.storage = 4) : S.isVector2 ? (y.boundary = 8, y.storage = 8) : S.isVector3 || S.isColor ? (y.boundary = 16, y.storage = 12) : S.isVector4 ? (y.boundary = 16, y.storage = 16) : S.isMatrix3 ? (y.boundary = 48, y.storage = 48) : S.isMatrix4 ? (y.boundary = 64, y.storage = 64) : S.isTexture ? Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(S) ? (y.boundary = 16, y.storage = S.byteLength) : Pe("WebGLRenderer: Unsupported uniform value type.", S), y;
  }
  function M(S) {
    const y = S.target;
    y.removeEventListener("dispose", M);
    const b = s.indexOf(y.__bindingPointIndex);
    s.splice(b, 1), i.deleteBuffer(r[y.id]), delete r[y.id], delete a[y.id];
  }
  function R() {
    for (const S in r)
      i.deleteBuffer(r[S]);
    s = [], r = {}, a = {};
  }
  return {
    bind: l,
    update: c,
    dispose: R
  };
}
const xd = new Uint16Array([
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
function Sd() {
  return Yt === null && (Yt = new ti(xd, 16, 16, 1030, 1016), Yt.name = "DFG_LUT", Yt.minFilter = 1006, Yt.magFilter = 1006, Yt.wrapS = 1001, Yt.wrapT = 1001, Yt.generateMipmaps = !1, Yt.needsUpdate = !0), Yt;
}
class Md {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(e = {}) {
    const {
      canvas: t = Mo(),
      context: n = null,
      depth: r = !0,
      stencil: a = !1,
      alpha: s = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: f = !1,
      reversedDepthBuffer: u = !1,
      outputBufferType: p = 1009
    } = e;
    this.isWebGLRenderer = !0;
    let v;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      v = n.getContextAttributes().alpha;
    } else
      v = s;
    const T = p, g = /* @__PURE__ */ new Set([
      1033,
      1031,
      1029
    ]), d = /* @__PURE__ */ new Set([
      1009,
      1014,
      1012,
      1020,
      1017,
      1018
    ]), M = new Uint32Array(4), R = new Int32Array(4), S = new U();
    let y = null, b = null;
    const A = [], _ = [];
    let w = null;
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
    const C = this;
    let F = !1, B = null, H = null, N = null, G = null;
    this._outputColorSpace = Ut;
    let Z = 0, V = 0, te = null, q = -1, J = null;
    const ee = new He(), be = new He();
    let Me = null;
    const Ke = new ze(0);
    let Oe = 0, Xe = t.width, Y = t.height, j = 1, me = null, Ce = null;
    const re = new He(0, 0, Xe, Y), Ue = new He(0, 0, Xe, Y);
    let ct = !1;
    const De = new ia();
    let ke = !1, nt = !1;
    const Fe = new Qe(), et = new U(), ht = new He(), gt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let it = !1;
    function rt() {
      return te === null ? j : 1;
    }
    let D = n;
    function ft(x, P) {
      return t.getContext(x, P);
    }
    let Ze, E, m, I, O, X, ie, ae, K, Q, se, Ee, ue, oe, Te, Ae, Ie, L, le, $, ce, pe, ne;
    try {
      const x = {
        alpha: !0,
        depth: r,
        stencil: a,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: f
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r186"), t.addEventListener("webglcontextlost", st, !1), t.addEventListener("webglcontextrestored", $e, !1), t.addEventListener("webglcontextcreationerror", Gt, !1), D === null) {
        const P = "webgl2";
        if (D = ft(P, x), D === null)
          throw ft(P) ? new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.") : new Error("THREE.WebGLRenderer: Error creating WebGL context.");
      }
      we();
    } catch (x) {
      throw t.removeEventListener("webglcontextlost", st, !1), t.removeEventListener("webglcontextrestored", $e, !1), t.removeEventListener("webglcontextcreationerror", Gt, !1), Ye("WebGLRenderer: " + x.message), x;
    }
    function we() {
      Ze = new xh(D), Ze.init(), ce = new hd(D, Ze), E = new ch(D, Ze, e, ce), m = new cd(D, Ze), E.reversedDepthBuffer && u && m.buffers.depth.setReversed(!0), H = D.createFramebuffer(), N = D.createFramebuffer(), G = D.createFramebuffer(), I = new yh(D), O = new Zf(), X = new ud(D, Ze, m, O, E, ce, I), ie = new vh(C), ae = new Tl(D), pe = new oh(D, ae), K = new Sh(D, ae, I, pe), Q = new Th(D, K, ae, pe, I), L = new Eh(D, E, X), Te = new uh(O), se = new Kf(C, ie, Ze, E, pe, Te), Ee = new _d(C, O), ue = new Jf(), oe = new id(Ze), Ie = new sh(C, ie, m, Q, v, l), Ae = new ld(C, Q, E), ne = new vd(D, I, E, m), le = new lh(D, Ze, I), $ = new Mh(D, Ze, I), I.programs = se.programs, C.capabilities = E, C.extensions = Ze, C.properties = O, C.renderLists = ue, C.shadowMap = Ae, C.state = m, C.info = I;
    }
    T !== 1009 && (w = new wh(T, t.width, t.height, o, r, a));
    const Se = new md(C, D);
    this.xr = Se, this.getContext = function() {
      return D;
    }, this.getContextAttributes = function() {
      return D.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = Ze.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = Ze.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return j;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (j = x, this.setSize(Xe, Y, !1));
    }, this.getSize = function(x) {
      return x.set(Xe, Y);
    }, this.setSize = function(x, P, W = !0) {
      if (Se.isPresenting) {
        Pe("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      Xe = x, Y = P, t.width = Math.floor(x * j), t.height = Math.floor(P * j), W === !0 && (t.style.width = x + "px", t.style.height = P + "px"), w !== null && w.setSize(t.width, t.height), this.setViewport(0, 0, x, P);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(Xe * j, Y * j).floor();
    }, this.setDrawingBufferSize = function(x, P, W) {
      Xe = x, Y = P, j = W, t.width = Math.floor(x * W), t.height = Math.floor(P * W), this.setViewport(0, 0, x, P);
    }, this.setEffects = function(x) {
      if (T === 1009) {
        Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (x) {
        for (let P = 0; P < x.length; P++)
          if (x[P].isOutputPass === !0) {
            Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
            break;
          }
      }
      w.setEffects(x || []);
    }, this.getCurrentViewport = function(x) {
      return x.copy(ee);
    }, this.getViewport = function(x) {
      return x.copy(re);
    }, this.setViewport = function(x, P, W, z) {
      x.isVector4 ? re.set(x.x, x.y, x.z, x.w) : re.set(x, P, W, z), m.viewport(ee.copy(re).multiplyScalar(j).round());
    }, this.getScissor = function(x) {
      return x.copy(Ue);
    }, this.setScissor = function(x, P, W, z) {
      x.isVector4 ? Ue.set(x.x, x.y, x.z, x.w) : Ue.set(x, P, W, z), m.scissor(be.copy(Ue).multiplyScalar(j).round());
    }, this.getScissorTest = function() {
      return ct;
    }, this.setScissorTest = function(x) {
      m.setScissorTest(ct = x);
    }, this.setOpaqueSort = function(x) {
      me = x;
    }, this.setTransparentSort = function(x) {
      Ce = x;
    }, this.getClearColor = function(x) {
      return x.copy(Ie.getClearColor());
    }, this.setClearColor = function() {
      Ie.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return Ie.getClearAlpha();
    }, this.setClearAlpha = function() {
      Ie.setClearAlpha(...arguments);
    }, this.clear = function(x = !0, P = !0, W = !0) {
      let z = 0;
      if (x) {
        let k = !1;
        if (te !== null) {
          const de = te.texture.format;
          k = g.has(de);
        }
        if (k) {
          const de = te.texture.type, _e = d.has(de), fe = Ie.getClearColor(), ve = Ie.getClearAlpha(), ye = fe.r, Be = fe.g, Ge = fe.b;
          _e ? (M[0] = ye, M[1] = Be, M[2] = Ge, M[3] = ve, D.clearBufferuiv(D.COLOR, 0, M)) : (R[0] = ye, R[1] = Be, R[2] = Ge, R[3] = ve, D.clearBufferiv(D.COLOR, 0, R));
        } else
          z |= D.COLOR_BUFFER_BIT;
      }
      P && (z |= D.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), W && (z |= D.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), z !== 0 && D.clear(z);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.setNodesHandler = function(x) {
      x.setRenderer(this), B = x;
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", st, !1), t.removeEventListener("webglcontextrestored", $e, !1), t.removeEventListener("webglcontextcreationerror", Gt, !1), Ie.dispose(), ue.dispose(), oe.dispose(), O.dispose(), ie.dispose(), Q.dispose(), pe.dispose(), ne.dispose(), se.dispose(), Se.dispose(), Se.removeEventListener("sessionstart", ga), Se.removeEventListener("sessionend", _a), vn.stop();
    };
    function st(x) {
      x.preventDefault(), Aa("WebGLRenderer: Context Lost."), F = !0;
    }
    function $e() {
      Aa("WebGLRenderer: Context Restored."), F = !1;
      const x = I.autoReset, P = Ae.enabled, W = Ae.autoUpdate, z = Ae.needsUpdate, k = Ae.type;
      we(), I.autoReset = x, Ae.enabled = P, Ae.autoUpdate = W, Ae.needsUpdate = z, Ae.type = k;
    }
    function Gt(x) {
      Ye("WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function Wt(x) {
      const P = x.target;
      P.removeEventListener("dispose", Wt), uo(P);
    }
    function uo(x) {
      ho(x), O.remove(x);
    }
    function ho(x) {
      const P = O.get(x).programs;
      P !== void 0 && (P.forEach(function(W) {
        se.releaseProgram(W);
      }), x.isShaderMaterial && se.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, P, W, z, k, de) {
      P === null && (P = gt);
      const _e = k.isMesh && k.matrixWorld.determinantAffine() < 0, fe = mo(x, P, W, z, k);
      m.setMaterial(z, _e);
      let ve = W.index, ye = 1;
      if (z.wireframe === !0) {
        if (ve = K.getWireframeAttribute(W), ve === void 0) return;
        ye = 2;
      }
      const Be = W.drawRange, Ge = W.attributes.position;
      let xe = Be.start * ye, Je = (Be.start + Be.count) * ye;
      de !== null && (xe = Math.max(xe, de.start * ye), Je = Math.min(Je, (de.start + de.count) * ye)), ve !== null ? (xe = Math.max(xe, 0), Je = Math.min(Je, ve.count)) : Ge != null && (xe = Math.max(xe, 0), Je = Math.min(Je, Ge.count));
      const pt = Je - xe;
      if (pt < 0 || pt === 1 / 0) return;
      pe.setup(k, z, fe, W, ve);
      let lt, at = le;
      if (ve !== null && (lt = ae.get(ve), at = $, at.setIndex(lt)), k.isMesh)
        z.wireframe === !0 ? (m.setLineWidth(z.wireframeLinewidth * rt()), at.setMode(D.LINES)) : at.setMode(D.TRIANGLES);
      else if (k.isLine) {
        let St = z.linewidth;
        St === void 0 && (St = 1), m.setLineWidth(St * rt()), k.isLineSegments ? at.setMode(D.LINES) : k.isLineLoop ? at.setMode(D.LINE_LOOP) : at.setMode(D.LINE_STRIP);
      } else k.isPoints ? at.setMode(D.POINTS) : k.isSprite && at.setMode(D.TRIANGLES);
      if (k.isBatchedMesh)
        if (Ze.get("WEBGL_multi_draw"))
          at.renderMultiDraw(k._multiDrawStarts, k._multiDrawCounts, k._multiDrawCount);
        else {
          const St = k._multiDrawStarts, ge = k._multiDrawCounts, bt = k._multiDrawCount, qe = ve ? ae.get(ve).bytesPerElement : 1, Ft = O.get(z).currentProgram.getUniforms();
          for (let Xt = 0; Xt < bt; Xt++)
            Ft.setValue(D, "_gl_DrawID", Xt), at.render(St[Xt] / qe, ge[Xt]);
        }
      else if (k.isInstancedMesh)
        at.renderInstances(xe, pt, k.count);
      else if (W.isInstancedBufferGeometry) {
        const St = W._maxInstanceCount !== void 0 ? W._maxInstanceCount : 1 / 0, ge = Math.min(W.instanceCount, St);
        at.renderInstances(xe, pt, ge);
      } else
        at.render(xe, pt);
    };
    function ma(x, P, W, z) {
      B !== null && x.isNodeMaterial && B.setObject(z, x), ke === !0 && Te.setState(x, W, !1), x.transparent === !0 && x.side === 2 && x.forceSinglePass === !1 ? (x.side = 1, x.needsUpdate = !0, Ai(x, P, z), x.side = 0, x.needsUpdate = !0, Ai(x, P, z), x.side = 2) : Ai(x, P, z);
    }
    this.compile = function(x, P, W = null) {
      W === null && (W = x), B !== null && B.renderStart(x, P, W), b = oe.get(W), b.init(P), _.push(b), W.traverseVisible(function(k) {
        k.isLight && k.layers.test(P.layers) && (b.pushLight(k), k.castShadow && b.pushShadow(k));
      }), x !== W && x.traverseVisible(function(k) {
        k.isLight && k.layers.test(P.layers) && (b.pushLight(k), k.castShadow && b.pushShadow(k));
      }), b.setupLights(), B !== null && B.updateLights(b.state.lightsArray), nt = this.localClippingEnabled, ke = Te.init(this.clippingPlanes, nt), ke === !0 && Te.setGlobalState(this.clippingPlanes, P), B !== null && Ae.render(b.state.shadowsArray, W, P);
      const z = /* @__PURE__ */ new Set();
      return x.traverse(function(k) {
        if (!(k.isMesh || k.isPoints || k.isLine || k.isSprite))
          return;
        const de = k.material;
        if (de)
          if (Array.isArray(de))
            for (let _e = 0; _e < de.length; _e++) {
              const fe = de[_e];
              ma(fe, W, P, k), z.add(fe);
            }
          else
            ma(de, W, P, k), z.add(de);
      }), b = _.pop(), B !== null && B.renderEnd(), z;
    }, this.compileAsync = function(x, P, W = null) {
      const z = this.compile(x, P, W);
      return new Promise((k) => {
        function de() {
          if (z.forEach(function(_e) {
            const ve = O.get(_e).currentProgram;
            (ve === void 0 || ve.isReady()) && z.delete(_e);
          }), z.size === 0) {
            k(x);
            return;
          }
          setTimeout(de, 10);
        }
        Ze.get("KHR_parallel_shader_compile") !== null ? de() : setTimeout(de, 10);
      });
    };
    let mr = null;
    function fo(x) {
      mr && mr(x);
    }
    function ga() {
      vn.stop();
    }
    function _a() {
      vn.start();
    }
    const vn = new Ws();
    vn.setAnimationLoop(fo), typeof self < "u" && vn.setContext(self), this.setAnimationLoop = function(x) {
      mr = x, Se.setAnimationLoop(x), x === null ? vn.stop() : vn.start();
    }, Se.addEventListener("sessionstart", ga), Se.addEventListener("sessionend", _a), this.render = function(x, P) {
      if (P !== void 0 && P.isCamera !== !0) {
        Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (F === !0) return;
      B !== null && B.renderStart(x, P);
      const W = Se.enabled === !0 && Se.isPresenting === !0, z = w !== null && (te === null || W) && w.begin(C, te);
      if (x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(), P.parent === null && P.matrixWorldAutoUpdate === !0 && P.updateMatrixWorld(), Se.enabled === !0 && Se.isPresenting === !0 && (w === null || w.isCompositing() === !1) && (Se.cameraAutoUpdate === !0 && Se.updateCamera(P), P = Se.getCamera()), x.isScene === !0 && x.onBeforeRender(C, x, P, te), b = oe.get(x, _.length), b.init(P), b.state.textureUnits = X.getTextureUnits(), _.push(b), Fe.multiplyMatrices(P.projectionMatrix, P.matrixWorldInverse), De.setFromProjectionMatrix(Fe, 2e3, P.reversedDepth), nt = this.localClippingEnabled, ke = Te.init(this.clippingPlanes, nt), y = ue.get(x, A.length), y.init(), A.push(y), Se.enabled === !0 && Se.isPresenting === !0) {
        const _e = C.xr.getDepthSensingMesh();
        _e !== null && gr(_e, P, -1 / 0, C.sortObjects);
      }
      gr(x, P, 0, C.sortObjects), y.finish(), B !== null && B.updateLights(b.state.lightsArray), C.sortObjects === !0 && y.sort(me, Ce), it = Se.enabled === !1 || Se.isPresenting === !1 || Se.hasDepthSensing() === !1, it && Ie.addToRenderList(y, x), this.info.render.frame++, this.info.autoReset === !0 && this.info.reset(), ke === !0 && Te.beginShadows();
      const k = b.state.shadowsArray;
      if (Ae.render(k, x, P), ke === !0 && Te.endShadows(), (z && w.hasRenderPass()) === !1) {
        const _e = y.opaque, fe = y.transmissive;
        if (b.setupLights(), P.isArrayCamera) {
          const ve = P.cameras;
          if (fe.length > 0)
            for (let ye = 0, Be = ve.length; ye < Be; ye++) {
              const Ge = ve[ye];
              xa(_e, fe, x, Ge);
            }
          it && Ie.render(x);
          for (let ye = 0, Be = ve.length; ye < Be; ye++) {
            const Ge = ve[ye];
            va(y, x, Ge, Ge.viewport);
          }
        } else
          fe.length > 0 && xa(_e, fe, x, P), it && Ie.render(x), va(y, x, P);
      }
      te !== null && V === 0 && (X.updateMultisampleRenderTarget(te), X.updateRenderTargetMipmap(te)), z && w.end(C), x.isScene === !0 && x.onAfterRender(C, x, P), pe.resetDefaultState(), q = -1, J = null, _.pop(), _.length > 0 ? (b = _[_.length - 1], X.setTextureUnits(b.state.textureUnits), ke === !0 && Te.setGlobalState(C.clippingPlanes, b.state.camera)) : b = null, A.pop(), A.length > 0 ? y = A[A.length - 1] : y = null, B !== null && B.renderEnd();
    };
    function gr(x, P, W, z) {
      if (x.visible === !1) return;
      if (x.layers.test(P.layers)) {
        if (x.isGroup)
          W = x.renderOrder;
        else if (x.isLOD)
          x.autoUpdate === !0 && x.update(P);
        else if (x.isLightProbeGrid)
          b.pushLightProbeGrid(x);
        else if (x.isLight)
          b.pushLight(x), x.castShadow && b.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || x.intersectsFrustum(De)) {
            z && ht.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Fe);
            const _e = Q.update(x), fe = x.material;
            fe.visible && y.push(x, _e, fe, W, ht.z, null, P);
          }
        } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || x.intersectsFrustum(De))) {
          const _e = Q.update(x), fe = x.material;
          if (z && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), ht.copy(x.boundingSphere.center)) : (_e.boundingSphere === null && _e.computeBoundingSphere(), ht.copy(_e.boundingSphere.center)), ht.applyMatrix4(x.matrixWorld).applyMatrix4(Fe)), Array.isArray(fe)) {
            const ve = _e.groups;
            for (let ye = 0, Be = ve.length; ye < Be; ye++) {
              const Ge = ve[ye], xe = fe[Ge.materialIndex];
              xe && xe.visible && y.push(x, _e, xe, W, ht.z, Ge, P);
            }
          } else fe.visible && y.push(x, _e, fe, W, ht.z, null, P);
        }
      }
      const de = x.children;
      for (let _e = 0, fe = de.length; _e < fe; _e++)
        gr(de[_e], P, W, z);
    }
    function va(x, P, W, z) {
      const { opaque: k, transmissive: de, transparent: _e } = x;
      b.setupLightsView(W), ke === !0 && Te.setGlobalState(C.clippingPlanes, W), z && m.viewport(ee.copy(z)), k.length > 0 && wi(k, P, W), de.length > 0 && wi(de, P, W), _e.length > 0 && wi(_e, P, W), m.buffers.depth.setTest(!0), m.buffers.depth.setMask(!0), m.buffers.color.setMask(!0), m.setPolygonOffset(!1);
    }
    function xa(x, P, W, z) {
      if ((W.isScene === !0 ? W.overrideMaterial : null) !== null)
        return;
      if (b.state.transmissionRenderTarget[z.id] === void 0) {
        const xe = Ze.has("EXT_color_buffer_half_float") || Ze.has("EXT_color_buffer_float");
        b.state.transmissionRenderTarget[z.id] = new ut(1, 1, {
          generateMipmaps: !0,
          type: xe ? 1016 : 1009,
          minFilter: 1008,
          samples: Math.max(4, E.samples),
          // to avoid feedback loops, the transmission render target requires a resolve, see #26177
          stencilBuffer: a,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          storeMultisampledDepthBuffer: !1,
          storeMultisampledStencilBuffer: !1,
          colorSpace: We.workingColorSpace
        });
      }
      const de = b.state.transmissionRenderTarget[z.id], _e = z.viewport || ee;
      de.setSize(_e.z * C.transmissionResolutionScale, _e.w * C.transmissionResolutionScale);
      const fe = C.getRenderTarget(), ve = C.getActiveCubeFace(), ye = C.getActiveMipmapLevel();
      C.setRenderTarget(de), C.getClearColor(Ke), Oe = C.getClearAlpha(), Oe < 1 && C.setClearColor(16777215, 0.5), C.clear(), it && Ie.render(W);
      const Be = C.toneMapping;
      C.toneMapping = 0;
      const Ge = z.viewport;
      if (z.viewport !== void 0 && (z.viewport = void 0), b.setupLightsView(z), ke === !0 && Te.setGlobalState(C.clippingPlanes, z), wi(x, W, z), X.updateMultisampleRenderTarget(de), X.updateRenderTargetMipmap(de), Ze.has("WEBGL_multisampled_render_to_texture") === !1) {
        let xe = !1;
        for (let Je = 0, pt = P.length; Je < pt; Je++) {
          const lt = P[Je], { object: at, geometry: St, material: ge, group: bt } = lt;
          if (ge.side === 2 && at.layers.test(z.layers)) {
            const qe = ge.side;
            ge.side = 1, ge.needsUpdate = !0, Sa(at, W, z, St, ge, bt), ge.side = qe, ge.needsUpdate = !0, xe = !0;
          }
        }
        xe === !0 && (X.updateMultisampleRenderTarget(de), X.updateRenderTargetMipmap(de));
      }
      C.setRenderTarget(fe, ve, ye), C.setClearColor(Ke, Oe), Ge !== void 0 && (z.viewport = Ge), C.toneMapping = Be;
    }
    function wi(x, P, W) {
      const z = P.isScene === !0 ? P.overrideMaterial : null;
      for (let k = 0, de = x.length; k < de; k++) {
        const _e = x[k], { object: fe, geometry: ve, group: ye } = _e;
        let Be = _e.material;
        Be.allowOverride === !0 && z !== null && (Be = z), fe.layers.test(W.layers) && Sa(fe, P, W, ve, Be, ye);
      }
    }
    function Sa(x, P, W, z, k, de) {
      B !== null && k.isNodeMaterial && B.setObject(x, k), x.onBeforeRender(C, P, W, z, k, de), x.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), k.onBeforeRender(C, P, W, z, x, de), k.transparent === !0 && k.side === 2 && k.forceSinglePass === !1 ? (k.side = 1, k.needsUpdate = !0, C.renderBufferDirect(W, P, z, k, x, de), k.side = 0, k.needsUpdate = !0, C.renderBufferDirect(W, P, z, k, x, de), k.side = 2) : C.renderBufferDirect(W, P, z, k, x, de), x.onAfterRender(C, P, W, z, k, de);
    }
    function Ai(x, P, W) {
      P.isScene !== !0 && (P = gt);
      const z = O.get(x), k = b.state.lights, de = b.state.shadowsArray, _e = k.state.version, fe = se.getParameters(x, k.state, de, P, W, b.state.lightProbeGridArray), ve = se.getProgramCacheKey(fe);
      let ye = z.programs;
      z.environment = x.isMeshStandardMaterial || x.isMeshLambertMaterial || x.isMeshPhongMaterial ? P.environment : null, z.fog = P.fog;
      const Be = x.isMeshStandardMaterial || x.isMeshLambertMaterial && !x.envMap || x.isMeshPhongMaterial && !x.envMap;
      z.envMap = ie.get(x.envMap || z.environment, Be), z.envMapRotation = z.environment !== null && x.envMap === null ? P.environmentRotation : x.envMapRotation, ye === void 0 && (x.addEventListener("dispose", Wt), ye = /* @__PURE__ */ new Map(), z.programs = ye);
      let Ge = ye.get(ve);
      if (Ge !== void 0) {
        if (z.currentProgram === Ge && z.lightsStateVersion === _e)
          return ya(x, fe), Ge;
      } else
        fe.uniforms = se.getUniforms(x), B !== null && x.isNodeMaterial && B.build(x, W, fe), x.onBeforeCompile(fe, C), Ge = se.acquireProgram(fe, ve), ye.set(ve, Ge), z.uniforms = fe.uniforms;
      const xe = z.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === !0) && (xe.clippingPlanes = Te.uniform), ya(x, fe), z.needsLights = _o(x), z.lightsStateVersion = _e, z.needsLights && (xe.ambientLightColor.value = k.state.ambient, xe.lightProbe.value = k.state.probe, xe.sunLights.value = k.state.sun, xe.sunLightShadows.value = k.state.sunShadow, xe.directionalLights.value = k.state.directional, xe.directionalLightShadows.value = k.state.directionalShadow, xe.spotLights.value = k.state.spot, xe.spotLightShadows.value = k.state.spotShadow, xe.rectAreaLights.value = k.state.rectArea, xe.ltc_1.value = k.state.rectAreaLTC1, xe.ltc_2.value = k.state.rectAreaLTC2, xe.pointLights.value = k.state.point, xe.pointLightShadows.value = k.state.pointShadow, xe.hemisphereLights.value = k.state.hemi, xe.sunShadowMatrix.value = k.state.sunShadowMatrix, xe.sunShadowCascade.value = k.state.sunShadowCascade, xe.directionalShadowMatrix.value = k.state.directionalShadowMatrix, xe.spotLightMatrix.value = k.state.spotLightMatrix, xe.spotLightMap.value = k.state.spotLightMap, xe.pointShadowMatrix.value = k.state.pointShadowMatrix), z.lightProbeGrid = b.state.lightProbeGridArray.length > 0, z.currentProgram = Ge, z.uniformsList = null, Ge;
    }
    function Ma(x) {
      if (x.uniformsList === null) {
        const P = x.currentProgram.getUniforms();
        x.uniformsList = ir.seqWithValue(P.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function ya(x, P) {
      const W = O.get(x);
      W.outputColorSpace = P.outputColorSpace, W.batching = P.batching, W.batchingColor = P.batchingColor, W.instancing = P.instancing, W.instancingColor = P.instancingColor, W.instancingMorph = P.instancingMorph, W.skinning = P.skinning, W.morphTargets = P.morphTargets, W.morphNormals = P.morphNormals, W.morphColors = P.morphColors, W.morphTargetsCount = P.morphTargetsCount, W.numClippingPlanes = P.numClippingPlanes, W.numIntersection = P.numClipIntersection, W.vertexAlphas = P.vertexAlphas, W.vertexTangents = P.vertexTangents, W.toneMapping = P.toneMapping;
    }
    function po(x, P) {
      if (x.length === 0) return null;
      if (x.length === 1)
        return x[0].texture !== null ? x[0] : null;
      S.setFromMatrixPosition(P.matrixWorld);
      for (let W = 0, z = x.length; W < z; W++) {
        const k = x[W];
        if (k.texture !== null && k.boundingBox.containsPoint(S)) return k;
      }
      return null;
    }
    function mo(x, P, W, z, k) {
      P.isScene !== !0 && (P = gt), X.resetTextureUnits();
      const de = P.fog, _e = z.isMeshStandardMaterial || z.isMeshLambertMaterial || z.isMeshPhongMaterial ? P.environment : null, fe = te === null ? C.outputColorSpace : te.isXRRenderTarget === !0 ? te.texture.colorSpace : We.workingColorSpace, ve = z.isMeshStandardMaterial || z.isMeshLambertMaterial && !z.envMap || z.isMeshPhongMaterial && !z.envMap, ye = ie.get(z.envMap || _e, ve), Be = z.vertexColors === !0 && !!W.attributes.color && W.attributes.color.itemSize === 4, Ge = !!W.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), xe = !!W.morphAttributes.position, Je = !!W.morphAttributes.normal, pt = !!W.morphAttributes.color;
      let lt = 0;
      z.toneMapped && (te === null || te.isXRRenderTarget === !0) && (lt = C.toneMapping);
      const at = W.morphAttributes.position || W.morphAttributes.normal || W.morphAttributes.color, St = at !== void 0 ? at.length : 0, ge = O.get(z), bt = b.state.lights;
      if (ke === !0 && (nt === !0 || x !== J)) {
        const ot = x === J && z.id === q;
        Te.setState(z, x, ot);
      }
      let qe = !1;
      z.version === ge.__version ? (ge.needsLights && ge.lightsStateVersion !== bt.state.version || ge.outputColorSpace !== fe || k.isBatchedMesh && ge.batching === !1 || !k.isBatchedMesh && ge.batching === !0 || k.isBatchedMesh && ge.batchingColor === !0 && k._colorsTexture === null || k.isBatchedMesh && ge.batchingColor === !1 && k._colorsTexture !== null || k.isInstancedMesh && ge.instancing === !1 || !k.isInstancedMesh && ge.instancing === !0 || k.isSkinnedMesh && ge.skinning === !1 || !k.isSkinnedMesh && ge.skinning === !0 || k.isInstancedMesh && ge.instancingColor === !0 && k.instanceColor === null || k.isInstancedMesh && ge.instancingColor === !1 && k.instanceColor !== null || k.isInstancedMesh && ge.instancingMorph === !0 && k.morphTexture === null || k.isInstancedMesh && ge.instancingMorph === !1 && k.morphTexture !== null || ge.envMap !== ye || z.fog === !0 && ge.fog !== de || ge.numClippingPlanes !== void 0 && (ge.numClippingPlanes !== Te.numPlanes || ge.numIntersection !== Te.numIntersection) || ge.vertexAlphas !== Be || ge.vertexTangents !== Ge || ge.morphTargets !== xe || ge.morphNormals !== Je || ge.morphColors !== pt || ge.toneMapping !== lt || ge.morphTargetsCount !== St || !!ge.lightProbeGrid != b.state.lightProbeGridArray.length > 0) && (qe = !0) : (qe = !0, ge.__version = z.version);
      let Ft = ge.currentProgram;
      qe === !0 && (Ft = Ai(z, P, k), B && z.isNodeMaterial && B.onUpdateProgram(z, Ft, ge));
      let Xt = !1, on = !1, Cn = !1;
      const tt = Ft.getUniforms(), dt = ge.uniforms;
      if (m.useProgram(Ft.program) && (Xt = !0, on = !0, Cn = !0), z.id !== q && (q = z.id, on = !0), ge.needsLights) {
        const ot = po(b.state.lightProbeGridArray, k);
        ge.lightProbeGrid !== ot && (ge.lightProbeGrid = ot, on = !0);
      }
      if (Xt || J !== x) {
        m.buffers.depth.getReversed() && x.reversedDepth !== !0 && (x._reversedDepth = !0, x.updateProjectionMatrix()), tt.setValue(D, "projectionMatrix", x.projectionMatrix), tt.setValue(D, "viewMatrix", x.matrixWorldInverse);
        const cn = tt.map.cameraPosition;
        cn !== void 0 && cn.setValue(D, et.setFromMatrixPosition(x.matrixWorld)), E.logarithmicDepthBuffer && tt.setValue(
          D,
          "logDepthBufFC",
          2 / (Math.log(x.far + 1) / Math.LN2)
        ), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && tt.setValue(D, "isOrthographic", x.isOrthographicCamera === !0), J !== x && (J = x, on = !0, Cn = !0);
      }
      if (ge.needsLights && (bt.state.sunShadowMap.length > 0 && tt.setValue(D, "sunShadowMap", bt.state.sunShadowMap, X), bt.state.directionalShadowMap.length > 0 && tt.setValue(D, "directionalShadowMap", bt.state.directionalShadowMap, X), bt.state.spotShadowMap.length > 0 && tt.setValue(D, "spotShadowMap", bt.state.spotShadowMap, X), bt.state.pointShadowMap.length > 0 && tt.setValue(D, "pointShadowMap", bt.state.pointShadowMap, X)), k.isSkinnedMesh) {
        tt.setOptional(D, k, "bindMatrix"), tt.setOptional(D, k, "bindMatrixInverse");
        const ot = k.skeleton;
        ot && (ot.boneTexture === null && ot.computeBoneTexture(), tt.setValue(D, "boneTexture", ot.boneTexture, X));
      }
      k.isBatchedMesh && (tt.setOptional(D, k, "batchingTexture"), tt.setValue(D, "batchingTexture", k._matricesTexture, X), tt.setOptional(D, k, "batchingIdTexture"), tt.setValue(D, "batchingIdTexture", k._indirectTexture, X), tt.setOptional(D, k, "batchingColorTexture"), k._colorsTexture !== null && tt.setValue(D, "batchingColorTexture", k._colorsTexture, X));
      const ln = W.morphAttributes;
      if ((ln.position !== void 0 || ln.normal !== void 0 || ln.color !== void 0) && L.update(k, W, Ft), (on || ge.receiveShadow !== k.receiveShadow) && (ge.receiveShadow = k.receiveShadow, tt.setValue(D, "receiveShadow", k.receiveShadow)), (z.isMeshStandardMaterial || z.isMeshLambertMaterial || z.isMeshPhongMaterial) && z.envMap === null && P.environment !== null && (dt.envMapIntensity.value = P.environmentIntensity), dt.dfgLUT !== void 0 && (dt.dfgLUT.value = Sd()), on) {
        if (tt.setValue(D, "toneMappingExposure", C.toneMappingExposure), ge.needsLights && go(dt, Cn), de && z.fog === !0 && Ee.refreshFogUniforms(dt, de), Ee.refreshMaterialUniforms(dt, z, j, Y, b.state.transmissionRenderTarget[x.id]), ge.needsLights && ge.lightProbeGrid) {
          const ot = ge.lightProbeGrid;
          dt.probesSH.value = ot.texture, dt.probesMin.value.copy(ot.boundingBox.min), dt.probesMax.value.copy(ot.boundingBox.max), dt.probesResolution.value.copy(ot.resolution);
        }
        ir.upload(D, Ma(ge), dt, X);
      }
      if (z.isShaderMaterial && z.uniformsNeedUpdate === !0 && (ir.upload(D, Ma(ge), dt, X), z.uniformsNeedUpdate = !1), z.isSpriteMaterial && tt.setValue(D, "center", k.center), tt.setValue(D, "modelViewMatrix", k.modelViewMatrix), tt.setValue(D, "normalMatrix", k.normalMatrix), tt.setValue(D, "modelMatrix", k.matrixWorld), z.uniformsGroups !== void 0) {
        const ot = z.uniformsGroups;
        for (let cn = 0, Pn = ot.length; cn < Pn; cn++) {
          const Ta = ot[cn];
          ne.update(Ta, Ft), ne.bind(Ta, Ft);
        }
      }
      return Ft;
    }
    function go(x, P) {
      x.ambientLightColor.needsUpdate = P, x.lightProbe.needsUpdate = P, x.sunLights.needsUpdate = P, x.sunLightShadows.needsUpdate = P, x.directionalLights.needsUpdate = P, x.directionalLightShadows.needsUpdate = P, x.pointLights.needsUpdate = P, x.pointLightShadows.needsUpdate = P, x.spotLights.needsUpdate = P, x.spotLightShadows.needsUpdate = P, x.rectAreaLights.needsUpdate = P, x.hemisphereLights.needsUpdate = P;
    }
    function _o(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return Z;
    }, this.getActiveMipmapLevel = function() {
      return V;
    }, this.getRenderTarget = function() {
      return te;
    }, this.setRenderTargetTextures = function(x, P, W) {
      const z = O.get(x);
      z.__autoAllocateDepthBuffer = x.resolveDepthBuffer === !1, z.__autoAllocateDepthBuffer === !1 && (z.__useRenderToTexture = !1), O.get(x.texture).__webglTexture = P, O.get(x.depthTexture).__webglTexture = z.__autoAllocateDepthBuffer ? void 0 : W, z.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(x, P) {
      const W = O.get(x);
      W.__webglFramebuffer = P, W.__useDefaultFramebuffer = P === void 0;
    }, this.setRenderTarget = function(x, P = 0, W = 0) {
      te = x, Z = P, V = W;
      let z = null, k = !1, de = !1;
      if (x) {
        const fe = O.get(x);
        if (fe.__useDefaultFramebuffer !== void 0) {
          m.bindFramebuffer(D.FRAMEBUFFER, fe.__webglFramebuffer), ee.copy(x.viewport), be.copy(x.scissor), Me = x.scissorTest, m.viewport(ee), m.scissor(be), m.setScissorTest(Me), q = -1;
          return;
        } else if (fe.__webglFramebuffer === void 0)
          X.setupRenderTarget(x);
        else if (fe.__hasExternalTextures)
          X.rebindTextures(x, O.get(x.texture).__webglTexture, O.get(x.depthTexture).__webglTexture);
        else if (x.depthBuffer) {
          const Be = x.depthTexture;
          if (fe.__boundDepthTexture !== Be) {
            if (Be !== null && O.has(Be) && (x.width !== Be.image.width || x.height !== Be.image.height))
              throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");
            X.setupDepthRenderbuffer(x);
          }
        }
        const ve = x.texture;
        (ve.isData3DTexture || ve.isDataArrayTexture || ve.isCompressedArrayTexture) && (de = !0);
        const ye = O.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(ye[P]) ? z = ye[P][W] : z = ye[P], k = !0) : x.samples > 0 && X.useMultisampledRTT(x) === !1 ? z = O.get(x).__webglMultisampledFramebuffer : Array.isArray(ye) ? z = ye[W] : z = ye, ee.copy(x.viewport), be.copy(x.scissor), Me = x.scissorTest;
      } else
        ee.copy(re).multiplyScalar(j).floor(), be.copy(Ue).multiplyScalar(j).floor(), Me = ct;
      if (W !== 0 && (z = H), m.bindFramebuffer(D.FRAMEBUFFER, z) && m.drawBuffers(x, z), m.viewport(ee), m.scissor(be), m.setScissorTest(Me), k) {
        const fe = O.get(x.texture);
        D.framebufferTexture2D(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_CUBE_MAP_POSITIVE_X + P, fe.__webglTexture, W);
      } else if (de) {
        const fe = P;
        for (let ve = 0; ve < x.textures.length; ve++) {
          const ye = O.get(x.textures[ve]);
          D.framebufferTextureLayer(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0 + ve, ye.__webglTexture, W, fe);
        }
      } else if (x !== null && W !== 0) {
        const fe = O.get(x.texture);
        D.framebufferTexture2D(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_2D, fe.__webglTexture, W);
      }
      q = -1;
    };
    function Ea(x) {
      const P = O.get(x);
      return (P.__readFormat !== x.format || P.__readType !== x.type) && (P.__readFormat = x.format, P.__readType = x.type, P.__formatReadable = E.textureFormatReadable(x.format), P.__typeReadable = E.textureTypeReadable(x.type)), P;
    }
    this.readRenderTargetPixels = function(x, P, W, z, k, de, _e, fe = 0) {
      if (!(x && x.isWebGLRenderTarget)) {
        Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ve = O.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && _e !== void 0 && (ve = ve[_e]), ve) {
        m.bindFramebuffer(D.FRAMEBUFFER, ve);
        try {
          const ye = x.textures[fe], Be = ye.format, Ge = ye.type;
          x.textures.length > 1 && D.readBuffer(D.COLOR_ATTACHMENT0 + fe);
          const xe = Ea(ye);
          if (xe.__formatReadable === !1) {
            Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (xe.__typeReadable === !1) {
            Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          P >= 0 && P <= x.width - z && W >= 0 && W <= x.height - k && D.readPixels(P, W, z, k, ce.convert(Be), ce.convert(Ge), de);
        } finally {
          const ye = te !== null ? O.get(te).__webglFramebuffer : null;
          m.bindFramebuffer(D.FRAMEBUFFER, ye);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, P, W, z, k, de, _e, fe = 0) {
      if (!(x && x.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ve = O.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && _e !== void 0 && (ve = ve[_e]), ve)
        if (P >= 0 && P <= x.width - z && W >= 0 && W <= x.height - k) {
          m.bindFramebuffer(D.FRAMEBUFFER, ve);
          const ye = x.textures[fe], Be = ye.format, Ge = ye.type;
          x.textures.length > 1 && D.readBuffer(D.COLOR_ATTACHMENT0 + fe);
          const xe = Ea(ye);
          if (xe.__formatReadable === !1)
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (xe.__typeReadable === !1)
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const Je = D.createBuffer();
          D.bindBuffer(D.PIXEL_PACK_BUFFER, Je), D.bufferData(D.PIXEL_PACK_BUFFER, de.byteLength, D.STREAM_READ), D.readPixels(P, W, z, k, ce.convert(Be), ce.convert(Ge), 0), D.bindBuffer(D.PIXEL_PACK_BUFFER, null);
          const pt = te !== null ? O.get(te).__webglFramebuffer : null;
          m.bindFramebuffer(D.FRAMEBUFFER, pt);
          const lt = D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return D.flush(), await yo(D, lt, 4), D.bindBuffer(D.PIXEL_PACK_BUFFER, Je), D.getBufferSubData(D.PIXEL_PACK_BUFFER, 0, de), D.bindBuffer(D.PIXEL_PACK_BUFFER, null), D.deleteBuffer(Je), D.deleteSync(lt), de;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(x, P = null, W = 0) {
      const z = Math.pow(2, -W), k = Math.floor(x.image.width * z), de = Math.floor(x.image.height * z), _e = P !== null ? P.x : 0, fe = P !== null ? P.y : 0;
      X.setTexture2D(x, 0), D.copyTexSubImage2D(D.TEXTURE_2D, W, 0, 0, _e, fe, k, de), m.unbindTexture();
    }, this.copyTextureToTexture = function(x, P, W = null, z = null, k = 0, de = 0) {
      let _e, fe, ve, ye, Be, Ge, xe, Je, pt;
      const lt = x.isCompressedTexture ? x.mipmaps[de] : x.image;
      if (W !== null)
        _e = W.max.x - W.min.x, fe = W.max.y - W.min.y, ve = W.isBox3 ? W.max.z - W.min.z : 1, ye = W.min.x, Be = W.min.y, Ge = W.isBox3 ? W.min.z : 0;
      else {
        const dt = Math.pow(2, -k);
        _e = Math.floor(lt.width * dt), fe = Math.floor(lt.height * dt), x.isDataArrayTexture ? ve = lt.depth : x.isData3DTexture ? ve = Math.floor(lt.depth * dt) : ve = 1, ye = 0, Be = 0, Ge = 0;
      }
      z !== null ? (xe = z.x, Je = z.y, pt = z.z) : (xe = 0, Je = 0, pt = 0);
      const at = ce.convert(P.format), St = ce.convert(P.type);
      let ge;
      P.isData3DTexture ? (X.setTexture3D(P, 0), ge = D.TEXTURE_3D) : P.isDataArrayTexture || P.isCompressedArrayTexture ? (X.setTexture2DArray(P, 0), ge = D.TEXTURE_2D_ARRAY) : (X.setTexture2D(P, 0), ge = D.TEXTURE_2D), m.activeTexture(D.TEXTURE0), m.pixelStorei(D.UNPACK_FLIP_Y_WEBGL, P.flipY), m.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL, P.premultiplyAlpha), m.pixelStorei(D.UNPACK_ALIGNMENT, P.unpackAlignment);
      const bt = m.getParameter(D.UNPACK_ROW_LENGTH), qe = m.getParameter(D.UNPACK_IMAGE_HEIGHT), Ft = m.getParameter(D.UNPACK_SKIP_PIXELS), Xt = m.getParameter(D.UNPACK_SKIP_ROWS), on = m.getParameter(D.UNPACK_SKIP_IMAGES);
      m.pixelStorei(D.UNPACK_ROW_LENGTH, lt.width), m.pixelStorei(D.UNPACK_IMAGE_HEIGHT, lt.height), m.pixelStorei(D.UNPACK_SKIP_PIXELS, ye), m.pixelStorei(D.UNPACK_SKIP_ROWS, Be), m.pixelStorei(D.UNPACK_SKIP_IMAGES, Ge);
      const Cn = x.isDataArrayTexture || x.isData3DTexture, tt = P.isDataArrayTexture || P.isData3DTexture;
      if (x.isDepthTexture) {
        const dt = O.get(x), ln = O.get(P), ot = O.get(dt.__renderTarget), cn = O.get(ln.__renderTarget);
        m.bindFramebuffer(D.READ_FRAMEBUFFER, ot.__webglFramebuffer), m.bindFramebuffer(D.DRAW_FRAMEBUFFER, cn.__webglFramebuffer);
        for (let Pn = 0; Pn < ve; Pn++)
          Cn && (D.framebufferTextureLayer(D.READ_FRAMEBUFFER, D.COLOR_ATTACHMENT0, O.get(x).__webglTexture, k, Ge + Pn), D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER, D.COLOR_ATTACHMENT0, O.get(P).__webglTexture, de, pt + Pn)), D.blitFramebuffer(ye, Be, _e, fe, xe, Je, _e, fe, D.DEPTH_BUFFER_BIT, D.NEAREST);
        m.bindFramebuffer(D.READ_FRAMEBUFFER, null), m.bindFramebuffer(D.DRAW_FRAMEBUFFER, null);
      } else if (k !== 0 || x.isRenderTargetTexture || O.has(x)) {
        const dt = O.get(x), ln = O.get(P);
        m.bindFramebuffer(D.READ_FRAMEBUFFER, N), m.bindFramebuffer(D.DRAW_FRAMEBUFFER, G);
        for (let ot = 0; ot < ve; ot++)
          Cn ? D.framebufferTextureLayer(D.READ_FRAMEBUFFER, D.COLOR_ATTACHMENT0, dt.__webglTexture, k, Ge + ot) : D.framebufferTexture2D(D.READ_FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_2D, dt.__webglTexture, k), tt ? D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER, D.COLOR_ATTACHMENT0, ln.__webglTexture, de, pt + ot) : D.framebufferTexture2D(D.DRAW_FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_2D, ln.__webglTexture, de), k !== 0 ? D.blitFramebuffer(ye, Be, _e, fe, xe, Je, _e, fe, D.COLOR_BUFFER_BIT, D.NEAREST) : tt ? D.copyTexSubImage3D(ge, de, xe, Je, pt + ot, ye, Be, _e, fe) : D.copyTexSubImage2D(ge, de, xe, Je, ye, Be, _e, fe);
        m.bindFramebuffer(D.READ_FRAMEBUFFER, null), m.bindFramebuffer(D.DRAW_FRAMEBUFFER, null);
      } else
        tt ? x.isDataTexture || x.isData3DTexture ? D.texSubImage3D(ge, de, xe, Je, pt, _e, fe, ve, at, St, lt.data) : P.isCompressedArrayTexture ? D.compressedTexSubImage3D(ge, de, xe, Je, pt, _e, fe, ve, at, lt.data) : D.texSubImage3D(ge, de, xe, Je, pt, _e, fe, ve, at, St, lt) : x.isDataTexture ? D.texSubImage2D(D.TEXTURE_2D, de, xe, Je, _e, fe, at, St, lt.data) : x.isCompressedTexture ? D.compressedTexSubImage2D(D.TEXTURE_2D, de, xe, Je, lt.width, lt.height, at, lt.data) : D.texSubImage2D(D.TEXTURE_2D, de, xe, Je, _e, fe, at, St, lt);
      m.pixelStorei(D.UNPACK_ROW_LENGTH, bt), m.pixelStorei(D.UNPACK_IMAGE_HEIGHT, qe), m.pixelStorei(D.UNPACK_SKIP_PIXELS, Ft), m.pixelStorei(D.UNPACK_SKIP_ROWS, Xt), m.pixelStorei(D.UNPACK_SKIP_IMAGES, on), de === 0 && P.generateMipmaps && D.generateMipmap(ge), m.unbindTexture();
    }, this.initRenderTarget = function(x) {
      O.get(x).__webglFramebuffer === void 0 && X.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? X.setTextureCube(x, 0) : x.isData3DTexture ? X.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? X.setTexture2DArray(x, 0) : X.setTexture2D(x, 0), m.unbindTexture();
    }, this.resetState = function() {
      Z = 0, V = 0, te = null, m.reset(), pe.reset();
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
    t.drawingBufferColorSpace = We._getDrawingBufferColorSpace(e), t.unpackColorSpace = We._getUnpackColorSpace();
  }
}
const Js = new Lt();
Js.setAttribute("position", new Ct([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
const yd = new ai(-1, 1, 1, -1, 0, 1), Ed = (
  /* glsl */
  `
in vec3 position;
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`
);
function rn(i, e = {}, t = {}) {
  return new sa({
    glslVersion: ei,
    vertexShader: Ed,
    fragmentShader: i,
    uniforms: e,
    depthTest: !1,
    depthWrite: !1,
    ...t
  });
}
class jn {
  constructor(e) {
    this.mesh = new Tt(Js, e), this.mesh.frustumCulled = !1;
  }
  get material() {
    return this.mesh.material;
  }
  set material(e) {
    this.mesh.material = e;
  }
  render(e, t) {
    e.setRenderTarget(t), e.render(this.mesh, yd);
  }
}
const Kt = 256, Td = 8, Zn = [600, 85, 12, 2.1], rr = 9.81, bd = 74e-6, Jr = 300, dr = (
  /* glsl */
  `
precision highp float;
precision highp int;
#define N ${Kt}
#define PI 3.14159265359
#define G ${rr.toFixed(2)}
#define ST ${bd.toExponential()}
vec2 cmul(vec2 a, vec2 b) { return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x); }
float omega(float k) { return sqrt(G * k + ST * k * k * k); }
`
), wd = dr + /* glsl */
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
}`, Ad = dr + /* glsl */
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
  const float W0 = 2.0 * PI / ${Jr.toFixed(1)};
  // ω = n·W0; phase reduced to [0, 2π) before sin/cos (the capillary cascade reaches ω ≈ 130)
  float ph = 2.0 * PI * fract(floor(omega(kl) / W0) * (uTime / ${Jr.toFixed(1)}));
  vec2 e = vec2(cos(ph), sin(ph));
  vec4 h0 = texelFetch(uH0, p, 0);
  vec2 h = cmul(h0.xy, e) + cmul(h0.zw, vec2(e.x, -e.y));
  vec2 ih = vec2(-h.y, h.x);

  vec2 dx = ih * k.x * ik, dz = ih * k.y * ik;
  vec2 dxdx = -h * k.x * k.x * ik, dzdz = -h * k.y * k.y * ik, dxdz = -h * k.x * k.y * ik;
  vec2 dydx = ih * k.x, dydz = ih * k.y;

  out0 = vec4(pack2(dx, dz), pack2(h, dxdz));
  out1 = vec4(pack2(dydx, dydz), pack2(dxdx, dzdz));
}`, Rd = dr + /* glsl */
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
}`, Cd = dr + /* glsl */
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
function Es(i, e) {
  const t = e * 1e3;
  return {
    alpha: 0.076 * Math.pow(rr * t / (i * i), -0.22),
    peakOmega: 22 * Math.pow(i * t / (rr * rr), -0.33)
  };
}
const Qs = () => ({
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
class Pd {
  constructor(e, t = Qs()) {
    this.renderer = e, this.params = t, this.time = 0, this.dirty = !0, this.parity = 0;
    const n = {
      type: 1015,
      minFilter: 1003,
      magFilter: 1003,
      depthBuffer: !1,
      generateMipmaps: !1
    }, r = Kt * Zn.length;
    this.h0RT = new ut(Kt, r, n);
    const a = { ...n, type: 1016, count: 2 };
    this.ping = new ut(Kt, r, a), this.pong = new ut(Kt, r, a);
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
    this.out = Zn.map(() => [new ut(Kt, Kt, s), new ut(Kt, Kt, s)]);
    const o = e.getClearColor(new ze()), l = e.getClearAlpha();
    e.setClearColor(0, 1);
    for (const h of this.out) for (const f of h)
      e.setRenderTarget(f), e.clear(!0, !1, !1);
    e.setClearColor(o, l), e.setRenderTarget(null);
    const c = new He(...Zn);
    this.initMat = rn(wd, {
      uSpecA: { value: [new He(), new He()] },
      uSpecB: { value: [new He(), new He()] },
      uLength: { value: c },
      // cascade c owns [cut[c-1], cut[c]); each cut sits at 6 fundamentals of the next cascade
      uCut: { value: new He(...Zn.slice(1).map((h) => 2 * Math.PI / h * 6), 0) },
      uCapFade: { value: 0 },
      uSeed: { value: 1337 }
    }), this.evolveMat = rn(Ad, {
      uH0: { value: this.h0RT.texture },
      uLength: { value: c },
      uTime: { value: 0 }
    }), this.fftMat = rn(Rd, {
      uIn0: { value: null },
      uIn1: { value: null },
      uSub: { value: 2 },
      uVertical: { value: 0 }
    }), this.assembleMat = rn(Cd, {
      uIn0: { value: null },
      uIn1: { value: null },
      uPrev: { value: null },
      uCascade: { value: 0 },
      uLambda: { value: 1 },
      uDt: { value: 0 },
      uFoamRecovery: { value: 0.45 }
    }), this.quad = new jn(this.initMat), this.lengths = Zn, this.displacement = this.out.map((h) => h[0].textures[0]), this.slope = this.out.map((h) => h[0].textures[1]);
  }
  updateSpectrum() {
    const e = this.params, t = this.initMat.uniforms, n = Es(e.windSpeed, e.fetchKm), r = Es(e.swellWindSpeed, e.swellFetchKm), a = nn.degToRad;
    t.uSpecA.value[0].set(e.waveScale, a(e.windDirection), e.spreadBlend, e.windSwell), t.uSpecB.value[0].set(n.alpha, n.peakOmega, e.gamma, e.shortWavesFade), t.uSpecA.value[1].set(e.swellScale * e.waveScale, a(e.swellDirection), 1, e.swellSwell), t.uSpecB.value[1].set(r.alpha, r.peakOmega, e.gamma, e.shortWavesFade), t.uCapFade.value = e.capillaryFade, this.quad.material = this.initMat, this.quad.render(this.renderer, this.h0RT), this.dirty = !1;
  }
  update(e, t) {
    const n = this.params;
    t == null || t.begin("sim.evolve"), this.dirty && this.updateSpectrum(), e *= n.timeScale, this.time = (this.time + e) % Jr;
    const r = this.renderer, a = this.quad;
    this.evolveMat.uniforms.uTime.value = this.time, a.material = this.evolveMat, a.render(r, this.ping), t == null || t.begin("sim.fft");
    let s = this.ping, o = this.pong;
    const l = this.fftMat.uniforms;
    a.material = this.fftMat;
    for (let f = 0; f < 2; f++) {
      l.uVertical.value = f;
      for (let u = 1; u <= Td; u++)
        l.uSub.value = 1 << u, l.uIn0.value = s.textures[0], l.uIn1.value = s.textures[1], a.render(r, o), [s, o] = [o, s];
    }
    t == null || t.begin("sim.assemble");
    const c = this.assembleMat.uniforms;
    c.uIn0.value = s.textures[0], c.uIn1.value = s.textures[1], c.uLambda.value = n.choppiness, c.uDt.value = e, c.uFoamRecovery.value = n.foamRecovery, a.material = this.assembleMat;
    const h = this.parity ^ 1;
    for (let f = 0; f < this.out.length; f++)
      c.uCascade.value = f, c.uPrev.value = this.out[f][this.parity].textures[0], a.render(r, this.out[f][h]), this.displacement[f] = this.out[f][h].textures[0], this.slope[f] = this.out[f][h].textures[1];
    this.parity = h;
  }
}
const js = (
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
), Xn = new U();
class Dd {
  constructor(e = 1024) {
    const t = new _n(e, e, 1015);
    t.compareFunction = 515, t.minFilter = t.magFilter = 1006, this.target = new ut(e, e, { format: 1028, depthTexture: t, generateMipmaps: !1 }), this.camera = new ai(), this.material = new na({ colorWrite: !1, side: 2 }), this.uniforms = {
      uFloatShadow: { value: t },
      uFloatShadowMatrix: { value: new Qe() },
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
    Xn.set(0, 0, 0);
    for (const c of n) Xn.add(c.pos);
    Xn.divideScalar(n.length);
    let s = 1;
    for (const c of n) s = Math.max(s, c.pos.distanceTo(Xn) + c.radius);
    const o = this.camera;
    o.left = o.bottom = -s, o.right = o.top = s, o.near = 1, o.far = s + 3e3, o.position.copy(Xn).addScaledVector(r, s + 20), o.lookAt(Xn), o.updateProjectionMatrix(), o.updateMatrixWorld(), a.uFloatShadowMatrix.value.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1).multiply(o.projectionMatrix).multiply(o.matrixWorldInverse), a.uFloatShadowBias.value = 0.03 / (o.far - o.near);
    const l = e.getRenderTarget();
    t.overrideMaterial = this.material, e.setRenderTarget(this.target), e.clear(!1, !0, !1), e.render(t, o), t.overrideMaterial = null, e.setRenderTarget(l);
  }
  clear(e) {
    const t = e.getRenderTarget();
    e.setRenderTarget(this.target), e.clear(!1, !0, !1), e.setRenderTarget(t);
  }
}
const $i = 384, Ld = 60, ar = 1, eo = 3e3, Fd = 6e4;
function Ts(i) {
  const e = 1 + 2 * Math.PI / i, t = [];
  for (let o = ar / 16; o < ar * 0.99; o *= 1.12) t.push(o);
  for (let o = ar; o < eo; o *= e) t.push(o);
  t.push(Fd);
  const n = new Float32Array((1 + t.length * i) * 3);
  let r = 3;
  for (const o of t)
    for (let l = 0; l < i; l++) {
      const c = l / i * Math.PI * 2;
      n[r++] = Math.cos(c) * o, n[r++] = 0, n[r++] = Math.sin(c) * o;
    }
  const a = [];
  for (let o = 0; o < i; o++) a.push(0, 1 + (o + 1) % i, 1 + o);
  for (let o = 0; o < t.length - 1; o++) {
    const l = 1 + o * i, c = l + i;
    for (let h = 0; h < i; h++) {
      const f = (h + 1) % i;
      a.push(l + h, l + f, c + h, l + f, c + f, c + h);
    }
  }
  const s = new Lt();
  return s.setAttribute("position", new Bt(n, 3)), s.setIndex(new Bt(new Uint32Array(a), 1)), s;
}
const to = (
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
), Id = (
  /* glsl */
  `
vec3 swash(vec2 xz, float hgt) {
  vec4 sh = shoreSample(xz);
  if (hgt < -0.3 || sh.y > 60.0 || uShoreWave.x <= 0.0) return vec3(0.0);
  vec2 dir = shoreDir(sh, travelSample(xz));
  float R = 0.55 * uShoreWave.x * shoreExposure(dir) * shoreGroup(xz) * smoothstep(0.35, 0.8, length(sh.zw));
  if (R < 0.02) return vec3(0.0);
  if (hgt > R) return vec3(0.0, 0.0, 0.5 * smoothstep(1.5 * R, R, hgt));   // reached by bigger sets
  float w = sqrt(9.81 * 6.2831853 / uShoreWave.y) * uShoreWave.z;
  // fraction of a period since the last bore reached the waterline (tau = 0 there)
  float s = fract((w * uTime + shoreNoisePhase(xz)) / 6.2831853);
  float eta = R * (s < 0.3 ? sin(s / 0.3 * 1.5708) : cos((s - 0.3) / 0.7 * 1.5708));
  float th = eta - hgt;
  float edge = s < 0.35 ? smoothstep(-0.01, 0.0, th) * (1.0 - smoothstep(0.0, 0.05, th)) : 0.0;
  // drying since the backwash uncovered this height
  float sPass = 0.3 + 0.7 * acos(clamp(hgt / R, 0.0, 1.0)) / 1.5708;
  float dry = (s > sPass ? s - sPass : s + 1.0 - sPass) * 6.2831853 / w;
  return vec3(max(th, 0.0), edge, th > 0.0 ? 1.0 : exp(-dry / 5.0));
}
`
), no = (
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
${to}

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
), Ud = no + /* glsl */
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
  float scale = r > ${(eo * 2).toFixed(1)} ? 1.0 : uGridScale;
  vec2 xz = cameraPosition.xz + local * scale;
  float cell = max(r, ${ar.toFixed(1)}) * uCellStep * scale;

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
}`, Nd = no + js + /* glsl */
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
class Bd {
  constructor(e, t, n, r) {
    this.sim = e, this.uniforms = {
      uDisp0: { value: null },
      uDisp1: { value: null },
      uDisp2: { value: null },
      uSlope0: { value: null },
      uSlope1: { value: null },
      uSlope2: { value: null },
      uSlope3: { value: null },
      uLength: { value: new He(...e.lengths) },
      uWind: { value: 0 },
      uImpact: { value: Array.from({ length: 8 }, () => new He()) },
      uImpactSize: { value: new Array(8).fill(1) },
      uShore: { value: t.texture },
      uTravel: { value: t.travel },
      uShoreExtent: { value: t.extent },
      uTime: { value: 0 },
      uShoreWave: { value: new He(0.55, 30, 1, 1) },
      uWaveDamp: { value: new Re(26, 0.55) },
      uSwellDir: { value: new Re(1, 0) },
      uGridScale: { value: 1 },
      uCellStep: { value: 2 * Math.PI / $i },
      uResolution: { value: new Re(1, 1) },
      uNearFar: { value: new Re(0.5, 8e4) },
      uSceneColor: { value: null },
      uSceneDepth: { value: null },
      uReflection: { value: null },
      uReflMatrix: { value: new Qe() },
      uSkyCube: { value: n.cube },
      uSkyMaxLod: { value: Math.log2(n.cubeSize) },
      uFoamTex: { value: null },
      uShadowMap: { value: null },
      uShadowMatrix: { value: new Qe() },
      uShadowBias: { value: 1e-5 },
      ...r,
      uSunDir: { value: n.sunDir },
      uSunColor: { value: n.sunColor },
      uAbsorption: { value: new U(0.42, 0.075, 0.048) },
      uScatterColor: { value: new ze(0, 0.05, 0.08) },
      uFoamTint: { value: new ze(0.62, 0.78, 0.82) },
      uSSS: { value: new He(1.6, 0.06, 0.05, 0) },
      uFoam: { value: new He(0.05, 1.3, 0.35, 0.85) },
      uOptics: { value: new He(0.02, 0.06, 0.04, 1 / 18e3) },
      uCamForward: { value: new U() },
      uDebug: { value: 0 },
      uGlint: { value: 0.6 },
      uCamSide: { value: -1 }
    }, this.material = new Ot({
      glslVersion: ei,
      vertexShader: Ud,
      fragmentShader: Nd,
      uniforms: this.uniforms,
      side: 2
    }), this.grids = [Ts($i), Ts($i / 2)], this.mesh = new Tt(this.grids[0], this.material), this.mesh.frustumCulled = !1;
  }
  update(e, t) {
    const n = this.uniforms, r = this.sim;
    n.uDisp0.value = r.displacement[0], n.uDisp1.value = r.displacement[1], n.uDisp2.value = r.displacement[2], n.uSlope0.value = r.slope[0], n.uSlope1.value = r.slope[1], n.uSlope2.value = r.slope[2], n.uSlope3.value = r.slope[3], n.uWind.value = r.params.windSpeed, n.uTime.value = t;
    const a = nn.degToRad(r.params.swellDirection);
    n.uSwellDir.value.set(-Math.cos(a), -Math.sin(a)), n.uGridScale.value = Math.max(1, Math.abs(e.position.y) / 2);
    const s = Math.abs(e.position.y) > Ld ? 1 : 0;
    this.mesh.geometry = this.grids[s], n.uCellStep.value = 2 * Math.PI / ($i >> s), n.uNearFar.value.set(e.near, e.far), e.getWorldDirection(n.uCamForward.value);
  }
}
const sr = 1e20;
function bs(i, e, t, n, r) {
  let a = 0;
  n[0] = 0, r[0] = -sr, r[1] = sr;
  for (let s = 1; s < e; s++) {
    let o = (i[s] + s * s - (i[n[a]] + n[a] * n[a])) / (2 * s - 2 * n[a]);
    for (; o <= r[a]; )
      a--, o = (i[s] + s * s - (i[n[a]] + n[a] * n[a])) / (2 * s - 2 * n[a]);
    a++, n[a] = s, r[a] = o, r[a + 1] = sr;
  }
  a = 0;
  for (let s = 0; s < e; s++) {
    for (; r[a + 1] < s; ) a++;
    t[s] = (s - n[a]) * (s - n[a]) + i[n[a]];
  }
}
function ws(i, e) {
  const t = new Float64Array(e * e);
  for (let o = 0; o < t.length; o++) t[o] = i[o] ? 0 : sr;
  const n = new Float64Array(e), r = new Float64Array(e), a = new Int32Array(e), s = new Float64Array(e + 1);
  for (let o = 0; o < e; o++) {
    for (let l = 0; l < e; l++) n[l] = t[l * e + o];
    bs(n, e, r, a, s);
    for (let l = 0; l < e; l++) t[l * e + o] = r[l];
  }
  for (let o = 0; o < e; o++) {
    for (let l = 0; l < e; l++) n[l] = t[o * e + l];
    bs(n, e, r, a, s);
    for (let l = 0; l < e; l++) t[o * e + l] = r[l];
  }
  return t;
}
const qn = (i, e) => i < 0 ? 0 : i > e ? e : i;
function gn(i, e, t) {
  const n = new Float32Array(i.length), r = new Float32Array(i.length), a = 2 * t + 1, s = e - 1;
  for (let o = 0; o < e; o++) {
    const l = o * e;
    let c = 0;
    for (let h = -t; h <= t; h++) c += i[l + qn(h, s)];
    for (let h = 0; h < e; h++)
      n[l + h] = c / a, c += i[l + qn(h + t + 1, s)] - i[l + qn(h - t, s)];
  }
  for (let o = 0; o < e; o++) {
    let l = 0;
    for (let c = -t; c <= t; c++) l += n[qn(c, s) * e + o];
    for (let c = 0; c < e; c++)
      r[c * e + o] = l / a, l += n[qn(c + t + 1, s) * e + o] - n[qn(c - t, s) * e + o];
  }
  return r;
}
function io(i, e) {
  const t = new ti(i, e, e, 1023, 1015);
  return t.minFilter = t.magFilter = 1006, t.wrapS = t.wrapT = 1001, t.needsUpdate = !0, t;
}
const Od = 9.81, Gd = 0.3, ro = 14, zd = 64, As = 50, Wr = 3, kd = 300, Rs = 1 / 25;
function Vd(i, e) {
  const t = e * e, n = i.slice(), r = new Uint8Array(t), a = new Int32Array(t), s = new Int32Array(t);
  for (let o = 0; o < t; o++) {
    if (i[o] || r[o]) continue;
    let l = 0, c = 0;
    for (a[l++] = o, r[o] = 1; l > 0; ) {
      const h = a[--l], f = h % e;
      s[c++] = h, f > 0 && !i[h - 1] && !r[h - 1] && (r[h - 1] = 1, a[l++] = h - 1), f < e - 1 && !i[h + 1] && !r[h + 1] && (r[h + 1] = 1, a[l++] = h + 1), h >= e && !i[h - e] && !r[h - e] && (r[h - e] = 1, a[l++] = h - e), h < t - e && !i[h + e] && !r[h + e] && (r[h + e] = 1, a[l++] = h + e);
    }
    if (c < zd) for (let h = 0; h < c; h++) n[s[h]] = 1;
  }
  return n;
}
function Hd(i, e, t, n) {
  for (let r = 0; r < e.length; r++)
    e[r] = Math.sqrt(Od * Math.min(ro, Math.max(Gd, -i[r]))), t[r] = n / e[r];
}
function Wd(i, e, t, n, r, a) {
  const s = a + 2;
  e.fill(2);
  for (let o = 0; o < a; o++) e.fill(1, (o + 1) * s + 1, (o + 1) * s + 1 + a);
  for (let o = 0; o < a; o++) for (let l = 0; l < a; l++) {
    const c = o * a + l, h = n[c], f = t[c];
    let u = 1 / 0, p = 1 / 0;
    if (l > 0 && n[c - 1] !== h && (u = f / (f - t[c - 1])), l < a - 1 && n[c + 1] !== h && (u = Math.min(u, f / (f - t[c + 1]))), o > 0 && n[c - a] !== h && (p = f / (f - t[c - a])), o < a - 1 && n[c + a] !== h && (p = Math.min(p, f / (f - t[c + a]))), u === 1 / 0 && p === 1 / 0) continue;
    const v = u === 1 / 0 ? p : p === 1 / 0 ? u : u * p / (Math.sqrt(u * u + p * p) || 1), T = c + 2 * o + s + 1;
    i[T] = v * r[c], e[T] = 2;
  }
}
function Ji(i, e, t, n, r, a) {
  const s = n + 2;
  let o = 0;
  for (let l = 0, c = a > 0 ? 0 : n - 1; l < n; l++, c += a)
    for (let h = 0, f = r > 0 ? 0 : n - 1; h < n; h++, f += r) {
      const u = c * n + f, p = u + 2 * c + s + 1;
      if (e[p] !== 1) continue;
      e[p] = 0;
      const v = i[p - 1], T = i[p + 1], g = i[p - s], d = i[p + s], M = v < T ? v : T, R = g < d ? g : d, S = t[u], y = M > R ? M - R : R - M, b = y >= S ? (M < R ? M : R) + S : 0.5 * (M + R + Math.sqrt(2 * S * S - y * y));
      b < i[p] - 1e-4 && (i[p] = b, o++, e[p - 1] === 0 && (e[p - 1] = 1), e[p + 1] === 0 && (e[p + 1] = 1), e[p - s] === 0 && (e[p - s] = 1), e[p + s] === 0 && (e[p + s] = 1));
    }
  return o;
}
const Xd = (i, e, t, n) => Ji(i, e, t, n, 1, 1) + Ji(i, e, t, n, -1, 1) + Ji(i, e, t, n, 1, -1) + Ji(i, e, t, n, -1, -1);
function qd(i, e, t) {
  const n = new Float32Array(t * t);
  for (let r = 0; r < t; r++) for (let a = 0; a < t; a++) {
    const s = r * t + a, o = i[s + 2 * r + t + 3];
    n[s] = o === 1 / 0 ? 0 : e[s] ? o : -o;
  }
  return n;
}
function Yd(i, e, t, n, r, a, s) {
  for (let o = 0; o < a; o++) {
    const l = o > 0 ? -a : 0, c = o < a - 1 ? a : 0;
    for (let h = 0; h < a; h++) {
      const f = o * a + h, u = h > 0 ? -1 : 0, p = h < a - 1 ? 1 : 0, v = i[f + p] - i[f + u], T = i[f + c] - i[f + l], g = Math.sqrt(v * v + T * T);
      g > 1e-9 && (t[f] = -v / g, n[f] = -T / g);
      const d = Math.min(1, Math.max(0, (g / (2 * s) * e[f] - 0.7) / 0.25));
      r[f] = d * d * (3 - 2 * d);
    }
  }
}
function Kd(i, e, t, n, r) {
  const a = new Float32Array(n * n);
  for (let s = 0; s < n; s++) {
    const o = s > 0 ? -n : 0, l = s < n - 1 ? n : 0;
    for (let c = 0; c < n; c++) {
      const h = s * n + c, f = c > 0 ? -1 : 0, u = c < n - 1 ? 1 : 0, p = -(i[h + u] - i[h + f] + e[h + l] - e[h + o]) / (2 * r);
      a[h] = Math.min(Rs, Math.max(-Rs, p)) * t[h];
    }
  }
  return a;
}
function Zd(i, e, t, n, r, a) {
  const s = r >> 1, o = new Float32Array(s * s), l = Wr * a, c = Math.ceil(2.5 * As / l), h = new Float32Array(c);
  for (let f = 0; f < c; f++) h[f] = Math.exp(-f * l / As) * l;
  for (let f = 0; f < s; f++) for (let u = 0; u < s; u++) {
    const p = 2 * u, v = 2 * f, T = v * r + p, g = Math.min(1, Math.max(0, (kd - n[T]) / 80));
    if (n[T] < -3 * a || g === 0) continue;
    let d = p, M = v, R = 0;
    for (let S = 0; S < c; S++) {
      const y = Math.min(r - 2, d | 0), b = Math.min(r - 2, M | 0), A = b * r + y, _ = d - y, w = M - b, C = (1 - _) * (1 - w), F = _ * (1 - w), B = (1 - _) * w, H = _ * w;
      if (R += h[S] * (i[A] * C + i[A + 1] * F + i[A + r] * B + i[A + r + 1] * H), d -= Wr * (e[A] * C + e[A + 1] * F + e[A + r] * B + e[A + r + 1] * H), M -= Wr * (t[A] * C + t[A + 1] * F + t[A + r] * B + t[A + r + 1] * H), d < 0 || M < 0 || d > r - 1 || M > r - 1) break;
    }
    o[f * s + u] = R * g;
  }
  return o;
}
function $d(i, e, t, n, r, a, s) {
  const o = s >> 1, l = new Float32Array(s * s * 4);
  for (let c = 0; c < s; c++) {
    const h = Math.min(o - 1, c * 0.5), f = Math.min(o - 2, h | 0), u = h - f;
    for (let p = 0; p < s; p++) {
      const v = Math.min(o - 1, p * 0.5), T = Math.min(o - 2, v | 0), g = v - T, d = f * o + T, M = (n[d] * (1 - g) + n[d + 1] * g) * (1 - u) + (n[d + o] * (1 - g) + n[d + o + 1] * g) * u, R = c * s + p, S = 1 / Math.sqrt(Math.sqrt(Math.min(1, Math.max(0.04, Math.max(-r[R], 0.6) / ro))));
      l[R * 4] = i[R], l[R * 4 + 1] = e[R], l[R * 4 + 2] = t[R], l[R * 4 + 3] = Math.min(2.5, Math.max(0.3, M === 0 ? S : S * Math.exp(0.5 * M))) * a[R];
    }
  }
  return l;
}
function Jd(i, e, t, n, r) {
  const a = n * n, s = Vd(e, n), o = new Float32Array(a), l = new Float64Array(a);
  Hd(i, o, l, r);
  const c = new Float64Array((n + 2) * (n + 2)).fill(1 / 0), h = new Uint8Array((n + 2) * (n + 2));
  Wd(c, h, i, s, l, n);
  for (let M = 0; M < 12 && Xd(c, h, l, n) > 0; M++) ;
  const f = gn(gn(qd(c, s, n), n, 2), n, 2), u = new Float32Array(a), p = new Float32Array(a), v = new Float32Array(a);
  Yd(f, o, u, p, v, n, r);
  const T = gn(gn(Kd(u, p, v, n, r), n, 2), n, 2), g = gn(gn(v, n, 2), n, 2), d = $d(f, u, p, Zd(T, u, p, t, n, r), i, g, n);
  return { travel: io(d, n), travelData: d };
}
function Qd(i, e, t = 512) {
  const n = e / t, r = new Float32Array(t * t), a = new Uint8Array(t * t), s = new Uint8Array(t * t);
  for (let f = 0; f < t; f++) for (let u = 0; u < t; u++) {
    const p = i(((u + 0.5) / t - 0.5) * e, ((f + 0.5) / t - 0.5) * e), v = f * t + u;
    r[v] = p, a[v] = p > 0, s[v] = p <= 0;
  }
  const o = ws(a, t), l = ws(s, t);
  let c = new Float32Array(t * t);
  for (let f = 0; f < c.length; f++)
    c[f] = s[f] ? (Math.sqrt(o[f]) - 0.5) * n : -(Math.sqrt(l[f]) - 0.5) * n;
  c = gn(gn(c, t, 2), t, 2);
  const h = new Float32Array(t * t * 4);
  for (let f = 0; f < t; f++) for (let u = 0; u < t; u++) {
    const p = f * t + u, v = (T, g) => c[Math.min(t - 1, Math.max(0, g)) * t + Math.min(t - 1, Math.max(0, T))];
    h[p * 4] = r[p], h[p * 4 + 1] = c[p], h[p * 4 + 2] = (v(u + 1, f) - v(u - 1, f)) / (2 * n), h[p * 4 + 3] = (v(u, f + 1) - v(u, f - 1)) / (2 * n);
  }
  return { texture: io(h, t), extent: e, data: h, size: t, ...Jd(r, s, c, t, n) };
}
const jd = (
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
function ep(i, e, t) {
  const n = new ut(t, t, {
    wrapS: 1e3,
    wrapT: 1e3,
    minFilter: 1008,
    magFilter: 1006,
    generateMipmaps: !0,
    depthBuffer: !1,
    anisotropy: i.capabilities.getMaxAnisotropy()
  }), r = rn(e);
  return new jn(r).render(i, n), r.dispose(), i.setRenderTarget(null), n.texture;
}
function tp(i) {
  return { foam: ep(i, jd, 512) };
}
const tn = 6360, xi = 6460, ao = 0.01, np = 256, ip = 64, cr = 32, so = 192, oo = 108;
function rp(i) {
  const e = i.turbidity * i.turbidity;
  return {
    rayleigh: [5802e-6, 0.013558, 0.0331].map((t) => t * i.rayleigh),
    mieScattering: 3996e-6 * e,
    mieExtinction: 444e-5 * e,
    ozone: [65e-5, 1881e-6, 85e-6]
  };
}
function ap(i, e, t) {
  const n = i * (2 * tn + i) + t * (2 * (tn + i) * e + t);
  return n / (Math.sqrt(tn * tn + n) + tn);
}
function sp(i, e, t, n = [0, 0, 0]) {
  const r = tn + e, a = Math.max(-r * t + Math.sqrt(Math.max(r * r * (t * t - 1) + xi * xi, 0)), 0), s = [0, 0, 0];
  for (let o = 0; o < 40; o++) {
    const l = Math.max(ap(e, t, a * ((o + 0.5) / 40) ** 2), 0), c = (2 * o + 1) * a / 1600, h = Math.exp(-l / 8) * c, f = Math.exp(-l / 1.2) * c, u = Math.max(0, 1 - Math.abs(l - 25) / 15) * c;
    for (let p = 0; p < 3; p++) s[p] += i.rayleigh[p] * h + i.mieExtinction * f + i.ozone[p] * u;
  }
  for (let o = 0; o < 3; o++) n[o] = Math.exp(-s[o]);
  return n;
}
const op = ao, pr = (
  /* glsl */
  `
precision highp float;
precision highp sampler2D;
#define PI 3.14159265359
const float RB = ${tn.toFixed(1)}, RT = ${xi.toFixed(1)}, OBS_H = ${ao};
const float H_TOP = ${Math.sqrt(xi * xi - tn * tn).toFixed(4)};  // sqrt(RT^2 - RB^2)
const float MIE_G = 0.8;
const float GROUND_ALBEDO = 0.1;
const vec2 SKY_RES = vec2(${so}.0, ${oo}.0);
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
), ca = (
  /* glsl */
  `
in vec2 vUv;
out vec4 fragColor;
`
), lo = (
  /* glsl */
  `
float rayleighPhase(float c) { return 0.0596831 * (1.0 + c * c); }
float miePhase(float c) {
  float k = 1.0 + MIE_G * MIE_G - 2.0 * MIE_G * c;
  return (1.0 - MIE_G * MIE_G) / (4.0 * PI * k * sqrt(k));
}
vec3 multiScatter(float h, float muS) {
  vec2 uv = clamp(vec2(muS * 0.5 + 0.5, h / (RT - RB)), 0.0, 1.0);
  return textureLod(uMsLut, toSub(uv, vec2(${cr}.0)), 0.0).rgb;
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
), lp = pr + ca + /* glsl */
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
}`, cp = `#define MS_PASS
` + pr + ca + lo + /* glsl */
`
void main() {
  vec2 uv = fromSub(vUv, vec2(${cr}.0));
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
}`, up = pr + ca + lo + /* glsl */
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
}`, Xr = (i, e) => new ut(i, e, {
  type: 1016,
  depthBuffer: !1,
  generateMipmaps: !1,
  minFilter: 1006,
  magFilter: 1006
});
class hp {
  constructor() {
    this.transRT = Xr(np, ip), this.msRT = Xr(cr, cr), this.skyRT = Xr(so, oo), this.uniforms = {
      uRayleigh: { value: new U() },
      uMie: { value: new Re() },
      uOzone: { value: new U() },
      uSunIllum: { value: 1 },
      uTransLut: { value: this.transRT.texture },
      uMsLut: { value: this.msRT.texture },
      uSkyView: { value: this.skyRT.texture }
    };
    const { uTransLut: e, uMsLut: t, uSkyView: n, ...r } = this.uniforms;
    this.transPass = new jn(rn(lp, r)), this.msPass = new jn(rn(cp, { ...r, uTransLut: e })), this.skyPass = new jn(rn(up, { ...r, uTransLut: e, uMsLut: t, uSunMu: { value: 0 } }));
  }
  // c: atmosphereCoefficients(); sunMu: sun zenith cosine; sunIllum: illuminance at the top
  update(e, t, n, r) {
    const a = this.uniforms;
    a.uRayleigh.value.fromArray(t.rayleigh), a.uMie.value.set(t.mieScattering, t.mieExtinction), a.uOzone.value.fromArray(t.ozone), a.uSunIllum.value = r, this.skyPass.material.uniforms.uSunMu.value = n, this.transPass.render(e, this.transRT), this.msPass.render(e, this.msRT), this.skyPass.render(e, this.skyRT);
  }
}
const Cs = 1024, fp = 2.5, dp = (
  /* glsl */
  `
out vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * mat4(mat3(viewMatrix)) * vec4(position, 1.0);
  gl_Position = p.xyww; // far plane
}`
), pp = (
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
), mp = pr + /* glsl */
`
const float CLOUD_H = ${fp.toFixed(2)};
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
class gp {
  constructor(e) {
    this.renderer = e, this.cubeSize = Cs, this.sunDir = new U(0, 1, 0), this.sunColor = new U(1, 1, 1), this.params = { elevation: 3.5, azimuth: 205, turbidity: 2, rayleigh: 1, cloudCoverage: 0.38, sunIntensity: 9 }, this.atmosphere = new hp(), this.cubeRT = new la(Cs, {
      type: 1016,
      generateMipmaps: !0,
      depthBuffer: !1,
      minFilter: 1008,
      magFilter: 1006
    }), this.cube = this.cubeRT.texture, this.cubePass = new jn(rn(mp, {
      ...this.atmosphere.uniforms,
      uFace: { value: 0 },
      uSunDir: { value: this.sunDir },
      uSunColor: { value: this.sunColor },
      uCloudCoverage: { value: 0 }
    })), this.camera = new oa(), this.background = new Tt(
      new ri(1, 1, 1),
      new Ot({
        glslVersion: ei,
        vertexShader: dp,
        fragmentShader: pp,
        uniforms: { uCube: { value: this.cube }, uSunDir: { value: this.sunDir }, uSunColor: { value: this.sunColor } },
        side: 1,
        depthWrite: !1
      })
    ), this.background.frustumCulled = !1, this.background.renderOrder = 1e3;
  }
  update() {
    const e = this.params, t = this.renderer, n = nn.degToRad(90 - e.elevation), r = nn.degToRad(e.azimuth);
    this.sunDir.setFromSphericalCoords(1, n, r);
    const a = rp(e), s = sp(a, op, Math.max(this.sunDir.y, 0)), o = nn.smoothstep(e.elevation, -2, 2);
    this.sunColor.set(s[0], s[1], s[2]).multiplyScalar(e.sunIntensity * o);
    const l = t.getRenderTarget(), c = t.getActiveCubeFace(), h = t.getActiveMipmapLevel();
    this.atmosphere.update(t, a, this.sunDir.y, Math.PI * e.sunIntensity);
    const f = this.cubePass.material.uniforms;
    f.uCloudCoverage.value = e.cloudCoverage;
    for (let u = 0; u < 6; u++)
      f.uFace.value = u, this.cube.generateMipmaps = u === 5, t.setRenderTarget(this.cubeRT, u), t.render(this.cubePass.mesh, this.camera);
    t.setRenderTarget(l, c, h), this.cube.needsPMREMUpdate = !0;
  }
}
function Qi(i, e, t) {
  let n = Math.imul(i, 374761393) ^ Math.imul(e, 668265263) ^ Math.imul(t, 2147483647);
  return n = Math.imul(n ^ n >>> 13, 1274126177), ((n ^ n >>> 16) >>> 0) / 4294967295;
}
function co(i, e, t = 0) {
  const n = Math.floor(i), r = Math.floor(e), a = i - n, s = e - r, o = a * a * (3 - 2 * a), l = s * s * (3 - 2 * s), c = Qi(n, r, t), h = Qi(n + 1, r, t), f = Qi(n, r + 1, t), u = Qi(n + 1, r + 1, t);
  return (c + (h - c) * o + (f - c) * l + (c - h - f + u) * o * l) * 2 - 1;
}
function Si(i, e, t = 5, n = 0) {
  let r = 0, a = 0.5, s = 0;
  for (let o = 0; o < t; o++) {
    r += a * co(i, e, n + o * 17), s += a;
    const l = 1.6 * i - 1.2 * e, c = 1.2 * i + 1.6 * e;
    i = l, e = c, a *= 0.5;
  }
  return r / s;
}
function _p(i, e, t = 5, n = 0) {
  let r = 0, a = 0.5, s = 0;
  for (let o = 0; o < t; o++) {
    const l = 1 - Math.abs(co(i, e, n + o * 31));
    r += a * l * l, s += a;
    const c = 1.6 * i - 1.2 * e, h = 1.2 * i + 1.6 * e;
    i = c, e = h, a *= 0.5;
  }
  return r / s;
}
const ji = 2400, qr = (i, e, t) => {
  const n = Math.min(1, Math.max(0, (t - i) / (e - i)));
  return n * n * (3 - 2 * n);
};
function Tn(i, e) {
  const t = Si(i * 35e-4 + 11.3, e * 35e-4 - 4.1, 4, 3), n = Math.hypot(i - 40 * t, e + 30 * t) * (1 + 0.32 * Si(i * 3e-3, e * 3e-3, 3, 7));
  let r = 62 * Math.exp(-((n / 190) ** 2)) + 15 * Math.exp(-((n / 430) ** 2)) - 10;
  r -= 32 * qr(380, 1100, n);
  const a = qr(4, 40, r);
  return r += a * 26 * (_p(i * 9e-3, e * 9e-3, 5, 1) - 0.45), r > 0 && r < 5 ? r *= 0.55 + 0.09 * r : r <= 0 && r > -14 && (r = -14 * Math.pow(-r / 14, 1.8)), r += 1.2 * Si(i * 0.05, e * 0.05, 3, 9) * qr(-30, 2, r), r;
}
function vp(i, e = 1e-4) {
  e = Math.max(e, Number.EPSILON);
  const t = {}, n = i.getIndex(), r = i.getAttribute("position"), a = n ? n.count : r.count;
  let s = 0;
  const o = Object.keys(i.attributes), l = {}, c = {}, h = [], f = ["getX", "getY", "getZ", "getW"], u = ["setX", "setY", "setZ", "setW"];
  for (let M = 0, R = o.length; M < R; M++) {
    const S = o[M], y = i.attributes[S];
    l[S] = new y.constructor(
      new y.array.constructor(y.count * y.itemSize),
      y.itemSize,
      y.normalized
    );
    const b = i.morphAttributes[S];
    b && (c[S] || (c[S] = []), b.forEach((A, _) => {
      const w = new A.array.constructor(A.count * A.itemSize);
      c[S][_] = new A.constructor(w, A.itemSize, A.normalized);
    }));
  }
  const p = e * 0.5, v = Math.log10(1 / e), T = Math.pow(10, v), g = p * T;
  for (let M = 0; M < a; M++) {
    const R = n ? n.getX(M) : M;
    let S = "";
    for (let y = 0, b = o.length; y < b; y++) {
      const A = o[y], _ = i.getAttribute(A), w = _.itemSize;
      for (let C = 0; C < w; C++)
        S += `${Math.trunc(_[f[C]](R) * T + g)},`;
    }
    if (S in t)
      h.push(t[S]);
    else {
      for (let y = 0, b = o.length; y < b; y++) {
        const A = o[y], _ = i.getAttribute(A), w = i.morphAttributes[A], C = _.itemSize, F = l[A], B = c[A];
        for (let H = 0; H < C; H++) {
          const N = f[H], G = u[H];
          if (F[G](s, _[N](R)), w)
            for (let Z = 0, V = w.length; Z < V; Z++)
              B[Z][G](s, w[Z][N](R));
        }
      }
      t[S] = s, h.push(s), s++;
    }
  }
  const d = i.clone();
  for (const M in i.attributes) {
    const R = l[M];
    if (d.setAttribute(M, new R.constructor(
      R.array.slice(0, s * R.itemSize),
      R.itemSize,
      R.normalized
    )), M in c)
      for (let S = 0; S < c[M].length; S++) {
        const y = c[M][S];
        d.morphAttributes[M][S] = new y.constructor(
          y.array.slice(0, s * y.itemSize),
          y.itemSize,
          y.normalized
        );
      }
  }
  return d.setIndex(h), d;
}
function xp(i = 384, e = 256) {
  const t = new bi(ji, ji, i, i);
  t.rotateX(-Math.PI / 2);
  const n = t.attributes.position;
  for (let l = 0; l < n.count; l++) n.setY(l, Tn(n.getX(l), n.getZ(l)));
  const r = t.index.array, a = [];
  for (let l = 0; l < r.length; l += 3)
    Math.max(n.getY(r[l]), n.getY(r[l + 1]), n.getY(r[l + 2])) > -34 && a.push(r[l], r[l + 1], r[l + 2]);
  t.setIndex(a), t.computeVertexNormals(), t.computeBoundingSphere();
  const s = new Float32Array(e * e);
  for (let l = 0; l < e; l++)
    for (let c = 0; c < e; c++) {
      const h = ((c + 0.5) / e - 0.5) * ji, f = ((l + 0.5) / e - 0.5) * ji;
      s[l * e + c] = Tn(h, f);
    }
  const o = new ti(s, e, e, 1028, 1015);
  return o.minFilter = o.magFilter = 1006, o.wrapS = o.wrapT = 1001, o.needsUpdate = !0, { geometry: t, heightMap: o };
}
const Qr = Zn[2], Ps = 1 / 1.33, Sp = 16, Mp = [
  { res: 512, format: 1028 },
  { res: 256, format: 1030 }
], yp = [
  { depth: 1.5, target: 0, channel: 0, cells: 128, margin: 6 },
  // 0.38 m
  { depth: 4, target: 1, channel: 0, cells: 64, margin: 7 },
  // 0.94 m
  { depth: 10, target: 1, channel: 1, cells: 32, margin: 8 }
  // 2.25 m
], bn = (i) => i.toPrecision(9), [er, tr, Ds] = yp.map((i) => bn(i.depth));
`${bn(Ps)}${bn(Ps)}${bn(Qr)}`;
`${bn(Sp)}`;
const Ep = (
  /* glsl */
  `
uniform sampler2D uCaustics, uCausticsDeep;
const float CAUSTIC_TEXELS_PER_M = ${bn(Mp[0].res / Qr)};
float waveCaustic(vec2 entryXZ, float depth, float lod) {
  vec2 uv = entryXZ * ${bn(1 / Qr)};
  float v = textureLod(uCaustics, uv, lod).r;
  if (depth > ${er}) {
    // deep texels are 2x the near ones; past the deepest slice keep it, one mip blurrier
    // per doubling of depth
    vec2 d = textureLod(uCausticsDeep, uv, max(lod - 1.0, 0.0) + log2(max(depth / ${Ds}, 1.0))).rg;
    v = depth < ${tr} ? mix(v, d.r, (depth - ${er}) / (${tr} - ${er}))
                      : mix(d.r, d.g, clamp((depth - ${tr}) / (${Ds} - ${tr}), 0.0, 1.0));
  }
  return mix(1.0, v, clamp(depth / ${er}, 0.0, 1.0));   // no caustic at zero depth
}
`
);
new ze();
const Tp = (
  /* glsl */
  `
varying vec3 vWPos;
varying vec3 vWNrm;
`
), bp = (
  /* glsl */
  `
varying vec3 vWPos;
varying vec3 vWNrm;
uniform samplerCube uSkyCube;
uniform vec3 uAbsorption;
uniform vec3 uSunDirT;
uniform float uCausticStrength;
uniform float uFogDensity;
${Ep}
${js}
${to}
${Id}
float th(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float tn(vec2 p) { vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(th(i), th(i + vec2(1, 0)), u.x), mix(th(i + vec2(0, 1)), th(i + 1.0), u.x), u.y); }
// ripple marks: the phase along d (wavenumber w) is warped by noise of scale s and
// amplitude a (metres along d), so crests meander and fork where the warp gets steep
float ripplePhase(vec2 p, vec2 d, float w, float s, float a) {
  return w * (dot(p, d) + (tn(p * s) - 0.5) * a + (tn(p * s * 0.27 + 4.0) - 0.5) * a * 3.0);
}
// slope of h = amp (sin ph - 0.25 cos 2ph): sharp crests, broad troughs
vec2 rippleSlope(vec2 p, vec2 d, float w, float s, float a, float amp) {
  float ph = ripplePhase(p, d, w, s, a);
  vec2 grad = (vec2(ripplePhase(p + vec2(0.01, 0.0), d, w, s, a), ripplePhase(p + vec2(0.0, 0.01), d, w, s, a)) - ph) / 0.01;
  return grad * amp * (cos(ph) + 0.5 * sin(2.0 * ph));
}
uniform mat4 uSunShadowMatrix;
`
), wp = (
  /* glsl */
  `
  float hgt = vWPos.y;
  float flat_ = clamp(vWNrm.y, 0.0, 1.0);
  float n1 = tn(vWPos.xz * 0.08), n2 = tn(vWPos.xz * 0.6), n3 = tn(vWPos.xz * 0.013);
  vec3 sand = mix(vec3(0.80, 0.71, 0.53), vec3(0.72, 0.62, 0.45), n1) * (0.92 + 0.16 * n2);
  vec3 seabed = mix(vec3(0.78, 0.72, 0.56), vec3(0.62, 0.58, 0.44), n1 * n3);
  vec3 grass = mix(vec3(0.20, 0.30, 0.10), vec3(0.33, 0.37, 0.15), n1) * (0.85 + 0.3 * n2);
  vec3 rock = mix(vec3(0.33, 0.31, 0.29), vec3(0.45, 0.41, 0.36), n2) * (0.8 + 0.4 * n3);
#ifdef ROCK
  vec3 albedo = rock * mix(0.9, 1.15, n1);
#else
  float sandLine = 2.4 + 1.6 * n3 + 0.8 * n1;
  vec3 albedo = hgt < 0.0 ? seabed : sand;
  albedo = mix(albedo, grass, smoothstep(sandLine, sandLine + 1.5, hgt) * smoothstep(0.62, 0.8, flat_));
  albedo = mix(albedo, rock, smoothstep(0.78, 0.62, flat_) * smoothstep(-6.0, 1.0, hgt));
  albedo = mix(albedo, rock * 1.1, smoothstep(38.0, 52.0, hgt + n1 * 8.0));
#endif
  // wet band above the waterline, plus where the swash has run (dries over seconds)
  vec3 sw = swash(vWPos.xz, hgt);
  float wet = max(1.0 - smoothstep(0.35, 1.3 + 0.5 * n1, hgt), sw.z);
  albedo *= mix(1.0, 0.58, wet);
  // the swash film itself: a faint water tint and foam on its leading edge
  float film = smoothstep(0.0, 0.015, sw.x) * step(0.0, hgt);
  albedo *= mix(vec3(1.0), vec3(0.78, 0.88, 0.92), film);
  albedo = mix(albedo, vec3(0.92), sw.y * (0.5 + 0.5 * n2));
  diffuseColor.rgb = albedo;
`
), Ap = (
  /* glsl */
  `
#ifndef ROCK
  {
    vec2 fw = fwidth(vWPos.xz);
    float px = max(fw.x, fw.y);
    if (px < 0.5) {   // both ripple bands are faded out beyond this
    float sandMask = (1.0 - smoothstep(sandLine - 0.5, sandLine + 0.5, hgt)) * smoothstep(0.85, 0.95, flat_);
    sandMask *= mix(1.0, 0.25, smoothstep(-0.3, 0.6, hgt)); // dry sand: faint wind ripples only
    // long wave-formed ripples (~1.6 m) and short ones (~0.3 m), each fading in and out
    // in patches
    vec2 p = vWPos.xz;
    vec2 d1 = normalize(vec2(0.8, 0.6) + (vec2(tn(p * 0.02), tn(p * 0.02 + 5.0)) - 0.5));
    float a1 = 0.02 * (0.3 + 0.7 * smoothstep(0.25, 0.75, tn(p * 0.06 + 11.0)));
    vec2 g = rippleSlope(p, d1, 3.9, 0.35, 0.8, a1) * (1.0 - smoothstep(0.15, 0.5, px));
    if (px < 0.09) {
      float a2 = 0.002 * (0.3 + 0.7 * smoothstep(0.25, 0.75, tn(p * 0.15 + 3.0)));
      g += rippleSlope(p, normalize(d1 + vec2(-d1.y, d1.x) * 0.3), 21.0, 2.2, 0.1, a2) * (1.0 - smoothstep(0.03, 0.09, px));
    }
    vec3 nW = normalize(vWNrm - vec3(g.x, 0.0, g.y) * sandMask);
    normal = normalize((viewMatrix * vec4(nW, 0.0)).xyz);
    }
  }
#endif
`
), Rp = (
  /* glsl */
  `
  float wdepth = max(-vWPos.y, 0.0);
  // sun and sky light reaching the bed through the water column (the sun along its
  // refracted path)
  vec3 rsun = refract(-uSunDirT, vec3(0.0, 1.0, 0.0), 1.0 / 1.33);
  float sunPath = wdepth / max(-rsun.y, 0.1);
  diffuseColor.rgb *= exp(-uAbsorption * (sunPath * 0.6 + wdepth * 0.4));
`
), Cp = (
  /* glsl */
  `
    getDirectionalLightInfo( directionalLight, directLight );
    float under = smoothstep(0.05, -0.25, vWPos.y);
    vec3 shadowAt = vWPos + vWNrm * 0.04;
    bool viaSurface = false;
    if (under > 0.0) {
      vec3 rsun = refract(-uSunDirT, vec3(0.0, 1.0, 0.0), 1.0 / 1.33);
      viaSurface = rsun.y < -0.05 && under > 0.5;
      if (viaSurface) shadowAt = vec3(vWPos.x - rsun.x / rsun.y * vWPos.y, 0.05, vWPos.z - rsun.z / rsun.y * vWPos.y);
      directLight.direction = normalize(mix(directLight.direction, (viewMatrix * vec4(-rsun, 0.0)).xyz, under));
      float Ft = 0.02 + 0.98 * pow(1.0 - max(uSunDirT.y, 0.0), 5.0);
      directLight.color *= 1.0 - Ft * under;
    }
    directLight.color *= floatShadow(shadowAt);
#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    vec4 sunShadowCoord = viaSurface ? uSunShadowMatrix * vec4(shadowAt, 1.0) : vDirectionalShadowCoord[ 0 ];
#endif
`
), Pp = Ne.lights_fragment_begin.replace("getDirectionalLightInfo( directionalLight, directLight );", Cp).replace("vDirectionalShadowCoord[ i ]", "sunShadowCoord"), Dp = (
  /* glsl */
  `
  roughnessFactor = mix(mix(roughnessFactor, 0.32, wet * step(0.0, hgt)), 0.06, film);
`
), Lp = (
  /* glsl */
  `
  if (wdepth > 0.0 && rsun.y < -0.05) {
    vec2 entry = vWPos.xz + rsun.xz / rsun.y * wdepth;   // where this light entered the surface
    vec2 fwc = fwidth(entry);
    float c = waveCaustic(entry, wdepth, log2(max(max(fwc.x, fwc.y) * CAUSTIC_TEXELS_PER_M, 1.0)));
    reflectedLight.directDiffuse *= max(mix(1.0, c, uCausticStrength), 0.0);
  }
`
), Fp = (
  /* glsl */
  `
  vec3 fdir = normalize(vWPos - cameraPosition);
  float fogAmt = 1.0 - exp(-length(vWPos - cameraPosition) * uFogDensity);
  outgoingLight = mix(outgoingLight, textureLod(uSkyCube, vec3(fdir.x, max(fdir.y, 0.0), fdir.z), 3.0).rgb, fogAmt);
`
);
function Yr(i, e, t) {
  const n = t !== "prop";
  t === "rock" && (i.defines = { ...i.defines, ROCK: "" }), i.onBeforeCompile = (r) => {
    Object.assign(r.uniforms, e), r.vertexShader = r.vertexShader.replace("#include <common>", `#include <common>
` + Tp).replace("#include <project_vertex>", `#include <project_vertex>
  vec4 wp = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
  wp = instanceMatrix * wp;
#endif
  vWPos = (modelMatrix * wp).xyz;
  vec3 wn = objectNormal;
#ifdef USE_INSTANCING
  wn = mat3(instanceMatrix) * wn;
#endif
  vWNrm = normalize(mat3(modelMatrix) * wn);`), r.fragmentShader = r.fragmentShader.replace("#include <common>", `#include <common>
` + bp).replace("#include <map_fragment>", `#include <map_fragment>
` + (n ? wp : "") + Rp).replace("#include <roughnessmap_fragment>", `#include <roughnessmap_fragment>
` + (n ? Dp : "")).replace("#include <normal_fragment_maps>", `#include <normal_fragment_maps>
` + (n ? Ap : "")).replace("#include <lights_fragment_begin>", Pp).replace("#include <lights_fragment_end>", `#include <lights_fragment_end>
` + Lp).replace("#include <opaque_fragment>", Fp + "#include <opaque_fragment>");
  }, i.customProgramCacheKey = () => "gelatin-" + t;
}
function Ip() {
  let i = new aa(1, 4);
  i.deleteAttribute("normal"), i.deleteAttribute("uv"), i = vp(i);
  const e = i.attributes.position, t = new U();
  for (let n = 0; n < e.count; n++) {
    t.fromBufferAttribute(e, n);
    const r = Si(t.x * 1.4 + 3, t.z * 1.4 + t.y * 0.7, 5, 21), a = Math.abs(Si(t.x * 3.1, t.y * 3.1 + t.z, 3, 5));
    t.multiplyScalar(1 + 0.38 * r - 0.12 * a), t.y < -0.2 && (t.y = -0.2 + (t.y + 0.2) * 0.4), e.setXYZ(n, t.x, t.y, t.z);
  }
  return i.computeVertexNormals(), i;
}
function Up(i, e) {
  const t = [];
  for (let n = 0; n < i * 6 && t.length < i; n++) {
    const r = e() * Math.PI * 2;
    let a = 150;
    for (; a < 700 && Tn(Math.cos(r) * a, Math.sin(r) * a) > 0; ) a += 4;
    a += (e() - 0.6) * 40;
    const s = Math.cos(r) * a, o = Math.sin(r) * a, l = Tn(s, o);
    if (l < -5 || l > 6) continue;
    const c = 1.5 + Math.pow(e(), 2.2) * 9;
    t.push({ x: s, z: o, y: l - c * 0.15, s: c });
    for (let h = 0; h < 3 && t.length < i; h++) {
      const f = s + (e() - 0.5) * c * 4, u = o + (e() - 0.5) * c * 4, p = c * (0.25 + e() * 0.35);
      t.push({ x: f, z: u, y: Tn(f, u) - p * 0.2, s: p });
    }
  }
  return t;
}
function Np({ sky: i, caustics: e, floatShadow: t, water: n, absorption: r, reflectionLayer: a = 1 }) {
  const s = {
    ...t,
    // shore maps + wave settings for the swash (same objects as the water's)
    ...Object.fromEntries(["uShore", "uTravel", "uShoreExtent", "uTime", "uShoreWave", "uSwellDir"].map((S) => [S, n[S]])),
    ...e,
    uSkyCube: { value: i.cube },
    uAbsorption: { value: r },
    uSunDirT: { value: i.sunDir },
    uSunShadowMatrix: { value: new Qe() },
    // the sun light's shadow.matrix (main.js)
    uCausticStrength: { value: 1 },
    uFogDensity: { value: 5555555555555556e-20 }
  }, { geometry: o } = xp(384), l = new Ka({ roughness: 0.92, metalness: 0, envMapIntensity: 0.9 });
  Yr(l, s, "terrain");
  const c = new Tt(o, l);
  c.castShadow = c.receiveShadow = !0;
  let h = 7;
  const f = () => (h = Math.imul(h, 1664525) + 1013904223 >>> 0) / 4294967296, u = Up(90, f), p = new Ka({ roughness: 0.85, metalness: 0, envMapIntensity: 0.9 });
  Yr(p, s, "rock");
  const v = new ll(Ip(), p, u.length), T = new Qe(), g = new An(), d = new sn(), M = new U();
  u.forEach((S, y) => {
    d.set(f() * 0.6, f() * Math.PI * 2, f() * 0.6), M.set(S.s * (0.8 + f() * 0.6), S.s * (0.5 + f() * 0.5), S.s * (0.8 + f() * 0.6)), T.compose(new U(S.x, S.y, S.z), g.setFromEuler(d), M), v.setMatrixAt(y, T);
  }), v.computeBoundingSphere(), v.castShadow = v.receiveShadow = !0;
  const R = new mi();
  R.add(c, v);
  for (const S of [c, v]) S.layers.enable(a);
  return { group: R, uniforms: s, patchProp: (S) => Yr(S, s, "prop") };
}
const nr = 6, jr = 32, Bp = (
  /* glsl */
  `
in vec3 position;
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`
), Op = (
  /* glsl */
  `
precision highp float;
precision highp sampler2D;
in vec2 vUv;
out vec4 fragColor;
`
), Ls = (
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
), Gp = (
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
), zp = (
  /* glsl */
  `
uniform sampler2D tSrc;
uniform vec2 uJitter; // [0,1)^2
void main() {
  float s = 0.0;
  for (int j = 0; j < 4; j++) for (int i = 0; i < 4; i++) {
    vec2 o = (vec2(float(i), float(j)) + uJitter) * 0.25 - 0.5;
    vec3 c = max(texture(tSrc, vUv + o * ${(1 / jr).toFixed(8)}).rgb, 0.0);
    s += log2(clamp(dot(c, vec3(0.2126, 0.7152, 0.0722)), 1e-4, 64.0));
  }
  fragColor = vec4(s * (1.0 / 16.0), 0.0, 0.0, 1.0);
}`
), kp = (
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
), Vp = (
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
), Yn = (i, e, t = {}, n = {}) => new sa({
  glslVersion: ei,
  vertexShader: Bp,
  fragmentShader: Op + i,
  uniforms: e,
  defines: t,
  depthTest: !1,
  depthWrite: !1,
  ...n
});
class Hp {
  constructor(e) {
    ba(this, "params", {
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
    this.renderer = e, this.geometry = new Lt(), this.geometry.setAttribute("position", new Ct([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3)), this.mesh = new Tt(this.geometry), this.mesh.frustumCulled = !1, this.camera = new ai(-1, 1, 1, -1, 0, 1);
    const t = () => ({ tSrc: { value: null }, uTexel: { value: null } });
    this.matPre = Yn(Ls, { ...t(), uCurve: { value: new He() }, uClamp: { value: 64 } }, { PREFILTER: 1 }), this.matDown = Yn(Ls, t()), this.matUp = Yn(Gp, t(), {}, {
      blending: 5,
      blendEquation: 100,
      blendSrc: 201,
      blendDst: 201
    }), this.matMeter = Yn(zp, { tSrc: { value: null }, uJitter: { value: new Re() } }), this.matAdapt = Yn(kp, {
      tSrc: { value: null },
      tPrev: { value: null },
      uK: { value: new Re(1, 1) },
      uRange: { value: new Re(-8, 4) }
    }), this.matComp = Yn(Vp, {
      tHdr: { value: null },
      tBloom: { value: null },
      tExp: { value: null },
      uExposure: { value: 1 },
      uAuto: { value: 1 },
      uExpo: { value: new U(0.18, 0.05, 20) },
      uBloom: { value: 0 },
      uLook: { value: new Re(1, 1) },
      uFrame: { value: 0 },
      uDroplets: { value: 0 },
      uTime: { value: 0 },
      uAspect: { value: 1 },
      uResY: { value: 1 }
    }), this.levels = [], this.texel = [new Re()];
    for (let a = 0; a < nr; a++)
      this.levels.push(new ut(1, 1, {
        type: 1016,
        format: 1023,
        minFilter: 1006,
        magFilter: 1006,
        wrapS: 1001,
        wrapT: 1001,
        depthBuffer: !1,
        stencilBuffer: !1,
        generateMipmaps: !1
      })), this.texel.push(new Re());
    this.meterRT = new ut(jr, jr, {
      type: 1016,
      format: 1023,
      minFilter: 1006,
      magFilter: 1006,
      depthBuffer: !1,
      stencilBuffer: !1,
      generateMipmaps: !1
    });
    const n = e.extensions.has("EXT_color_buffer_float");
    this.adapt = [0, 1].map(() => new ut(1, 1, {
      type: n ? 1015 : 1016,
      format: 1023,
      minFilter: 1003,
      magFilter: 1003,
      depthBuffer: !1,
      stencilBuffer: !1,
      generateMipmaps: !1
    })), this._cur = 0, this._snap = !0, this._frame = 0, this._time = 0;
    const r = e.getDrawingBufferSize(new Re());
    this.setSize(r.x, r.y);
  }
  setSize(e, t) {
    let n = Math.max(1, Math.floor(e)), r = Math.max(1, Math.floor(t));
    this.matComp.uniforms.uAspect.value = n / r, this.matComp.uniforms.uResY.value = r, this._snap = !0, this.texel[0].set(1 / n, 1 / r);
    for (let a = 0; a < nr; a++)
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
    const o = Math.max(n.keyValue, 1e-4), l = Math.max(Math.min(n.minExposure, n.maxExposure), 1e-4), c = Math.max(n.minExposure, n.maxExposure, 1e-4);
    a.tSrc.value = this.meterRT.texture, a.tPrev.value = this.adapt[this._cur].texture, a.uK.value.set(this._snap ? 1 : 1 - Math.exp(-t * n.adaptUp), this._snap ? 1 : 1 - Math.exp(-t * n.adaptDown)), a.uRange.value.set(Math.log2(o / c), Math.log2(o / l)), this._cur ^= 1, this._pass(this.matAdapt, this.adapt[this._cur]), this._snap = !1;
  }
  render(e, t = 1 / 60) {
    const n = this.renderer, r = this.params, a = this.levels, s = this.texel;
    t = t > 0 ? Math.min(t, 1) : 0, this._frame = this._frame + 1 & 255, this._time = (this._time + t) % 4096;
    const o = n.getRenderTarget(), l = n.autoClear, c = n.info.autoReset;
    n.autoClear = !1, n.info.autoReset = !1, r.autoExposure ? this._meterExposure(e, t) : this._snap = !0;
    const h = r.bloomThreshold, f = Math.max(h * 0.5, 1e-4), u = this.matPre.uniforms;
    if (u.uCurve.value.set(h - f, 2 * f, 0.25 / f, h), u.uClamp.value = r.bloomClamp, r.bloomStrength > 0) {
      this._blit(this.matPre, e, s[0], a[0]);
      for (let v = 1; v < nr; v++) this._blit(this.matDown, a[v - 1].texture, s[v], a[v]);
      for (let v = nr - 2; v >= 0; v--) this._blit(this.matUp, a[v + 1].texture, s[v + 2], a[v]);
    }
    const p = this.matComp.uniforms;
    p.tHdr.value = e, p.tBloom.value = a[0].texture, p.tExp.value = this.adapt[this._cur].texture, p.uExposure.value = r.exposure, p.uAuto.value = r.autoExposure ? 1 : 0, p.uExpo.value.set(r.keyValue, Math.min(r.minExposure, r.maxExposure), Math.max(r.minExposure, r.maxExposure)), p.uLook.value.set(r.contrast, r.saturation), p.uBloom.value = r.bloomStrength, p.uFrame.value = this._frame, p.uDroplets.value = Math.min(Math.max(r.droplets, 0), 1), p.uTime.value = this._time, this._pass(this.matComp, null), n.setRenderTarget(o), n.autoClear = l, n.info.autoReset = c;
  }
  dispose() {
    for (const e of this.levels) e.dispose();
    this.meterRT.dispose();
    for (const e of this.adapt) e.dispose();
    for (const e of [this.matPre, this.matDown, this.matUp, this.matMeter, this.matAdapt, this.matComp]) e.dispose();
    this.geometry.dispose();
  }
}
const Kr = {
  absorption: [0.22, 0.85, 0.1],
  scatter: [0.05, 0, 0.09],
  foam: [0.8, 0.66, 0.88]
};
function Wp() {
  try {
    return !!document.createElement("canvas").getContext("webgl2");
  } catch {
    return !1;
  }
}
function Xp(i) {
  const e = new _n(4, 4);
  e.type = 1014, e.compareFunction = 515, e.minFilter = e.magFilter = 1006;
  const t = new ut(4, 4, { depthTexture: e }), n = i.getRenderTarget();
  return i.setRenderTarget(t), i.clear(!0, !0, !0), i.setRenderTarget(n), e;
}
function qp(i) {
  const e = matchMedia("(prefers-reduced-motion: reduce)").matches, t = i.querySelector(".ocean-stage");
  if (!t || e || !Wp()) {
    t && (t.dataset.ocean = "static");
    return;
  }
  const n = document.createElement("canvas");
  n.setAttribute("aria-hidden", "true"), t.appendChild(n);
  const r = document.createElement("a");
  r.className = "ocean-credit", r.href = "https://github.com/Humpalumps/Ultra-Water", r.target = "_blank", r.rel = "noopener", r.textContent = "海面 · 即時演算 · Ultra Water", t.appendChild(r);
  let a;
  const s = () => {
    t.dataset.ocean = "static", i.classList.remove("has-ocean"), n.remove(), r.remove();
    try {
      a == null || a.dispose();
    } catch {
    }
  };
  try {
    a = new Md({
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
  a.autoClear = !1, a.setClearColor(1973050, 1), a.outputColorSpace = Mi;
  try {
    let H = function(E) {
      const m = nn.degToRad(E);
      let I = 100;
      for (; I < 800 && Tn(Math.cos(m) * I, Math.sin(m) * I) > 0; ) I += 2;
      return new Re(Math.cos(m) * I, Math.sin(m) * I);
    }, j = function(E) {
      const m = E * E * (3 - 2 * E);
      g.position.lerpVectors(be, Ke, m), d.lerpVectors(Me, Oe, m), g.position.y += Math.sin(m * Math.PI) * 80, g.lookAt(d);
    }, Ue = function(E) {
      const m = 0.5 - 0.5 * Math.cos(E % me / me * Math.PI * 2), I = re(58, 6, m), O = re(128, 220, m);
      M.params.elevation = I, M.params.azimuth = O, M.params.turbidity = re(1.4, 4, m), M.params.rayleigh = re(1, 1.35, m), M.params.cloudCoverage = re(0.1, 0.34, m), M.params.sunIntensity = re(12, 7, m), Ce < 0 || E - Ce >= 0.12 ? (M.update(), Ce = E) : M.sunDir.setFromSphericalCoords(1, nn.degToRad(90 - I), nn.degToRad(O)), F.position.copy(M.sunDir).multiplyScalar(2e3);
      const X = Math.max(M.sunColor.x, 1e-4);
      F.color.setRGB(M.sunColor.x / X, M.sunColor.y / X, M.sunColor.z / X), F.intensity = Math.PI * Math.min(X, 8), A.uniforms.uAbsorption.value.set(re(0.5, 0.1, m), re(0.06, 0.28, m), re(0.04, 0.95, m)), A.uniforms.uScatterColor.value.setRGB(re(0.01, 0.16, m), re(0.095, 0.045, m), re(0.12, 0.012, m)), A.uniforms.uFoamTint.value.setRGB(re(0.9, 0.98, m), re(0.95, 0.64, m), re(0.98, 0.38, m)), t.dataset.elev = String(Math.round(I));
    }, ke = function() {
      const E = Math.max(1, t.clientWidth), m = Math.max(1, t.clientHeight), I = T ? 1 : 1.25;
      a.setPixelRatio(Math.min(window.devicePixelRatio || 1, I)), a.setSize(E, m, !1), g.aspect = E / m, g.updateProjectionMatrix();
      const O = a.getDrawingBufferSize(new Re());
      De == null || De.dispose(), De = new ut(O.x, O.y, {
        type: 1016,
        samples: 2,
        generateMipmaps: !1,
        depthTexture: new _n(O.x, O.y, 1015)
      }), A.uniforms.uSceneColor.value = De.texture, A.uniforms.uSceneDepth.value = De.depthTexture, A.uniforms.uResolution.value.set(O.x, O.y), ct.setSize(O.x, O.y);
    }, it = function() {
      return et && !document.hidden && t.clientWidth > 0 && t.clientHeight > 0;
    }, rt = function() {
      t.dataset.ocean = it() && Fe ? "running" : "paused";
    }, D = function(E) {
      if (Fe = 0, !it()) {
        gt = E, rt();
        return;
      }
      const m = Math.min(0.05, Math.max(0, (E - gt) / 1e3));
      if (gt = E, ht += m, Ue(ht), q === "move")
        J = Math.min(1, J + m / Y), j(J), t.dataset.shot = J >= 1 ? V[te].name : "move", J >= 1 && (q = "hold", ee = 0, g.position.copy(Ke), d.copy(Oe), g.lookAt(d));
      else if (ee += m, g.position.copy(V[te].pos), d.copy(V[te].target), g.lookAt(d), ee >= Xe) {
        const I = (te + 1) % V.length;
        be.copy(V[te].pos), Me.copy(V[te].target), Ke.copy(V[I].pos), Oe.copy(V[I].target), te = I, q = "move", J = 0, t.dataset.shot = "move";
      }
      R.update(m), A.update(g, ht % 3600), a.setRenderTarget(De), a.clear(!0, !0, !1), a.render(C, g), a.render(B, g), a.setRenderTarget(null), ct.render(De.texture, m), Fe = requestAnimationFrame(D), rt();
    }, ft = function() {
      Fe || (gt = performance.now(), Fe = requestAnimationFrame(D)), rt();
    };
    var o = H, l = j, c = Ue, h = ke, f = it, u = rt, p = D, v = ft;
    const T = matchMedia("(pointer: coarse)").matches, g = new Nt(46, 1, 0.5, 8e4), d = new U(), M = new gp(a);
    M.params.elevation = 26, M.params.azimuth = 214, M.params.cloudCoverage = 0.22, M.params.turbidity = 2.4, M.update();
    const R = new Pd(a, Qs()), S = Qd(Tn, 1800, 256), y = tp(a), b = new Dd(32);
    b.clear(a);
    const A = new Bd(R, S, M, b.uniforms);
    A.uniforms.uFoamTex.value = y.foam, A.uniforms.uReflection.value = new ti(new Uint8Array(4), 1, 1), A.uniforms.uReflection.value.needsUpdate = !0, A.uniforms.uShadowMap.value = Xp(a), A.uniforms.uAbsorption.value.fromArray(Kr.absorption), A.uniforms.uScatterColor.value.fromArray(Kr.scatter), A.uniforms.uFoamTint.value.fromArray(Kr.foam), A.uniforms.uGlint.value = 0.45;
    const _ = new ti(new Uint8Array(64).fill(255), 4, 4);
    _.wrapS = _.wrapT = 1e3, _.magFilter = 1006, _.minFilter = 1008, _.generateMipmaps = !0, _.needsUpdate = !0;
    const w = Np({
      sky: M,
      caustics: { uCaustics: { value: _ }, uCausticsDeep: { value: _ } },
      floatShadow: b.uniforms,
      water: A.uniforms,
      absorption: A.uniforms.uAbsorption.value
    });
    w.uniforms.uCausticStrength.value = 0, w.group.traverse((E) => {
      E.castShadow = E.receiveShadow = !1;
    });
    const C = new Ga();
    C.environment = M.cube;
    const F = new xl(16773860, 3.4);
    F.position.copy(M.sunDir).multiplyScalar(2e3), C.add(M.background, w.group, F, new Sl(10399956, 0.45));
    const B = new Ga();
    B.add(A.mesh);
    const G = Math.atan2(M.sunDir.z, M.sunDir.x) + 1.9, Z = H(nn.radToDeg(G)), V = [
      { name: "ocean", pos: new U(1680, 7.2, 420), target: new U(2480, 1.4, 1280) },
      {
        name: "beach",
        pos: new U(
          Z.x + Math.cos(G) * 35 + Math.sin(G) * 40,
          3.2,
          Z.y + Math.sin(G) * 35 - Math.cos(G) * 40
        ),
        target: new U(
          Z.x - Math.sin(G) * 30,
          0.4,
          Z.y + Math.cos(G) * 30
        )
      }
    ];
    let te = 0;
    g.position.copy(V[0].pos), d.copy(V[0].target), g.lookAt(d), t.dataset.shot = V[0].name;
    let q = "hold", J = 0, ee = 0;
    const be = new U(), Me = new U(), Ke = new U(), Oe = new U(), Xe = 10, Y = 3.2, me = 20;
    let Ce = -1;
    const re = (E, m, I) => E + (m - E) * I, ct = new Hp(a);
    ct.params.bloomStrength = 0, ct.params.exposure = 1.05;
    let De = null;
    new ResizeObserver(ke).observe(t), ke();
    let Fe = 0, et = !0, ht = 0, gt = performance.now();
    new IntersectionObserver((E) => {
      et = E.some((m) => m.isIntersecting), et ? ft() : rt();
    }, { threshold: 0 }).observe(i), document.addEventListener("visibilitychange", () => {
      document.hidden ? rt() : ft();
    }), i.classList.add("has-ocean"), ft();
  } catch {
    s();
  }
}
const Fs = document.querySelector(".hero");
Fs && qp(Fs);
