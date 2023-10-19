import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

import FooterStyles from './styles';

import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<FooterStyles>
			<div className="footer-container">
				<div className="left-section">
					<h3>2Devs Web</h3>
					<p>Yes yes yes skibirido</p>
				</div>
				<div className="right-section">
					<div className="social-icons">
						<Link to="https://github.com/seu-usuario-github" target="_blank">
							<FaGithub />
						</Link>
						<Link to="https://twitter.com/seu-usuario-twitter" target="_blank">
							<FaTwitter />
						</Link>
						<Link to="https://www.linkedin.com/in/seu-usuario-linkedin" target="_blank">
							<FaLinkedin />
						</Link>
					</div>
					<p>&copy; {new Date().getFullYear()} 2Devs Web</p>
				</div>
			</div>
		</FooterStyles>
	);
}
