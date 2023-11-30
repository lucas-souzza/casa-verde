import styled from "styled-components";
import backgroundImage from "../../assets/background.png";

export const Background = styled.div`
	background-image: url(${backgroundImage});
	background-size: cover;
	background-repeat: no-repeat;
	min-height: 100vh;
	width: 100%;
	position: relative;
`;

export const BackgroundImageYellow = styled.img`
	position: absolute;
	right: 0;
	top: 0;
	z-index: -1;
`;

export const Container = styled.div`
	width: 70%;
	max-width: 1440px;
	margin: 0 auto;
`;
