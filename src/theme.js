import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import {useContext} from "react";
import {MainMenuContext} from "./context/mainMenu";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";

const theme = createMuiTheme({
  spacing: 8,
  overrides: {
    MuiLink: {
      root: {
        color: '#c56200',
      },
    },
  },
  palette: {
    primary: {
      light: '#5f5fc4',
      main: '#283593',
      dark: '#111F84',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffc246',
      main: '#ff9100',
      dark: '#c56200',
    },
    error: {
      main: red.A400,
    },
    menu: {
      light: '#5f5fc4',
      main: '#283593',
      dark: '#404040',
      contrastText: '#fff',
    }
  },
});

const dark_theme = createMuiTheme({
  spacing: 8,
  overrides: {
    MuiLink: {
      root: {
        color: '#ffc246',
      },
      },
  },
  palette: {
    type: 'dark',
    primary: {
      light: '#5f5fc4',
      main: '#283593',
      dark: '#111F84',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffc246',
      main: '#ff9100',
      dark: '#c56200',
    },
    error: {
      main: red.A400,
    },
    menu: {
      light: '#505050',
      main: '#454545',
      dark: '#404040',
      contrastText: '#fff',
    }
  },
});

const Theme = () => {
  const [{themeMode}, ] = useContext(MainMenuContext)
  return themeMode === 'dark'
      ? responsiveFontSizes(dark_theme)
      : responsiveFontSizes(theme);
}

export default Theme;