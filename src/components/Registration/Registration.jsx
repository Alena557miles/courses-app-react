import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import { BUTTON_TEXT_REGISTRATION } from '../../constants';

// This component should be rendered by route /registration.
// Registration component should have functionality to send request to API for creating new user.
// See /register endpoint in API Swagger.
// After successful registration, user is redirected to the Login page by route /login.
// Use react-router-dom hook useHistory to redirect from one url to another. Use form tag.
// Request should be sent by submit event. Use onSubmit props for form.
// After success registration application navigates you to Login page.

export function Registration() {
	// const newUser = {
	// 	name,
	//   password,
	//   email, };
	//   const response = await fetch('http://localhost:3000/register', {
	// 	  method: 'POST',
	// 	  body: JSON.stringify(newUser),
	// 	  headers: {
	// 		'Content-Type': 'application/json',
	// 	  },
	//   });
	//   const result = await response.json();

	return (
		<div className='flex flex-col items-center justify-center border border-cyan-400 mt-7 gap-y-7 h-5/6'>
			<h1 className='text-bold text-2xl'>Registration</h1>
			<form className='flex flex-col justify-between h-64'>
				<Input
					labelText={'Name'}
					placeholderText={'Enter name ... '}
					type={'text'}
					// onChange={}
				/>
				<Input
					labelText={'Email'}
					placeholderText={'Enter email ...'}
					type={'text'}
					// onChange={}
				/>
				<Input
					labelText={'Password'}
					placeholderText={'Enter password ...'}
					type={'password'}
					// onChange={}
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
