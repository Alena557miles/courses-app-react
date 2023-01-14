import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../router';

import { Header } from '../Header/Header';
import { Login } from '../Login/Login';
import { ErrorPage } from '../Errorpage/Errorpage';

import { useContext } from 'react';
import { AuthContext } from '../../context';

export const AppRouter = () => {
	const { isAuth, userName } = useContext(AuthContext);

	return (
		<Routes>
			<Route path='/' element={<Header userName={userName} />}>
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
				<Route path='*' element={<ErrorPage />} />
			</Route>
		</Routes>
	);
};
