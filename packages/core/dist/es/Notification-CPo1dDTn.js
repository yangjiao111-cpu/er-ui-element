import { defineComponent as t, ref as o, computed as e, onMounted as n, openBlock as s, createBlock as i, Transition as a, withCtx as l, withDirectives as r, createElementVNode as c, normalizeStyle as f, normalizeClass as u, createCommentVNode as d, toDisplayString as p, renderSlot as m, unref as v, createElementBlock as h, createVNode as g, withModifiers as y, vShow as _, isVNode as x, h as C, render as b, shallowReactive as k } from "vue";
import { d as w, f as I, b as E } from "./hooks-BbTQ_RFE.js";
import { t as N, R as j, _ as O, b as z } from "./utils-BPs9OFM8.js";
import { E as $ } from "./Icon-DejoFiph.js";
import { j as B, i as D, l as M, f as R, p as A, q as L, s as W } from "./vendor-B3CbtOf3.js";
const q = ["info", "success", "warning", "danger"], H = ["top-right", "top-left", "bottom-right", "bottom-left"], T = { class: "er-notification__text" }, Z = { class: "er-notification__title" }, F = { class: "er-notification__content" }, G = { key: 1, class: "er-notification__close" }, J = O(t({ __name: "Notification", props: { title: {}, id: {}, zIndex: {}, position: {}, type: { default: "info" }, message: {}, duration: { default: 3e3 }, showClose: { type: Boolean, default: true }, offset: { default: 20 }, transitionName: { default: "fade" }, icon: {}, onClick: {}, onClose: {}, onDestory: {} }, setup(t2, { expose: x2 }) {
  const C2 = t2, b2 = o(false), k2 = o(), I2 = o(0), { topOffset: E2, bottomOffset: O2 } = w({ getLastBottomOffset: B(X, C2), offset: C2.offset, boxHeight: I2 }), z2 = e(() => D(C2.icon) ? C2.icon : N.get(C2.type)), R2 = e(() => C2.position.endsWith("right") ? "right" : "left"), A2 = e(() => C2.position.startsWith("top") ? "top" : "bottom"), L2 = e(() => ({ [A2.value]: E2.value + "px", zIndex: C2.zIndex }));
  let W2;
  function q2() {
    0 !== C2.duration && (W2 = M(J2, C2.duration));
  }
  function H2() {
    clearTimeout(W2);
  }
  function J2() {
    var _a;
    b2.value = false, (_a = C2 == null ? void 0 : C2.onClose) == null ? void 0 : _a.call(C2);
  }
  return n(() => {
    b2.value = true, q2();
  }), x2({ close: J2, bottomOffset: O2 }), (o2, e2) => (s(), i(a, { name: `er-notification-${t2.transitionName}`, onAfterLeave: e2[1] || (e2[1] = (o3) => !b2.value && t2.onDestory()), onEnter: e2[2] || (e2[2] = (t3) => I2.value = k2.value.getBoundingClientRect().height) }, { default: l(() => [r(c("div", { ref_key: "notifyRef", ref: k2, class: u(["er-notification", { [`er-notification--${t2.type}`]: t2.type, "show-close": t2.showClose, [R2.value]: true }]), style: f(L2.value), role: "alert", onClick: e2[0] || (e2[0] = (...o3) => t2.onClick && t2.onClick(...o3)), onMouseenter: H2, onMouseleave: q2 }, [z2.value ? (s(), i($, { key: 0, icon: z2.value, class: "er-notification__icon" }, null, 8, ["icon"])) : d("", true), c("div", T, [c("div", Z, p(t2.title), 1), c("div", F, [m(o2.$slots, "default", {}, () => [t2.message ? (s(), i(v(j), { key: 0, vNode: t2.message }, null, 8, ["vNode"])) : d("", true)], true)])]), t2.showClose ? (s(), h("div", G, [g($, { icon: "xmark", onClick: y(J2, ["stop"]) })])) : d("", true)], 38), [[_, b2.value]])]), _: 3 }, 8, ["name"]));
} }), [["__scopeId", "data-v-2ebcea0e"]]), { nextZIndex: K } = I(), P = { type: "info", position: "top-right", duration: 3e3, offset: 20, transitionName: "fade", showClose: true }, Q = /* @__PURE__ */ new Map();
R(H, (t2) => Q.set(t2, k([])));
const S = (t2) => Q.get(t2);
function U(t2) {
  const o2 = !t2 || x(t2) || D(t2) ? { message: t2 } : t2;
  return { ...P, ...o2 };
}
const V = function(t2 = {}) {
  return function(t3) {
    const o2 = E().value, e2 = document.createElement("div"), n2 = S(t3.position || "top-right"), s2 = { ...t3, id: o2, zIndex: K(), onDestory: () => {
      const t4 = A(n2, { id: o2 });
      -1 !== t4 && (n2.splice(t4, 1), b(null, e2));
    } }, i2 = C(J, s2);
    b(i2, e2), document.body.appendChild(e2.firstElementChild);
    const a2 = i2.component, l2 = { close: () => {
      var _a;
      return (_a = a2.exposed) == null ? void 0 : _a.close();
    } }, r2 = { props: s2, id: o2, vm: a2, vnode: i2, handler: l2 };
    return n2.push(r2), r2;
  }(U(t2)).handler;
};
function X() {
  const t2 = S(this.position || "top-right"), o2 = A(t2, { id: this.id });
  return o2 <= 0 ? 0 : L(t2, [o2 - 1, "vm", "exposed", "bottomOffset", "value"]);
}
R(q, (t2) => {
  W(V, t2, (o2) => {
    const e2 = U(o2);
    return V({ ...e2, type: t2 });
  });
}), V.closeAll = function(t2) {
  Q.forEach((o2) => {
    R(o2, (o3) => {
      t2 ? o3.props.type === t2 && o3.handler.close() : o3.handler.close();
    });
  });
};
const Y = z(V, "$notify");
export {
  Y as E,
  q as a,
  H as n
};
