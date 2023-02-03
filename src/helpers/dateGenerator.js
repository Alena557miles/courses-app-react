import { React } from 'react';

export function DateGenerator(props) {
	return <span>{new Date(props.children).toLocaleDateString('en-GB')}</span>;
}
