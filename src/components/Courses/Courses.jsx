import React from 'react';
import { CourseCard } from './components/CourseCard/CourseCard';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
// import { mockedCoursesList } from '../../data/courseList';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';
import { useState } from 'react';

export function Course() {
	const mockedCoursesList = [
		{
			id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
			title: 'JavaScript',
			description: `Lorem Ipsum is simply dummy text of the printing and
	typesetting industry. Lorem Ipsum
						has been the industry's standard dummy text ever since the
	1500s, when an unknown
						printer took a galley of type and scrambled it to make a type
	specimen book. It has survived
						not only five centuries, but also the leap into electronic
	2 / 11
	COMPONENTS.md
	1/4/20
	3 / 11
	Create Courses component.
	typesetting, remaining essentially u
						nchanged.`,
			creationDate: '8/3/2021',
			duration: 160,
			authors: [
				'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
				'f762978b-61eb-4096-812b-ebde22838167',
			],
		},
		{
			id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
			title: 'Angular',
			description: `Lorem Ipsum is simply dummy text of the printing and
	typesetting industry. Lorem Ipsum
						has been the industry's standard dummy text ever since the
	1500s, when an unknown
						printer took a galley of type and scrambled it to make a type
	specimen book.`,
			creationDate: '10/11/2020',
			duration: 210,
			authors: [
				'df32994e-b23d-497c-9e4d-84e4dc02882f',
				'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
			],
		},
	];

	const [create, setCreate] = useState(false);
	const [courses, setCourse] = useState(mockedCoursesList);
	const handleSubmit = (e, { authors, description, duration, title }) => {
		e.preventDefault();
		setCreate(false);
		const athoursArr = authors.map((author) => {
			return author.id;
		});
		const id = 'cmfydu66r5';
		const creationDate = Date.now().toString();
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
