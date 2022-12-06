export function Button(props) {
	return (
		<button
			className='border h-fullpy-2 px-4 border-fuchsia-400'
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}
