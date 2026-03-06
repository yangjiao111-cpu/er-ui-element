var t = "object" == typeof global && global && global.Object === Object && global, e = "object" == typeof self && self && self.Object === Object && self, r = t || e || Function("return this")(), n = r.Symbol, o = Object.prototype, a = o.hasOwnProperty, i = o.toString, c = n ? n.toStringTag : void 0;
var u = Object.prototype.toString;
var s = n ? n.toStringTag : void 0;
function baseGetTag(t2) {
  return null == t2 ? void 0 === t2 ? "[object Undefined]" : "[object Null]" : s && s in Object(t2) ? (
    /**
    * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
    *
    * @private
    * @param {*} value The value to query.
    * @returns {string} Returns the raw `toStringTag`.
    */
    function(t3) {
      var e2 = a.call(t3, c), r2 = t3[c];
      try {
        t3[c] = void 0;
        var n2 = true;
      } catch (t4) {
      }
      var o2 = i.call(t3);
      n2 && (e2 ? t3[c] = r2 : delete t3[c]);
      return o2;
    }(t2)
  ) : (
    /**
    * Converts `value` to a string using `Object.prototype.toString`.
    *
    * @private
    * @param {*} value The value to convert.
    * @returns {string} Returns the converted string.
    */
    function(t3) {
      return u.call(t3);
    }(t2)
  );
}
function isObjectLike(t2) {
  return null != t2 && "object" == typeof t2;
}
function isSymbol(t2) {
  return "symbol" == typeof t2 || isObjectLike(t2) && "[object Symbol]" == baseGetTag(t2);
}
function arrayMap(t2, e2) {
  for (var r2 = -1, n2 = null == t2 ? 0 : t2.length, o2 = Array(n2); ++r2 < n2; ) {
    o2[r2] = e2(t2[r2], r2, t2);
  }
  return o2;
}
var f = Array.isArray, l = n ? n.prototype : void 0, b = l ? l.toString : void 0;
function baseToString(t2) {
  if ("string" == typeof t2) {
    return t2;
  }
  if (f(t2)) {
    return arrayMap(t2, baseToString) + "";
  }
  if (isSymbol(t2)) {
    return b ? b.call(t2) : "";
  }
  var e2 = t2 + "";
  return "0" == e2 && 1 / t2 == -1 / 0 ? "-0" : e2;
}
var p = /\s/;
var y = /^\s+/;
function baseTrim(t2) {
  return t2 ? t2.slice(0, function(t3) {
    for (var e2 = t3.length; e2-- && p.test(t3.charAt(e2)); ) {
    }
    return e2;
  }(t2) + 1).replace(y, "") : t2;
}
function isObject(t2) {
  var e2 = typeof t2;
  return null != t2 && ("object" == e2 || "function" == e2);
}
var v = /^[-+]0x[0-9a-f]+$/i, h = /^0b[01]+$/i, j = /^0o[0-7]+$/i, d = parseInt;
function toNumber(t2) {
  if ("number" == typeof t2) {
    return t2;
  }
  if (isSymbol(t2)) {
    return NaN;
  }
  if (isObject(t2)) {
    var e2 = "function" == typeof t2.valueOf ? t2.valueOf() : t2;
    t2 = isObject(e2) ? e2 + "" : e2;
  }
  if ("string" != typeof t2) {
    return 0 === t2 ? t2 : +t2;
  }
  t2 = baseTrim(t2);
  var r2 = h.test(t2);
  return r2 || j.test(t2) ? d(t2.slice(2), r2 ? 2 : 8) : v.test(t2) ? NaN : +t2;
}
function identity(t2) {
  return t2;
}
function isFunction(t2) {
  if (!isObject(t2)) {
    return false;
  }
  var e2 = baseGetTag(t2);
  return "[object Function]" == e2 || "[object GeneratorFunction]" == e2 || "[object AsyncFunction]" == e2 || "[object Proxy]" == e2;
}
var g, _ = r["__core-js_shared__"], O = (g = /[^.]+$/.exec(_ && _.keys && _.keys.IE_PROTO || "")) ? "Symbol(src)_1." + g : "";
var m = Function.prototype.toString;
function toSource(t2) {
  if (null != t2) {
    try {
      return m.call(t2);
    } catch (t3) {
    }
    try {
      return t2 + "";
    } catch (t3) {
    }
  }
  return "";
}
var A = /^\[object .+?Constructor\]$/, w = Function.prototype, S = Object.prototype, x = w.toString, k = S.hasOwnProperty, I = RegExp("^" + x.call(k).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(t2) {
  return !(!isObject(t2) || (e2 = t2, O && O in e2)) && (isFunction(t2) ? I : A).test(toSource(t2));
  var e2;
}
function getNative(t2, e2) {
  var r2 = function(t3, e3) {
    return null == t3 ? void 0 : t3[e3];
  }(t2, e2);
  return baseIsNative(r2) ? r2 : void 0;
}
var C = getNative(r, "WeakMap");
var T = Date.now;
var P, L, M, E = function() {
  try {
    var t2 = getNative(Object, "defineProperty");
    t2({}, "", {});
    return t2;
  } catch (t3) {
  }
}(), z = E ? function(t2, e2) {
  return E(t2, "toString", {
    configurable: true,
    enumerable: false,
    value: (r2 = e2, function() {
      return r2;
    }),
    writable: true
  });
  var r2;
} : identity, F = (P = z, L = 0, M = 0, function() {
  var t2 = T(), e2 = 16 - (t2 - M);
  M = t2;
  if (e2 > 0) {
    if (++L >= 800) {
      return arguments[0];
    }
  } else {
    L = 0;
  }
  return P.apply(void 0, arguments);
});
function arrayEach(t2, e2) {
  for (var r2 = -1, n2 = null == t2 ? 0 : t2.length; ++r2 < n2 && false !== e2(t2[r2], r2, t2); ) {
  }
  return t2;
}
var N = /^(?:0|[1-9]\d*)$/;
function isIndex(t2, e2) {
  var r2 = typeof t2;
  return !!(e2 = null == e2 ? 9007199254740991 : e2) && ("number" == r2 || "symbol" != r2 && N.test(t2)) && t2 > -1 && t2 % 1 == 0 && t2 < e2;
}
function baseAssignValue(t2, e2, r2) {
  "__proto__" == e2 && E ? E(t2, e2, {
    configurable: true,
    enumerable: true,
    value: r2,
    writable: true
  }) : t2[e2] = r2;
}
function eq(t2, e2) {
  return t2 === e2 || t2 != t2 && e2 != e2;
}
var U = Object.prototype.hasOwnProperty;
function assignValue(t2, e2, r2) {
  var n2 = t2[e2];
  U.call(t2, e2) && eq(n2, r2) && (void 0 !== r2 || e2 in t2) || baseAssignValue(t2, e2, r2);
}
var B = Math.max;
function isLength(t2) {
  return "number" == typeof t2 && t2 > -1 && t2 % 1 == 0 && t2 <= 9007199254740991;
}
function isArrayLike(t2) {
  return null != t2 && isLength(t2.length) && !isFunction(t2);
}
var D = Object.prototype;
function isPrototype(t2) {
  var e2 = t2 && t2.constructor;
  return t2 === ("function" == typeof e2 && e2.prototype || D);
}
function baseIsArguments(t2) {
  return isObjectLike(t2) && "[object Arguments]" == baseGetTag(t2);
}
var $ = Object.prototype, K = $.hasOwnProperty, V = $.propertyIsEnumerable, G = baseIsArguments(/* @__PURE__ */ function() {
  return arguments;
}()) ? baseIsArguments : function(t2) {
  return isObjectLike(t2) && K.call(t2, "callee") && !V.call(t2, "callee");
};
var H = "object" == typeof exports && exports && !exports.nodeType && exports, W = H && "object" == typeof module && module && !module.nodeType && module, q = W && W.exports === H ? r.Buffer : void 0, R = (q ? q.isBuffer : void 0) || /**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function() {
  return false;
}, J = {};
J["[object Float32Array]"] = J["[object Float64Array]"] = J["[object Int8Array]"] = J["[object Int16Array]"] = J["[object Int32Array]"] = J["[object Uint8Array]"] = J["[object Uint8ClampedArray]"] = J["[object Uint16Array]"] = J["[object Uint32Array]"] = true;
J["[object Arguments]"] = J["[object Array]"] = J["[object ArrayBuffer]"] = J["[object Boolean]"] = J["[object DataView]"] = J["[object Date]"] = J["[object Error]"] = J["[object Function]"] = J["[object Map]"] = J["[object Number]"] = J["[object Object]"] = J["[object RegExp]"] = J["[object Set]"] = J["[object String]"] = J["[object WeakMap]"] = false;
function baseUnary(t2) {
  return function(e2) {
    return t2(e2);
  };
}
var Q = "object" == typeof exports && exports && !exports.nodeType && exports, X = Q && "object" == typeof module && module && !module.nodeType && module, Y = X && X.exports === Q && t.process, Z = function() {
  try {
    var t2 = X && X.require && X.require("util").types;
    return t2 || Y && Y.binding && Y.binding("util");
  } catch (t3) {
  }
}(), tt = Z && Z.isTypedArray, et = tt ? baseUnary(tt) : function(t2) {
  return isObjectLike(t2) && isLength(t2.length) && !!J[baseGetTag(t2)];
}, rt = Object.prototype.hasOwnProperty;
function arrayLikeKeys(t2, e2) {
  var r2 = f(t2), n2 = !r2 && G(t2), o2 = !r2 && !n2 && R(t2), a2 = !r2 && !n2 && !o2 && et(t2), i2 = r2 || n2 || o2 || a2, c2 = i2 ? function(t3, e3) {
    for (var r3 = -1, n3 = Array(t3); ++r3 < t3; ) {
      n3[r3] = e3(r3);
    }
    return n3;
  }(t2.length, String) : [], u2 = c2.length;
  for (var s2 in t2) {
    !e2 && !rt.call(t2, s2) || i2 && // Safari 9 has enumerable `arguments.length` in strict mode.
    ("length" == s2 || // Node.js 0.10 has enumerable non-index properties on buffers.
    o2 && ("offset" == s2 || "parent" == s2) || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a2 && ("buffer" == s2 || "byteLength" == s2 || "byteOffset" == s2) || // Skip index properties.
    isIndex(s2, u2)) || c2.push(s2);
  }
  return c2;
}
function overArg(t2, e2) {
  return function(r2) {
    return t2(e2(r2));
  };
}
var nt = overArg(Object.keys, Object), ot = Object.prototype.hasOwnProperty;
function keys(t2) {
  return isArrayLike(t2) ? arrayLikeKeys(t2) : (
    /**
    * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
    *
    * @private
    * @param {Object} object The object to query.
    * @returns {Array} Returns the array of property names.
    */
    function(t3) {
      if (!isPrototype(t3)) {
        return nt(t3);
      }
      var e2 = [];
      for (var r2 in Object(t3)) {
        ot.call(t3, r2) && "constructor" != r2 && e2.push(r2);
      }
      return e2;
    }(t2)
  );
}
var at = Object.prototype.hasOwnProperty;
function baseKeysIn(t2) {
  if (!isObject(t2)) {
    return function(t3) {
      var e3 = [];
      if (null != t3) {
        for (var r3 in Object(t3)) {
          e3.push(r3);
        }
      }
      return e3;
    }(t2);
  }
  var e2 = isPrototype(t2), r2 = [];
  for (var n2 in t2) {
    ("constructor" != n2 || !e2 && at.call(t2, n2)) && r2.push(n2);
  }
  return r2;
}
function keysIn(t2) {
  return isArrayLike(t2) ? arrayLikeKeys(t2, true) : baseKeysIn(t2);
}
var it = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ct = /^\w*$/;
var ut = getNative(Object, "create");
var st = Object.prototype.hasOwnProperty;
var ft = Object.prototype.hasOwnProperty;
function Hash(t2) {
  var e2 = -1, r2 = null == t2 ? 0 : t2.length;
  this.clear();
  for (; ++e2 < r2; ) {
    var n2 = t2[e2];
    this.set(n2[0], n2[1]);
  }
}
Hash.prototype.clear = function() {
  this.__data__ = ut ? ut(null) : {};
  this.size = 0;
};
Hash.prototype.delete = function(t2) {
  var e2 = this.has(t2) && delete this.__data__[t2];
  this.size -= e2 ? 1 : 0;
  return e2;
};
Hash.prototype.get = /**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function(t2) {
  var e2 = this.__data__;
  if (ut) {
    var r2 = e2[t2];
    return "__lodash_hash_undefined__" === r2 ? void 0 : r2;
  }
  return st.call(e2, t2) ? e2[t2] : void 0;
};
Hash.prototype.has = /**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function(t2) {
  var e2 = this.__data__;
  return ut ? void 0 !== e2[t2] : ft.call(e2, t2);
};
Hash.prototype.set = /**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function(t2, e2) {
  var r2 = this.__data__;
  this.size += this.has(t2) ? 0 : 1;
  r2[t2] = ut && void 0 === e2 ? "__lodash_hash_undefined__" : e2;
  return this;
};
function assocIndexOf(t2, e2) {
  for (var r2 = t2.length; r2--; ) {
    if (eq(t2[r2][0], e2)) {
      return r2;
    }
  }
  return -1;
}
var lt = Array.prototype.splice;
function ListCache(t2) {
  var e2 = -1, r2 = null == t2 ? 0 : t2.length;
  this.clear();
  for (; ++e2 < r2; ) {
    var n2 = t2[e2];
    this.set(n2[0], n2[1]);
  }
}
ListCache.prototype.clear = function() {
  this.__data__ = [];
  this.size = 0;
};
ListCache.prototype.delete = /**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function(t2) {
  var e2 = this.__data__, r2 = assocIndexOf(e2, t2);
  if (r2 < 0) {
    return false;
  }
  r2 == e2.length - 1 ? e2.pop() : lt.call(e2, r2, 1);
  --this.size;
  return true;
};
ListCache.prototype.get = function(t2) {
  var e2 = this.__data__, r2 = assocIndexOf(e2, t2);
  return r2 < 0 ? void 0 : e2[r2][1];
};
ListCache.prototype.has = function(t2) {
  return assocIndexOf(this.__data__, t2) > -1;
};
ListCache.prototype.set = function(t2, e2) {
  var r2 = this.__data__, n2 = assocIndexOf(r2, t2);
  if (n2 < 0) {
    ++this.size;
    r2.push([t2, e2]);
  } else {
    r2[n2][1] = e2;
  }
  return this;
};
var bt = getNative(r, "Map");
function getMapData(t2, e2) {
  var r2, n2, o2 = t2.__data__;
  return ("string" == (n2 = typeof (r2 = e2)) || "number" == n2 || "symbol" == n2 || "boolean" == n2 ? "__proto__" !== r2 : null === r2) ? o2["string" == typeof e2 ? "string" : "hash"] : o2.map;
}
function MapCache(t2) {
  var e2 = -1, r2 = null == t2 ? 0 : t2.length;
  this.clear();
  for (; ++e2 < r2; ) {
    var n2 = t2[e2];
    this.set(n2[0], n2[1]);
  }
}
MapCache.prototype.clear = function() {
  this.size = 0;
  this.__data__ = {
    hash: new Hash(),
    map: new (bt || ListCache)(),
    string: new Hash()
  };
};
MapCache.prototype.delete = function(t2) {
  var e2 = getMapData(this, t2).delete(t2);
  this.size -= e2 ? 1 : 0;
  return e2;
};
MapCache.prototype.get = function(t2) {
  return getMapData(this, t2).get(t2);
};
MapCache.prototype.has = function(t2) {
  return getMapData(this, t2).has(t2);
};
MapCache.prototype.set = function(t2, e2) {
  var r2 = getMapData(this, t2), n2 = r2.size;
  r2.set(t2, e2);
  this.size += r2.size == n2 ? 0 : 1;
  return this;
};
function memoize(t2, e2) {
  if ("function" != typeof t2 || null != e2 && "function" != typeof e2) {
    throw new TypeError("Expected a function");
  }
  var memoized = function() {
    var r2 = arguments, n2 = e2 ? e2.apply(this, r2) : r2[0], o2 = memoized.cache;
    if (o2.has(n2)) {
      return o2.get(n2);
    }
    var a2 = t2.apply(this, r2);
    memoized.cache = o2.set(n2, a2) || o2;
    return a2;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var pt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, yt = /\\(\\)?/g, vt = (
  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function(t2) {
    var e2 = memoize(t2, function(t3) {
      500 === r2.size && r2.clear();
      return t3;
    }), r2 = e2.cache;
    return e2;
  }(function(t2) {
    var e2 = [];
    46 === t2.charCodeAt(0) && e2.push("");
    t2.replace(pt, function(t3, r2, n2, o2) {
      e2.push(n2 ? o2.replace(yt, "$1") : r2 || t3);
    });
    return e2;
  })
);
function castPath(t2, e2) {
  return f(t2) ? t2 : function(t3, e3) {
    if (f(t3)) {
      return false;
    }
    var r2 = typeof t3;
    return !("number" != r2 && "symbol" != r2 && "boolean" != r2 && null != t3 && !isSymbol(t3)) || ct.test(t3) || !it.test(t3) || null != e3 && t3 in Object(e3);
  }(t2, e2) ? [t2] : vt(
    /**
    * Converts `value` to a string. An empty string is returned for `null`
    * and `undefined` values. The sign of `-0` is preserved.
    *
    * @static
    * @memberOf _
    * @since 4.0.0
    * @category Lang
    * @param {*} value The value to convert.
    * @returns {string} Returns the converted string.
    * @example
    *
    * _.toString(null);
    * // => ''
    *
    * _.toString(-0);
    * // => '-0'
    *
    * _.toString([1, 2, 3]);
    * // => '1,2,3'
    */
    function(t3) {
      return null == t3 ? "" : baseToString(t3);
    }(t2)
  );
}
function toKey(t2) {
  if ("string" == typeof t2 || isSymbol(t2)) {
    return t2;
  }
  var e2 = t2 + "";
  return "0" == e2 && 1 / t2 == -1 / 0 ? "-0" : e2;
}
function arrayPush(t2, e2) {
  for (var r2 = -1, n2 = e2.length, o2 = t2.length; ++r2 < n2; ) {
    t2[o2 + r2] = e2[r2];
  }
  return t2;
}
var ht = n ? n.isConcatSpreadable : void 0;
function isFlattenable(t2) {
  return f(t2) || G(t2) || !!(ht && t2 && t2[ht]);
}
function flatten(t2) {
  return (null == t2 ? 0 : t2.length) ? function(t3, e2, r2, n2, o2) {
    var a2 = -1, i2 = t3.length;
    r2 || (r2 = isFlattenable);
    o2 || (o2 = []);
    for (; ++a2 < i2; ) {
      var c2 = t3[a2];
      r2(c2) ? arrayPush(o2, c2) : o2[o2.length] = c2;
    }
    return o2;
  }(t2) : [];
}
var jt = overArg(Object.getPrototypeOf, Object), dt = Function.prototype, gt = Object.prototype, _t = dt.toString, Ot = gt.hasOwnProperty, mt = _t.call(Object);
function Stack(t2) {
  var e2 = this.__data__ = new ListCache(t2);
  this.size = e2.size;
}
Stack.prototype.clear = /**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function() {
  this.__data__ = new ListCache();
  this.size = 0;
};
Stack.prototype.delete = function(t2) {
  var e2 = this.__data__, r2 = e2.delete(t2);
  this.size = e2.size;
  return r2;
};
Stack.prototype.get = function(t2) {
  return this.__data__.get(t2);
};
Stack.prototype.has = function(t2) {
  return this.__data__.has(t2);
};
Stack.prototype.set = /**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function(t2, e2) {
  var r2 = this.__data__;
  if (r2 instanceof ListCache) {
    var n2 = r2.__data__;
    if (!bt || n2.length < 199) {
      n2.push([t2, e2]);
      this.size = ++r2.size;
      return this;
    }
    r2 = this.__data__ = new MapCache(n2);
  }
  r2.set(t2, e2);
  this.size = r2.size;
  return this;
};
var At = "object" == typeof exports && exports && !exports.nodeType && exports, wt = At && "object" == typeof module && module && !module.nodeType && module, St = wt && wt.exports === At ? r.Buffer : void 0;
St && St.allocUnsafe;
function stubArray() {
  return [];
}
var xt = Object.prototype.propertyIsEnumerable, kt = Object.getOwnPropertySymbols, It = kt ? function(t2) {
  if (null == t2) {
    return [];
  }
  t2 = Object(t2);
  return function(t3, e2) {
    for (var r2 = -1, n2 = null == t3 ? 0 : t3.length, o2 = 0, a2 = []; ++r2 < n2; ) {
      var i2 = t3[r2];
      e2(i2, r2, t3) && (a2[o2++] = i2);
    }
    return a2;
  }(kt(t2), function(e2) {
    return xt.call(t2, e2);
  });
} : stubArray, Ct = Object.getOwnPropertySymbols ? function(t2) {
  for (var e2 = []; t2; ) {
    arrayPush(e2, It(t2));
    t2 = jt(t2);
  }
  return e2;
} : stubArray;
function getAllKeysIn(t2) {
  return function(t3, e2, r2) {
    var n2 = e2(t3);
    return f(t3) ? n2 : arrayPush(n2, r2(t3));
  }(t2, keysIn, Ct);
}
var Tt = getNative(r, "DataView"), Pt = getNative(r, "Promise"), Lt = getNative(r, "Set"), Mt = "[object Map]", Et = "[object Promise]", zt = "[object Set]", Ft = "[object WeakMap]", Nt = "[object DataView]", Ut = toSource(Tt), Bt = toSource(bt), Dt = toSource(Pt), $t = toSource(Lt), Kt = toSource(C), Vt = baseGetTag;
(Tt && Vt(new Tt(new ArrayBuffer(1))) != Nt || bt && Vt(new bt()) != Mt || Pt && Vt(Pt.resolve()) != Et || Lt && Vt(new Lt()) != zt || C && Vt(new C()) != Ft) && (Vt = function(t2) {
  var e2 = baseGetTag(t2), r2 = "[object Object]" == e2 ? t2.constructor : void 0, n2 = r2 ? toSource(r2) : "";
  if (n2) {
    switch (n2) {
      case Ut:
        return Nt;
      case Bt:
        return Mt;
      case Dt:
        return Et;
      case $t:
        return zt;
      case Kt:
        return Ft;
    }
  }
  return e2;
});
var Gt = Object.prototype.hasOwnProperty;
var Ht = r.Uint8Array;
function cloneArrayBuffer(t2) {
  var e2 = new t2.constructor(t2.byteLength);
  new Ht(e2).set(new Ht(t2));
  return e2;
}
var Wt = /\w*$/;
var qt = n ? n.prototype : void 0, Rt = qt ? qt.valueOf : void 0;
function initCloneByTag(t2, e2, r2) {
  var n2, o2, a2, i2 = t2.constructor;
  switch (e2) {
    case "[object ArrayBuffer]":
      return cloneArrayBuffer(t2);
    case "[object Boolean]":
    case "[object Date]":
      return new i2(+t2);
    case "[object DataView]":
      return a2 = cloneArrayBuffer((o2 = t2).buffer), new o2.constructor(a2, o2.byteOffset, o2.byteLength);
    case "[object Float32Array]":
    case "[object Float64Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object Int32Array]":
    case "[object Uint8Array]":
    case "[object Uint8ClampedArray]":
    case "[object Uint16Array]":
    case "[object Uint32Array]":
      return function(t3) {
        var e3 = cloneArrayBuffer(t3.buffer);
        return new t3.constructor(e3, t3.byteOffset, t3.length);
      }(t2);
    case "[object Map]":
    case "[object Set]":
      return new i2();
    case "[object Number]":
    case "[object String]":
      return new i2(t2);
    case "[object RegExp]":
      return function(t3) {
        var e3 = new t3.constructor(t3.source, Wt.exec(t3));
        e3.lastIndex = t3.lastIndex;
        return e3;
      }(t2);
    case "[object Symbol]":
      return n2 = t2, Rt ? Object(Rt.call(n2)) : {};
  }
}
var Jt = Z && Z.isMap, Qt = Jt ? baseUnary(Jt) : (
  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function(t2) {
    return isObjectLike(t2) && "[object Map]" == Vt(t2);
  }
);
var Xt = Z && Z.isSet, Yt = Xt ? baseUnary(Xt) : (
  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function(t2) {
    return isObjectLike(t2) && "[object Set]" == Vt(t2);
  }
), Zt = "[object Arguments]", te = "[object Function]", ee = "[object Object]", re = {};
re[Zt] = re["[object Array]"] = re["[object ArrayBuffer]"] = re["[object DataView]"] = re["[object Boolean]"] = re["[object Date]"] = re["[object Float32Array]"] = re["[object Float64Array]"] = re["[object Int8Array]"] = re["[object Int16Array]"] = re["[object Int32Array]"] = re["[object Map]"] = re["[object Number]"] = re[ee] = re["[object RegExp]"] = re["[object Set]"] = re["[object String]"] = re["[object Symbol]"] = re["[object Uint8Array]"] = re["[object Uint8ClampedArray]"] = re["[object Uint16Array]"] = re["[object Uint32Array]"] = true;
re["[object Error]"] = re[te] = re["[object WeakMap]"] = false;
function baseClone(t2, e2, r2, n2, o2, a2) {
  var i2;
  r2 && (i2 = o2 ? r2(t2, n2, o2, a2) : r2(t2));
  if (void 0 !== i2) {
    return i2;
  }
  if (!isObject(t2)) {
    return t2;
  }
  var c2 = f(t2);
  if (c2) {
    i2 = /**
    * Initializes an array clone.
    *
    * @private
    * @param {Array} array The array to clone.
    * @returns {Array} Returns the initialized clone.
    */
    function(t3) {
      var e3 = t3.length, r3 = new t3.constructor(e3);
      if (e3 && "string" == typeof t3[0] && Gt.call(t3, "index")) {
        r3.index = t3.index;
        r3.input = t3.input;
      }
      return r3;
    }(t2);
  } else {
    var u2 = Vt(t2), s2 = u2 == te || "[object GeneratorFunction]" == u2;
    if (R(t2)) {
      return t2.slice();
    }
    if (u2 == ee || u2 == Zt || s2 && !o2) {
      i2 = {};
    } else {
      if (!re[u2]) {
        return o2 ? t2 : {};
      }
      i2 = initCloneByTag(t2, u2);
    }
  }
  a2 || (a2 = new Stack());
  var l2 = a2.get(t2);
  if (l2) {
    return l2;
  }
  a2.set(t2, i2);
  Yt(t2) ? t2.forEach(function(n3) {
    i2.add(baseClone(n3, e2, r2, n3, t2, a2));
  }) : Qt(t2) && t2.forEach(function(n3, o3) {
    i2.set(o3, baseClone(n3, e2, r2, o3, t2, a2));
  });
  var b2 = c2 ? void 0 : getAllKeysIn(t2);
  arrayEach(b2 || t2, function(n3, o3) {
    b2 && (n3 = t2[o3 = n3]);
    assignValue(i2, o3, baseClone(n3, e2, r2, o3, t2, a2));
  });
  return i2;
}
var baseFor = function(t2, e2, r2) {
  for (var n2 = -1, o2 = Object(t2), a2 = r2(t2), i2 = a2.length; i2--; ) {
    var c2 = a2[++n2];
    if (false === e2(o2[c2], c2, o2)) {
      break;
    }
  }
  return t2;
};
var ne, oe = (ne = function(t2, e2) {
  return t2 && baseFor(t2, e2, keys);
}, function(t2, e2) {
  if (null == t2) {
    return t2;
  }
  if (!isArrayLike(t2)) {
    return ne(t2, e2);
  }
  for (var r2 = t2.length, n2 = -1, o2 = Object(t2); ++n2 < r2 && false !== e2(o2[n2], n2, o2); ) {
  }
  return t2;
}), now = function() {
  return r.Date.now();
}, ae = Math.max, ie = Math.min;
function debounce(t2, e2, r2) {
  var n2, o2, a2, i2, c2, u2, s2 = 0, f2 = false, l2 = false, b2 = true;
  if ("function" != typeof t2) {
    throw new TypeError("Expected a function");
  }
  e2 = toNumber(e2) || 0;
  if (isObject(r2)) {
    f2 = !!r2.leading;
    a2 = (l2 = "maxWait" in r2) ? ae(toNumber(r2.maxWait) || 0, e2) : a2;
    b2 = "trailing" in r2 ? !!r2.trailing : b2;
  }
  function invokeFunc(e3) {
    var r3 = n2, a3 = o2;
    n2 = o2 = void 0;
    s2 = e3;
    return i2 = t2.apply(a3, r3);
  }
  function shouldInvoke(t3) {
    var r3 = t3 - u2;
    return void 0 === u2 || r3 >= e2 || r3 < 0 || l2 && t3 - s2 >= a2;
  }
  function timerExpired() {
    var t3 = now();
    if (shouldInvoke(t3)) {
      return trailingEdge(t3);
    }
    c2 = setTimeout(timerExpired, function(t4) {
      var r3 = e2 - (t4 - u2);
      return l2 ? ie(r3, a2 - (t4 - s2)) : r3;
    }(t3));
  }
  function trailingEdge(t3) {
    c2 = void 0;
    if (b2 && n2) {
      return invokeFunc(t3);
    }
    n2 = o2 = void 0;
    return i2;
  }
  function debounced() {
    var t3 = now(), r3 = shouldInvoke(t3);
    n2 = arguments;
    o2 = this;
    u2 = t3;
    if (r3) {
      if (void 0 === c2) {
        return function(t4) {
          s2 = t4;
          c2 = setTimeout(timerExpired, e2);
          return f2 ? invokeFunc(t4) : i2;
        }(u2);
      }
      if (l2) {
        clearTimeout(c2);
        c2 = setTimeout(timerExpired, e2);
        return invokeFunc(u2);
      }
    }
    void 0 === c2 && (c2 = setTimeout(timerExpired, e2));
    return i2;
  }
  debounced.cancel = function() {
    void 0 !== c2 && clearTimeout(c2);
    s2 = 0;
    n2 = u2 = o2 = c2 = void 0;
  };
  debounced.flush = function() {
    return void 0 === c2 ? i2 : trailingEdge(now());
  };
  return debounced;
}
function forEach(t2, e2) {
  var r2;
  return (f(t2) ? arrayEach : oe)(t2, "function" == typeof (r2 = e2) ? r2 : identity);
}
function parent(t2, e2) {
  return e2.length < 2 ? t2 : function(t3, e3) {
    for (var r2 = 0, n2 = (e3 = castPath(e3, t3)).length; null != t3 && r2 < n2; ) {
      t3 = t3[toKey(e3[r2++])];
    }
    return r2 && r2 == n2 ? t3 : void 0;
  }(
    t2,
    /**
    * The base implementation of `_.slice` without an iteratee call guard.
    *
    * @private
    * @param {Array} array The array to slice.
    * @param {number} [start=0] The start position.
    * @param {number} [end=array.length] The end position.
    * @returns {Array} Returns the slice of `array`.
    */
    function(t3, e3, r2) {
      var n2 = -1, o2 = t3.length;
      e3 < 0 && (e3 = -e3 > o2 ? 0 : o2 + e3);
      (r2 = r2 > o2 ? o2 : r2) < 0 && (r2 += o2);
      o2 = e3 > r2 ? 0 : r2 - e3 >>> 0;
      e3 >>>= 0;
      for (var a2 = Array(o2); ++n2 < o2; ) {
        a2[n2] = t3[n2 + e3];
      }
      return a2;
    }(e2, 0, -1)
  );
}
var ce = Object.prototype.hasOwnProperty;
function baseUnset(t2, e2) {
  var r2 = -1, n2 = (e2 = castPath(e2, t2)).length;
  if (!n2) {
    return true;
  }
  for (var o2 = null == t2 || "object" != typeof t2 && "function" != typeof t2; ++r2 < n2; ) {
    var a2 = e2[r2];
    if ("string" == typeof a2) {
      if ("__proto__" === a2 && !ce.call(t2, "__proto__")) {
        return false;
      }
      if ("constructor" === a2 && r2 + 1 < n2 && "string" == typeof e2[r2 + 1] && "prototype" === e2[r2 + 1]) {
        if (o2 && 0 === r2) {
          continue;
        }
        return false;
      }
    }
  }
  var i2 = parent(t2, e2);
  return null == i2 || delete i2[toKey(function(t3) {
    var e3 = null == t3 ? 0 : t3.length;
    return e3 ? t3[e3 - 1] : void 0;
  }(e2))];
}
function customOmitClone(t2) {
  return function(t3) {
    if (!isObjectLike(t3) || "[object Object]" != baseGetTag(t3)) {
      return false;
    }
    var e2 = jt(t3);
    if (null === e2) {
      return true;
    }
    var r2 = Ot.call(e2, "constructor") && e2.constructor;
    return "function" == typeof r2 && r2 instanceof r2 && _t.call(r2) == mt;
  }(t2) ? void 0 : t2;
}
var ue = function(t2) {
  return F(function(t3, e2, r2) {
    e2 = B(void 0 === e2 ? t3.length - 1 : e2, 0);
    return function() {
      for (var n2 = arguments, o2 = -1, a2 = B(n2.length - e2, 0), i2 = Array(a2); ++o2 < a2; ) {
        i2[o2] = n2[e2 + o2];
      }
      o2 = -1;
      for (var c2 = Array(e2 + 1); ++o2 < e2; ) {
        c2[o2] = n2[o2];
      }
      c2[e2] = r2(i2);
      return function(t4, e3, r3) {
        switch (r3.length) {
          case 0:
            return t4.call(e3);
          case 1:
            return t4.call(e3, r3[0]);
          case 2:
            return t4.call(e3, r3[0], r3[1]);
          case 3:
            return t4.call(e3, r3[0], r3[1], r3[2]);
        }
        return t4.apply(e3, r3);
      }(t3, this, c2);
    };
  }(t2, void 0, flatten), t2 + "");
}(function(t2, e2) {
  var r2 = {};
  if (null == t2) {
    return r2;
  }
  var n2 = false;
  e2 = arrayMap(e2, function(e3) {
    e3 = castPath(e3, t2);
    n2 || (n2 = e3.length > 1);
    return e3;
  });
  !function(t3, e3, r3) {
    var n3 = !r3;
    r3 || (r3 = {});
    for (var o3 = -1, a2 = e3.length; ++o3 < a2; ) {
      var i2 = e3[o3], c2 = void 0;
      void 0 === c2 && (c2 = t3[i2]);
      n3 ? baseAssignValue(r3, i2, c2) : assignValue(r3, i2, c2);
    }
  }(t2, getAllKeysIn(t2), r2);
  n2 && (r2 = baseClone(r2, 7, customOmitClone));
  for (var o2 = e2.length; o2--; ) {
    baseUnset(r2, e2[o2]);
  }
  return r2;
});
function throttle(t2, e2, r2) {
  var n2 = true, o2 = true;
  if ("function" != typeof t2) {
    throw new TypeError("Expected a function");
  }
  if (isObject(r2)) {
    n2 = "leading" in r2 ? !!r2.leading : n2;
    o2 = !("trailing" in r2) && o2;
  }
  return debounce(t2, e2, {
    leading: n2,
    maxWait: e2,
    trailing: o2
  });
}
export {
  forEach as f,
  ue as o,
  throttle as t
};
