import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';
import { ErrorMessage } from '../../common/Error/ErrorMessage';

import { BUTTON_TEXT_ADD_COURSE } from '../../constants';
import { useDispatch } from 'react-redux';

import { fetchCourses } from '../../store/courses/actionCreators';

export function Courses() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { courses, error, loading } = useSelector((state) => state.courses);
	const { isAuth, role } = useSelector((state) => state.user);

	useEffect(() => {
		if (isAuth) {
			dispatch(fetchCourses());
		} else {
			navigate('/login');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuth]);

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
	return (
		<div className='flex flex-col border border-blue-400 p-7 mt-7'>
			<div className='flex flex-row justify-between  mb-7'>
				<SearchBar handleInput={handleInput} />

				{role === 'admin' ? (
					<Button
						buttonText={BUTTON_TEXT_ADD_COURSE}
						onClick={handleAddcourse}
					/>
				) : (
					''
				)}
			</div>
			{error ? <ErrorMessage error={error} /> : ''}
			{loading ? <p>loading ...</p> : <CourseCard searchResult={courses} />}
		</div>
	);
}
