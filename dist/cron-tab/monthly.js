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
var MonthlyCron = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(MonthlyCron, _Component);

  var _super = (0, _createSuper2.default)(MonthlyCron);

  function MonthlyCron(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MonthlyCron);
    _this = _super.call(this, props);
    _this.state = {
      hour: 0,
      minute: 0
    };
    _this.onDayChange = _this.onDayChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.onLastDayChange = _this.onLastDayChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.onAtHourChange = _this.onAtHourChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.onAtMinuteChange = _this.onAtMinuteChange.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(MonthlyCron, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.state.value = this.props.value;

      if (this.state.value[3] === 'L') {
        this.state.every = "2";
      } else if (this.state.value[3] === 'LW') {
        this.state.every = "3";
      } else if (this.state.value[3].startsWith('L')) {
        this.state.every = "4";
      } else {
        this.state.every = "1";
      }
    }
  }, {
    key: "onDayChange",
    value: function onDayChange(e) {
      if (parseInt(e.target.value) > 0 && parseInt(e.target.value) <= 31 || e.target.value === "") {
        var val = ['0', this.state.value[1] === '*' ? '0' : this.state.value[1], this.state.value[2] === '*' ? '0' : this.state.value[2], this.state.value[3], '1/1', '?', '*'];
        val[3] = "".concat(e.target.value);
        this.props.onChange(val);
      }
    }
  }, {
    key: "onLastDayChange",
    value: function onLastDayChange(e) {
      if (parseInt(e.target.value) >> 0 && parseInt(e.target.value) <= 31 || e.target.value === "") {
        var val = ['0', this.state.value[1] === '*' ? '0' : this.state.value[1], this.state.value[2] === '*' ? '0' : this.state.value[2], this.state.value[3], '1/1', '?', '*'];

        if (e.target.value === '') {
          val[3] = '';
        } else {
          val[3] = "L-".concat(e.target.value);
        }

        this.props.onChange(val);
      }
    }
  }, {
    key: "onAtHourChange",
    value: function onAtHourChange(e) {
      var val = this.state.value;
      val[2] = "".concat(e.target.value);
      this.props.onChange(val);
    }
  }, {
    key: "onAtMinuteChange",
    value: function onAtMinuteChange(e) {
      var val = this.state.value;
      val[1] = "".concat(e.target.value);
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
            every: e.target.value
          });

          _this2.props.onChange(['0', _this2.state.value[1] === '*' ? '0' : _this2.state.value[1], _this2.state.value[2] === '*' ? '0' : _this2.state.value[2], '1', '1/1', '?', '*']);
        },
        value: "1",
        name: "MonthlyRadio",
        checked: this.state.every === "1" ? true : false
      }), translateFn('Day'), /*#__PURE__*/_react.default.createElement("input", {
        readOnly: this.state.every !== "1",
        type: "number",
        value: this.state.value[3],
        onChange: this.onDayChange
      }), translateFn('of every month(s)')), /*#__PURE__*/_react.default.createElement("div", {
        className: "well well-small"
      }, /*#__PURE__*/_react.default.createElement("input", {
        onChange: function onChange(e) {
          _this2.setState({
            every: e.target.value
          });

          _this2.props.onChange(['0', _this2.state.value[1] === '*' ? '0' : _this2.state.value[1], _this2.state.value[2] === '*' ? '0' : _this2.state.value[2], 'L', '*', '?', '*']);
        },
        type: "radio",
        value: "2",
        name: "DailyRadio",
        checked: this.state.every === "2" ? true : false
      }), translateFn('Last day of every month')), /*#__PURE__*/_react.default.createElement("div", {
        className: "well well-small"
      }, /*#__PURE__*/_react.default.createElement("input", {
        onChange: function onChange(e) {
          _this2.setState({
            every: e.target.value
          });

          _this2.props.onChange(['0', _this2.state.value[1] === '*' ? '0' : _this2.state.value[1], _this2.state.value[2] === '*' ? '0' : _this2.state.value[2], 'LW', '*', '?', '*']);
        },
        type: "radio",
        value: "3",
        name: "DailyRadio",
        checked: this.state.every === "3" ? true : false
      }), translateFn('On the last weekday of every month')), /*#__PURE__*/_react.default.createElement("div", {
        className: "well well-small"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "radio",
        onChange: function onChange(e) {
          _this2.setState({
            every: e.target.value
          });

          _this2.props.onChange(['0', _this2.state.value[1] === '*' ? '0' : _this2.state.value[1], _this2.state.value[2] === '*' ? '0' : _this2.state.value[2], "L-".concat(1), '*', '?', '*']);
        },
        value: "4",
        name: "MonthlyRadio",
        checked: this.state.every === "4" ? true : false
      }), /*#__PURE__*/_react.default.createElement("input", {
        readOnly: this.state.every !== "4",
        type: "number",
        value: this.state.value[3].split('-')[1],
        onChange: this.onLastDayChange
      }), translateFn('day(s) before the end of the month')), translateFn('Start time'), /*#__PURE__*/_react.default.createElement(_hourSelect.default, {
        onChange: this.onAtHourChange,
        value: this.state.value[2]
      }), /*#__PURE__*/_react.default.createElement(_minutesSelect.default, {
        onChange: this.onAtMinuteChange,
        value: this.state.value[1]
      }));
    }
  }]);
  return MonthlyCron;
}(_react.Component);

exports.default = MonthlyCron;