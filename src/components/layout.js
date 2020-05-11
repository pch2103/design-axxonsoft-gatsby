import React from "react"
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../theme';
import MainMenu from "./mainMenu/mainMenu";
import Copyright from "./Copyright";
import CssBaseline from "@material-ui/core/CssBaseline";

const Layout = ({ children }) => {

	return (
			<>
				<ThemeProvider theme={Theme()}>
				<CssBaseline />
				<MainMenu />
						{children}
					<footer>
						<Copyright/>
					</footer>
				</ThemeProvider>
			</>
	)
}

export default Layout