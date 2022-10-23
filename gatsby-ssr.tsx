import React from "react"
import Layout from "./src/components/core/Layout";

export const wrapPageElement = ({ element, props }: any) => {
  return <Layout {...props}>{element}</Layout>
}
