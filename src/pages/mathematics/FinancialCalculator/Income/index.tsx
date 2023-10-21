import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function IncomePage() {
	const [capIni, setCapIni] = useState('');
	const [capAdd, setCapAdd] = useState('');
	const [tJuros, setTJuros] = useState('');
	const [tempo, setTempo] = useState('');

	const [valorCalculado, setValorCalculado] = useState(0);
	const [valorInvestido, setValorInvestido] = useState(0);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		let errors = false;

		if (capAdd.length < 1) {
			errors = true;
			toast.info('Use 0 como alternativa para valor mensal');
		}

		if (capIni.length < 1 || tJuros.length < 1 || tempo.length < 1) {
			errors = true;
			toast.error('Nenhum campo pode ser vasio');
		}

		if (errors) return;

		// M = C x ( 1 + i ) ^ n

		const valorConvertidoTJuros = Number(tJuros) / 100 / 12;

		let novoTempoValue = Number(tempo);

		const listaValueDepositadoComTaxa = [];

		const listaDeValoresDepositadosSemTaxa = [];

		for (let index = 1; index < Number(tempo) + 1; index += 1) {
			novoTempoValue -= 1;

			listaDeValoresDepositadosSemTaxa.push(Number(capAdd));

			const valorDepositado = Number(capAdd) * (1 + valorConvertidoTJuros) ** novoTempoValue;
			listaValueDepositadoComTaxa.push(valorDepositado);
		}

		// eslint-disable-next-line max-len
		const valorTotalDepositadoMensalmente = listaDeValoresDepositadosSemTaxa.reduce(
			(soma, i) => soma + i,
		);

		const valorTotalDepositado = Number(valorTotalDepositadoMensalmente) + Number(capIni);

		setValorInvestido(valorTotalDepositado);

		const valorDepositadoSomado = listaValueDepositadoComTaxa.reduce((soma, i) => soma + i);

		// eslint-disable-next-line max-len
		const calcMontante =
			Number(capIni) * (1 + valorConvertidoTJuros) ** Number(tempo) + valorDepositadoSomado;
		setValorCalculado(calcMontante);
	}

	return (
		<div id="rendimento">
			<form onSubmit={handleSubmit}>
				<label htmlFor="none">
					Digite o valor do Capital inicial
					<input
						placeholder="EX: 500"
						type="number"
						value={capIni}
						onChange={(e) => {
							setCapIni(e.target.value);
						}}
					/>
				</label>
				<label htmlFor="none">
					Digite o valor aplicado por mês
					<input
						placeholder="EX: 500"
						type="number"
						value={capAdd}
						onChange={(e) => {
							setCapAdd(e.target.value);
						}}
					/>
				</label>
				<label htmlFor="none">
					Digite o valor da Taxa de juros ao ano
					<input
						placeholder="EX: 11,6"
						type="number"
						value={tJuros}
						onChange={(e) => {
							setTJuros(e.target.value);
						}}
					/>
				</label>
				<label htmlFor="none">
					Digite o valor do Tempo -OBS: em meses
					<input
						placeholder="EX: 12"
						type="number"
						value={tempo}
						onChange={(e) => {
							setTempo(e.target.value);
						}}
					/>
				</label>
				<button type="submit">Calcular</button>
			</form>
			<div>
				{valorCalculado ? (
					<>
						<h2>
							Você investiu no total <span>{valorInvestido.toFixed(2)} R$</span>, com o rendimento
							de <span>{tJuros}%</span> você terá no final{' '}
							<span className="green">
								{valorCalculado.toFixed(2)}
								R$
							</span>
						</h2>
						<h2>
							{' '}
							em {tempo} meses, equivalente a{' '}
							{Number.isInteger(Number(tempo) / 12)
								? Number(tempo) / 12
								: (Number(tempo) / 12).toFixed(1)}{' '}
							ano(s)
						</h2>
					</>
				) : (
					<>
						<h2>Rendimento Bruto = Aguardando valores...</h2>
						<h2>
							{' '}
							{tempo} meses, equivalente a{' '}
							{Number.isInteger(Number(tempo) / 12)
								? Number(tempo) / 12
								: (Number(tempo) / 12).toFixed(1)}{' '}
							ano(s)
						</h2>
					</>
				)}
			</div>
		</div>
	);
}
