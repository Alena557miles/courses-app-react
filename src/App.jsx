import React from 'react';
import { Course } from './components/Courses/Courses';
import { Header } from './components/Header/Header';

function App() {
	return (
		<div className='container mx-auto pt-5'>
			<Header />
			<Course />
		</div>
	);
}
export default App;
