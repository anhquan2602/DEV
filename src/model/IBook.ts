export default interface IBook {
    id: number;
    image: string,
    name: string,
    color?:number,
    author: string,
    price: number,
    quantity?: number,
}