import {
	FETCH_AUTHORS,
	FETCH_AUTHORS_SUCCESS,
	FETCH_AUTHORS_ERR,
	ADD_AUTHOR_SUCCESS,
	ADD_AUTHOR_ERR,
	ADD_AUTHOR,
	DELETE_FROM_STORE,
	ADD_TO_STORE,
} from './actionTypes';

export const fetchAuthors = () => {
	return async (dispatch) => {
		dispatch({ type: FETCH_AUTHORS });
		fetch('http://localhost:4000/authors/all', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((response) => {
				if (response.successful) {
					return dispatch({
						type: FETCH_AUTHORS_SUCCESS,
						payload: response.result,
					});
				}
				throw new Error(response.result ? response.result : response.error);
			})
			.catch((error) => {
				dispatch({ type: FETCH_AUTHORS_ERR, payload: error.message });
			});
	};
};

export const addAuthorFetch = (author) => {
	return (dispatch) => {
		const token = localStorage.getItem('token');
		dispatch({ type: ADD_AUTHOR, payload: author });
		fetch('http://localhost:4000/authors/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${token}`,
			},
			body: JSON.stringify(author),
		})
			.then((response) => response.json())
			.then((response) => {
				if (response.successful) {
					return dispatch({ type: ADD_AUTHOR_SUCCESS, payload: author });
				}
				throw new Error(response.result ? response.result : response.error);
			})
			.catch((error) => {
				dispatch({ type: ADD_AUTHOR_ERR, payload: error.message });
			});
	};
};

export const deleteFromStore = (id) => {
	return (dispatch) => {
		dispatch({ type: DELETE_FROM_STORE, payload: id });
	};
};
export const addToStore = (author) => {
	return (dispatch) => {
		dispatch({ type: ADD_TO_STORE, payload: author });
	};
};
