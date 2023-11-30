import { styled } from "styled-components";
import imageSubscribeNewsLetter from "../../assets/image-subscribe-news-letter.png";

const SectionStyled = styled.section`
	display: flex;
	align-items: center;
`;

function SubscribeNewsLetter() {
	return (
		<SectionStyled>
			<div>
				<p>Sua casa com as</p>
				<h1>Melhores plantas</h1>
				<p>
					Encontre aqui uma vasta seleção de plantas para decorar a
					sua casa e torná-lo uma pessoa mais feliz no seu dia a dia.
					Entre com seu e-mail e assine nossa newsletter para saber
					das novidades da marca.
				</p>
				<form>
					<input type="email" placeholder="Insira seu e-mail" />
					<button type="submit">Assinar newsletter</button>
				</form>
			</div>
			<img src={imageSubscribeNewsLetter} />
		</SectionStyled>
	);
}

export default SubscribeNewsLetter;
