import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { mockedCoursesList, mockedAuthorsList } from '../../constants';
import { PipeDuration } from '../../helpers/pipeDuration';
import { DateGenerator } from '../../helpers/dateGenerator';

export function CourseInfo() {
	const params = useParams();
	const course = findCourse(params.courseId);
	console.log(params.courseId);
	console.log(mockedCoursesList);

	function findCourse(id) {
		const course = mockedCoursesList.find((course) => course.id === id);
		console.log('Hi');
		console.log(course);
		return course;
	}
	const findAuthors = (array) => {
		let authors = [];
		for (let j = 0; j < array.length; j++) {
			for (let i = 0; i < mockedAuthorsList.length; i++) {
				if (mockedAuthorsList[i].id === array[j]) {
					authors.push(mockedAuthorsList[i].name);
				}
			}
		}
		return [...authors].join(', ');
	};
	return (
		<div className='flex flex-col p-9 border border-cyan-400 mt-7 gap-y-7 h-5/6'>
			<Link to='/courses'> Back to courses</Link>
			<h1 className='text-bold text-3xl text-center'>{course.title}</h1>
			<div className='flex flex-row justify-between gap-x-16'>
				<div className='w-3/5'>
					<p>{course.description}</p>
				</div>
				<div className='w-2/5 flex flex-col gap-3'>
					<p className='font-bold'>
						ID: <span className='font-normal'>{course.id}</span>{' '}
					</p>
					<p className='font-bold'>
						Duration:{' '}
						<span className='font-normal'>
							{' '}
							<PipeDuration>{course.duration}</PipeDuration> hours
						</span>{' '}
					</p>
					<p className='font-bold'>
						Created:{' '}
						<span className='font-normal'>
							{' '}
							<DateGenerator>{course.creationDate}</DateGenerator>
						</span>{' '}
					</p>
					<p className='font-bold'>
						Authors:{' '}
						<span className='font-normal'>{findAuthors(course.authors)}</span>{' '}
					</p>
				</div>
			</div>
		</div>
	);
}
