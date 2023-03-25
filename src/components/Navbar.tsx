import { Outlet, Link } from 'react-router-dom';
import NavbarLink from './NavbarLink';
import { useState } from 'react';
import Hamburger from './Hamburger';

const Navbar = () => {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<nav className="fixed h-14 w-full border-b bg-white/75 pl-4 font-rajdhani font-medium backdrop-blur lg:px-0">
				<div className="mx-auto flex h-full justify-between lg:w-content">
					<div className="h-full py-2">
						<Link to="/">
							<img className="h-full" src="/src/assets/logo2.svg" alt="" />
						</Link>
					</div>
					<div className="my-auto md:hidden">
						<Hamburger toggled={isOpen} toggle={setOpen} />
					</div>
					<div
						className={`fixed top-14 flex h-full w-screen flex-col justify-center bg-white/75 backdrop-blur duration-300 md:static md:w-fit ${
							isOpen ? 'right-0' : '-right-full'
						}`}
					>
						<ul className="flex h-1/2 w-full flex-col items-center gap-4 pb-14 md:h-full md:flex-row md:p-0">
							<NavbarLink path="" name="Home" />
							<NavbarLink path="about" name="About" />
							<NavbarLink path="courses" name="Courses" />
							<NavbarLink path="services" name="Services" />
							<NavbarLink path="gallery" name="Gallery" />
						</ul>
					</div>
				</div>
			</nav>

			<div className="mx-auto px-4 pt-14 lg:w-content lg:px-0">
				<Outlet />
			</div>
		</>
	);
};

export default Navbar;
