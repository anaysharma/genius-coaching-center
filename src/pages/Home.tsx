import Carousal from '../components/homepageCarousal';

const Home = () => {
	return (
		<div>
			<Carousal />
			<div className="container mx-auto h-screen" id="home-page-content">
				<h1 id="home"></h1>
			</div>
		</div>
	);
};

export default Home;
