import getCurrentRoute from '../utils/getCurrentRoute';
import { Link } from 'react-router-dom';

type navbarLinkProps = {
	name: string;
	path: string;
};

const NavbarLink = (props: navbarLinkProps) => {
	const { name, path } = props;
	return (
		<li
			className={`flex h-full w-screen justify-center border-teal-600 hover:text-teal-600 hover:dark:text-teal-400 md:w-16 ${
				getCurrentRoute() == path &&
				'text-teal-600 dark:text-teal-400 md:shadow-accent'
			}`}
		>
			<Link
				className="flex h-full items-center text-3xl md:text-base"
				to={path}
			>
				{name}
			</Link>
		</li>
	);
};

export default NavbarLink;
