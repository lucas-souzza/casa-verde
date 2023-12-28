import { useRecoilValue } from "recoil";
import { filterValue, orderingValue, productsList } from "../states/atoms";
import { ProductType } from "../interfaces/ProductType";

function orderProducts(ordering: string, products: ProductType[]) {
	const productsOrdened = [...products];

	switch (ordering) {
		case "preco-crescente":
			return productsOrdened.sort((a, b) => a.price - b.price);

		case "preco-decrescente":
			return productsOrdened.sort((a, b) => b.price - a.price);

		case "nome-crescente":
			return productsOrdened.sort((a, b) =>
				a.title.localeCompare(b.title)
			);

		case "nome-decrescente":
			return productsOrdened.sort((a, b) =>
				b.title.localeCompare(a.title)
			);

		default:
			return productsOrdened;
	}
}

function filterProducts(
	products: ProductType[],
	filter: { minPrice: number; maxPrice: number }
) {
	const productsFiltered = [...products];

	return productsFiltered.filter(
		product =>
			product.price >= filter.minPrice && product.price <= filter.maxPrice
	);
}

function useProductList() {
	const products = useRecoilValue(productsList);
	const ordering = useRecoilValue(orderingValue);
	const filter = useRecoilValue(filterValue);

	const filterIsValid =
		filter.minPrice >= 0 &&
		filter.maxPrice > 0 &&
		filter.minPrice < filter.maxPrice;

	if (ordering) {
        if(filterIsValid) {
            const productsFiltered = filterProducts(products, filter);
            return orderProducts(ordering, productsFiltered);
        }
        
        return orderProducts(ordering, products);
	}

	if (filterIsValid) {
        return filterProducts(products, filter);
	}

	return products;
}

export default useProductList;
