import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/layout";
import SEO from "../components/seo";
import useCurrentPath from "../hooks/useCurrentPath";
import DummyText from "../components/dummyText";
import PageBanner from "../components/pageBanner/pageBanner";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ContentHeader from "../components/utils/contentHeader";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export default function Index({location}) {
	const classes = useStyles();
	useCurrentPath(location.pathname)

	return (
	    <Layout>
				<SEO title={'AxxonSoft Ltd. Brand identity'}/>
				<PageBanner currentPageUrl={location.pathname}/>
				<Container maxWidth="md">
					<Grid container spacing={3}>
						<Grid item xs={12} md={12}>
							<ContentHeader title={'Logotype'}/>
						</Grid>
						<Grid item xs={12} md={6}>
							<Paper className={classes.paper}>Content</Paper>
						</Grid>
						<Grid item xs={12} md={6}>
							<Paper className={classes.paper}>Content</Paper>
						</Grid>
					</Grid>
					<DummyText />
				</Container>
			</Layout>
	);
}
