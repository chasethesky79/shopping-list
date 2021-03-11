import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { Suspense } from 'react';
import { HeaderWrapper } from '../styled-components/styled-components';
import ListsContextProvider from '../Context/ListContextProvider';

const Routes: React.FC<{}> = () => {
    const [loggedIn] = useState(true);
    return (
        <Router>
            <div>
                <HeaderWrapper/>
                <ListsContextProvider>
                    <Switch>
                        <Route exact path='/' component={Lists}/>
                    </Switch>
                </ListsContextProvider>
            </div>
        </Router>
    )
}

export default Routes;