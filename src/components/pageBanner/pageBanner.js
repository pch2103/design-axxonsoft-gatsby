import React, {useContext, useMemo} from 'react';
import {useStaticQuery, graphql} from "gatsby"
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import {MainMenuContext} from "../../context/mainMenu";

const useStyles = makeStyles((theme) => {
	return (
			{
				root: {
					width: '100%',
					paddingTop: theme.spacing(10),
					paddingBottom: theme.spacing(4),
					background: theme.palette.menu.dark,
					color: theme.palette.primary.contrastText,
					textAlign: "center"
				},
				logo: {
					width: 56,
					height: 56,
					marginBottom: theme.spacing(1)
				},
				header: {
					textTransform: "uppercase",
					marginBottom: theme.spacing(1)
				},
				subheader: {
					color: theme.palette.primary.contrastText,
					opacity: 0.6
				}
			})
});

const PageBanner = ({currentPageUrl}) => {
	const data = useStaticQuery(graphql` 
	query{
      allContentfulMainBanner {
        edges {
          node {
          	pageUrl
            titleEN
            titleRU
            subtitleEN
            subtitleRU
            icon {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

	// OPTIMIZED! Memorized (cashed) value returned
	const banner = useMemo(() => (
			data.allContentfulMainBanner.edges
					.find(({node}) => currentPageUrl === node.pageUrl)
	), [data, currentPageUrl])

	const classes = useStyles();
	const [{language}, ] = useContext(MainMenuContext)
	console.log('LANGUAGE', language)

	if (!banner || !banner.node ) return null
	return (
			<Box className={classes.root}>
				<Container maxWidth="sm">
					<img className={classes.logo} src={banner.node.icon.file.url} alt={'page icon'}/>
					<Typography variant="h5" className={classes.header}>
						{language === 'EN' ? banner.node.titleEN : banner.node.titleRU}
					</Typography>
					<Typography variant="body2" className={classes.subheader}>
						{language === 'EN' ? banner.node.subtitleEN : banner.node.subtitleRU}
					</Typography>
				</Container>
			</Box>
	)
};

export default PageBanner;

