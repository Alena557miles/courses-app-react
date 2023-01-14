import React from 'react';
import { Courses } from './components/Courses/Courses';
import { Header } from './components/Header/Header';
import { Registration } from './components/Registration/Registration';
import { Login } from './components/Login/Login';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { ErrorPage } from './components/Errorpage/Errorpage';

import { Route, Routes } from 'react-router-dom';
import { CreateCourse } from './components/Courses/components/CreateCourse/CreateCourse';
import { useState } from 'react';

function App() {
	const [userName, setUserName] = useState('');
	const getName = (userName) => {
		console.log('getname ');
		setUserName(userName);
	};
	return (
		<Routes>
			<Route path='/' element={<Header userName={userName} />}>
				<Route index element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login getName={getName} />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/courses/:courseId' element={<CourseInfo />} />
				<Route path='/courses/add' element={<CreateCourse />} />
				<Route path='*' element={<ErrorPage />} />
			</Route>
		</Routes>
	);
}
export default App;
