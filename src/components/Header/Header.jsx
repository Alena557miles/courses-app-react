import React from 'react';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import { BUTTON_TEXT_HEADER } from '../../constants';

export function Header(props) {
	const name = props.name;
	return (
		<div className='flex flex-row justify-between items-center border px-5 border-red-400'>
			<Logo />
			<div className='flex flex-row justify-between items-center gap-x-2'>
				<p>{name}</p>
				<Button buttonText={BUTTON_TEXT_HEADER} />
			</div>
		</div>
	);
}
