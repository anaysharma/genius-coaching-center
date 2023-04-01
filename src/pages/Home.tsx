import Glance from '../components/Glance';
import Carousal from '../components/homepageCarousal';

function Home() {
	return (
		<div>
			<Carousal />
			<div className="container mx-auto md:px-6" id="home-page-content">
				<Glance />
			</div>
		</div>
	);
}

export default Home;
