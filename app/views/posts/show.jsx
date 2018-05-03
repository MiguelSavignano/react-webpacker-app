import React from "react"
import Layout from "../layouts/application"

const PostsShowView = ({ params }) => (
  <Layout>
    <h1>PostsShowView posts#show {params.id}</h1>
  </Layout>
)
export default PostsShowView
