import { useContext, useEffect } from "react";
import { ListsContext } from '../Context/ListContextProvider';
import * as React from 'react';
import { RouteComponentProps } from "react-router-dom";
import SubHeader from "./SubHeader";
import { Alert, HorizontalListElementWrapper, NoListStyleWrapper, PageContainer, Title } from "../styled-components/styled-components";
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Lists: React.FC<RouteComponentProps> = props => {
   const { lists, loading, error, getListsRequest } = useContext(ListsContext);
   const {  history } = props;
   useEffect(() => {
         if (!lists || lists.length <= 0 ) {
            getListsRequest();
         }     
      }, [lists, getListsRequest]);
   return (
      <PageContainer>
         { history && <SubHeader title='Your Lists' goBack = {() => history.goBack()}/>}
         {( loading || error ) && <Alert>{loading ? 'Loading...' : error}</Alert> }
         <NoListStyleWrapper>
            { lists && lists.map(list => 
               <HorizontalListElementWrapper key={list.id}>
                  <NavLink activeClassName='header-link-active' to={`/list/${list.id}`}><Title>{list.title}</Title></NavLink>
               </HorizontalListElementWrapper>)}
         </NoListStyleWrapper>
     </PageContainer>
   )
}
export default Lists;