import { useColorMode } from "theme-ui"
import SvgIcon from "../primitives/SvgIcon";

const ThemeToggle = (props: any) => {
  const [ mode, setMode ] = useColorMode()
  // const THEMES = ['system', 'light', 'dark']
  // console.log('[Current Color Mode]', mode);

  function changeTheme() {
    // const index = THEMES.indexOf(mode) + 1
    // const curTheme = THEMES[index % THEMES.length]
    // setMode(curTheme)
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <SvgIcon
      id={ mode }
      onClick={ changeTheme }
      { ...props }
      sx={{
        width: 20,
        height: 20,
        cursor: 'pointer'
      }}
    />
  )
}

export default ThemeToggle;
