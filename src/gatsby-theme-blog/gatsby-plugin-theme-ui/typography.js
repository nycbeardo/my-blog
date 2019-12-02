import merge from "deepmerge"
import defaultThemeTypography from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/typography"

export default merge(defaultThemeTypography, {
  fonts: {
    body: " 'Roboto Condensed', sans-serif",
    heading: " 'Roboto', sans-serif",
    monospace: "Menlo, monospace"
  },
  fontWeights: {
    body: 400,
    heading: 650,
    bold: 700,
  },
  lineHeights: {
    body: 2.0,
    heading: 1.275,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

});