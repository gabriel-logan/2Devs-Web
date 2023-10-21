import React, { useState } from 'react';

import drawerMenu from './drawerMenu';

import { useNavigate } from 'react-router-dom';
import DrawerMenuStyles from './styles';

interface CustomDrawerContentProps {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomDrawerContent = ({ setIsOpen }: CustomDrawerContentProps) => {
	const [menuIndex, setMenuIndex] = useState(-1);

	const navigation = useNavigate();

	return (
		<DrawerMenuStyles>
			<div className="scrollView">
				{drawerMenu.map((item, index) => (
					<div key={index} className="menuItem">
						<div
							onClick={() => {
								if (!item.menuList) {
									setIsOpen(false);
									if (item.route === 'Main') {
										navigation('/');
									} else {
										navigation(item.route);
									}
								}
								setMenuIndex(menuIndex === index ? -1 : index);
							}}
							style={{ cursor: 'pointer' }}
						>
							<div className="item">
								<h1>{item.title}</h1>
							</div>
							{menuIndex === index && (
								<>
									{item.menuList?.map((subItem, subIndex) => (
										<div
											className="btn-subMenu"
											key={subIndex}
											onClick={() => {
												setIsOpen(false);
												navigation(subItem.route);
											}}
										>
											<div className="subMenu">
												<h2>{subItem.title}</h2>
											</div>
										</div>
									))}
								</>
							)}
						</div>
					</div>
				))}
			</div>
		</DrawerMenuStyles>
	);
};

export default CustomDrawerContent;
