import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HeaderWrapper } from '../styled-components/styled-components';
import ListsContextProvider from '../Context/ListContextProvider';
import { IListComponentProps, IShoppingListItem } from '../models/shopping-list-models';
import Lists from './Lists';

const LISTS_DATA_SOURCE = 'https://my-json-server.typicode.com/PacktPublishing/React-Projects/lists';
const Routes: React.FC<{}> = () => {
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
            const result = await fetch(LISTS_DATA_SOURCE);
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
                        <Route exact path='/' component={Lists}/>
                    </Switch>
                </ListsContextProvider>
            </div>
        </Router>
    )
};

export default Routes;