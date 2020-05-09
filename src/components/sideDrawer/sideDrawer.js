import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import Link from "../Link";
import GetIcon from "../utils/getIcon";
import Divider from "@material-ui/core/Divider";
import Favicon from "../mainMenu/favicon";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => (
		{
			list: {
				width: 250,
			},
			about: {
				display: 'inline-flex',
				alignItems: "center",
				padding: theme.spacing(1),
			},
			company: {
				marginLeft: theme.spacing(1),
				color: theme.palette.text.secondary,
			},
			listItem: {
				color: theme.palette.text.primary,
			},
		}));

const SideDrawer = ({drawer, toggleDrawer, mainMenu, language}) => {
	const classes = useStyles();
	const list = () => (
			<div
					className={classes.list}
					role="presentation"
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
			>
				<Box className={classes.about}>
					<Favicon/>
					<Typography variant="overline" display="block" className={classes.company}>
						AxxonSoft Design
					</Typography>
				</Box>
				<Divider />
				<List>
					{mainMenu && mainMenu
							.sort((a, b) => a.node.order - b.node.order)
							.map(menuItem => (
									<ListItem key={menuItem.node.id}
														button to={menuItem.node.link}
														component={Link}>
										<ListItemIcon>
											<GetIcon icon={menuItem.node.icon}/>
										</ListItemIcon>
										<ListItemText
												className={classes.listItem}
												primary={
													language === 'EN'
															? menuItem.node.label
															: menuItem.node.labelRu}
										/>
									</ListItem>
							)
					)}
				</List>
			</div>
	);

	return (
			<Drawer open={drawer} onClose={toggleDrawer(false)}>
				{list()}
			</Drawer>
	)
};

export default SideDrawer;