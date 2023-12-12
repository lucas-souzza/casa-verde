import imageBanner from "../../assets/image-banner.png";
import DefaultParagraph from "../DefaultParagraph";
import DefaultTitle from "../DefaultTitle";
import { BannerStyled, BannerContent, BannerInfo, InfoBall, InfoItem } from "./styled";

function Banner() {
	return (
		<BannerStyled>
			<img src={imageBanner} alt="Duas folhas verdes de uma planta" />
			<BannerContent>
				<DefaultParagraph size="26px">Como conseguir</DefaultParagraph>
				<DefaultTitle size="42px">
					<h2>minha planta</h2>
				</DefaultTitle>

				<BannerInfo>
					<InfoItem>
						<InfoBall></InfoBall>
						<DefaultParagraph size="26px">
							Escolhas suas plantas
						</DefaultParagraph>
					</InfoItem>

					<InfoItem>
						<InfoBall></InfoBall>
						<DefaultParagraph size="26px">
							Faça seu pedido
						</DefaultParagraph>
					</InfoItem>

					<InfoItem>
						<InfoBall></InfoBall>
						<DefaultParagraph size="26px">
							Aguarde na sua casa
						</DefaultParagraph>
					</InfoItem>
				</BannerInfo>
			</BannerContent>
		</BannerStyled>
	);
}

export default Banner;
