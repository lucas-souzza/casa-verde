import { atom } from "recoil";
import { fetchProductsList } from "./selectors";
import { ProductType } from "../interfaces/ProductType";

export const productsList = atom<ProductType[]>({
    key: "productsList",
    default: fetchProductsList
});

