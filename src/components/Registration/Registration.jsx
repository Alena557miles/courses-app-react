import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import { BUTTON_TEXT_REGISTRATION } from '../../constants';

export function Registration() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			name,
			email,
			password,
		};
		fetch('http://localhost:4000/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newUser),
		})
			.then((res) => res.json())
			.then((response) => {
				navigate('/login');
				console.log(response);
			})
			.catch((er) => console.log(er));
	};
	return (
		<div className='flex flex-col items-center justify-center border border-cyan-400 mt-7 gap-y-7 h-5/6'>
			<h1 className='text-bold text-2xl'>Registration</h1>
			<form
				className='flex flex-col justify-between h-64'
				onSubmit={handleSubmit}
			>
				<Input
					labelText={'Name'}
					placeholderText={'Enter name ... '}
					type={'text'}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					labelText={'Email'}
					placeholderText={'Enter email ...'}
					type={'text'}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					labelText={'Password'}
					placeholderText={'Enter password ...'}
					type={'password'}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button className='mx-auto' buttonText={BUTTON_TEXT_REGISTRATION} />
			</form>
			<p>
				If you have an account you can{' '}
				<Link to='/login' className='text-cyan-400'>
					Login
				</Link>
			</p>
		</div>
	);
}
