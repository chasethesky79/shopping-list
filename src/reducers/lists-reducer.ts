import { IErrorInfo, IList } from "../models/shopping-list-models";

export const listsReducer = (value: IErrorInfo & { lists: IList[] }, action: any) => {
    switch(action.type) {
      case 'GET_LISTS_SUCCESS': 
        return {
          ...value,
          lists: action.payload,
          loading: false
        }
      case 'GET_LISTS_ERROR':
        return {
          ...value,
          lists: [],
          error: action.payload,
          loading: false
        };
      default:
        return value;
    }
  }