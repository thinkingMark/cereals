export interface SortingModel{
    sortingProperty : SortingProperties;
    sortingDirection : SortingDirections;
    fullName : string;
}

export enum SortingProperties{
    Name = 'name',
    ModifiedDate = 'price'
}

export enum SortingDirections {
    Descending = 'descending',
    Ascending = 'ascending',
}