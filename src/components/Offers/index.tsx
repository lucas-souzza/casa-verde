import useProductList from "../../hooks/useProductsList";
import Card from "../Card";
import DefaultParagraph from "../DefaultParagraph";
import DefaultTitle from "../DefaultTitle";
import Filters from "../Filters";
import { CardsContainer, OffersContainer } from "./styled";

function Offers() {
	const products = useProductList();

	return (
		<OffersContainer>
			<DefaultParagraph size="22px">Conheça os nossos</DefaultParagraph>
			<DefaultTitle size="82px">
				<h2>Produtos</h2>
			</DefaultTitle>

			<Filters />

			<CardsContainer>
				{products && products.map(product => <Card key={product.id} product={product}/>)}
			</CardsContainer>
		</OffersContainer>
	);
}

export default Offers;
