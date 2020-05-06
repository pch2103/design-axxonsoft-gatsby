import React from 'react';
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
	buttons: {
		'& > *': {
			margin: theme.spacing(1),
		},
		menu: {
			flexGrow: 1,
		},
	},
}));

const TestMaterial = (props) => {
	const classes = useStyles();

return (
		<div className={classes.buttons}>
			<Button variant="contained">Default</Button>
			<Button variant="contained" color="primary">
				Primary
			</Button>
			<Button variant="contained" color="secondary">
				Secondary
			</Button>
			<Button variant="contained" disabled>
				Disabled
			</Button>
			<Button variant="contained" color="primary" href="#contained-buttons">
				Link
			</Button>
		</div>
)
}

export default TestMaterial;