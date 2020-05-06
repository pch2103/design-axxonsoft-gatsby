import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import TestMaterial from "../components/testMaterial";
import Layout from "../components/layout";
import SEO from "../components/seo";
import useCurrentPath from "../hooks/useCurrentPath";

export default function Index({location}) {
	useCurrentPath(location.pathname)

	return (
	    <Layout>
				<SEO title={'Home'}/>
				<Container maxWidth="sm">
					<Box my={4}>
						<Typography variant="h4" component="h1" gutterBottom>
							Home page
						</Typography>
						<Link to="/about" color="secondary">
							Go to the about page
						</Link>
						<ProTip/>
						<TestMaterial/>
					</Box>
				</Container>
			</Layout>
	);
}
