export function Input(props) {
	return (
		<div className=''>
			<label className='mb-2'>{props.label}</label>
			<input
				type='text'
				className='w-full h-8 border border-orange-300 px-4'
				placeholder={props.text}
			/>
		</div>
	);
}
