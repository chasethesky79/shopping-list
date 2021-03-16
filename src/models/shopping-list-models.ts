import { RouteComponentProps } from "react-router-dom"

export type IDataSourceProps = {
    dataSource: string
}

export interface IShoppingListItem {
    id: number;
    listId: number;
    title: string;
    quantity: number;
    price: number
}

export type IErrorInfo = {
    loading?: boolean;
    error?: string;
}

export type IItemsComponentState = {
    items: IShoppingListItem[]
} & IErrorInfo

export type IList = {
  id: number;
  title: string;
} & IItemsComponentState

export type IListsComponentState = IErrorInfo & { lists: IList[] }
export type IDetailsPageProps = RouteComponentProps<{ id: string }>

export interface ISubHeaderProps {
    title: string;
    openForm?: () => void;
    goBack?: () => void
}

