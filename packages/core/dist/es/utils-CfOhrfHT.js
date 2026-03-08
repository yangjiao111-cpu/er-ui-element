import { f as r } from "./vendor-CYsscUnA.js";
function n(n2) {
  return (c2) => r(n2, (r2) => c2.use(r2));
}
const c = (r2) => (r2.install = (n2) => {
  const c2 = r2.name;
  n2.component(c2, r2);
}, r2);
class o extends Error {
  constructor(r2) {
    super(r2), this.name = "ErUIError";
  }
}
function s(r2, n2) {
  if ("production" !== process.env.NODE_ENV) {
    const c2 = function(r3, n3) {
      return new o(`[${r3}] ${n3}`);
    }(r2, n2);
    console.warn(c2);
  }
}
const e = /* @__PURE__ */ new Map([["info", "circle-info"], ["success", "check-circle"], ["warning", "circle-exclamation"], ["danger", "circle-xmark"], ["error", "circle-xmark"]]), t = (r2, n2) => {
  const c2 = r2.__vccOpts || r2;
  for (const [r3, o2] of n2) c2[r3] = o2;
  return c2;
};
export {
  t as _,
  s as d,
  n as m,
  e as t,
  c as w
};
