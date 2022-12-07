import React from 'react';
import { CourseCard } from './components/CourseCard/CourseCard';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { mockedCoursesList } from '../../data/courseList';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';
import { useState } from 'react';

export function Course() {
	const [create, setCreate] = useState(false);
	const [courses, setCourse] = useState(mockedCoursesList);

	const handleSubmit = (e, { authors, description, duration, title }) => {
		e.preventDefault();
		setCreate(false);
		const athoursArr = authors.map((author) => {
			return author.id;
		});
		const id = 'cmfydu66r5';
		const creationDate = new Date(Date.now()).toString();
		const course = {
			title,
			description,
			duration,
			authors: athoursArr,
			id,
			creationDate,
		};

		courses.push(course);
		setCourse(courses);
	};

	return (
		<div className='flex flex-col border border-blue-400 p-7 mt-7 gap-y-7 h-full'>
			<div className='flex flex-row justify-between'>
				<SearchBar />
				<Button value={'Add new course'} onClick={() => setCreate(true)} />
			</div>
			{create ? '' : <CourseCard courses={courses} />}
			{create && <CreateCourse handleSubmit={handleSubmit} />}
		</div>
	);
}
