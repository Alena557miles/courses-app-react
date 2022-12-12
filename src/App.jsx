import React from 'react';
import { Courses } from './components/Courses/Courses';
import { Header } from './components/Header/Header';
import { Registration } from './components/Registration/Registration';
import { Login } from './components/Login/Login';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className='container mx-auto pt-5 h-screen'>
			<Header name={'Whyname'} />
			<Routes>
				<Route path='/' element={<Header name={'Whyname'} />} />
				<Route
					path='/register'
					element={((<Header name={'Whyname'} />), (<Registration />))}
				/>
				<Route path='/login' element={<Login />} />
				<Route path='/logout' element={<Registration />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/course' element={<CourseInfo />} />
			</Routes>
		</div>
	);
}
export default App;
