/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react';
import TopLayout from './TopLayout';
import {CurrentPathProvider} from "../../src/context/currentPath";

export const wrapRootElement = ({element}) => {
	return (
  <TopLayout>
		<CurrentPathProvider>
			{element}
		</CurrentPathProvider>
	</TopLayout>
  )
};
