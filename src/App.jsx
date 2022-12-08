import React from 'react';
import { Course } from './components/Courses/Courses';
import { Header } from './components/Header/Header';
import { DateGenerator } from '../src/helpers/dateGenerator';

function App() {
	return (
		<div className='container mx-auto pt-5'>
			<Header name={'Whyname'} />
			<Course />
			{/* <DateGenerator>
				<p>text</p>
			</DateGenerator> */}
		</div>
	);
}
export default App;
