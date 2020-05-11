import {useContext, useEffect} from 'react';
import {MainMenuContext} from "./mainMenu";
import useLocalStorage from "../hooks/useLocalStorage";

const ContextInitialise = ({children}) => {
	const [storedLanguage, ] = useLocalStorage('language')
	const [,dispatch] = useContext(MainMenuContext)

	useEffect(()=>{
		if(storedLanguage){
			dispatch({type: 'SET_LANGUAGE', payload: storedLanguage})
		}
	},[storedLanguage, dispatch])


	return children
}

export default ContextInitialise;