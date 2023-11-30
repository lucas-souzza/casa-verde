import { styled } from "styled-components";
import imageSubscribeNewsLetter from "../../assets/image-subscribe-news-letter.png";
import DefaultParagraph from "../DefaultParagraph";
import DefaultTitle from "../DefaultTitle";

const SectionStyled = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const SectionContentContainer = styled.div`
	width: 40%;
`;

const SectionImagemContainer = styled.div`
	width: 60%;

	& > img {
		height: 850px;
		margin-left: -4rem;
	}
`;

const FormNewsletter = styled.form`
	margin-top: 2.5rem;
	width: 120%;
	display: flex;
	box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);

	& > input {
		padding: 1.5rem;
		font-size: 1rem;
		font-family: var(--font-default);
		border: none;
		flex-grow: 1;
	}

	& > input:focus {
		outline: none;
	}

	& input::placeholder {
		padding-left: 2.5rem;
		background-image: url(/mail-icon.png);
		background-repeat: no-repeat;
		background-position: left;
	}

	& > button {
		border: none;
		background-color: var(--color-yellow);
		color: var(--color-white);
		padding: 1.5rem;
		font-size: 1rem;
		font-family: var(--font-default);
		cursor: pointer;
		z-index: 1;
		transition: transform 150ms ease;
	}

	& > button:hover {
		transform: scale(1.03);
	}
`;

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
