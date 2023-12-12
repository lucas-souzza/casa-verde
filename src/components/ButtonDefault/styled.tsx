import styled from "styled-components";
import { ButtonDefaultStyledProps } from "./types";

export const ButtonDefaultStyled = styled.button<
	Pick<ButtonDefaultStyledProps, "$bgColor">
>`
	border: none;
	background-color: ${props => props.$bgColor};
	color: var(--color-white);
	padding: 1.5rem;
	font-size: 1rem;
	font-family: var(--font-default);
	cursor: pointer;
	z-index: 1;
	transition: transform 150ms ease;

	& :hover {
		transform: scale(1.03);
	}
`;
