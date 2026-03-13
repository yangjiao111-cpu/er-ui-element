import { defineComponent as e, ref as s, computed as o, onMounted as t, watch as n, openBlock as a, createBlock as r, Transition as l, withCtx as i, withDirectives as c, createElementVNode as f, normalizeStyle as u, normalizeClass as d, createVNode as m, renderSlot as p, unref as v, createCommentVNode as g, createElementBlock as y, withModifiers as h, vShow as x, shallowReactive as _, isVNode as b, h as k, render as C } from "vue";
import { d as E, e as I, f as j, b as w } from "./hooks-BbTQ_RFE.js";
import { t as N, R as O, _ as z, b as B } from "./utils-BPs9OFM8.js";
import { E as M } from "./Icon-DejoFiph.js";
import { j as D, l as R, f as $, i as A, p as L, q, s as H } from "./vendor-B3CbtOf3.js";
const T = ["info", "success", "warning", "danger", "error"], Z = { class: "er-message__content" }, F = { key: 0, class: "er-message__close" }, G = z(e({ name: "ErMessage", __name: "Message", props: { id: {}, message: {}, duration: { default: 3e3 }, showClose: { type: Boolean }, center: { type: Boolean }, type: { default: "info" }, offset: { default: 10 }, zIndex: {}, transitionName: { default: "fade-up" }, onDestory: {} }, setup(e2, { expose: _2 }) {
  const b2 = e2, k2 = s(false), C2 = s(), j2 = o(() => N.get(b2.type) ?? "circle-info"), w2 = s(0), { topOffset: z2, bottomOffset: B2 } = E({ getLastBottomOffset: D(U, b2), offset: b2.offset, boxHeight: w2 }), $2 = o(() => ({ top: z2.value + "px", zIndex: b2.zIndex }));
  let A2;
  function L2() {
    0 !== b2.duration && (A2 = R(H2, b2.duration));
  }
  function q2() {
    clearTimeout(A2);
  }
  function H2() {
    k2.value = false;
  }
  return t(() => {
    k2.value = true, L2();
  }), I(document, "keydown", (e3) => {
    const { code: s2 } = e3;
    "Escape" === s2 && H2();
  }), n(k2, (e3) => {
    e3 || (w2.value = -b2.offset);
  }), _2({ bottomOffset: B2, close: H2 }), (s2, o2) => (a(), r(l, { name: e2.transitionName, onEnter: o2[0] || (o2[0] = (e3) => w2.value = C2.value.getBoundingClientRect().height), onAfterLeave: o2[1] || (o2[1] = (s3) => !k2.value && e2.onDestory()) }, { default: i(() => [c(f("div", { ref_key: "messageRef", ref: C2, class: d(["er-message", { [`er-message--${e2.type}`]: e2.type, "is-close": e2.showClose, "text-center": e2.center }]), style: u($2.value), role: "alert", onMouseenter: q2, onMouseleave: L2 }, [m(M, { class: "er-message__icon", icon: j2.value }, null, 8, ["icon"]), f("div", Z, [p(s2.$slots, "default", {}, () => [e2.message ? (a(), r(v(O), { key: 0, vNode: e2.message }, null, 8, ["vNode"])) : g("", true)], true)]), e2.showClose ? (a(), y("div", F, [m(M, { icon: "xmark", onClick: h(H2, ["stop"]) })])) : g("", true)], 38), [[x, k2.value]])]), _: 3 }, 8, ["name"]));
} }), [["__scopeId", "data-v-3588295f"]]), J = _([]), { nextZIndex: K } = j(), P = { type: "info", duration: 3e3, offset: 10, transitionName: "fade-up" };
function Q(e2) {
  const s2 = !e2 || b(e2) || A(e2) ? { message: e2 } : e2;
  return { ...P, ...s2 };
}
const S = function(e2 = {}) {
  return function(e3) {
    const s2 = w().value, o2 = document.createElement("div"), t2 = { ...e3, id: s2, zIndex: K(), onDestory: () => {
      const e4 = L(J, { id: s2 });
      -1 !== e4 && (J.splice(e4, 1), C(null, o2));
    } }, n2 = k(G, t2);
    C(n2, o2), document.body.appendChild(o2.firstElementChild);
    const a2 = n2.component, r2 = { close: () => a2.exposed.close() }, l2 = { props: t2, id: s2, vm: a2, vnode: n2, handler: r2 };
    return J.push(l2), l2;
  }(Q(e2)).handler;
};
function U() {
  const e2 = L(J, { id: this.id });
  return e2 <= 0 ? 0 : q(J, [e2 - 1, "vm", "exposed", "bottomOffset", "value"]);
}
$(T, (e2) => H(S, e2, (s2) => {
  const o2 = Q(s2);
  return S({ ...o2, type: e2 });
})), S.closeAll = function(e2) {
  $(J, (s2) => {
    e2 ? s2.props.type === e2 && s2.handler.close() : s2.handler.close();
  });
};
const V = B(S, "$message");
export {
  V as E,
  T as m
};
