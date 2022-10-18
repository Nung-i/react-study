import React from 'react';
import Wrapper from './component/Wrapper';
import Hello from './component/Hello';
import Counter from './component/Counter';
import InputSample from './component/InputSample';
import InputSample2 from './component/InputSample2';

function App(){
	return (
		<Wrapper>
			{/* 주석은이렇게 써요 */}
			<Hello name="name_prop"/>
			<Hello/>
			<Hello/>
			<Hello/>

			<Counter/>
			<InputSample/>
			<InputSample2/>
		</Wrapper>
	)

}

export default App;