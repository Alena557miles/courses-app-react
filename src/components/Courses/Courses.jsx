import React from 'react';

import { CourseCard } from './components/CourseCard/CourseCard';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';

import { BUTTON_TEXT_ADD_COURSE, mockedCoursesList } from '../../constants';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { v4 as uuid } from 'uuid';
import { useEffect } from 'react';

export function Courses() {
	const [create, setCreate] = useState(false);
	const [courses, setCourse] = useState(mockedCoursesList);
	const [searchResult, setSearchResult] = useState(courses);
	const [errorTitle, setErrorTitle] = useState('');
	const [errorDesc, setErrorDesc] = useState('');
	const [errorDuration, setErrorDur] = useState('');
	const [errorAuthors, setErrorAuthors] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		console.log('effect');
	});
	const handleSubmit = (e, { authors, description, duration, title }) => {
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
		mockedCoursesList.push(course);
		// courses.push(course);
		// setCourse(courses);
		setCourse(mockedCoursesList);
		setCreate(false);
		console.log('nav');
		navigate('/courses');
	};

	const handleInput = (e) => {
		const text = e.target.value.toLowerCase();
		if (!e.target.value) return setSearchResult(courses);

		const resultArray = courses.filter(
			(course) =>
				course.title.toLowerCase().includes(text) ||
				course.description.toLowerCase().includes(text)
		);

		setSearchResult(resultArray);
	};

	const handleCreate = () => {
		setCreate(true);
		navigate(`/courses/add`);
	};

	return (
		<div className='flex flex-col border border-blue-400 p-7 mt-7'>
			<div className='flex flex-row justify-between  mb-7'>
				<SearchBar handleInput={handleInput} />
				<Button buttonText={BUTTON_TEXT_ADD_COURSE} onClick={handleCreate} />
			</div>
			{create ? '' : <CourseCard searchResult={searchResult} />}
			{create && (
				<CreateCourse
					handleSubmit={handleSubmit}
					errorTitle={errorTitle}
					errorDesc={errorDesc}
					errorDuration={errorDuration}
					errorAuthors={errorAuthors}
				/>
			)}
		</div>
	);
}
