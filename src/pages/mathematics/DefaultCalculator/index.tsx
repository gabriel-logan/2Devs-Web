import React, { useState } from 'react';
import { AiOutlineClear } from 'react-icons/ai';
import { FiDelete } from 'react-icons/fi';
import { FaEquals } from 'react-icons/fa';

import { toast } from 'react-toastify';
import { CalculadoraPadraoStyles } from '../styled';

export default function DefaultCalculatorPage() {
	const [displayValue, setDisplayValue] = useState('');

	const limpaInput = () => {
		setDisplayValue('');
	};

	const limpaUltimoDigito = () => {
		const newValor = String(displayValue).slice(0, -1);

		setDisplayValue(newValor);
	};

	const valoresClicados = (e: any) => {
		setDisplayValue(displayValue + e.target.innerText);
	};

	const calculaConta = () => {
		// eslint-disable-next-line no-eval
		const conta = eval(displayValue);

		if (!conta) {
			toast.error('Conta Invalida');
		}

		setDisplayValue(conta);
	};

	const calculaContaEnter = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// eslint-disable-next-line no-eval
		const conta = eval(displayValue);

		if (!conta) {
			toast.error('Conta Invalida');
		}

		setDisplayValue(conta);
	};

	return (
		<CalculadoraPadraoStyles id="calc_padrao">
			<div>
				<h1>Calculadora Logan</h1>
			</div>
			<div>
				<form onSubmit={(e) => calculaContaEnter(e)}>
					<input
						value={displayValue}
						onChange={(e) => {
							setDisplayValue(e.target.value);
						}}
						id="calculaPadrao"
					/>
				</form>
			</div>
			<table>
				<tbody>
					<tr>
						<td onClick={valoresClicados}>(</td>
						<td onClick={valoresClicados}>)</td>
						<td>
							<AiOutlineClear onClick={limpaInput} />
						</td>
						<td id="deleteNumber" onClick={limpaUltimoDigito}>
							<FiDelete />
						</td>
					</tr>
					<tr>
						<td onClick={valoresClicados}>7</td>
						<td onClick={valoresClicados}>8</td>
						<td onClick={valoresClicados}>9</td>
						<td onClick={valoresClicados}>/</td>
					</tr>
					<tr>
						<td onClick={valoresClicados}>6</td>
						<td onClick={valoresClicados}>5</td>
						<td onClick={valoresClicados}>4</td>
						<td onClick={valoresClicados}>*</td>
					</tr>
					<tr>
						<td onClick={valoresClicados}>3</td>
						<td onClick={valoresClicados}>2</td>
						<td onClick={valoresClicados}>1</td>
						<td onClick={valoresClicados}>-</td>
					</tr>
					<tr>
						<td onClick={valoresClicados}>0</td>
						<td onClick={valoresClicados}>.</td>
						<td id="equals">
							<FaEquals onClick={calculaConta} />
						</td>
						<td onClick={valoresClicados}>+</td>
					</tr>
				</tbody>
			</table>
		</CalculadoraPadraoStyles>
	);
}
