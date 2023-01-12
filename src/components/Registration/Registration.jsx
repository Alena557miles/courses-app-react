import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import { BUTTON_TEXT_REGISTRATION } from '../../constants';

export function Registration() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [nameErr, setNameErr] = useState('');
	const [emailErr, setEmailErr] = useState('');
	const [passwordErr, setPasswordErr] = useState('');
	const [formValid, setFormValid] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (nameErr || emailErr || passwordErr) {
			setFormValid(false);
		} else setFormValid(true);
	}, [nameErr, emailErr, passwordErr]);

	const nameHandler = (e) => {
		setName(e.target.value);
		if (e.target.value.length < 2) {
			setNameErr('Name should be more than 1 character');
		} else setNameErr('');
	};
	const emailHandler = (e) => {
		setEmail(e.target.value);
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
		if (e.target.value.length < 6) {
			setPasswordErr(
				'password should be a string and length should be 6 characters minimum'
			);
		} else setPasswordErr('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !email || !password) {
			setError('Please fill all fields');
		}
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
				if (response.successful) {
					navigate('/login');
				} else if (response.errors) {
					setError(response.result);
				} else {
					setError(response.result);
				}
			})
			.catch((er) => console.log(er));
	};

	return (
		<div className='flex flex-col items-center justify-center border border-cyan-400 mt-7 gap-y-7 h-5/6'>
			<h1 className='text-bold text-2xl'>Registration</h1>
			<form
				className='flex flex-col justify-between w-1/4 h-64'
				onSubmit={handleSubmit}
			>
				<Input
					labelText={'Name'}
					placeholderText={'Enter name ... '}
					type={'text'}
					value={name}
					name='name'
					onChange={(e) => nameHandler(e)}
				/>
				{nameErr && (
					<p className='text-xs text-red-800 text-center italic'>{nameErr}</p>
				)}
				<Input
					labelText={'Email'}
					placeholderText={'Enter email ...'}
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
					placeholderText={'Enter password ...'}
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
				{error ? (
					<p className='text-xs text-red-800 text-center italic'>{error}</p>
				) : (
					''
				)}
				<Button
					disabled={!formValid}
					className='mx-auto'
					buttonText={BUTTON_TEXT_REGISTRATION}
				/>
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
