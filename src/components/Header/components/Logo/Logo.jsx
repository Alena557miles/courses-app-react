import React from 'react';
import logo from './Logo.jpg';

export function Logo() {
	return (
		<div className='box-border'>
			<a href='https://uk.reactjs.org/tutorial/tutorial.html'>
				<img src={logo} alt='Logo' className='max-w-xs h-20' />
			</a>
		</div>
	);
}
