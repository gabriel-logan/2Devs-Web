import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	flex: 1;
	padding: 15px;
	background-color: yourBackgroundColor; /* Substitua pela cor desejada */
`;

const Section = styled.div`
	margin-bottom: 20px;
	background-color: yourBackgroundColor; /* Substitua pela cor desejada */
	padding: 15px;
	border-radius: 10px;
	box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
`;

const SectionTitle = styled.h1`
	font-size: 24px;
	font-weight: bold;
	color: yourTitleColor; /* Substitua pela cor desejada */
`;

const SectionText = styled.p`
	font-size: 16px;
	color: yourTextColor; /* Substitua pela cor desejada */
`;

const GitHubButton = styled.button`
	background-color: yourButtonColor; /* Substitua pela cor desejada */
	padding: 10px;
	border-radius: 5px;
	margin-top: 10px;
	color: yourButtonTextColor; /* Substitua pela cor desejada */
	text-align: center;
	cursor: pointer;
`;

const LinkButton = styled.button`
	background-color: #3887db;
	padding: 10px;
	border-radius: 5px;
	margin-top: 10px;
	height: 45px;
	justify-content: center;
	color: white;
	text-align: center;
	font-size: 14px;
	cursor: pointer;
`;

export default function GeneralInfoPage() {
	return (
		<Container>
			<Section>
				<SectionTitle>Informações Gerais</SectionTitle>
			</Section>
			<Section>
				<SectionText>Bem-vindo à nossa aplicação de exemplo</SectionText>
			</Section>
			<Section>
				<SectionText>Se você precisar de uma validação específica</SectionText>
				<SectionText>Se ocorreu algum erro, entre em contato abaixo</SectionText>
				<div>
					<SectionText>Se quiser contribuir, pode fazer um commit</SectionText>
					<SectionText>Este código é open source</SectionText>
					<GitHubButton
						onClick={() => window.open('https://github.com/gabriel-logan/2Devs-Mobile')}
					>
						Ir para o repositório GitHub
					</GitHubButton>
					<SectionText style={{ marginTop: '15px' }}>
						Você também pode me ajudar no Buy Me a Coffee
					</SectionText>
					<GitHubButton onClick={() => window.open('https://www.buymeacoffee.com/gabriellogan')}>
						Buy me a coffee
					</GitHubButton>
				</div>
			</Section>
			<Section>
				<SectionTitle>Contatos</SectionTitle>
			</Section>
			<Section>
				<SectionText>E-mail: contato@exemplo.com</SectionText>
			</Section>
			<LinkButton onClick={() => window.open('https://2devs.tech/PrivacyPolicy')}>
				Políticas de Privacidade
			</LinkButton>
			<LinkButton onClick={() => window.open('https://2devs.tech/Terms')}>Termos de Uso</LinkButton>
			<Section style={{ marginTop: '10px' }}>
				<SectionTitle>Contribuidores</SectionTitle>
			</Section>
			<Section>
				<SectionText>Gabriel Logan</SectionText>
				{/* Adicione outros contribuidores aqui */}
			</Section>
		</Container>
	);
}
