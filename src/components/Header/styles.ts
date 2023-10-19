import styled from 'styled-components';

const HeaderStyled = styled.header`
	background-color: #333;
	color: white;
	padding: 20px 0;
	h1 {
		font-size: 24px;
		margin-left: 20px;
	}
	nav {
		display: flex;
		justify-content: center;
		gap: 20px;
		margin-top: 20px;

		a {
			text-decoration: none;
			color: white;
		}
	}
`;

export default HeaderStyled;
