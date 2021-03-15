import { useContext } from "react";
import { ListsContext } from '../Context/ListContextProvider';
import * as React from 'react';
import SubHeader from "./SubHeader";
import { Alert, HorizontalListElementWrapper, NoListStyleWrapper, PageContainer, Title } from "../styled-components/styled-components";
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import { IDetailsPageProps, IShoppingListItem } from "../models/shopping-list-models";
import { ItemsContext } from "../Context/ItemsContextProvider";
import NumberFormat from "react-number-format";
import styled from "styled-components";

const NavLinkWrapper = styled(NavLink)`
  color: black;
`

const List: React.FC<IDetailsPageProps> = props => {
    const { items } = useContext(ItemsContext);
    const { lists, loading, error } = useContext(ListsContext);
    const { match, history } = props;
    const { params: { id }} = match;
    const data = items ? items.filter(item => item.listId === Number(id)) : [];
    const list = lists.find(element => element.id === Number(id));
    return (
       <PageContainer>
          { history && <SubHeader title={list? list.title: ''} goBack = {() => history.goBack()} openForm={() => history.push(match.url.concat('/newItem'))}/>}
          {( loading || error ) && <Alert>{loading ? 'Loading...' : error}</Alert> }
          <NoListStyleWrapper>
             { data && data.map((item: IShoppingListItem) => 
                <HorizontalListElementWrapper key={item.id}>
                   <NavLinkWrapper to={`/list/${item.id}`}><Title>{item.title}</Title></NavLinkWrapper><Title>Quantity: {item.quantity}</Title>
                   <Title>
                     <NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'}/>
                   </Title>
                </HorizontalListElementWrapper>)}
          </NoListStyleWrapper>
      </PageContainer>
    )
 }
 export default List;