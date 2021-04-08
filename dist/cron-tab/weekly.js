"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _minutesSelect = _interopRequireDefault(require("../minutes-select"));

var _hourSelect = _interopRequireDefault(require("../hour-select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var WeeklyCron = /*#__PURE__*/function (_Component) {
  _inherits(WeeklyCron, _Component);

  var _super = _createSuper(WeeklyCron);

  function WeeklyCron(props) {
    var _this;

    _classCallCheck(this, WeeklyCron);

    _this = _super.call(this, props);
    _this.state = {};
    _this.onAtHourChange = _this.onAtHourChange.bind(_assertThisInitialized(_this));
    _this.onAtMinuteChange = _this.onAtMinuteChange.bind(_assertThisInitialized(_this));
    _this.onCheck = _this.onCheck.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(WeeklyCron, [{
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