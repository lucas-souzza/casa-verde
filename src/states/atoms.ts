import { atom } from "recoil";
import { fetchProductsList } from "./selectors";
import { ProductType } from "../interfaces/ProductType";

export const productsList = atom<ProductType[]>({
    key: "productsList",
    default: fetchProductsList
});

export const orderingValue = atom({
    key: "orderingValue",
    default: ""
});

export const filterValue = atom({
    key: "filterValue",
    default: {
        minPrice: 0,
        maxPrice: 0
    }
})