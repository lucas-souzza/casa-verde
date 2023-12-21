import { useRecoilValue } from "recoil";
import { productsList } from "../states/atoms";

function useProductList() {
    const products = useRecoilValue(productsList)

    return products;
}

export default useProductList