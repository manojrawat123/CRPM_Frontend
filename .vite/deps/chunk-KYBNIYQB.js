import {
  differenceInCalendarDays,
  init_differenceInCalendarDays,
  init_requiredArgs,
  init_toDate,
  requiredArgs,
  toDate
} from "./chunk-NKCRT3UK.js";
import {
  __esm,
  __export
} from "./chunk-ROME4SDB.js";

// node_modules/date-fns/esm/isWeekend/index.js
var isWeekend_exports = {};
__export(isWeekend_exports, {
  default: () => isWeekend
});
function isWeekend(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var day = date.getDay();
  return day === 0 || day === 6;
}
var init_isWeekend = __esm({
  "node_modules/date-fns/esm/isWeekend/index.js"() {
    init_toDate();
    init_requiredArgs();
  }
});

// node_modules/date-fns/esm/differenceInDays/index.js
var differenceInDays_exports = {};
__export(differenceInDays_exports, {
  default: () => differenceInDays
});
function compareLocalAsc(dateLeft, dateRight) {
  var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
  } else {
    return diff;
  }
}
function differenceInDays(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var sign = compareLocalAsc(dateLeft, dateRight);
  var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight));
  dateLeft.setDate(dateLeft.getDate() - sign * difference);
  var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign);
  var result = sign * (difference - isLastDayNotFull);
  return result === 0 ? 0 : result;
}
var init_differenceInDays = __esm({
  "node_modules/date-fns/esm/differenceInDays/index.js"() {
    init_toDate();
    init_differenceInCalendarDays();
    init_requiredArgs();
  }
});

// node_modules/date-fns/esm/eachDayOfInterval/index.js
var eachDayOfInterval_exports = {};
__export(eachDayOfInterval_exports, {
  default: () => eachDayOfInterval
});
function eachDayOfInterval(dirtyInterval, options) {
  var _options$step;
  requiredArgs(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = toDate(interval.start);
  var endDate = toDate(interval.end);
  var endTime = endDate.getTime();
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError("Invalid interval");
  }
  var dates = [];
  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);
  var step = Number((_options$step = options === null || options === void 0 ? void 0 : options.step) !== null && _options$step !== void 0 ? _options$step : 1);
  if (step < 1 || isNaN(step))
    throw new RangeError("`options.step` must be a number greater than 1");
  while (currentDate.getTime() <= endTime) {
    dates.push(toDate(currentDate));
    currentDate.setDate(currentDate.getDate() + step);
    currentDate.setHours(0, 0, 0, 0);
  }
  return dates;
}
var init_eachDayOfInterval = __esm({
  "node_modules/date-fns/esm/eachDayOfInterval/index.js"() {
    init_toDate();
    init_requiredArgs();
  }
});

export {
  isWeekend,
  isWeekend_exports,
  init_isWeekend,
  differenceInDays,
  differenceInDays_exports,
  init_differenceInDays,
  eachDayOfInterval,
  eachDayOfInterval_exports,
  init_eachDayOfInterval
};
//# sourceMappingURL=chunk-KYBNIYQB.js.map
