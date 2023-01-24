import {
	FETCH_COURSES,
	FETCH_COURSES_ERR,
	FETCH_COURSES_SUCCESS,
} from './actionTypes';

export const fetchCourses = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: FETCH_COURSES });
			fetch('http://localhost:4000/courses/all', {
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
