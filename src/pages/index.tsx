import Accordion from '../components/Acccordion';
import Glance from '../components/Glance';
import New from '../components/News';
import Carousal from '../components/homepageCarousal';
import Seperator from '../components/SectionSaperator';
import Moto from '../components/Moto';
import DirectorCard from '../components/DirectorCard';
import Head from 'next/head';

function Home() {
	return (
		<>
			<Head>
				<title>Genius | home</title>
			</Head>
			<div>
				<Carousal />
				<div className="container lg:px-6 2xl:px-20" id="home-page-content">
					<Glance />
					<Seperator />
					<New />
					<Seperator />
					<Accordion />
					<Seperator />
					<Moto />
					<Seperator />
					<DirectorCard />
					<Seperator />
				</div>
			</div>
		</>
	);
}

export default Home;
