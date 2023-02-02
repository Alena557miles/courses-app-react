import PropTypes from 'prop-types';
import {
	FETCH_COURSES,
	FETCH_COURSES_SUCCESS,
	FETCH_COURSES_ERR,
	ADD_COURSE,
	ADD_COURSE_SUCCESS,
	ADD_COURSE_ERR,
	DELETE_COURSE,
	DELETE_COURSE_SUCCESS,
	DELETE_COURSE_ERR,
	UPDATE_COURSE,
	UPDATE_COURSE_SUCCESS,
	UPDATE_COURSE_ERR,
} from './actionTypes';

const coursesInitialState = {
	courses: [],
	loading: false,
	error: null,
};

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case FETCH_COURSES:
			return { ...state, loading: true, error: null, courses: [] };
		case FETCH_COURSES_SUCCESS:
			return { ...state, loading: false, error: null, courses: action.payload };
		case FETCH_COURSES_ERR:
			return {
				...state,
				loading: false,
				error: action.payload,
				courses: state.courses,
			};
		case ADD_COURSE:
			return { ...state, loading: true, error: null, courses: state.courses };
		case ADD_COURSE_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				courses: [...state.courses, action.payload],
			};
		case ADD_COURSE_ERR:
			return { loading: false, error: action.payload, courses: state.courses };
		case DELETE_COURSE:
			return { ...state, loading: true, error: null, courses: state.courses };
		case DELETE_COURSE_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				courses: state.courses.filter((course) => course.id !== action.payload),
			};
		case DELETE_COURSE_ERR:
			return { loading: false, error: action.payload, courses: state.courses };
		case UPDATE_COURSE:
			return { ...state, loading: true, error: null, courses: state.courses };
		case UPDATE_COURSE_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				courses: [
					...state.courses.map((course) => {
						if ((course.id = action.payload.id)) {
							course.title = action.payload.title;
							course.description = action.payload.description;
							course.duration = action.payload.duration;
							course.authors = action.payload.authors;
						}
						return course;
					}),
				],
			};
		case UPDATE_COURSE_ERR:
			return { loading: false, error: action.payload, courses: state.courses };
		default:
			return state;
	}
};

coursesInitialState.PropTypes = {
	courses: PropTypes.array,
	loading: PropTypes.bool,
	error: PropTypes.string,
};
