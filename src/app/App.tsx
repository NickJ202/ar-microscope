import { connect } from 'react-redux';
import loadable from '@loadable/component';

import { DOM } from 'helpers/config';

const LazyHome = loadable(() => import('views/landing'), {
	resolveComponent: (components) => components.ConnectedLanding,
});
const LazyTx = loadable(() => import('views/tx'), {
	resolveComponent: (components) => components.ConnectedTx,
});

interface ObjectKeys {
	[key: string]: any;
}

const components: ObjectKeys = {
	LazyHome,
	LazyTx,
};

export default function App(props: any) {
	const Component = components[props.page || 'LazyHome'];
	return (
		<>
			<div id={DOM.loader} />
			<div id={DOM.modal} />
			<div id={DOM.notification} />
			<Component />
		</>
	);
}

const mapStateToProps = (state: any, props: any) => {
	return {
		...props,
		page: state.page,
	};
};
export const ConnectedApp = connect(mapStateToProps)(App);
