import { useEffect } from 'react';

import { DOM } from 'helpers/config';
import { Routes } from 'routes';

export default function App() {
	useEffect(() => {
		const params = new Proxy(new URLSearchParams(window.location.search), {
			get: (searchParams, prop: string) => searchParams.get(prop),
		});
		const tx = (params as { tx?: string }).tx;
		if (tx) {
			window.location.href = `${window.location.origin}/#/tx/${tx}`;
		}
	}, []);

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
