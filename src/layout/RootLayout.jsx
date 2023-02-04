import React from 'react';
import { Outlet } from 'react-router-dom';
export const RootLayout = () => {
	return (
		<div className='container mx-auto h-screen'>
			<Outlet />
		</div>
	);
};
