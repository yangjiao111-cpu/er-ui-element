import { defineComponent as e, computed as o, openBlock as t, createElementBlock as a, mergeProps as n, createVNode as p, unref as l, normalizeProps as s, guardReactiveProps as r } from "vue";
import { FontAwesomeIcon as i } from "@fortawesome/vue-fontawesome";
import { o as y } from "./vendor-B3CbtOf3.js";
import { _ as m, w as c } from "./utils-BPs9OFM8.js";
const B = m(e({ name: "ErIcon", inheritAttrs: false, __name: "Icon", props: { border: { type: Boolean }, fixedWidth: { type: Boolean }, flip: {}, icon: {}, mask: {}, listItem: { type: Boolean }, pull: {}, pulse: { type: Boolean }, rotation: {}, swapOpacity: { type: Boolean }, size: {}, spin: { type: Boolean }, transform: {}, symbol: { type: [Boolean, String] }, title: {}, inverse: { type: Boolean }, bounce: { type: Boolean }, shake: { type: Boolean }, beat: { type: Boolean }, fade: { type: Boolean }, beatFade: { type: Boolean }, spinPulse: { type: Boolean }, spinReverse: { type: Boolean }, type: {}, color: {} }, setup(e2) {
  const m2 = e2, c2 = o(() => y(m2, ["type", "color"])), B2 = o(() => ({ color: m2.color ?? void 0 }));
  return (o2, y2) => (t(), a("i", n({ class: ["er-icon", { [`er-icon--${e2.type}`]: e2.type }], style: B2.value }, o2.$attrs), [p(l(i), s(r(c2.value)), null, 16)], 16));
} }), [["__scopeId", "data-v-61203d03"]]), u = c(B);
export {
  B as E,
  u as a
};
