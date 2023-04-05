import { useEffect, useState } from 'react';
import { CarouselData } from '../data/carousalData';
import { Link } from 'react-router-dom';

function Carousel() {
	const [currentSlide, setCurrentSLide] = useState<number>(0);

	useEffect(() => {
		const timerId = setInterval(
			() =>
				setCurrentSLide(
					(currentSlide) => (currentSlide + 1) % CarouselData.length
				),
			4000
		);
		return () => clearInterval(timerId);
	}, []);

	return (
		<div className="relative w-full overflow-hidden">
			<div className="flex h-[70vh] w-full items-center justify-center">
				{CarouselData.map((slide, index) => {
					return (
						<img
							src={slide.image}
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
				<section className="absolute inset-0 mt-auto flex items-center sm:mt-0">
					<div className="container mx-auto mt-auto py-16 px-4 text-center sm:mt-0 lg:py-16 lg:px-12">
						<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl xl:text-6xl">
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
								<svg
									className="ml-2 -mr-1 h-5 w-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
										clipRule="evenodd"
									></path>
								</svg>
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
