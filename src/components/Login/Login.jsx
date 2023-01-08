import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import { BUTTON_TEXT_LOGIN } from '../../constants';

export function Login() {
	return (
		<div className='flex flex-col items-center justify-center border border-cyan-400  mt-7 gap-y-7 h-5/6'>
			<h1 className='text-bold text-2xl'>Login</h1>
			<form className='flex flex-col justify-between h-48 '>
				<Input
					labelText={'Email'}
					placeholderText={'Enter email '}
					type={'text'}
					// onChange={}
				/>
				<Input
					labelText={'Password'}
					placeholderText={'Enter password '}
					type={'password'}
					// onChange={}
				/>
				<Button className='mx-auto' buttonText={BUTTON_TEXT_LOGIN} />
			</form>
			<p>
				If you not have an account you can{' '}
				<Link to='/register' className='text-cyan-400'>
					Registration
				</Link>
			</p>
		</div>
	);
}
