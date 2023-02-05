import { Route, Routes, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { RootLayout } from '../../layout/RootLayout';
import { Login } from '../Login/Login';
import { Registration } from '../Registration/Registration';
import { PrivateRouter } from '../PrivateRouter/PrivateRouter';
import { Courses } from '../Courses/Courses';
import { CourseForm } from '../CourseForm/CourseForm';
import { CourseInfo } from '../CourseInfo/CourseInfo';
import { ErrorPage } from '../Errorpage/Errorpage';

import { getUser } from '../../store/user/thunk';

export const AppRouter = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(getUser());
			navigate('/courses');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Routes>
			<Route path='/' element={<RootLayout />}>
				<Route index element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/courses/add' element={<PrivateRouter />}>
					<Route path='/courses/add' element={<CourseForm />} />
				</Route>
				<Route path='/courses/:courseId' element={<CourseInfo />} />
				<Route path='/courses/update/:courseId' element={<PrivateRouter />}>
					<Route path='/courses/update/:courseId' element={<CourseForm />} />
				</Route>
				<Route path='*' element={<ErrorPage />} />
			</Route>
		</Routes>
	);
};
