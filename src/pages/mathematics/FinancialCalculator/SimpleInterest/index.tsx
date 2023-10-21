import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function SimpleInterestPage() {
	const escolheJuroSimples = () => {
		const simplesEscolhe = document.querySelector('#simples_escolhe-calc') as HTMLSelectElement;
		const juroSimples = document.querySelector('.calc_juros_simples') as HTMLOptionElement;
		const capitalInicial = document.querySelector('.calc_capital_inicial') as HTMLOptionElement;
		const taxaDeJuros = document.querySelector('.calc_taxa_juros') as HTMLOptionElement;

		if (simplesEscolhe.value === '1') {
			juroSimples.style.display = 'block';
		} else {
			juroSimples.style.display = 'none';
		}
		if (simplesEscolhe.value === '2') {
			capitalInicial.style.display = 'block';
		} else {
			capitalInicial.style.display = 'none';
		}
		if (simplesEscolhe.value === '3') {
			taxaDeJuros.style.display = 'block';
		} else {
			taxaDeJuros.style.display = 'none';
		}
	};
	const [capitalJuros, setCapitalJuros] = useState('');
	const [taxaJuros, setTaxaJuros] = useState('');
	const [tempoJuros, setTempoJuros] = useState('');

	const [calculoJurosSimples, setCalculoJurosSimples] = useState(0);
	const [montateCalculoJurosSimples, setMontanteCalculoJurosSimples] = useState(0);

	const [jurosCapital, setJurosCapital] = useState('');
	const [jurosTaxa, setJurosTaxa] = useState('');
	const [jurosTempo, setJurostempo] = useState('');

	const [calculaCapital, setCalculaCapital] = useState(0);

	const [taxaCapital, setTaxaCapital] = useState('');
	const [taxaJurosJuros, setTaxaJurosJuros] = useState('');
	const [taxaTempo, setTaxaTempo] = useState('');

	const [calculaTJuros, setCalculaTJuros] = useState(0);

	const calculaJurosSimples = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let errors = false;

		if (capitalJuros === '' || taxaJuros === '' || tempoJuros === '') {
			errors = true;
			toast.info('Nenhum campo pode ser vasio');
		}

		const calculoJuros = Number(capitalJuros) * (Number(taxaJuros) / 100) * Number(tempoJuros);
		const calcMontante = Number(capitalJuros) + Number(calculoJuros);

		if (errors) return;

		setCalculoJurosSimples(calculoJuros);

		setMontanteCalculoJurosSimples(calcMontante);
	};
	const calculaCapitalInicial = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let errors = false;
		if (jurosCapital === '' || jurosTaxa === '' || jurosTempo === '') {
			toast.info('Nenhum campo pode ser vasio');
			errors = true;
		}
		if (errors) return;

		const calculoCapital = Number(jurosCapital) / ((Number(jurosTaxa) / 100) * Number(jurosTempo));

		setCalculaCapital(calculoCapital);
	};
	const calculaTaxaDeJuros = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let errors = false;

		if (taxaCapital === '' || taxaJurosJuros === '' || taxaTempo === '') {
			toast.info('Nenhum campo pode ser vasio');
			errors = true;
		}
		// eslint-disable-next-line max-len
		const calculoTJuros =
			(Number(taxaJurosJuros) / (Number(taxaCapital) * Number(taxaTempo))) * 100;
		if (errors) return;

		setCalculaTJuros(calculoTJuros);
	};

	return (
		<div id="juro_simples">
			<select id="simples_escolhe-calc" onChange={escolheJuroSimples} className="select_interno">
				<option value="0">Escolha a calculadora</option>
				<option value="1">Calcular Juros Simples</option>
				<option value="2">Calcular Capital Inicial</option>
				<option value="3">Calcular Taxa de juros</option>
			</select>
			<div className="calc_juros_simples off">
				<form onSubmit={calculaJurosSimples}>
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
					{calculoJurosSimples ? <h2>Juros é {calculoJurosSimples}</h2> : <h2>Juros é </h2>}
					<h2>Montante é {montateCalculoJurosSimples}</h2>
				</div>
			</div>
			<div className="calc_capital_inicial off">
				<form onSubmit={calculaCapitalInicial}>
					<label htmlFor="none">
						Digite o valor do Juros
						<input
							placeholder="Ex: 4,2"
							value={jurosCapital}
							onChange={(e) => {
								setJurosCapital(e.target.value);
							}}
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
					<h2>O valor do capital é {calculaCapital}</h2>
				</div>
			</div>
			<div className="calc_taxa_juros off">
				<form onSubmit={calculaTaxaDeJuros}>
					<label htmlFor="none">
						Digite o valor do Capital
						<input
							placeholder="Ex: 50"
							value={taxaCapital}
							onChange={(e) => {
								setTaxaCapital(e.target.value);
							}}
						/>
					</label>
					<label htmlFor="none">
						Digite o valor do Juros
						<input
							placeholder="Ex: 4,2"
							value={taxaJurosJuros}
							onChange={(e) => {
								setTaxaJurosJuros(e.target.value);
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
					<h2>O valor da taxa de juros é {calculaTJuros}%</h2>
				</div>
			</div>
		</div>
	);
}
