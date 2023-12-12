export interface ConfirmSubscribeModalProps {
	changeModalState: () => void;
	isOpen: boolean;
	email: string;
}

export interface ModalStyledProps {
	$isOpen: boolean;
}
