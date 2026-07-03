import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-page py-32 text-center">
      <p className="eyebrow justify-center mb-4">404</p>
      <h1 className="font-display text-3xl md:text-5xl font-semibold">Page not found</h1>
      <p className="text-muted mt-4">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="btn-primary mt-8 inline-flex">Back to homepage</Link>
    </section>
  );
}
