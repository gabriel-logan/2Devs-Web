import React, { useState } from 'react';

import { toast } from 'react-toastify';

import { CalculaImcStyles } from '../styled';

export default function ImcPage() {
	const [altura, setAltura] = useState('');
	const [peso, setPeso] = useState('');
	const [imc, setImc] = useState(0);

	let respostaAposCalc;

	const calculaImc = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		let errors = false;

		if (altura.length < 1 || peso.length < 1) {
			errors = true;
			toast.info('Nenhum campo pode ser nulo');
		}
		if (Number(altura) < 0.15) {
			errors = true;
			toast.info('Altura tem que ser maior que 15 cm');
		}
		if (Number(altura) > 3) {
			errors = true;
			toast.info('Altura tem que ser menor que 3 Metros');
		}
		const calculaResposta = Number(peso) / Number(altura) ** 2;

		if (calculaResposta > 100 || calculaResposta < 3) {
			errors = true;
			toast.error('Inpossivel obter este resultado, tente novamente com os valores corretos');
		}

		if (errors) return;

		setImc(calculaResposta);
	};

	if (imc > 24.9 || imc < 18.5) {
		respostaAposCalc = (
			<h2 id="texto_imprimido" className="red">
				{imc ? `Seu imc é ${imc.toFixed(2)}` : 'Aguardando Dados...'}
			</h2>
		);
	} else {
		respostaAposCalc = (
			<h2 id="texto_imprimido" className="green">
				{imc ? `Seu imc é ${imc.toFixed(2)}, peso normal` : 'Aguardando Dados...'}
			</h2>
		);
	}

	return (
		<CalculaImcStyles>
			<div id="imc">
				<div>
					<h1>Calculadora IMC</h1>
				</div>
				<div id="infoImc">
					<div>
						<div>
							<h3>IMG</h3>
						</div>
						<div>
							<p>Menos do que 18.5</p>
						</div>
						<div>
							<p>Entre 18.5 e 24.9</p>
						</div>
						<div>
							<p>Entre 25 e 29.9</p>
						</div>
						<div>
							<p>Entre 30 e 34.9</p>
						</div>
						<div>
							<p>Entre 35 e 39.9</p>
						</div>
						<div>
							<p>Mais do que 40</p>
						</div>
					</div>
					<div>
						<div>
							<h3>RESULTADO</h3>
						</div>
						<div>
							<p>Abaixo do peso</p>
						</div>
						<div>
							<p>Peso normal</p>
						</div>
						<div>
							<p>Sobrepeso</p>
						</div>
						<div>
							<p>Obesidade grau 1</p>
						</div>
						<div>
							<p>Obesidade grau 2</p>
						</div>
						<div>
							<p>Obesidade grau 3</p>
						</div>
					</div>
				</div>
				<div>
					<form onSubmit={calculaImc}>
						<label htmlFor="altura">
							Altura
							<input type="number" onChange={(e) => setAltura(e.target.value)} value={altura} />
						</label>
						<label htmlFor="peso">
							Peso
							<input type="number" onChange={(e) => setPeso(e.target.value)} value={peso} />
						</label>
						<button type="submit">ENVIAR</button>
					</form>
				</div>
				<div>{respostaAposCalc}</div>
			</div>
		</CalculaImcStyles>
	);
}
