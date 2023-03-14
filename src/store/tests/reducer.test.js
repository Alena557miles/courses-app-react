import { coursesReducer } from '../courses/reducer';
import { fetchCourses } from '../courses/thunk';

import '@testing-library/jest-dom';
import { mockedCoursesList } from '../../constants';

test('should return the initial state', () => {
	expect(coursesReducer(undefined, { type: undefined })).toEqual({
		courses: [],
		loading: false,
		error: null,
	});
});
const previousState = {
	courses: [],
	loading: false,
	error: null,
};

describe('courseThunk', () => {
	it('should fetchCourses with resolved response', async () => {
		// const courses = mockedCoursesList;
		const dispatch = jest.fn();
		const thunk = fetchCourses();

		await thunk(dispatch);
		expect(coursesReducer(previousState, { type: undefined })).toEqual({
			courses: [],
			loading: false,
			error: null,
		});
	});
});
