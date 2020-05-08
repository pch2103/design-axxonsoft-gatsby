import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";

const Favicon = () => {
	const data = useStaticQuery(graphql`
  query {
	file(relativePath: { eq: "favicon.png" }) {
		childImageSharp {
			fixed(width: 40, height: 40) {
			...GatsbyImageSharpFixed
			}
		}
	}
}
`)

	return <Img
			fixed = {data.file.childImageSharp.fixed}
			alt = 'Local'
	/>
}

export default Favicon