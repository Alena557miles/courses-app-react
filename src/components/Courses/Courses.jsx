import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';

import { BUTTON_TEXT_ADD_COURSE } from '../../constants';
import { useDispatch } from 'react-redux';

import { fetchCourses } from '../../store/courses/actionCreators';

export function Courses() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCourses());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { courses, error, loading } = useSelector((state) => state.courses);
	console.log(courses);
	const [searchResult, setSearchResult] = useState(courses);

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

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<div className='flex flex-col border border-blue-400 p-7 mt-7'>
			<div className='flex flex-row justify-between  mb-7'>
				<SearchBar handleInput={handleInput} />
				<Button buttonText={BUTTON_TEXT_ADD_COURSE} onClick={handleAddcourse} />
			</div>
			{loading ? <p>loading ...</p> : <CourseCard searchResult={courses} />}
		</div>
	);
}
