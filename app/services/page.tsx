import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Google Search, Shopping, Remarketing, Display and YouTube Ads — full-funnel Pay Per Click services built to turn ad spend into revenue.',
};

const services = [
  {
    id: 'search-ads',
    tag: 'Highest intent',
    title: 'Google Search',
    body: 'We get your business in front of people the moment they search for what you sell. Search ads target pure intent — visitors are already looking to buy, so every click carries real value.',
  },
  {
    id: 'shopping',
    tag: 'Ecommerce',
    title: 'Google Shopping',
    body: 'Product listings with image, price and reviews shown directly in search results. Shopping campaigns put your products in front of ready-to-buy customers at the exact moment of comparison.',
  },
  {
    id: 'remarketing',
    tag: 'Win back visitors',
    title: 'Google Remarketing',
    body: 'Ads shown to people who\u2019ve already visited your site but didn\u2019t convert. Remarketing keeps your brand front of mind across YouTube and the wider web, bringing warm visitors back to finish what they started.',
  },
  {
    id: 'display',
    tag: '90% of online users',
    title: 'Google Display',
    body: 'Visual banner ads across Google\u2019s network, reaching desktop, mobile, tablet and smart TV. Ideal for building brand awareness with audiences who haven\u2019t heard of you yet.',
  },
  {
    id: 'youtube-ads',
    tag: '2nd largest site online',
    title: 'YouTube Ads',
    body: 'Image or video ads from 6 seconds to 3 minutes, targeted by topic, keyword, device or placement. Like a TV advert, but priced per view, click or impression — a fraction of the cost.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink text-white py-24 md:py-32">
        <div className="container-page">
          <p className="eyebrow mb-4">Services</p>
          <h1 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] max-w-2xl">
            Full-funnel Pay Per Click, run by specialists.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
            We help you reach targeted visitors across every corner of Google — always up to date with
            what actually works.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="flex flex-wrap gap-3">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="rounded-full border border-ink-line/20 px-4 py-2 text-sm font-medium hover:border-signal hover:text-signal transition-colors">
              {s.title}
            </a>
          ))}
        </div>
      </section>

      <div className="divide-y divide-ink-line/10">
        {services.map((s, i) => (
          <section key={s.id} id={s.id} className="container-page py-16 md:py-20 scroll-mt-28">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
              <div>
                <span className="font-mono text-xs text-bid">SERVICE 0{i + 1}</span>
                <p className="eyebrow mt-4 mb-2">{s.tag}</p>
              </div>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">{s.title}</h2>
                <p className="text-muted leading-relaxed max-w-2xl">{s.body}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-ink-soft text-white py-20 md:py-28">
        <div className="container-page grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
            <h3 className="font-display text-xl font-semibold mb-3">Google Ad Grant</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Eligible non-profits can access up to $10,000 a month in free Google search advertising.
              We help charities apply for and manage their Ad Grant account.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
            <h3 className="font-display text-xl font-semibold mb-3">Google Ads Voucher</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              New advertisers can often claim a Google Ads voucher toward their first campaign. We&apos;ll
              help you check eligibility and put it to work properly.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-xl mx-auto leading-tight">
          Not sure which service is right for your business?
        </h2>
        <Link href="/free-ppc-proposal" className="btn-dark mt-8 inline-flex">
          Get My Free PPC Proposal
        </Link>
      </section>
    </>
  );
}
