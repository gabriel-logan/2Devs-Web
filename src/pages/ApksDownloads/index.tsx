import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageWrapper = styled.section`
	font-family: Arial, sans-serif;
`;

const Container = styled.div`
	max-width: 600px;
	margin: 0 auto;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Heading = styled.h1`
	text-align: center;
`;

const List = styled.ul`
	list-style-type: none;
	padding: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

const ListItem = styled.li`
	margin-bottom: 10px;
	display: flex;
	gap: 40px;
`;

const DownloadButton = styled(Link)`
	display: inline-block;
	padding: 10px 20px;
	background-color: #007bff;
	color: #fff;
	text-decoration: none;
	border-radius: 5px;

	&:hover {
		background-color: #0056b3;
	}
`;

function MyAppVersions() {
	return (
		<PageWrapper>
			<Container>
				<Heading className="text-center">My App Versions</Heading>
				<List className="list-unstyled">
					<ListItem>
						Version 1.0.2 11
						<DownloadButton
							to="https://github.com/gabriel-logan/2Devs-Web/raw/main/apks/(1.0.2)%2011.apk"
							download
						>
							Download
						</DownloadButton>
					</ListItem>
					<ListItem>
						Version 1.0.2 10
						<DownloadButton
							to="https://github.com/gabriel-logan/2Devs-Web/raw/main/apks/(1.0.2)%2010.apk"
							download
						>
							Download
						</DownloadButton>
					</ListItem>
					<ListItem>
						Version 1.0.1 9
						<DownloadButton
							to="https://github.com/gabriel-logan/2Devs-Web/raw/main/apks/(1.0.1)%209.apk"
							download
						>
							Download
						</DownloadButton>
					</ListItem>
					<ListItem>
						Version 1.0.1 8
						<DownloadButton
							to="https://github.com/gabriel-logan/2Devs-Web/raw/main/apks/(1.0.1)%208.apk"
							download
						>
							Download
						</DownloadButton>
					</ListItem>
					<ListItem>
						Version 1.0.1 7
						<DownloadButton
							to="https://github.com/gabriel-logan/2Devs-Web/raw/main/apks/(1.0.1)%207.apk"
							download
						>
							Download
						</DownloadButton>
					</ListItem>
					<ListItem>
						Version 1.0.1 6
						<DownloadButton
							to="https://github.com/gabriel-logan/2Devs-Web/raw/main/apks/(1.0.1)%206.apk"
							download
						>
							Download
						</DownloadButton>
					</ListItem>
					{/* You can add more versions here */}
				</List>
				<Link to="/Terms">READ TERM AND POLICY</Link>
			</Container>
		</PageWrapper>
	);
}

export default MyAppVersions;
