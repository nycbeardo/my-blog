module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
  
        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',
  
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false
        }
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Objector`,
    author: `Montique Stevens`,
    description: `My dev blog chronicling my journey`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/nycbeardo`,
      },
      {
        name: `github`,
        url: `https://github.com/nycbeardo`,
      },
      {
        name: `portfolio`,
        url: `https://mkstevens.tech',
      },
    ],
  },
}
