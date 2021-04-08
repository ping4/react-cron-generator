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

var HourlyCron = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(HourlyCron, _Component);

  var _super = (0, _createSuper2.default)(HourlyCron);

  function HourlyCron(props) {
    var _this;

    (0, _classCallCheck2.default)(this, HourlyCron);
    _this = _super.call(this, props);
    _this.state = {
      every: false
    };
    _this.onHourChange = _this.onHourChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.onAtHourChange = _this.onAtHourChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.onAtMinuteChange = _this.onAtMinuteChange.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(HourlyCron, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.state.value = this.props.value;

      if (this.state.value[2].split('/')[1] || this.state.value[2] === '*') {
        this.state.every = true;
      }
    }
  }, {
    key: "onHourChange",
    value: function onHourChange(e) {
      if (this.state.every && (e.target.value > 0 && e.target.value < 24 || e.target.value === '')) {
        var val = ['0', '0', '*', '*', '*', '?', '*'];
        val[2] = e.target.value ? "0/".concat(e.target.value) : e.target.value;
        val[3] = '1/1';
        this.props.onChange(val);
      }
    }
  }, {
    key: "onAtHourChange",
    value: function onAtHourChange(e) {
      var val = ['0', this.state.value[1], '*', '1/1', '*', '?', '*'];
      val[2] = "".concat(e.target.value);
      this.props.onChange(val);
    }
  }, {
    key: "onAtMinuteChange",
    value: function onAtMinuteChange(e) {
      var val = ['0', '*', this.state.value[2], '1/1', '*', '?', '*'];
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
        className: "tab-content"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "tab-pane active"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "well well-small"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "radio",
        onChange: function onChange(e) {
          _this2.setState({
            every: true
          });

          _this2.props.onChange(['0', '0', '0/1', '1/1', '*', '?', '*']);
        },
        checked: this.state.every
      }), /*#__PURE__*/_react.default.createElement("span", null, translateFn('Every'), " "), /*#__PURE__*/_react.default.createElement("input", {
        disabled: !this.state.every,
        type: "Number",
        onChange: this.onHourChange,
        value: this.state.value[2].split('/')[1] ? this.state.value[2].split('/')[1] : ''
      }), /*#__PURE__*/_react.default.createElement("span", null, translateFn('hour(s)'))), /*#__PURE__*/_react.default.createElement("div", {
        className: "well df well-small margin-right-0 margin-left-0"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "text_align_right row",
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "radio",
        onChange: function onChange(e) {
          _this2.setState({
            every: false
          });

          _this2.props.onChange();
        },
        checked: !this.state.every
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: ""
      }, translateFn('At')), /*#__PURE__*/_react.default.createElement(_hourSelect.default, {
        disabled: this.state.every,
        onChange: this.onAtHourChange,
        value: this.state.value[2]
      }), /*#__PURE__*/_react.default.createElement(_minutesSelect.default, {
        disabled: this.state.every,
        onChange: this.onAtMinuteChange,
        value: this.state.value[1]
      })))));
    }
  }]);
  return HourlyCron;
}(_react.Component);

exports.default = HourlyCron;