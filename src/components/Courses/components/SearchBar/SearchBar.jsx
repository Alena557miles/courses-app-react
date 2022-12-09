import React from 'react';

import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';

export function SearchBar({ handleInput }) {
	return (
		<div className='flex flex-row gap-x-2 justify-between align-center w-8/12'>
			<Input
				placeholderText={'Enter course name ... '}
				type={'text'}
				onChange={handleInput}
			/>
			<Button buttonText={'Search'} />
		</div>
	);
}
