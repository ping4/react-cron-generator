"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadHeaders = exports.metadata = exports.HEADER = void 0;

var _minutes = _interopRequireDefault(require("../cron-tab/minutes"));

var _daily = _interopRequireDefault(require("../cron-tab/daily"));

var _hourly = _interopRequireDefault(require("../cron-tab/hourly"));

var _weekly = _interopRequireDefault(require("../cron-tab/weekly"));

var _monthly = _interopRequireDefault(require("../cron-tab/monthly"));

var HEADER = {
  MINUTES: 'MINUTES',
  HOURLY: 'HOURLY',
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY'
};
exports.HEADER = HEADER;
var HEADER_VALUES = {
  MINUTES: 'Minutes',
  HOURLY: 'Hourly',
  DAILY: 'Daily',
  WEEKLY: 'Weekly',
  MONTHLY: 'Monthly'
};
var defaultTabs = [HEADER_VALUES.MINUTES, HEADER_VALUES.HOURLY, HEADER_VALUES.DAILY, HEADER_VALUES.WEEKLY, HEADER_VALUES.MONTHLY];
var metadata = [{
  component: _minutes.default,
  initialCron: ['0', '0/1', '*', '*', '*', '?', '*']
}, {
  component: _hourly.default,
  initialCron: ['0', '0', '00', '1/1', '*', '?', '*']
}, {
  component: _daily.default,
  initialCron: ['0', '0', '00', '1/1', '*', '?', '*']
}, {
  component: _weekly.default,
  initialCron: ['0', '0', '00', '?', '*', '*', '*']
}, {
  component: _monthly.default,
  initialCron: ['0', '0', '00', '1', '1/1', '?', '*']
}];
exports.metadata = metadata;

var validateHeaders = function validateHeaders(headers) {
  var validatedHeaders = [];
  headers.forEach(function (header) {
    if (!HEADER_VALUES[header]) {
      throw new Error('Invalid header ' + header); // Avoid duplicates
    } else if (validatedHeaders.indexOf(HEADER_VALUES[header]) === -1) {
      validatedHeaders.push(HEADER_VALUES[header]);
    }
  });
  return validatedHeaders;
};
/**
 * Validate and load headers
 * @param {*} options 
 */


var loadHeaders = function loadHeaders(options) {
  if (options) {
    if (options.headers) {
      if (!options.headers.length) {
        throw new Error('Atleast one header is required.');
      }

      return validateHeaders(options.headers);
    }
  }

  return defaultTabs;
};

exports.loadHeaders = loadHeaders;