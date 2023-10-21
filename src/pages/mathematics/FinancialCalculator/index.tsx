/* eslint-disable no-unused-vars */
import React from 'react';

import FinaceiraStyles from './styled';

import JurosSimples from './SimpleInterest';
import JurosComposto from './CompoundInterest';
import Rendimento from './Income';

export default function FinancialCalculatorPage() {
	const escolheCalc = () => {
		const juroSimples = document.querySelector('#juro_simples') as HTMLOptionElement;
		const juroComposto = document.querySelector('#juro_composto') as HTMLOptionElement;
		const rendimento = document.querySelector('#rendimento') as HTMLOptionElement;
		const selectCalc = document.querySelector('#selectCalc') as HTMLSelectElement;

		if (selectCalc.value === '1') {
			juroSimples.style.display = 'block';
		} else {
			juroSimples.style.display = 'none';
		}
		if (selectCalc.value === '2') {
			juroComposto.style.display = 'block';
		} else {
			juroComposto.style.display = 'none';
		}
		if (selectCalc.value === '3') {
			rendimento.style.display = 'block';
		} else {
			rendimento.style.display = 'none';
		}
	};

	return (
		<FinaceiraStyles id="calc_financeira">
			<div>
				<h1>Calculadora Financeira</h1>
			</div>
			<div id="select">
				<select id="selectCalc" onChange={escolheCalc}>
					<option value="0">Seleciona qual função quer calcular !</option>
					<option value="1">Juros Simples</option>
					<option value="2">Juros Composto</option>
					<option value="3">Rendimento</option>
				</select>
			</div>
			<JurosSimples />
			<JurosComposto />
			<Rendimento />
		</FinaceiraStyles>
	);
}
