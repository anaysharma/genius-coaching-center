type hamburgerProps = {
	toggled: boolean;
	toggle: Function;
};

const Hamburger = (props: hamburgerProps) => {
	const { toggled, toggle } = props;

	return (
		<button
			type="button"
			className="z-10 m-4"
			onClick={() => {
				toggle(!toggled);
				console.log(toggled);
			}}
		>
			<div className="flex flex-col gap-[4px]">
				<div
					className={`h-[2px] w-4 origin-bottom-left bg-slate-800 duration-200 ${
						toggled ? 'rotate-45' : 'rotate-0'
					}`}
				></div>
				<div
					className={`h-[2px] w-4 origin-top-left bg-slate-800 duration-200 ${
						toggled ? 'opacity-0' : 'opacity-100'
					}`}
				></div>
				<div
					className={`h-[2px] w-4 origin-top-left bg-slate-800 duration-200 ${
						toggled ? '-rotate-45' : 'rotate-0'
					}`}
				></div>
			</div>
		</button>
	);
};

export default Hamburger;
