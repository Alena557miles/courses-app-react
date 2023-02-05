export function ErrorMessage({ error }) {
	return (
		<div className='text-red-500 text-center italic'>
			<span> {error}</span>
		</div>
	);
}
