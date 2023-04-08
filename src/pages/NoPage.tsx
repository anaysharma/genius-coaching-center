import { Link } from 'react-router-dom';

export default function () {
	return (
		<div className="flex h-screen flex-col items-center justify-center gap-4">
			<img src="/icons/alert-circle.svg" alt="" className="h-28 dark:invert" />
			<h1 className="text-3xl font-bold">Oops! this page doesn't exist.</h1>
			<p>return to home page to browse more (ERROR: 404).</p>
			<Link
				to="/"
				className="mt-4 flex h-12 items-center rounded bg-teal-600 px-8 text-white hover:translate-y-[-5px] hover:shadow-tealButtonHover"
			>
				Go to Home
			</Link>
		</div>
	);
}
