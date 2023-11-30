import styled from "styled-components";
import { TitleStyledProps } from "./types";

export const TitleStyled = styled.div<Pick<TitleStyledProps, "$size">>`
	& > * {
		font-size: ${props => props.$size};
		font-family: var(--font-title);
		font-weight: 900;
		margin: 1.5rem 0;
	}
`;
