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
	GET_COURSE,
	GET_COURSE_SUCCESS,
	GET_COURSE_ERR,
} from './actionTypes';

export const fetchCourses = () => {
	return async (dispatch) => {
		dispatch({ type: FETCH_COURSES });
		fetch('http://localhost:4000/courses/all', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error(response.statusText);
			})
			.then((response) => {
				dispatch({ type: FETCH_COURSES_SUCCESS, payload: response.result });
			})
			.catch((error) => {
				dispatch({ type: FETCH_COURSES_ERR, payload: error.message });
			});
	};
};
export const addCourse = (course) => {
	return (dispatch) => {
		const token = localStorage.getItem('token');
		dispatch({ type: ADD_COURSE, payload: course });
		fetch('http://localhost:4000/courses/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${token}`,
			},
			body: JSON.stringify(course),
		})
			.then((response) => response.json())
			.then((response) => {
				if (response.successful) {
					return dispatch({
						type: ADD_COURSE_SUCCESS,
						payload: response.result,
					});
				}
				throw new Error(response.result ? response.result : response.error);
			})
			.catch((error) => {
				console.log(error.message);
				dispatch({ type: ADD_COURSE_ERR, payload: error.message });
			});
	};
};

export const deleteCourse = (courseId) => {
	return (dispatch) => {
		const token = localStorage.getItem('token');
		dispatch({ type: DELETE_COURSE });
		fetch(`http://localhost:4000/courses/${courseId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${token}`,
			},
		})
			.then((response) => response.json())
			.then((response) => {
				if (response.successful) {
					alert(response.result);
					return dispatch({ type: DELETE_COURSE_SUCCESS, payload: courseId });
				}
				throw new Error(response.error);
			})
			.catch((error) => {
				dispatch({ type: DELETE_COURSE_ERR, payload: error.message });
			});
	};
};

export const updateCourse = (course) => {
	return (dispatch) => {
		const token = localStorage.getItem('token');
		dispatch({ type: UPDATE_COURSE });
		fetch(`http://localhost:4000/courses/${course.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${token}`,
			},
			body: JSON.stringify(course),
		})
			.then((response) => response.json())
			.then((response) => {
				if (response.successful) {
					return dispatch({ type: UPDATE_COURSE_SUCCESS, payload: course });
				}
				throw new Error(response.error ? response.error : response.result);
			})
			.catch((error) => {
				dispatch({ type: UPDATE_COURSE_ERR, payload: error.message });
			});
	};
};

export const getCourse = (courseId) => {
	return (dispatch) => {
		dispatch({ type: GET_COURSE });
		fetch(`http://localhost:4000/courses/${courseId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				if (response.successful) {
					return dispatch({
						type: GET_COURSE_SUCCESS,
						payload: response.result,
					});
				}
				throw new Error(response.error);
			})
			.catch((error) => {
				dispatch({ type: GET_COURSE_ERR, payload: error.message });
			});
	};
};
