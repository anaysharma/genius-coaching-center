function AccordionPanel(props: {
	title: string;
	content: string;
	url: string;
	id: number;
	ariaExpanded: boolean;
	clickHandler: React.Dispatch<React.SetStateAction<number>>;
}) {
	return (
		<div className="accordion-panel overflow-hidden rounded border shadow dark:border-slate-700">
			<h2 id={`panel${props.id}-heading`}>
				<button
					className={`accordion-trigger flex w-full flex-row-reverse items-center justify-end gap-2 bg-gray-50 p-2 dark:bg-slate-800 ${
						props.ariaExpanded ? 'border-b dark:border-b-slate-700' : ''
					}`}
					aria-controls={`panel${props.id}-content`}
					aria-expanded={props.ariaExpanded}
					onClick={() => {
						props.clickHandler(props.id);
					}}
				>
					<span
						className="flex w-full items-center justify-between text-left text-lg"
						id={`panel${props.id}-title`}
					>
						{props.title}
						<img
							className="mr-1 h-5 opacity-80 dark:invert"
							src={props.ariaExpanded ? '/icons/minus.svg' : '/icons/plus.svg'}
						/>
					</span>
					<img
						aria-hidden="true"
						className="accordion-icon h-8 rounded-full border bg-slate-100 p-2 dark:invert"
						src={props.url}
					/>
				</button>
			</h2>
			<div
				className="accordion-content"
				id={`panel${props.id}-content`}
				aria-labelledby={`panel${props.id}-heading`}
				role="region"
			>
				<p
					className={`overflow-hidden px-2 transition-all duration-200 ${
						props.ariaExpanded ? 'h-28' : 'h-0'
					}`}
				>
					{props.content}
				</p>
			</div>
		</div>
	);
}

export default AccordionPanel;
