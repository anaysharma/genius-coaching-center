import { useEffect, useState } from 'react';

import { getNews } from '../client';

function New() {
	const [news, setNews] = useState(getNews);
	console.log(news);

	return (
		<div className="mt-8 rounded-lg border p-4 dark:border-slate-600">
			<h2 className="text-bold mb-4 font-rajdhani text-3xl lg:text-4xl">
				News
			</h2>
			<div className="z-5 relative grid h-96 w-full grid-cols-2 gap-2 rounded lg:grid-cols-4">
				{JSON.stringify(news)}
			</div>
		</div>
	);
}

export default New;
