import {useContext, useEffect, useState} from 'react';
import {CurrentPathContext} from "../context/currentPath";

export default (newPath) => {
	const [{currentPath}, dispatch] = useContext(CurrentPathContext)
	const [value, setValue] = useState(newPath || currentPath)

	useEffect(()=>{
		if (currentPath === newPath) {
			return
		}
		dispatch({type: 'SET_CURRENT_PATH', payload: newPath})
	},[dispatch, currentPath, newPath])

	return [value, setValue]
}