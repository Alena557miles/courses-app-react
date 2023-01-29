import {
	REGISTER_USER,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_ERR,
	LOGIN_USER_ERR,
	LOGIN_USER_SUCCESS,
	LOGIN_USER,
	LOGOUT_USER,
	LOGOUT_USER_ERR,
	LOGOUT_USER_SUCCESS,
} from './actionTypes';

export const registerUser = (newUser) => {
	return async (dispatch) => {
		try {
			dispatch({ type: REGISTER_USER });
			fetch('http://localhost:4000/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newUser),
			})
				.then((res) => res.json())
				.then(() => {
					dispatch({ type: REGISTER_USER_SUCCESS, payload: newUser });
				});
		} catch (err) {
			dispatch({ type: REGISTER_USER_ERR, payload: err });
		}
	};
};

export const loginUser = (user) => {
	return async (dispatch) => {
		try {
			dispatch({ type: LOGIN_USER });
			fetch('http://localhost:4000/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(user),
			})
				.then((res) => res.json())
				.then((response) => {
					localStorage.setItem('token', response.result);
					dispatch({ type: LOGIN_USER_SUCCESS, payload: response });
				});
		} catch (err) {
			dispatch({ type: LOGIN_USER_ERR, payload: err });
		}
	};
};

export const logoutUser = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: LOGOUT_USER });
			fetch('http://localhost:4000/logout', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((res) => res.json())
				.then(() => {
					localStorage.removeItem('token');
					localStorage.removeItem('name');
					dispatch({ type: LOGOUT_USER_SUCCESS });
				});
		} catch (err) {
			dispatch({ type: LOGOUT_USER_ERR, payload: err });
		}
	};
};