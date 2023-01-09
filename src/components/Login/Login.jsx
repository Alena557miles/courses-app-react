import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import { BUTTON_TEXT_LOGIN } from '../../constants';

// Login should have functionality that send request to API for getting token.
// See /login endpoint in API Swagger.
// Use react-router-dom hook useHistory to redirect from one url to another
// After success login application navigates to Courses page.
// [2 points] - Save token from API after login.
// Add functionality that check if token in localStorage.
// If token is in the localStorage app automatically navigates to /courses route.

export function Login() {
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const user = {
			email,
			password,
		};
		fetch('http://localhost:4000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((response) => {
				console.log(response);
				console.log(response.result);
				localStorage.setItem('token', response.result);
			})
			.catch((er) => console.log(er));
		navigate('/courses');
	};
	return (
		<div className='flex flex-col items-center justify-center border border-cyan-400  mt-7 gap-y-7 h-5/6'>
			<h1 className='text-bold text-2xl'>Login</h1>
			<form
				className='flex flex-col justify-between h-48'
				onSubmit={handleSubmit}
			>
				<Input
					labelText={'Email'}
					placeholderText={'Enter email '}
					type={'text'}
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<Input
					labelText={'Password'}
					placeholderText={'Enter password '}
					type={'password'}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button className='mx-auto' buttonText={BUTTON_TEXT_LOGIN} />
			</form>
			<p>
				If you not have an account you can{' '}
				<Link to='/registration' className='text-cyan-400'>
					Registration
				</Link>
			</p>
		</div>
	);
}
