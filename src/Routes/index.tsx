import React from 'react';
// Servidores de rota do react
import { Route, Routes } from 'react-router-dom';

// Pagina 404
import NotFoundPage from '../pages/NotFoundPage';

// Minhas paginas
import Main from '../pages/Main';
import GeneralInfoPage from '../pages/Informations';
import MyNetwork from '../pages/MyNetwork';
import CpfGeneratorPage from '../pages/generators/Cpf';

export default function ConfigRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/InfoPage" element={<GeneralInfoPage />} />
			<Route path="/MyNetwork" element={<MyNetwork />} />
			<Route path="/CpfGerador" element={<CpfGeneratorPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}
