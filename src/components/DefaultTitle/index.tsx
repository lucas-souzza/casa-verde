import { DefaultTitleProps } from "./types";
import { TitleStyled } from "./styled";

function DefaultTitle({ children, size }: DefaultTitleProps) {
	return <TitleStyled $size={size}>{children}</TitleStyled>;
}

export default DefaultTitle;
