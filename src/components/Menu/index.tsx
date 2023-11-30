import logo from "/logo.svg";
import Navbar from "../Navbar";
import { MenuStyled } from "./styled";

function Menu() {
	return (
		<MenuStyled>
			<img src={logo} alt="logo da casa verde" />
			<Navbar />
		</MenuStyled>
	);
}
export default Menu;
