import { graphql } from "gatsby"
import { Chip } from "../primitives";
import { Box, Container, Flex } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"

import SEO from "../core/SEO"
import PrismSyntaxHighlight from "../core/PrismSyntaxHighlight"

const BlogPost = ({ data, children }: any) => {
	const post = data.mdx;
	const { frontmatter, fields } = post;
	const { title, date, keywords } = frontmatter;
	const keywordsList = keywords.split(', ');

	const CodeComp = {
		code: ({ children, className = 'blog-post_content' }: any) => (
			<PrismSyntaxHighlight className={className}>{ children }</PrismSyntaxHighlight>
		)
	}

	return (
		<>
			<Container sx={{
				width: '100%',
				maxWidth: ['100%', 600, 700, 800],
				pb: 6
			}}>
				<Flex sx={{
					justifyContent: 'space-between',
					color: 'accent',
					fontSize: 3,
					fontWeight: 'bolder'
				}}>
					<time>{ date }</time>
					<aside sx={{
						fontSize: 1,
						lineHeight: '1.75'
					}}>{ fields.timeToRead.text }</aside>
				</Flex>
				<h1 id="back-to-top-anchor" sx={{ my: 4, fontSize: '38px' }}>{ title }</h1>
				<Box sx={{ mb: 5, transform: 'scale(.95)', transformOrigin: 'left' }}>
					{
						keywordsList.map((word: string) => <Chip label={word} key={word} />)
					}
				</Box>
				<MDXProvider components={ CodeComp }>{ children }</MDXProvider>
			</Container>
		</>
	);
};

export default BlogPost;

export const Head = ({ data }: any) => {
	const post = data.mdx;
	const { frontmatter, excerpt } = post;
	const { title, keywords } = frontmatter;
	return <SEO title={ title } description={ excerpt } keywords={ keywords } />
};

export const query = graphql`
	query ($id: String!) {
		mdx(id: { eq: $id }) {
			fields {
				timeToRead {
					text
				}
			}
			frontmatter {
				title
				keywords
				date(formatString: "Do MMMM, YYYY")
			}
		}
	}
`;

