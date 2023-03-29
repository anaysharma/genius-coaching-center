import { useEffect, useState } from 'react';
import { CarouselData } from './carousalData';
import getScrollPosition from '../utils/getScrollPosition';

function Carousel() {
	const [currentSlide, setCurrentSLide] = useState<number>(0);
	const [paused, setPaused] = useState<boolean>(false);

	useEffect(() => {
		const timerId = setInterval(
			() =>
				setCurrentSLide((currentSlide) =>
					paused ? currentSlide : (currentSlide + 1) % CarouselData.length
				),
			4000
		);
		return () => clearInterval(timerId);
	}, [paused]);

	return (
		<div className="relative overflow-hidden">
			<div className="flex h-96 w-full items-center justify-center">
				{CarouselData.map((slide, index) => {
					return (
						<img
							onMouseEnter={() => setPaused(true)}
							onMouseLeave={() => setPaused(false)}
							src={slide.image}
							alt={`image of slide number ${index} of hero carousal`}
							key={index}
							className={`
								absolute min-h-full min-w-full flex-shrink-0 object-fill transition-opacity duration-1000 ${
									index === currentSlide ? 'opacity-100' : 'opacity-0'
								}`}
						/>
					);
				})}
				<div
					className={
						'z-2 absolute inset-0 bg-gradient-to-b from-white opacity-90 dark:from-slate-900'
					}
				></div>
			</div>
		</div>
	);
}

export default Carousel;
