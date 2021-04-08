"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _i18n = _interopRequireDefault(require("cronstrue/i18n"));

var _meta = require("./meta");

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

var Cron = /*#__PURE__*/function (_Component) {
  _inherits(Cron, _Component);

  var _super = _createSuper(Cron);

  function Cron(props) {
    var _this;

    _classCallCheck(this, Cron);

    _this = _super.call(this, props);
    _this.state = {
      headers: (0, _meta.loadHeaders)(_this.props.options),
      locale: _this.props.locale ? _this.props.locale : 'en'
    };
    return _this;
  }

  _createClass(Cron, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setValue(this.props.value);

      if (this.props.translateFn && !this.props.locale) {
        console.log('Warning !!! locale not set while using translateFn');
      }

      if (this.props.onRef) {
        this.props.onRef(this);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value && this.state.value) {
        var newVal = '';
        newVal = this.state.value.toString().replace(/,/g, ' ');
        newVal = newVal.replace(/!/g, ',');

        if (nextProps.value !== newVal) {
          this.setValue(nextProps.value);
        }
      }
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var prevState = this.state;
      prevState.value = value;

      if (prevState.value && prevState.value.split(' ').length === 6) {
        prevState.value += ' *';
      }

      if (!prevState.value || prevState.value.split(' ').length !== 7) {
        prevState.value = ['0', '0', '00', '1/1', '*', '?', '*'];
        prevState.selectedTab = prevState.headers[0];
        this.parentChange(prevState.value);
      } else {
        prevState.value = prevState.value.replace(/,/g, '!').split(' ');
      }

      var val = prevState.value;

      if (val[1].search('/') !== -1 && val[2] === '*' && val[3] === '1/1') {
        prevState.selectedTab = prevState.headers[0];
      } else if (val[3] === '1/1') {
        prevState.selectedTab = prevState.headers[1];
      } else if (val[3].search('/') !== -1 || val[5] === 'MON-FRI') {
        prevState.selectedTab = prevState.headers[2];
      } else if (val[3] === '?') {
        prevState.selectedTab = prevState.headers[3];
      } else if (val[3].startsWith('L') || val[4] === '1/1') {
        prevState.selectedTab = prevState.headers[4];
      } else {
        prevState.selectedTab = prevState.headers[0];
      } // this.parentChange(prevState.value)


      this.setState(prevState);
    }
  }, {
    key: "tabChanged",
    value: function tabChanged(tab) {
      var _this2 = this;

      this.setState({
        selectedTab: tab,
        value: this.defaultValue(tab)
      }, function () {
        return _this2.parentChange(_this2.defaultValue(tab));
      });
    }
  }, {
    key: "getHeaders",
    value: function getHeaders() {
      var _this3 = this;

      return this.state.headers.map(function (d, index) {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: index,
          className: _this3.state.selectedTab === d ? 'active' : ''
        }, /*#__PURE__*/_react.default.createElement("a", {
          onClick: _this3.tabChanged.bind(_this3, d)
        }, _this3.translate(d)));
      });
    }
  }, {
    key: "onValueChange",
    value: function onValueChange(val) {
      var _this4 = this;

      if (val && val.length) {
        this.setState({
          value: val
        }, function () {
          return _this4.parentChange(val);
        });
      } else {
        val = ['0', '0', '00', '1/1', '*', '?', '*'];
        this.setState({
          value: val
        }, function () {
          return _this4.parentChange(val);
        }); // val = ['0','0','00','1/1','*','?','*'];
      }
    }
  }, {
    key: "parentChange",
    value: function parentChange(val) {
      var newVal = '';
      newVal = val.toString().replace(/,/g, ' ');
      newVal = newVal.replace(/!/g, ',');
      this.props.onChange(newVal);
    }
  }, {
    key: "getVal",
    value: function getVal() {
      var val = _i18n.default.toString(this.state.value.toString().replace(/,/g, ' ').replace(/!/g, ','), {
        locale: this.state.locale
      });

      if (val.search('undefined') === -1) {
        return val;
      }

      return '-';
    }
  }, {
    key: "defaultValue",
    value: function defaultValue(tab) {
      var index = this.state.headers.indexOf(tab);

      if (_meta.metadata[index] === -1) {
        return;
      }

      return _meta.metadata[index].initialCron;
    }
  }, {
    key: "getComponent",
    value: function getComponent(tab) {
      var index = this.state.headers.indexOf(tab);

      if (_meta.metadata[index] === -1) {
        return;
      }

      var selectedMetaData = _meta.metadata.find(function (data) {
        return data.component.name === tab + 'Cron';
      });

      if (!selectedMetaData) {
        selectedMetaData = _meta.metadata[index];
      }

      if (!selectedMetaData) {
        throw new Error('Value does not match any available headers.');
      }

      var CronComponent = selectedMetaData.component;
      return /*#__PURE__*/_react.default.createElement(CronComponent, {
        translate: this.translate.bind(this),
        value: this.state.value,
        onChange: this.onValueChange.bind(this)
      });
    }
  }, {
    key: "translate",
    value: function translate(key) {
      var translatedText = key;

      if (this.props.translateFn) {
        translatedText = this.props.translateFn(key);

        if (typeof translatedText !== 'string') {
          throw new Error('translateFn expects a string translation');
        }
      }

      return translatedText;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "cron_builder"
      }, /*#__PURE__*/_react.default.createElement("ul", {
        className: "nav nav-tabs"
      }, this.getHeaders()), /*#__PURE__*/_react.default.createElement("div", {
        className: "cron_builder_bordering"
      }, this.getComponent(this.state.selectedTab)), this.props.showResultText && /*#__PURE__*/_react.default.createElement("div", {
        className: "cron-builder-bg"
      }, this.getVal()), this.props.showResultCron && /*#__PURE__*/_react.default.createElement("div", {
        className: "cron-builder-bg"
      }, this.state.value.toString().replace(/,/g, ' ').replace(/!/g, ',')));
    }
  }]);

  return Cron;
}(_react.Component);

exports.default = Cron;