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

export interface IItemsListContext {
    data: IShoppingListItem[]
}

export type IListComponentProps = IErrorInfo & IItemsListContext

export interface ISubHeaderProps {
    title: string;
    openForm?: () => void;
    goBack?: () => void
}

