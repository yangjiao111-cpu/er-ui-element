import { t as e, _ as t, w as r } from "./utils-CvN6jvNF.js";
import { defineComponent as o, useSlots as i, ref as s, computed as l, openBlock as n, createBlock as c, Transition as a, withCtx as p, withDirectives as d, createElementVNode as u, normalizeClass as f, createCommentVNode as _, normalizeStyle as m, renderSlot as y, createTextVNode as v, toDisplayString as b, createElementBlock as w, createVNode as g, withModifiers as h, vShow as I } from "vue";
import { E as q } from "./Icon-CYITiYZ1.js";
const E = o({
  name: "ErAlert",
  __name: "Alert",
  props: {
    title: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false,
      default: "info"
    },
    description: {
      type: String,
      required: false
    },
    effect: {
      type: String,
      required: false,
      default: "light"
    },
    closable: {
      type: Boolean,
      required: false,
      default: true
    },
    center: {
      type: Boolean,
      required: false
    },
    showIcon: {
      type: Boolean,
      required: false
    }
  },
  emits: ["close"],
  setup(t2, { expose: r2, emit: o2 }) {
    const n2 = t2, c2 = o2, a2 = i(), p2 = s(true), d2 = l(() => e.get(n2.type) ?? "circle-info"), u2 = l(() => n2.description || a2.default);
    function close() {
      p2.value = false;
      c2("close");
    }
    function open() {
      p2.value = true;
    }
    r2({
      close,
      open
    });
    const f2 = {
      props: n2,
      emits: c2,
      slots: a2,
      visible: p2,
      iconName: d2,
      withDescription: u2,
      close,
      open,
      ErIcon: q
    };
    Object.defineProperty(f2, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return f2;
  }
}), S = {
  class: "er-alert__content"
}, k = {
  class: "er-alert__description"
}, j = {
  key: 0,
  class: "er-alert__close"
};
const x = r(t(E, [["render", function(e2, t2, r2, o2, i2, s2) {
  return n(), c(a, {
    name: "er-alert-fade",
    persisted: ""
  }, {
    default: p(() => [d(u(
      "div",
      {
        class: f(["er-alert", {
          [`er-alert__${r2.type}`]: r2.type,
          [`er-alert__${r2.effect}`]: r2.effect,
          "text-center": r2.center
        }]),
        role: "alert"
      },
      [r2.showIcon ? (n(), c(o2.ErIcon, {
        key: 0,
        class: f(["er-alert__icon", {
          "big-icon": o2.withDescription
        }]),
        icon: o2.iconName
      }, null, 8, ["class", "icon"])) : _("v-if", true), u("div", S, [u(
        "span",
        {
          class: f(["er-alert__title", {
            "with-desc": o2.withDescription
          }]),
          style: m({
            display: r2.center && !r2.showIcon ? "flow" : "inline"
          })
        },
        [y(e2.$slots, "title", {}, () => [v(
          b(r2.title),
          1
          /* TEXT */
        )], true)],
        6
        /* CLASS, STYLE */
      ), u("p", k, [y(e2.$slots, "default", {}, () => [v(
        b(r2.description),
        1
        /* TEXT */
      )], true)]), r2.closable ? (n(), w("div", j, [g(o2.ErIcon, {
        onClick: h(o2.close, ["stop"]),
        icon: "xmark"
      })])) : _("v-if", true)])],
      2
      /* CLASS */
    ), [[I, o2.visible]])]),
    _: 3
    /* FORWARDED */
  });
}], ["__scopeId", "data-v-bbe30046"], ["__file", "D:/Project/v-element/packages/components/Alert/Alert.vue"]]));
export {
  x as E
};
