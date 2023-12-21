import PageContainer from "../../components/PageContainer";
import Menu from "../../components/Menu";
import SubscribeNewsLetter from "../../components/SubscribeNewsLetter";
import Banner from "../../components/Banner";
import Offers from "../../components/Offers";

function Home() {
	return (
		<>
			<PageContainer>
				<main>
					<Menu />
					<SubscribeNewsLetter />
					<Banner />
					<Offers />
				</main>
			</PageContainer>
		</>
	);
}

export default Home;
