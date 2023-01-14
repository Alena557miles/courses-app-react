import React from 'react';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import { BUTTON_TEXT_HEADER } from '../../constants';
import { Outlet } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

// Logout button and user's name should not be on Login and Registration pages.

export function Header(props) {
	const name = props.userName;
	const navigate = useNavigate();
	const handleLogOut = (e) => {
		e.preventDefault();

		fetch('http://localhost:4000/logout', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((response) => {
				console.log(response);
				localStorage.removeItem('token');
				navigate(`/login`);
			})
			.catch((er) => console.log(er));
	};
	return (
		<div className='container mx-auto pt-5 h-screen'>
			<div className='flex flex-row justify-between items-center border px-5 border-red-400'>
				<Logo />
				<div className='flex flex-row justify-between items-center gap-x-2'>
					<p>{name}</p>
					<Button buttonText={BUTTON_TEXT_HEADER} onClick={handleLogOut} />
				</div>
			</div>
			<Outlet />
		</div>
	);
}
