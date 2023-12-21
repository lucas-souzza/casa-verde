import DefaultParagraph from "../DefaultParagraph";
import DefaultTitle from "../DefaultTitle";
import { ButtonBuy, CardContainer, CardImage } from "./styled";
import setaIcon from "../../assets/seta.svg";
import { CardProps } from "./types";

function Card({ product } : CardProps) {
	return (
		<CardContainer>
			<CardImage>
				<img src={product.image} />
			</CardImage>
			<div>
				<DefaultTitle size="32px">
					<h3>{product.title}</h3>
				</DefaultTitle>

				<DefaultParagraph size="16px">{`R$ ${product.price}`}</DefaultParagraph>

				<ButtonBuy href="#">
					Comprar
					<img src={setaIcon} />
				</ButtonBuy>
			</div>
		</CardContainer>
	);
}

export default Card;
