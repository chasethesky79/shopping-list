import React, { useEffect, useState } from "react";
import { IItemsComponentState, IListsComponentState } from "../models/shopping-list-models";
import { fetchData } from '../utils/data-utils';

const ITEMS_DATA_SOURCE = 'https://my-json-server.typicode.com/PacktPublishing/React-Projects/items';

export const ItemsContext = React.createContext<IItemsComponentState>({ items: [], loading: true, error: '' });

const ItemsContextProvider: React.FC<{}> = ({ children }) => {
    const itemsState: IItemsComponentState = { items: [], loading: true, error: '' };
    const [itemsResult, setItemsResult] = useState(itemsState);
    const { items, loading, error } = itemsResult;
    useEffect(() => {
      async function fetchItems(){
        setItemsResult(await fetchData(ITEMS_DATA_SOURCE) as IItemsComponentState);
      } fetchItems();
    });
    return (
        <ItemsContext.Provider value={{ items, loading, error }}>
        {children}
        </ItemsContext.Provider>
    )
}

export default ItemsContextProvider;