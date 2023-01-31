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
};

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case REGISTER_USER:
			return { ...state };
		case REGISTER_USER_SUCCESS:
			return { ...state };
		case REGISTER_USER_ERR:
			return { ...state, isAuth: false };
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
			};
		case LOGIN_USER_ERR:
			return { ...state, name: action.payload };
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
			};
		case LOGOUT_USER_ERR:
			return { ...state, name: action.payload };
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
			};
		case GET_USER_ERR:
			return { ...state, name: action.payload };
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
