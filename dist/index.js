"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToReadable = convertToReadable;
Object.defineProperty(exports, "HEADER", {
  enumerable: true,
  get: function get() {
    return _meta.HEADER;
  }
});
exports.default = void 0;

var _cronstrue = _interopRequireDefault(require("cronstrue"));

var _cron = _interopRequireDefault(require("./cron"));

var _meta = require("./meta");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function convertToReadable(cronExpr, opts) {
  return _cronstrue.default.toString(cronExpr, opts);
}

var _default = _cron.default;
exports.default = _default;