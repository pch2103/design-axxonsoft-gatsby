import React, {useContext} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {MainMenuContext} from "../../context/mainMenu";
import localTranslate from "./localTranslate";

const useStyles = makeStyles((theme) => {
	return (
			{
				root: {
					width: '100%',
					paddingTop: theme.spacing(6),
					paddingBottom: theme.spacing(2),
					color: theme.palette.text.primary,
					textAlign: "center"
				},
				header: {
					textTransform: "uppercase",
				},
			})
});

const ContentHeader = ({title}) => {
	const classes = useStyles();
	const [{language}, ] = useContext(MainMenuContext)

	return (
			<Box className={classes.root}>
				<Typography variant="h5" className={classes.header}>
					{language === 'EN' ? title : localTranslate(title)}
				</Typography>
			</Box>
	)
};

export default ContentHeader;