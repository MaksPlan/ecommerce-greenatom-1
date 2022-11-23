export interface IProduct {
    id: number,
    title: string,
    price: number,
    rank: number,
    disc: string,
    type: string,
}

export interface IUser {
email: string | null,
token: string | null,
id: string | null,
}