import ButtonDefault from "../ButtonDefault";
import { ModalContainer, ModalContent } from "./styled";
import { ConfirmSubscribeModalProps } from "./types";

function ConfirmSubscribeModal({
	changeModalState,
	isOpen,
	email,
}: ConfirmSubscribeModalProps) {
	return (
		<ModalContainer $isOpen={isOpen}>
			<ModalContent>
				<p>
					Obrigado pela sua assinatura, você receberá nossas novidades
					no e-mail:
				</p>
				<p>{email}</p>
				<form method="dialog">
					<ButtonDefault type="button" handleClick={changeModalState} bgColor="#ffcb47">
						Fechar
					</ButtonDefault>
				</form>
			</ModalContent>
		</ModalContainer>
	);
}

export default ConfirmSubscribeModal;
