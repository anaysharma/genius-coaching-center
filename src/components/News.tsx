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
		<div className="mt-8 rounded-lg border p-4 dark:border-slate-600">
			<h2 className="text-bold mb-4 font-rajdhani text-3xl lg:text-4xl">
				News
			</h2>
			<div className="z-5 relative grid h-96 w-full grid-cols-2 gap-2 rounded lg:grid-cols-4">
				{news.map((items) => (
					<div key={items._id}>
						<h2>{items.title}</h2>
						<p>{items.content}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default New;
