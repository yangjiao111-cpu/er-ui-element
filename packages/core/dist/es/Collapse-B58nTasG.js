import { defineComponent as e, ref as t, watchEffect as a, watch as l, provide as s, openBlock as i, createElementBlock as o, renderSlot as n, inject as r, computed as c, normalizeClass as d, createElementVNode as p, createTextVNode as m, toDisplayString as u, createVNode as v, Transition as _, mergeProps as h, toHandlers as f, withCtx as C, withDirectives as b, vShow as g } from "vue";
import { d as y, _ as I, w as k } from "./utils-CvN6jvNF.js";
import { E as A } from "./Icon-CYITiYZ1.js";
const E = Symbol("collapseContext"), N = "ErCollapse", x = e({
  name: N,
  __name: "Collapse",
  props: {
    modelValue: {
      type: Array,
      required: true
    },
    accordion: {
      type: Boolean,
      required: false
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e2, { expose: i2, emit: o2 }) {
    i2();
    const n2 = e2, r2 = o2, c2 = t(n2.modelValue);
    function handleItemClick(e3) {
      let t2 = [...c2.value];
      if (n2.accordion) {
        t2 = [t2[0] === e3 ? "" : e3];
        updateActiveNames(t2);
        return;
      }
      const a2 = t2.indexOf(e3);
      a2 > -1 ? t2.splice(a2, 1) : t2.push(e3);
      updateActiveNames(t2);
    }
    function updateActiveNames(e3) {
      c2.value = e3;
      r2("update:modelValue", e3);
      r2("change", e3);
    }
    a(() => {
      n2.accordion && c2.value.length > 1 && y(N);
    });
    l(() => n2.modelValue, (e3) => updateActiveNames(e3));
    s(E, {
      activeNames: c2,
      handleItemClick
    });
    const d2 = {
      COMP_NAME: N,
      props: n2,
      emit: r2,
      activeNames: c2,
      handleItemClick,
      updateActiveNames
    };
    Object.defineProperty(d2, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return d2;
  }
}), S = {
  class: "er-collapse"
};
const j = I(x, [["render", function(e2, t2, a2, l2, s2, r2) {
  return i(), o("div", S, [n(e2.$slots, "default", {}, void 0, true)]);
}], ["__scopeId", "data-v-239aeb27"], ["__file", "D:/Project/v-element/packages/components/Collapse/Collapse.vue"]]), _setHeightZero = (e2) => e2.style.height = "0px", _setHeightScroll = (e2) => e2.style.height = `${e2.scrollHeight}px`, _setHeightEmpty = (e2) => e2.style.height = "", _setOverflowHidden = (e2) => e2.style.overflow = "hidden", _setOverflowEmpty = (e2) => e2.style.overflow = "", $ = {
  beforeEnter(e2) {
    _setHeightZero(e2);
    _setOverflowHidden(e2);
  },
  enter: (e2) => _setHeightScroll(e2),
  afterEnter(e2) {
    _setHeightEmpty(e2);
    _setOverflowEmpty(e2);
  },
  beforeLeave(e2) {
    _setHeightScroll(e2);
    _setOverflowHidden(e2);
  },
  leave: (e2) => _setHeightZero(e2),
  afterLeave(e2) {
    _setHeightEmpty(e2);
    _setOverflowEmpty(e2);
  }
}, q = e({
  name: "ErCollapseItem",
  __name: "CollapseItem",
  props: {
    name: {
      type: [String, Number],
      required: true
    },
    title: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    }
  },
  setup(e2, { expose: t2 }) {
    t2();
    const a2 = e2, l2 = r(E, void 0), s2 = c(() => {
      var _a;
      return (_a = l2 == null ? void 0 : l2.activeNames.value) == null ? void 0 : _a.includes(a2.name);
    });
    const i2 = {
      props: a2,
      ctx: l2,
      isActive: s2,
      handleClick: function() {
        a2.disabled || (l2 == null ? void 0 : l2.handleItemClick(a2.name));
      },
      ErIcon: A,
      get transitionEvents() {
        return $;
      }
    };
    Object.defineProperty(i2, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return i2;
  }
}), P = ["id"], V = {
  class: "er-collapse-item__title"
}, w = {
  class: "er-collapse-item__wapper"
}, O = ["id"];
const B = I(q, [["render", function(e2, t2, a2, l2, s2, r2) {
  return i(), o(
    "div",
    {
      class: d(["er-collapse-item", {
        "is-disabled": a2.disabled
      }])
    },
    [p("div", {
      class: d(["er-collapse-item__header", {
        "is-disabled": a2.disabled,
        "is-active": l2.isActive
      }]),
      id: `item-header-${a2.name}`,
      onClick: l2.handleClick
    }, [p("span", V, [n(e2.$slots, "title", {}, () => [m(
      u(a2.title),
      1
      /* TEXT */
    )], true)]), v(l2.ErIcon, {
      icon: "angle-right",
      class: "header-angle"
    })], 10, P), v(
      _,
      h({
        name: "slide"
      }, f(l2.transitionEvents), {
        persisted: ""
      }),
      {
        default: C(() => [b(p(
          "div",
          w,
          [p("div", {
            class: "er-collapse-item__content",
            id: `item-content-${a2.name}`
          }, [n(e2.$slots, "default", {}, void 0, true)], 8, O)],
          512
          /* NEED_PATCH */
        ), [[g, l2.isActive]])]),
        _: 3
        /* FORWARDED */
      },
      16
      /* FULL_PROPS */
    )],
    2
    /* CLASS */
  );
}], ["__scopeId", "data-v-c75157a3"], ["__file", "D:/Project/v-element/packages/components/Collapse/CollapseItem.vue"]]), D = k(j), L = k(B);
export {
  D as E,
  L as a
};
