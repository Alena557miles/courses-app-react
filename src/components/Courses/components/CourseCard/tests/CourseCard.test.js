import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { CourseCard } from '../CourseCard';
import { BrowserRouter } from 'react-router-dom';

const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
	},
	courses: {
		courses: [
			{
				id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
				title: 'Angular',
				description: 'Some description',
				creationDate: '10/11/2020',
				duration: 70,
				authors: [
					'df32994e-b23d-497c-9e4d-84e4dc02882f',
					'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
				],
			},
		],
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

test('should containe course title', async () => {
	const title = 'Angular';
	render(
		<BrowserRouter>
			<Provider store={mockedStore}>
				<CourseCard courses={mockedState.courses.courses} />
			</Provider>
		</BrowserRouter>
	);
	expect(screen.queryByText(title)).toBeInTheDocument();
});

test('should display description', async () => {
	const description = 'Some description';
	render(
		<BrowserRouter>
			<Provider store={mockedStore}>
				<CourseCard courses={mockedState.courses.courses} />
			</Provider>
		</BrowserRouter>
	);
	expect(screen.queryByText(description)).toBeInTheDocument();
});

test('should display duration in the correct format', async () => {
	const duration = '01:10';
	render(
		<BrowserRouter>
			<Provider store={mockedStore}>
				<CourseCard courses={mockedState.courses.courses} />
			</Provider>
		</BrowserRouter>
	);

	expect(screen.queryByText(duration)).toBeInTheDocument();
});

test('should display created date in the correct format.', async () => {
	const creationDate = '10/11/2020';
	const dateToDisplay = new Date(creationDate).toLocaleDateString('en-GB');
	render(
		<BrowserRouter>
			<Provider store={mockedStore}>
				<CourseCard courses={mockedState.courses.courses} />
			</Provider>
		</BrowserRouter>
	);

	expect(screen.queryByText(dateToDisplay)).toBeInTheDocument();
});

test('should display authors list', async () => {
	render(
		<BrowserRouter>
			<Provider store={mockedStore}>
				<CourseCard courses={mockedState.courses.courses} />
			</Provider>
		</BrowserRouter>
	);
	expect(screen.queryByText(/Valentina/)).toBeInTheDocument();
	expect(screen.queryByText(/Anna/)).toBeInTheDocument();
});

test('should show course', () => {
	render(
		<BrowserRouter>
			<Provider store={mockedStore}>
				<CourseCard courses={mockedState.courses.courses} />
			</Provider>
		</BrowserRouter>
	);
	expect(screen.getByText(/Show course/)).toBeInTheDocument();
	const btn = screen.queryByText('Show course');
	userEvent.click(btn);
	expect(screen.getByText(/Angular/)).toBeInTheDocument();
});
