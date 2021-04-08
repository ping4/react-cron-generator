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

/* eslint-disable react/no-direct-mutation-state */
var DailyCron = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(DailyCron, _Component);

  var _super = (0, _createSuper2.default)(DailyCron);

  function DailyCron(props) {
    var _this;

    (0, _classCallCheck2.default)(this, DailyCron);
    _this = _super.call(this, props);
    _this.state = {
      hour: 0,
      minute: 0
    };
    _this.onDayChange = _this.onDayChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.onAtHourChange = _this.onAtHourChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.onAtMinuteChange = _this.onAtMinuteChange.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(DailyCron, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.state.value = this.props.value;
      this.state.every = this.props.value[3] !== '?';
    }
  }, {
    key: "onDayChange",
    value: function onDayChange(e) {
      if (!e.target.value || e.target.value > 0 && e.target.value < 32) {
        this.state.value = ['0', this.getValueByIndex(1), this.getValueByIndex(1), '*', '*', '?', '*'];
        this.onValueChange(3, e.target.value ? "1/".concat(e.target.value) : e.target.value);
      }
    }
    /**
     * If value is * return 0 else return value
     * @param {position in array} index 
     */

  }, {
    key: "getValueByIndex",
    value: function getValueByIndex(index) {
      return this.state.value[index] === '*' ? '0' : this.state.value[index];
    }
  }, {
    key: "onAtHourChange",
    value: function onAtHourChange(e) {
      this.onValueChange(2, e.target.value);
    }
  }, {
    key: "onAtMinuteChange",
    value: function onAtMinuteChange(e) {
      this.onValueChange(1, e.target.value);
    }
  }, {
    key: "onValueChange",
    value: function onValueChange(cronPosition, value) {
      var val = this.state.value;
      val[cronPosition] = value;
      this.props.onChange(val);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var translateFn = this.props.translate;
      this.state.value = this.props.value;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "tab-pane"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "well well-small"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "radio",
        onChange: function onChange(e) {
          _this2.setState({
            every: true
          });

          _this2.props.onChange();
        },
        value: "1",
        name: "DailyRadio",
        checked: this.state.every
      }), /*#__PURE__*/_react.default.createElement("span", null, translateFn('Every')), /*#__PURE__*/_react.default.createElement("input", {
        disabled: !this.state.every,
        type: "Number",
        maxLength: "2",
        onChange: this.onDayChange,
        value: this.state.value[3].split('/')[1] ? this.state.value[3].split('/')[1] : ''
      }), /*#__PURE__*/_react.default.createElement("span", null, translateFn('day(s)'))), /*#__PURE__*/_react.default.createElement("div", {
        className: "well well-small"
      }, /*#__PURE__*/_react.default.createElement("input", {
        onChange: function onChange(e) {
          _this2.setState({
            every: false
          });

          _this2.props.onChange(['0', _this2.state.value[1], _this2.state.value[2], '?', '*', 'MON-FRI', '*']);
        },
        type: "radio",
        value: "2",
        name: "DailyRadio",
        checked: !this.state.every
      }), /*#__PURE__*/_react.default.createElement("span", null, translateFn('Every week day'))), /*#__PURE__*/_react.default.createElement("span", null, translateFn('Start time')), /*#__PURE__*/_react.default.createElement(_hourSelect.default, {
        onChange: this.onAtHourChange,
        value: this.state.value[2]
      }), /*#__PURE__*/_react.default.createElement(_minutesSelect.default, {
        onChange: this.onAtMinuteChange,
        value: this.state.value[1]
      }));
    }
  }]);
  return DailyCron;
}(_react.Component);

exports.default = DailyCron;