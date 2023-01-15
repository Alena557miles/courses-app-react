import React from 'react';

import { useState } from 'react';

import { AuthContext } from './context';
import { AppRouter } from './components/AppRouter/AppRouter';
import { useEffect } from 'react';

function App() {
	const [userName, setUserName] = useState('');
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		const name = localStorage.getItem('name');
		if (name) {
			setUserName(name);
			setIsAuth(true);
		}
	}, []);

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth, userName, setUserName }}>
			<AppRouter />
		</AuthContext.Provider>
	);
}
export default App;
