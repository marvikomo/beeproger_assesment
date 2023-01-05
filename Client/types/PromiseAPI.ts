import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { CreateShoppingListRequest } from '../models/CreateShoppingListRequest';
import { ErrorMessageDto } from '../models/ErrorMessageDto';
import { Items } from '../models/Items';
import { StatusDto } from '../models/StatusDto';
import { SuccessMessage } from '../models/SuccessMessage';
import { UpdateShoppingListRequest } from '../models/UpdateShoppingListRequest';
import { ObservableItemsApi } from './ObservableAPI';

import { ItemsApiRequestFactory, ItemsApiResponseProcessor} from "../apis/ItemsApi";
export class PromiseItemsApi {
    private api: ObservableItemsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemsApiRequestFactory,
        responseProcessor?: ItemsApiResponseProcessor
    ) {
        this.api = new ObservableItemsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new todo shopping list item
     * @param createShoppingListRequest 
     */
    public createShoppingList(createShoppingListRequest: CreateShoppingListRequest, _options?: Configuration): Promise<Items> {
        const result = this.api.createShoppingList(createShoppingListRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a todo shopping list item
     * @param id 
     */
    public deleteTodoShoppingList(id: string, _options?: Configuration): Promise<SuccessMessage> {
        const result = this.api.deleteTodoShoppingList(id, _options);
        return result.toPromise();
    }

    /**
     * Mark todo list as completed
     * @param id 
     */
    public markTodoListAsCompleted(id: string, _options?: Configuration): Promise<SuccessMessage> {
        const result = this.api.markTodoListAsCompleted(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a single todo shopping list item by ID
     * @param id 
     */
    public retrieveSingleShoppingList(id: string, _options?: Configuration): Promise<Items> {
        const result = this.api.retrieveSingleShoppingList(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of all todo shopping list items
     */
    public retriveTodoList(_options?: Configuration): Promise<Array<Items>> {
        const result = this.api.retriveTodoList(_options);
        return result.toPromise();
    }

    /**
     * Update a todo shopping list item
     * @param id 
     * @param updateShoppingListRequest 
     */
    public updateTodoShoppingList(id: string, updateShoppingListRequest: UpdateShoppingListRequest, _options?: Configuration): Promise<Items> {
        const result = this.api.updateTodoShoppingList(id, updateShoppingListRequest, _options);
        return result.toPromise();
    }


}



