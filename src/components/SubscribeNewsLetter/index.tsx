import imageSubscribeNewsLetter from "../../assets/image-subscribe-news-letter.png";
import DefaultParagraph from "../DefaultParagraph";
import DefaultTitle from "../DefaultTitle";
import {
	FormNewsletter,
	SectionContentContainer,
	SectionImagemContainer,
	SectionStyled,
} from "./styled";
import { useState } from "react";
import ConfirmSubscribeModal from "../ConfirmSubscribeModal";
import ButtonDefault from "../ButtonDefault";

function SubscribeNewsLetter() {
	const [email, setEmail] = useState("");
	const [modalOpen, setModalOpen] = useState(false);

	function handleEmail(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (validarEmail()) {
			setModalOpen(true);
		}
	}

	function validarEmail() {
		var re = /\S+@\S+\.\S+/;
		return re.test(email);
	}

	function handleModal() {
		setModalOpen(false);
	}

	return (
		<SectionStyled>
			<ConfirmSubscribeModal
				isOpen={modalOpen}
				email={email}
				changeModalState={handleModal}
			/>
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

				<FormNewsletter onSubmit={handleEmail}>
					<input
						type="email"
						placeholder="Insira seu e-mail"
						onChange={event => setEmail(event.target.value)}
						value={email}
					/>
					<ButtonDefault
						type="submit"
						bgColor={validarEmail() ? "#ffcb47" : "#202020"}
					>
						Assinar newsletter
					</ButtonDefault>
				</FormNewsletter>
			</SectionContentContainer>

			<SectionImagemContainer>
				<img src={imageSubscribeNewsLetter} />
			</SectionImagemContainer>
		</SectionStyled>
	);
}

export default SubscribeNewsLetter;
