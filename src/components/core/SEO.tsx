import React from "react"
import { useSiteMetadata } from "../../common/hooks/useSiteMetaData"

type SEOProps = {
  lang?: string
  title?: string
  description?: string
  meta?: any
  keywords?: string
}

const defaultKeywords = '博客, 前端, gatsby, blog, frontend, framework, react, vue, node';

const SEO: React.FC<React.PropsWithChildren<SEOProps>> = ({
   title,
   description,
   meta,
   keywords,
   children
}) => {
  const { description: defaultDescription } = useSiteMetadata();
  let metas = [
    {
      name: `description`,
      content: description || defaultDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description || defaultDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `keywords`,
      content: keywords || defaultKeywords,
    }
  ];

  if (meta) {
    metas = metas.concat(meta);
  }

  return (
    <>
      <title>{ title }</title>
      {
        metas.map(item => (
          item.name
            ? <meta key={ item.name } name={ item.name } content={ item.content } />
            : <meta key={ item.property } property={ item.property } content={ item.content } />
        ))
      }
      { children }
      <meta name="theme-color" content="var(--theme-ui-colors-background)" />
    </>
  )
}

export default SEO;
