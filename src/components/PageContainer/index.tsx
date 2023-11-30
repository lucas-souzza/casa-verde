import imageYellow from "../../assets/Vector.png";
import { Background, BackgroundImageYellow, Container } from "./styled";
import { PageContainerProps } from "./types";

function PageContainer({ children }: PageContainerProps) {
	return (
		<Background>
			<BackgroundImageYellow src={imageYellow} />
			<Container>{children}</Container>
		</Background>
	);
}

export default PageContainer;
