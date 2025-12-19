// エラー抑制のみ（APIラッピングなし）
(() => {
  self.onerror = () => true;
  self.onunhandledrejection = (e) => { e.preventDefault(); };
})();
(() => { var e = { 4322: (e, t, r) => { e.exports = r(5666) }, 1296: (e, t, r) => { var n = /^\s+|\s+$/g, o = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, u = /^0o[0-7]+$/i, i = parseInt, c = "object" == typeof r.g && r.g && r.g.Object === Object && r.g, s = "object" == typeof self && self && self.Object === Object && self, f = c || s || Function("return this")(), l = Object.prototype.toString, p = Math.max, h = Math.min, d = function () { return f.Date.now() }; function v(e) { var t = typeof e; return !!e && ("object" == t || "function" == t) } function m(e) { if ("number" == typeof e) return e; if (function (e) { return "symbol" == typeof e || function (e) { return !!e && "object" == typeof e }(e) && "[object Symbol]" == l.call(e) }(e)) return NaN; if (v(e)) { var t = "function" == typeof e.valueOf ? e.valueOf() : e; e = v(t) ? t + "" : t } if ("string" != typeof e) return 0 === e ? e : +e; e = e.replace(n, ""); var r = a.test(e); return r || u.test(e) ? i(e.slice(2), r ? 2 : 8) : o.test(e) ? NaN : +e } e.exports = function (e, t, r) { var n, o, a, u, i, c, s = 0, f = !1, l = !1, w = !0; if ("function" != typeof e) throw new TypeError("Expected a function"); function y(t) { var r = n, a = o; return n = o = void 0, s = t, u = e.apply(a, r) } function g(e) { return s = e, i = setTimeout(x, t), f ? y(e) : u } function b(e) { var r = e - c; return void 0 === c || r >= t || r < 0 || l && e - s >= a } function x() { var e = d(); if (b(e)) return k(e); i = setTimeout(x, function (e) { var r = t - (e - c); return l ? h(r, a - (e - s)) : r }(e)) } function k(e) { return i = void 0, w && n ? y(e) : (n = o = void 0, u) } function I() { var e = d(), r = b(e); if (n = arguments, o = this, c = e, r) { if (void 0 === i) return g(c); if (l) return i = setTimeout(x, t), y(c) } return void 0 === i && (i = setTimeout(x, t)), u } return t = m(t) || 0, v(r) && (f = !!r.leading, a = (l = "maxWait" in r) ? p(m(r.maxWait) || 0, t) : a, w = "trailing" in r ? !!r.trailing : w), I.cancel = function () { void 0 !== i && clearTimeout(i), s = 0, n = c = o = i = void 0 }, I.flush = function () { return void 0 === i ? u : k(d()) }, I } }, 5666: e => { var t = function (e) { "use strict"; var t, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (e, t, r) { e[t] = r.value }, a = "function" == typeof Symbol ? Symbol : {}, u = a.iterator || "@@iterator", i = a.asyncIterator || "@@asyncIterator", c = a.toStringTag || "@@toStringTag"; function s(e, t, r) { return Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }), e[t] } try { s({}, "") } catch (e) { s = function (e, t, r) { return e[t] = r } } function f(e, t, r, n) { var a = t && t.prototype instanceof m ? t : m, u = Object.create(a.prototype), i = new A(n || []); return o(u, "_invoke", { value: L(e, r, i) }), u } function l(e, t, r) { try { return { type: "normal", arg: e.call(t, r) } } catch (e) { return { type: "throw", arg: e } } } e.wrap = f; var p = "suspendedStart", h = "executing", d = "completed", v = {}; function m() { } function w() { } function y() { } var g = {}; s(g, u, (function () { return this })); var b = Object.getPrototypeOf, x = b && b(b(S([]))); x && x !== r && n.call(x, u) && (g = x); var k = y.prototype = m.prototype = Object.create(g); function I(e) { ["next", "throw", "return"].forEach((function (t) { s(e, t, (function (e) { return this._invoke(t, e) })) })) } function j(e, t) { function r(o, a, u, i) { var c = l(e[o], e, a); if ("throw" !== c.type) { var s = c.arg, f = s.value; return f && "object" == typeof f && n.call(f, "__await") ? t.resolve(f.__await).then((function (e) { r("next", e, u, i) }), (function (e) { r("throw", e, u, i) })) : t.resolve(f).then((function (e) { s.value = e, u(s) }), (function (e) { return r("throw", e, u, i) })) } i(c.arg) } var a; o(this, "_invoke", { value: function (e, n) { function o() { return new t((function (t, o) { r(e, n, t, o) })) } return a = a ? a.then(o, o) : o() } }) } function L(e, t, r) { var n = p; return function (o, a) { if (n === h) throw new Error("Generator is already running"); if (n === d) { if ("throw" === o) throw a; return G() } for (r.method = o, r.arg = a; ;) { var u = r.delegate; if (u) { var i = E(u, r); if (i) { if (i === v) continue; return i } } if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) { if (n === p) throw n = d, r.arg; r.dispatchException(r.arg) } else "return" === r.method && r.abrupt("return", r.arg); n = h; var c = l(e, t, r); if ("normal" === c.type) { if (n = r.done ? d : "suspendedYield", c.arg === v) continue; return { value: c.arg, done: r.done } } "throw" === c.type && (n = d, r.method = "throw", r.arg = c.arg) } } } function E(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, E(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), v; var a = l(o, e.iterator, r.arg); if ("throw" === a.type) return r.method = "throw", r.arg = a.arg, r.delegate = null, v; var u = a.arg; return u ? u.done ? (r[e.resultName] = u.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, v) : u : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v) } function O(e) { var t = { tryLoc: e[0] }; 1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t) } function P(e) { var t = e.completion || {}; t.type = "normal", delete t.arg, e.completion = t } function A(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(O, this), this.reset(!0) } function S(e) { if (e) { var r = e[u]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, a = function r() { for (; ++o < e.length;)if (n.call(e, o)) return r.value = e[o], r.done = !1, r; return r.value = t, r.done = !0, r }; return a.next = a } } return { next: G } } function G() { return { value: t, done: !0 } } return w.prototype = y, o(k, "constructor", { value: y, configurable: !0 }), o(y, "constructor", { value: w, configurable: !0 }), w.displayName = s(y, c, "GeneratorFunction"), e.isGeneratorFunction = function (e) { var t = "function" == typeof e && e.constructor; return !!t && (t === w || "GeneratorFunction" === (t.displayName || t.name)) }, e.mark = function (e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, s(e, c, "GeneratorFunction")), e.prototype = Object.create(k), e }, e.awrap = function (e) { return { __await: e } }, I(j.prototype), s(j.prototype, i, (function () { return this })), e.AsyncIterator = j, e.async = function (t, r, n, o, a) { void 0 === a && (a = Promise); var u = new j(f(t, r, n, o), a); return e.isGeneratorFunction(r) ? u : u.next().then((function (e) { return e.done ? e.value : u.next() })) }, I(k), s(k, c, "Generator"), s(k, u, (function () { return this })), s(k, "toString", (function () { return "[object Generator]" })), e.keys = function (e) { var t = Object(e), r = []; for (var n in t) r.push(n); return r.reverse(), function e() { for (; r.length;) { var n = r.pop(); if (n in t) return e.value = n, e.done = !1, e } return e.done = !0, e } }, e.values = S, A.prototype = { constructor: A, reset: function (e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(P), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t) }, stop: function () { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type) throw e.arg; return this.rval }, dispatchException: function (e) { if (this.done) throw e; var r = this; function o(n, o) { return i.type = "throw", i.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o } for (var a = this.tryEntries.length - 1; a >= 0; --a) { var u = this.tryEntries[a], i = u.completion; if ("root" === u.tryLoc) return o("end"); if (u.tryLoc <= this.prev) { var c = n.call(u, "catchLoc"), s = n.call(u, "finallyLoc"); if (c && s) { if (this.prev < u.catchLoc) return o(u.catchLoc, !0); if (this.prev < u.finallyLoc) return o(u.finallyLoc) } else if (c) { if (this.prev < u.catchLoc) return o(u.catchLoc, !0) } else { if (!s) throw new Error("try statement without catch or finally"); if (this.prev < u.finallyLoc) return o(u.finallyLoc) } } } }, abrupt: function (e, t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var a = o; break } } a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null); var u = a ? a.completion : {}; return u.type = e, u.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, v) : this.complete(u) }, complete: function (e, t) { if ("throw" === e.type) throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), v }, finish: function (e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) { var r = this.tryEntries[t]; if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), P(r), v } }, catch: function (e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) { var r = this.tryEntries[t]; if (r.tryLoc === e) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; P(r) } return o } } throw new Error("illegal catch attempt") }, delegateYield: function (e, r, n) { return this.delegate = { iterator: S(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), v } }, e }(e.exports); try { regeneratorRuntime = t } catch (e) { "object" == typeof globalThis ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t) } } }, t = {}; function r(n) { if (t[n]) return t[n].exports; var o = t[n] = { exports: {} }; return e[n](o, o.exports, r), o.exports } r.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return r.d(t, { a: t }), t }, r.d = (e, t) => { for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }) }, r.g = function () { if ("object" == typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (e) { if ("object" == typeof window) return window } }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => { "use strict"; function e(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)n[r] = e[r]; return n } function t(t, r) { if (t) { if ("string" == typeof t) return e(t, r); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? e(t, r) : void 0 } } function n(e, r) { var n; if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) { if (Array.isArray(e) || (n = t(e)) || r && e && "number" == typeof e.length) { n && (e = n); var o = 0, a = function () { }; return { s: a, n: function () { return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] } }, e: function (e) { throw e }, f: a } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var u, i = !0, c = !1; return { s: function () { n = e[Symbol.iterator]() }, n: function () { var e = n.next(); return i = e.done, e }, e: function (e) { c = !0, u = e }, f: function () { try { i || null == n.return || n.return() } finally { if (c) throw u } } } } function o(e, r) { return function (e) { if (Array.isArray(e)) return e }(e) || function (e, t) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) { var r = [], n = !0, o = !1, a = void 0; try { for (var u, i = e[Symbol.iterator](); !(n = (u = i.next()).done) && (r.push(u.value), !t || r.length !== t); n = !0); } catch (e) { o = !0, a = e } finally { try { n || null == i.return || i.return() } finally { if (o) throw a } } return r } }(e, r) || t(e, r) || function () { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() } var a = r(4322), u = r.n(a); function i(e, t, r, n, o, a, u) { try { var i = e[a](u), c = i.value } catch (e) { return void r(e) } i.done ? t(c) : Promise.resolve(c).then(n, o) } function c(e) { return function () { var t = this, r = arguments; return new Promise((function (n, o) { var a = e.apply(t, r); function u(e) { i(a, n, o, u, c, "next", e) } function c(e) { i(a, n, o, u, c, "throw", e) } u(void 0) })) } } var s = r(1296), f = r.n(s); var l = function e(t) { var r = this; if (function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.getAll = function (e) { return new Promise((function (t) { r.storageArea.get(null, (function (r) { t(r ? e ? Object.entries(r).filter((function (t) { var r = o(t, 2), n = r[0]; r[1]; return n.match(e) })) : Object.entries(r) : void 0) })) })) }, this.get = function (e) { return new Promise((function (t) { r.storageArea.get(e, (function (r) { t(r ? r[e] : void 0) })) })) }, this.set = function (e, t) { return new Promise((function (n) { r.storageArea.set(function (e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }({}, e, t), (function (e) { n(e) })) })) }, this.remove = function (e) { return new Promise((function (t) { r.storageArea.remove(e, t) })) }, this.removePattern = function (e) { return new Promise((function (t) { r.storageArea.get(null, (function (n) { var o = Object.keys(n).filter((function (t) { return t.startsWith(e) })); r.storageArea.remove(o), t() })) })) }, ![chrome.storage.sync, chrome.storage.local].find((function (e) { return e === t }))) throw Error("StorageManager recieved invalid strategy"); this.storageArea = t }, p = new l(chrome.storage.local), h = new l(chrome.storage.sync), d = ["grey", "yellow", "blue", "purple", "green", "red", "pink", "cyan", "orange"], v = !1; function m(e) { return new RegExp(e.split("*").map((function (e) { return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") })).join(".*")) } var w = function () { var e = c(u().mark((function e() { var t; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return e.next = 2, h.get("groupRules"); case 2: return t = e.sent, e.abrupt("return", t ? t.sort((function (e, t) { return e.key - t.key })) : []); case 4: case "end": return e.stop() } }), e) }))); return function () { return e.apply(this, arguments) } }(), y = function () { var e = c(u().mark((function e() { var t; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return e.next = 2, chrome.windows.getCurrent(); case 2: return t = e.sent, e.abrupt("return", t); case 4: case "end": return e.stop() } }), e) }))); return function () { return e.apply(this, arguments) } }(), g = function () { var e = c(u().mark((function e(t) { var r, n, a, i, c, s; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return e.next = 2, p.getAll("window:.*:rule:.*:groupId"); case 2: if (r = e.sent, !(n = r.find((function (e) { var r = o(e, 2); r[0]; return r[1] === t })))) { e.next = 11; break } return a = o(n, 2), i = a[0], a[1], c = i.replace(new RegExp("window:.*:rule:"), "").replace(":groupId", ""), e.next = 9, w(); case 9: return s = e.sent, e.abrupt("return", s.find((function (e) { return e.id.toString() === c }))); case 11: return e.abrupt("return", null); case 12: case "end": return e.stop() } }), e) }))); return function (t) { return e.apply(this, arguments) } }(), b = function () { var e = c(u().mark((function e() { var t, r, n, a = arguments; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return t = a.length > 0 && void 0 !== a[0] ? a[0] : null, r = t ? "window:".concat(t, ":rule:.*:groupId") : "window:.*:rule:.*:groupId", e.next = 4, p.getAll(r); case 4: return n = e.sent, e.abrupt("return", n.map((function (e) { var t = o(e, 2); t[0]; return t[1] })) || []); case 6: case "end": return e.stop() } }), e) }))); return function () { return e.apply(this, arguments) } }(), x = function () { var e = c(u().mark((function e(t) { return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return e.abrupt("return", new Promise((function (e) { return chrome.tabGroups.get(t, e) }))); case 1: case "end": return e.stop() } }), e) }))); return function (t) { return e.apply(this, arguments) } }(), k = function () { var e = c(u().mark((function e() { var t, r, o, a, i, c, s, f = arguments; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: if (t = f.length > 0 && void 0 !== f[0] ? f[0] : {}, !chrome.tabGroups) { e.next = 38; break } return void 0 !== t.collapsed && (v = t.collapsed), e.next = 5, b(); case 5: r = e.sent, o = n(r), e.prev = 7, o.s(); case 9: if ((a = o.n()).done) { e.next = 30; break } return i = a.value, e.prev = 11, e.next = 14, x(i); case 14: if (c = e.sent) { e.next = 18; break } return console.log("no group"), e.abrupt("continue", 28); case 18: return chrome.tabGroups.update(i, t), e.next = 21, g(i); case 21: (s = e.sent) && G(c.windowId, c.id, s), e.next = 28; break; case 25: e.prev = 25, e.t0 = e.catch(11), console.error(e.t0.stack); case 28: e.next = 9; break; case 30: e.next = 35; break; case 32: e.prev = 32, e.t1 = e.catch(7), o.e(e.t1); case 35: return e.prev = 35, o.f(), e.finish(35); case 38: case "end": return e.stop() } }), e, null, [[7, 32, 35, 38], [11, 25]]) }))); return function () { return e.apply(this, arguments) } }(), I = function () { var e = c(u().mark((function e() { var t, r, o, a, i, c, s; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return e.next = 2, y(); case 2: return t = e.sent, e.next = 5, b(); case 5: return r = e.sent, e.next = 8, w(); case 8: return o = e.sent, e.next = 11, chrome.tabs.query({ windowId: t.id }); case 11: a = e.sent, i = n(r), e.prev = 13, s = u().mark((function e() { var t, r, i, s, f; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: t = c.value, r = a.filter((function (e) { return e.groupId === t })), i = n(r), e.prev = 3, i.s(); case 5: if ((s = i.n()).done) { e.next = 13; break } if (f = s.value, P(f.url, o) || null) { e.next = 11; break } return e.next = 11, chrome.tabs.ungroup(f.id); case 11: e.next = 5; break; case 13: e.next = 18; break; case 15: e.prev = 15, e.t0 = e.catch(3), i.e(e.t0); case 18: return e.prev = 18, i.f(), e.finish(18); case 21: case "end": return e.stop() } }), e, null, [[3, 15, 18, 21]]) })), i.s(); case 16: if ((c = i.n()).done) { e.next = 20; break } return e.delegateYield(s(), "t0", 18); case 18: e.next = 16; break; case 20: e.next = 25; break; case 22: e.prev = 22, e.t1 = e.catch(13), i.e(e.t1); case 25: return e.prev = 25, i.f(), e.finish(25); case 28: case "end": return e.stop() } }), e, null, [[13, 22, 25, 28]]) }))); return function () { return e.apply(this, arguments) } }(), j = function (e, t) { if (e.color) return e.color; var r = t.findIndex((function (t) { return t.id === e.id })); return d[r % d.length] }, L = function () { var e = c(u().mark((function e(t, r) { var n, o; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return n = "window:".concat(t, ":rule:").concat(r.id, ":groupId"), e.next = 3, p.get(n); case 3: return o = e.sent, e.abrupt("return", o); case 5: case "end": return e.stop() } }), e) }))); return function (t, r) { return e.apply(this, arguments) } }(), E = function () { var e = c(u().mark((function e(t, r, n) { var o; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return o = "window:".concat(r, ":rule:").concat(t.id, ":groupId"), e.next = 3, p.set(o, n); case 3: case "end": return e.stop() } }), e) }))); return function (t, r, n) { return e.apply(this, arguments) } }(), O = function () { var e = c(u().mark((function e() { var t, r, o, a, i; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return e.next = 2, chrome.tabs.query({ status: "complete" }); case 2: return t = e.sent, e.next = 5, y(); case 5: r = e.sent, o = n(t), e.prev = 7, o.s(); case 9: if ((a = o.n()).done) { e.next = 15; break } return i = a.value, e.next = 13, N(i.id); case 13: e.next = 9; break; case 15: e.next = 20; break; case 17: e.prev = 17, e.t0 = e.catch(7), o.e(e.t0); case 20: return e.prev = 20, o.f(), e.finish(20); case 23: _(r.id); case 24: case "end": return e.stop() } }), e, null, [[7, 17, 20, 23]]) }))); return function () { return e.apply(this, arguments) } }(), P = function (e, t) { var r, o = n(t); try { for (o.s(); !(r = o.n()).done;) { var a, u = r.value, i = n(u.pattern.split("\n").reduce((function (e, t) { return e.concat(t.split(" ")) }), []).filter((function (e) { return e.length })).map((function (e) { return m(e.trim()) }))); try { for (i.s(); !(a = i.n()).done;) { var c = a.value; if (e.match(c)) return u } } catch (e) { i.e(e) } finally { i.f() } } } catch (e) { o.e(e) } finally { o.f() } return null }, A = function () { var e = c(u().mark((function e() { var t, r, n, a; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return e.next = 2, p.getAll("window:.*:tabGroups"); case 2: return t = e.sent, e.next = 5, chrome.windows.getAll(); case 5: return r = e.sent, n = t.filter((function (e) { var t = o(e, 2), n = t[0]; t[1]; return !r.some((function (e) { return n.includes("window:".concat(e.id, ":tabGroups")) })) })), a = n.map((function (e) { var t = o(e, 2), r = t[0]; t[1]; return r })), e.next = 10, p.remove(a); case 10: case "end": return e.stop() } }), e) }))); return function () { return e.apply(this, arguments) } }(), S = function () { var e = c(u().mark((function e() { var t, r, a, i, c, s, f; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return e.next = 2, p.getAll("window:.*:rule:.*:groupId"); case 2: return t = e.sent, e.next = 5, w(); case 5: r = e.sent, a = t.filter((function (e) { var t = o(e, 2), n = t[0]; t[1]; return !r.some((function (e) { return n.includes("rule:".concat(e.id, ":groupId")) })) })), i = n(a), e.prev = 8, s = u().mark((function e() { var t, r, a, i, s, f, l; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return t = o(c.value, 2), t[0], r = t[1], e.next = 3, new Promise((function (e) { return chrome.tabs.query({}, e) })); case 3: a = e.sent, i = a.filter((function (e) { return e.groupId === r })), s = n(i), e.prev = 6, l = u().mark((function e() { var t; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return t = f.value, e.next = 3, new Promise((function (e) { return chrome.tabs.ungroup(t.id, e) })); case 3: case "end": return e.stop() } }), e) })), s.s(); case 9: if ((f = s.n()).done) { e.next = 13; break } return e.delegateYield(l(), "t0", 11); case 11: e.next = 9; break; case 13: e.next = 18; break; case 15: e.prev = 15, e.t1 = e.catch(6), s.e(e.t1); case 18: return e.prev = 18, s.f(), e.finish(18); case 21: case "end": return e.stop() } }), e, null, [[6, 15, 18, 21]]) })), i.s(); case 11: if ((c = i.n()).done) { e.next = 15; break } return e.delegateYield(s(), "t0", 13); case 13: e.next = 11; break; case 15: e.next = 20; break; case 17: e.prev = 17, e.t1 = e.catch(8), i.e(e.t1); case 20: return e.prev = 20, i.f(), e.finish(20); case 23: return f = a.map((function (e) { var t = o(e, 2), r = t[0]; t[1]; return r })), e.next = 26, p.remove(f); case 26: case "end": return e.stop() } }), e, null, [[8, 17, 20, 23]]) }))); return function () { return e.apply(this, arguments) } }(), G = function () { var e = c(u().mark((function e(t, r, n) { var o, a, i, c, s, f; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: if (!chrome.tabGroups) { e.next = 16; break } return e.next = 3, w(); case 3: return o = e.sent, a = j(n, o), e.next = 7, x(r); case 7: if (i = e.sent) { e.next = 10; break } return e.abrupt("return"); case 10: return e.next = 12, new Promise((function (e) { return chrome.tabs.query({ windowId: t }, e) })); case 12: c = e.sent, s = c.filter((function (e) { return e.groupId === r })), f = i.collapsed && s.length ? "".concat(n.name, " (").concat(s.length, ")") : n.name, chrome.tabGroups.update(r, { title: f, color: a }); case 16: case "end": return e.stop() } }), e) }))); return function (t, r, n) { return e.apply(this, arguments) } }(), T = function () { var e = c(u().mark((function e(t, r, n) { var o, a, i; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return o = n ? void 0 : { windowId: t }, e.prev = 1, e.next = 4, chrome.tabs.group({ tabIds: r, groupId: n, createProperties: o }); case 4: a = e.sent, e.next = 17; break; case 7: if (e.prev = 7, e.t0 = e.catch(1), !e.t0.message.startsWith("No group with id")) { e.next = 16; break } return i = { windowId: t }, e.next = 14, chrome.tabs.group({ tabIds: r, createProperties: i }); case 14: return a = e.sent, e.abrupt("return", a); case 16: throw e.t0; case 17: return e.abrupt("return", a); case 18: case "end": return e.stop() } }), e, null, [[1, 7]]) }))); return function (t, r, n) { return e.apply(this, arguments) } }(), _ = function () { var e = c(u().mark((function e(t) { var r, o, a, i, c, s, f, l; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: if (!chrome.tabGroups) { e.next = 28; break } return e.next = 3, w(); case 3: return r = e.sent, o = r.sort((function (e, t) { return e.key - t.key })), e.next = 7, new Promise((function (e) { return chrome.tabGroups.query({ windowId: t }, e) })); case 7: return a = e.sent, e.next = 10, new Promise((function (e) { return chrome.tabs.query({ windowId: t }, e) })); case 10: i = e.sent, c = i.filter((function (e) { return e.pinned })).length, s = n(o), e.prev = 13, l = u().mark((function e() { var r, n, o; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return r = f.value, e.next = 3, L(t, r); case 3: n = e.sent, o = i.filter((function (e) { return e.groupId === n })), a.some((function (e) { return e.id === n })) && (chrome.tabGroups.move(n, { index: c }, (function () { chrome.runtime.lastError && console.log(chrome.runtime.lastError.message) })), c += o.length); case 6: case "end": return e.stop() } }), e) })), s.s(); case 16: if ((f = s.n()).done) { e.next = 20; break } return e.delegateYield(l(), "t0", 18); case 18: e.next = 16; break; case 20: e.next = 25; break; case 22: e.prev = 22, e.t1 = e.catch(13), s.e(e.t1); case 25: return e.prev = 25, s.f(), e.finish(25); case 28: case "end": return e.stop() } }), e, null, [[13, 22, 25, 28]]) }))); return function (t) { return e.apply(this, arguments) } }(), N = function () { var e = c(u().mark((function e(t) { var r, n, o, a, i, c, s, f, l, p = arguments; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return r = p.length > 1 && void 0 !== p[1] ? p[1] : 3, e.prev = 1, e.next = 4, chrome.tabs.get(t); case 4: return n = e.sent, o = n.windowId, e.next = 8, w(); case 8: if (a = e.sent, !(i = P(n.url, a) || null) || n.pinned) { e.next = 23; break } return e.next = 13, L(o, i); case 13: return c = e.sent, e.next = 16, T(o, t, c); case 16: if (s = e.sent, G(o, s, i), c === s) { e.next = 21; break } return e.next = 21, E(i, o, s); case 21: e.next = 30; break; case 23: return e.next = 25, b(); case 25: if (f = e.sent, !f.includes(n.groupId)) { e.next = 30; break } return e.next = 30, chrome.tabs.ungroup(n.id); case 30: e.next = 41; break; case 32: if (e.prev = 32, e.t0 = e.catch(1), !("Tabs cannot be edited right now (user may be dragging a tab)." == e.t0.message && r > 0)) { e.next = 40; break } return l = 250 * r, e.next = 39, new Promise((function (e) { return setTimeout(e, l) })); case 39: return e.abrupt("return", N(t, r - 1)); case 40: console.error(e.t0.stack); case 41: case "end": return e.stop() } }), e, null, [[1, 32]]) }))); return function (t) { return e.apply(this, arguments) } }(); chrome.webNavigation.onCommitted.addListener(function () { var e = c(u().mark((function e(t) { var r; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: r = t.tabId, t.url, N(r); case 2: case "end": return e.stop() } }), e) }))); return function (t) { return e.apply(this, arguments) } }()), chrome.tabs.onUpdated.addListener(function () { var e = c(u().mark((function e(t, r) { return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: (r.url || -1 == r.groupId) && N(t); case 1: case "end": return e.stop() } }), e) }))); return function (t, r) { return e.apply(this, arguments) } }()), chrome.tabs.onActivated.addListener(function () { var e = c(u().mark((function e(t) { var r; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: r = t.tabId, t.windowId, N(r, 5); case 2: case "end": return e.stop() } }), e) }))); return function (t) { return e.apply(this, arguments) } }()), chrome.runtime.onStartup.addListener((function () { h.removeAll("window:"), p.removeAll("window:") })); try { O(), I() } catch (e) { console.error(e.stack) } chrome.action.onClicked.addListener((function (e) { O(), I() })), chrome.commands.onCommand.addListener((function (e) { "toggle-collapse" === e && k({ collapsed: !v }) })), chrome.runtime.onMessage.addListener(function () { var e = c(u().mark((function e(t, r, n) { return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: if (e.prev = 0, !t.updated) { e.next = 11; break } return e.next = 4, I(); case 4: return e.next = 6, S(); case 6: return e.next = 8, A(); case 8: O(), e.next = 12; break; case 11: t.collapse ? k({ collapsed: !0 }) : t.expand && k({ collapsed: !1 }); case 12: e.next = 17; break; case 14: e.prev = 14, e.t0 = e.catch(0), console.error(e.t0.stack); case 17: case "end": return e.stop() } }), e, null, [[0, 14]]) }))); return function (t, r, n) { return e.apply(this, arguments) } }()); var F = function () { var e = c(u().mark((function e(t) { var r, o, a, i; return u().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return _(t.windowId), e.next = 3, w(); case 3: r = e.sent, o = n(r), e.prev = 5, o.s(); case 7: if ((a = o.n()).done) { e.next = 17; break } return i = a.value, e.next = 11, L(t.windowId, i); case 11: if (e.sent !== t.id) { e.next = 15; break } return G(t.windowId, t.id, i), e.abrupt("return"); case 15: e.next = 7; break; case 17: e.next = 22; break; case 19: e.prev = 19, e.t0 = e.catch(5), o.e(e.t0); case 22: return e.prev = 22, o.f(), e.finish(22); case 25: case "end": return e.stop() } }), e, null, [[5, 19, 22, 25]]) }))); return function (t) { return e.apply(this, arguments) } }(); chrome.tabGroups && chrome.tabGroups.onUpdated.addListener(f()(F, 100, { leading: !0, trailing: !1 })) })() })();
// タブ順序管理 v7.1.1 (Acid Tabs改)
(() => {
  const TAB_ORDER_KEY = 'acidTabs:tabOrder:v6';
  const LAST_RUN_KEY = 'acidTabs:lastStartupRun';
  let isRestoring = false;
  let startupRunning = false;

  console.log('[タブ順序] v7.1.1 スクリプト読み込み');

  async function saveTabOrder() {
    if (isRestoring) return;
    try {
      const windows = await chrome.windows.getAll({ windowTypes: ['normal'] });
      const orderData = { timestamp: Date.now(), windows: {} };
      for (const win of windows) {
        const tabs = await chrome.tabs.query({ windowId: win.id });
        tabs.sort((a, b) => a.index - b.index);
        const groupData = new Map();
        const groupOrder = [];
        for (const tab of tabs) {
          if (tab.groupId !== -1) {
            if (!groupData.has(tab.groupId)) {
              groupData.set(tab.groupId, { urls: [] });
              groupOrder.push(tab.groupId);
            }
            groupData.get(tab.groupId).urls.push(tab.url);
          }
        }
        let groups = [];
        try { groups = await chrome.tabGroups.query({ windowId: win.id }); } catch (e) { }
        const groupInfo = {};
        for (const g of groups) {
          groupInfo[g.id] = { title: g.title, color: g.color, collapsed: g.collapsed };
        }
        const savedGroups = groupOrder.map(gid => ({
          urls: groupData.get(gid).urls,
          title: groupInfo[gid]?.title || '',
          color: groupInfo[gid]?.color || 'grey',
          collapsed: groupInfo[gid]?.collapsed || false
        }));
        orderData.windows[win.id] = { groups: savedGroups };
      }
      await chrome.storage.local.set({ [TAB_ORDER_KEY]: orderData });
      console.log('[タブ順序] 保存完了');
    } catch (e) { console.error('[タブ順序] 保存エラー:', e); }
  }

  async function reloadAllTabs() {
    console.log('[タブ順序] 全タブリロード開始');
    try {
      const windows = await chrome.windows.getAll({ windowTypes: ['normal'] });
      for (const win of windows) {
        const tabs = await chrome.tabs.query({ windowId: win.id });
        let count = 0;
        for (const tab of tabs) {
          if (!tab.url || tab.url.startsWith('chrome://') || tab.url.startsWith('chrome-extension://') || tab.url.startsWith('edge://') || tab.pinned) continue;
          try {
            await chrome.tabs.reload(tab.id);
            count++;
            await new Promise(r => setTimeout(r, 100));
          } catch (e) { }
        }
        console.log('[タブ順序] リロード完了:', count, '/', tabs.length);
      }
    } catch (e) { console.error('[タブ順序] リロードエラー:', e); }
  }

  async function restoreTabOrder() {
    console.log('[タブ順序] グループ順序復元開始');
    try {
      const result = await chrome.storage.local.get(TAB_ORDER_KEY);
      const orderData = result[TAB_ORDER_KEY];
      if (!orderData?.windows) { console.log('[タブ順序] 保存データなし'); return; }
      const savedData = Object.values(orderData.windows)[0];
      if (!savedData?.groups) { console.log('[タブ順序] グループデータなし'); return; }
      const windows = await chrome.windows.getAll({ windowTypes: ['normal'] });
      for (const win of windows) {
        const tabs = await chrome.tabs.query({ windowId: win.id });
        let groups = [];
        try { groups = await chrome.tabGroups.query({ windowId: win.id }); } catch (e) { }
        const currentGroupUrls = new Map();
        for (const tab of tabs) {
          if (tab.groupId !== -1) {
            if (!currentGroupUrls.has(tab.groupId)) currentGroupUrls.set(tab.groupId, new Set());
            currentGroupUrls.get(tab.groupId).add(tab.url);
          }
        }
        console.log('[タブ順序] グループ数: 保存=' + savedData.groups.length + ', 現在=' + groups.length);
        const pinnedCount = tabs.filter(t => t.pinned).length;
        let targetIndex = pinnedCount;
        const movedGroups = new Set();
        for (const savedGroup of savedData.groups) {
          const savedUrls = new Set(savedGroup.urls);
          let bestMatch = null, bestScore = 0;
          for (const [gid, urls] of currentGroupUrls) {
            if (movedGroups.has(gid)) continue;
            let score = 0;
            for (const url of urls) if (savedUrls.has(url)) score++;
            if (score > bestScore) { bestScore = score; bestMatch = gid; }
          }
          if (bestMatch !== null && bestScore > 0) {
            movedGroups.add(bestMatch);
            try {
              await chrome.tabGroups.move(bestMatch, { index: targetIndex });
              const groupTabs = tabs.filter(t => t.groupId === bestMatch);
              console.log('[タブ順序] 移動:', savedGroup.title || '(無名)', 'スコア=' + bestScore);
              targetIndex += groupTabs.length;
            } catch (e) { console.log('[タブ順序] 移動失敗:', e.message); }
          }
        }
      }
      console.log('[タブ順序] 復元完了');
    } catch (e) { console.error('[タブ順序] 復元エラー:', e); }
  }

  async function runStartupSequence() {
    if (startupRunning || isRestoring) {
      console.log('[タブ順序] 起動シーケンス既に実行中');
      return;
    }
    startupRunning = true;
    isRestoring = true;

    console.log('[タブ順序] ========== 起動シーケンス開始 ==========');

    // 記録
    await chrome.storage.local.set({ [LAST_RUN_KEY]: Date.now() });

    console.log('[タブ順序] Step 1: 待機 3秒');
    await new Promise(r => setTimeout(r, 3000));

    console.log('[タブ順序] Step 2: タブリロード');
    await reloadAllTabs();

    console.log('[タブ順序] Step 3: 待機 10秒');
    await new Promise(r => setTimeout(r, 10000));

    console.log('[タブ順序] Step 4: 順序復元');
    await restoreTabOrder();

    isRestoring = false;
    console.log('[タブ順序] ========== 完了 ==========');
  }

  // 起動検出の強化
  async function checkInitialStartup() {
    if (startupRunning || isRestoring) return;

    // 1. Session Storage による検出 (最優先)
    if (chrome.storage.session) {
      try {
        const result = await chrome.storage.session.get('hasRunStartup');
        if (!result.hasRunStartup) {
          console.log('[タブ順序] セッション開始を検出 (storage.session)');
          await chrome.storage.session.set({ hasRunStartup: true });
          runStartupSequence();
          return;
        }
      } catch (e) { console.error('[タブ順序] セッションチェックエラー:', e); }
    }

    // 2. タイムスタンプによるフォールバック (1分以上経過)
    try {
      const result = await chrome.storage.local.get(LAST_RUN_KEY);
      const lastRun = result[LAST_RUN_KEY] || 0;
      const elapsed = Date.now() - lastRun;
      if (elapsed > 60000) {
        console.log('[タブ順序] 新規起動を検出 (タイムスタンプ:', Math.round(elapsed / 1000), '秒経過)');
        runStartupSequence();
      }
    } catch (e) { console.error('[タブ順序] タイムスタンプチェックエラー:', e); }
  }

  // ブラウザ起動イベント
  chrome.runtime.onStartup.addListener(() => {
    console.log('[タブ順序] onStartup イベント受信');
    setTimeout(() => checkInitialStartup(), 1000);
  });

  // 拡張機能インストール/更新時
  chrome.runtime.onInstalled.addListener((details) => {
    console.log('[タブ順序] onInstalled:', details.reason);
    if (details.reason === 'install') {
      console.log('[タブ順序] 新規インストール - 起動シーケンスをスキップ');
    }
  });

  // 手動トリガー用
  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'acidTabs:runStartup') {
      console.log('[タブ順序] 手動トリガー');
      startupRunning = false; // リセット
      runStartupSequence();
      sendResponse({ ok: true });
    }
    if (msg.action === 'acidTabs:getStatus') {
      sendResponse({ startupRunning, isRestoring });
    }
  });

  // イベントリスナー
  let saveTimeout = null;
  function debouncedSave() {
    if (isRestoring) return;
    if (saveTimeout) clearTimeout(saveTimeout);
    saveTimeout = setTimeout(saveTabOrder, 500);
  }
  chrome.tabs.onMoved.addListener(debouncedSave);
  chrome.tabs.onRemoved.addListener(debouncedSave);
  chrome.tabs.onCreated.addListener(debouncedSave);
  if (chrome.tabGroups) {
    chrome.tabGroups.onMoved.addListener(debouncedSave);
    chrome.tabGroups.onCreated.addListener(debouncedSave);
    chrome.tabGroups.onRemoved.addListener(debouncedSave);
  }

  // 定期保存
  setInterval(saveTabOrder, 30000);
  setTimeout(saveTabOrder, 3000);

  // 監視開始
  setTimeout(checkInitialStartup, 2000);

  console.log('[タブ順序] v7.1.1 初期化完了');
})();
