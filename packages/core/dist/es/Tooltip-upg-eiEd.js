import { _ as e, w as t } from "./utils-BPs9OFM8.js";
import { onMounted as a, watch as o, onUnmounted as l, defineComponent as i, ref as n, computed as r, watchEffect as u, openBlock as s, createElementBlock as v, mergeProps as c, toHandlers as p, renderSlot as f, createVNode as d, Transition as m, withCtx as g, createTextVNode as h, toDisplayString as _, createElementVNode as k, createCommentVNode as T } from "vue";
import { createPopper as y } from "@popperjs/core";
import { u as b } from "./hooks-BbTQ_RFE.js";
import { g as w, f as j, h as x, j as E } from "./vendor-B3CbtOf3.js";
const B = e(i({ name: "ErTooltip", __name: "Tooltip", props: { virtualRef: {}, virtualTriggering: { type: Boolean }, content: {}, trigger: { default: "hover" }, placement: { default: "bottom" }, manual: { type: Boolean }, disabled: { type: Boolean }, popperOptions: {}, transition: { default: "fade" }, showTimeout: { default: 0 }, hideTimeout: { default: 200 } }, emits: ["visible-change", "click-outside"], setup(e2, { expose: t2, emit: i2 }) {
  const B2 = e2, L2 = i2, N = n(false), R = n({}), $ = n({}), M = n({}), O = n(), A = n(), D = n(), I = r(() => {
    var _a;
    return B2.virtualTriggering ? ((_a = B2.virtualRef) == null ? void 0 : _a.ref) ?? B2.virtualRef ?? D.value : D.value;
  }), q = r(() => ({ placement: B2.placement, modifiers: [{ name: "offset", options: { offset: [0, 9] } }], ...B2.popperOptions })), z = r(() => "hover" === B2.trigger ? B2.showTimeout : 0), C = r(() => "hover" === B2.trigger ? B2.hideTimeout : 0), F = /* @__PURE__ */ new Map();
  let G, H, J;
  function K() {
    H == null ? void 0 : H.cancel(), G == null ? void 0 : G();
  }
  function P() {
    G == null ? void 0 : G.cancel(), H == null ? void 0 : H();
  }
  function Q() {
    N.value ? P() : K();
  }
  function S(e3) {
    B2.disabled || (N.value = e3, L2("visible-change", e3));
  }
  function U() {
    var _a;
    B2.disabled || B2.manual || ((_a = F.get(B2.trigger)) == null ? void 0 : _a());
  }
  function V() {
    J == null ? void 0 : J.destroy(), J = null;
  }
  function W() {
    R.value = {}, $.value = {}, M.value = {}, U();
  }
  F.set("hover", () => {
    R.value.mouseenter = K, $.value.mouseleave = P, M.value.mouseenter = K;
  }), F.set("click", () => {
    R.value.click = Q;
  }), F.set("contextmenu", () => {
    R.value.contextmenu = (e3) => {
      e3.preventDefault(), K();
    };
  }), B2.manual || U();
  const X = K;
  return b(O, () => {
    L2("click-outside"), "hover" === B2.trigger || B2.manual || N.value && P();
  }), o(N, (e3) => {
    e3 && I.value && A.value && (J = y(I.value, A.value, q.value));
  }, { flush: "post" }), o(() => B2.manual, (e3) => {
    if (e3) return R.value = {}, $.value = {}, void (M.value = {});
    U();
  }), o(() => B2.trigger, (e3, t3) => {
    e3 !== t3 && W();
  }), o(() => B2.disabled, (e3, t3) => {
    e3 !== t3 && (G == null ? void 0 : G.cancel(), N.value = false, L2("visible-change", false), W());
  }), u(() => {
    G = x(E(S, null, true), z.value), H = x(E(S, null, false), C.value);
  }), function(e3, t3, i3) {
    let n2, r2;
    const u2 = /* @__PURE__ */ new Map(), s2 = () => {
      const e4 = t3.value;
      w(e4) && j(i3.value, (t4, a2) => {
        u2.set(a2, t4), e4 == null ? void 0 : e4.addEventListener(a2, t4);
      });
    };
    a(() => {
      r2 = o(t3, () => e3.virtualTriggering && s2(), { immediate: true }), n2 = o(i3, () => {
        e3.virtualTriggering && ((() => {
          const e4 = t3.value;
          w(e4) && j(["mouseenter", "click", "contextmenu"], (t4) => u2.has(t4) && (e4 == null ? void 0 : e4.removeEventListener(t4, u2.get(t4))));
        })(), s2(), G == null ? void 0 : G.cancel(), S(false));
      }, { deep: true });
    }), l(() => {
      r2 == null ? void 0 : r2(), n2 == null ? void 0 : n2();
    });
  }(B2, I, R), l(() => {
    V();
  }), t2({ show: X, hide: function() {
    G == null ? void 0 : G.cancel(), S(false);
  } }), (t3, a2) => (s(), v("div", c({ class: "er-tooltip", ref_key: "containerNode", ref: O }, p($.value, true)), [e2.virtualTriggering ? f(t3.$slots, "default", { key: 1 }, void 0, true) : (s(), v("div", c({ key: 0, class: "er-tooltip__trigger", ref_key: "_triggerNode", ref: D }, p(R.value, true)), [f(t3.$slots, "default", {}, void 0, true)], 16)), d(m, { name: e2.transition, onAfterLeave: V }, { default: g(() => [N.value ? (s(), v("div", c({ key: 0, class: "er-tooltip__popper", ref_key: "popperNode", ref: A }, p(M.value, true)), [f(t3.$slots, "content", {}, () => [h(_(e2.content), 1)], true), a2[0] || (a2[0] = k("div", { id: "arrow", "data-popper-arrow": "" }, null, -1))], 16)) : T("", true)]), _: 3 }, 8, ["name"])], 16));
} }), [["__scopeId", "data-v-f9676470"]]), L = t(B);
export {
  L as E,
  B as T
};
