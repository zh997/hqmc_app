export interface IListItem {
    icon: string,
    title: string,
    path: string
}

export interface IInitState {
    listItemData: IListItem[],
    onRouter: (path: string) => void
}