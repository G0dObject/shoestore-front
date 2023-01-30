import { ProductType } from "../../Enum/ProductType";

export interface Product{
    id: number;
    price: number;
    name: string;
    description: string;
    manufacturer: string;
    type: ProductType;
}