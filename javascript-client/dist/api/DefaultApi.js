"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Currency = _interopRequireDefault(require("../model/Currency"));

var _DailyRates = _interopRequireDefault(require("../model/DailyRates"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _HistoryRates = _interopRequireDefault(require("../model/HistoryRates"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Default service.
* @module api/DefaultApi
* @version 1.0.0
*/
var DefaultApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DefaultApi. 
  * @alias module:api/DefaultApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DefaultApi(apiClient) {
    _classCallCheck(this, DefaultApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the historical operation.
   * @callback module:api/DefaultApi~historicalCallback
   * @param {String} error Error message, if any.
   * @param {module:model/DailyRates} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get historical rates for any day since 1999.
   * @param {Date} _date Date in format YYYY-MM-DD
   * @param {Object} opts Optional parameters
   * @param {module:model/Currency} opts.base Rates are quoted against the Euro by default. Quote against a different currency by setting the base parameter in your request.
   * @param {String} opts.symbols Request specific exchange rates by setting the symbols parameter.
   * @param {module:api/DefaultApi~historicalCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/DailyRates}
   */


  _createClass(DefaultApi, [{
    key: "historical",
    value: function historical(_date, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter '_date' is set

      if (_date === undefined || _date === null) {
        throw new _Error["default"]("Missing the required parameter '_date' when calling historical");
      }

      var pathParams = {
        'date': _date
      };
      var queryParams = {
        'base': opts['base'],
        'symbols': opts['symbols']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DailyRates["default"];
      return this.apiClient.callApi('/{date}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the history operation.
     * @callback module:api/DefaultApi~historyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HistoryRates} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get historical rates for a time period.
     * @param {Date} startAt 
     * @param {Date} endAt 
     * @param {Object} opts Optional parameters
     * @param {module:model/Currency} opts.base Rates are quoted against the Euro by default. Quote against a different currency by setting the base parameter in your request.
     * @param {String} opts.symbols Request specific exchange rates by setting the symbols parameter.
     * @param {module:api/DefaultApi~historyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HistoryRates}
     */

  }, {
    key: "history",
    value: function history(startAt, endAt, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'startAt' is set

      if (startAt === undefined || startAt === null) {
        throw new _Error["default"]("Missing the required parameter 'startAt' when calling history");
      } // verify the required parameter 'endAt' is set


      if (endAt === undefined || endAt === null) {
        throw new _Error["default"]("Missing the required parameter 'endAt' when calling history");
      }

      var pathParams = {};
      var queryParams = {
        'start_at': startAt,
        'end_at': endAt,
        'base': opts['base'],
        'symbols': opts['symbols']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _HistoryRates["default"];
      return this.apiClient.callApi('/history', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the latest operation.
     * @callback module:api/DefaultApi~latestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DailyRates} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the latest foreign exchange reference rates.
     * @param {Object} opts Optional parameters
     * @param {module:model/Currency} opts.base Rates are quoted against the Euro by default. Quote against a different currency by setting the base parameter in your request.
     * @param {String} opts.symbols Request specific exchange rates by setting the symbols parameter.
     * @param {module:api/DefaultApi~latestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DailyRates}
     */

  }, {
    key: "latest",
    value: function latest(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'base': opts['base'],
        'symbols': opts['symbols']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DailyRates["default"];
      return this.apiClient.callApi('/latest', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DefaultApi;
}();

exports["default"] = DefaultApi;