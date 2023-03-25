import { Outlet, Link } from 'react-router-dom';
import NavbarLink from './NavbarLink';
import { useState } from 'react';
import Hamburger from './Hamburger';

const Navbar = () => {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<nav className="fixed h-16 w-full border-b bg-white/75 pl-4 font-rajdhani font-medium backdrop-blur md:h-14 lg:px-0">
				<div className="mx-auto flex h-full w-full justify-between lg:w-content">
					<div className="flex h-full w-full justify-between md:w-fit">
						<Link to="/" className="flex h-full w-full items-center gap-2 py-2">
							<img className="h-full p-2 md:p-0" src="/logo.svg" alt="" />
							<h3 className="flex-1 justify-center text-center text-sm leading-none md:text-left">
								<span className="text-xl font-semibold leading-none">
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
						className={`fixed top-0 flex h-screen w-screen flex-col justify-center bg-white transition-[right] duration-300 md:static md:h-full md:w-fit ${
							isOpen ? 'right-0' : '-right-[100vw]'
						}`}
						onClick={() => setOpen(false)}
					>
						<ul className="flex h-1/2 w-full flex-col items-center gap-4 md:h-full md:flex-row md:p-0">
							<NavbarLink path="" name="Home" />
							<NavbarLink path="about" name="About" />
							<NavbarLink path="courses" name="Courses" />
							<NavbarLink path="services" name="Services" />
							<NavbarLink path="gallery" name="Gallery" />
						</ul>
					</div>
				</div>
			</nav>

			<div className="mx-auto px-4 pt-16 md:pt-14 lg:w-content lg:px-0">
				<Outlet />
			</div>
		</>
	);
};

export default Navbar;
