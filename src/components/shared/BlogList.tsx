import { Link } from "gatsby";
import { Flex } from "theme-ui";
import { framers } from "../../common/utils";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { BlogListStyle } from "../../styles/components/BlogList";

const { hoverUp, listEaseIn } = framers;

const BlogList = ({ list }: Components.BlogListCompProp) => (
  <LazyMotion features={ domAnimation }>
    {
      list.map((node: Components.mdxEdge, index: number) => (
        <m.div
          key={ node.id }
          custom={ index }
          initial='hidden'
          animate="visible"
          whileHover={ hoverUp }
          variants={ listEaseIn }
          sx={{ mb: 4 }}
        >
          <Link
            sx={ BlogListStyle }
            to={ node?.frontmatter?.path as string }
          >
            <img src="https://zhaohuanyuu.github.io/resource/blog/javascript-logo.jpg" alt="post-cover"/>
            <Flex sx={{ flexDirection: 'column' }}>
              {/*<time className='date'>{ node?.frontmatter?.date } - { node?.fields?.timeToRead?.text }</time>*/}
              <time className='date'>{ node?.frontmatter?.date }</time>
              <h3 className='title'>{ node?.frontmatter?.title }</h3>
              <p className='excerpt'>{ node.excerpt }</p>
            </Flex>
          </Link>
        </m.div>
      ))
    }
  </LazyMotion>
)
export default BlogList;
