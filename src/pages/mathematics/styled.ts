import styled from 'styled-components';

export const CalculadorasStyles = styled.section`
	.red {
		color: red;
	}
	.green {
		color: green;
	}
	.black {
		color: black;
	}
	margin-bottom: 25px;
	#tituloPagina {
		display: flex;
		justify-content: space-around;
		div {
			display: flex;
			svg {
				cursor: pointer;
				&:active {
					transform: scale(1.1);
				}
			}
		}
	}
`;

export const CalculaImcStyles = styled.section`
	margin-top: 35px;
	#imc {
		border: 1px solid gray;
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 600px;
		margin: auto;
		#infoImc {
			display: flex;
			width: 100%;
			justify-content: space-evenly;
			div {
				flex-direction: column;
			}
		}
		div {
			form {
				display: flex;
				flex-direction: column;
				align-items: center;
				label {
					margin-top: 5px;
					display: flex;
					flex-direction: column;
					align-items: center;
					text-transform: uppercase;
					input {
						font-size: 1.5rem;
						border: 1px solid #6e6381;
						padding: 5px 15px;
						margin-top: 1px;
						outline: none;
						border-radius: 5px;
						&:focus {
							border: 1px solid #1b2688;
						}
						&:hover {
							border: 1px solid #d60000;
						}
					}
				}
				button {
					margin-top: 5px;
					border: 1px solid #6e6381;
					border-radius: 5px;
					cursor: pointer;
					font-size: 1.25rem;
					width: 7rem;
					height: 3rem;
					font-weight: bold;
					&:hover {
						transform: scale(1.05);
						background: #000000;
						color: #ffffff;
					}
					&:active {
						transform: scale(1.1);
						background: #000000;
						color: #7f93dd;
					}
				}
			}
		}
	}
	@media (max-width: 600px) {
		#imc {
			width: 90%;
			div {
				form {
					label {
						input {
							font-size: 1.3rem;
						}
					}
					button {
						font-size: 1rem;
						width: 7rem;
						height: 3rem;
					}
				}
			}
		}
	}
	@media (max-width: 400px) {
		#imc {
			#infoImc {
				display: flex;
				width: 100%;
				justify-content: space-evenly;
				div {
					flex-direction: column;
					div {
						h3 {
							font-size: 1rem;
						}
						p {
							font-size: 0.8rem;
						}
					}
				}
			}
			div {
				form {
					label {
						input {
							font-size: 0.95rem;
						}
					}
					button {
						font-size: 1rem;
						width: 6rem;
						height: 2rem;
					}
				}
			}
		}
	}
`;

export const CalculadoraPadraoStyles = styled.section`
	margin-top: 15px;
	border: 1px solid;
	div {
		text-align: center;
		input {
			width: 21rem;
			height: 3rem;
			border-radius: 0.5rem;
			border: 0.1rem solid;
			outline: none;
			text-align: right;
			font-size: 2rem;
			margin-bottom: 1px;
		}
	}
	table {
		margin: auto;
		tr {
			.tdOculta {
				border: none;
			}
			#deleteNumber {
				&:hover {
					color: red;
				}
			}
			#equals {
				background-color: black;
				color: white;
				&:hover {
					background-color: white;
					color: green;
				}
			}
			td {
				padding: 15px;
				text-align: center;
				border: 1px solid #6e6e41;
				font-size: 3rem;
				width: 50px;
				border-radius: 5px;
				cursor: pointer;
				&:hover {
					color: #3498db;
				}
				svg {
					display: flex;
				}
			}
		}
	}
	@media (max-width: 400px) {
		div {
			text-align: center;
			input {
				width: 90%;
				height: 3rem;
				border-radius: 0.5rem;
				border: 0.1rem solid;
				outline: none;
				text-align: right;
				font-size: 2rem;
				margin-bottom: 1px;
			}
		}
		table {
			tr {
				td {
					padding: 5px;
				}
			}
		}
	}
`;
