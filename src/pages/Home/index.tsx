import PageContainer from "../../components/PageContainer";
import Menu from "../../components/Menu";
import SubscribeNewsLetter from "../../components/SubscribeNewsLetter";

function Home() {
	return (
		<>
			<PageContainer>
				<main>
					<Menu />
					<SubscribeNewsLetter />
				</main>
			</PageContainer>
		</>
	);
}

export default Home;
