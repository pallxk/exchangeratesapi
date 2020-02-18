"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Enum class Currency.
* @enum {}
* @readonly
*/
var Currency =
/*#__PURE__*/
function () {
  function Currency() {
    _classCallCheck(this, Currency);

    _defineProperty(this, "AUD", "AUD");

    _defineProperty(this, "BGN", "BGN");

    _defineProperty(this, "BRL", "BRL");

    _defineProperty(this, "CAD", "CAD");

    _defineProperty(this, "CHF", "CHF");

    _defineProperty(this, "CNY", "CNY");

    _defineProperty(this, "CZK", "CZK");

    _defineProperty(this, "DKK", "DKK");

    _defineProperty(this, "EUR", "EUR");

    _defineProperty(this, "GBP", "GBP");

    _defineProperty(this, "HKD", "HKD");

    _defineProperty(this, "HRK", "HRK");

    _defineProperty(this, "HUF", "HUF");

    _defineProperty(this, "IDR", "IDR");

    _defineProperty(this, "ILS", "ILS");

    _defineProperty(this, "INR", "INR");

    _defineProperty(this, "ISK", "ISK");

    _defineProperty(this, "JPY", "JPY");

    _defineProperty(this, "KRW", "KRW");

    _defineProperty(this, "MXN", "MXN");

    _defineProperty(this, "MYR", "MYR");

    _defineProperty(this, "NOK", "NOK");

    _defineProperty(this, "NZD", "NZD");

    _defineProperty(this, "PHP", "PHP");

    _defineProperty(this, "PLN", "PLN");

    _defineProperty(this, "RON", "RON");

    _defineProperty(this, "RUB", "RUB");

    _defineProperty(this, "SEK", "SEK");

    _defineProperty(this, "SGD", "SGD");

    _defineProperty(this, "THB", "THB");

    _defineProperty(this, "TRY", "TRY");

    _defineProperty(this, "USD", "USD");

    _defineProperty(this, "ZAR", "ZAR");
  }

  _createClass(Currency, null, [{
    key: "constructFromObject",

    /**
    * Returns a <code>Currency</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Currency} The enum <code>Currency</code> value.
    */
    value: function constructFromObject(object) {
      return object;
    }
  }]);

  return Currency;
}();

exports["default"] = Currency;