import { defineComponent as e, useSlots as t, inject as o, ref as i, computed as n, openBlock as r, createBlock as l, resolveDynamicComponent as s, normalizeClass as a, withCtx as d, renderSlot as u, createVNode as p, normalizeStyle as c, createCommentVNode as y, provide as f, reactive as b, toRef as g, createElementBlock as m } from "vue";
import { E as _ } from "./Icon-CYITiYZ1.js";
import { t as B } from "./vendor-D9ZsCD2A.js";
import { _ as v, w as q } from "./utils-CvN6jvNF.js";
const S = Symbol("BUTTON_GROUP_CTX_KEY");
const z = v(e({
  name: "ErButton",
  __name: "Button",
  props: {
    tag: {
      type: null,
      required: false,
      default: "button"
    },
    type: {
      type: String,
      required: false
    },
    size: {
      type: String,
      required: false
    },
    nativeType: {
      type: String,
      required: false,
      default: "button"
    },
    disabled: {
      type: Boolean,
      required: true
    },
    loading: {
      type: Boolean,
      required: false
    },
    icon: {
      type: String,
      required: true
    },
    circle: {
      type: Boolean,
      required: true
    },
    plain: {
      type: Boolean,
      required: false
    },
    round: {
      type: Boolean,
      required: false
    },
    loadingIcon: {
      type: String,
      required: false
    },
    autofocus: {
      type: Boolean,
      required: false
    },
    useThrottle: {
      type: Boolean,
      required: false,
      default: true
    },
    throttleDuration: {
      type: Number,
      required: false,
      default: 500
    }
  },
  emits: ["click"],
  setup(e2, { expose: r2, emit: l2 }) {
    const s2 = e2, a2 = l2, d2 = t(), u2 = o(S, void 0), p2 = i(), c2 = n(() => (u2 == null ? void 0 : u2.size) ?? s2.size ?? ""), y2 = n(() => (u2 == null ? void 0 : u2.type) ?? s2.type ?? ""), f2 = n(() => (u2 == null ? void 0 : u2.disabled) ?? s2.disabled ?? ""), b2 = n(() => {
      d2.default;
    }), handleBtnClick = (e3) => a2("click", e3), g2 = B(handleBtnClick, s2.throttleDuration, {
      trailing: false
    });
    r2({
      ref: p2,
      disabled: f2,
      size: c2,
      type: y2
    });
    const m2 = {
      props: s2,
      emit: a2,
      slots: d2,
      ctx: u2,
      _ref: p2,
      size: c2,
      type: y2,
      disabled: f2,
      iconStyle: b2,
      handleBtnClick,
      handleBtnClickThrottle: g2,
      ErIcon: _
    };
    Object.defineProperty(m2, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return m2;
  }
}), [["render", function(e2, t2, o2, i2, n2, f2) {
  return r(), l(s(i2.props.tag), {
    autofocus: o2.autofocus,
    ref: "_ref",
    class: a(["er-button", {
      [`er-button--${i2.type}`]: i2.type,
      [`er-button--${i2.size}`]: i2.size,
      "is-plain": o2.plain,
      "is-round": o2.round,
      "is-circle": o2.circle,
      "is-disabled": i2.disabled,
      "is-loading": o2.loading
    }]),
    type: "button" === o2.tag ? o2.nativeType : void 0,
    disabled: !(!i2.disabled && !o2.loading) || void 0,
    onClick: t2[0] || (t2[0] = (e3) => {
      o2.useThrottle ? i2.handleBtnClickThrottle(e3) : i2.handleBtnClick(e3);
    })
  }, {
    default: d(() => [o2.loading ? u(e2.$slots, "loading", {
      key: 0
    }, () => [p(i2.ErIcon, {
      style: c(i2.iconStyle),
      class: "loading-icon",
      icon: o2.loadingIcon ?? "spinner",
      size: "1x",
      spin: ""
    }, null, 8, ["style", "icon"])], true) : y("v-if", true), o2.icon && !o2.loading ? (r(), l(i2.ErIcon, {
      key: 1,
      icon: o2.icon,
      size: "1x",
      style: {}
    }, null, 8, ["icon"])) : y("v-if", true), u(e2.$slots, "default", {}, void 0, true)]),
    _: 3
    /* FORWARDED */
  }, 8, ["autofocus", "type", "disabled", "class"]);
}], ["__scopeId", "data-v-e5515568"], ["__file", "D:/Project/v-element/packages/components/Button/Button.vue"]]), k = e({
  name: "ErButtonGroup",
  __name: "ButtonGroup",
  props: {
    size: {
      type: String,
      required: false
    },
    type: {
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
    const o2 = e2;
    f(S, b({
      size: g(o2.size),
      type: g(o2.type),
      disabled: g(o2.disabled)
    }));
    const i2 = {
      props: o2
    };
    Object.defineProperty(i2, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return i2;
  }
}), h = {
  class: "er-button-group"
};
const T = v(k, [["render", function(e2, t2, o2, i2, n2, l2) {
  return r(), m("div", h, [u(e2.$slots, "default", {}, void 0, true)]);
}], ["__scopeId", "data-v-a102b633"], ["__file", "D:/Project/v-element/packages/components/Button/ButtonGroup.vue"]]), E = q(z), I = q(T);
export {
  E,
  I as a
};
