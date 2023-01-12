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
	const [error, setError] = useState('');
	const [emailErr, setEmailErr] = useState('');
	const [passwordErr, setPasswordErr] = useState('');

	const navigate = useNavigate();

	const emailHandler = (e) => {
		setEmail(e.target.value);
		setError('');
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!re.test(String(e.target.value).toLocaleLowerCase())) {
			setEmailErr(
				'email should be a string and it should be an email or email already exists'
			);
		} else setEmailErr('');
	};
	const passwordHandler = (e) => {
		setPassword(e.target.value);
		setError('');
		if (e.target.value.length < 6) {
			setPasswordErr(
				'password should be a string and length should be 6 characters minimum'
			);
		} else setPasswordErr('');
	};

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
				if (response.successful) {
					localStorage.setItem('token', response.result);
					navigate('/courses');
				} else if (response.errors) {
					setError(response.errors);
				} else {
					setError(response.result);
				}
			})
			.catch((er) => console.log(er));
	};
	return (
		<div className='flex flex-col items-center justify-center border border-cyan-400  mt-7 gap-y-7 h-5/6'>
			<h1 className='text-bold text-2xl'>Login</h1>
			<form
				className='flex flex-col justify-between w-1/4 h-48'
				onSubmit={handleSubmit}
			>
				<Input
					labelText={'Email'}
					placeholderText={'Enter email '}
					type={'text'}
					value={email}
					name='email'
					onChange={(e) => emailHandler(e)}
				/>
				{emailErr && (
					<p className='text-xs text-red-800 text-center italic'>{emailErr}</p>
				)}
				<Input
					labelText={'Password'}
					placeholderText={'Enter password '}
					type={'password'}
					value={password}
					name='password'
					onChange={(e) => passwordHandler(e)}
				/>
				{passwordErr && (
					<p className='text-xs text-red-800 text-center italic'>
						{passwordErr}
					</p>
				)}
				{error && (
					<p className='text-xs text-red-800 text-center italic'>{error}</p>
				)}
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
