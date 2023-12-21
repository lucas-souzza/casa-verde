import useProductList from "../../hooks/useProductsList";
import Card from "../Card";
import DefaultParagraph from "../DefaultParagraph";
import DefaultTitle from "../DefaultTitle";
import { CardsContainer, OffersContainer } from "./styled";

function Offers() {
	const products = useProductList();

	return (
		<OffersContainer>
			<DefaultParagraph size="22px">Conheça nossas</DefaultParagraph>
			<DefaultTitle size="82px">
				<h2>Ofertas</h2>
			</DefaultTitle>

			<CardsContainer>
				{products && products.map(product => <Card key={product.id} product={product}/>)}
			</CardsContainer>
		</OffersContainer>
	);
}

export default Offers;
