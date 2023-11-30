import { styled } from "styled-components";

interface DefaultParagraphProps {
	children: string;
	size: string;
	lineHeight?: string;
}

interface StyledProps {
	$size: string;
	$lineHeight: string;
}

const ParagraphStyled = styled.p<Pick<StyledProps, "$size" | "$lineHeight">>`
	font-size: ${props => props.$size};
	color: var(--font-color);
	opacity: 0.5;
	line-height: ${props => props.$lineHeight};
`;

function DefaultParagraph({
	children,
	size,
	lineHeight = "normal",
}: DefaultParagraphProps) {
	return (
		<ParagraphStyled $size={size} $lineHeight={lineHeight}>
			{children}
		</ParagraphStyled>
	);
}

export default DefaultParagraph;
