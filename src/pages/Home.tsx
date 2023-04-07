import Accordion from '../components/Acccordion';
import Glance from '../components/Glance';
import New from '../components/News';
import Carousal from '../components/homepageCarousal';
import Seperator from '../components/SectionSaperator';

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
			</div>
		</div>
	);
}

export default Home;
