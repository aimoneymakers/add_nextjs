import posts from './data/posts.json';

export type Post = {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  thumbnail: string | null;
  categories: string[];
  content: string;
  readTime: number;
};

const all = posts as Post[];

export function getAllPosts(): Post[] {
  return all;
}

export function getPostBySlug(slug: string): Post | undefined {
  return all.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return all.map((p) => p.slug);
}

export function getRelatedPosts(current: Post, limit = 3): Post[] {
  const sameCategory = all.filter(
    (p) => p.slug !== current.slug && p.categories.some((c) => current.categories.includes(c))
  );
  const pool = sameCategory.length >= limit ? sameCategory : all.filter((p) => p.slug !== current.slug);
  return pool.slice(0, limit);
}

export function formatDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}
