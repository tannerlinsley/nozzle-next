import React from 'react'
import Layout from 'layouts/Main'
import { getPosts } from 'api/posts'

import Post from 'components/Post'

const IndexPage = ({ posts }) => (
  <Layout>
    <ul>
      {posts.map(p => <Post key={p.title} post={p} />)}
    </ul>
  </Layout>
)

IndexPage.getInitialProps = async ({ req }) => {
  const posts = await getPosts()
  return { posts }
}

export default IndexPage
