import { coursesReducer } from '../courses/reducer';
import { fetchCourses, addCourse } from '../courses/thunk';
import { mockedCoursesList } from '../../constants';

import '@testing-library/jest-dom';

const previousState = {
	courses: [],
	loading: false,
	error: null,
};

global.fetch = jest.fn();

describe('Reducer', () => {
	test('should return the initial state', () => {
		expect(coursesReducer(undefined, { type: undefined })).toEqual({
			courses: [],
			loading: false,
			error: null,
		});
	});
	test('should handle GET_COURSES and returns new state', async () => {
		fetch.mockResolvedValue({
			ok: true,
			json: () => {
				Promise.resolve({ result: mockedCoursesList });
			},
		});

		// expect(coursesReducer(previousState, fetchCourses())).toEqual({
		// 	courses: mockedCoursesList,
		// 	loading: false,
		// 	error: null,
		// });
	});
	test('should handle SAVE_COURSE and returns new state', async () => {
		// 	const course = {
		// 		title: 'strfdbxgbing',
		// 		description: 'strgfbnxfgning',
		// 		duration: 50,
		// 		authors: ['fdbfgdbngntygty'],
		// 	};
		// 	fetch.mockResolvedValue({
		// 		ok: true,
		// 		json: () => {
		// 			Promise.resolve({ result: [course] });
		// 		},
		// 	});
		// 	expect(coursesReducer(previousState, addCourse(course))).toEqual({
		// 		courses: [course],
		// 		loading: false,
		// 		error: null,
		// 	});
	});
});
