import { useEffect, useState } from "react";
import { IDataSourceProps, IListComponentProps, IShoppingListItem } from "./models/shopping-list-models";

export const withDataFetching = (dataSourceProps: IDataSourceProps, WrappedComponent: React.FC<IListComponentProps>) => {
    return  () => {
        const initialProducts: IListComponentProps = {
            data: [],
            loading: true,
            error: ''
        }
        const [listItems, setListItems] = useState(initialProducts);
        useEffect(() => {
            async function fetchData() {
            try {
                const { dataSource } = dataSourceProps;
                const result = await fetch(dataSource);
                let data: IShoppingListItem[] = await result.json();
                if (data) {
                    setListItems({...initialProducts, data, loading: false })
                }
            } catch(error) {
                const { message } = error;
                setListItems({...initialProducts, error: message })
            }
         } fetchData();     
         }, []);
         return (
             <WrappedComponent {...listItems}/>
         )
    }
}