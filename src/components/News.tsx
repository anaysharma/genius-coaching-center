import { useEffect, useState } from 'react';
import { client } from '../client';

type newsResponseType = {
	_id: string;
	title: string;
	content: string;
};

function New() {
	const [news, setNews] = useState<newsResponseType[]>([]);

	useEffect(() => {
		client
			.fetch(
				`*[_type == "news"] {
					_id,
					title,
					"content": content[0].children[0].text
				}`
			)
			.then((res) => setNews(res))
			.catch(console.error);
	}, []);

	return (
		<div className="mt-14 flex flex-col gap-4 rounded-lg px-4 md:px-0 lg:flex-row">
			<div className="mb-4 w-full lg:w-96">
				<h2 className="text-bold mb-4 text-center font-rajdhani text-3xl font-bold md:text-left lg:text-4xl">
					Latest @Academy
				</h2>
				<p className="text-center md:text-left lg:text-lg">
					alot is happening at our academy, and alot is improving here, you
					should be a part of it, we would love to have you with us!
					<br />
					glimpse of thing happened recently.
				</p>
			</div>
			<ul className="flex max-h-[60vh] flex-1 snap-y snap-proximity flex-col gap-2 overflow-y-scroll rounded border-y dark:border-y-slate-700 lg:max-h-96">
				{news.map((items) => (
					<li
						className="shrink-0 rounded border bg-gray-50 p-2 px-2 shadow dark:border-slate-700 dark:bg-slate-800"
						key={items._id}
					>
						<h2 className="border-b px-2 pb-2 text-lg font-bold dark:border-b-slate-700">
							{items.title}
						</h2>
						<p className="p-2">{items.content}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default New;
