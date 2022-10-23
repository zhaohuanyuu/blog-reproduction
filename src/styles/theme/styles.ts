import { ThemeStyles } from "theme-ui"

const Styles: ThemeStyles = {
  root: {
    WebkitTextSizeAdjust: `100%`,
    WebkitOverflowScrolling: 'touch',
    MozOsxFontSmoothing: `grayscale`,
    WebkitFontSmoothing: 'antialiased',
    textRendering: 'optimizeLegibility',
    transition: 'color, background-color .35s linear',
    /*"::selection": {
      backgroundColor: 'highlight'
    }*/
  },
  p: {
    my: '24px',
    fontSize: 2
  },
  h1: {
    mb: 5,
    color: "text",
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: 7
  },
  h2: {
    color: "text",
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: 4
  },
  h3: {
    mt: 4,
    mb: 3,
    color: "text",
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: 3
  },
  h4: {
    color: "text",
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: 2
  },
  h5: {
    color: "text",
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: 1
  },
  h6: {
    color: "text",
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: 0
  },
  img: {
    maxWidth: '100%'
  },
  pre: {
    fontFamily: "monospace",
    code: {
      color: "inherit"
    }
  },
  code: {
    fontFamily: "monospace",
    fontSize: "inherit"
  },
  blockquote: {
    m: '30px 0px',
    p: 2,
    borderLeftWidth: '8px',
    borderLeftStyle: 'solid',
    borderLeftColor: 'primary',
    borderRadius: 2,
    backgroundColor: 'highlight',
    "& > p": {
      m: '0px'
    }
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0
  },
  th: {
    textAlign: "left",
    borderBottomStyle: "solid"
  },
  td: {
    textAlign: "left",
    borderBottomStyle: "solid"
  },
  progress: {
    padding: '0px',
    height: '6px'
  },
}

export default Styles;
