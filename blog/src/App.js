import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './component/Header';
import { Container, CssBaseline } from '@mui/material';

function App(){
	return (
		<>
		<Header>
		</Header>
		
		<CssBaseline/>
		<Container maxWidth='lg' sx={{marginTop:'50px'}}>
			<Outlet/>
		</Container>
		</>
	)

}

export default App;