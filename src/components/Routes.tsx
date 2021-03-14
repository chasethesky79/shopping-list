import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import ListsContextProvider from '../Context/ListContextProvider';
import { IList, IListsComponentProps } from '../models/shopping-list-models';
import Lists from './Lists';
import { Title } from '../styled-components/styled-components';
import List from './List';

const LISTS_DATA_SOURCE = 'https://my-json-server.typicode.com/PacktPublishing/React-Projects/lists';
const HeaderWrapper = styled.header`
    text-align: center;
    background-color: #222;
    max-height: 70px;
    padding: 20px;
    color: white;
`
const Routes: React.FC<{}> = () => {
    const initialListsState: IListsComponentProps = {
        lists: [],
        loading: true,
        error: ''
    }
    const [lists, setLists] = useState(initialListsState);
    useEffect(() => {
        async function fetchData() {
        try {
            const result = await fetch(LISTS_DATA_SOURCE);
            let lists: IList[] = await result.json();
            if (lists) {
                setLists({...initialListsState, lists, loading: false })
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
                    <Switch>
                        <Route exact path='/' component={Lists}/>
                        <Route path='/list/:id' component={List}/>
                    </Switch>
                </ListsContextProvider>
            </div>
        </Router>
    )
};

export default Routes;