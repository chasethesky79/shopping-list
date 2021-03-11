import React, { PropsWithChildren } from "react";
import { IItemsListContext, IListComponentProps } from "../models/shopping-list-models";
import { withDataFetching } from "../withDataFetching";

export const ListsContext = React.createContext<IItemsListContext>({ data: []});
const LISTS_DATA_SOURCE = 'https://my-json-server.typicode.com/PacktPublishing/React-Projects/lists';

const ListsContextProvider: React.FC<IListComponentProps> = ({ children, data }) => (
    <ListsContext.Provider value={{ data }}>
      {children}
    </ListsContext.Provider>
);

export default ListsContextProvider;

