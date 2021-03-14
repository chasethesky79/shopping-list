import React from "react";
import { IItemsComponentProps } from "../models/shopping-list-models";

export const ItemsContext = React.createContext<IItemsComponentProps>({ items: [] });

const ItemsContextProvider: React.FC<IItemsComponentProps> = ({ children, items }) => (
    <ItemsContext.Provider value={{ items }}>
      {children}
    </ItemsContext.Provider>
);

export default ItemsContextProvider;