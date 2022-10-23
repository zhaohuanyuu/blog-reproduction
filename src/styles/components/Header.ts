export const LinkStyles = {
  position: "relative",
  lineHeight: "90px",
  fontSize: "24px",
  ":nth-of-type(2)": {
    margin: "0 15px"
  },
  "::after": {
    content: "''",
    position: "absolute",
    width: "100%",
    transform: "scaleX(0)",
    height: "2px",
    bottom: "-6px",
    left: 0,
    backgroundColor: "text",
    transformOrigin: "bottom right",
    transition: "transform 0.4s cubic-bezier(0.86, 0, 0.07, 1)"
  },
  ':hover::after': {
    transform: "scaleX(1)",
    transformOrigin: "bottom left"
  }
}
