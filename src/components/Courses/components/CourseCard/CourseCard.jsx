import React from 'react';
import { Button } from '../../../../common/Button/Button';
import { mockedAuthorsList } from '../../../../data/authorList';

export function CourseCard(props) {
	const courses = props.courses;
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
		<ul>
			{courses.map((course) => (
				<li
					key={course.id.toString()}
					className='border border-green-400 p-5 mb-7 flex justify-between align-center flex-row'
				>
					<div className='flex flex-col max-w-3xl justify-evenly'>
						<h3 className='text-xl font-bold'>{course.title}</h3>
						<p>{course.description}</p>
					</div>
					<div className='flex flex-col align-center w-1/3 justify-between'>
						<p className='font-bold'>
							Author:{' '}
							<span className='font-normal'>{findAuthors(course.authors)}</span>
						</p>
						<p className='font-bold'>
							Duration: <span className='font-normal'>{course.duration}</span>
						</p>
						<p className='font-bold'>
							Created:{' '}
							<span className='font-normal'>{course.creationDate} </span>
						</p>
						<Button
							value={'Show course'}
							onClick={() => console.log('course')}
						></Button>
					</div>
				</li>
			))}
		</ul>
	);
}
