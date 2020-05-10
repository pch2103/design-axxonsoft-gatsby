import React from 'react';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import TestMaterial from "../components/testMaterial";
import Layout from "../components/layout";
import SEO from "../components/seo";
import useCurrentPath from "../hooks/useCurrentPath";
import DummyText from "../components/dummyText";
import PageBanner from "../components/pageBanner/pageBanner";
import Container from "@material-ui/core/Container";

export default function Index({location}) {
	useCurrentPath(location.pathname)

	return (
	    <Layout>
				<SEO title={'Brand Identity'}/>
				<PageBanner currentPageUrl={location.pathname}/>
				<Container maxWidth="md">
						<Link to="/about" color="secondary">
							Go to the about page
						</Link>
						<ProTip/>
						<TestMaterial/>
					<DummyText />
				</Container>
			</Layout>
	);
}
