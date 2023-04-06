import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../client';
import imageUrlBuilder from '@sanity/image-url';

function Carousel() {
	const [currentSlide, setCurrentSLide] = useState<number>(0);
	const [carouselImages, setCarouselImages] = useState<string[]>([]);

	useEffect(() => {
		client
			.fetch("*[_type=='carousel'][0] {'ref': images[].asset {_ref}}")
			.then((res) => {
				const builder = imageUrlBuilder(client);
				const urls: string[] = [];
				res.ref.forEach((item: {}) => {
					urls.push(builder.image(item).url());
				});
				setCarouselImages(urls);
			})
			.catch(console.error);

		const timerId = setInterval(
			() => setCurrentSLide((currentSlide) => (currentSlide + 1) % 5),
			4000
		);
		return () => clearInterval(timerId);
	}, []);

	return (
		<div className="relative w-full overflow-hidden">
			<div className="flex h-[70vh] w-full items-center justify-center">
				{carouselImages.map((url, index) => {
					return (
						<img
							src={url}
							alt={`image of slide number ${index} of hero carousal`}
							key={index}
							className={`
								absolute min-h-full min-w-full flex-shrink-0 object-cover transition-opacity duration-1000 ${
									index === currentSlide ? 'opacity-100' : 'opacity-0'
								}`}
						/>
					);
				})}
				<div
					className={
						'z-2 absolute inset-0 bg-gradient-to-b from-white dark:from-slate-900'
					}
				></div>
				<section className="absolute inset-0 flex items-center sm:mt-0">
					<div className="container mx-auto py-16 px-4 text-center sm:mt-0 lg:py-16 lg:px-12">
						<h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
							Building A Better World, One Student At A Time.
						</h1>
						<p className="mb-8 text-lg font-normal text-black/75 dark:text-gray-300 sm:px-16 lg:text-xl xl:px-48">
							Here at Genius Computer Academy we focus on education that unlock
							students to grow by falling in love with technology and
							innovation. we love to teach, to see you grow!
						</p>
						<div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 lg:mb-16">
							<Link
								to="/about"
								className="dark:focus:ring-primary-900 inline-flex items-center justify-center rounded bg-teal-600 py-3 px-5 text-center text-base font-medium text-white transition-all hover:translate-y-[-4px]  hover:shadow-tealButtonHover focus:ring-4 focus:ring-teal-300 sm:w-44"
							>
								Learn more
							</Link>
							<Link
								to="/courses"
								className="inline-flex items-center justify-center rounded bg-white py-3 px-5 text-center text-base font-medium text-gray-900 transition-all hover:translate-y-[-4px] hover:shadow-slateButtonHoverLight focus:ring-4 focus:ring-gray-100 dark:bg-slate-700 dark:text-white dark:hover:shadow-slateButtonHoverDark dark:focus:ring-gray-800 sm:w-44 "
							>
								Get Started
							</Link>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Carousel;
