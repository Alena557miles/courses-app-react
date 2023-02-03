import { React } from 'react';

export function PipeDuration(props) {
	const transform = (data) => {
		let hours = Math.floor(data / 60);
		let minutes = Math.floor(data - hours * 60);

		if (hours < 10) {
			hours = '0' + hours;
		}
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		return hours + ':' + minutes;
	};
	return <span>{transform(props.children)}</span>;
}
