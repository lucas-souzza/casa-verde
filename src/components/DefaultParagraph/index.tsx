import { ParagraphStyled } from "./styled";
import { DefaultParagraphProps } from "./types";

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
