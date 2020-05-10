import React from "react"
import MainMenu from "./mainMenu/mainMenu";
import Copyright from "./Copyright";

const Layout = ({ children }) => {

	return (
			<>
				<MainMenu />
						{children}
					<footer>
						<Copyright/>
					</footer>
			</>
	)
}

export default Layout