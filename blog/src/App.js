import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './component/Header';

function App(){
	return (
		<>
		<Header>
		</Header>
		<Outlet/>
		</>
	)

}

export default App;