import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Content, Title, Subtitle, Text } from './styled';

function NotFoundPage() {
	return (
		<Wrapper>
			<Content>
				<Title>404</Title>
				<Subtitle>Oops! Página não encontrada.</Subtitle>
				<Text>Desculpe, a página que você está procurando não existe.</Text>
				<br />
				<Link to="/">Ir para main</Link>
			</Content>
		</Wrapper>
	);
}

export default NotFoundPage;
