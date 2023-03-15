import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import * as actions from '../../../store/courses/thunk';
import * as authorsActions from '../../../store/authors/actionCreators';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CourseForm } from '../CourseForm';

import { mockedCoursesList, mockedAuthorsList } from '../../../constants';
import userEvent from '@testing-library/user-event';
import { clear } from 'console';

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
		authors: [
			{
				id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
				name: 'Anna Sidorenko',
			},
			{
				id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
				name: 'Valentina Larina',
			},
		],
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

	it('should CourseForm displayed button "Create course"', async () => {
		expect(screen.queryByText('Create course')).toBeInTheDocument();
		expect(screen.getByTestId('course-form')).toBeInTheDocument();
	});

	it('should show authors lists', () => {
		// expect(screen.queryByText(/Valentina/)).toBeInTheDocument();
		expect(screen.queryByText(/Anna/)).toBeInTheDocument();
	});

	it('"Create author" click button should call dispatch', async () => {
		// jest.mock('react-redux');
		// const mockedUpdateCourse = jest.spyOn(actions, 'updateCourse');
		// // const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
		// const dispatch = jest.fn();
		// mockedUpdateCourse.mockReturnValue(dispatch);
		// const inputTitle = screen.getByPlaceholderText(/enter title/i);
		// fireEvent.input(inputTitle, {
		// 	target: { value: 'Java' },
		// });
		// const inputDescription = screen.getByPlaceholderText(/enter description/i);
		// fireEvent.input(inputDescription, {
		// 	target: { value: 'Java Description' },
		// });
		// const inputDuration = screen.getByPlaceholderText(/duration in minutes/i);
		// fireEvent.input(inputDuration, {
		// 	target: { value: '60' },
		// });
		////////////////////////
		// jest.mock('react-redux');
		// const mockedUpdateAuthor = jest.spyOn(authorsActions, 'deleteFromStore');
		// // const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
		// const dispatch = jest.fn();
		// mockedUpdateAuthor.mockReturnValue(dispatch);
		// const btnAddAuthor = await screen.getByText('Add authors');
		// fireEvent.click(btnAddAuthor);
		// screen.debug();
		// expect(dispatch).toHaveBeenCalled();
		// expect(mockedUpdateAuthor).toHaveBeenCalled();
		////////////////////////////////////
		// expect(screen.getByText(/Delete author/i)).toBeInTheDocument();
		// fireEvent.click(screen.queryByText('Create course'));
		// expect(dispatch).toHaveBeenCalled();
		// expect(mockedUpdateCourse).toHaveBeenCalled();
	});
});
