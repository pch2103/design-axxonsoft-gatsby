import React, {useContext} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper";
import Link from "./Link";
import {CurrentPathContext} from "../context/currentPath";


const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
		},
}));

const MainMenu = () => {
	const classes = useStyles();
	const [{currentPath},  ] = useContext(CurrentPathContext)
	console.log('STATE MENU', currentPath)

	return (
				<Paper className={classes.menu}>
					<Tabs
							value={currentPath}
							indicatorColor="primary"
							textColor="primary"
							centered
					>
						<Tab to={"/"} component={Link} label="To Home" value="/"/>
						<Tab to={"/news"} component={Link} label="News" value="/news" />
						<Tab to={"/about"} component={Link} label="About" value="/about" />
					</Tabs>
				</Paper>
	)
}
export default MainMenu;