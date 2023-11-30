import { styled } from "styled-components";

export const SectionStyled = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export const SectionContentContainer = styled.div`
	width: 40%;
`;

export const SectionImagemContainer = styled.div`
	width: 60%;

	& > img {
		height: 850px;
		margin-left: -4rem;
	}
`;

export const FormNewsletter = styled.form`
	margin-top: 2.5rem;
	width: 120%;
	display: flex;
	box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);

	& > input {
		padding: 1.5rem;
		font-size: 1rem;
		font-family: var(--font-default);
		border: none;
		flex-grow: 1;
	}

	& > input:focus {
		outline: none;
	}

	& input::placeholder {
		padding-left: 2.5rem;
		background-image: url(/mail-icon.png);
		background-repeat: no-repeat;
		background-position: left;
	}

	& > button {
		border: none;
		background-color: var(--color-yellow);
		color: var(--color-white);
		padding: 1.5rem;
		font-size: 1rem;
		font-family: var(--font-default);
		cursor: pointer;
		z-index: 1;
		transition: transform 150ms ease;
	}

	& > button:hover {
		transform: scale(1.03);
	}
`;
