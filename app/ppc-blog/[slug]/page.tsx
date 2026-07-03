import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogCard from '@/components/BlogCard';
import { formatDate, getAllSlugs, getPostBySlug, getRelatedPosts } from '@/lib/posts';
/* eslint-disable @next/next/no-img-element */

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.thumbnail ? [post.thumbnail] : undefined,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);

  return (
    <>
      <article>
        <header className="bg-ink text-white py-20 md:py-28">
          <div className="container-page max-w-3xl">
            <Link href="/ppc-blog" className="font-mono text-xs uppercase tracking-wide text-bid">
              ← PPC Blog
            </Link>
            {post.categories[0] && (
              <p className="eyebrow mt-6 mb-4">{post.categories[0]}</p>
            )}
            <h1 className="font-display font-bold text-3xl md:text-5xl leading-[1.1]">{post.title}</h1>
            <div className="flex items-center gap-3 text-sm text-white/50 font-mono mt-6">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>·</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </header>

        {post.thumbnail && (
          <div className="container-page -mt-10 md:-mt-14 relative z-10 max-w-4xl">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={post.thumbnail}
                alt={post.title}
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <div className="prose-a2" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-paper border-t border-ink-line/10 py-16 md:py-20">
          <div className="container-page">
            <p className="eyebrow mb-8">Keep reading</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {related.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
