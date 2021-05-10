export interface Loading {
    loading: boolean
}

export interface StarWarsProps {
    loading: boolean;
    onPaginationChange: (event: object, page: number) => void
    listItemClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => void
}
