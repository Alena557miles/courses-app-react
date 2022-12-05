import React from 'react';
import { CourseCard } from './components/CourseCard/CourseCard';
import { mockedCoursesList } from '../../data/courseList';
// import { mockedAuthorsList } from '../../data/authorList';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';

export function Course() {
	return (
		<div className='flex flex-col border border-blue-400 p-7 mt-7 gap-y-7 h-5/6'>
			<div className='flex flex-row justify-between'>
				<SearchBar />
				<Button
					value={'Add new course'}
					onClick={() => console.log('Add new course')}
				/>
			</div>
			<ul>
				{mockedCoursesList.map((course) => (
					<CourseCard course={course} key={course.id.toString()} />
				))}
			</ul>
		</div>
	);
}
