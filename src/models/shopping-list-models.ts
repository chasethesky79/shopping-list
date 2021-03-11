export type IDataSourceProps = {
    dataSource: string
}

export interface IShoppingListItem {
    id: number;
    title: string;
}

export type IErrorInfo = {
    loading: boolean;
    error: string;
}

export type IListComponentProps = IErrorInfo & { data: IShoppingListItem[] }

export interface IItemsListContext {
    data: IShoppingListItem[]
}