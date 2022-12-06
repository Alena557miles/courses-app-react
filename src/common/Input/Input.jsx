export function Input(props) {
	return (
		<div className='w-9/12 h-full'>
			<label>{props.label}</label>
			<input
				type='text'
				className='w-full  border border-orange-300 px-4'
				placeholder={props.text}
			/>
		</div>
	);
}
