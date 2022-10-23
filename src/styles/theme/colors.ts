import deep from "../presets/deep";
import { ColorModesScale } from "@theme-ui/css/dist/declarations/src/types";

const colors: ColorModesScale = {
  text: '#07070A',
  background: '#FFFFFF',
  primary: '#660099FF',
  secondary: '#9c27b0',
  highlight: '#efeffe',
  muted: '#4A525A',
  accent: '#ec3471',
  gray: '#dfe3e8',
  darken: '#00044c',
  chip: '#d7d7d95c',
  card: '#0000001F',
  border: '#dee2e6',
  textSecondary: '#334155',
  backgroundSecondary: '#f9fafa3d',
  callout: {
    info: {
      color: 'rgb(0, 58, 117)',
      borderColor: 'rgb(194, 224, 255)',
      backgroundColor: 'rgba(240, 247, 255, 0.8)',
      strongColor: 'rgb(0, 76, 153)'
    },
    warning: {
      color: 'rgb(33, 33, 33)',
      borderColor: 'rgb(255, 220, 72)',
      backgroundColor: 'rgba(255, 249, 235, 0.6)',
      strongColor: 'rgb(140, 88, 0)'
    },
    error: {
      color: 'rgb(87, 0, 7)',
      borderColor: 'rgb(255, 189, 194)',
      backgroundColor: 'rgb(255, 240, 241)',
      strongColor: 'rgb(148, 0, 13)'
    }
  },
  modes: {
    dark: {
      ...deep.colors,
      chip: 'hsla(0, 0%, 45%, 0.6)',
      card: 'hsla(0, 0%, 0%, 0.35)',
      border: 'hsla(220, 13%, 91%, 0.1)',
      textSecondary: 'hsla(213, 9.8%, 88.2%, 1)',
      backgroundSecondary: 'hsla(227, 21.9%, 25.1%, 0.3)',
      callout: {
        info: {
          color: 'rgb(240, 247, 255)',
          borderColor: 'rgb(0, 76, 153)',
          backgroundColor: 'rgba(0, 58, 117, 0.2)',
          strongColor: 'rgb(194, 224, 255)'
        },
        warning: {
          color: 'rgb(255, 249, 235)',
          borderColor: 'rgb(140, 88, 0)',
          backgroundColor: 'rgba(90, 54, 0, 0.35)',
          strongColor: 'rgb(255, 243, 193)'
        },
        error: {
          color: 'rgb(255, 240, 241)',
          borderColor: 'rgb(148, 0, 13)',
          backgroundColor: 'rgba(87, 0, 7, 0.35)',
          strongColor: 'rgb(255, 219, 222)'
        }
      }
    }
  }
}

export default colors;
