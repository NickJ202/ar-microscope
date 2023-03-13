import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'store/configureStore';
// import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ConnectedApp } from 'app';
import { GlobalStyle } from 'app/styles';
import { defaultTheme } from 'helpers/themes';

import '@babel/polyfill';

const { store, firstRoute } = configureStore({}, {});

function render() {
	ReactDOM.render(
		<ThemeProvider theme={defaultTheme}>
			<Provider store={store}>
				<React.StrictMode>
					<GlobalStyle />
					<ConnectedApp />
				</React.StrictMode>
			</Provider>
		</ThemeProvider>,
		document.getElementById('root')
	);
}

store.dispatch(firstRoute()).then(() => render());
