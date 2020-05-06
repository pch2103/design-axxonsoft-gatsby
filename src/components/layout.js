import React from "react"
import MainMenu from "./mainMenu";
import Copyright from "./Copyright";

const Layout = ({ children }) => {

	return (
			<>
				<MainMenu />
				<div
						style={{
							margin: `0 auto`,
							maxWidth: 960,
							padding: `0 1.0875rem 1.45rem`,
						}}
				>
					<main>{children}</main>
					<footer>
						<Copyright/>
					</footer>
				</div>
			</>
	)
}

export default Layout