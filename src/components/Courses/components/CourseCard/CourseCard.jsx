import React from 'react';
import { Button } from '../../../../common/Button/Button';

export function CourseCard(course) {
	return (
		<li className='border border-green-400 p-5 mb-7 flex flex-row justify-between'>
			<div className='flex flex-col max-w-5xl justify-evenly'>
				<h3 className='text-xl font-bold'>{course.course.title}</h3>
				<p>{course.course.description}</p>
			</div>
			<div className='flex flex-col align-center max-w-2xl'>
				<span className='font-bold'>Author:{course.course.name}</span>
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
