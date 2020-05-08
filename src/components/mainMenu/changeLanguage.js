import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {MainMenuContext} from "../../context/mainMenu";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles((theme) => (
		{
			root: {
				color: theme.palette.primary.contrastText,
				padding: theme.spacing(2),
				'&:hover': {
					background: theme.palette.primary.light,
					transition: 'background 0.4s',
					textDecoration: 'none',
				},
			},
		}));

export default function ChangeLanguage() {
	const classes = useStyles();
	const [{language}, dispatch] = useContext(MainMenuContext)
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (event) => {
		const { setLanguage } = event.currentTarget.dataset
		setAnchorEl(null);
		if(setLanguage && setLanguage !== language) {
			dispatch({type: 'SET_LANGUAGE', payload: setLanguage})
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