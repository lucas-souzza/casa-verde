import { ReactElement } from "react";
import { styled } from "styled-components";

interface DefaultTitleProps {
	children: ReactElement;
	size: string;
}

interface TitleStyledProps {
	$size: string;
}

const TitleStyled = styled.div<Pick<TitleStyledProps, "$size">>`
	& > * {
		font-size: ${props => props.$size};
		font-family: var(--font-title);
		font-weight: 900;
		margin: 1.5rem 0;
	}
`;

function DefaultTitle({ children, size }: DefaultTitleProps) {
	return <TitleStyled $size={size}>{children}</TitleStyled>;
}

export default DefaultTitle;
