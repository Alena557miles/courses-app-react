export function Input(props) {
	return (
		<div className=' w-9/12'>
			<label>{props.label}</label>
			<input
				type='text'
				className='w-full h-full border border-orange-300 px-4'
				placeholder={props.text}
			/>
		</div>
	);
}
