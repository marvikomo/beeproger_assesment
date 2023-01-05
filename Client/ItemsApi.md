# .ItemsApi

All URIs are relative to *http://127.0.0.1:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createShoppingList**](ItemsApi.md#createShoppingList) | **POST** /api/items | Create a new todo shopping list item
[**deleteTodoShoppingList**](ItemsApi.md#deleteTodoShoppingList) | **DELETE** /api/items/{id} | Delete a todo shopping list item
[**markTodoListAsCompleted**](ItemsApi.md#markTodoListAsCompleted) | **PUT** /api/items/{id}/complete | Mark todo list as completed
[**retrieveSingleShoppingList**](ItemsApi.md#retrieveSingleShoppingList) | **GET** /api/items/{id} | Retrieve a single todo shopping list item by ID
[**retriveTodoList**](ItemsApi.md#retriveTodoList) | **GET** /api/items | Retrieve a list of all todo shopping list items
[**updateTodoShoppingList**](ItemsApi.md#updateTodoShoppingList) | **PUT** /api/items/{id} | Update a todo shopping list item


# **createShoppingList**
> Items createShoppingList(createShoppingListRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ItemsApi(configuration);

let body:.ItemsApiCreateShoppingListRequest = {
  // CreateShoppingListRequest
  createShoppingListRequest: {
    name: "name_example",
    description: "description_example",
    photo: "photo_example",
    amount: 3.14,
  },
};

apiInstance.createShoppingList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createShoppingListRequest** | **CreateShoppingListRequest**|  |


### Return type

**Items**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Shopping List Created |  -  |
**401** | Client is not authorized to make request |  -  |
**0** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTodoShoppingList**
> SuccessMessage deleteTodoShoppingList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ItemsApi(configuration);

let body:.ItemsApiDeleteTodoShoppingListRequest = {
  // string
  id: "id_example",
};

apiInstance.deleteTodoShoppingList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**SuccessMessage**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Shopping List deleted |  -  |
**400** | Request could not be validated |  -  |
**401** | Client is not authorized to make request |  -  |
**403** | Expected permission is not available. |  -  |
**0** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **markTodoListAsCompleted**
> SuccessMessage markTodoListAsCompleted()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ItemsApi(configuration);

let body:.ItemsApiMarkTodoListAsCompletedRequest = {
  // string
  id: "id_example",
};

apiInstance.markTodoListAsCompleted(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**SuccessMessage**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Shopping List updated |  -  |
**400** | Request could not be validated |  -  |
**401** | Client is not authorized to make request |  -  |
**403** | Expected permission is not available. |  -  |
**0** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveSingleShoppingList**
> Items retrieveSingleShoppingList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ItemsApi(configuration);

let body:.ItemsApiRetrieveSingleShoppingListRequest = {
  // string
  id: "id_example",
};

apiInstance.retrieveSingleShoppingList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**Items**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Request could not be validated |  -  |
**401** | Client is not authorized to make request |  -  |
**403** | Expected permission is not available. |  -  |
**0** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retriveTodoList**
> Array<Items> retriveTodoList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ItemsApi(configuration);

let body:any = {};

apiInstance.retriveTodoList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Items>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Request could not be validated |  -  |
**401** | Client is not authorized to make request |  -  |
**403** | Expected permission is not available. |  -  |
**0** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTodoShoppingList**
> Items updateTodoShoppingList(updateShoppingListRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ItemsApi(configuration);

let body:.ItemsApiUpdateTodoShoppingListRequest = {
  // string
  id: "id_example",
  // UpdateShoppingListRequest
  updateShoppingListRequest: {
    name: "name_example",
    description: "description_example",
    photo: "photo_example",
    amount: 3.14,
  },
};

apiInstance.updateTodoShoppingList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateShoppingListRequest** | **UpdateShoppingListRequest**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**Items**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Request could not be validated |  -  |
**401** | Client is not authorized to make request |  -  |
**403** | Expected permission is not available. |  -  |
**0** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


