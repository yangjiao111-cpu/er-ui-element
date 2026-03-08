import { t as e, _ as t, w as l } from "./utils-CfOhrfHT.js";
import { defineComponent as o, useSlots as s, ref as a, computed as c, openBlock as r, createBlock as n, Transition as i, withCtx as p, withDirectives as f, createElementVNode as _, normalizeClass as u, createCommentVNode as d, normalizeStyle as m, renderSlot as v, createTextVNode as y, toDisplayString as w, createElementBlock as h, createVNode as I, withModifiers as k, vShow as x } from "vue";
import { E as $ } from "./Icon-BZIh6ELa.js";
const b = { class: "er-alert__content" }, g = { class: "er-alert__description" }, B = { key: 0, class: "er-alert__close" }, E = l(t(o({ name: "ErAlert", __name: "Alert", props: { title: {}, type: { default: "info" }, description: {}, effect: { default: "light" }, closable: { type: Boolean, default: true }, center: { type: Boolean }, showIcon: { type: Boolean } }, emits: ["close"], setup(t2, { expose: l2, emit: o2 }) {
  const E2 = t2, j = o2, A = s(), C = a(true), q = c(() => e.get(E2.type) ?? "circle-info"), z = c(() => E2.description || A.default);
  function D() {
    C.value = false, j("close");
  }
  return l2({ close: D, open: function() {
    C.value = true;
  } }), (e2, l3) => (r(), n(i, { name: "er-alert-fade" }, { default: p(() => [f(_("div", { class: u(["er-alert", { [`er-alert__${t2.type}`]: t2.type, [`er-alert__${t2.effect}`]: t2.effect, "text-center": t2.center }]), role: "alert" }, [t2.showIcon ? (r(), n($, { key: 0, class: u(["er-alert__icon", { "big-icon": z.value }]), icon: q.value }, null, 8, ["class", "icon"])) : d("", true), _("div", b, [_("span", { class: u(["er-alert__title", { "with-desc": z.value }]), style: m({ display: t2.center && !t2.showIcon ? "flow" : "inline" }) }, [v(e2.$slots, "title", {}, () => [y(w(t2.title), 1)], true)], 6), _("p", g, [v(e2.$slots, "default", {}, () => [y(w(t2.description), 1)], true)]), t2.closable ? (r(), h("div", B, [I($, { onClick: k(D, ["stop"]), icon: "xmark" })])) : d("", true)])], 2), [[x, C.value]])]), _: 3 }));
} }), [["__scopeId", "data-v-a480413f"]]));
export {
  E
};
