import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_ERR } from './actionTypes';
import PropTypes from 'prop-types';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
	}
};

userInitialState.PropTypes = {
	isAuth: PropTypes.bool,
	name: PropTypes.string,
	email: PropTypes.string,
	token: PropTypes.string,
};
