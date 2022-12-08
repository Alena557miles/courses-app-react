import { ErrorMessage } from '../Error/ErrorMessage';
export function Input({
	labelText,
	placeholderText,
	onChange,
	type,
	required,
	error,
}) {
	return (
		<>
			<label className='mb-2'>{labelText}</label>
			<input
				type={type}
				className='w-full h-8 border border-orange-300 px-4'
				placeholder={placeholderText}
				onChange={onChange}
				required={required}
			/>
			<ErrorMessage error={error} />
		</>
	);
}
