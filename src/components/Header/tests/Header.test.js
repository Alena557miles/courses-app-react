import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { Header } from '../Header';

const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
	},
	courses: [],
	authors: [],
};
const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

test('should containe user name from store', async () => {
	// Render a React element into the DOM
	render(
		<Provider store={mockedStore}>
			<Header />
		</Provider>
	);

	expect(screen.queryByText('Test Name')).toBeInTheDocument();
});

test('should containe app logo', async () => {
	// Render a React element into the DOM
	render(
		<Provider store={mockedStore}>
			<Header />
		</Provider>
	);

	expect(screen.queryByAltText('Logo')).toBeInTheDocument();
});
