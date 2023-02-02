import { Route, Routes } from 'react-router-dom';
import { privateRoutes, adminRoutes, publicRoutes } from '../../router';

import { Header } from '../Header/Header';
import { Login } from '../Login/Login';
import { getUser } from '../../store/user/actionCreators';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const AppRouter = () => {
	const { isAuth, role } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(getUser());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Routes>
			<Route path='/' element={<Header />}>
				<Route index element={<Login />} />
				{isAuth
					? // ?
					  //privateRoutes.map((route) => (
					  // 		<Route
					  // 			path={route.path}
					  // 			element={route.component}
					  // 			exact={route.exact}
					  // 			key={route.path}
					  // 		/>
					  //   ))
					  // :
					  role === 'user'
						? privateRoutes.map((route) => (
								<Route
									path={route.path}
									element={route.component}
									exact={route.exact}
									key={route.path}
								/>
						  ))
						: adminRoutes.map((route) => (
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
