import React from 'react';

import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';

import { BUTTON_TEXT_ADD_COURSE, mockedCoursesList } from '../../constants';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Courses() {
	const courses = mockedCoursesList;
	const [searchResult, setSearchResult] = useState(mockedCoursesList);
	const navigate = useNavigate();

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

	const handleAddcourse = () => {
		navigate('/courses/add');
	};

	return (
		<div className='flex flex-col border border-blue-400 p-7 mt-7'>
			<div className='flex flex-row justify-between  mb-7'>
				<SearchBar handleInput={handleInput} />
				<Button buttonText={BUTTON_TEXT_ADD_COURSE} onClick={handleAddcourse} />
			</div>
			<CourseCard searchResult={searchResult} />
		</div>
	);
}
