import React from "react";
import { IListComponentProps } from "../models/shopping-list-models";

export const ListsContext = React.createContext<IListComponentProps>({ data: [], loading: false, error: ''});

const ListsContextProvider: React.FC<IListComponentProps> = ({ children, data, loading, error }) => (
    <ListsContext.Provider value={{ data, loading, error }}>
      {children}
    </ListsContext.Provider>
);

export default ListsContextProvider;

