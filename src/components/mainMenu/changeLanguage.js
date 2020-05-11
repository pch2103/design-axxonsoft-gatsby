import React, {useContext, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {MainMenuContext} from "../../context/mainMenu";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useLocalStorage from "../../hooks/useLocalStorage";

const useStyles = makeStyles((theme) => (
		{
			root: {
				color: theme.palette.primary.contrastText,
				padding: theme.spacing(2),
				'&:hover': {
					background: 'rgba(255, 255, 255, 0.12)',
					transition: 'background 0.3s',
					textDecoration: 'none',
				},
			},
		}));

export default function ChangeLanguage() {
	const classes = useStyles();
	const [storedLanguage, setStoredLanguage] = useLocalStorage('language')
	const [{language}, dispatch] = useContext(MainMenuContext)
	const [anchorEl, setAnchorEl] = React.useState(null);

	useEffect(() => {
		if(!storedLanguage){
			setStoredLanguage('EN')
		}
		dispatch({type: 'SET_LANGUAGE', payload: storedLanguage})
	},[storedLanguage, setStoredLanguage, dispatch])

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (event) => {
		const { setLanguage } = event.currentTarget.dataset
		setAnchorEl(null);
		if(setLanguage && setLanguage !== storedLanguage) {
			setStoredLanguage(setLanguage)
		}
	};

	return (
			<div>
				<Button className={classes.root} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
					{language}
				</Button>
				<Menu
						id="simple-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
				>
					<MenuItem data-set-language={'EN'} onClick={handleClose}>English</MenuItem>
					<MenuItem data-set-language={'RU'} onClick={handleClose}>Русский</MenuItem>
				</Menu>
			</div>
	);
}