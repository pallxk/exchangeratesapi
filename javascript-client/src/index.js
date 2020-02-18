/**
 * Foreign exchange rates API with currency conversion
 * Exchange rates API is a free service for current and historical foreign exchange rates published by the European Central Bank
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Currency from './model/Currency';
import DailyRates from './model/DailyRates';
import Error from './model/Error';
import HistoryRates from './model/HistoryRates';
import DefaultApi from './api/DefaultApi';


/**
* Exchange rates API is a free service for current and historical foreign exchange rates published by the European Central Bank.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Exchangeratesapi = require('index'); // See note below*.
* var xxxSvc = new Exchangeratesapi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Exchangeratesapi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Exchangeratesapi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Exchangeratesapi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Currency model constructor.
     * @property {module:model/Currency}
     */
    Currency,

    /**
     * The DailyRates model constructor.
     * @property {module:model/DailyRates}
     */
    DailyRates,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The HistoryRates model constructor.
     * @property {module:model/HistoryRates}
     */
    HistoryRates,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};