import { each, isFunction, cloneDeep, assign } from "lodash-es";
import { getCurrentInstance, useSlots, watchEffect } from "vue";
const _dfs = (nodes, cb) => each(nodes, (node) => {
  isFunction(cb) && cb(node);
  node.children && _dfs(node.children, cb);
});
function useDisabledStyle() {
  var _a, _b;
  const nodePropsMap = /* @__PURE__ */ new Map();
  const instance = getCurrentInstance();
  const children = (_b = (_a = useSlots()) == null ? void 0 : _a.default) == null ? void 0 : _b.call(_a);
  watchEffect(() => {
    var _a2;
    if (!((_a2 = instance.props) == null ? void 0 : _a2.disabled)) {
      _dfs(children ?? [], (node) => {
        if (!nodePropsMap.has(node)) return;
        node.props = nodePropsMap.get(node);
      });
      return;
    }
    _dfs(children ?? [], (node) => {
      if (!(node == null ? void 0 : node.props)) return;
      nodePropsMap.set(node, cloneDeep(node.props));
      node.props = assign(node == null ? void 0 : node.props, {
        style: {
          cursor: "not-allowed",
          color: "var(--er-text-color-placeholder)"
        }
      });
    });
  });
}
export {
  useDisabledStyle as u
};
