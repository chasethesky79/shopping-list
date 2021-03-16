import React, { useEffect, useState } from "react";
import { IListsComponentState } from "../models/shopping-list-models";
import { fetchData } from '../utils/data-utils'

const LISTS_DATA_SOURCE = 'https://my-json-server.typicode.com/PacktPublishing/React-Projects/lists';

export const ListsContext = React.createContext<IListsComponentState>({ lists: [], loading: false, error: ''});

const ListsContextProvider: React.FC<{}> = ({ children }) => {
  const listsState: IListsComponentState = { lists: [], loading: true, error: '' };
  const [listsResult, setListsResult] = useState(listsState);
  useEffect(() => {
    async function fetchLists(){
      const x = await fetchData(LISTS_DATA_SOURCE) as IListsComponentState;
      setListsResult(x);
    } fetchLists();
  });
  return (
    <ListsContext.Provider value={{ ...listsResult }}>
        {children}
    </ListsContext.Provider>
  )
}

export default ListsContextProvider;

