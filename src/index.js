import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './App';
import { LanguageProvider } from './store/language-context';
import ModalContextProvider from './store/modal-context';

ReactDOM.render(
	<LanguageProvider>
		<ModalContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ModalContextProvider>
	</LanguageProvider>,
	document.getElementById('root')
);
