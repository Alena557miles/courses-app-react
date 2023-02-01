import {
	FETCH_COURSES,
	FETCH_COURSES_ERR,
	FETCH_COURSES_SUCCESS,
	ADD_COURSE,
	ADD_COURSE_SUCCESS,
	ADD_COURSE_ERR,
	DELETE_COURSE_SUCCESS,
	DELETE_COURSE_ERR,
	DELETE_COURSE,
	UPDATE_COURSE,
	UPDATE_COURSE_ERR,
	UPDATE_COURSE_SUCCESS,
} from './actionTypes';

export const fetchCourses = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: FETCH_COURSES });
			await fetch('http://localhost:4000/courses/all', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((res) => res.json())
				.then((response) => {
					dispatch({ type: FETCH_COURSES_SUCCESS, payload: response.result });
				});
		} catch (e) {
			dispatch({ type: FETCH_COURSES_ERR, payload: 'Error was' });
		}
	};
};
export const addCourse = (course) => {
	return (dispatch) => {
		dispatch({ type: ADD_COURSE_SUCCESS, payload: course });
	};
};

export const deleteCourse = (courseId) => {
	return (dispatch) => {
		dispatch({ type: DELETE_COURSE_SUCCESS, payload: courseId });
	};
};
export const updateCourse = (course) => {
	return (dispatch) => {
		dispatch({ type: UPDATE_COURSE_SUCCESS, payload: course });
	};
};
