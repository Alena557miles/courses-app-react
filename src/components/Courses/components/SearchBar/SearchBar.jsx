import React from 'react';

import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';

import { BUTTON_TEXT_SEARCH } from '../../../../constants';

export function SearchBar({ handleInput, handleSearch }) {
	return (
		<div className='flex flex-row gap-x-2 justify-between align-center w-8/12'>
			<Input
				placeholderText={'Enter course name ... '}
				type={'text'}
				onChange={handleInput}
			/>
			<Button buttonText={BUTTON_TEXT_SEARCH} onClick={handleSearch} />
		</div>
	);
}
