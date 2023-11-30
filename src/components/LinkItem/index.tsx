import { Link } from "react-router-dom";
import { ReactElement } from "react";
import styled from "styled-components";

interface NavLinkProps {
	children: ReactElement | string;
	path: string;
}

const ListItem = styled.li`
	& > * {
		color: var(--font-color);
		text-decoration: none;
		font-weight: 600;
	}

	& > *:hover {
		text-decoration: underline 1px var(--font-color);
	}
`;

function LinkItem({ children, path }: NavLinkProps) {
	return (
		<ListItem>
			<Link to={path}>{children}</Link>
		</ListItem>
	);
}

export default LinkItem;
