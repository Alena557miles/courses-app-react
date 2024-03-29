import React, { useEffect, useState } from 'react';

import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { PipeDuration } from '../../helpers/pipeDuration';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { ErrorMessage } from '../../common/Error/ErrorMessage';

import { getCourses, getAuthors } from '../../hooks/selectors';
import { addCourse, updateCourse } from '../../store/courses/thunk';

import { addAuthorFetch } from '../../store/authors/thunk';
import {
	deleteFromStore,
	addToStore,
} from '../../store/authors/actionCreators';

import {
	BUTTON_TEXT_CREATE_COURSE,
	BUTTON_TEXT_CREATE_AUTHOR,
	BUTTON_TEXT_ADD_AUTHOR,
	BUTTON_TEXT_DELETE_AUTHOR,
	BUTTON_TEXT_UPDATE_COURSE,
} from '../../constants';
import { Loading } from '../../common/Loading/Loading';

export function CourseForm() {
	const [errorTitle, setErrorTitle] = useState('');
	const [errorDesc, setErrorDesc] = useState('');
	const [errorDuration, setErrorDur] = useState('');
	const [errorAuthors, setErrorAuthors] = useState('');
	const [description, setDescription] = useState('');
	const [authorsList, setAuthorsList] = useState([]);
	const [title, setTitle] = useState('');
	const [duration, setDuration] = useState('');
	const [newAuthor, setNewAuthor] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { authors, error, loading } = useSelector(getAuthors);
	const { courses } = useSelector(getCourses);

	const params = useParams();
	const courseId = params.courseId;

	useEffect(() => {
		if (courseId) {
			const courseToUpdate = courses.find((course) => course.id === courseId);
			setTitle(courseToUpdate.title);
			setDescription(courseToUpdate.description);
			setDuration(courseToUpdate.duration);

			const funcAuthors = () => {
				let authorsFinal = [];
				for (let i = 0; i < courseToUpdate.authors.length; i++) {
					authors.map((author) => {
						if (courseToUpdate.authors[i] === author.id) {
							authorsFinal.push(author);
							dispatch(deleteFromStore(author.id));
						}
						return author;
					});
				}
				return authorsFinal;
			};
			const fullInfoArray = funcAuthors();
			setAuthorsList(fullInfoArray);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			title.length < 2 ||
			description.length < 2 ||
			+duration < 0 ||
			authorsList.length === 0
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
			if (authorsList.length === 0) {
				setErrorAuthors('Shoul be some authors on this course');
				return;
			} else setErrorAuthors('');
		}
		const athoursArr = authorsList.map((author) => {
			return author.id;
		});
		const course = {
			title,
			description,
			duration,
			authors: athoursArr,
			id: courseId,
		};
		if (courseId) {
			dispatch(updateCourse(course));
		} else {
			dispatch(addCourse(course));
		}
		navigate('/courses');
	};
	const createAuthor = () => {
		const unique_id = uuid();
		const author = {
			name: newAuthor,
			id: unique_id,
		};
		dispatch(addAuthorFetch(author));
	};
	const addAuthor = (id) => {
		const res = authors.find((author) => author.id === id);
		authorsList.push(res);
		setAuthorsList(authorsList);
		dispatch(deleteFromStore(id));
	};
	const handleDelete = (author) => {
		const update = authorsList.filter((item) => item.id !== author.id);
		dispatch(addToStore(author));
		setAuthorsList(update);
	};

	return (
		<div className='border border-blue-400 p-7' data-testid='course-form'>
			<form onSubmit={handleSubmit}>
				<div className='flex flex-row justify-between h-full items-end mb-3'>
					<div className='w-5/6'>
						<Input
							labelText={'Title'}
							placeholderText={'Enter title...'}
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							type={'text'}
							required={true}
						/>
					</div>

					{errorTitle && <ErrorMessage error={errorTitle} />}
					{courseId ? (
						<Button buttonText={BUTTON_TEXT_UPDATE_COURSE} type={'submit'} />
					) : (
						<Button buttonText={BUTTON_TEXT_CREATE_COURSE} type={'submit'} />
					)}
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
								value={newAuthor}
								onChange={(e) => setNewAuthor(e.target.value)}
							/>
							<div className='grid justify-items-center'>
								<Button
									buttonText={BUTTON_TEXT_CREATE_AUTHOR}
									onClick={createAuthor}
									type={'button'}
								/>
							</div>
						</div>
						<div>
							<h2 className='text-xl text-center font-bold'>Duration</h2>
							<Input
								labelText={'Duration'}
								placeholderText={'Enter duration in minutes...'}
								onChange={(e) => setDuration(Number(e.target.value))}
								type={'number'}
								value={duration}
								pattern={'ˆ[0-9]{1,}'}
								required={true}
							/>
							<ErrorMessage error={errorDuration} />
							<p>
								Duration:{' '}
								<span className='text-3xl font-bold'>
									{duration ? <PipeDuration>{duration}</PipeDuration> : '00:00'}
								</span>
								hours
							</p>
						</div>
					</div>
					<div className=' w-2/5'>
						<h2 className='text-xl text-center font-bold mb-7'>Authors</h2>
						{loading ? <Loading /> : ''}
						{error ? (
							<ErrorMessage error={error} />
						) : (
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
											buttonText={BUTTON_TEXT_ADD_AUTHOR}
											onClick={() => addAuthor(author.id)}
											type={'button'}
											data-testid='add-author'
										/>
									</li>
								))}
							</ul>
						)}

						<h2 className='text-xl text-center font-bold my-3'>
							Course authors
						</h2>

						{!authorsList.length ? (
							<>
								<p className='font-bold text-center'>Author list is empty</p>
								<ErrorMessage error={errorAuthors} />
							</>
						) : (
							<div>
								{loading ? <Loading /> : ''}
								<ul>
									{authorsList.map((author) => (
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
