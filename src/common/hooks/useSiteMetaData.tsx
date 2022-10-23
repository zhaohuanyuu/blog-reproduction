import { graphql, useStaticQuery } from "gatsby"

type ReturnValue = {
  site: {
    siteMetadata: {
      description: string
    }
  }
}

export const useSiteMetadata = () => {
	const data = useStaticQuery<ReturnValue>(graphql`
      query {
          site {
              siteMetadata {
                  description
              }
          }
      }
  `)

  return data.site.siteMetadata
}
