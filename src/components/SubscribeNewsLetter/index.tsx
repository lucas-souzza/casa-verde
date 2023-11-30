import imageSubscribeNewsLetter from "../../assets/image-subscribe-news-letter.png";
import DefaultParagraph from "../DefaultParagraph";
import DefaultTitle from "../DefaultTitle";
import {
	FormNewsletter,
	SectionContentContainer,
	SectionImagemContainer,
	SectionStyled,
} from "./styled";

function SubscribeNewsLetter() {
	return (
		<SectionStyled>
			<SectionContentContainer>
				<DefaultParagraph size="1.25rem">
					Sua casa com as
				</DefaultParagraph>

				<DefaultTitle size="5.125rem">
					<h1>melhores plantas</h1>
				</DefaultTitle>

				<DefaultParagraph size="1rem" lineHeight="1.625rem">
					Encontre aqui uma vasta seleção de plantas para decorar a
					sua casa e torná-lo uma pessoa mais feliz no seu dia a dia.
					Entre com seu e-mail e assine nossa newsletter para saber
					das novidades da marca.
				</DefaultParagraph>

				<FormNewsletter>
					<input type="email" placeholder="Insira seu e-mail" />
					<button type="submit">Assinar newsletter</button>
				</FormNewsletter>
			</SectionContentContainer>

			<SectionImagemContainer>
				<img src={imageSubscribeNewsLetter} />
			</SectionImagemContainer>
		</SectionStyled>
	);
}

export default SubscribeNewsLetter;
