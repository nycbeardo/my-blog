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
    heading: 500,
    bold: 700,
  }
});