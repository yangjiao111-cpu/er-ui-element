import { f as r } from "./vendor-D9ZsCD2A.js";
function makeInstaller(n2) {
  return (e) => r(n2, (r2) => e.use(r2));
}
const withInstall = (r2) => {
  r2.install = (n2) => {
    const e = r2.name;
    n2.component(e, r2);
  };
  return r2;
};
class ErUIError extends Error {
  constructor(r2) {
    super(r2);
    this.name = "ErUIError";
  }
}
function debugWarn(r2, n2) {
  if ("production" !== process.env.NODE_ENV) {
    const n3 = new ErUIError(`[${r2}] accordion mode should only have one active item`);
    console.warn(n3);
  }
}
const n = /* @__PURE__ */ new Map([["info", "circle-info"], ["success", "check-circle"], ["warning", "circle-exclamation"], ["danger", "circle-xmark"], ["error", "circle-xmark"]]), _export_sfc = (r2, n2) => {
  const e = r2.__vccOpts || r2;
  for (const [r3, o] of n2) {
    e[r3] = o;
  }
  return e;
};
export {
  _export_sfc as _,
  debugWarn as d,
  makeInstaller as m,
  n as t,
  withInstall as w
};
