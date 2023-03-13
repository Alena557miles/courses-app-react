import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { Courses } from '../Courses';
import { BrowserRouter } from 'react-router-dom';
import { mockedCoursesList, mockedAuthorsList } from '../../../constants';

const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
	},
	courses: {
		courses: mockedCoursesList,
		loading: false,
		error: null,
	},
	authors: {
		authors: [],
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
	it('should display amount of CourseCard equal length of courses array.', async () => {
		render(
			<BrowserRouter>
				<Provider store={mockedStore}>
					<Courses />
				</Provider>
			</BrowserRouter>
		);
	});
	// expect(screen.queryByText(title)).toBe(2);
});
