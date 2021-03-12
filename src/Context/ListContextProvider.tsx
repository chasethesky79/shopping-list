import React from "react";
import { IItemsListContext, IListComponentProps } from "../models/shopping-list-models";

export const ListsContext = React.createContext<IItemsListContext>({ data: []});

const ListsContextProvider: React.FC<IListComponentProps> = ({ children, data }) => (
    <ListsContext.Provider value={{ data }}>
      {children}
    </ListsContext.Provider>
);

export default ListsContextProvider;

