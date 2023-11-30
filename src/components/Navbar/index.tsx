import LinkItem from "../LinkItem";
import { NavStyled } from "./styled";

function Navbar() {
	return (
		<NavStyled>
			<ul>
				<LinkItem path="/">Como fazer</LinkItem>
				<span>/</span>
				<LinkItem path="/">Ofertas</LinkItem>
				<span>/</span>
				<LinkItem path="/">Depoimentos</LinkItem>
				<span>/</span>
				<LinkItem path="/">Videos</LinkItem>
				<span>/</span>
				<LinkItem path="/">Meu carrinho</LinkItem>
			</ul>
		</NavStyled>
	);
}

export default Navbar;
