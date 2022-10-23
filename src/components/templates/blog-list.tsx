import React, { ChangeEvent } from "react";
import { graphql, navigate } from "gatsby";

import { Container } from "theme-ui";
import BlogList from "../shared/BlogList";
import SEO from "../../components/core/SEO";

const Blog = ({ data, pageContext }: Components.BlogListPageProp) => {
  const list = data.allMdx.nodes;
  const { page, pageCount } = pageContext;

  function onPageChange(e: ChangeEvent<unknown>, page: number) {
    navigate(`/blog${page > 1 ? '/' + page : ''}`)
  }

  return (
    <>
      <Container sx={{ maxWidth: ['100%', 700, 800] }}>
        <h1 sx={{ mb: 4 }}>All</h1>
        <BlogList list={ list } />
      </Container>
    </>

  );
};

export default Blog;
export const Head = ({ pageContext }: Components.BlogListPageProp) => <SEO title={'blog list | Page ' + pageContext.page}/>;

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMdx(
      skip: $skip
      limit: $limit
      filter: { frontmatter: { draft: { eq: false } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          title
          path
          date(formatString: "Do MMMM, YYYY")
        }
        excerpt(pruneLength: 60)
      }
    }
  }
`;
