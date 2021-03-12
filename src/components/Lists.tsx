import { useContext } from "react";
import { ListsContext } from '../Context/ListContextProvider';
import * as React from 'react';
import { RouteComponentProps } from "react-router-dom";
import SubHeader from "./SubHeader";

const Lists: React.FC<RouteComponentProps> = props => {
   const listItems = useContext(ListsContext);
   const { match, history } = props;
   return (
      <>
     {history && <SubHeader title='Your Lists' goBack = {() => history.goBack()} openForm={() => history.push('/new')}/>}
     </>
   )
};

export default Lists;