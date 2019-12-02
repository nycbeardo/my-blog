import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

const darkBlue = `#801336`
const lightBlue = `#66E0FF`
const blueGray = `#2d334a`
const lightRed = '#ea7362'
const lightPink = '#ffdbc5'


export default merge(defaultThemeColors, {
  text: blueGray,
  primary: darkBlue,
  heading: blueGray,
  background: lightPink,
  modes: {
    dark: {
      background: blueGray,
     primary: lightRed,
      highlight: lightBlue,
    },
   },
})
