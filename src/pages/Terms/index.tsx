import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageWrapper = styled.section`
	font-family: Arial, sans-serif;
	background-color: #f0f0f0;
	text-align: center;
`;

const Container = styled.div`
	max-width: 800px;
	margin: 0 auto;
	padding: 20px;
	background-color: #fff;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
	color: #333;
`;

const Paragraph = styled.p`
	color: #666;
	text-align: left;
`;

const LinksContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const LinkBtn = styled(Link)`
	margin-top: 35px;
	margin-bottom: 20px;
`;

function TermsOfUse() {
	return (
		<PageWrapper>
			<Container>
				<Heading>Terms of Use</Heading>
				<Paragraph>Last Updated: October 11, 2023</Paragraph>

				<Paragraph>
					<strong>1. Acceptance of Terms</strong>
				</Paragraph>
				<Paragraph>
					By accessing or using the "2Devs" application ("the App"), you agree to be bound by these
					Terms of Use. If you do not agree to these terms, please do not use the App.
				</Paragraph>

				<Paragraph>
					<strong>2. User Responsibilities</strong>
				</Paragraph>
				<Paragraph>
					You are solely responsible for your actions and conduct while using the App. You agree not
					to use the App for any illegal, harmful, or unethical purposes. You must comply with all
					applicable laws and regulations.
				</Paragraph>

				<Paragraph>
					<strong>3. Intellectual Property</strong>
				</Paragraph>
				<Paragraph>
					The content, features, and functionality of the App are protected by intellectual property
					rights, including copyrights, trademarks, and trade secrets. You may not reproduce,
					distribute, or use the App's content without permission.
				</Paragraph>

				<Paragraph>
					<strong>4. Privacy</strong>
				</Paragraph>
				<Paragraph>
					Your use of the App is also governed by our Privacy Policy. By using the App, you consent
					to the collection and use of your information as described in the Privacy Policy.
				</Paragraph>

				<Paragraph>
					<strong>5. User Content</strong>
				</Paragraph>
				<Paragraph>
					You may submit, post, or share content through the App. By doing so, you grant us a
					worldwide, non-exclusive, royalty-free, and transferable license to use, reproduce, and
					distribute your content.
				</Paragraph>

				<Paragraph>
					<strong>6. Termination</strong>
				</Paragraph>
				<Paragraph>
					We reserve the right to terminate or suspend your access to the App at our discretion,
					without notice, if you violate these Terms of Use.
				</Paragraph>

				<Paragraph>
					<strong>7. Disclaimers</strong>
				</Paragraph>
				<Paragraph>
					The App is provided "as is" and "as available" without warranties of any kind. We do not
					guarantee the accuracy, reliability, or availability of the App.
				</Paragraph>

				<Paragraph>
					<strong>8. Limitation of Liability</strong>
				</Paragraph>
				<Paragraph>
					We shall not be liable for any direct, indirect, incidental, special, or consequential
					damages arising from your use of the App.
				</Paragraph>

				<Paragraph>
					<strong>9. Changes to Terms</strong>
				</Paragraph>
				<Paragraph>
					We may update these Terms of Use at any time. You are responsible for reviewing the most
					current version regularly.
				</Paragraph>

				<Paragraph>
					<strong>10. Governing Law</strong>
				</Paragraph>
				<Paragraph>
					You must respect the laws of the country in which the application is used; I am not
					responsible for any inappropriate action using the app.
				</Paragraph>

				<Paragraph>
					By using the App, you acknowledge that you have read and understood these Terms of Use and
					agree to be bound by them.
				</Paragraph>
			</Container>
			<LinksContainer>
				<LinkBtn to="/PrivacyPolicy">Read privacy policies</LinkBtn>
				<LinkBtn to="/ApksDownloads">Download the app</LinkBtn>
			</LinksContainer>
		</PageWrapper>
	);
}

export default TermsOfUse;
