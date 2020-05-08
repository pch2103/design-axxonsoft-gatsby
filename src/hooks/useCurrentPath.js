import {useContext, useEffect, useState} from 'react';
import {MainMenuContext} from "../context/mainMenu";

export default (newPath) => {
	const [{currentPath}, dispatch] = useContext(MainMenuContext)
	const [value, setValue] = useState(newPath || currentPath)

	useEffect(()=>{
		if (currentPath === newPath) {
			return
		}
		dispatch({type: 'SET_CURRENT_PATH', payload: newPath})
	},[dispatch, currentPath, newPath])

	return [value, setValue]
}