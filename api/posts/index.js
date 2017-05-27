import axios from 'axios'
// import fs from 'fs-extra'

let staticAssets = false
if (process.env.NODE_ENV === 'production') {
  staticAssets = require('../../data.json')
}

export async function getPosts () {
  if (staticAssets) {
    const { posts } = staticAssets
    return posts
  }
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return data
}

export async function getPost (slug) {
  if (staticAssets) {
    const { posts } = staticAssets
    // console.log(posts)
    return posts.find(d => d.fields.slug === slug)
  }
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?title=${slug}`
  )
  return data
}
