import { defineComponent as e, useCssVars as n, computed as t, openBlock as o, createBlock as r, Transition as l, withCtx as i, withDirectives as s, createElementVNode as c, normalizeClass as a, createCommentVNode as d, createElementBlock as u, toDisplayString as b, vShow as m, nextTick as f, ref as v, reactive as p, createApp as g } from "vue";
import { f as y } from "./hooks-BFQBeDsw.js";
import { E as k } from "./Icon-BX-aiFSd.js";
import { i as x, k as L, l as A } from "./vendor-D30j_OjZ.js";
const $ = { class: "er-loading__spinner" }, I = { key: 1, class: "er-loading-text" }, _ = e({ name: "ErLoading", inheritAttrs: false, __name: "Loading", props: { visible: {}, background: {}, spinner: {}, text: {}, fullscreen: {}, lock: {}, beforeClose: { type: Function }, closed: { type: Function }, target: {}, body: { type: Boolean }, zIndex: {}, onAfterLeave: { type: Function } }, setup(e2) {
  n((e3) => ({ v15145a06: e3.background, v2097a550: e3.zIndex }));
  const f2 = e2, v2 = t(() => x(f2.spinner) ? f2.spinner : "spinner");
  return (n2, t2) => (o(), r(l, { name: "fade-in-linear", onAfterLeave: e2.onAfterLeave }, { default: i(() => [s(c("div", { class: a(["er-loading er-loading__mask", { "is-fullscreen": e2.fullscreen }]) }, [c("div", $, [false !== f2.spinner ? (o(), r(k, { key: 0, icon: v2.value, spin: "" }, null, 8, ["icon"])) : d("", true), e2.text ? (o(), u("p", I, b(e2.text), 1)) : d("", true)])], 2), [[m, f2.visible.value]])]), _: 1 }, 8, ["onAfterLeave"]));
} }), h = "er-loading-parent--relative", C = "er-loading-parent--hiden", E = "er-loading-numb", j = /* @__PURE__ */ new Map(), { nextZIndex: z } = y(3e4);
function F(e2 = document.body) {
  e2.classList.remove(C);
}
function N(e2 = document.body) {
  return e2.getAttribute(E);
}
let S = null;
function T(e2 = {}) {
  var _a;
  const n2 = function(e3) {
    let n3;
    return n3 = x(e3.target) ? document.querySelector(e3.target) ?? document.body : e3.target || document.body, { parent: n3 === document.body || e3.body ? document.body : n3, background: e3.background ?? "rgba(0, 0, 0, 0.5)", spinner: e3.spinner, text: e3.text, fullscreen: n3 === document.body && (e3.fullscreen ?? true), lock: e3.lock ?? false, visible: e3.visible ?? true, target: n3 };
  }(e2), t2 = n2.parent ?? document.body;
  if (n2.fullscreen && !L(S)) return S;
  if (function(e3 = document.body) {
    const n3 = N(e3) ?? "0";
    e3.setAttribute(E, `${Number.parseInt(n3) + 1}`);
  }(n2 == null ? void 0 : n2.parent), j.has(t2)) return j.get(t2);
  const o2 = function(e3) {
    const n3 = v(false), t3 = v(false), o3 = () => {
      t3.value && l2();
    }, r2 = p({ ...e3, onAfterLeave: o3 }), l2 = () => {
      var _a2, _b;
      const e4 = r2.parent;
      !function(e5 = document.body) {
        const n4 = N(e5);
        if (n4) {
          const t4 = Number.parseInt(n4) - 1;
          0 === t4 ? function(e6 = document.body) {
            e6.removeAttribute(E);
          }(e5) : e5.setAttribute(E, `${t4}`);
        }
      }(e4), N(e4) || (A(() => {
        !function(e5 = document.body) {
          e5.classList.remove(h);
        }(e4), F(e4);
      }, 1), j.delete(e4 ?? document.body), (_b = (_a2 = c2.$el) == null ? void 0 : _a2.parentNode) == null ? void 0 : _b.removeChild(c2.$el), s2.unmount());
    };
    let i2;
    const s2 = g(_, { ...r2, zIndex: r2.fullscreen ? z() : void 0, visible: n3 }), c2 = s2.mount(document.createElement("div"));
    return { get $el() {
      return c2.$el;
    }, vm: c2, close: () => {
      var _a2;
      e3.beforeClose && !e3.beforeClose() || (t3.value = true, clearTimeout(i2), i2 = A(o3, 500), n3.value = false, (_a2 = e3.closed) == null ? void 0 : _a2.call(e3));
    }, visible: n3, setText: (e4) => r2.text = e4 };
  }({ ...n2, closed: () => {
    var _a2;
    (_a2 = n2.closed) == null ? void 0 : _a2.call(n2), n2.fullscreen && (S = null);
  } });
  return function(e3, n3 = document.body) {
    e3.lock ? function(e4 = document.body) {
      e4.classList.add(C);
    }(n3) : F(n3), function(e4 = document.body) {
      e4.classList.add(h);
    }(n3);
  }(e2, n2 == null ? void 0 : n2.parent), (_a = n2.parent) == null ? void 0 : _a.appendChild(o2.$el), f(() => o2.visible.value = !!n2.visible), n2.fullscreen && (S = o2), j.set(t2, o2), o2;
}
const V = Symbol("loading");
function q(e2, n2) {
  const t2 = (n3) => e2.getAttribute(`er-loading-${n3}`), o2 = (e3) => n2.modifiers[e3], r2 = o2("fullscreen"), l2 = { text: t2("text"), spinner: t2("spinner"), background: t2("background"), target: r2 ? void 0 : e2, body: o2("body"), lock: o2("lock"), fullscreen: r2 };
  e2[V] = { options: l2, instance: T(l2) };
}
const w = { mounted(e2, n2) {
  n2.value && q(e2, n2);
}, updated(e2, n2) {
  var _a, _b;
  n2.oldValue !== n2.value && (!n2.value || n2.oldValue ? (_b = (_a = e2[V]) == null ? void 0 : _a.instance) == null ? void 0 : _b.close() : q(e2, n2));
}, unmounted(e2) {
  var _a;
  (_a = e2[V]) == null ? void 0 : _a.instance.close(), e2[V] = void 0;
} }, B = { name: "ErLoading", install(e2) {
  e2.directive("loading", w), e2.config.globalProperties.$loading = T;
}, directive: w, service: T };
export {
  B as E,
  T as L,
  w as v
};
