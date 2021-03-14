import { RouteComponentProps } from "react-router-dom"

export type IDataSourceProps = {
    dataSource: string
}

export interface IShoppingListItem {
    id: number;
    title: string;
}

export type IErrorInfo = {
    loading?: boolean;
    error?: string;
}

export type IList = {
  items: IShoppingListItem[];
  id: number;
  title: string;
}


export type IListsComponentProps = IErrorInfo & { lists: IList[] }
export type IDetailsPageProps = RouteComponentProps<{ id: string }>

export interface ISubHeaderProps {
    title: string;
    openForm?: () => void;
    goBack?: () => void
}

