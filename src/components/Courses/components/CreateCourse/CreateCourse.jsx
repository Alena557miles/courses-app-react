import { useState } from 'react';
import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';

export function CreateCourse() {
	const [noAuthors, setNull] = useState(true);
	return (
		<div className=''>
			<div className='flex flex-row justify-between h-full items-end mb-3'>
				<Input label={'Title'} text={'Enter title'} />
				<Button value={'Create course'} onClick={() => console.log('ADd')} />
			</div>

			<div className='mb-3'>
				<label htmlFor='description'>Description</label>
				<textarea
					name='description'
					id='description'
					cols='20'
					rows='4'
					className='border border-yellow-300 w-full px-3'
				></textarea>
			</div>

			<div className='flex flex-row gap-20 border border-gray-900 p-7 w-full h-full'>
				<div className='flex flex-col w-2/5'>
					<h2 className='text-xl text-center font-bold mb-4'>Add author</h2>
					<form action='#' className='my-4 flex flex-col justify-between h-28'>
						<Input label={'Author name'} text={'Enter author name'} />
						<Button
							value={'Create author'}
							onClick={() => console.log('Create author')}
						/>
					</form>
					<div>
						<h2 className='text-xl text-center font-bold'>Duration</h2>
						<Input label={'Duration'} text={'Enter duration in minutes...'} />
						<p>
							Duration: <span className='text-3xl font-bold'>00:00</span> hours
						</p>
					</div>
				</div>
				<div className=' w-2/5'>
					<h2 className='text-xl text-center font-bold mb-7'>Authors</h2>
					<ul>
						<li className='flex flex-row justify-between align-center mb-2'>
							<p className='block'>Author Name</p>
							<Button
								value={'Add author'}
								onClick={() => console.log('Author')}
							/>
						</li>
						<li className='flex flex-row justify-between align-center mb-2'>
							<p className='block'>Author Name</p>
							<Button
								value={'Add author'}
								onClick={() => console.log('Author')}
							/>
						</li>
						<li className='flex flex-row justify-between align-center mb-2'>
							<p className='block'>Author Name</p>
							<Button
								value={'Add author'}
								onClick={() => console.log('Author')}
							/>
						</li>
						<li className='flex flex-row justify-between align-center mb-2'>
							<p className='block'>Author Name</p>
							<Button
								value={'Add author'}
								onClick={() => console.log('Author')}
							/>
						</li>
					</ul>
					<h2 className='text-xl text-center font-bold my-3'>Course authors</h2>
					{noAuthors ? (
						<p className='font-bold text-center'>Author list is empty</p>
					) : (
						<div>
							<ul>
								<li className='flex flex-row justify-between align-center mb-2'>
									<p className='block'>Author Name</p>
									<Button
										value={'Delete author'}
										onClick={() => console.log('Delete author')}
									/>
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
