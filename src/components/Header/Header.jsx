import React from 'react';

import { useNavigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';
import { ErrorMessage } from '../../common/Error/ErrorMessage';

import { BUTTON_TEXT_HEADER } from '../../constants';
import { logoutUser } from '../../store/user/actionCreators';

import { getUser } from '../../hooks/selectors';

export function Header() {
	const { name, error } = useSelector(getUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleLogOut = (e) => {
		e.preventDefault();
		dispatch(logoutUser());
		navigate('/login');
	};
	return (
		<div className='container mx-auto pt-5 h-screen'>
			{error ? <ErrorMessage error={error} /> : ''}
			<div className='flex flex-row justify-between items-center border px-5 border-red-400'>
				<Logo />
				{name && (
					<div className='flex flex-row justify-between items-center gap-x-2'>
						<p>{name}</p>
						<Button buttonText={BUTTON_TEXT_HEADER} onClick={handleLogOut} />
					</div>
				)}
			</div>
			<Outlet />
		</div>
	);
}
