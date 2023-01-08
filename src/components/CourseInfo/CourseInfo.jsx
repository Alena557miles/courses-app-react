import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { mockedCoursesList } from '../../constants';

export function CourseInfo() {
	const params = useParams();
	console.log(params.courseId);
	console.log(mockedCoursesList);
	const [course, setCourse] = useState(null);

	function findCourse(id) {
		const course = mockedCoursesList.find((course) => course.id === id);
		setCourse(course);
	}
	useEffect(() => {
		findCourse(params.courseId);
	});
	return (
		<div className='flex flex-col p-9 border border-cyan-400 mt-7 gap-y-7 h-5/6'>
			<Link to='/courses'> Back to courses</Link>
			<h1 className='text-bold text-3xl text-center'>course.title</h1>
			<div className='flex flex-row justify-between gap-x-16'>
				<div className='w-3/5'>
					<p>props.course.description</p>
				</div>
				<div className='w-2/5 flex flex-col gap-3'>
					<p className='font-bold'>
						ID: <span className='font-normal'>props.course.id</span>{' '}
					</p>
					<p className='font-bold'>
						Duration: <span className='font-normal'>props.course.duration</span>{' '}
					</p>
					<p className='font-bold'>
						Created:{' '}
						<span className='font-normal'>props.course.creationDate</span>{' '}
					</p>
					<p className='font-bold'>
						Authors: <span className='font-normal'>props.course.Authors</span>{' '}
					</p>
				</div>
			</div>
		</div>
	);
}
