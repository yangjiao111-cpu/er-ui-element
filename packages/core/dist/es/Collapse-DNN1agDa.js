import { defineComponent as e, ref as a, watchEffect as l, watch as t, provide as s, openBlock as o, createElementBlock as i, renderSlot as d, inject as n, computed as c, normalizeClass as r, createElementVNode as m, createTextVNode as p, toDisplayString as u, createVNode as v, Transition as h, mergeProps as f, toHandlers as _, unref as b, withCtx as g, withDirectives as y, vShow as C } from "vue";
import { d as I, _ as E, w as $ } from "./utils-Dz6Hv9xU.js";
import { E as x } from "./Icon-BC1WGG_E.js";
const V = Symbol("collapseContext"), w = { class: "er-collapse" }, k = "ErCollapse", j = E(e({ name: k, __name: "Collapse", props: { modelValue: {}, accordion: { type: Boolean } }, emits: ["update:modelValue", "change"], setup(e2, { emit: n2 }) {
  const c2 = e2, r2 = n2, m2 = a(c2.modelValue);
  function p2(e3) {
    m2.value = e3, r2("update:modelValue", e3), r2("change", e3);
  }
  return l(() => {
    c2.accordion && m2.value.length > 1 && I(k, "accordion mode should only have one active item");
  }), t(() => c2.modelValue, (e3) => p2(e3)), s(V, { activeNames: m2, handleItemClick: function(e3) {
    let a2 = [...m2.value];
    if (c2.accordion) return a2 = [a2[0] === e3 ? "" : e3], void p2(a2);
    const l2 = a2.indexOf(e3);
    l2 > -1 ? a2.splice(l2, 1) : a2.push(e3), p2(a2);
  } }), (e3, a2) => (o(), i("div", w, [d(e3.$slots, "default", {}, void 0, true)]));
} }), [["__scopeId", "data-v-7a9c82a3"]]), B = (e2) => e2.style.height = "0px", L = (e2) => e2.style.height = `${e2.scrollHeight}px`, N = (e2) => e2.style.height = "", H = (e2) => e2.style.overflow = "hidden", O = (e2) => e2.style.overflow = "", S = { beforeEnter(e2) {
  B(e2), H(e2);
}, enter: (e2) => L(e2), afterEnter(e2) {
  N(e2), O(e2);
}, beforeLeave(e2) {
  L(e2), H(e2);
}, leave: (e2) => B(e2), afterLeave(e2) {
  N(e2), O(e2);
} }, q = ["id"], z = { class: "er-collapse-item__title" }, A = { class: "er-collapse-item__wapper" }, D = ["id"], F = E(e({ name: "ErCollapseItem", __name: "CollapseItem", props: { name: {}, title: {}, disabled: { type: Boolean } }, setup(e2) {
  const a2 = e2, l2 = n(V, void 0), t2 = c(() => {
    var _a;
    return (_a = l2 == null ? void 0 : l2.activeNames.value) == null ? void 0 : _a.includes(a2.name);
  });
  function s2() {
    a2.disabled || (l2 == null ? void 0 : l2.handleItemClick(a2.name));
  }
  return (a3, l3) => (o(), i("div", { class: r(["er-collapse-item", { "is-disabled": e2.disabled }]) }, [m("div", { class: r(["er-collapse-item__header", { "is-disabled": e2.disabled, "is-active": t2.value }]), id: `item-header-${e2.name}`, onClick: s2 }, [m("span", z, [d(a3.$slots, "title", {}, () => [p(u(e2.title), 1)], true)]), v(x, { icon: "angle-right", class: "header-angle" })], 10, q), v(h, f({ name: "slide" }, _(b(S))), { default: g(() => [y(m("div", A, [m("div", { class: "er-collapse-item__content", id: `item-content-${e2.name}` }, [d(a3.$slots, "default", {}, void 0, true)], 8, D)], 512), [[C, t2.value]])]), _: 3 }, 16)], 2));
} }), [["__scopeId", "data-v-267bf8f8"]]), G = $(j), J = $(F);
export {
  G as E,
  J as a
};
