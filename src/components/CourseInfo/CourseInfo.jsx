import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PipeDuration } from '../../helpers/pipeDuration';
import { DateGenerator } from '../../helpers/dateGenerator';

import { getCourses, getAuthors } from '../../hooks/selectors';
export function CourseInfo() {
	const { courses } = useSelector(getCourses);
	const { authors } = useSelector(getAuthors);

	function findCourse(id) {
		const course = courses.find((course) => course.id === id);
		return course;
	}
	const findAuthors = (array) => {
		let authorsFinal = [];
		for (let j = 0; j < array.length; j++) {
			for (let i = 0; i < authors.length; i++) {
				if (authors[i].id === array[j]) {
					authorsFinal.push(authors[i].name);
				}
			}
		}
		return [...authorsFinal].join(', ');
	};
	const params = useParams();
	const course = findCourse(params.courseId);

	return (
		<div className='flex flex-col p-9 border border-cyan-400 gap-y-7 h-5/6'>
			<Link to='../'> &lt; Back to courses</Link>
			{course ? (
				<>
					<h1 className='text-bold text-3xl text-center'>{course.title}</h1>
					<div className='flex flex-row gap-y-3 gap-x-16'>
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
								<span className='font-normal'>
									{findAuthors(course.authors)}
								</span>{' '}
							</p>
						</div>
					</div>
				</>
			) : (
				<p>there are no courses with such parameters ...</p>
			)}
		</div>
	);
}
