import React from 'react';
import { Link } from 'react-router-dom';

export function ErrorPage() {
	return (
		<div>
			<h1>Oopoops ... 404 Page</h1>
			<Link to='/login'> &lt; Back to login</Link>
		</div>
	);
}
