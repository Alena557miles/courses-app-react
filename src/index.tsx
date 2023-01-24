import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import reducer from './store';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

reportWebVitals();
