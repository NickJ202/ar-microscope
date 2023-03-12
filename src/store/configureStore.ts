/* eslint-disable simple-import-sort/imports */
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import { createRouter } from '@respond-framework/rudy';

import routes from './routes';
import page from './pageReducer';

export const configureStore = (preloadedState, initialEntries) => {
	// const options = { initialEntries };
	// const { reducer, middleware, firstRoute } = createRouter(routes, options);
	const { reducer, middleware, firstRoute } = createRouter(routes, {
		basenames: ['/#'],
	});

	const rootReducer = combineReducers({ page, location: reducer });
	const middlewares = applyMiddleware(middleware);
	const enhancers = compose(middlewares);

	const store = createStore(rootReducer, preloadedState, enhancers);

	return { store, firstRoute };
};
