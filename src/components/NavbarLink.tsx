import getCurrentRoute from '../utils/useCurrentRoute';
import Link from 'next/link';

function NavbarLink(props: { name: string; path: string }) {
	const { name, path } = props;
	return (
		<li
			className={`-mt-px flex h-full w-screen justify-center border-y hover:text-teal-600 dark:border-gray-700 hover:dark:text-teal-400 md:mt-0 md:w-16 md:border-0 ${
				getCurrentRoute() == path &&
				'text-teal-600 dark:text-teal-400 md:shadow-accent'
			}`}
		>
			<Link
				className="flex h-full items-center text-3xl md:text-base"
				href={path}
			>
				{name}
			</Link>
		</li>
	);
}

export default NavbarLink;
