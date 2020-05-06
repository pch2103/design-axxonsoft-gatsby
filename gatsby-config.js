module.exports = {
  plugins: [
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby-Material-io`,
        short_name: `GatsbyMaterial`,
        start_url: `/`,
        icon: `src/images/favicon.png`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
      },
    },
  ],
  siteMetadata: {
    title: 'GatsbyMaterial',
    description: `GatsbyMaterial`,
    author: `@CHE`,
  },
};
