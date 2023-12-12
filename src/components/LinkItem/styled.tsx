import styled from "styled-components";

export const ListItem = styled.li`
	& > a {
		color: var(--font-color);
		text-decoration: none;
		font-weight: 600;
	}

	& > a:hover {
		text-decoration: underline 1px var(--font-color);
	}
`;
