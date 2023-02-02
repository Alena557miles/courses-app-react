import {
	REGISTER_USER,
	LOGIN_USER,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_ERR,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_ERR,
	LOGOUT_USER,
	LOGOUT_USER_SUCCESS,
	LOGOUT_USER_ERR,
	GET_USER,
	GET_USER_SUCCESS,
	GET_USER_ERR,
} from './actionTypes';
import PropTypes from 'prop-types';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
	error: null,
};

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case REGISTER_USER:
			return { ...state };
		case REGISTER_USER_SUCCESS:
			return { ...state, error: null };
		case REGISTER_USER_ERR:
			return { ...state, isAuth: false, error: action.payload };
		case LOGIN_USER:
			return { ...state };
		case LOGIN_USER_SUCCESS:
			return {
				...state,
				isAuth: true,
				name: action.payload.user.name,
				email: action.payload.user.email,
				role: action.payload.user.role,
				token: action.payload.result,
				error: null,
			};
		case LOGIN_USER_ERR:
			return { ...state, error: action.payload };
		case LOGOUT_USER:
			return { ...state };
		case LOGOUT_USER_SUCCESS:
			return {
				...state,
				isAuth: false,
				name: '',
				email: '',
				token: '',
				role: '',
				password: '',
				error: null,
			};
		case LOGOUT_USER_ERR:
			return { ...state, error: action.payload };
		case GET_USER:
			return { ...state };
		case GET_USER_SUCCESS:
			return {
				...state,
				isAuth: true,
				name: action.payload.name ? action.payload.name : 'ADMIN',
				email: action.payload.email,
				password: action.payload.password,
				role: action.payload.role,
				token: action.payload.token,
				error: null,
			};
		case GET_USER_ERR:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

userInitialState.PropTypes = {
	isAuth: PropTypes.bool,
	name: PropTypes.string,
	email: PropTypes.string,
	token: PropTypes.string,
};
