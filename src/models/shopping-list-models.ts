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

interface IItemsListContext {
    
}

export type IListComponentProps = IErrorInfo & IItemsListContext & { data: IShoppingListItem[] }

export interface ISubHeaderProps {
    title: string;
    openForm?: () => void;
    goBack?: () => void
}

