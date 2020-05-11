/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react';
import TopLayout from './TopLayout';
import {MainMenuProvider} from "../../src/context/mainMenu";

export const wrapRootElement = ({element}) => {
	return (
		<MainMenuProvider>
			<TopLayout>
			  {element}
			</TopLayout>
		</MainMenuProvider>
  )
};
