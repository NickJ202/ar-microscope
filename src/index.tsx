import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { App } from 'app';
import { GlobalStyle } from 'app/styles';
import { defaultTheme } from 'helpers/themes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<ThemeProvider theme={defaultTheme}>
		<React.StrictMode>
			<GlobalStyle />
			<App />
		</React.StrictMode>
	</ThemeProvider>
);
