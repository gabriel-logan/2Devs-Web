import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
//import styles 👇
import 'react-modern-drawer/dist/index.css';

const GlobalStyleComponent = createGlobalStyle`
	body{
		margin: 0;
    padding: 0;
	}
	section{
		min-height: 100vh;
	}
	button{
		cursor: pointer;
	}
	a{
		cursor: pointer;
	}
`;

export default GlobalStyleComponent;
