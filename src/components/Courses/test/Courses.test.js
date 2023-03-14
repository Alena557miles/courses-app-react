import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Courses } from '../Courses';

import { mockedCoursesList, mockedAuthorsList } from '../../../constants';

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

describe('Courses component', () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<Provider store={mockedStore}>
					<Courses />
				</Provider>
			</BrowserRouter>
		);
	});

	afterEach(() => {
		jest.resetAllMocks();
		jest.clearAllTimers();
	});

	it('should display amount of CourseCard equal length of courses array.', async () => {
		expect(screen.queryAllByRole('listitem').length).toBe(2);
	});
});

describe('Course Component', () => {
	it('should display Empty container if courses array length is 0.', async () => {
		mockedState.courses.courses = [];
		render(
			<BrowserRouter>
				<Provider store={mockedStore}>
					<Courses />
				</Provider>
			</BrowserRouter>
		);
		expect(screen.queryByRole('list')).toBeNull();
	});
});

test('"CourseForm" should be showed after a click on a button "Add new course" ', () => {
	render(
		<BrowserRouter>
			<Provider store={mockedStore}>
				<Courses />
			</Provider>
		</BrowserRouter>
	);
	userEvent.click(screen.getByText('Add new course'));
	// expect(screen.getByTestId('course-form')).toBeInTheDocument();
});
