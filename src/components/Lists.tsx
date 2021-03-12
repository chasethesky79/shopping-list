import { useContext } from "react";
import { ListsContext } from '../Context/ListContextProvider';
import * as React from 'react';
import { RouteComponentProps } from "react-router-dom";

const Lists: React.FC<RouteComponentProps> = props => {
   const listItems = useContext(ListsContext);
   return (<div></div>)
};

export default Lists;