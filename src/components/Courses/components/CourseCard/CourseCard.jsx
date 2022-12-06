import React from 'react';
import { Button } from '../../../../common/Button/Button';

export function CourseCard(course) {
	return (
<<<<<<< Updated upstream
		<li className='border border-green-400 p-5 mb-7 flex flex-row justify-between'>
			<div className='flex flex-col max-w-5xl justify-evenly'>
=======
		<li className='border border-green-400 p-5 mb-7 flex justify-between align-center flex-row'>
			<div className='flex flex-col max-w-3xl justify-evenly'>
>>>>>>> Stashed changes
				<h3 className='text-xl font-bold'>{course.course.title}</h3>
				<p>{course.course.description}</p>
			</div>
			<div className='flex flex-col align-center w-1/3 justify-between'>
				<p className='font-bold'>Author: {course.course.name}</p>
				<span className='font-bold'>Duration:{course.course.duration}</span>
				<span className='font-bold'>Created:{course.course.creationDate}</span>
				<Button
					value={'Show course'}
					onClick={() => console.log('course')}
				></Button>
			</div>
		</li>
	);
}
