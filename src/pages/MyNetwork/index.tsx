import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.section`
	flex: 1;
	padding: 20px;
	background-color: #f0f0f0;
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 20px;
	color: #333;
`;

const DivContainer = styled.div`
	background-color: #fff;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const InfoContainer = styled.div`
	margin: 10px 0;
`;

const InfoLabel = styled.p`
	font-size: 16px;
	font-weight: bold;
	color: #333;
`;

const InfoText = styled.p`
	font-size: 16px;
	color: #333;
`;

const CopyButton = styled.button`
	padding: 5px;
`;

const Row = styled.div`
	display: flex;
	align-items: center;
`;

const MyNetwork = () => {
	const [ipAddressExternal, setIpAddressExternal] = useState(null);

	useEffect(() => {
		const fetchNetworkInfo = async () => {
			try {
				const ipExternal = await fetchExternalIpAddress();
				setIpAddressExternal(ipExternal);
			} catch (error) {
				console.error(error);
			}
		};

		fetchNetworkInfo();
	}, []);

	const fetchExternalIpAddress = async () => {
		const response = await axios.get('https://api.ipify.org?format=json');
		return response.data.ip;
	};

	const copyToClipboard = (textToCopy: string) => {
		const textField = document.createElement('textarea');
		textField.innerText = textToCopy;
		document.body.appendChild(textField);
		textField.select();
		document.execCommand('copy');
		textField.remove();
	};

	return (
		<Container>
			<Title>Informações de Rede</Title>
			<DivContainer>
				<InfoContainer>
					<InfoLabel>Endereço IP da rede:</InfoLabel>
					<Row>
						<InfoText>{ipAddressExternal || 'Carregando...'}</InfoText>
						<CopyButton onClick={() => copyToClipboard(ipAddressExternal || '000.000.000.000')}>
							Copiar
						</CopyButton>
					</Row>
				</InfoContainer>
			</DivContainer>
		</Container>
	);
};

export default MyNetwork;
