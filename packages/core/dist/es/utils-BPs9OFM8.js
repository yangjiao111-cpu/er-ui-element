import { i as r, a as e, b as n } from "./vendor-B3CbtOf3.js";
import { defineComponent as o } from "vue";
const s = (r2, e2) => {
  const n2 = r2.__vccOpts || r2;
  for (const [r3, o2] of e2) n2[r3] = o2;
  return n2;
}, c = (r2) => (r2.install = (e2) => {
  const n2 = r2.name;
  e2.component(n2, r2);
}, r2), t = (r2, e2) => (r2.install = (n2) => {
  n2.config.globalProperties[e2] = r2;
}, r2);
class i extends Error {
  constructor(r2) {
    super(r2), this.name = "ErUIError";
  }
}
function a(e2, n2) {
  if ("production" !== process.env.NODE_ENV) {
    const o2 = r(e2) ? function(r2, e3) {
      return new i(`[${r2}] ${e3}`);
    }(e2, n2) : e2;
    console.warn(o2);
  }
}
function u(n2, o2 = "px") {
  return n2 ? e(n2) || ((e2) => !!r(e2) && !Number.isNaN(Number(e2)))(n2) ? `${n2}${o2}` : r(n2) ? n2 : void a("utils/style", "[binding value must be a string or number]") : "";
}
const l = /* @__PURE__ */ new Map([["info", "circle-info"], ["success", "check-circle"], ["warning", "circle-exclamation"], ["danger", "circle-xmark"], ["error", "circle-xmark"]]), p = o({ props: { vNode: { type: [String, Object, Function], required: true } }, setup: (r2) => () => n(r2.vNode) ? r2.vNode() : r2.vNode });
export {
  p as R,
  s as _,
  u as a,
  t as b,
  a as d,
  l as t,
  c as w
};
