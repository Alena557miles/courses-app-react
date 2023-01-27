import { combineReducers } from 'redux';

import { coursesReducer } from './courses/reducer';
import { authorReducer } from './authors/reducer';

export default combineReducers({
	courses: coursesReducer,
	authors: authorReducer,
});
