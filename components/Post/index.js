import React from 'react'
import { Link } from 'routes'
import Wrapper from './Wrapper'

const PostItem = ({ post }) => (
  <Wrapper>
    <Link route='post' params={{ slug: post.fields.slug }}>
      <a>
        <h3>{post.fields.title}</h3>
        <p>{post.fields.body}</p>
      </a>
    </Link>
  </Wrapper>
)

export default PostItem
