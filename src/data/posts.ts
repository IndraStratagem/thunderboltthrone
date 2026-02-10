export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: string;
  authorAvatar: string;
  publishedAt: string;
  readTime: number;
  featured: boolean;
}

// ============================================================
// BLOG POST TEMPLATE
// ============================================================
// To add a new blog post, copy the template below and fill in
// your content. Add it to the `blogPosts` array.
//
// {
//   id: "unique-id",
//   title: "Your Post Title",
//   slug: "your-post-title",                    // URL-friendly version
//   excerpt: "A short summary of your post...", // 1-2 sentences
//   content: `
//     <p>Your HTML content goes here.</p>
//     <h2>Subheading</h2>
//     <p>More content...</p>
//     <blockquote>A quote or callout</blockquote>
//     <pre><code>// code blocks</code></pre>
//     <ul><li>List items</li></ul>
//   `,
//   coverImage: "https://images.unsplash.com/photo-...",
//   category: "Technology",                      // Category name
//   tags: ["tag1", "tag2"],
//   author: "Your Name",
//   authorAvatar: "https://...",                 // Your avatar URL
//   publishedAt: "2025-01-15",                   // YYYY-MM-DD format
//   readTime: 5,                                 // Estimated minutes
//   featured: false,                             // Set true for hero
// },
// ============================================================

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Introduction to my Blog",
    slug: "The-Intro-to-my-blog",
    excerpt: "Explained who I am and why I started this blog, What will the readers get to see on this blog, Future plans and features have been enlisted to provide my vision and mission.",
    content: `
      <p>Hi, Readers, I am Indra, and I go by the username <a href = "https://x.com/IndraStratagem" target="blank">@IndraStratagem</a> on X.com, you all probably know me as the guy who writes minutes of meetings of numerous X Spaces.</p>
      <br>
      <b><h2 style="font-size: 30px;">Who I am & What I do</h2></b>
      <p>Currently, I am a CA Final student preparing for my exams. 
      My writing spans a wide spectrum of topics, ranging from finance to current events. 
      My goal is to approach every subject with an open mind and minimal bias.
      <br>I maintain a questioning attitude, which allows me to separate critical information from noise. 
      This skepticism is vital on a platform like X, where opinions are instantly fact-checked by the community. 
      Ensuring my knowledge is consistent and accurate is essential for maintaining my reputation and credibility.</p>
      <br>
      <b><h2 style="font-size: 30px;";>Why I write</h2></b>
      <p>First and foremost, writing fosters critical thinking. It forces one to think deeply and clarify complex ideas. 
      I started this blog to refine my writing skills and to publish long-form articles without the constraints of social media platforms.
      <br>Additionally, I am curating a "Hall of Fame" to archive high-impact posts and significant rebuttals from Right-wing voices on X. 
      My goal is to preserve these notable moments of digital discourse for posterity.</p>
      <br>
      <b><h2 style="font-size: 30px;";>Plans for Future</h2></b>
      <p>I plan to publish long-form articles regularly, with a priority on reporting current issues to grow our readership. 
      I am also working on the following improvements for the platform:</p>
      <ul>
        <li><b>1. Data Visualization:</b> Integrating interactive graphs, charts, and flowcharts.</li>
        <li><b>2. User Experience:</b> Improving the UI/UX and adding smooth animations.</li>
        <li><b>3. Community:</b> Introducing a comments section and inviting guest writers.</li>
        <li><b>4. Academic Rigor:</b> Publishing well-researched articles and research papers on topics within my expertise, complete with references.</li>
      </ul>
      <br>
      <b><h2 style="font-size: 30px";>Closing Thoughts</h2></b>
      <p>Thank you for joining me on this journey. I hope you find this experience immersive and leave here with more knowledge than when you arrived.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1500576992153-0271099def59?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "General",
    tags: ["introduction", "vision", "plans"],
    author: "Indra",
    authorAvatar: "Indra.png",
    publishedAt: "2025-02-09",
    readTime: 7,
    featured: true,
  },
  //paste template here
];

export const categories = [...new Set(blogPosts.map((p) => p.category))];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getLatestPosts(count: number): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}
