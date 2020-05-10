import React from 'react';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Layout from "../components/layout";
import SEO from "../components/seo";
import useCurrentPath from "../hooks/useCurrentPath";
import PageBanner from "../components/pageBanner/pageBanner";
import Container from "@material-ui/core/Container";
import DummyText from "../components/dummyText";

export default function ({location}) {
	useCurrentPath(location.pathname)

	return (
			<Layout>
				<SEO title={'Products'}/>
				<PageBanner currentPageUrl={location.pathname}/>
				<Container maxWidth="md">
						<Link to="/">Go to the main page</Link>
						<ProTip/>
					<DummyText />
				</Container>
			</Layout>
	);
}
