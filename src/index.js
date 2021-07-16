import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { LanguageProvider} from './store/LanguageContext';
import ModalContextProvider from './store/ModalContext';

ReactDOM.render(
    <LanguageProvider>
        <ModalContextProvider>
            <App />
        </ModalContextProvider>
    </LanguageProvider>,
document.getElementById('root'));