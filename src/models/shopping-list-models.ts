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

export type IItemsComponentProps = {
    items: IShoppingListItem[]
}

export type IList = {
  id: number;
  title: string;
} & IItemsComponentProps

export type IListsComponentProps = IErrorInfo & { lists: IList[] }
export type IDetailsPageProps = RouteComponentProps<{ id: string }>

export interface ISubHeaderProps {
    title: string;
    openForm?: () => void;
    goBack?: () => void
}

