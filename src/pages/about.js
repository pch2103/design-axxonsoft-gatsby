import React  from 'react';
import Typography from '@material-ui/core/Typography';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function About() {

	return (
			<Layout>
				<SEO title={'About Axxonsoft'}/>
						<Typography variant="h4" component="h1" gutterBottom>
							About Page
						</Typography>
						<Link to="/">Go to the main page</Link>
						<ProTip/>
			</Layout>
	);
}
