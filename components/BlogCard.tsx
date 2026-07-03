import Link from 'next/link';
import { formatDate, Post } from '@/lib/posts';
/* eslint-disable @next/next/no-img-element */

export default function BlogCard({ post, priority = false }: { post: Post; priority?: boolean }) {
  return (
    <Link href={`/ppc-blog/${post.slug}`} className="card overflow-hidden group flex flex-col">
      <div className="relative aspect-[16/10] bg-ink-soft overflow-hidden">
        {post.thumbnail && (
          <img
            src={post.thumbnail}
            alt={post.title}
            loading={priority ? 'eager' : 'lazy'}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        {post.categories[0] && (
          <span className="font-mono text-[11px] uppercase tracking-wide text-bid mb-2">
            {post.categories[0]}
          </span>
        )}
        <h3 className="font-display text-lg font-semibold leading-snug mb-2 group-hover:text-signal transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
        <div className="mt-auto flex items-center gap-3 text-xs text-muted font-mono">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readTime} min read</span>
        </div>
      </div>
    </Link>
  );
}
