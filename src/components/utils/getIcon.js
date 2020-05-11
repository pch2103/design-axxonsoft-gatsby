import React from 'react';
import Done from "@material-ui/icons/Done";
import Style from "@material-ui/icons/Style";
import Category from "@material-ui/icons/Category";
import LocalLibrary from "@material-ui/icons/LocalLibrary";
import Widgets from "@material-ui/icons/Widgets";
import ImportantDevices from "@material-ui/icons/ImportantDevices";
import Day from '@material-ui/icons/WbSunny';
import Night from "@material-ui/icons/Brightness4";
import Burger from "@material-ui/icons/Menu";

const GetIcon = ({icon}) => {
	switch (icon) {
		case 'Style': return <Style />
		case 'Category': return <Category />
		case 'LocalLibrary': return <LocalLibrary />
		case 'Widgets': return <Widgets />
		case 'ImportantDevices': return <ImportantDevices />
		case 'Day': return <Day />
		case 'Night': return <Night />
		case 'Burger': return <Burger />
		default: return <Done />
	}
}

export default GetIcon;