import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function CompoundInterestPage() {
	const escolheJuroComposto = () => {
		const compostoEscolhe = document.querySelector('#composto_escolhe-calc') as HTMLSelectElement;
		const juroComposto = document.querySelector('.calc_juros_composto') as HTMLOptionElement;
		const capitalInicial = document.querySelector(
			'.calc_capital_inicialcomposto',
		) as HTMLOptionElement;
		const taxaDeJuros = document.querySelector('.calc_taxa_juroscomposto') as HTMLOptionElement;

		if (compostoEscolhe.value === '1') {
			juroComposto.style.display = 'block';
		} else {
			juroComposto.style.display = 'none';
		}
		if (compostoEscolhe.value === '2') {
			capitalInicial.style.display = 'block';
		} else {
			capitalInicial.style.display = 'none';
		}
		if (compostoEscolhe.value === '3') {
			taxaDeJuros.style.display = 'block';
		} else {
			taxaDeJuros.style.display = 'none';
		}
	};

	const [capitalJuros, setCapitalJuros] = useState('');
	const [taxaJuros, setTaxaJuros] = useState('');
	const [tempoJuros, setTempoJuros] = useState('');

	const [calculoJurosComposto, setCalculoJurosComposto] = useState(0);
	const [montateCalculoJurosComposto, setMontanteCalculoJurosComposto] = useState(0);

	const [montanteCapital, setMontanteCapital] = useState('');
	const [jurosTaxa, setJurosTaxa] = useState('');
	const [jurosTempo, setJurostempo] = useState('');

	const [calculaCapital, setCalculaCapital] = useState(0);

	const [montanteTaxa, setMontanteTaxa] = useState('');
	const [capitalTaxa, setCapitalTaxa] = useState('');
	const [taxaTempo, setTaxaTempo] = useState('');

	const [calculaTJuros, setCalculaTJuros] = useState(0);

	const calculaJurosComposto = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let errors = false;

		if (capitalJuros === '' || taxaJuros === '' || tempoJuros === '') {
			errors = true;
			toast.info('Nenhum campo pode ser vasio');
		}

		// eslint-disable-next-line max-len
		const calcMontante = Number(capitalJuros) * (1 + Number(taxaJuros) / 100) ** Number(tempoJuros);
		const calculoJuros = calcMontante - Number(capitalJuros);

		if (errors) return;

		setCalculoJurosComposto(calculoJuros);

		setMontanteCalculoJurosComposto(calcMontante);
	};
	const calculaCapitalInicial = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let errors = false;
		if (montanteCapital === '' || jurosTaxa === '' || jurosTempo === '') {
			toast.info('Nenhum campo pode ser vasio');
			errors = true;
		}
		if (errors) return;

		// eslint-disable-next-line max-len
		const calculoCapital =
			Number(montanteCapital) / (1 + Number(jurosTaxa) / 100) ** Number(jurosTempo);

		setCalculaCapital(calculoCapital);
	};
	const calculaTaxaDeJuros = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let errors = false;

		if (montanteTaxa === '' || capitalTaxa === '' || taxaTempo === '') {
			toast.info('Nenhum campo pode ser vasio');
			errors = true;
		}
		// eslint-disable-next-line max-len
		const calculoTJuros =
			((Number(montanteTaxa) / Number(capitalTaxa)) ** (1 / Number(taxaTempo)) - 1) * 100;
		if (errors) return;

		setCalculaTJuros(calculoTJuros);
	};
	return (
		<div id="juro_composto">
			<select id="composto_escolhe-calc" onChange={escolheJuroComposto} className="select_interno">
				<option value="0">Escolha a calculadora</option>
				<option value="1">Calcular Juros Composto</option>
				<option value="2">Calcular Capital Inicial</option>
				<option value="3">Calcular Taxa de juros</option>
			</select>
			<div className="calc_juros_composto off">
				<form onSubmit={calculaJurosComposto}>
					<label htmlFor="none">
						Digite o valor do Capital
						<input
							placeholder="Ex: 50"
							value={capitalJuros}
							onChange={(e) => {
								setCapitalJuros(e.target.value);
							}}
						/>
					</label>
					<label htmlFor="none">
						Digite o valor da Taxa de juros
						<input
							placeholder="Ex: 11"
							value={taxaJuros}
							onChange={(e) => {
								setTaxaJuros(e.target.value);
							}}
						/>
					</label>
					<label htmlFor="none">
						Digite o valor do Tempo
						<input
							placeholder="Ex: 5"
							value={tempoJuros}
							onChange={(e) => {
								setTempoJuros(e.target.value);
							}}
						/>
					</label>
					<button type="submit">Calcular</button>
				</form>
				<div>
					<h2>
						JUROS É {calculoJurosComposto.toFixed(2)} e o MONTANTE{' '}
						{montateCalculoJurosComposto.toFixed(2)}
					</h2>
				</div>
			</div>
			<div className="calc_capital_inicialcomposto off">
				<form onSubmit={calculaCapitalInicial}>
					<label htmlFor="none">
						Digite o valor do Montante
						<input
							placeholder="Ex: 540"
							value={montanteCapital}
							onChange={(e) => setMontanteCapital(e.target.value)}
						/>
					</label>
					<label htmlFor="none">
						Digite o valor da Taxa de juros
						<input
							placeholder="Ex: 11"
							value={jurosTaxa}
							onChange={(e) => {
								setJurosTaxa(e.target.value);
							}}
						/>
					</label>
					<label htmlFor="none">
						Digite o valor do Tempo
						<input
							placeholder="Ex: 5"
							value={jurosTempo}
							onChange={(e) => {
								setJurostempo(e.target.value);
							}}
						/>
					</label>
					<button type="submit">Calcular</button>
				</form>
				<div>
					<h2>Capital inicial é {calculaCapital.toFixed(2)}</h2>
				</div>
			</div>
			<div className="calc_taxa_juroscomposto off">
				<form onSubmit={calculaTaxaDeJuros}>
					<label htmlFor="none">
						Digite o valor do Capital
						<input
							placeholder="Ex: 50"
							value={capitalTaxa}
							onChange={(e) => {
								setCapitalTaxa(e.target.value);
							}}
						/>
					</label>
					<label htmlFor="none">
						Digite o valor do Montante
						<input
							placeholder="Ex: 5,3"
							value={montanteTaxa}
							onChange={(e) => {
								setMontanteTaxa(e.target.value);
							}}
						/>
					</label>
					<label htmlFor="none">
						Digite o valor do Tempo
						<input
							placeholder="Ex: 5"
							value={taxaTempo}
							onChange={(e) => {
								setTaxaTempo(e.target.value);
							}}
						/>
					</label>
					<button type="submit">Calcular</button>
				</form>
				<div>
					{calculaTJuros ? (
						<h2>A taxa de juros é {calculaTJuros.toFixed(2)}%</h2>
					) : (
						<h2>Aguardando dados</h2>
					)}
				</div>
			</div>
		</div>
	);
}
