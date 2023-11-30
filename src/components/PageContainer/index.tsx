import { ReactElement } from "react";
import { styled } from "styled-components";
import backgroundImage from "../../assets/background.png";
import imageYellow from "../../assets/Vector.png";

interface PageContainerProps {
	children: ReactElement;
}

const Background = styled.div`
	background-image: url(${backgroundImage});
	background-size: cover;
	background-repeat: no-repeat;
	min-height: 100vh;
	width: 100%;
	position: relative;
`;

const BackgroundImageYellow = styled.img`
	position: absolute;
	right: 0;
	top: 0;
	z-index: -1;
`;

const Container = styled.div`
	width: 70%;
	margin: 0 auto;
`;

function PageContainer({ children }: PageContainerProps) {
	return (
		<Background>
			<BackgroundImageYellow src={imageYellow} />
			<Container>{children}</Container>
		</Background>
	);
}

export default PageContainer;
