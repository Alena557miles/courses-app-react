import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../router';

import { Header } from '../Header/Header';
import { Login } from '../Login/Login';

import { useSelector } from 'react-redux';

export const AppRouter = () => {
	const { isAuth } = useSelector((state) => state.user);
	return (
		<Routes>
			<Route path='/' element={<Header />}>
				<Route index element={<Login />} />
				{isAuth
					? privateRoutes.map((route) => (
							<Route
								path={route.path}
								element={route.component}
								exact={route.exact}
								key={route.path}
							/>
					  ))
					: publicRoutes.map((route) => (
							<Route
								path={route.path}
								element={route.component}
								exact={route.exact}
								key={route.path}
							/>
					  ))}
			</Route>
		</Routes>
	);
};
