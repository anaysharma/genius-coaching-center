import { Outlet, Link } from 'react-router-dom';
import NavbarLink from './NavbarLink';
import { useEffect, useState } from 'react';
import Hamburger from './Hamburger';
import getDarkModePreference from '../utils/getDarkModePreference';
import getScrollPosition from '../utils/getScrollPosition';

const Navbar = () => {
	const [isOpen, setOpen] = useState<boolean>(false);
	const [backgroundColor, setBackgroundColor] = useState<{
		[key: string]: string;
	}>({
		dark: 'rgba(15, 23, 42, 0)',
		light: 'rgba(255, 255, 255, 0)',
	});

	const handleScroll = () => {
		const position = window.pageYOffset;

		setBackgroundColor({
			dark: `rgba(15, 23, 42, ${position / 255 > 0.8 ? 0.8 : position / 255})`,
			light: `rgba(255, 255, 255, ${
				position / 255 > 0.8 ? 0.8 : position / 255
			})`,
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [backgroundColor]);

	const getBackgroundColor = () => backgroundColor[getDarkModePreference()];

	return (
		<>
			<nav
				id="nav-bar"
				className={`fixed z-10 h-16 w-full pl-4 font-rajdhani font-medium dark:border-b-gray-700 dark:text-white/80 md:h-14 lg:px-0 ${
					getScrollPosition() ? 'border-b backdrop-blur-lg' : ''
				}`}
				style={{ backgroundColor: getBackgroundColor() }}
			>
				<div className="container mx-auto flex h-full w-full justify-between md:px-6">
					<div className="flex h-full w-full justify-between md:w-fit">
						<Link to="/" className="flex h-full w-full items-center gap-2 py-2">
							<img
								className="h-full py-2 md:p-0"
								src={
									getDarkModePreference() == 'dark'
										? '/logo-dark.svg'
										: '/logo.svg'
								}
								alt=""
							/>
							<h3 className="flex-1 justify-center text-center text-sm leading-none md:text-left">
								<span className="text-xl font-semibold leading-none dark:text-white">
									Genius
								</span>
								<br /> Computer Academy
							</h3>
						</Link>
						<div className="z-10 md:hidden">
							<Hamburger toggled={isOpen} toggle={setOpen} />
						</div>
					</div>
					<div
						className={`fixed top-0 flex h-screen w-screen flex-col justify-center bg-white transition-[right] duration-300 dark:bg-gray-900 md:static md:h-full md:w-fit md:bg-transparent ${
							isOpen ? 'right-0' : '-right-[100vw]'
						}`}
					>
						<ul
							className="flex h-1/2 w-full flex-col items-center md:h-full md:flex-row md:gap-4 md:p-0"
							onClick={() => setOpen(false)}
						>
							<NavbarLink path="" name="Home" />
							<NavbarLink path="about" name="About" />
							<NavbarLink path="courses" name="Courses" />
							<NavbarLink path="services" name="Services" />
							<NavbarLink path="gallery" name="Gallery" />
						</ul>
					</div>
				</div>
			</nav>

			<main className="dark:bg-gray-900 dark:text-white">
				<div className="container mx-auto">
					<Outlet />
				</div>
			</main>
		</>
	);
};

export default Navbar;
