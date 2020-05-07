import React, {useContext} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper";
import Link from "./Link";
import {CurrentPathContext} from "../context/currentPath";
import {graphql, useStaticQuery} from "gatsby";


const useStyles = makeStyles(() => ({
		root: {
			flexGrow: 1,
		},
}));

const MainMenu = () => {
	const data = useStaticQuery(graphql`
    {
      allContentfulMainMenu {
        edges {
          node {
            id
            label
            labelRu
            link
            icon
          }
        }
      }
    }
  `)

	const mainMenu = data.allContentfulMainMenu.edges

	const classes = useStyles();
	const [{currentPath},  ] = useContext(CurrentPathContext)
	console.log('mainMenu', mainMenu)

	return (
				<Paper className={classes.menu}>
					<Tabs
							value={currentPath}
							indicatorColor="primary"
							textColor="primary"
							centered
					>
						{mainMenu && mainMenu.map(menuItem => (
								<Tab
										key={menuItem.node.id}
										to={menuItem.node.link}
										component={Link}
										label={menuItem.node.label}
										value={menuItem.node.link}/>
						))
						}
						{/*<Tab to={"/"} component={Link} label="To Home" value="/"/>*/}
						{/*<Tab to={"/news"} component={Link} label="Products" value="/news"/>*/}
						{/*<Tab to={"/about"} component={Link} label="About" value="/about"/>*/}
						}
						</Tabs>
				</Paper>
	)
}

export default MainMenu
