// const path = require(`path`)
//
//
// exports.createPages = ({ graphql, actions }) => {
// 	const { createPage } = actions;
// 	return graphql(`{
//       allContentfulMainBanner {
//         edges {
//           node {
//           	pageUrl
//           }
//         }
//       }
//     }`).then(result => {
// 		result.data.allContentfulMainBanner.edges.forEach(({ node }) => {
// 			createPage({
// 				path: `/banner${node.pageUrl}`,
// 				component: path.resolve(`./src/templates/banners.js`),
// 				context: {
// 					pageUrl: node.pageUrl
// 				},
// 			})
// 		});
// 	});
// };