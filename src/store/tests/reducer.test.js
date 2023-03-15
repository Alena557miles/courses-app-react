import { coursesReducer } from '../courses/reducer';
import { mockedCoursesList } from '../../constants';

import '@testing-library/jest-dom';

const previousState = {
	courses: [],
	loading: false,
	error: null,
};

describe('Reducer', () => {
	test('should return the initial state', () => {
		expect(coursesReducer(undefined, { type: undefined })).toEqual({
			courses: [],
			loading: false,
			error: null,
		});
	});
	test('should handle ADD_COURSES and returns new state', async () => {
		const course = {
			title: 'Golang',
			description: 'Golang Programming Language',
			duration: 33,
			id: 'dfvcfzsdr45tiw45yw54',
			authors: [],
		};

		expect(
			coursesReducer(previousState, {
				type: 'ADD_COURSE_SUCCESS',
				payload: course,
			})
		).toEqual({
			courses: [course],
			loading: false,
			error: null,
		});
		const err = 'error message';
		expect(
			coursesReducer(previousState, {
				type: 'ADD_COURSE_ERR',
				payload: err,
			})
		).toEqual({
			courses: [],
			loading: false,
			error: err,
		});
	});
	test('should handle FETCH_COURSE and returns new state', async () => {
		expect(
			coursesReducer(previousState, {
				type: 'FETCH_COURSES_SUCCESS',
				payload: [mockedCoursesList],
			})
		).toEqual({
			courses: [mockedCoursesList],
			loading: false,
			error: null,
		});
	});
});
