import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import ListsContextProvider from '../Context/ListContextProvider';
import { IItemsComponentProps, IListsComponentProps } from '../models/shopping-list-models';
import Lists from './Lists';
import { Title } from '../styled-components/styled-components';
import List from './List';
import ItemsContextProvider from '../Context/ItemsContextProvider';

const LISTS_DATA_SOURCE = 'https://my-json-server.typicode.com/PacktPublishing/React-Projects/lists';
const ITEMS_DATA_SOURCE = 'https://my-json-server.typicode.com/PacktPublishing/React-Projects/items';

const HeaderWrapper = styled.header`
    text-align: center;
    background-color: #222;
    max-height: 90px;
    padding: 20px;
    color: white;
`
const Routes: React.FC<{}> = () => {
    const initialListsState: IListsComponentProps = {
        lists: [],
        loading: true,
        error: ''
    }
    const initialItemsState: IItemsComponentProps = {
        items: []
    }
    const [lists, setLists] = useState(initialListsState);
    const [items, setItems] = useState(initialItemsState);
    useEffect(() => {
        async function fetchData() {
        try {
            const [listsResult, itemsResult] = await Promise.all([fetch(LISTS_DATA_SOURCE), fetch(ITEMS_DATA_SOURCE)]);
            let [lists, items] = await Promise.all([listsResult.json(), itemsResult.json()]);
            if (lists) {
                setLists({...initialListsState, lists, loading: false })
            }
            if (items) {
                setItems({...initialItemsState, items });
            }
        } catch(error) {
            const { message } = error;
            setLists({...initialListsState, error: message })
        }
     } fetchData();     
     }, []);
    return (
        <Router>
            <div>
                <HeaderWrapper><Title>Personal Shopping List</Title></HeaderWrapper>
                <ListsContextProvider {...lists}>
                    <ItemsContextProvider {...items}>
                        <Switch>
                            <Route exact path='/' component={Lists}/>
                            <Route path='/list/:id' component={List}/>
                        </Switch>
                    </ItemsContextProvider>
                </ListsContextProvider>
            </div>
        </Router>
    )
};

export default Routes;