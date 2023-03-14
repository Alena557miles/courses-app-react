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

import { fetchCourses, filterCourse } from '../../store/courses/thunk';
import { Loading } from '../../common/Loading/Loading';

export function Courses() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { courses, error, loading } = useSelector(getCourses);
	const { isAuth, role } = useSelector(getUser);
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		if (isAuth) {
			dispatch(fetchCourses());
		} else {
			navigate('/login');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuth]);

	const handleInput = (e) => {
		setSearchQuery(e.target.value);
		if (!e.target.value) {
			dispatch(fetchCourses());
		}
	};

	const handleSearch = () => {
		const text = searchQuery.toLowerCase();
		dispatch(filterCourse(text));
	};

	return (
		<div className='flex flex-col border border-blue-400 p-7'>
			<div className='flex flex-row justify-between  mb-7'>
				<SearchBar handleInput={handleInput} handleSearch={handleSearch} />

				{role === 'admin' ? (
					<Button
						buttonText={BUTTON_TEXT_ADD_COURSE}
						onClick={() => navigate('/courses/add')}
					/>
				) : (
					''
				)}
			</div>
			{error ? <ErrorMessage error={error} /> : ''}
			{loading ? <Loading /> : <CourseCard courses={courses} />}
		</div>
	);
}
