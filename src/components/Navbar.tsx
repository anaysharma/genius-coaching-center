import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav className="flex justify-between">
				<div>
					<img src="/src/assets/logo2.svg" alt="" />{' '}
				</div>
				<div>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">about</Link>
						</li>
						<li>
							<Link to="/courses">courses</Link>
						</li>

						<li>
							<Link to="/services">services</Link>
						</li>

						<li>
							<Link to="/gallery">gallery</Link>
						</li>
					</ul>
				</div>
			</nav>

			<Outlet />
		</>
	);
};

export default Navbar;
