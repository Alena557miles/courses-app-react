export function Input(props) {
	return (
		<div className=''>
			<label className='mb-2'>{props.labelText}</label>
			<input
				type='text'
				className='w-full h-8 border border-orange-300 px-4'
				placeholder={props.placeholdetText}
				required
				onChange={props.onChange}
			/>
		</div>
	);
}
