export function Input(props) {
	return (
		<div className='border border-orange-300 w-9/12'>
			<label>{props.label}</label>
			<input
				type='text'
				className='w-full h-full px-4'
				placeholder={props.text}
			/>
		</div>
	);
}
