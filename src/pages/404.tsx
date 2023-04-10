import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function noPage() {
	return (
		<>
			<Head>
				<title>Genius | Error</title>
			</Head>
			<div className="flex h-screen flex-col items-center justify-center gap-4">
				<Image
					src="/icons/alert-circle.svg"
					alt="error icon"
					className="h-28 dark:invert"
					width={80}
					height={80}
				/>
				<h1 className="text-3xl font-bold">
					Oops! this page doesn$apost exist.
				</h1>
				<p>return to home page to browse more (ERROR: 404).</p>
				<Link
					href="/"
					className="mt-4 flex h-12 items-center rounded bg-teal-600 px-8 text-white hover:translate-y-[-5px] hover:shadow-tealButtonHover"
				>
					Go to Home
				</Link>
			</div>
		</>
	);
}
