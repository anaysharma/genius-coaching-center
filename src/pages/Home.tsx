import Accordion from '../components/Acccordion';
import Glance from '../components/Glance';
import New from '../components/News';
import Carousal from '../components/homepageCarousal';
import Seperator from '../components/SectionSaperator';
import Moto from '../components/Moto';
import DirectorCard from '../components/DirectorCard';

function Home() {
	return (
		<div>
			<Carousal />
			<div className="container mx-auto md:px-6" id="home-page-content">
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
	);
}

export default Home;
