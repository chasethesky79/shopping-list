import React, { useEffect, useState } from "react";
import { Action, IErrorInfo, IList, IListsComponentState } from "../models/shopping-list-models";
import { listsReducer } from "../reducers/lists-reducer";
import { fetchData } from '../utils/data-utils'

const LISTS_DATA_SOURCE = 'https://my-json-server.typicode.com/PacktPublishing/React-Projects/lists';
const initialValue = { lists: [], loading: false, error: '' };

export const ListsContext = React.createContext<IListsComponentState>({ ...initialValue, getListsRequest: () => {} });

const ListsContextProvider: React.FC<{}> = ({ children }) => {
  const [ value, dispatch ] = React.useReducer(listsReducer, initialValue);
  const getListsRequest = async () => {
    const result = await fetchData(LISTS_DATA_SOURCE) as IListsComponentState;
    if (result.lists && result.lists.length) {
      dispatch({ type: 'GET_LISTS_SUCCESS', payload: result.lists })
    } else {
      dispatch({ type: 'GET_LISTS_ERROR', payload: result.error })
    }
  }
  return (
    <ListsContext.Provider value={{ ...value, getListsRequest }}>
        {children}
    </ListsContext.Provider>
  )
}

export default ListsContextProvider;

