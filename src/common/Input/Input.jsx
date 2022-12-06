export function Input(props) {
	return (
		<div className=''>
			<label>{props.label}</label>
			<input
				type='text'
				className='w-full h-8 border mt-2 border-orange-300 px-4'
				placeholder={props.text}
			/>
		</div>
	);
}
