import { useState } from 'react';
import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';
import { mockedAuthorsList } from '../../../../data/authorList';

export function CreateCourse() {
	const [noAuthors, setNull] = useState(true);
	const [description, setDescription] = useState('');
	const [authors, setAuthor] = useState([]);
	const [title, setTitle] = useState('');

	const onChange = (e) => {
		setTitle(e.target.value);
	};
	const addAuthor = (id) => {
		setNull(false);
		const res = mockedAuthorsList.find((author) => author.id === id);
		authors.push(res);
		// setAuthor((prev) => prev.push(res));
		setAuthor(authors);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const course = { title, description, authors };
		console.log(course);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className='flex flex-row justify-between h-full items-end mb-3'>
					<Input
						labelText={'Title'}
						placeholdetText={'Enter title...'}
						onChange={onChange}
					/>
					<Button value={'Create course'} type={'submit'} />
				</div>

				<label>Description</label>
				<textarea
					name='description'
					id='description'
					cols='20'
					rows='4'
					className='border border-amber-200 w-full px-3 py-2 mb-3'
					placeholder='Enter description'
					required
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				></textarea>

				<div className='flex flex-row gap-20 border border-gray-900 p-7 w-full h-full'>
					<div className='flex flex-col w-2/5'>
						<h2 className='text-xl text-center font-bold mb-4'>Add author</h2>
						<form
							action='#'
							className='my-4 flex flex-col justify-between h-28'
						>
							<Input
								labelText={'Author name'}
								placeholdetText={'Enter author name'}
							/>
							<Button
								value={'Create author'}
								onClick={() => console.log('Create author')}
								type={'button'}
							/>
						</form>
						<div>
							<h2 className='text-xl text-center font-bold'>Duration</h2>
							<Input
								labelText={'Duration'}
								placeholdetText={'Enter duration in minutes...'}
							/>
							<p>
								Duration: <span className='text-3xl font-bold'>00:00</span>{' '}
								hours
							</p>
						</div>
					</div>
					<div className=' w-2/5'>
						<h2 className='text-xl text-center font-bold mb-7'>Authors</h2>
						<ul>
							{mockedAuthorsList.map((author) => (
								<li
									className='flex flex-row justify-between align-center mb-2'
									key={author.id.toString()}
								>
									<p className='block'>{author.name}</p>
									<Button
										value={'Add author'}
										onClick={() => addAuthor(author.id)}
										type={'button'}
									/>
								</li>
							))}
						</ul>
						<h2 className='text-xl text-center font-bold my-3'>
							Course authors
						</h2>

						{noAuthors ? (
							<p className='font-bold text-center'>Author list is empty</p>
						) : (
							<div>
								<ul>
									{authors.map((author) => (
										<li
											className='flex flex-row justify-between align-center mb-2'
											key={author.id.toString()}
										>
											<p className='block'>{author.name}</p>
											<Button
												value={'Delete author'}
												onClick={() => console.log('Delete author')}
												type={'button'}
											/>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>
			</form>
		</div>
	);
}
