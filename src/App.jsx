import React from 'react';
import { Courses } from './components/Courses/Courses';
import { Header } from './components/Header/Header';
import { Registration } from './components/Registration/Registration';
import { Login } from './components/Login/Login';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { ErrorPage } from './components/Errorpage/Errorpage';

import { Route, Routes } from 'react-router-dom';
import { CreateCourse } from './components/Courses/components/CreateCourse/CreateCourse';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Header name={'Whyname'} />}>
				<Route index element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />
				<Route path='/logout' element={<Registration />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/courses/:courseId' element={<CourseInfo />} />
				<Route path='/courses/add' element={<CreateCourse />} />
			</Route>
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	);
}
export default App;
