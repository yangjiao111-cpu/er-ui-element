import { defineComponent as e, computed as r, openBlock as t, createElementBlock as o, mergeProps as i, createVNode as n, normalizeProps as p, guardReactiveProps as s } from "vue";
import { FontAwesomeIcon as a } from "@fortawesome/vue-fontawesome";
import { o as u } from "./vendor-D9ZsCD2A.js";
import { _ as l, w as d } from "./utils-CvN6jvNF.js";
const y = l(e({
  name: "ErIcon",
  inheritAttrs: false,
  __name: "Icon",
  props: {
    border: {
      type: Boolean,
      required: false
    },
    fixedWidth: {
      type: Boolean,
      required: false
    },
    flip: {
      type: String,
      required: false
    },
    icon: {
      type: [Object, Array, String],
      required: true
    },
    mask: {
      type: [Object, Array, String],
      required: false
    },
    listItem: {
      type: Boolean,
      required: false
    },
    pull: {
      type: String,
      required: false
    },
    pulse: {
      type: Boolean,
      required: false
    },
    rotation: {
      type: [Number, String],
      required: false
    },
    swapOpacity: {
      type: Boolean,
      required: false
    },
    size: {
      type: String,
      required: false
    },
    spin: {
      type: Boolean,
      required: false
    },
    transform: {
      type: [Object, String],
      required: false
    },
    symbol: {
      type: [Boolean, String],
      required: false
    },
    title: {
      type: String,
      required: false
    },
    inverse: {
      type: Boolean,
      required: false
    },
    bounce: {
      type: Boolean,
      required: false
    },
    shake: {
      type: Boolean,
      required: false
    },
    beat: {
      type: Boolean,
      required: false
    },
    fade: {
      type: Boolean,
      required: false
    },
    beatFade: {
      type: Boolean,
      required: false
    },
    spinPulse: {
      type: Boolean,
      required: false
    },
    spinReverse: {
      type: Boolean,
      required: false
    },
    type: {
      type: String,
      required: false
    },
    color: {
      type: String,
      required: false
    }
  },
  setup(e2, { expose: t2 }) {
    t2();
    const o2 = e2, i2 = r(() => u(o2, ["type", "color"])), n2 = r(() => ({
      color: o2.color ?? void 0
    })), p2 = {
      props: o2,
      filterProps: i2,
      customStyles: n2,
      get FontAwesomeIcon() {
        return a;
      }
    };
    Object.defineProperty(p2, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return p2;
  }
}), [["render", function(e2, r2, a2, u2, l2, d2) {
  return t(), o(
    "i",
    i({
      class: ["er-icon", {
        [`er-icon--${a2.type}`]: a2.type
      }],
      style: u2.customStyles
    }, e2.$attrs),
    [n(
      u2.FontAwesomeIcon,
      p(s(u2.filterProps)),
      null,
      16
      /* FULL_PROPS */
    )],
    16
    /* FULL_PROPS */
  );
}], ["__scopeId", "data-v-47e0212d"], ["__file", "D:/Project/v-element/packages/components/Icon/Icon.vue"]]), c = d(y);
export {
  y as E,
  c as a
};
