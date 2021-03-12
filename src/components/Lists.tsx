import { useContext } from "react";
import { ListsContext } from '../Context/ListContextProvider';
import * as React from 'react';
import { RouteComponentProps } from "react-router-dom";
import SubHeader from "./SubHeader";
import { Alert, HorizontalListElementWrapper, NoListStyleWrapper, PageContainer, Title } from "../styled-components/styled-components";
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Lists: React.FC<RouteComponentProps> = props => {
   const { data, loading, error } = useContext(ListsContext);
   const { match, history } = props;
   return (
      <PageContainer>
         { history && <SubHeader title='Your Lists' goBack = {() => history.goBack()} openForm={() => history.push('/new')}/>}
         {( loading || error ) && <Alert>{loading ? 'Loading...' : error}</Alert> }
         <NoListStyleWrapper>
            { data && data.map(item => 
               <HorizontalListElementWrapper>
                  <NavLink key={item.id} activeClassName='header-link-active' to={`/list/${item.id}`}><Title>{item.title}</Title></NavLink>
               </HorizontalListElementWrapper>)}
         </NoListStyleWrapper>
     </PageContainer>
   )
}
export default Lists;