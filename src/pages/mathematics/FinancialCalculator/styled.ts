import styled from 'styled-components';

const FinaceiraStyles = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	select {
		height: 50px;
		border: 1px solid rgba(102, 102, 238, 0.74);
		border-radius: 5px;
		font-size: 1rem;
		width: 100%;
		cursor: pointer;
	}
	.select_interno {
		margin-top: 5px;
		width: 100%;
		height: 30px;
		border: 1px solid rgba(21, 21, 71, 0.74);
		border-radius: 5px;
		cursor: pointer;
	}
	@media (max-width: 600px) {
		.select_interno {
			width: 90%;
		}
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 25px;
		label {
			margin-top: 5px;
			display: flex;
			flex-direction: column;
		}
	}
	input {
		border: 1px solid #6e6381;
		padding: 5px 15px;
		margin-top: 5px;
		outline: none;
		border-radius: 5px;
		resize: none;
		width: 300px;
		height: 30px;
		font-size: 1.5rem;
		&:hover {
			border: 1px solid #d60000;
		}
		&:focus {
			border: 1px solid #1b2688;
		}
	}
	@media (max-width: 600px) {
		input {
			width: 80%;
		}
	}
	button {
		border: 1px solid #6e6381;
		border-radius: 5px;
		cursor: pointer;
		font-size: 1.25rem;
		height: 3rem;
		font-weight: bold;
		margin-top: 5px;
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
	#juro_simples {
		display: none;
	}
	#juro_composto {
		display: none;
	}
	#rendimento {
		display: none;
		div {
			h2 {
				text-align: center;
				max-width: 600px;
				font-size: 1.6rem;
			}
		}
	}
	.off {
		display: none;
	}
`;

export default FinaceiraStyles;
