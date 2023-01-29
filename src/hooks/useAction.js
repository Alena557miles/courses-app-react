import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CoursesActionCreators from '../store/courses/actionCreators';

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(CoursesActionCreators, dispatch);
};
