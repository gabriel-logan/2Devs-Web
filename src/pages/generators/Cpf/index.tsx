import React, { useState } from 'react';
import styled from 'styled-components';
import { cpfIsValid } from 'multiform-validator';

const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Card = styled.div`
	width: 80%;
	background-color: #f0f0f0;
	border-radius: 10px;
	padding: 20px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const Section = styled.div`
	display: flex;
	align-items: center;
`;

const CopyButtonContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 20px;
`;

const Title = styled.h1`
	font-size: 28px;
	font-weight: bold;
	margin-bottom: 20px;
	color: #333;
`;

const Paragraph = styled.p`
	font-size: 15px;
	color: #333;
`;

const Checkbox = styled.input`
	margin: 8px;
`;

const Input = styled.input`
	height: 50px;
	border-width: 1px;
	border-color: #ccc;
	padding: 10px;
	margin-bottom: 10px;
	color: #333;
	text-align: center;
	font-size: 16px;
	background-color: #f0f0f0;
`;

const Button = styled.button`
	background-color: #007bff;
	color: #fff;
`;

const CopyButton = styled.button`
	background-color: #007bff;
	color: #fff;
`;

export default function CpfGeneratorPage() {
	const [generatedCpf, setGeneratedCpf] = useState('');
	const [cpfWithPeriod, setCpfWithPeriod] = useState(false);

	const formatCpf = (cpf: string) => {
		if (cpf && cpf.length === 11) {
			return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
		}
		return cpf;
	};

	const generateRandomCpf = () => {
		let randomCpf;
		do {
			randomCpf = Math.floor(Math.random() * 99999999999)
				.toString()
				.padStart(11, '0');
		} while (!cpfIsValid(randomCpf).isValid);
		if (cpfWithPeriod) {
			setGeneratedCpf(formatCpf(randomCpf));
		} else {
			setGeneratedCpf(randomCpf);
		}
	};

	const copyToClipboard = () => {
		if (generatedCpf) {
			const textField = document.createElement('textarea');
			textField.innerText = generatedCpf;
			document.body.appendChild(textField);
			textField.select();
			document.execCommand('copy');
			textField.remove();
		}
	};

	return (
		<Container>
			<Title>Gerador de CPF</Title>
			<Card>
				<Section>
					<Paragraph>Gerar com pontuação ?</Paragraph>
					<Checkbox
						type="checkbox"
						checked={cpfWithPeriod}
						onChange={(e) => setCpfWithPeriod(e.target.checked)}
					/>
				</Section>
				<Paragraph>CPF Gerado:</Paragraph>
				<Input type="text" value={generatedCpf} readOnly placeholder="Clique no botão abaixo" />
				<Button onClick={generateRandomCpf}>Gerar CPF</Button>
				<CopyButtonContainer>
					<CopyButton onClick={copyToClipboard}>Copiar</CopyButton>
				</CopyButtonContainer>
			</Card>
		</Container>
	);
}
