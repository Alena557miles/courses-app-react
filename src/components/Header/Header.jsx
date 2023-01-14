import React from 'react';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import { useContext } from 'react';

import { BUTTON_TEXT_HEADER } from '../../constants';
import { Outlet } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context';

export function Header({ userName }) {
	const { setIsAuth, setUserName } = useContext(AuthContext);
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
				localStorage.removeItem('name');
				setIsAuth(false);
				setUserName('');
				navigate(`/login`);
			})
			.catch((er) => console.log(er));
	};
	return (
		<div className='container mx-auto pt-5 h-screen'>
			<div className='flex flex-row justify-between items-center border px-5 border-red-400'>
				<Logo />
				{userName && (
					<div className='flex flex-row justify-between items-center gap-x-2'>
						<p>{userName}</p>
						<Button buttonText={BUTTON_TEXT_HEADER} onClick={handleLogOut} />
					</div>
				)}
			</div>
			<Outlet />
		</div>
	);
}
