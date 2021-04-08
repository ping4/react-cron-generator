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

var Minutes = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Minutes, _Component);

  var _super = (0, _createSuper2.default)(Minutes);

  function Minutes() {
    (0, _classCallCheck2.default)(this, Minutes);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Minutes, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("select", {
        disabled: this.props.disabled === true ? true : false,
        className: "minutes",
        onChange: this.props.onChange ? this.props.onChange : function () {},
        value: this.props.value
      }, this.buildOptions());
    }
  }, {
    key: "buildOptions",
    value: function buildOptions() {
      var options = [];

      for (var i = 0; i < 60; i++) {
        options.push( /*#__PURE__*/_react.default.createElement("option", {
          key: i,
          id: i
        }, (i < 10 ? '0' : '') + i));
      }

      return options;
    }
  }]);
  return Minutes;
}(_react.Component);

exports.default = Minutes;