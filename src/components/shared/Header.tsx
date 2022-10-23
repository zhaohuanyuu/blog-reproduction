import { Link } from "gatsby";
import SvgIcon from "../primitives/SvgIcon";
import ThemeToggle from "../blocks/ThemeToggle"
import { LinkStyles } from '../../styles/components/Header'

const linksArr = [
  { label: 'Index', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' }
];

const Header = () => (
  <header>
    <nav sx={{ textAlign: "center" }}>
      {
        linksArr.map(item => (
          <Link
            to={ item.path }
            key={ item.path }
            sx={ LinkStyles }
            activeClassName="selected"
          >{ item.label }</Link>
        ))
      }
      <a sx={{ ml: '12px' }} target="_blank" rel="noreferrer" aria-label="github" href="https://github.com/zhaohuanyuu">
        <SvgIcon
          id="github"
          sx={{
            display: 'inline-block',
            width: '20px',
            height: '20px',
            fill: 'text'
          }}
        />
      </a>
      <ThemeToggle sx={{ ml: 1 }} />
      {/*<a className="ml-3 inline-block" to="https://zhy.gatsbyjs.io/rss.xml" target="_blank"><RssFeedIcon fontSize="small" className="align-middle relative -top-0.5" /></Link>*/}
    </nav>
  </header>
);

export default Header;
