import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import ListsContextProvider from '../Context/ListContextProvider';
import { IItemsComponentState, IListsComponentState } from '../models/shopping-list-models';
import Lists from './Lists';
import { Title } from '../styled-components/styled-components';
import List from './List';
import ItemsContextProvider from '../Context/ItemsContextProvider';

const HeaderWrapper = styled.header`
    text-align: center;
    background-color: #222;
    max-height: 90px;
    padding: 20px;
    color: white;
`
const Routes: React.FC<{}> = () => {
    return (
        <Router>
            <div>
                <HeaderWrapper><Title>Personal Shopping List</Title></HeaderWrapper>
                <ListsContextProvider>
                    <ItemsContextProvider>
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