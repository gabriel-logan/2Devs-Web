import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageWrapper = styled.section`
	font-family: Arial, sans-serif;
	margin: 20px;
	padding: 20px;
`;

const Content = styled.div`
	max-width: 800px;
	margin: 0 auto;
`;

const Heading = styled.h1`
	font-size: 24px;
	text-align: center;
`;

const Paragraph = styled.p`
	font-size: 16px;
	line-height: 1.5;
`;

const LinksContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const LinkBtn = styled(Link)`
	margin-top: 35px;
	margin-bottom: 20px;
`;

function PrivacyPolicy() {
	return (
		<PageWrapper>
			<Content>
				<Heading>2Devs App Privacy Policy</Heading>

				<Paragraph>
					<strong>Last Updated:</strong> October 9, 2023
				</Paragraph>

				<Paragraph>
					<strong>Introduction</strong>
				</Paragraph>
				<Paragraph>
					Welcome to the 2Devs app. This privacy policy is intended to explain how we handle any
					personal information, if any, when using our app. We want to ensure that you have a clear
					understanding of how your information is treated when interacting with the 2Devs app.
				</Paragraph>

				<Paragraph>
					<strong>Data Collection</strong>
				</Paragraph>
				<Paragraph>
					The 2Devs app does not collect or store any user's personal data. We do not request,
					track, or store personal information, such as name, email address, phone number, or any
					other identifiable information. All interactions within the app are strictly internal and
					do not involve the collection of personal data.
				</Paragraph>

				<Paragraph>
					<strong>Data Usage</strong>
				</Paragraph>
				<Paragraph>
					All interactions and data generated within the 2Devs app are solely for improving the user
					experience and providing internal functionality. We do not share, sell, or in any way make
					user data available to third parties.
				</Paragraph>

				<Paragraph>
					<strong>Data Security</strong>
				</Paragraph>
				<Paragraph>
					The security of your privacy is a priority for us. We take reasonable measures to protect
					any data that may be generated during the use of the app. However, due to the fact that we
					do not collect personal information, there is no sensitive data to protect.
				</Paragraph>

				<Paragraph>
					<strong>Cookies and Tracking</strong>
				</Paragraph>
				<Paragraph>
					The 2Devs app does not use cookies, user tracking, or any other monitoring technology to
					collect information about users.
				</Paragraph>

				<Paragraph>
					<strong>Children</strong>
				</Paragraph>
				<Paragraph>
					The 2Devs app is intended for a general audience and does not intentionally collect
					information from children under the age of 13. If you believe that a child has provided us
					with personal information, please contact us.
				</Paragraph>

				<Paragraph>
					<strong>Changes to the Privacy Policy</strong>
				</Paragraph>
				<Paragraph>
					This privacy policy may be updated occasionally to reflect changes in the practices of the
					2Devs app. The date of the last update will be revised to indicate the date of the most
					recent version.
				</Paragraph>

				<Paragraph>
					<strong>User Responsibility</strong>
				</Paragraph>
				<Paragraph>
					The use of the 2Devs app is the sole responsibility of the user. We are not responsible
					for any misuse of the app, violation of terms of use, or actions by the user that violate
					applicable laws or regulations. The user is responsible for ensuring that the use of the
					app complies with all relevant local, state, and federal laws and regulations.
				</Paragraph>
			</Content>
			<LinksContainer>
				<LinkBtn to="/Terms">Read terms of use</LinkBtn>
				<LinkBtn to="/ApksDownloads">Download the app</LinkBtn>
			</LinksContainer>
		</PageWrapper>
	);
}

export default PrivacyPolicy;
