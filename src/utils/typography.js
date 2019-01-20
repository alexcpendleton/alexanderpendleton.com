import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

const theme = Object.assign({}, Wordpress2016, {
  headerFontFamily: ['Georgia', 'Cambria', 'serif'],
})
theme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  h1: {
    fontFamily: ['Georgia', 'Cambria', 'serif'].join(','),
  },
  // body: { // dark
  //   background: '#313063',
  //   color: '#dcdcaa',
  // },
})

delete theme.googleFonts

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
