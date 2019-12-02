import merge from "deepmerge"
import defaultThemeTypography from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/typography"

export default merge({}, defaultThemeTypography, {
  fonts: {
    body: "system-ui, serif",
    heading: "system-ui, serif"
  }
});