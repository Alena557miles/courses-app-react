import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { getUser } from '../../hooks/selectors';

export const PrivateRouter = () => {
	const { isAuth, role } = useSelector(getUser);

	if (!isAuth) {
		return <Navigate to='/login' />;
	}
	if (role === 'user') {
		return <Navigate to='/courses' />;
	}

	return <Outlet />;
};
export default PrivateRouter;
