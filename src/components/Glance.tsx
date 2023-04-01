import { Link } from 'react-router-dom';

function Glance() {
	return (
		<div className="overflow-hiddenbg-white relative z-[5] -mt-12 flex flex-col items-center justify-between bg-white dark:border-slate-700 dark:bg-slate-800 sm:rounded sm:border sm:shadow-xl lg:h-96 xl:mx-14">
			<div className="flex w-full px-4 pt-8 sm:items-center md:h-24 md:bg-slate-200 md:py-0 md:px-0 md:pt-0 md:dark:bg-slate-700">
				<ul className="justify-left grid w-full gap-4 px-4 md:grid-flow-col md:gap-0 md:px-0">
					<li className="flex gap-4 border-gray-500 dark:border-slate-400 md:justify-center md:border-r">
						<img src="/icons/email.svg" className="dark:invert" alt="" />
						<a
							className="opacity-80 hover:underline"
							href="mailto:name@email.com"
						>
							example@email.com
						</a>
					</li>
					<li className="flex gap-4 border-gray-500 dark:border-slate-400 md:justify-center md:border-r">
						<img src="/icons/smartphone.svg" className="dark:invert" alt="" />
						<a
							className="opacity-80 hover:underline"
							href="tele:name@email.com"
						>
							+91-1234-567-890
						</a>
					</li>
					<li className="flex gap-4 md:justify-center">
						<img src="/icons/whatsapp.svg" className="dark:invert" alt="" />
						<p className="opacity-80">+91-0123456789</p>
					</li>
				</ul>
			</div>
			<div className="content flex h-full w-full justify-between xl:px-8">
				<img
					src="/Learning-cuate.png"
					alt="illustration of a boy studying"
					className="hidden h-80 object-cover lg:block"
				/>
				<div className="flex flex-col gap-8 p-8 xl:px-12">
					<h1 className="text-3xl font-thin sm:text-4xl md:text-5xl">
						Get unmatched mentorship!
					</h1>
					<p className="text-lg opacity-90 lg:text-xl">
						get enrolled in the latest batch for instant mentorship and
						councelling from our industry leading experts in many specialized
						fields in technology and science or contact us using above links.
					</p>
					<div className="flex flex-1 items-center">
						<Link
							to="/courses"
							className="flex h-12 w-36 cursor-pointer items-center justify-center rounded bg-teal-600 text-white hover:bg-teal-700"
						>
							Enroll Now
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Glance;
