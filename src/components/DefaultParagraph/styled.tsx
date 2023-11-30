import styled from "styled-components";
import { ParagraphStyledProps } from "./types";

export const ParagraphStyled = styled.p<
	Pick<ParagraphStyledProps, "$size" | "$lineHeight">
>`
	font-size: ${props => props.$size};
	color: var(--font-color);
	opacity: 0.5;
	line-height: ${props => props.$lineHeight};
`;
