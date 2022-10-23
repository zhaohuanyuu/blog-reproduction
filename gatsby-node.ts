import path from 'path';
import readingTime from 'reading-time';
import type { GatsbyNode } from "gatsby";
import { CreateNodeArgs, CreatePagesArgs } from "gatsby";
import { createFilePath } from 'gatsby-source-filesystem';

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, getNode, actions }: CreateNodeArgs) => {
	const { createNodeField } = actions;
	if (node.internal.type === `Mdx`) {
		const content = node.body as string;
		createNodeField({
			node,
			name: 'timeToRead',
			value: readingTime(content)
		})

		const slug = createFilePath({ node, getNode, basePath: `pages` });
		createNodeField({
			node,
			name: `slug`,
			value: slug
		})
	}
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }: CreatePagesArgs) => {
	const { createPage } = actions;
	const result: any = await graphql(`{
		allMdx {
			nodes {
				id
				frontmatter {
					path
					draft
				}
				internal {
					contentFilePath
				}
			}
		}
	}`);
	const availablePages = result.data.allMdx.nodes.filter(({ frontmatter }: any) => !frontmatter.draft);

	// throw error if have
	if (result.errors) {
		// return Promise.reject(result.errors)
		reporter.panicOnBuild('[Error loading MDX result]: ', result.errors);
	}

	// list page generation
	const PAGE_SIZE = 15;
	const PAGE_COUNT = Math.ceil(availablePages.length / PAGE_SIZE);
	const blogListTemplate = path.resolve(`src/components/templates/blog-list.tsx`);
	Array.from({ length: PAGE_COUNT }).forEach((_: any, index: number) => {
		const path = `/blog/${index > 0 ? index + 1 : ''}`;
		createPage({
			path,
			component: blogListTemplate,
			context: {
				page: index + 1,
				pageCount: PAGE_COUNT,
				limit: PAGE_SIZE,
				skip: index * PAGE_SIZE
			}
		})
	})

	// post page generation
	const blogPostTemplate = path.resolve(`src/components/templates/blog-post.tsx`);
	availablePages.forEach(({ id, frontmatter, internal }: any) => {
		createPage({
			context: { id },
			path: frontmatter.path,
			component: `${blogPostTemplate}?__contentFilePath=${internal.contentFilePath}`
		})
	})
}
