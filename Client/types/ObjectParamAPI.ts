import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { CreateShoppingListRequest } from '../models/CreateShoppingListRequest';
import { ErrorMessageDto } from '../models/ErrorMessageDto';
import { Items } from '../models/Items';
import { StatusDto } from '../models/StatusDto';
import { SuccessMessage } from '../models/SuccessMessage';
import { UpdateShoppingListRequest } from '../models/UpdateShoppingListRequest';

import { ObservableItemsApi } from "./ObservableAPI";
import { ItemsApiRequestFactory, ItemsApiResponseProcessor} from "../apis/ItemsApi";

export interface ItemsApiCreateShoppingListRequest {
    /**
     * 
     * @type CreateShoppingListRequest
     * @memberof ItemsApicreateShoppingList
     */
    createShoppingListRequest: CreateShoppingListRequest
}

export interface ItemsApiDeleteTodoShoppingListRequest {
    /**
     * 
     * @type string
     * @memberof ItemsApideleteTodoShoppingList
     */
    id: string
}

export interface ItemsApiMarkTodoListAsCompletedRequest {
    /**
     * 
     * @type string
     * @memberof ItemsApimarkTodoListAsCompleted
     */
    id: string
}

export interface ItemsApiRetrieveSingleShoppingListRequest {
    /**
     * 
     * @type string
     * @memberof ItemsApiretrieveSingleShoppingList
     */
    id: string
}

export interface ItemsApiRetriveTodoListRequest {
}

export interface ItemsApiUpdateTodoShoppingListRequest {
    /**
     * 
     * @type string
     * @memberof ItemsApiupdateTodoShoppingList
     */
    id: string
    /**
     * 
     * @type UpdateShoppingListRequest
     * @memberof ItemsApiupdateTodoShoppingList
     */
    updateShoppingListRequest: UpdateShoppingListRequest
}

export class ObjectItemsApi {
    private api: ObservableItemsApi

    public constructor(configuration: Configuration, requestFactory?: ItemsApiRequestFactory, responseProcessor?: ItemsApiResponseProcessor) {
        this.api = new ObservableItemsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new todo shopping list item
     * @param param the request object
     */
    public createShoppingList(param: ItemsApiCreateShoppingListRequest, options?: Configuration): Promise<Items> {
        return this.api.createShoppingList(param.createShoppingListRequest,  options).toPromise();
    }

    /**
     * Delete a todo shopping list item
     * @param param the request object
     */
    public deleteTodoShoppingList(param: ItemsApiDeleteTodoShoppingListRequest, options?: Configuration): Promise<SuccessMessage> {
        return this.api.deleteTodoShoppingList(param.id,  options).toPromise();
    }

    /**
     * Mark todo list as completed
     * @param param the request object
     */
    public markTodoListAsCompleted(param: ItemsApiMarkTodoListAsCompletedRequest, options?: Configuration): Promise<SuccessMessage> {
        return this.api.markTodoListAsCompleted(param.id,  options).toPromise();
    }

    /**
     * Retrieve a single todo shopping list item by ID
     * @param param the request object
     */
    public retrieveSingleShoppingList(param: ItemsApiRetrieveSingleShoppingListRequest, options?: Configuration): Promise<Items> {
        return this.api.retrieveSingleShoppingList(param.id,  options).toPromise();
    }

    /**
     * Retrieve a list of all todo shopping list items
     * @param param the request object
     */
    public retriveTodoList(param: ItemsApiRetriveTodoListRequest = {}, options?: Configuration): Promise<Array<Items>> {
        return this.api.retriveTodoList( options).toPromise();
    }

    /**
     * Update a todo shopping list item
     * @param param the request object
     */
    public updateTodoShoppingList(param: ItemsApiUpdateTodoShoppingListRequest, options?: Configuration): Promise<Items> {
        return this.api.updateTodoShoppingList(param.id, param.updateShoppingListRequest,  options).toPromise();
    }

}
