import styled from 'styled-components';

export const Wrapper = styled.section`
	@media (max-width: 600px) {
		div {
			h1 {
				font-size: 8rem;
			}
			h2 {
				font-size: 2rem;
			}
		}
	}
	@media (max-width: 350px) {
		div {
			h1 {
				font-size: 5rem;
			}
			h2 {
				font-size: 1rem;
			}
		}
	}
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.div`
	text-align: center;
`;

export const Title = styled.h1`
	font-size: 10rem;
	margin: 0;
	color: #f44336;
`;

export const Subtitle = styled.h2`
	font-size: 3rem;
	margin: 0;
	color: #222;
`;

export const Text = styled.p`
	font-size: 1.5rem;
	color: #444;
`;
