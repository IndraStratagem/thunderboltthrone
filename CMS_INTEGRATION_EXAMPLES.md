# Ready-to-Use CMS Integration Code Examples

Copy-paste these code blocks into your project to integrate with your chosen CMS.

---

## 🟦 AIRTABLE Integration

### 1. Install Package
```bash
npm install airtable
```

### 2. Create `src/lib/airtable.ts`

```typescript
import Airtable from 'airtable'

const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY
const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID

const base = new Airtable({ apiKey }).base(baseId)

export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  category: string
  author: string
  publishedDate: string
  image?: string
  tags: string[]
}

// Get all published posts
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const records = await base('Blog Posts')
      .select({
        filterByFormula: "{Status} = 'Published'",
        sort: [{ field: 'Published Date', direction: 'desc' }],
      })
      .all()

    return records.map((record) => ({
      id: record.id,
      title: (record.fields.Title as string) || '',
      slug: (record.fields.Slug as string) || '',
      content: (record.fields.Content as string) || '',
      excerpt: (record.fields.Excerpt as string) || '',
      category: (record.fields.Category as string) || '',
      author: (record.fields.Author as string) || 'Anonymous',
      publishedDate: (record.fields['Published Date'] as string) || '',
      image: (record.fields['Featured Image'] as any)?.[0]?.url,
      tags: (record.fields.Tags as string[]) || [],
    }))
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

// Get single post by slug
export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const records = await base('Blog Posts')
      .select({
        filterByFormula: `{Slug} = '${slug}'`,
      })
      .all()

    if (records.length === 0) return null

    const record = records[0]
    return {
      id: record.id,
      title: (record.fields.Title as string) || '',
      slug: (record.fields.Slug as string) || '',
      content: (record.fields.Content as string) || '',
      excerpt: (record.fields.Excerpt as string) || '',
      category: (record.fields.Category as string) || '',
      author: (record.fields.Author as string) || 'Anonymous',
      publishedDate: (record.fields['Published Date'] as string) || '',
      image: (record.fields['Featured Image'] as any)?.[0]?.url,
      tags: (record.fields.Tags as string[]) || [],
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

// Get posts by category
export const getBlogPostsByCategory = async (category: string): Promise<BlogPost[]> => {
  try {
    const records = await base('Blog Posts')
      .select({
        filterByFormula: `AND({Status} = 'Published', {Category} = '${category}')`,
        sort: [{ field: 'Published Date', direction: 'desc' }],
      })
      .all()

    return records.map((record) => ({
      id: record.id,
      title: (record.fields.Title as string) || '',
      slug: (record.fields.Slug as string) || '',
      content: (record.fields.Content as string) || '',
      excerpt: (record.fields.Excerpt as string) || '',
      category: (record.fields.Category as string) || '',
      author: (record.fields.Author as string) || 'Anonymous',
      publishedDate: (record.fields['Published Date'] as string) || '',
      image: (record.fields['Featured Image'] as any)?.[0]?.url,
      tags: (record.fields.Tags as string[]) || [],
    }))
  } catch (error) {
    console.error('Error fetching posts by category:', error)
    return []
  }
}

// Search posts by tag
export const getBlogPostsByTag = async (tag: string): Promise<BlogPost[]> => {
  try {
    const allPosts = await getBlogPosts()
    return allPosts.filter((post) => post.tags.includes(tag))
  } catch (error) {
    console.error('Error fetching posts by tag:', error)
    return []
  }
}
```

### 3. Create `.env.local`
```
VITE_AIRTABLE_API_KEY=patXXXXXXXXXXXXXXXX
VITE_AIRTABLE_BASE_ID=appXXXXXXXXXXXXXXXX
```

### 4. Update Your Blog Component

Replace `src/pages/Blog.tsx` with:

```typescript
import { useEffect, useState } from 'react'
import { getBlogPosts, BlogPost } from '../lib/airtable'
import BlogCard from '../components/BlogCard'

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getBlogPosts()
        setPosts(data)
      } catch (error) {
        console.error('Error loading posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === selectedCategory)

  const categories = ['All', ...new Set(posts.map(p => p.category))]

  if (loading) {
    return <div className="text-center py-20">Loading blog posts...</div>
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-8">Blog</h1>
        
        {/* Category Filter */}
        <div className="flex gap-2 mb-12 overflow-x-auto">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-amber-900 text-white'
                  : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <p className="text-center text-gray-600">No posts found in this category.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
```

---

## 🔷 SANITY Integration

### 1. Install Packages
```bash
npm install next-sanity @portabletext/react
```

### 2. Create `src/lib/sanity.ts`

```typescript
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
const apiVersion = '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
  return builder.image(source).url()
}

// Query definitions
export const postsQuery = `
  *[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
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

export const postQuery = `
  *[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
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

export const postsByCategory = `
  *[_type == "post" && category == $category && !(_id in path("drafts.**"))] | order(publishedAt desc) {
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

// Fetch functions
export const getAllPosts = async () => {
  return client.fetch(postsQuery)
}

export const getPostBySlug = async (slug: string) => {
  return client.fetch(postQuery, { slug })
}

export const getPostsByCategory = async (category: string) => {
  return client.fetch(postsByCategory, { category })
}

export const getCategories = async () => {
  const query = `
    array(
      *[_type == "post"].category[]
    ) | unique()
  `
  return client.fetch(query)
}

export const getTags = async () => {
  const query = `
    array(
      *[_type == "post"].tags[]
    ) | unique()
  `
  return client.fetch(query)
}
```

### 3. Create `src/lib/sanityImageBuilder.ts`

```typescript
import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanity'

const builder = imageUrlBuilder(client)

export function sanityImageUrl(source: any) {
  if (!source) return ''
  return builder.image(source).width(800).auto('format').url()
}
```

### 4. Create `.env.local`
```
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
```

### 5. Update Blog Component

Replace `src/pages/Blog.tsx` with:

```typescript
import { useEffect, useState } from 'react'
import { getAllPosts, getCategories } from '../lib/sanity'
import BlogCard from '../components/BlogCard'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  author: string
  publishedAt: string
  category: string
  excerpt: string
  mainImage: any
  tags: string[]
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await getAllPosts()
        const categoriesData = await getCategories()
        
        setPosts(postsData)
        setCategories(['All', ...categoriesData.filter(Boolean)])
      } catch (error) {
        console.error('Error loading posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === selectedCategory)

  if (loading) {
    return <div className="text-center py-20">Loading blog posts...</div>
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-8">Blog</h1>
        
        {/* Category Filter */}
        <div className="flex gap-2 mb-12 overflow-x-auto">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-amber-900 text-white'
                  : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <p className="text-center text-gray-600">No posts found.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <BlogCard 
                key={post._id} 
                post={{
                  id: post._id,
                  title: post.title,
                  slug: post.slug.current,
                  excerpt: post.excerpt,
                  category: post.category,
                  author: post.author,
                  publishedDate: post.publishedAt,
                  image: post.mainImage,
                  tags: post.tags,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
```

---

## 📝 Environment Variables for Both

### Local Development (.env.local)
```
# Airtable
VITE_AIRTABLE_API_KEY=patXXXXXXXXXXXXXXXX
VITE_AIRTABLE_BASE_ID=appXXXXXXXXXXXXXXXX

# Sanity (only if using Sanity)
VITE_SANITY_PROJECT_ID=your_project_id_here
VITE_SANITY_DATASET=production
```

### Vercel Deployment
1. Go to your Vercel project **Settings** → **Environment Variables**
2. Add the same variables there
3. Redeploy

---

## 🔄 Switching Between CMS

To support both CMS, create a `src/lib/cmsConfig.ts`:

```typescript
export const CMS_TYPE = 'airtable' // Change to 'sanity' to switch

export const isAirtable = CMS_TYPE === 'airtable'
export const isSanity = CMS_TYPE === 'sanity'
```

Then conditionally import:

```typescript
import { isAirtable } from '../lib/cmsConfig'

let getBlogPosts: any

if (isAirtable) {
  const { getBlogPosts: getAirtablePosts } = await import('../lib/airtable')
  getBlogPosts = getAirtablePosts
} else {
  const { getAllPosts } = await import('../lib/sanity')
  getBlogPosts = getAllPosts
}
```

---

## ✅ Checklist

- [ ] Choose your CMS (Airtable recommended)
- [ ] Install packages: `npm install airtable` or `npm install next-sanity`
- [ ] Create `.env.local` with your API keys
- [ ] Create the library file (`lib/airtable.ts` or `lib/sanity.ts`)
- [ ] Update your Blog component
- [ ] Add your first blog post to your CMS
- [ ] Test locally: `npm run dev`
- [ ] Deploy to Vercel with environment variables
- [ ] Test on live website

---

## Troubleshooting

**"Posts not showing up?"**
- Check `.env.local` has correct API keys
- Verify posts status is "Published" in your CMS
- Check browser console for errors

**"Getting CORS errors?"**
- This is normal for frontend + Airtable/Sanity
- Should work fine in production
- For local dev, you might need to adjust CORS settings

**"Images not loading?"**
- Airtable: Check the attachment field format
- Sanity: Use the `urlFor` helper function
- Make sure images are publicly accessible

---

## Next Steps

1. Pick Airtable or Sanity
2. Copy the code for your choice
3. Follow the setup guide
4. Add environment variables
5. Create your first post
6. Deploy!

Questions? Check the detailed guides: `AIRTABLE_SETUP_GUIDE.md` or `SANITY_SETUP_GUIDE.md`
