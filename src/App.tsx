import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import ConfigRoutes from './Routes';

import { ToastContainer } from 'react-toastify';
import GlobalStyleComponent from './styles/global';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<ToastContainer autoClose={2000} />
			<GlobalStyleComponent />
			<Header />
			<ConfigRoutes />
			<Footer />
		</Router>
	);
}

export default App;
