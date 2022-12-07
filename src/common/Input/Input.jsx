export function Input({ labelText, placeholdetText, onChange, type }) {
	return (
		<div className=''>
			<label className='mb-2'>{labelText}</label>
			<input
				type={type}
				className='w-full h-8 border border-orange-300 px-4'
				placeholder={placeholdetText}
				required
				onChange={onChange}
			/>
		</div>
	);
}
