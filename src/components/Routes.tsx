import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { HeaderWrapper } from '../styled-components/styled-components';
import ListsContextProvider from '../Context/ListContextProvider';
import { IDataSourceProps, IListComponentProps, IShoppingListItem } from '../models/shopping-list-models';

const Routes: React.FC<IDataSourceProps> = ({ dataSource }) => {
    const [loggedIn] = useState(true);
    const initialProducts: IListComponentProps = {
        data: [],
        loading: true,
        error: ''
    }
    const [listItems, setListItems] = useState(initialProducts);
    const { data } = listItems;
    useEffect(() => {
        async function fetchData() {
        try {
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
        <Router>
            <div>
                <HeaderWrapper/>
                <ListsContextProvider data={data}>
                    <Switch>
                        {/* <Route exact path='/' component={Lists}/> */}
                    </Switch>
                </ListsContextProvider>
            </div>
        </Router>
    )
}

export default Routes;