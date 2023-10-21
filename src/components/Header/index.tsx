// DropdownMenu.tsx
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Drawer from 'react-modern-drawer';
import styled from 'styled-components';
import CustomDrawerContent from '../DrawerContent';
import { useLocation } from 'react-router-dom';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const location = useLocation();

	const toggleDrawer = () => {
		setIsOpen(!isOpen);
	};

	const path = location.pathname.split('/').pop(); // Obtenha o último segmento da URL como o nome da rota

	return (
		<HeaderStyles>
			<AiOutlineMenu onClick={toggleDrawer} />
			<h1>{path === '' ? 'Main' : path}</h1>
			<Drawer open={isOpen} onClose={toggleDrawer} direction="left" className="drawer">
				<img src="https://2devs.tech/marcalight.svg" alt="logoMarca" />
				<CustomDrawerContent setIsOpen={setIsOpen} />
			</Drawer>
		</HeaderStyles>
	);
};

const HeaderStyles = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	background-color: #333; /* Cor de fundo desejada */

	svg {
		color: #fff; /* Cor do ícone desejada */
		font-size: 24px;
		cursor: pointer;
	}

	h1 {
		color: #fff; /* Cor do texto desejada */
		margin-left: 10px;
	}

	.drawer {
		background-color: #333; /* Cor de fundo do Drawer desejada */
		display: flex;
		flex-direction: column;
		align-items: center;
		img {
			width: 80%;
			margin-top: 15px;
		}
	}
`;

export default Header;
