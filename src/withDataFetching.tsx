import { useEffect, useState } from "react";
import { IDataSourceProps, IListComponentProps as IListComponentState, IShoppingListItem } from "./models/shopping-list-models";

export const withDataFetching = (props: IDataSourceProps, WrappedComponent: React.FC<IListComponentState>) => {
    return  () => {
        const initialItemsState: IListComponentState = {
            data: [],
            loading: true,
            error: ''
        }
        const [listItems, setListItems] = useState(initialItemsState);
        const { data, error, loading } = listItems;
        useEffect(() => {
            async function fetchData() {
            try {
                const { dataSource } = props;
                const result = await fetch(dataSource);
                let data: IShoppingListItem[] = await result.json();
                if (data) {
                    setListItems({...initialItemsState, data, loading: false })
                }
            } catch(error) {
                const { message } = error;
                setListItems({...initialItemsState, error: message })
            }
         } fetchData();     
         }, []);
         return (
             <WrappedComponent {...listItems}/>
         )
    }
}