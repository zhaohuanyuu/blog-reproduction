import { Theme } from "theme-ui"
import styles from "./styles"
import colors from "./colors"

const themeConf: Theme = {
  styles,
  colors,
  config: {
    useBorderBox: true,
    useRootStyles: true,
    initialColorModeName: 'light',
    useColorSchemeMediaQuery: true
  },
  radii: [2, 4, 5, 6, 8, 10, 12, 24],
  space: [5, 10, 15, 20, 30, 40, 50, 70],
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 72, 96],
  breakpoints: ['400px', '900px', '1440px', '1600px'],
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif",
    heading: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif",
    monospace: "Menlo, monospace"
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  shadows: {
    card: '0 0 8px',
    post: `
      var(--theme-ui-colors-card) 0 0 0 0,
      var(--theme-ui-colors-card) 0 0 0 0,
      var(--theme-ui-colors-card) 0 10px 15px -3px,
      var(--theme-ui-colors-card) 0 4px 6px -4px
    `,
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      color: 'card',
      boxShadow: 'card',
    },
    outlined: {
      m: '1rem 0',
      p: '1rem',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: '.3em',
    }
  },
  // prism: {
  //   modes: {
  //     dark: {
  //       ...deep.prism
  //     }
  //   }
  // }
}

module.exports =  themeConf;
