import { useEffect, useState } from 'react';
import { CarouselData } from './carousalData';

function Carousel() {
	const [currentSlide, setCurrentSLide] = useState(0);
	const [paused, setPaused] = useState(false);

	useEffect(() => {
		const timerId = setInterval(
			() =>
				setCurrentSLide(() =>
					paused ? currentSlide : (currentSlide + 1) % CarouselData.length
				),
			3000
		);
		return () => clearInterval(timerId);
	}, [currentSlide, paused]);

	return (
		<div className="absolute overflow-hidden">
			<div className="flex h-96 w-full">
				{CarouselData.map((slide, index) => {
					return (
						<img
							onMouseEnter={() => setPaused(true)}
							onMouseLeave={() => setPaused(false)}
							src={slide.image}
							alt={`image of slide number ${index} of hero carousal`}
							key={index}
							className={
								index === currentSlide
									? 'block h-auto w-full object-cover'
									: 'hidden'
							}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Carousel;
