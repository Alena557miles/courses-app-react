import React from 'react';
import { Course } from './components/Courses/Courses';
import { Header } from './components/Header/Header';
import { Registration } from './components/Registration/Registration';

function App() {
	return (
		<div className='container mx-auto pt-5'>
			<Header name={'Whyname'} />
			{/* <Course /> */}
			<Registration />
		</div>
	);
}
export default App;
