# Sanity.io Setup Guide for Your Blog

## What is Sanity.io?
Sanity.io is a **Headless CMS** - it's just a beautiful interface where you write and manage your blog content. Your React website fetches the content from Sanity's servers via API.

**Benefits:**
- Write blog posts in a beautiful editor
- No coding needed to publish content
- Content is synced instantly to your live website
- Works perfectly with Vercel (auto-deploy on publish)
- Free tier covers personal blogs

---

## Step 1: Create a Sanity.io Account & Project

1. Go to [sanity.io](https://www.sanity.io/)
2. Click **"Get started"** and sign up (use your GitHub account for easier login)
3. Create a new project:
   - Project name: `my-personal-blog` (or whatever you prefer)
   - Select dataset: **production**
   - Choose starter: **Clean project**
4. You'll be taken to the Sanity Studio (the content editor)

---

## Step 2: Define Your Content Schema

In your Sanity project, you need to define what a "blog post" looks like. Here's how:

1. In Sanity Studio, go to **Desk** (left sidebar)
2. You'll see a `schemaTypes` folder in your project file browser
3. You need to edit the schema files. Navigate to the project folder on your computer:
   ```bash
   # If you created a separate Sanity project folder
   cd path/to/your-sanity-project
   ```

4. Create/edit the blog post schema. In your Sanity project folder, find `schemaTypes/` and add a file called `post.ts`:

```typescript
import {defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'You',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Product', value: 'Product'},
          {title: 'Technology', value: 'Technology'},
          {title: 'Career', value: 'Career'},
          {title: 'Design', value: 'Design'},
          {title: 'Opinion', value: 'Opinion'},
        ],
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      date: 'publishedAt',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author, date, title, media} = selection
      return {
        title,
        media,
        subtitle: `by ${author} on ${new Date(date).toLocaleDateString()}`,
      }
    },
  },
})
```

5. Also create a `blockContent.ts` schema for rich text editing:

```typescript
import {defineType, defineArrayMember} from 'sanity'

export const blockContent = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      name: 'block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Number', value: 'number'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
```

6. Update your `schemaTypes/index.ts` to include these:

```typescript
import {blockContent} from './blockContent'
import {post} from './post'

export const schemaTypes = [post, blockContent]
```

---

## Step 3: Install Sanity Dependencies in Your React Blog

In your blog's main directory (NOT the Sanity project folder), install the Sanity client:

```bash
npm install next-sanity sanity @portabletext/react
```

---

## Step 4: Create Sanity Configuration File

Create a file `src/lib/sanity.ts`:

```typescript
import { createClient } from 'next-sanity'   

const projectId = 'YOUR_PROJECT_ID_HERE'
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
```

**⚠️ Important:** Replace `'YOUR_PROJECT_ID_HERE'` with your actual Sanity project ID (find it in your Sanity project settings)

---

## Step 5: Update Your React Components to Use Sanity

Instead of fetching from local `posts.ts`, your components will fetch from Sanity.

**Example: Updating the Blog page**

```typescript
import { useEffect, useState } from 'react'
import { client, postsQuery } from '../lib/sanity'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(postsQuery)
        setPosts(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  )
}
```

---

## Step 6: Get Your Sanity Project ID

1. In your Sanity project dashboard, click **Settings** (bottom left)
2. Go to **API** tab
3. Copy your **Project ID**
4. Paste it into your `src/lib/sanity.ts` file where it says `'YOUR_PROJECT_ID_HERE'`

---

## Step 7: Deploy to Vercel

1. Push your updated blog code to GitHub
2. Go to Vercel and redeploy your project
3. That's it! Vercel will automatically rebuild your site whenever you publish new content in Sanity

---

## How to Use Sanity Studio to Write Blog Posts

1. Go to your Sanity project dashboard
2. Click **Desk** in the left sidebar
3. Click **+ Create** and select **Blog Post**
4. Fill in:
   - **Title** - Your article title
   - **Slug** - Auto-generated from title (e.g., `my-first-post`)
   - **Category** - Choose from dropdown
   - **Excerpt** - Short summary for list view
   - **Main Image** - Upload a cover image
   - **Body** - Write your content (rich text editor with formatting)
   - **Tags** - Add relevant tags
5. Click **Publish**
6. Your blog website will automatically update within seconds!

---

## Cost Breakdown

- **Sanity.io:** Free tier covers unlimited articles
- **Vercel:** Free tier for deployment
- **Total Cost:** $0 (unless you want premium features)

---

## Switching Between Local and Sanity Data

If you want to keep using local data while testing:

```typescript
// In your component, add a toggle:
const USE_SANITY = true // Set to false to use local data

if (USE_SANITY) {
  // Fetch from Sanity
} else {
  // Use local posts from posts.ts
}
```

---

## Need Help?

- **Sanity Documentation:** https://www.sanity.io/docs
- **GROQ Query Language:** https://www.sanity.io/docs/groq
- **Portable Text (Rich Content):** https://portabletext.org/
