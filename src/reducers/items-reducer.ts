import { IErrorInfo, IShoppingListItem } from "../models/shopping-list-models";

export const itemsReducer = (value: IErrorInfo & { items: IShoppingListItem[] }, action: any) => {
    switch(action.type) {
      case 'GET_ITEMS_SUCCESS': 
        return {
          ...value,
          items: action.payload,
          loading: false
        }
      case 'GET_ITEMS_ERROR':
        return {
          ...value,
          items: [],
          error: action.payload,
          loading: false
        };
      default:
        return value;
    }
  }