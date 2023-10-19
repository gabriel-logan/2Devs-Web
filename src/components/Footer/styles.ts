import styled from 'styled-components';

const FooterStyles = styled.footer`
	background-color: #333;
	color: white;
	padding: 35px 0;
	text-align: center;

	.footer-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;

		h3 {
			font-size: 1.5rem;
			margin-bottom: 10px;
		}

		p {
			font-size: 1rem;
		}

		.social-icons {
			a {
				color: white;
				text-decoration: none;
				font-size: 1.5rem;
				margin: 0 10px;
			}
		}
	}
`;

export default FooterStyles;
