declare namespace Components {
  type clsName = string;
  type mdxEdge = Queries.Mdx;

  type LayoutProp = {
    children: React.ReactNode;
  }

  type BlogListPageProp = {
    data: Queries.Query,
    pageContext: {
      page: number,
      pageCount: number,
      skip: number,
      limit: number
    }
  }

  type BlogListCompProp = {
    list: readonly mdxEdge[]
  }
}
