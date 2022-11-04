export default interface IBook {
    id: number;
    image: string,
    name: string,
    author: string,
    price: number,
    quantity?: number,
}