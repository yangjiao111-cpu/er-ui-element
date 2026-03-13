import { d as e, w as t } from "./utils-BPs9OFM8.js";
import { ref as a, getCurrentInstance as o, computed as r, unref as n, inject as l, provide as s, defineComponent as i, renderSlot as c } from "vue";
import { m as d, n as u, e as m } from "./vendor-B3CbtOf3.js";
const p = Symbol(), g = { name: "en", el: { colorpicker: { confirm: "OK", clear: "Clear", defaultLabel: "color picker", description: "current color is {color}. press enter to select a new color." }, datepicker: { now: "Now", today: "Today", cancel: "Cancel", clear: "Clear", confirm: "OK", dateTablePrompt: "Use the arrow keys and enter to select the day of the month", monthTablePrompt: "Use the arrow keys and enter to select the month", yearTablePrompt: "Use the arrow keys and enter to select the year", selectedDate: "Selected date", selectDate: "Select date", selectTime: "Select time", startDate: "Start Date", startTime: "Start Time", endDate: "End Date", endTime: "End Time", prevYear: "Previous Year", nextYear: "Next Year", prevMonth: "Previous Month", nextMonth: "Next Month", year: "", month1: "January", month2: "February", month3: "March", month4: "April", month5: "May", month6: "June", month7: "July", month8: "August", month9: "September", month10: "October", month11: "November", month12: "December", week: "week", weeks: { sun: "Sun", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat" }, weeksFull: { sun: "Sunday", mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday" }, months: { jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr", may: "May", jun: "Jun", jul: "Jul", aug: "Aug", sep: "Sep", oct: "Oct", nov: "Nov", dec: "Dec" } }, inputNumber: { decrease: "decrease number", increase: "increase number" }, select: { loading: "Loading", noMatch: "No matching data", noData: "No data", placeholder: "Select" }, dropdown: { toggleDropdown: "Toggle Dropdown" }, cascader: { noMatch: "No matching data", loading: "Loading", placeholder: "Select", noData: "No data" }, pagination: { goto: "Go to", pagesize: "/page", total: "Total {total}", pageClassifier: "", page: "Page", prev: "Go to previous page", next: "Go to next page", currentPage: "page {pager}", prevPages: "Previous {pager} pages", nextPages: "Next {pager} pages", deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details" }, dialog: { close: "Close this dialog" }, drawer: { close: "Close this dialog" }, messagebox: { title: "Message", confirm: "OK", cancel: "Cancel", error: "Illegal input", close: "Close this dialog" }, upload: { deleteTip: "press delete to remove", delete: "Delete", preview: "Preview", continue: "Continue" }, slider: { defaultLabel: "slider between {min} and {max}", defaultRangeStartLabel: "pick start value", defaultRangeEndLabel: "pick end value" }, table: { emptyText: "No Data", confirmFilter: "Confirm", resetFilter: "Reset", clearFilter: "All", sumText: "Sum" }, tour: { next: "Next", previous: "Previous", finish: "Finish" }, tree: { emptyText: "No Data" }, transfer: { noMatch: "No matching data", noData: "No data", titles: ["List 1", "List 2"], filterPlaceholder: "Enter keyword", noCheckedFormat: "{total} items", hasCheckedFormat: "{checked}/{total} checked" }, image: { error: "FAILED" }, pageHeader: { title: "Back" }, popconfirm: { confirmButtonText: "Yes", cancelButtonText: "No" }, carousel: { leftArrow: "Carousel arrow left", rightArrow: "Carousel arrow right", indicator: "Carousel switch to index {index}" } } }, h = a();
function v(e2, t2 = void 0) {
  const a2 = o() ? l(p, h) : h;
  return e2 ? r(() => {
    var _a;
    return ((_a = a2.value) == null ? void 0 : _a[e2]) ?? t2;
  }) : a2;
}
function f(t2 = { locale: g }, a2, l2 = false) {
  const i2 = o(), c2 = i2 ? v() : void 0, f2 = (a2 == null ? void 0 : a2.provide) ?? (i2 ? s : void 0);
  if (!f2) return void e("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup()");
  const y2 = r(() => {
    const e2 = n(t2);
    return (c2 == null ? void 0 : c2.value) ? d(c2.value, e2) : e2;
  }), w = r(() => ((e2) => {
    var _a, _b, _c;
    const t3 = (t4) => d(t4, (e2 == null ? void 0 : e2.extendsI18nMsg) ?? {});
    return m((e2 == null ? void 0 : e2.locale) ? { locale: ((_a = e2.locale) == null ? void 0 : _a.name) || "en", messages: t3({ [((_b = e2.locale) == null ? void 0 : _b.name) || "en"]: ((_c = e2.locale) == null ? void 0 : _c.el) || {} }) } : { locale: "en", messages: t3({ en: g.el }) });
  })(y2.value));
  return f2(p, y2), f2(u, w.value), a2 && a2.use(w.value), !l2 && h.value || (h.value = y2.value), y2;
}
const y = t(i({ name: "ErConfigProvider", __name: "ConfigProvider", props: { locale: {}, extendsI18Msg: {} }, setup(e2) {
  const t2 = f(e2);
  return (e3, a2) => c(e3.$slots, "default", { config: n(t2) });
} }));
export {
  y as E,
  g as a,
  f as p,
  v as u
};
