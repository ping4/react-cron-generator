"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createSuper"));

var _react = _interopRequireWildcard(require("react"));

var _minutesSelect = _interopRequireDefault(require("../minutes-select"));

var _hourSelect = _interopRequireDefault(require("../hour-select"));

var WeeklyCron = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(WeeklyCron, _Component);

  var _super = (0, _createSuper2.default)(WeeklyCron);

  function WeeklyCron(props) {
    var _this;

    (0, _classCallCheck2.default)(this, WeeklyCron);
    _this = _super.call(this, props);
    _this.state = {};
    _this.onAtHourChange = _this.onAtHourChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.onAtMinuteChange = _this.onAtMinuteChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.onCheck = _this.onCheck.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(WeeklyCron, [{
    key: "onAtHourChange",
    value: function onAtHourChange(e) {
      var val = this.state.value;
      val[0] = '0';
      val[2] = "".concat(e.target.value);
      this.props.onChange(val);
    }
  }, {
    key: "onAtMinuteChange",
    value: function onAtMinuteChange(e) {
      var val = this.state.value;
      val[0] = '0';
      val[1] = "".concat(e.target.value);
      this.props.onChange(val);
    }
  }, {
    key: "onCheck",
    value: function onCheck(e) {
      var val = this.state.value;
      val[0] = '0';

      if (e.target.checked) {
        this.onDayChecked(val, e);
      } else {
        this.onDayUnChecked(val, e);
      }

      this.props.onChange(val);
    }
  }, {
    key: "onDayChecked",
    value: function onDayChecked(val, e) {
      val[2] = "".concat(val[2]).split('/').length > 1 ? '0' : val[2].toString();
      val[3] = '?';
      val[4] = '*';

      if (val[5] === '*' || val[5] === '?' || val[5] === 'MON-FRI') {
        val[5] = e.target.value;
      } else {
        val[5] = val[5] + '!' + e.target.value;
      }
    }
  }, {
    key: "onDayUnChecked",
    value: function onDayUnChecked(val, e) {
      val[5] = val[5].split('!');

      if (val[5].length > 1) {
        val[5].splice(val[5].indexOf(e.target.value), 1);
        val[5] = val[5].toString().replace(/,/g, '!');
      } else {
        val[5] = '*';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var translateFn = this.props.translate;
      this.state.value = this.props.value;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "well well-small row"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "span6 col-sm-6"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "text_align_left"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        value: "MON",
        onChange: this.onCheck,
        checked: this.state.value[5].search('MON') !== -1 ? true : false
      }), translateFn('Monday'), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        value: "WED",
        onChange: this.onCheck,
        checked: this.state.value[5].search('WED') !== -1 ? true : false
      }), translateFn('Wednesday'), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        value: "FRI",
        onChange: this.onCheck,
        checked: this.state.value[5].search('FRI') !== -1 ? true : false
      }), translateFn('Friday'), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        value: "SUN",
        onChange: this.onCheck,
        checked: this.state.value[5].search('SUN') !== -1 ? true : false
      }), translateFn('Sunday'))), /*#__PURE__*/_react.default.createElement("div", {
        className: "span6 col-sm-6"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "text_align_left"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        value: "TUE",
        onChange: this.onCheck,
        checked: this.state.value[5].search('TUE') !== -1 ? true : false
      }), translateFn('Tuesday'), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        value: "THU",
        onChange: this.onCheck,
        checked: this.state.value[5].search('THU') !== -1 ? true : false
      }), translateFn('Thursday'), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        value: "SAT",
        onChange: this.onCheck,
        checked: this.state.value[5].search('SAT') !== -1 ? true : false
      }), translateFn('Saturday')), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null))), translateFn('Start time'), /*#__PURE__*/_react.default.createElement(_hourSelect.default, {
        onChange: this.onAtHourChange,
        value: this.state.value[2]
      }), /*#__PURE__*/_react.default.createElement(_minutesSelect.default, {
        onChange: this.onAtMinuteChange,
        value: this.state.value[1]
      }));
    }
  }]);
  return WeeklyCron;
}(_react.Component);

exports.default = WeeklyCron;