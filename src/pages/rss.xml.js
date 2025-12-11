import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog', ({ data }) => !data.draft);
  
  return rss({
    title: 'Riven Blog',
    description: 'A center for all our resources & insights',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
      author: post.data.author.name,
      categories: [post.data.category],
    })),
    customData: `<language>en-us</language>`,
  });
}
