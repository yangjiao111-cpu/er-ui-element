import { defineComponent as e, inject as o, computed as i, openBlock as t, createElementBlock as d, Fragment as l, createCommentVNode as a, createElementVNode as s, normalizeClass as n, unref as r, renderSlot as p, createTextVNode as m, toDisplayString as u, useSlots as c, ref as f, provide as v, createVNode as _, mergeProps as b, withCtx as y, createBlock as k, renderList as h } from "vue";
import { b as w, c as g } from "./hooks-cT4B6gSd.js";
import { T as B } from "./Tooltip-BBPvORYm.js";
import { _ as C, w as z } from "./utils-Dz6Hv9xU.js";
import { a as $, b as I } from "./Button-BKL6t2-c.js";
import { o as j, k as D } from "./vendor-7Dpq5lhG.js";
const T = Symbol("dropdownContext"), x = { key: 0, role: "separator", class: "divided-placeholder" }, E = ["id"], O = C(e({ name: "ErDropdownItem", __name: "DropdownItem", props: { command: { default: w().value }, label: {}, disabled: { type: Boolean, default: false }, divided: { type: Boolean, default: false } }, setup(e2) {
  const c2 = e2, f2 = o(T), v2 = i(() => f2 == null ? void 0 : f2.size.value);
  function _2() {
    c2.disabled || (f2 == null ? void 0 : f2.handleItemClick(c2));
  }
  return (o2, i2) => (t(), d(l, null, [e2.divided ? (t(), d("li", x)) : a("", true), s("li", { id: `dropdown-item-${e2.command ?? r(w)().value}`, class: n({ "er-dropdown__item": true, ["er-dropdown__item--" + v2.value]: v2.value, "is-disabled": e2.disabled, "is-divided": e2.divided }), onClick: _2 }, [p(o2.$slots, "default", {}, () => [m(u(e2.label), 1)], true)], 10, E)], 64));
} }), [["__scopeId", "data-v-7b7b3775"]]), A = ["id"], R = { class: "er-dropdown__menu" }, S = z(C(e({ name: "ErDropdown", inheritAttrs: false, __name: "Dropdown", props: { type: {}, size: {}, items: {}, hideOnClick: { type: Boolean, default: true }, splitButton: { type: Boolean }, content: {}, trigger: {}, placement: {}, manual: { type: Boolean }, disabled: { type: Boolean }, popperOptions: {}, transition: {}, showTimeout: {}, hideTimeout: {} }, emits: ["visible-change", "command", "click"], setup(e2, { expose: o2, emit: a2 }) {
  const m2 = e2;
  c();
  const u2 = a2, C2 = f(), z2 = f(), x2 = i(() => j(m2, ["items", "hideAfterClick", "size", "type", "splitButton"]));
  return g(), v(T, { handleItemClick: function(e3) {
    var _a;
    m2.hideOnClick && ((_a = C2.value) == null ? void 0 : _a.hide()), !D(e3.command) && u2("command", e3.command);
  }, size: i(() => m2.size) }), o2({ open: () => {
    var _a;
    return (_a = C2.value) == null ? void 0 : _a.show();
  }, close: () => {
    var _a;
    return (_a = C2.value) == null ? void 0 : _a.hide();
  } }), (o3, i2) => (t(), d("div", { class: n(["er-dropdown", { "is-disabled": m2.disabled }]), id: `dropdown-${r(w)().value}` }, [_(B, b({ ref_key: "tooltipRef", ref: C2 }, x2.value, { "virtual-triggering": e2.splitButton, "virtual-ref": z2.value, onVisibleChange: i2[1] || (i2[1] = (e3) => o3.$emit("visible-change", e3)) }), { content: y(() => [s("ul", R, [p(o3.$slots, "dropdown", {}, () => [(t(true), d(l, null, h(e2.items, (e3) => (t(), k(O, b({ key: e3.command ?? r(w)().value, ref_for: true }, e3), null, 16))), 128))], true)])]), default: y(() => [e2.splitButton ? (t(), k(r($), { key: 0, type: e2.type, size: e2.size, disabled: e2.disabled }, { default: y(() => [_(r(I), { onClick: i2[0] || (i2[0] = (e3) => o3.$emit("click", e3)) }, { default: y(() => [p(o3.$slots, "default", {}, void 0, true)]), _: 3 }), _(r(I), { ref_key: "triggerRef", ref: z2, icon: "angle-down" }, null, 512)]), _: 3 }, 8, ["type", "size", "disabled"])) : p(o3.$slots, "default", { key: 1 }, void 0, true)]), _: 3 }, 16, ["virtual-triggering", "virtual-ref"])], 10, A));
} }), [["__scopeId", "data-v-ed87f53f"]])), V = z(O);
export {
  S as E,
  V as a
};
