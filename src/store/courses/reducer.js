import {
	FETCH_COURSES,
	FETCH_COURSES_SUCCESS,
	FETCH_COURSES_ERR,
} from './actionTypes';
const initialState = {
	courses: [],
	loading: false,
	error: null,
};

export const coursesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_COURSES:
			return { loading: true, error: null, courses: [] };
		case FETCH_COURSES_SUCCESS:
			return { loading: false, error: null, courses: action.payload };
		case FETCH_COURSES_ERR:
			return { loading: false, error: action.payload, courses: [] };
		default:
			return state;
	}
};
