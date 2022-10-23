import React from "react"
import Layout from "./Layout"

const WrapPageElement = ({ element, props }: any) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout { ...props }>{ element }</Layout>
)

export default WrapPageElement;
