import PropTypes from 'prop-types';

const store = {
	user: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
	},
	courses: [],
	authors: [],
};

store.PropTypes = {
	isAuth: PropTypes.bool,
	name: PropTypes.string,
	email: PropTypes.string,
	token: PropTypes.string,
};
