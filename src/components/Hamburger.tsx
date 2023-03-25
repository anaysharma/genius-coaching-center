type hamburgerProps = {
	toggled: boolean;
	toggle: Function;
};

const Hamburger = (props: hamburgerProps) => {
	const { toggled, toggle } = props;

	return (
		<button
			type="button"
			className="h-full w-16 pb-1"
			onClick={() => {
				toggle(!toggled);
				console.log(toggled);
			}}
		>
			<div className="relative mx-auto h-4 w-5">
				<div
					className={`absolute top-px h-[2px] w-5 origin-bottom-left bg-slate-600 duration-200 ${
						toggled ? 'rotate-45' : 'top-px rotate-0'
					}`}
				></div>
				<div
					className={`absolute top-1/2 h-[2px] w-5 bg-slate-600 duration-200 ${
						toggled ? 'opacity-0' : 'opacity-100'
					}`}
				></div>
				<div
					className={`absolute top-full h-[2px] w-5 origin-top-left bg-slate-600 duration-200 ${
						toggled ? '-rotate-45' : 'rotate-0'
					}`}
				></div>
			</div>
		</button>
	);
};

export default Hamburger;
