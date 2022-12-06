export function Button(props) {
	return (
		<button
			className='border py-2 px-4 border-fuchsia-400'
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}
