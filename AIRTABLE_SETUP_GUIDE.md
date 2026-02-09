# Airtable Setup Guide (Easiest Option!)

**If you want the EASIEST way to manage blog content with zero coding, use Airtable.**

Airtable is like a beautiful spreadsheet where you can write and manage blog posts, and your React website will automatically fetch and display them.

---

## Why Airtable?

✅ **Easiest to learn** - It's literally a spreadsheet with superpowers  
✅ **Free tier** - Completely free for personal blogs  
✅ **No backend knowledge needed** - Just fill in cells like Excel  
✅ **Instant publishing** - Write a post and it appears on your site in seconds  
✅ **Works with React** - Easy API integration  

---

## Step 1: Create an Airtable Base

1. Go to [airtable.com](https://www.airtable.com/) and sign up
2. Click **"Create a workspace"**
3. Name it: `My Blog`
4. You'll be taken to a blank base

---

## Step 2: Set Up Your Blog Posts Table

1. Click **"Create a table"**
2. Name it: `Blog Posts`
3. You'll see a default table with columns. Delete the default columns and create these:

| Column Name | Type | Required | Notes |
|------------|------|----------|-------|
| Title | Single line text | ✓ | Your article title |
| Slug | Single line text | ✓ | URL version (e.g., `my-first-post`) |
| Content | Long text | ✓ | The full article text |
| Excerpt | Single line text | | Short summary for preview |
| Category | Single select | | Choose: Product, Technology, Career, Design, Opinion |
| Author | Single line text | | Your name |
| Featured Image | Attachment | | Upload cover image |
| Published Date | Date | ✓ | When to publish |
| Tags | Multiple select | | Add relevant tags |
| Status | Single select | | Draft or Published |

---

## Step 3: Create Your API Key

1. Click your **Account** icon (top right) → **Account settings**
2. Go to the **API** section
3. Click **"Generate API key"**
4. Copy and save it somewhere safe (you'll use it in your React app)

---

## Step 4: Install Airtable Package

In your blog folder, run:

```bash
npm install airtable
```

---

## Step 5: Create Airtable Configuration

Create a file `src/lib/airtable.ts`:

```typescript
import Airtable from 'airtable'

const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base(process.env.REACT_APP_AIRTABLE_BASE_ID!)

export const getBlogPosts = async () => {
  try {
    const records = await base('Blog Posts')
      .select({
        filterByFormula: "{Status} = 'Published'",
        sort: [{ field: 'Published Date', direction: 'desc' }],
      })
      .all()

    return records.map((record) => ({
      id: record.id,
      title: record.fields.Title,
      slug: record.fields.Slug,
      content: record.fields.Content,
      excerpt: record.fields.Excerpt,
      category: record.fields.Category,
      author: record.fields.Author,
      publishedDate: record.fields['Published Date'],
      image: record.fields['Featured Image']?.[0]?.url,
      tags: record.fields.Tags || [],
    }))
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export const getBlogPostBySlug = async (slug: string) => {
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
      title: record.fields.Title,
      slug: record.fields.Slug,
      content: record.fields.Content,
      excerpt: record.fields.Excerpt,
      category: record.fields.Category,
      author: record.fields.Author,
      publishedDate: record.fields['Published Date'],
      image: record.fields['Featured Image']?.[0]?.url,
      tags: record.fields.Tags || [],
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export const getBlogPostsByCategory = async (category: string) => {
  try {
    const records = await base('Blog Posts')
      .select({
        filterByFormula: `AND({Status} = 'Published', {Category} = '${category}')`,
        sort: [{ field: 'Published Date', direction: 'desc' }],
      })
      .all()

    return records.map((record) => ({
      id: record.id,
      title: record.fields.Title,
      slug: record.fields.Slug,
      content: record.fields.Content,
      excerpt: record.fields.Excerpt,
      category: record.fields.Category,
      author: record.fields.Author,
      publishedDate: record.fields['Published Date'],
      image: record.fields['Featured Image']?.[0]?.url,
      tags: record.fields.Tags || [],
    }))
  } catch (error) {
    console.error('Error fetching posts by category:', error)
    return []
  }
}
```

---

## Step 6: Get Your Base ID

1. Go to [airtable.com/api](https://airtable.com/api)
2. Click on your workspace
3. Find your **Base ID** (looks like `appXxxxxxXxxxxXxxx`)
4. Copy it

---

## Step 7: Add Environment Variables

Create a `.env.local` file in your project root:

```
REACT_APP_AIRTABLE_API_KEY=your_api_key_here
REACT_APP_AIRTABLE_BASE_ID=your_base_id_here
```

⚠️ **Never commit .env.local to GitHub!** Add it to `.gitignore` (it should already be there)

---

## Step 8: Update Your Components

Replace your blog component to fetch from Airtable:

```typescript
import { useEffect, useState } from 'react'
import { getBlogPosts } from '../lib/airtable'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getBlogPosts()
      setPosts(data)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <p>By {post.author} on {post.publishedDate}</p>
        </article>
      ))}
    </div>
  )
}
```

---

## How to Add a Blog Post

1. Open your Airtable base
2. Click on the **"Blog Posts"** table
3. Click **"+"** to add a new row (or click the last empty row)
4. Fill in:
   - **Title** - Your article title
   - **Slug** - Lowercase, hyphens (e.g., `how-i-built-my-blog`)
   - **Content** - Your full article
   - **Excerpt** - Short preview text
   - **Category** - Pick one from dropdown
   - **Author** - Your name
   - **Featured Image** - Click to upload
   - **Published Date** - Today's date
   - **Tags** - Add multiple tags
   - **Status** - Change to "Published" to go live
5. Hit Enter - **Your post is now live!**

That's literally it!

---

## Comparison: Sanity vs Airtable

| Feature | Sanity | Airtable |
|---------|--------|----------|
| Ease of use | Medium | Very Easy |
| Learning curve | Steep | Flat |
| Content editor UI | Beautiful custom UI | Spreadsheet-like |
| Free tier | Yes | Yes |
| Best for | Professional blogs | Quick/simple blogs |
| Setup time | 30 mins | 5 mins |
| Requires coding | Yes | No |

**Start with Airtable if you just want to publish content quickly.**  
**Use Sanity if you want a professional, scalable blogging platform.**

---

## Common Issues

**Q: My posts aren't showing up**  
A: Make sure the **Status** is set to "Published"

**Q: I changed something but the website didn't update**  
A: The website caches data. Add a hard refresh (Ctrl+Shift+R)

**Q: Can I add comments?**  
A: Not with Airtable alone, but you can add a separate service like Disqus

**Q: What about SEO?**  
A: Airtable works, but Sanity is better for SEO-optimized blogs

---

## Next Steps

1. Create your Airtable base
2. Add a few blog posts
3. Deploy to Vercel
4. Every time you publish a post in Airtable, your live website updates!

