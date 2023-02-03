import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ErrorMessage } from '../../common/Error/ErrorMessage';

export function ErrorPage() {
	const { isAuth, error } = useSelector((state) => state.user);
	return (
		<div>
			<h1>Oopoops ... Something went wrong...</h1>
			{error ? <ErrorMessage error={error} /> : ''}
			{isAuth ? (
				<Link to='/courses'> &lt; Back to courses</Link>
			) : (
				<Link to='/login'> &lt; Back to login</Link>
			)}
		</div>
	);
}
