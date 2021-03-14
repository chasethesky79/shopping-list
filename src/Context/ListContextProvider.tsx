import React from "react";
import { IListsComponentProps } from "../models/shopping-list-models";

export const ListsContext = React.createContext<IListsComponentProps>({ lists: [], loading: false, error: ''});

const ListsContextProvider: React.FC<IListsComponentProps> = ({ children, lists, loading, error }) => (
    <ListsContext.Provider value={{ lists, loading, error }}>
      {children}
    </ListsContext.Provider>
);

export default ListsContextProvider;

