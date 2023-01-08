import React from 'react';

import { Button } from '../../../../common/Button/Button';

import { mockedAuthorsList, BUTTON_TEXT_COURSE } from '../../../../constants';

import { useNavigate } from 'react-router-dom';

import { DateGenerator } from '../../../../helpers/dateGenerator';
import { PipeDuration } from '../../../../helpers/pipeDuration';

export function CourseCard(props) {
	const navigate = useNavigate();

	const courses = props.searchResult;
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
					<div className='flex flex-col align-center w-1/3 justify-between '>
						<p className='font-bold truncate whitespace-nowrap overflow-hidden '>
							Author:{' '}
							<span className='font-normal'>{findAuthors(course.authors)}</span>
						</p>
						<p className='font-bold'>
							Duration:{' '}
							<span className='font-normal'>
								<PipeDuration>{course.duration}</PipeDuration> hours
							</span>
						</p>
						<p className='font-bold'>
							Created:{' '}
							<span className='font-normal'>
								<DateGenerator>{course.creationDate}</DateGenerator>
							</span>
						</p>
						<Button
							buttonText={BUTTON_TEXT_COURSE}
							onClick={() => navigate(`/courses/${course.id}`)}
						></Button>
					</div>
				</li>
			))}
		</ul>
	);
}
