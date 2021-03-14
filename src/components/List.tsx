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
    const {  match: { params: { id } }, history } = props;
    const list = lists.find(item => item.id === Number(id));
    const items = list ? list.items : [];
    return (
       <PageContainer>
          { history && <SubHeader title='Your Items' goBack = {() => history.goBack()} openForm={() => history.push('/newItem')}/>}
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