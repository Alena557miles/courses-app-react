import React from 'react';
import { CourseCard } from './components/CourseCard/CourseCard';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { mockedCoursesList } from '../../data/courseList';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export function Course() {
	const [create, setCreate] = useState(false);
	const [courses, setCourse] = useState(mockedCoursesList);
	const [searchResult, setSearchResult] = useState(courses);

	const handleSubmit = (e, { authors, description, duration, title }) => {
		e.preventDefault();
		setCreate(false);
		const athoursArr = authors.map((author) => {
			return author.id;
		});
		const unique_id = uuid();
		const creationDate = new Date(Date.now()).toLocaleString('en-GB', {
			timeZone: 'UTC',
		});
		const course = {
			title,
			description,
			duration,
			authors: athoursArr,
			id: unique_id,
			creationDate,
		};

		courses.push(course);
		setCourse(courses);
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

	return (
		<div className='flex flex-col border border-blue-400 p-7 mt-7 gap-y-7 h-full'>
			<div className='flex flex-row justify-between'>
				<SearchBar handleInput={handleInput} />
				<Button value={'Add new course'} onClick={() => setCreate(true)} />
			</div>
			{create ? '' : <CourseCard searchResult={searchResult} />}
			{create && <CreateCourse handleSubmit={handleSubmit} />}
		</div>
	);
}
