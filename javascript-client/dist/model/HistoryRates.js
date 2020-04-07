"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Currency = _interopRequireDefault(require("./Currency"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HistoryRates model module.
 * @module model/HistoryRates
 * @version 1.0.1
 */
var HistoryRates = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HistoryRates</code>.
   * Date / Rates pair wrapped with base and date range information
   * @alias module:model/HistoryRates
   * @param rates {Object.<String, Object.<String, Number>>} 
   * @param startAt {Date} %Y-%m-%d
   * @param base {module:model/Currency} 
   * @param endAt {Date} %Y-%m-%d
   */
  function HistoryRates(rates, startAt, base, endAt) {
    _classCallCheck(this, HistoryRates);

    HistoryRates.initialize(this, rates, startAt, base, endAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HistoryRates, null, [{
    key: "initialize",
    value: function initialize(obj, rates, startAt, base, endAt) {
      obj['rates'] = rates;
      obj['start_at'] = startAt;
      obj['base'] = base;
      obj['end_at'] = endAt;
    }
    /**
     * Constructs a <code>HistoryRates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoryRates} obj Optional instance to populate.
     * @return {module:model/HistoryRates} The populated <code>HistoryRates</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistoryRates();

        if (data.hasOwnProperty('rates')) {
          obj['rates'] = _ApiClient["default"].convertToType(data['rates'], {
            'String': Object
          });
        }

        if (data.hasOwnProperty('start_at')) {
          obj['start_at'] = _ApiClient["default"].convertToType(data['start_at'], 'Date');
        }

        if (data.hasOwnProperty('base')) {
          obj['base'] = _Currency["default"].constructFromObject(data['base']);
        }

        if (data.hasOwnProperty('end_at')) {
          obj['end_at'] = _ApiClient["default"].convertToType(data['end_at'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return HistoryRates;
}();
/**
 * @member {Object.<String, Object.<String, Number>>} rates
 */


HistoryRates.prototype['rates'] = undefined;
/**
 * %Y-%m-%d
 * @member {Date} start_at
 */

HistoryRates.prototype['start_at'] = undefined;
/**
 * @member {module:model/Currency} base
 */

HistoryRates.prototype['base'] = undefined;
/**
 * %Y-%m-%d
 * @member {Date} end_at
 */

HistoryRates.prototype['end_at'] = undefined;
var _default = HistoryRates;
exports["default"] = _default;