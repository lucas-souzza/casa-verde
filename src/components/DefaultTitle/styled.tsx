import styled from "styled-components";
import { TitleStyledProps } from "./types";

export const TitleStyled = styled.div<Pick<TitleStyledProps, "$size">>`
	& > h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: ${props => props.$size};
		font-family: var(--font-title);
		font-weight: 900;
		margin: 1.5rem 0;
	}
`;
