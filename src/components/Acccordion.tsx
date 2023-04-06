import { useEffect, useState } from 'react';
import AccordionPanel from './AccordionPanel';
import { accordionData } from '../data/accordionData';
import { client } from '../client';
import imageUrlBuilder from '@sanity/image-url';

type reviewsType = {
	id: string;
	name: string;
	email: string;
	title: string;
	content: string;
	image: { _ref: string };
}[];

function Accordion() {
	const [clickedPanel, setClickedPanel] = useState<number>(1);
	const [reviews, setReviews] = useState<reviewsType>([]);

	useEffect(() => {
		client
			.fetch(
				`*[_type == "reviews"][0..4] {
					_id,
					name,
					'image': profile.asset { _ref },
					email,
					title,
					"content": content[0].children[0].text
				}`
			)
			.then((res) => setReviews(res))
			.catch(console.error);
	}, []);

	const getUrl = (ref: string) => {
		const builder = imageUrlBuilder(client);
		return builder.image(ref).url();
	};

	return (
		<div className="reviews mt-12 flex flex-col gap-4 rounded-md p-4 md:px-0 lg:flex-row">
			<div className="mb-4 w-full lg:w-96">
				<h2 className="mb-2 text-center font-rajdhani text-3xl font-bold md:text-left lg:text-4xl">
					Our reviews
				</h2>
				<p className="text-center md:text-left lg:text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore
					maiores animi eveniet ex? Beatae aut error accusantium unde
					reprehenderit natus, blanditiis voluptatum aliquid magnam, ut
					obcaecati dolor suscipit corporis!
				</p>
			</div>
			<div className="accordion grid flex-1 gap-2">
				{reviews.map((item, idx) => (
					<AccordionPanel
						key={idx}
						name={item.name}
						email={item.email}
						title={item.title}
						content={item.content}
						id={idx}
						ariaExpanded={idx === clickedPanel ? true : false}
						url={getUrl(item.image._ref)}
						clickHandler={setClickedPanel}
					/>
				))}
			</div>
		</div>
	);
}

export default Accordion;
