import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.addicted2ppc.com';
  const staticRoutes = ['', '/about-us', '/services', '/contact-us', '/free-ppc-proposal', '/ppc-blog'].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    })
  );
  const postRoutes = getAllPosts().map((post) => ({
    url: `${base}/ppc-blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }));
  return [...staticRoutes, ...postRoutes];
}
