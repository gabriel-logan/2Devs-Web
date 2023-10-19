import React, { useState } from 'react';
import drawerMenu from './drawerMenu';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CustomDrawerContentStyles = styled.nav`
	padding: 20px;
	background-color: #333;
	color: #fff;

	.button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		width: 100%;
		text-align: left;
		padding: 10px 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 10px 0;
		flex-direction: column;
		text-decoration: none;

		&:hover {
			background-color: #444;
		}

		div {
			display: flex;
			align-items: center;

			svg {
				margin-left: 10px;
			}
		}

		.subItems {
			display: flex;
			align-items: center;
			flex-direction: column;
			background: tan;
		}

		h1 {
			margin: 0;
			font-size: 16px;
		}
	}
`;

export default function CustomDrawerContent() {
	const [menuIndex, setMenuIndex] = useState(-1);

	return (
		<CustomDrawerContentStyles>
			{drawerMenu.map((item, index) => {
				const rota = item.route as string;
				return (
					<div key={index}>
						<Link
							className="button"
							to={rota === 'Main' ? '/' : rota}
							onClick={() => {
								setMenuIndex(menuIndex === index ? -1 : index);
							}}
						>
							<div>
								<h1>{item.title}</h1>
							</div>
							{menuIndex === index && (
								<div className="subItems">
									{item.menuList?.map((subItem, subIndex) => (
										<Link className="button" to={subItem.route} key={subIndex}>
											<div>
												<h1>{subItem.title}</h1>
											</div>
										</Link>
									))}
								</div>
							)}
						</Link>
					</div>
				);
			})}
		</CustomDrawerContentStyles>
	);
}
