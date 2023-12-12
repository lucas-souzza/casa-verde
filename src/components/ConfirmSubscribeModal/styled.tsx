import styled from "styled-components";
import { ModalStyledProps } from "./types";

export const ModalContainer = styled.dialog<Pick<ModalStyledProps, "$isOpen">>`
	border: none;
	margin: 0;
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	padding: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	display: ${props => (props.$isOpen ? "flex" : "none")};
	align-items: center;
	justify-content: center;
	z-index: 99;
`;

export const ModalContent = styled.div`
	padding: 2rem;
	background-color: var(--color-white);
	width: 500px;
	text-align: center;
	border-radius: 0.75rem;

	& > p {
		font-size: 1.25rem;
		margin-bottom: 2rem;
	}

	& > form {
		margin-top: 4rem;
	}

	& > form button {
		border-radius: 0.5rem;
		padding: 1rem 1rem;
	}
`;
