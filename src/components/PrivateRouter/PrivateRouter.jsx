import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRouter = () => {
	const { isAuth, role } = useSelector((state) => state.user);

	if (!isAuth) {
		return <Navigate to='/login' />;
	}
	if (role === 'user') {
		return <Navigate to='/courses' />;
	}

	return <Outlet />;
};
export default PrivateRouter;
