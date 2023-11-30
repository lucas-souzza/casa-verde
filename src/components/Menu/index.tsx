import logo from "/logo.svg";
import Navbar from "../Navbar";
import styled from "styled-components";

const MenuStyled = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 1rem;
`;

function Menu() {
	return (
		<MenuStyled>
			<img src={logo} alt="logo da casa verde" />
			<Navbar />
		</MenuStyled>
	);
}
export default Menu;
