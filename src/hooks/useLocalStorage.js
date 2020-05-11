import {useEffect, useState} from 'react';

const loadStore = (key) => {
	if (typeof localStorage !== 'undefined') {
		return localStorage.getItem(key)
	}
	return null
}

export default (key, initialValue='') => {
	const [value, setValue] = useState(() => (loadStore(key) || initialValue))

// ( typeof localStorage !== 'undefined' && localStorage.getItem(key) || initialValue))

	useEffect(() => {
			localStorage.setItem(key, value)
	}, [value, key])

	return [value, setValue]
};

