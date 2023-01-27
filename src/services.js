// registration
export const registerUser = (user) => {
	try {
		fetch('http://localhost:4000/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((response) => {
				if (response.successful) {
					localStorage.setItem('name', user.name);
					// } else if (response.errors) {
					// setError(response.result);
					// } else {
					// setError(response.result);
				}
			});
	} catch (error) {}
};
