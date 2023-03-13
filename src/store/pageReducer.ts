const components = {
	HOME: 'LazyHome',
	TX: 'LazyTx',
	NOT_FOUND: 'LazyHome', // TODO: figure this out
};

export default (state = 'HOME', action: { type: string }) => components[action.type] || state;
