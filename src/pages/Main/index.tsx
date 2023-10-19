import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainStyles = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	img {
		max-width: 200px;
	}

	h1 {
		font-size: 24px;
		margin: 16px 0;
	}

	.buttonStyle {
		background-color: #007bff;
		color: #fff;
		border: none;
		padding: 10px 20px;
		margin: 8px;
		cursor: pointer;
		font-size: 16px;
		text-decoration: none;
	}
`;

export default function Main() {
	return (
		<MainStyles>
			<img src="2Devs-Web/marca.svg" alt="logoMarca" />
			<h1>Bem-vindo ao 2Devs</h1>
			<Link
				to={'https://play.google.com/store/apps/details?id=com.gabriellogan.toDevs'}
				target="_blank"
				className="buttonStyle"
			>
				Avalie o aplicativo
			</Link>
			<h4>TA sendo feita ainda, se ainda ta feio, a culpa é do PT</h4>
		</MainStyles>
	);
}
