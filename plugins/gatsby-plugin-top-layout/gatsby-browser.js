/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react';
import TopLayout from './TopLayout';
import {MainMenuProvider} from "../../src/context/mainMenu";

export const wrapRootElement = ({element}) => {
	return (
  <TopLayout>
		<MainMenuProvider>
			{element}
		</MainMenuProvider>
	</TopLayout>
  )
};
