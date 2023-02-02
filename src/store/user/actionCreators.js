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
	GET_USER,
	GET_USER_SUCCESS,
	GET_USER_ERR,
} from './actionTypes';

export const registerUser = (newUser) => {
	return (dispatch) => {
		dispatch({ type: REGISTER_USER });
		fetch('http://localhost:4000/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newUser),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error(response.statusText);
			})
			.then(() => {
				dispatch({ type: REGISTER_USER_SUCCESS, payload: newUser });
			})
			.catch((error) => {
				dispatch({ type: REGISTER_USER_ERR, payload: error.message });
			});
	};
};

export const loginUser = (user) => {
	return async (dispatch) => {
		dispatch({ type: LOGIN_USER });
		fetch('http://localhost:4000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error(response.statusText);
			})
			.then((response) => {
				localStorage.setItem('token', response.result);
				if (!response.user.name) {
					const resp = {
						...response,
						user: {
							...user,
							name: 'ADMIN',
							role: 'admin',
						},
					};
					dispatch({
						type: LOGIN_USER_SUCCESS,
						payload: resp,
					});
				} else {
					response.user.role = 'user';
					dispatch({
						type: LOGIN_USER_SUCCESS,
						payload: response,
					});
				}
			})
			.catch((error) => {
				dispatch({ type: LOGIN_USER_ERR, payload: error.message });
			});
	};
};

export const logoutUser = () => {
	return async (dispatch) => {
		try {
			const token = localStorage.getItem('token');
			dispatch({ type: LOGOUT_USER });
			await fetch('http://localhost:4000/logout', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `${token}`,
				},
			})
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
					throw new Error(response.statusText);
				})
				.then(() => {
					localStorage.removeItem('token');
					localStorage.removeItem('name');
					dispatch({ type: LOGOUT_USER_SUCCESS });
				});
		} catch (err) {
			dispatch({ type: LOGOUT_USER_ERR, payload: err.message });
		}
	};
};

export const getUser = () => {
	return async (dispatch) => {
		const token = localStorage.getItem('token');
		dispatch({ type: GET_USER });
		await fetch('http://localhost:4000/users/me', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${token}`,
			},
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error(response.statusText);
			})
			.then((response) => {
				dispatch({
					type: GET_USER_SUCCESS,
					payload: { ...response.result, token: token },
				});
			})
			.catch((error) => {
				dispatch({ type: GET_USER_ERR, payload: error.message });
			});
	};
};
