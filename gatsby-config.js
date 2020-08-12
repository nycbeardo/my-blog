module.exports = {
  plugins: [{
      resolve: `gatsby-theme-blog`,
      options: {},
    },
 
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
            resolve: 'gatsby-remark-emoji', // <-- this adds emoji
            options: {
              // default emojiConversion --> shortnameToUnicode
              emojiConversion: 'shortnameToUnicode',
              // when true, matches ASCII characters (in unicodeToImage and shortnameToImage)
              // e.g. ;) --> 😉
              ascii: false,
            }
          },

        ]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },

   
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Objector`,
    author: `Montique Stevens`,
    description: `My personal dev blog chronicling my journey`,
    social: [{
        name: `twitter`,
        url: `https://twitter.com/nycbeardo`,
      },
      {
        name: `github`,
        url: `https://github.com/nycbeardo`,
      },
      {
        name: `portfolio`,
        url: `https://mkstevens.tech`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/nycbeardo`,
      },
    ],
  },
}
