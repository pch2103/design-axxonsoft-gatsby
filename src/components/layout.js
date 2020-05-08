import React from "react"
import MainMenu from "./mainMenu/mainMenu";
import Copyright from "./Copyright";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

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
					<Container>
						<Box my={12}>
						{children}
						</Box>
					</Container>
					<footer>
						<Copyright/>
					</footer>
				</div>
			</>
	)
}

export default Layout