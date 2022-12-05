import React from 'react';
import logo from './Logo.jpg';

export function Logo() {
	return (
		<div className='box-border'>
			<a href='#'>
				<img src={logo} alt='Logo' className='max-w-xs h-20' />
			</a>
		</div>
	);
}
