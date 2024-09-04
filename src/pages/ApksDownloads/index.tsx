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
	const apks: {
		version: string;
		vcode: number;
	}[] = [
		{
			version: '1.0.5',
			vcode: 15,
		},
		{
			version: '1.0.4',
			vcode: 14,
		},
		{
			version: '1.0.3',
			vcode: 13,
		},
		{
			version: '1.0.3',
			vcode: 12,
		},
		{
			version: '1.0.2',
			vcode: 11,
		},
		{
			version: '1.0.2',
			vcode: 10,
		},
		{
			version: '1.0.1',
			vcode: 9,
		},
	];

	return (
		<PageWrapper>
			<Container>
				<Heading className="text-center">My App Versions</Heading>
				<List className="list-unstyled">
					{apks.map(({ version, vcode }) => {
						return (
							<ListItem>
								Version {version} {vcode.toString()}
								<DownloadButton
									to={`https://github.com/gabriel-logan/2Devs-Web/raw/main/apks/(${version})%20${vcode.toString()}.apk`}
									download
								>
									Download
								</DownloadButton>
							</ListItem>
						);
					})}
					{/* You can add more versions here */}
				</List>
				<Link to="/Terms">READ TERM AND POLICY</Link>
			</Container>
		</PageWrapper>
	);
}

export default MyAppVersions;
