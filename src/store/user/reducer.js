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
} from './actionTypes';
import PropTypes from 'prop-types';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case REGISTER_USER:
			return { ...state };
		case REGISTER_USER_SUCCESS:
			return {
				...state,
				isAuth: false,
				name: '',
				email: '',
			};
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
			};
		case LOGOUT_USER_ERR:
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
