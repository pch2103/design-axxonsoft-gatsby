import React, {useContext, useEffect, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Link from "../Link";
import {MainMenuContext} from "../../context/mainMenu";
import {graphql, useStaticQuery} from "gatsby";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from '@material-ui/core/IconButton';
import Favicon from "./favicon";
import ChangeLanguage from "./changeLanguage";
import Hidden from "@material-ui/core/Hidden";
import SideDrawer from "../sideDrawer/sideDrawer";
import GetIcon from "../utils/getIcon";
import useLocalStorage from "../../hooks/useLocalStorage";

function HideOnScroll(props) {
	const {children, window} = props;

	const trigger = useScrollTrigger({target: window ? window() : undefined});

	return (
			<Slide appear={false} direction="down" in={!trigger}>
				{children}
			</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

const useStyles = makeStyles((theme) => (
		{
			root: {
				flexGrow: 1,
				background: theme.palette.menu.main,
			},
			tabs: {
				flexGrow: 1,
			},
			logo: {
				flexGrow: 1,
			},
			menuButton: {
				marginRight: theme.spacing(0),
			},
			tab: {
				[theme.breakpoints.down('xs')]: {
					display: 'none'
				},
				padding: theme.spacing(2),
				color: theme.palette.primary.contrastText,
				'&:hover': {
					background: 'rgba(255, 255, 255, 0.12)',
					transition: 'background 0.3s',
					textDecoration: 'none',
				},
			},
		}));

const MainMenu = () => {

	const data = useStaticQuery(graphql`
   query {
      allContentfulMainMenu(
    		sort: {
      		fields: [order]
      		order: ASC
    		}
  		){
        edges {
          node {
            id
            order
            label
            labelRu
            link
            icon
          }
        }
      }
    },
  `)
	// OPTIMIZED! Memorized (cashed) value returned
	const mainMenu = useMemo(() => (
			data.allContentfulMainMenu.edges
	), [ data ])

	const classes = useStyles();
	const [storedTheme, setStoredTheme] = useLocalStorage('theme')
	const [{currentPath, language}, dispatch] = useContext(MainMenuContext)
	const [drawer, setDrawer] = useState(false);

	useEffect(()=>{
		if(!storedTheme){
			setStoredTheme('light')
			return
		}
		dispatch({type:'SET_THEME', payload: storedTheme})
	},[storedTheme, setStoredTheme, dispatch])

	const toggleDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (
				event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setDrawer(open);
	}

	const toggleTheme = () => {
		storedTheme === 'light' ?	setStoredTheme('dark') : setStoredTheme('light')
	}

	return (
			<>
			<SideDrawer
					drawer={drawer}
					toggleDrawer={toggleDrawer}
					mainMenu = {mainMenu}
					language = {language}
			/>
			<HideOnScroll>
				<AppBar className={classes.root}>
					<Toolbar variant="dense">
						<Hidden smUp>
							<IconButton
									edge="start"
									onClick={toggleDrawer(true)}
									className={classes.menuButton}
									color="inherit"
									aria-label="menu">
								<GetIcon icon='Burger'/>
							</IconButton>
						</Hidden>
						<Link className={classes.logo} to="/">
							<Favicon/>
						</Link>
							<Tabs
									value={currentPath}
									aria-label="simple tabs example"
									indicatorColor="secondary"
									variant="scrollable"
									scrollButtons="auto"
									className={classes.tabs}
							>

								{mainMenu && mainMenu
										.map(menuItem => (
												<Tab
														key={menuItem.node.id}
														className={classes.tab}
														to={menuItem.node.link}
														component={Link}
														label={language === 'EN' ? menuItem.node.label : menuItem.node.labelRu}
														value={menuItem.node.link}
												/>
										))
								}

							</Tabs>
						<IconButton
								edge="start"
								onClick={()=>{toggleTheme()}}
								className={classes.menuButton}
								color="inherit"
								aria-label="theme">
							<GetIcon icon={storedTheme === 'light' ? 'Night' : 'Day'}/>
						</IconButton>
						<ChangeLanguage/>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
				</>
	)
}

export default MainMenu
