"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createSuper"));

var _react = _interopRequireWildcard(require("react"));

var MinutesCron = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(MinutesCron, _Component);

  var _super = (0, _createSuper2.default)(MinutesCron);

  function MinutesCron() {
    (0, _classCallCheck2.default)(this, MinutesCron);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(MinutesCron, [{
    key: "onChange",
    value: function onChange(e) {
      if (e.target.value > 0 && e.target.value < 60 || e.target.value === '') {
        var val = ['0', '*', '*', '*', '*', '?', '*'];
        val[1] = e.target.value ? "0/".concat(e.target.value) : val[1];
        this.props.onChange(val);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var translateFn = this.props.translate;
      var value = this.props.value;

      if (value && value.length > 1) {
        value = value[1].split('/')[1];
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "well"
      }, translateFn('Every'), " ", /*#__PURE__*/_react.default.createElement("input", {
        type: "Number",
        onChange: this.onChange.bind(this),
        value: value,
        min: 1,
        max: 60
      }), " ", translateFn('minute(s)'));
    }
  }]);
  return MinutesCron;
}(_react.Component);

exports.default = MinutesCron;