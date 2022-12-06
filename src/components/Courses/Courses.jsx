import React from 'react';
import { CourseCard } from './components/CourseCard/CourseCard';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { mockedCoursesList } from '../../data/courseList';
// import { mockedAuthorsList } from '../../data/authorList';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';
import { useState } from 'react';

export function Course() {
	const [create, setCreate] = useState(false);
	return (
<<<<<<< Updated upstream
		<div className='flex flex-col border border-blue-400 p-7 mt-7 gap-y-7 '>
=======
		<div className='flex flex-col border border-blue-400 p-7 mt-7 gap-y-7 h-full'>
>>>>>>> Stashed changes
			<div className='flex flex-row justify-between'>
				<SearchBar />
				<Button value={'Add new course'} onClick={() => setCreate(true)} />
			</div>
			<ul>
				{mockedCoursesList.map((course) => (
					<CourseCard course={course} key={course.id.toString()} />
				))}
			</ul>
			{create && <CreateCourse />}
		</div>
	);
}
