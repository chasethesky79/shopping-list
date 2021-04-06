import { IItemsComponentState, IListsComponentState } from '../models/shopping-list-models';

export const fetchData = async (dataSource: string): Promise<IListsComponentState | IItemsComponentState> => {
    const listsDataSource = dataSource.includes('lists');
    let listsState: IListsComponentState | IItemsComponentState = listsDataSource ? { lists: [], loading: true, error: '', getListsRequest: () => {} } : 
       { items: [], loading: true, error: '' };
    try {
        const result = await fetch(dataSource);
        const data = await result.json();
        listsState = listsDataSource ? { ...listsState, lists: data, loading: false }: { ...listsState, items: data, loading: false }
    }
    catch(error) {
        const { message } = error;
        listsState = {...listsState, loading: false, error: message }
    }
    return listsState;
}