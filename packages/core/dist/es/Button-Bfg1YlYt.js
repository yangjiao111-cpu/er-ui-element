import { defineComponent as e, useSlots as o, inject as t, ref as a, computed as l, openBlock as i, createBlock as s, resolveDynamicComponent as n, unref as d, normalizeClass as u, withCtx as r, renderSlot as p, createVNode as c, normalizeStyle as y, createCommentVNode as b, provide as f, reactive as v, toRef as g, createElementBlock as m } from "vue";
import { E as _ } from "./Icon-DejoFiph.js";
import { t as B } from "./vendor-B3CbtOf3.js";
import { _ as z, w as T } from "./utils-BPs9OFM8.js";
const k = Symbol("BUTTON_GROUP_CTX_KEY"), E = z(e({ name: "ErButton", __name: "Button", props: { tag: { default: "button" }, type: {}, size: {}, nativeType: { default: "button" }, disabled: { type: Boolean }, loading: { type: Boolean }, icon: {}, circle: { type: Boolean }, plain: { type: Boolean }, round: { type: Boolean }, loadingIcon: {}, autofocus: { type: Boolean }, useThrottle: { type: Boolean, default: true }, throttleDuration: { default: 500 } }, emits: ["click"], setup(e2, { expose: f2, emit: v2 }) {
  const g2 = e2, m2 = v2, z2 = o(), T2 = t(k, void 0), E2 = a(), I2 = l(() => (T2 == null ? void 0 : T2.size) ?? g2.size ?? ""), $2 = l(() => (T2 == null ? void 0 : T2.type) ?? g2.type ?? ""), h2 = l(() => (T2 == null ? void 0 : T2.disabled) ?? g2.disabled ?? ""), x2 = l(() => {
    z2.default;
  }), j = (e3) => m2("click", e3), G = B(j, g2.throttleDuration, { trailing: false });
  return f2({ ref: E2, disabled: h2, size: I2, type: $2 }), (o2, t2) => (i(), s(n(g2.tag), { autofocus: e2.autofocus, ref_key: "_ref", ref: E2, class: u(["er-button", { [`er-button--${$2.value}`]: $2.value, [`er-button--${I2.value}`]: I2.value, "is-plain": e2.plain, "is-round": e2.round, "is-circle": e2.circle, "is-disabled": h2.value, "is-loading": e2.loading }]), type: "button" === e2.tag ? e2.nativeType : void 0, disabled: !(!h2.value && !e2.loading) || void 0, onClick: t2[0] || (t2[0] = (o3) => {
    e2.useThrottle ? d(G)(o3) : j(o3);
  }) }, { default: r(() => [e2.loading ? p(o2.$slots, "loading", { key: 0 }, () => [c(_, { style: y(x2.value), class: "loading-icon", icon: e2.loadingIcon ?? "spinner", size: "1x", spin: "" }, null, 8, ["style", "icon"])], true) : b("", true), e2.icon && !e2.loading ? (i(), s(_, { key: 1, icon: e2.icon, size: "1x", style: {} }, null, 8, ["icon"])) : b("", true), p(o2.$slots, "default", {}, void 0, true)]), _: 3 }, 8, ["autofocus", "type", "disabled", "class"]));
} }), [["__scopeId", "data-v-840a74ae"]]), I = { class: "er-button-group" }, $ = z(e({ name: "ErButtonGroup", __name: "ButtonGroup", props: { size: {}, type: {}, disabled: { type: Boolean } }, setup(e2) {
  const o2 = e2;
  return f(k, v({ size: g(o2.size), type: g(o2.type), disabled: g(o2.disabled) })), (e3, o3) => (i(), m("div", I, [p(e3.$slots, "default", {}, void 0, true)]));
} }), [["__scopeId", "data-v-5fc038bb"]]), h = T(E), x = T($);
export {
  E,
  x as a,
  h as b
};
