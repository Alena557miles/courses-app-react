import React, { useEffect } from 'react';

import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { PipeDuration } from '../../helpers/pipeDuration';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { ErrorMessage } from '../../common/Error/ErrorMessage';
import {
	addAuthorToStore,
	fetchAuthors,
} from '../../store/authors/actionCreators';

import {
	mockedAuthorsList,
	mockedCoursesList,
	BUTTON_TEXT_CREATE_COURSE,
	BUTTON_TEXT_CREATE_AUTHOR,
	BUTTON_TEXT_ADD_AUTHOR,
	BUTTON_TEXT_DELETE_AUTHOR,
} from '../../constants';

import { addCourse } from '../../store/courses/actionCreators';
import { useSelector } from 'react-redux';

export function CourseForm() {
	const [errorTitle, setErrorTitle] = useState('');
	const [errorDesc, setErrorDesc] = useState('');
	const [errorDuration, setErrorDur] = useState('');
	const [errorAuthors, setErrorAuthors] = useState('');
	const authorsList = mockedAuthorsList;
	const [mockedauthors, setMockedAuthor] = useState(authorsList);
	const [noAuthors, setNull] = useState(true);
	const [description, setDescription] = useState('');
	const [authors, setAuthor] = useState([]);
	const [title, setTitle] = useState('');
	const [duration, setDuration] = useState('');
	const [newAuthor, setNewAuthor] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	// const { authors, error, loading } = useSelector((state) => state.authors);

	useEffect(() => {
		dispatch(fetchAuthors());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			title.length < 2 ||
			description.length < 2 ||
			+duration < 0 ||
			authors.length === 0
		) {
			alert('Pleese fill in all fields correctly');
			if (title.length < 2) {
				setErrorTitle('Title length should be more than 1 character');
				return;
			} else setErrorTitle('');
			if (description.length < 2) {
				setErrorDesc('Description length should be more than 1 character');
				return;
			} else setErrorDesc('');
			if (+duration < 0) {
				setErrorDur('Duration should be more than 0 minutes');
				return;
			} else setErrorDur('');
			if (authors.length === 0) {
				setErrorAuthors('Shoul be some authors on this course');
				return;
			} else setErrorAuthors('');
		}
		const athoursArr = authors.map((author) => {
			return author.id;
		});
		const unique_id = uuid();
		const creationDate = Date.now();

		const course = {
			title,
			description,
			duration,
			authors: athoursArr,
			id: unique_id,
			creationDate,
		};
		mockedCoursesList.push(course); // delete
		dispatch(addCourse(course));
		navigate('/courses');
	};
	const createAuthor = () => {
		const unique_id = uuid();
		const author = {
			name: newAuthor,
			id: unique_id,
		};
		setMockedAuthor([...mockedauthors, author]);
		mockedauthors.push(author);
		dispatch(addAuthorToStore(author));
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
		setAuthor(authors);
		const res1 = mockedauthors.filter((author) => author.id !== id);
		setMockedAuthor(res1);
	};
	const handleDelete = (author) => {
		const update = authors.filter((item) => item.id !== author.id);
		mockedauthors.push(author);
		setAuthor(update);
		setNull(true);
	};

	return (
		<div className='border border-blue-400 p-7 mt-7'>
			<form
				onSubmit={(e) =>
					handleSubmit(e, { authors, description, duration, title })
				}
			>
				<div className='flex flex-row justify-between h-full items-end mb-3'>
					<Input
						labelText={'Title'}
						placeholderText={'Enter title...'}
						onChange={onChangeTitle}
						type={'text'}
						required={true}
					/>
					{errorTitle && <ErrorMessage error={errorTitle} />}
					<Button buttonText={BUTTON_TEXT_CREATE_COURSE} type={'submit'} />
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
				<ErrorMessage error={errorDesc} />

				<div className='flex flex-row justify-evenly border border-gray-900 p-7 w-full h-full'>
					<div className='flex flex-col w-2/5'>
						<h2 className='text-xl text-center font-bold mb-4'>Add author</h2>
						<div className='my-4 flex flex-col justify-between h-28'>
							<Input
								labelText={'Author name'}
								placeholderText={'Enter author name'}
								type={'text'}
								onChange={(e) => setNewAuthor(e.target.value)}
							/>
							<Button
								buttonText={BUTTON_TEXT_CREATE_AUTHOR}
								onClick={createAuthor}
								type={'button'}
							/>
						</div>
						<div>
							<h2 className='text-xl text-center font-bold'>Duration</h2>
							<Input
								labelText={'Duration'}
								placeholderText={'Enter duration in minutes...'}
								onChange={onChangeDuration}
								type={'number'}
								pattern={'ˆ[0-9]{1,}'}
								required={true}
							/>
							<ErrorMessage error={errorDuration} />
							<p>
								Duration:{' '}
								<span className='text-3xl font-bold'>
									{' '}
									{duration ? <PipeDuration>{duration}</PipeDuration> : '00:00'}
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
									<div className='w-64'>
										<p>{author.name}</p>
									</div>
									<Button
										buttonText={BUTTON_TEXT_ADD_AUTHOR}
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
							<>
								<p className='font-bold text-center'>Author list is empty</p>
								<ErrorMessage error={errorAuthors} />
							</>
						) : (
							<div>
								<ul>
									{authors.map((author) => (
										<li
											className='flex flex-row justify-between align-center mb-2'
											key={author.id.toString()}
										>
											<div className='w-64'>
												<p>{author.name}</p>
											</div>
											<Button
												buttonText={BUTTON_TEXT_DELETE_AUTHOR}
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
