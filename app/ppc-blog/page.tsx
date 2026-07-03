import type { Metadata } from 'next';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'PPC Blog',
  description: 'Straight-talking Pay Per Click advice — Google Ads strategy, Google Shopping, remarketing and more, from the team at Addicted 2 PPC.',
};

const PER_PAGE = 12;

export default function BlogIndexPage({ searchParams }: { searchParams: { page?: string } }) {
  const posts = getAllPosts();
  const page = Math.max(1, parseInt(searchParams.page || '1', 10) || 1);
  const totalPages = Math.ceil(posts.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const pagePosts = posts.slice(start, start + PER_PAGE);

  return (
    <>
      <section className="bg-ink text-white py-24 md:py-32">
        <div className="container-page">
          <p className="eyebrow mb-4">PPC blog</p>
          <h1 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] max-w-2xl">
            Straight-talking Pay Per Click advice.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
            {posts.length} articles on Google Ads strategy, Shopping, remarketing and getting more from
            every pound of ad spend.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pagePosts.map((post, i) => (
            <BlogCard key={post.id} post={post} priority={i < 3} />
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="flex items-center justify-center gap-2 mt-16" aria-label="Blog pagination">
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              return (
                <Link
                  key={p}
                  href={p === 1 ? '/ppc-blog' : `/ppc-blog?page=${p}`}
                  className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-mono ${
                    p === page ? 'bg-ink text-white' : 'text-muted hover:bg-ink/5'
                  }`}
                  aria-current={p === page ? 'page' : undefined}
                >
                  {p}
                </Link>
              );
            })}
          </nav>
        )}
      </section>
    </>
  );
}
