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
		<div className="accordion-panel overflow-hidden rounded border dark:border-slate-700">
			<h2 id={`panel${props.id}-heading`}>
				<button
					className={`accordion-trigger relative flex h-14 w-full flex-row-reverse items-center justify-end gap-2 p-2`}
					aria-controls={`panel${props.id}-content`}
					aria-expanded={props.ariaExpanded}
					onClick={() => {
						props.clickHandler(props.id);
					}}
				>
					<span
						className={`flex h-full w-full items-center justify-between text-left text-lg transition-all duration-200 ${
							props.ariaExpanded ? 'pl-24' : 'pl-12'
						}`}
						id={`panel${props.id}-title`}
					>
						<div className="relative grid h-full w-full grid-flow-row items-center">
							<h3
								className={`absolute text-xl font-medium transition-all duration-200 ${
									props.ariaExpanded ? 'opacity-0' : 'opacity-1'
								}`}
							>
								{props.title}
							</h3>
							<span
								className={`absolute pr-2 font-medium transition-all duration-200 ${
									props.ariaExpanded ? 'opacity-1' : 'opacity-0'
								}`}
							>
								{props.name}

								<span
									className={`text-xs leading-3 opacity-50 transition-all duration-200 dark:border-l-slate-600 ${
										props.ariaExpanded ? 'block' : 'hidden'
									}`}
								>
									{props.email}
								</span>
							</span>
						</div>
						<img
							className="mr-1 h-5 opacity-80 dark:invert"
							src={props.ariaExpanded ? '/icons/minus.svg' : '/icons/plus.svg'}
						/>
					</span>
					<img
						aria-hidden="true"
						className={`accordion-icon absolute aspect-square rounded-full border transition-all duration-200 dark:border-slate-600 ${
							props.ariaExpanded ? 'top-3 left-3 h-20' : 'top-2 h-10'
						}`}
						src={props.url}
					/>
				</button>
			</h2>
			<div
				className={`accordion-content overflow-y-scroll transition-all  duration-200 ${
					props.ariaExpanded
						? 'mr-4 mb-2 h-48 opacity-100 md:h-36'
						: 'h-0 opacity-0'
				}`}
				id={`panel${props.id}-content`}
				aria-labelledby={`panel${props.id}-heading`}
				role="region"
			>
				<p className="ml-24 p-2">{props.content}</p>
			</div>
		</div>
	);
}

export default AccordionPanel;
