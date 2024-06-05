export interface IHouse {
    id?: number,
    title?: string,
    address?: string,
    price?: number,
    bedroom?: number,
    bathroom?: number,
    images?: string[]
}

export interface IUser {
    username?: string
    avatar?: string
}