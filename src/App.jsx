import React from 'react';
import { Course } from './components/Courses/Courses';
import { Header } from './components/Header/Header';
import { Registration } from './components/Registration/Registration';
import { Login } from './components/Login/Login';
import { CourseInfo } from './components/CourseInfo/CourseInfo';

function App() {
	return (
		<div className='container mx-auto pt-5 h-screen'>
			<Header name={'Whyname'} />
			{/* <Course /> */}
			{/* <Registration /> */}
			{/* <Login /> */}
			<CourseInfo />
		</div>
	);
}
export default App;
