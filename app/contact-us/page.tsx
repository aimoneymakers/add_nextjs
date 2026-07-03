import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { site } from '@/lib/data/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Need help with your PPC campaigns? We'd love to help grow your sales, leads and customers. Contact our Google Ads experts today.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink text-white py-24 md:py-32">
        <div className="container-page">
          <p className="eyebrow mb-4">Contact us</p>
          <h1 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] max-w-2xl">
            Let&apos;s talk about your business results.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
            Need help with your PPC campaigns? We&apos;d love to help grow your sales, leads and
            customers. Contact our Google Ads experts today.
          </p>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-14">
          <div className="space-y-8">
            <div>
              <p className="eyebrow mb-3">Call us</p>
              <a href={site.phoneHref} className="font-display text-2xl font-semibold hover:text-signal">
                {site.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-3">Email us</p>
              <a href={`mailto:${site.email}`} className="font-display text-xl font-semibold hover:text-signal break-all">
                {site.email}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-3">Visit us</p>
              <p className="text-muted leading-relaxed">{site.address}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
