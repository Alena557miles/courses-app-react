import { DELETE_FROM_STORE, ADD_TO_STORE } from './actionTypes';

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
