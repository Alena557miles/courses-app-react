import { CourseInfo } from '../components/CourseInfo/CourseInfo';
import { CourseForm } from '../components/CourseForm/CourseForm';
import { Courses } from '../components/Courses/Courses';
import { Login } from '../components/Login/Login';
import { Registration } from '../components/Registration/Registration';
import { ErrorPage } from '../components/Errorpage/Errorpage';

export const publicRoutes = [
	{ path: '/login', component: <Login />, exact: true },
	{ path: '/registration', component: <Registration />, exact: true },
	{ path: '*', component: <ErrorPage />, exact: true },
];

export const adminRoutes = [
	{ path: '/courses', component: <Courses />, exact: true },
	{ path: '/courses/add', component: <CourseForm />, exact: true },
	{ path: '/courses/:courseId', component: <CourseInfo />, exact: true },
	{ path: '/courses/update/:courseId', component: <CourseForm />, exact: true },
	{ path: '*', component: <ErrorPage />, exact: true },
];
export const privateRoutes = [
	{ path: '/courses', component: <Courses />, exact: true },
	{ path: '/courses/:courseId', component: <CourseInfo />, exact: true },
	{ path: '*', component: <ErrorPage />, exact: true },
];
