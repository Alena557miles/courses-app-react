import { CourseInfo } from '../components/CourseInfo/CourseInfo';
import { CreateCourse } from '../components/Courses/components/CreateCourse/CreateCourse';
import { Courses } from '../components/Courses/Courses';
import { Login } from '../components/Login/Login';
import { Registration } from '../components/Registration/Registration';

export const privateRoutes = [
	{ path: '/courses', component: <Courses />, exact: true },
	{ path: '/courses/add', component: <CreateCourse />, exact: true },
	{ path: '/courses/:courseId', component: <CourseInfo />, exact: true },
];

export const publicRoutes = [
	{ path: '/login', component: <Login />, exact: true },
	{ path: '/registration', component: <Registration />, exact: true },
];
