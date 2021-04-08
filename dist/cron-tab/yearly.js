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

var YearlyCron = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(YearlyCron, _Component);

  var _super = (0, _createSuper2.default)(YearlyCron);

  function YearlyCron(props) {
    var _this;

    (0, _classCallCheck2.default)(this, YearlyCron);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  (0, _createClass2.default)(YearlyCron, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, "yearly");
    }
  }]);
  return YearlyCron;
}(_react.Component);

exports.default = YearlyCron;