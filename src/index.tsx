import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { App } from 'app';
import { GlobalStyle } from 'app/styles';
import { defaultTheme } from 'helpers/themes';

ReactDOM.render(
	<ThemeProvider theme={defaultTheme}>
		<React.StrictMode>
			<HashRouter>
				<GlobalStyle />
				<App />
			</HashRouter>
		</React.StrictMode>
	</ThemeProvider>,
	document.getElementById('root')
);
