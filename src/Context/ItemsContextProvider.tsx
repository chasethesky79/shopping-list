import React, { useEffect, useState } from "react";
import { IItemsComponentState, IListsComponentState } from "../models/shopping-list-models";
import { itemsReducer } from "../reducers/items-reducer";
import { fetchData } from '../utils/data-utils';

const ITEMS_DATA_SOURCE = 'https://my-json-server.typicode.com/PacktPublishing/React-Projects/items';

const initialValue = { items: [], loading: true, error: '' };
export const ItemsContext = React.createContext<IItemsComponentState>({...initialValue, getItemsRequest: () => {}});

const ItemsContextProvider: React.FC<{}> = ({ children }) => {
    const [ value, dispatch ] = React.useReducer(itemsReducer, initialValue);
    const getItemsRequest = async () => {
      const result = await fetchData(ITEMS_DATA_SOURCE) as IItemsComponentState;
      if (result.items && result.items.length) {
        dispatch({ type: 'GET_ITEMS_SUCCESS', payload: result.items })
      } else {
        dispatch({ type: 'GET_ITEMS_ERROR', payload: result.error })
      }
    }
    
    return (
        <ItemsContext.Provider value={{...value, getItemsRequest }}>
            {children}
        </ItemsContext.Provider>
    )
}

export default ItemsContextProvider;

function getItemsRequest<T>(initialItemState: { items: never[]; loading: boolean; error: string; }, getItemsRequest: any, arg2: () => void) {
  throw new Error("Function not implemented.");
}
