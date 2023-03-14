import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { configureStore } from 'store/configureStore';
import { ThemeProvider } from 'styled-components';

import { App } from 'app';
import { GlobalStyle } from 'app/styles';
import { defaultTheme } from 'helpers/themes';

import '@babel/polyfill';

const { store, firstRoute } = configureStore({}, {});

function render() {
	ReactDOM.render(
		<ThemeProvider theme={defaultTheme}>
			<Provider store={store}>
				<React.StrictMode>
					<HashRouter>
						<GlobalStyle />
						<App />
					</HashRouter>
				</React.StrictMode>
			</Provider>
		</ThemeProvider>,
		document.getElementById('root')
	);
}

store.dispatch(firstRoute()).then(() => render());
