export function Button(props) {
	return (
		<button
			className='border py-0.5 px-4 h-8 border-fuchsia-400 w-fit'
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}
