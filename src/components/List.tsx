import { useContext } from "react";
import { ListsContext } from '../Context/ListContextProvider';
import * as React from 'react';
import SubHeader from "./SubHeader";
import { Alert, HorizontalListElementWrapper, NoListStyleWrapper, PageContainer, Title } from "../styled-components/styled-components";
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import { IDetailsPageProps, IShoppingListItem } from "../models/shopping-list-models";

const List: React.FC<IDetailsPageProps> = props => {
    const { lists, loading, error } = useContext(ListsContext);
    const { match, history } = props;
    const { params: { id }} = match;
    const list = lists.find(item => item.id === Number(id)) || { id: 0, title: '', items: []};
    const { items } = list;
    return (
       <PageContainer>
          { history && <SubHeader title={list.title} goBack = {() => history.goBack()} openForm={() => history.push(match.url.concat('/newItem'))}/>}
          {( loading || error ) && <Alert>{loading ? 'Loading...' : error}</Alert> }
          <NoListStyleWrapper>
             { items && items.map((item: IShoppingListItem) => 
                <HorizontalListElementWrapper key={item.id}>
                   <NavLink to={`/list/${item.id}`}><Title>{item.title}</Title></NavLink>
                </HorizontalListElementWrapper>)}
          </NoListStyleWrapper>
      </PageContainer>
    )
 }
 export default List;