import PropTypes from 'prop-types';
import {
	FETCH_AUTHORS,
	FETCH_AUTHORS_SUCCESS,
	FETCH_AUTHORS_ERR,
	ADD_AUTHOR,
	ADD_AUTHOR_SUCCESS,
	ADD_AUTHOR_ERR,
	DELETE_FROM_STORE,
	ADD_TO_STORE,
} from './actionTypes';

const authorsInitialState = {
	authors: [],
	loading: false,
	error: null,
};

export const authorReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case FETCH_AUTHORS:
			return { ...state, loading: true, error: null, authors: state.authors };
		case FETCH_AUTHORS_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				authors: action.payload,
			};
		case FETCH_AUTHORS_ERR:
			return {
				...state,
				loading: false,
				error: action.payload,
				authors: state.authors,
			};
		case ADD_AUTHOR:
			return { ...state, loading: true, error: null, authors: state.authors };
		case ADD_AUTHOR_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				authors: [...state.authors, action.payload],
			};
		case ADD_AUTHOR_ERR:
			return {
				loading: false,
				error: action.payload,
				authors: state.authors,
			};
		case DELETE_FROM_STORE:
			return {
				...state,
				loading: false,
				error: null,
				authors: state.authors.filter((author) => author.id !== action.payload),
			};
		case ADD_TO_STORE:
			return {
				...state,
				loading: false,
				error: null,
				authors: [...state.authors, action.payload],
			};

		default:
			return state;
	}
};

// authorsInitialState.PropTypes = {
// 	authors: PropTypes.array,
// 	loading: PropTypes.bool,
// 	error: PropTypes.string,
// };
