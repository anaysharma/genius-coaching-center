import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactElement } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import NoPage from './pages/NoPage';

import ScrollToTop from './utils/scrollTopTop';

function App(): ReactElement {
	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Navbar />}>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="courses" element={<Courses />} />
						<Route path="services" element={<Services />} />
						<Route path="reviews" element={<Reviews />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
