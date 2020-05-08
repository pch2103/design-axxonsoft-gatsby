import React from 'react';
import Typography from '@material-ui/core/Typography';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import TestMaterial from "../components/testMaterial";
import Layout from "../components/layout";
import SEO from "../components/seo";
import useCurrentPath from "../hooks/useCurrentPath";
import DummyText from "../components/dummyText";

export default function Index({location}) {
	useCurrentPath(location.pathname)

	return (
	    <Layout>
				<SEO title={'Brand Identity'}/>
						<Typography variant="h4" component="h1" gutterBottom>
							Home page
						</Typography>
						<Link to="/about" color="secondary">
							Go to the about page
						</Link>
						<ProTip/>
						<TestMaterial/>
					<DummyText />
			</Layout>
	);
}
