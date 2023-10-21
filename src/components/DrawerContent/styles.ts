import styled from 'styled-components';

import getThemeColor from '../../configs/colors';

const DrawerMenuStyles = styled.div`
	margin-top: 35px;
	display: flex;
	justify-content: center;
	.scrollView {
		margin-top: 10px;
		max-height: 500px; /* Defina uma altura máxima para ativar a rolagem vertical */
		overflow-y: auto; /* Adicione a propriedade para ativar a rolagem vertical */
		&::-webkit-scrollbar {
			width: 0;
			background: transparent; /* Ocultar a barra de rolagem no Webkit (Chrome, Safari, etc.) */
		}
		.menuItem {
			margin-bottom: 10px;
			border-width: 0.5px;
			padding: 5px;
			border-radius: 4px;
			background-color: ${getThemeColor('dark', 'cardBackground')};
			min-height: 60px;
			display: flex;
			align-items: center;
			justify-content: center;
			.item {
				padding-block: 2px;
				h1 {
					font-weight: bold;
					margin-block: 5px;
					font-size: 16px;
					padding-inline: 16px;
					color: ${getThemeColor('dark', 'title')};
				}
			}
			.btn-subMenu {
				background-color: ${getThemeColor('dark', 'tertiaryBackground')};
				border-width: 0.25px;
				border-radius: 4px;

				.subMenu {
					padding-block: 14px;
					margin-block: 5px;
					display: flex;
					justify-content: center;
					h2 {
						font-size: 15px;
						color: ${getThemeColor('dark', 'title')};
					}
				}
			}
		}
	}
`;

export default DrawerMenuStyles;
