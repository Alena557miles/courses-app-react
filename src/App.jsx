import React from 'react';

import { useState } from 'react';

import { AuthContext } from './context';
import { AppRouter } from './components/AppRouter/AppRouter';

function App() {
	const [userName, setUserName] = useState('');
	const [isAuth, setIsAuth] = useState(false);

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth, userName, setUserName }}>
			<AppRouter />
		</AuthContext.Provider>
	);
}
export default App;
