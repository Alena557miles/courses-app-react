import { combineReducers } from 'redux';

import { coursesReducer } from './courses/reducer';
import { authorReducer } from './authors/reducer';
import { userReducer } from './user/reducer';

export default combineReducers({
	courses: coursesReducer,
	authors: authorReducer,
	user: userReducer,
});
