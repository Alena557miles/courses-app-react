import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import { BUTTON_TEXT_REGISTRATION } from '../../constants';
import { registerUser } from '../../store/user/actionCreators';

export function Registration() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorForm, setErrorForm] = useState('');
	const [nameErr, setNameErr] = useState('');
	const [emailErr, setEmailErr] = useState('');
	const [passwordErr, setPasswordErr] = useState('');

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const nameHandler = (e) => {
		setName(e.target.value);
		setErrorForm('');
		if (e.target.value.length < 2) {
			setNameErr('Name should be more than 1 character');
		} else setNameErr('');
	};

	const emailHandler = (e) => {
		setEmail(e.target.value);
		setErrorForm('');
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
		setErrorForm('');
		if (e.target.value.length < 6) {
			setPasswordErr(
				'password should be a string and length should be 6 characters minimum'
			);
		} else setPasswordErr('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !email || !password) {
			setErrorForm('Please fill all fields');
			return;
		}
		const newUser = {
			name,
			email,
			password,
		};
		dispatch(registerUser(newUser));
		navigate('/login');
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
				{errorForm && (
					<p className='text-xs text-red-800 text-center italic'>{errorForm}</p>
				)}
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
