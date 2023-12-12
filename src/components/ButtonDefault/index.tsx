import { ButtonDefaultStyled } from "./styled";
import { ButtonDefaultProps } from "./types";

function ButtonDefault({
	children,
	type,
	handleClick,
	bgColor = "",
}: ButtonDefaultProps) {
	return (
		<ButtonDefaultStyled
			onClick={handleClick}
			type={type}
			$bgColor={bgColor}
		>
			{children}
		</ButtonDefaultStyled>
	);
}

export default ButtonDefault;
