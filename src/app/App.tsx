import { useEffect, useState } from 'react';

import { DOM } from 'helpers/config';
import { Routes } from 'routes';
import { Tx } from 'views/tx';

function parseQuery(queryString: string) {
	const query: any = {};
	const pairs: any = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
	for (let i = 0; i < pairs.length; i++) {
		const pair: any = pairs[i].split('=');
		query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
	}
	return query;
}
export default function App() {
	const query = parseQuery(window.location.search);
	const [renderTx, setRenderTx] = useState<string | undefined>();
	useEffect(() => {
		const tx = query.tx;
		if (query.tx) {
			setRenderTx(tx);
		}
	}, []);

	if (renderTx) return <Tx tx={renderTx} />;
	return (
		<>
			<div id={DOM.loader} />
			<div id={DOM.modal} />
			<div id={DOM.notification} />
			<Routes />
		</>
	);
}

// const mapStateToProps = (state: any, props: any) => {
// 	return {
// 		...props,
// 		page: state.page,
// 	};
// };
// export const ConnectedApp = connect(mapStateToProps)(App);
