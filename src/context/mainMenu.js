import React, {createContext, useReducer} from "react";

const initialState = {
	currentPath: '/',
	language: 'EN',
	themeMode: 'light',
}
const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_CURRENT_PATH':
			return {...state, currentPath: action.payload}
		case 'SET_LANGUAGE':
			return {...state, language: action.payload}
		case 'SET_THEME':
			return {...state, themeMode: action.payload}
		default: return state
	}
}

export const MainMenuContext = createContext()

export const MainMenuProvider = ({children}) => {
	// !!!! ON! in ../../plugins/gatsby-plugin-top-layout/gatsby-browser.js
	// as Top-Level component !!!!

	const value = useReducer(reducer, initialState, undefined);

	return (
			<MainMenuContext.Provider value={value}>
				{children}
			</MainMenuContext.Provider>
	)
}

