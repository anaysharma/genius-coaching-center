function AccordionPanel(props: {
	name: string;
	title: string;
	email: string;
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
						<div>
							<h3 className="text-xl font-medium leading-6">{props.title}</h3>
							<span className="pr-2 text-xs font-medium opacity-70">
								{props.name}
							</span>
							<span className="hidden border-l pl-2 text-xs leading-3 opacity-50 dark:border-l-slate-600 md:inline">
								{props.email}
							</span>
						</div>
						<img
							className="mr-1 h-5 opacity-80 dark:invert"
							src={props.ariaExpanded ? '/icons/minus.svg' : '/icons/plus.svg'}
						/>
					</span>
					<img
						aria-hidden="true"
						className="accordion-icon aspect-square h-14 rounded-full border dark:border-slate-600"
						src={props.url}
					/>
				</button>
			</h2>
			<div
				className={`accordion-content overflow-y-scroll transition-all  duration-200 ${
					props.ariaExpanded ? 'h-48 md:h-36' : 'h-0'
				}`}
				id={`panel${props.id}-content`}
				aria-labelledby={`panel${props.id}-heading`}
				role="region"
			>
				<p className="py-2 px-4">{props.content}</p>
			</div>
		</div>
	);
}

export default AccordionPanel;
