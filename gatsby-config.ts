import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  /*flags: {
    DEV_SSR: false
  },*/
  graphqlTypegen: {
    typesOutputPath: `./src/common/types/gatsby-types.d.ts`
  },
  siteMetadata: {
    author: 'zhaohuanyu',
    title: "Auu's blog ~",
    siteUrl: "https://zhy.gatsbyjs.io",
    description: 'my blog reproduction'
  },
  jsxRuntime: "automatic",
  jsxImportSource: "theme-ui",
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
      }
    },
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        preset: require("./src/styles/theme/index")
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-posts",
        path: "./src/contents/",
      },
      __key: "markdown-posts"
    }
  ]
};

module.exports = config;
