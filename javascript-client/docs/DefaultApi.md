# Exchangeratesapi.DefaultApi

All URIs are relative to *https://api.exchangeratesapi.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**historical**](DefaultApi.md#historical) | **GET** /{date} | Get historical rates for any day since 1999.
[**history**](DefaultApi.md#history) | **GET** /history | Get historical rates for a time period.
[**latest**](DefaultApi.md#latest) | **GET** /latest | Get the latest foreign exchange reference rates.



## historical

> DailyRates historical(_date, opts)

Get historical rates for any day since 1999.

### Example

```javascript
import Exchangeratesapi from 'exchangeratesapi';

let apiInstance = new Exchangeratesapi.DefaultApi();
let _date = new Date("2013-10-20"); // Date | Date in format YYYY-MM-DD
let opts = {
  'base': new Exchangeratesapi.Currency(), // Currency | Rates are quoted against the Euro by default. Quote against a different currency by setting the base parameter in your request.
  'symbols': USD,GBP // String | Request specific exchange rates by setting the symbols parameter.
};
apiInstance.historical(_date, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **Date**| Date in format YYYY-MM-DD | 
 **base** | [**Currency**](.md)| Rates are quoted against the Euro by default. Quote against a different currency by setting the base parameter in your request. | [optional] 
 **symbols** | **String**| Request specific exchange rates by setting the symbols parameter. | [optional] 

### Return type

[**DailyRates**](DailyRates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## history

> HistoryRates history(startAt, endAt, opts)

Get historical rates for a time period.

### Example

```javascript
import Exchangeratesapi from 'exchangeratesapi';

let apiInstance = new Exchangeratesapi.DefaultApi();
let startAt = new Date("2013-10-20"); // Date | 
let endAt = new Date("2013-10-20"); // Date | 
let opts = {
  'base': new Exchangeratesapi.Currency(), // Currency | Rates are quoted against the Euro by default. Quote against a different currency by setting the base parameter in your request.
  'symbols': USD,GBP // String | Request specific exchange rates by setting the symbols parameter.
};
apiInstance.history(startAt, endAt, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startAt** | **Date**|  | 
 **endAt** | **Date**|  | 
 **base** | [**Currency**](.md)| Rates are quoted against the Euro by default. Quote against a different currency by setting the base parameter in your request. | [optional] 
 **symbols** | **String**| Request specific exchange rates by setting the symbols parameter. | [optional] 

### Return type

[**HistoryRates**](HistoryRates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## latest

> DailyRates latest(opts)

Get the latest foreign exchange reference rates.

### Example

```javascript
import Exchangeratesapi from 'exchangeratesapi';

let apiInstance = new Exchangeratesapi.DefaultApi();
let opts = {
  'base': new Exchangeratesapi.Currency(), // Currency | Rates are quoted against the Euro by default. Quote against a different currency by setting the base parameter in your request.
  'symbols': USD,GBP // String | Request specific exchange rates by setting the symbols parameter.
};
apiInstance.latest(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **base** | [**Currency**](.md)| Rates are quoted against the Euro by default. Quote against a different currency by setting the base parameter in your request. | [optional] 
 **symbols** | **String**| Request specific exchange rates by setting the symbols parameter. | [optional] 

### Return type

[**DailyRates**](DailyRates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

