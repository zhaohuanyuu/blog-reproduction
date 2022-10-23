import { Global } from "@emotion/react"
import { get, Box } from "theme-ui"

import Header from "../shared/Header"

const Layout = ({ children }: Components.LayoutProp) => {
  const currentYear = new Date().getFullYear();

	return (
		<>
			<Global styles={theme => ({
					"html, body, h1, h2, h3, h4, h5, h6, p": {
						margin: 0,
						padding: 0
					},
					"article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary": {
						display: 'block'
					},
					"audio, canvas, progress, video": {
						display: 'inline-block'
					},
					a: {
						color: get(theme, 'colors.text'),
						textDecoration: 'none'
					},
					p: {
						color: get(theme, 'colors.text')
					},
					"[hidden]": {
						display: 'none'
					}
				})}
			/>
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				minHeight: '100vh'
			}}>
				<Header />
				<main sx={{ flex: 1, px: 2, width: '100%' }}>{ children }</main>
				<footer sx={{
					px: 0,
					pb: 4,
					textAlign: 'center',
					fontSize: ['10px', 1, 2]
				}}
				>© { currentYear } All rights reserved.&nbsp;&nbsp;frontend technical knowledge learning and sharing blog</footer>
			</Box>
		</>
	 );
};

export default Layout;
