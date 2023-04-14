import Image from 'next/image';

export default function DirectorCard() {
	return (
		<div className="mx-auto px-4 md:px-0 lg:w-[970px]">
			<figure className="overflow-hidden rounded border p-8 dark:border-slate-700 lg:flex lg:p-0">
				<Image
					className="mx-auto aspect-square w-40 rounded-full lg:h-full lg:w-80 lg:rounded-none"
					src="/director.webp"
					alt="reviewer image"
					height={400}
					width={400}
				/>
				<div className="space-y-4 text-center lg:flex-1 lg:text-left">
					<blockquote className="p-4 text-lg font-medium before:content-[open-quote] after:content-[close-quote] lg:p-8">
						As the Director of Genius Coaching Center, I am proud of our team of
						experienced and dedicated instructors who are passionate about
						education and committed to helping our students achieve their goals.
						We believe that everyone has the potential to learn and grow, and we
						are committed to providing our students with the guidance and
						resources they need to reach their full potential.
					</blockquote>
					<figcaption className="font-medium">
						<div className="px-4 text-sky-500 dark:text-sky-400 lg:px-8">
							Himanshu Kushwaha
						</div>
						<div className="px-4 text-slate-700 dark:text-slate-500 lg:px-8">
							Director, Genius Computer Academy™
						</div>
					</figcaption>
				</div>
			</figure>
		</div>
	);
}
