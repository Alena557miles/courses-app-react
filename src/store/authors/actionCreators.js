import {
	FETCH_AUTHORS,
	FETCH_AUTHORS_SUCCESS,
	FETCH_AUTHORS_ERR,
	ADD_AUTHOR_SUCCESS,
} from './actionTypes';

export const fetchAuthors = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: FETCH_AUTHORS });
			fetch('http://localhost:4000/authors/all', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((res) => res.json())
				.then((response) => {
					dispatch({ type: FETCH_AUTHORS_SUCCESS, payload: response.result });
				});
		} catch (e) {
			dispatch({ type: FETCH_AUTHORS_ERR, payload: 'Error was' });
		}
	};
};

export const addAuthorToStore = (author) => {
	return (dispatch) => {
		dispatch({ type: ADD_AUTHOR_SUCCESS, payload: author });
	};
};
