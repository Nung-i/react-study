import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import TestApp from './TestApp';
import './index.css';
import List from './component/board/List';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App/>}>
				<Route path='test-app' element={<TestApp/>}></Route>
				<Route path='board' element={<List/>}></Route>
			</Route>
		</Routes>
	</BrowserRouter>
);
