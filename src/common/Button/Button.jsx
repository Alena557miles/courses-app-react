export function Button({ type, onClick, buttonText, disabled }) {
	return (
		<button
			type={type}
			className='border py-0.5 px-3 h-8 border-fuchsia-400 w-fit hover:bg-fuchsia-100 active:bg-violet-300 '
			onClick={onClick}
			disabled={disabled}
		>
			{buttonText}
		</button>
	);
}
