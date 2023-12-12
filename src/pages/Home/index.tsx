import PageContainer from "../../components/PageContainer";
import Menu from "../../components/Menu";
import SubscribeNewsLetter from "../../components/SubscribeNewsLetter";
import Banner from "../../components/Banner";

function Home() {
	return (
		<>
			<PageContainer>
				<main>
					<Menu />
					<SubscribeNewsLetter />
					<Banner />
				</main>
			</PageContainer>
		</>
	);
}

export default Home;
