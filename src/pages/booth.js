import React from 'react';
import Typography from '@material-ui/core/Typography';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Layout from "../components/layout";
import SEO from "../components/seo";
import useCurrentPath from "../hooks/useCurrentPath";

export default function ({location}) {
	useCurrentPath(location.pathname)

	return (
			<Layout>
				<SEO title={'Booth'}/>
						<Typography variant="h4" component="h1" gutterBottom>
							Booth Page
						</Typography>
						<Link to="/">Go to the main page</Link>
						<ProTip/>
			</Layout>
	);
}
