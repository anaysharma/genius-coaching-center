function New() {
	return (
		<div className="mt-8 rounded-lg border p-4 dark:border-slate-600">
			<h2 className="text-bold mb-4 font-rajdhani text-3xl lg:text-4xl">
				News
			</h2>
			<div className="z-5 relative grid h-96 w-full grid-cols-2 gap-2 rounded lg:grid-cols-4">
				<div className="rounded border bg-gray-50 p-2 shadow-md dark:border-slate-600 dark:bg-slate-800">
					div1
				</div>
				<div className="rounded border bg-gray-50 p-2 shadow-md dark:border-slate-600 dark:bg-slate-800">
					div2
				</div>
				<div className="rounded border bg-gray-50 p-2 shadow-md dark:border-slate-600 dark:bg-slate-800">
					div3
				</div>
				<div className="rounded border bg-gray-50 p-2 shadow-md dark:border-slate-600 dark:bg-slate-800">
					div4
				</div>
			</div>
		</div>
	);
}

export default New;
