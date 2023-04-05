import { useState } from 'react';
import AccordionPanel from './AccordionPanel';
import { accordionData } from '../data/accordionData';

function Accordion() {
	const [clickedPanel, setClickedPanel] = useState<number>(1);

	return (
		<div className="reviews mt-8 flex flex-col gap-4 rounded-md border p-4 dark:border-slate-700 lg:flex-row">
			<div className="mb-4 w-full lg:w-96">
				<h2 className="text-bold mb-2 font-rajdhani text-3xl lg:text-4xl">
					Our reviews
				</h2>
				<p className="lg:text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore
					maiores animi eveniet ex? Beatae aut error accusantium unde
					reprehenderit natus, blanditiis voluptatum aliquid magnam, ut
					obcaecati dolor suscipit corporis!
				</p>
			</div>
			<div className="accordion grid flex-1 gap-2">
				{accordionData.map((item, idx) => (
					<AccordionPanel
						key={idx}
						title={item.title}
						content={item.content}
						id={item.id}
						ariaExpanded={item.id === clickedPanel ? true : false}
						url={item.url}
						clickHandler={setClickedPanel}
					/>
				))}
			</div>
		</div>
	);
}

export default Accordion;
