export function Button({ type, onClick, value }) {
	return (
		<button
			type={type}
			className='border py-0.5 px-4 h-8 border-fuchsia-400 w-fit'
			onClick={onClick}
		>
			{value}
		</button>
	);
}
