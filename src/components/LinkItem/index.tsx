import { Link } from "react-router-dom";
import { NavLinkProps } from "./types";
import { ListItem } from "./styled";

function LinkItem({ children, path }: NavLinkProps) {
	return (
		<ListItem>
			<Link to={path}>{children}</Link>
		</ListItem>
	);
}

export default LinkItem;
