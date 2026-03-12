import { isRef as e, watch as t, onMounted as a, onBeforeUnmount as o, unref as r, getCurrentInstance as n, useSlots as l, watchEffect as s, computed as i, inject as c } from "vue";
import { f as d, b as u, c as p, d as m, o as h, n as g, e as v } from "./vendor-7Dpq5lhG.js";
function f(n2, l2) {
  var s2, i2, c2;
  s2 = document, i2 = "click", c2 = (e2) => {
    n2.value && e2.target && (n2.value.contains(e2.target) || l2(e2));
  }, e(s2) ? t(s2, (e2, t2) => {
    null == t2 || t2.removeEventListener(i2, c2), null == e2 || e2.addEventListener(i2, c2);
  }) : a(() => null == s2 ? void 0 : s2.addEventListener(i2, c2)), o(() => {
    var e2;
    return null == (e2 = r(s2)) ? void 0 : e2.removeEventListener(i2, c2);
  });
}
const w = (e2, t2) => d(e2, (e3) => {
  u(t2) && t2(e3), e3.children && w(e3.children, t2);
});
function y() {
  var e2, t2;
  const a2 = /* @__PURE__ */ new Map(), o2 = n(), r2 = null == (t2 = null == (e2 = l()) ? void 0 : e2.default) ? void 0 : t2.call(e2);
  s(() => {
    var e3;
    (null == (e3 = o2.props) ? void 0 : e3.disabled) ? w(r2 ?? [], (e4) => {
      (null == e4 ? void 0 : e4.props) && (a2.set(e4, p(e4.props)), e4.props = m(null == e4 ? void 0 : e4.props, { style: { cursor: "not-allowed", color: "var(--er-text-color-placeholder)" } }));
    }) : w(r2 ?? [], (e4) => {
      a2.has(e4) && (e4.props = a2.get(e4));
    });
  });
}
const b = { profix: Math.floor(1e4 * Math.random()), current: 0 };
function x(e2 = "er") {
  return i(() => `${e2}-${b.profix}-${b.current++}`);
}
const T = { name: "en", el: { colorpicker: { confirm: "OK", clear: "Clear", defaultLabel: "color picker", description: "current color is {color}. press enter to select a new color." }, datepicker: { now: "Now", today: "Today", cancel: "Cancel", clear: "Clear", confirm: "OK", dateTablePrompt: "Use the arrow keys and enter to select the day of the month", monthTablePrompt: "Use the arrow keys and enter to select the month", yearTablePrompt: "Use the arrow keys and enter to select the year", selectedDate: "Selected date", selectDate: "Select date", selectTime: "Select time", startDate: "Start Date", startTime: "Start Time", endDate: "End Date", endTime: "End Time", prevYear: "Previous Year", nextYear: "Next Year", prevMonth: "Previous Month", nextMonth: "Next Month", year: "", month1: "January", month2: "February", month3: "March", month4: "April", month5: "May", month6: "June", month7: "July", month8: "August", month9: "September", month10: "October", month11: "November", month12: "December", week: "week", weeks: { sun: "Sun", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat" }, weeksFull: { sun: "Sunday", mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday" }, months: { jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr", may: "May", jun: "Jun", jul: "Jul", aug: "Aug", sep: "Sep", oct: "Oct", nov: "Nov", dec: "Dec" } }, inputNumber: { decrease: "decrease number", increase: "increase number" }, select: { loading: "Loading", noMatch: "No matching data", noData: "No data", placeholder: "Select" }, dropdown: { toggleDropdown: "Toggle Dropdown" }, cascader: { noMatch: "No matching data", loading: "Loading", placeholder: "Select", noData: "No data" }, pagination: { goto: "Go to", pagesize: "/page", total: "Total {total}", pageClassifier: "", page: "Page", prev: "Go to previous page", next: "Go to next page", currentPage: "page {pager}", prevPages: "Previous {pager} pages", nextPages: "Next {pager} pages", deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details" }, dialog: { close: "Close this dialog" }, drawer: { close: "Close this dialog" }, messagebox: { title: "Message", confirm: "OK", cancel: "Cancel", error: "Illegal input", close: "Close this dialog" }, upload: { deleteTip: "press delete to remove", delete: "Delete", preview: "Preview", continue: "Continue" }, slider: { defaultLabel: "slider between {min} and {max}", defaultRangeStartLabel: "pick start value", defaultRangeEndLabel: "pick end value" }, table: { emptyText: "No Data", confirmFilter: "Confirm", resetFilter: "Reset", clearFilter: "All", sumText: "Sum" }, tour: { next: "Next", previous: "Previous", finish: "Finish" }, tree: { emptyText: "No Data" }, transfer: { noMatch: "No matching data", noData: "No data", titles: ["List 1", "List 2"], filterPlaceholder: "Enter keyword", noCheckedFormat: "{total} items", hasCheckedFormat: "{checked}/{total} checked" }, image: { error: "FAILED" }, pageHeader: { title: "Back" }, popconfirm: { confirmButtonText: "Yes", cancelButtonText: "No" }, carousel: { leftArrow: "Carousel arrow left", rightArrow: "Carousel arrow right", indicator: "Carousel switch to index {index}" } } };
function k(e2) {
  return h(c(g, v({ locale: T.name, messages: { en: T.el } })), "install");
}
export {
  k as a,
  x as b,
  y as c,
  f as u
};
