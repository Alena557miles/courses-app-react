import { useState } from 'react';

export function Input(props) {
	const [title, setTitle] = useState('');
	return (
		<div className=''>
			<label className='mb-2'>{props.label}</label>
			<input
				type='text'
				className='w-full h-8 border border-orange-300 px-4'
				placeholder={props.text}
				required
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<p>{title}</p>
		</div>
	);
}
