import styled from "styled-components";
import LinkItem from "../LinkItem";

const NavStyled = styled.nav`
	& > ul {
		display: flex;
		gap: 1rem;
	}
`;

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
