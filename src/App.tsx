import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactElement } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Services from './pages/Services';
import Reviews from './pages/Reviews';

function App(): ReactElement {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navbar />}>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="courses" element={<Courses />} />
						<Route path="services" element={<Services />} />
						<Route path="reviews" element={<Reviews />} />
						<Route path="*" element={<h1> NO PAGE </h1>} />
					</Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
