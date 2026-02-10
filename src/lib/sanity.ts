import { createClient } from 'next-sanity'   

const projectId = 'lja4ymjg'
const dataset = 'production'
const apiVersion = '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

// GROQ query to get all posts
export const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    publishedAt,
    mainImage,
    category,
    excerpt,
    body,
    tags,
  }
`

// GROQ query to get a single post by slug
export const postQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    publishedAt,
    mainImage,
    category,
    excerpt,
    body,
    tags,
  }
`

// GROQ query to get posts by category
export const postsByCategory = `
  *[_type == "post" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    publishedAt,
    mainImage,
    category,
    excerpt,
    tags,
  }
`