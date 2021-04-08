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

var _i18n = _interopRequireDefault(require("cronstrue/i18n"));

var _meta = require("./meta");

require("./cron-builder.css");

/* eslint-disable react/no-direct-mutation-state */
var Cron = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Cron, _Component);

  var _super = (0, _createSuper2.default)(Cron);

  function Cron(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Cron);
    _this = _super.call(this, props);
    _this.state = {
      headers: (0, _meta.loadHeaders)(_this.props.options),
      locale: _this.props.locale ? _this.props.locale : 'en'
    };
    return _this;
  }

  (0, _createClass2.default)(Cron, [{
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