import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';
import { ErrorMessage } from '../../common/Error/ErrorMessage';

import { BUTTON_TEXT_ADD_COURSE } from '../../constants';
import { getCourses, getUser } from '../../hooks/selectors';

import { fetchCourses } from '../../store/courses/thunk';
import { Loading } from '../../common/Loading/Loading';

export function Courses() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { courses, error, loading } = useSelector(getCourses);
	const { isAuth, role } = useSelector(getUser);
	const [searchResult, setSearchResult] = useState(courses);

	useEffect(() => {
		if (isAuth) {
			dispatch(fetchCourses());
			setSearchResult(courses);
		} else {
			navigate('/login');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuth]);

	const handleInput = (e) => {
		const text = e.target.value.toLowerCase();
		if (!e.target.value) return setSearchResult(courses);

		const resultArray = courses.filter(
			(course) =>
				course.title.toLowerCase().includes(text) ||
				course.description.toLowerCase().includes(text) ||
				course.id.toLowerCase().includes(text)
		);
		setSearchResult(resultArray);
	};
	const handleAddcourse = () => {
		navigate('/courses/add');
	};
	return (
		<div className='flex flex-col border border-blue-400 p-7'>
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
			{loading ? <Loading /> : <CourseCard searchResult={searchResult} />}
		</div>
	);
}
