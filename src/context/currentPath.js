import React, {createContext, useReducer} from "react";

const initialState = {
	currentPath: '/'
}
const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_CURRENT_PATH':
			return {...state, currentPath: action.payload}

		default: return state
	}
}

export const CurrentPathContext = createContext()

export const CurrentPathProvider = ({children}) => {
	const value = useReducer(reducer, initialState, undefined);

	return (
			<CurrentPathContext.Provider value={value}>
				{children}
			</CurrentPathContext.Provider>
	)
}

