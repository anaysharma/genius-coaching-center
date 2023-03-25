import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactElement } from 'react';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Services from './pages/Services';
import Gallery from './pages/Gallery';

function App(): ReactElement {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="courses" element={<Courses />} />
					<Route path="services" element={<Services />} />
					<Route path="gallery" element={<Gallery />} />
					<Route path="*" element={<h1> NO PAGE </h1>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
