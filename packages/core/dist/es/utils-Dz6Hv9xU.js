import { i as r, a as n } from "./vendor-7Dpq5lhG.js";
const c = (r2, n2) => {
  const c2 = r2.__vccOpts || r2;
  for (const [r3, s2] of n2) c2[r3] = s2;
  return c2;
}, s = (r2) => (r2.install = (n2) => {
  const c2 = r2.name;
  n2.component(c2, r2);
}, r2);
class e extends Error {
  constructor(r2) {
    super(r2), this.name = "ErUIError";
  }
}
function o(n2, c2) {
  if ("production" !== process.env.NODE_ENV) {
    const s2 = r(n2) ? function(r2, n3) {
      return new e(`[${r2}] ${n3}`);
    }(n2, c2) : n2;
    console.warn(s2);
  }
}
function t(c2, s2 = "px") {
  return c2 ? n(c2) || ((n2) => !!r(n2) && !Number.isNaN(Number(n2)))(c2) ? `${c2}${s2}` : r(c2) ? c2 : void o("utils/style", "[binding value must be a string or number]") : "";
}
const a = /* @__PURE__ */ new Map([["info", "circle-info"], ["success", "check-circle"], ["warning", "circle-exclamation"], ["danger", "circle-xmark"], ["error", "circle-xmark"]]);
export {
  c as _,
  t as a,
  o as d,
  a as t,
  s as w
};
