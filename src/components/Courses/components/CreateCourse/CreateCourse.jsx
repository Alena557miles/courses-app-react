import { useState } from 'react';
import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';
import { mockedAuthorsList } from '../../../../data/authorList';
import { v4 as uuid } from 'uuid';

export function CreateCourse({ handleSubmit }) {
	const authorsList = mockedAuthorsList;
	const [mockedauthors, setMockedAuthor] = useState(authorsList);
	const [noAuthors, setNull] = useState(true);
	const [description, setDescription] = useState('');
	const [authors, setAuthor] = useState([]);
	const [title, setTitle] = useState('');
	const [duration, setDuration] = useState('');
	const [newAuthor, setNewAuthor] = useState('');

	const createAuthor = () => {
		const unique_id = uuid();
		const author = {
			id: unique_id,
			name: newAuthor,
		};
		mockedauthors.push(author);
		console.log(mockedauthors);
		setMockedAuthor(mockedauthors);
	};

	const onChangeTitle = (e) => {
		setTitle(e.target.value);
	};
	const onChangeDuration = (e) => {
		setDuration(e.target.value);
	};
	const addAuthor = (id) => {
		setNull(false);
		const res = mockedauthors.find((author) => author.id === id);
		authors.push(res);
		// setAuthor((prev) => prev.push(res));
		setAuthor(authors);
		const res1 = mockedauthors.filter((author) => author.id !== id);
		setMockedAuthor(res1);
	};
	const handleDelete = (author) => {
		const update = authors.filter((item) => item.id !== author.id);
		mockedauthors.push(author);
		setAuthor(update);
	};

	return (
		<div>
			<form
				onSubmit={(e) =>
					handleSubmit(e, { authors, description, duration, title })
				}
			>
				<div className='flex flex-row justify-between h-full items-end mb-3'>
					<Input
						labelText={'Title'}
						placeholdetText={'Enter title...'}
						onChange={onChangeTitle}
						type={'text'}
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
						<div className='my-4 flex flex-col justify-between h-28'>
							<Input
								labelText={'Author name'}
								placeholdetText={'Enter author name'}
								type={'text'}
								onChange={(e) => setNewAuthor(e.target.value)}
							/>
							<Button
								value={'Create author'}
								onClick={createAuthor}
								type={'button'}
							/>
						</div>
						<div>
							<h2 className='text-xl text-center font-bold'>Duration</h2>
							<Input
								labelText={'Duration'}
								placeholdetText={'Enter duration in minutes...'}
								onChange={onChangeDuration}
								type={'number'}
							/>
							<p>
								Duration:{' '}
								<span className='text-3xl font-bold'>
									{' '}
									{duration ? duration : '00:00'}
								</span>{' '}
								hours
							</p>
						</div>
					</div>
					<div className=' w-2/5'>
						<h2 className='text-xl text-center font-bold mb-7'>Authors</h2>
						<ul>
							{mockedauthors.map((author) => (
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
												onClick={() => handleDelete(author)}
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
