import { d as e, w as t } from "./utils-Dz6Hv9xU.js";
import { ref as a, getCurrentInstance as o, provide as r, computed as n, unref as l, inject as s, defineComponent as i } from "vue";
import { m as c, n as d, e as u } from "./vendor-7Dpq5lhG.js";
const m = Symbol(), p = { name: "en", el: { colorpicker: { confirm: "OK", clear: "Clear", defaultLabel: "color picker", description: "current color is {color}. press enter to select a new color." }, datepicker: { now: "Now", today: "Today", cancel: "Cancel", clear: "Clear", confirm: "OK", dateTablePrompt: "Use the arrow keys and enter to select the day of the month", monthTablePrompt: "Use the arrow keys and enter to select the month", yearTablePrompt: "Use the arrow keys and enter to select the year", selectedDate: "Selected date", selectDate: "Select date", selectTime: "Select time", startDate: "Start Date", startTime: "Start Time", endDate: "End Date", endTime: "End Time", prevYear: "Previous Year", nextYear: "Next Year", prevMonth: "Previous Month", nextMonth: "Next Month", year: "", month1: "January", month2: "February", month3: "March", month4: "April", month5: "May", month6: "June", month7: "July", month8: "August", month9: "September", month10: "October", month11: "November", month12: "December", week: "week", weeks: { sun: "Sun", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat" }, weeksFull: { sun: "Sunday", mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday" }, months: { jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr", may: "May", jun: "Jun", jul: "Jul", aug: "Aug", sep: "Sep", oct: "Oct", nov: "Nov", dec: "Dec" } }, inputNumber: { decrease: "decrease number", increase: "increase number" }, select: { loading: "Loading", noMatch: "No matching data", noData: "No data", placeholder: "Select" }, dropdown: { toggleDropdown: "Toggle Dropdown" }, cascader: { noMatch: "No matching data", loading: "Loading", placeholder: "Select", noData: "No data" }, pagination: { goto: "Go to", pagesize: "/page", total: "Total {total}", pageClassifier: "", page: "Page", prev: "Go to previous page", next: "Go to next page", currentPage: "page {pager}", prevPages: "Previous {pager} pages", nextPages: "Next {pager} pages", deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details" }, dialog: { close: "Close this dialog" }, drawer: { close: "Close this dialog" }, messagebox: { title: "Message", confirm: "OK", cancel: "Cancel", error: "Illegal input", close: "Close this dialog" }, upload: { deleteTip: "press delete to remove", delete: "Delete", preview: "Preview", continue: "Continue" }, slider: { defaultLabel: "slider between {min} and {max}", defaultRangeStartLabel: "pick start value", defaultRangeEndLabel: "pick end value" }, table: { emptyText: "No Data", confirmFilter: "Confirm", resetFilter: "Reset", clearFilter: "All", sumText: "Sum" }, tour: { next: "Next", previous: "Previous", finish: "Finish" }, tree: { emptyText: "No Data" }, transfer: { noMatch: "No matching data", noData: "No data", titles: ["List 1", "List 2"], filterPlaceholder: "Enter keyword", noCheckedFormat: "{total} items", hasCheckedFormat: "{checked}/{total} checked" }, image: { error: "FAILED" }, pageHeader: { title: "Back" }, popconfirm: { confirmButtonText: "Yes", cancelButtonText: "No" }, carousel: { leftArrow: "Carousel arrow left", rightArrow: "Carousel arrow right", indicator: "Carousel switch to index {index}" } } }, g = a();
function h(e2, t2 = void 0) {
  const a2 = o() ? s(m, g) : g;
  return e2 ? n(() => {
    var _a;
    return ((_a = a2.value) == null ? void 0 : _a[e2]) ?? t2;
  }) : a2;
}
function v(t2 = { locale: p }, a2, s2 = false) {
  const i2 = o(), v2 = i2 ? h() : void 0, f2 = (a2 == null ? void 0 : a2.provide) ?? (i2 ? r : void 0);
  if (!f2) return void e("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup()");
  const y = n(() => {
    const e2 = l(t2);
    return (v2 == null ? void 0 : v2.value) ? c(v2.value, e2) : e2;
  }), w = n(() => ((e2) => {
    var _a, _b, _c;
    const t3 = (t4) => c(t4, (e2 == null ? void 0 : e2.extendsI18nMsg) ?? {});
    return u((e2 == null ? void 0 : e2.locale) ? { locale: ((_a = e2.locale) == null ? void 0 : _a.name) || "en", messages: t3({ [((_b = e2.locale) == null ? void 0 : _b.name) || "en"]: ((_c = e2.locale) == null ? void 0 : _c.el) || {} }) } : { locale: "en", messages: t3({ en: p.el }) });
  })(y.value));
  return f2(m, y), f2(d, w.value), a2 && a2.use(w.value), !s2 && g.value || (g.value = y.value), y;
}
const f = t(i({ name: "ErConfigProvider", __name: "ConfigProvider", props: { locale: {}, extendsI18Msg: {} }, setup: (e2) => (e3, t2) => null }));
export {
  f as E,
  p as a,
  v as p,
  h as u
};
