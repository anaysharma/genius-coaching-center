import Link from 'next/link';
import NavbarLink from './NavbarLink';
import { useState } from 'react';
import Hamburger from './Hamburger';
import useScrollPosition from '../hooks/useScrollPosition';

function Navbar() {
	const [isOpen, setOpen] = useState<boolean>(false);
	const [scrollPosition, _] = useScrollPosition();

	return (
		<>
			<nav
				id="nav-bar"
				className={`fixed z-10 h-16 w-full pl-4 font-rajdhani font-medium transition-colors duration-700 dark:text-white/80 md:h-14 md:pl-0 ${
					scrollPosition
						? 'bg-white/80 backdrop-blur-sm dark:bg-slate-900/80'
						: 'bg-transparent backdrop-blur-none'
				}`}
			>
				<div className="container mx-auto flex h-full w-full justify-between md:px-6">
					<div className="flex h-full w-full justify-between md:w-fit">
						<Link
							href="/"
							className="flex h-full w-full items-center gap-2 py-2"
						>
							<svg
								className="dark:fill-white fill-slate-950"
								width="10mm"
								height="10mm"
								viewBox="0 0 120 120"
								version="1.1"
								id="svg5"
							>
								<defs id="defs2" />
								<g id="layer1">
									<path
										id="path950"
										fill-opacity="1"
										stroke="none"
										stroke-width="13.5218"
										stroke-linecap="round"
										stroke-dasharray="none"
										stroke-opacity="1"
										d="m 60.000049,2 -15.000118,8.660453 v 11.546582 l 15.000118,-8.659936 39.752613,22.951054 9.999908,-5.773291 z M 25.000118,22.207035 10,30.867489 v 57.734977 l 50.000049,28.867484 16.172139,-9.33689 -9.999906,-5.77381 -6.172233,3.56361 L 19.999906,82.829174 V 36.640779 l 5.000212,-2.886644 z m 35.288802,3.232878 -9.999906,5.773808 49.711176,28.70109 v 22.914363 l -13.827578,7.983493 9.999389,5.773291 13.828099,-7.983492 V 65.688103 59.687951 54.141004 Z"
									/>
									<path
										id="rect1733"
										fill="#00aa88"
										fill-opacity="1"
										stroke="none"
										stroke-width="10.2778"
										stroke-linecap="round"
										stroke-dasharray="none"
										stroke-opacity="1"
										d="M 40.000236,13.390002 29.999813,19.16381 v 44.985368 11.255644 0.291455 L 81.262834,105.29292 91.263257,99.51963 40.000236,69.922986 Z"
									/>
								</g>
							</svg>
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
							<NavbarLink path="/" name="Home" />
							<NavbarLink path="about" name="About" />
							<NavbarLink path="courses" name="Courses" />
							<NavbarLink path="services" name="Services" />
							<NavbarLink path="reviews" name="Reviews" />
							<Link
								href="contact"
								className="-mt-px flex h-full w-screen items-center justify-center rounded border-y px-8 text-3xl hover:bg-teal-600 hover:text-white dark:border-gray-700 md:mt-0 md:h-auto md:w-auto md:border md:bg-gray-100/80 md:py-2 md:text-base md:dark:border-slate-700 md:dark:bg-slate-800/80"
							>
								Contact
							</Link>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
