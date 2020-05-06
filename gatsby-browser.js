import React from "react"
import {CurrentPathProvider}  from "./src/context/currentPath"
export const wrapRootElement = ({ element }) => (
		<CurrentPathProvider>{element}</CurrentPathProvider>
)