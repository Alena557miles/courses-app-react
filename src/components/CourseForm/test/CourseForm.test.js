import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import * as actions from '../../../store/courses/thunk';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CourseForm } from '../CourseForm';

import { mockedCoursesList, mockedAuthorsList } from '../../../constants';

// jest.mock('react-redux');
// const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockedState = {
	user: {
		isAuth: true,
		name: 'ADMIN',
		role: 'admin',
	},
	courses: {
		courses: mockedCoursesList,
		loading: false,
		error: null,
	},
	authors: {
		authors: mockedAuthorsList,
		loading: false,
		error: null,
	},
};
const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

describe('CourseForm', () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<Provider store={mockedStore}>
					<CourseForm />
				</Provider>
			</BrowserRouter>
		);
	});
	// afterEach(() => {
	// 	jest.resetAllMocks();
	// 	jest.clearAllTimers();
	// });

	it('should CourseForm displayed button "Create course"', async () => {
		expect(screen.queryByText('Create course')).toBeInTheDocument();
		expect(screen.queryByText('courseform')).toBeInTheDocument();
	});

	// NEED TO FILLED ALL INPUT !!!!

	// it('"Create author" click button should call dispatch', () => {
	// 	const dispatch = jest.fn();
	// 	// mockedDispatch.mockReturnValue(dispatch);
	// 	const mockedUpdateCourse = jest.spyOn(actions, 'updateCourse');

	// 	screen.debug();

	// 	fireEvent.click(screen.queryByText('Create course'));
	// 	expect(dispatch).toHaveBeenCalled();
	// 	expect(mockedUpdateCourse).toHaveBeenCalled();
	// });
});
