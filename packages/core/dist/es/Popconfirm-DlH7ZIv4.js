import { defineComponent as o, ref as e, computed as t, resolveComponent as n, openBlock as i, createBlock as c, createSlots as r, withCtx as l, createElementVNode as a, normalizeStyle as f, createCommentVNode as s, createTextVNode as m, toDisplayString as p, createVNode as u, unref as d, renderSlot as _ } from "vue";
import { T as y } from "./Tooltip-BBPvORYm.js";
import { E as B } from "./Button-BKL6t2-c.js";
import { a as T, _ as h, w as v } from "./utils-Dz6Hv9xU.js";
import { a as k } from "./hooks-cT4B6gSd.js";
const x = { class: "er-popconfirm__main" }, j = { class: "er-popconfirm__action" }, w = v(h(o({ name: "ErPopconfirm", __name: "Popconfirm", props: { title: { default: "" }, confirmButtonText: {}, cancelButtonText: {}, confirmButtonType: { default: "primary" }, cancelButtonType: {}, icon: { default: "question-circle" }, iconColor: { default: "#f90" }, hideIcon: { type: Boolean }, hideAfter: { default: 200 }, width: { default: 150 } }, emits: ["confirm", "cancel"], setup(o2, { emit: h2 }) {
  const v2 = o2, w2 = e(), C = t(() => ({ width: T(v2.width) })), $ = h2, { t: E } = k();
  function I() {
    var _a;
    (_a = w2.value) == null ? void 0 : _a.hide();
  }
  function g(o3) {
    $("confirm", o3), I();
  }
  function z(o3) {
    $("cancel", o3), I();
  }
  return (e2, t2) => {
    const T2 = n("er-icon");
    return i(), c(y, { ref_key: "tooltipRef", ref: w2, trigger: "click", "hide-timeout": o2.hideAfter }, r({ content: l(() => [a("div", { class: "er-popconfirm", style: f(C.value) }, [a("div", x, [!o2.hideIcon && o2.icon ? (i(), c(T2, { key: 0, icon: o2.icon, color: o2.iconColor }, null, 8, ["icon", "color"])) : s("", true), m(" " + p(o2.title), 1)]), a("div", j, [u(B, { size: "small", class: "er-popconfirm__cancel", type: o2.cancelButtonType, onClick: z }, { default: l(() => [m(p(o2.cancelButtonText || d(E)("popconfirm.cancelButtonText")), 1)]), _: 1 }, 8, ["type"]), u(B, { size: "small", class: "er-popconfirm__confirm", type: o2.confirmButtonType, onClick: g }, { default: l(() => [m(p(o2.confirmButtonText || d(E)("popconfirm.confirmButtonText")), 1)]), _: 1 }, 8, ["type"])])], 4)]), _: 2 }, [e2.$slots.default ? { name: "default", fn: l(() => [_(e2.$slots, "default", {}, void 0, true)]), key: "0" } : void 0, e2.$slots.reference ? { name: "default", fn: l(() => [_(e2.$slots, "reference", {}, void 0, true)]), key: "1" } : void 0]), 1032, ["hide-timeout"]);
  };
} }), [["__scopeId", "data-v-b4368d67"]]));
export {
  w as E
};
