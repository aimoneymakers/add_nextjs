import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import StatCounter from '@/components/StatCounter';
import ContactForm from '@/components/ContactForm';
import {
  auditPoints, certifications, clientLogos, featuredOn, howItWorks, site, whyLosingMoney,
} from '@/lib/data/site';
/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: 'Pay Per Click Marketing Agency in Burgess Hill',
  description:
    'Looking for a top PPC agency? We help grow your sales, revenue and customers through Google Ads. Passionate about performance, delivering real results.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink text-white overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/team-hero.webp"
            alt=""
            fill
            priority
            fetchPriority="high"
            quality={70}
            sizes="100vw"
            className="object-cover"
          />
          {/* Dark tint so text stays readable over the photo */}
          <div className="absolute inset-0 bg-ink/70" />
        </div>

        {/* Glow blobs sit above the tint and blend with the photo's light areas,
            so the dark overlay doesn't wash out their hue/brightness */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-signal/40 blur-[120px] mix-blend-screen" />
        <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full bg-bid/30 blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-grain pointer-events-none mix-blend-overlay" />

        <div className="container-page relative py-24 md:py-36">
          <p className="eyebrow mb-6 text-signal-soft">Google Ads · Bing Ads · Shopping</p>
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
            Affordable Pay Per Click management, built to sell.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
            Scale your business with Addicted 2 PPC. Increase sales, revenue and customers through
            Google Ads, run by a team of certified Pay Per Click experts.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/free-ppc-proposal" className="btn-primary">Boost Your Sales</Link>
            <Link href="#how-it-works" className="btn-ghost">See How It Works</Link>
          </div>

          <div className="grid grid-cols-3 gap-6 md:gap-10 mt-20 max-w-xl">
            <StatCounter target={52.2} prefix="£" suffix="M+" decimals={1} label="Managed ad spend" />
            <StatCounter target={15} suffix="+" label="Years experience" />
            <StatCounter target={30} suffix="+" label="Industries served" />
          </div>
        </div>
      </section>

      {/* Opportunity */}
      <section className="container-page py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <p className="eyebrow mb-4">The opportunity</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
              Millions of people search Google every day, ready to buy.
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              That&apos;s a real opportunity for your business — but only once we understand exactly how
              big it is. Just like a house, a profitable PPC account needs a solid foundation before it
              can be built up.
            </p>
          </div>
          <div className="space-y-5">
            {[
              'How many people are searching for your products or services?',
              'What is a new sale actually worth to your business?',
              'What conversion rate turns visitors into paying customers?',
            ].map((q, i) => (
              <div key={i} className="card p-5 flex gap-4 items-start">
                <span className="font-mono text-xs text-bid pt-1">0{i + 1}</span>
                <p className="text-ink/85">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PPC works */}
      <section className="bg-ink-soft text-white py-20 md:py-28">
        <div className="container-page grid md:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow mb-4">Why it works</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
              High intent beats a megaphone.
            </h2>
            <p className="mt-5 text-white/60 leading-relaxed">
              When people search Google, they already know what they want — and they&apos;re telling
              you, in their own words. That&apos;s different to social ads, which interrupt people who
              weren&apos;t looking to buy. Search pulls customers in like a magnet.
            </p>
            <Link href="/services" className="inline-block mt-6 text-signal-soft font-medium hover:underline">
              Explore our services →
            </Link>
          </div>
          <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
            <p className="font-display text-2xl md:text-3xl leading-snug">
              63% of Pay Per Click accounts waste their marketing budget.
            </p>
            <p className="mt-4 text-white/50 text-sm">
              Most fail from poor targeting, weak tracking, or sending every visitor to a homepage that
              was never built to convert.
            </p>
            <Link href="/free-ppc-proposal" className="btn-primary mt-6 inline-flex">
              Get My PPC Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* How PPC works */}
      <section id="how-it-works" className="container-page py-20 md:py-28">
        <p className="eyebrow mb-4">How pay per click works</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-2xl leading-tight">
          An auction, not a subscription. You only pay for results.
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {howItWorks.map((item, i) => (
            <div key={i} className="card p-7">
              <span className="font-mono text-xs text-bid">STEP 0{i + 1}</span>
              <h3 className="font-display text-xl font-semibold mt-3 mb-3">{item.title}</h3>
              <p className="text-muted leading-relaxed text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="border-y border-ink-line/10 bg-white">
        <div className="container-page py-10">
          <p className="eyebrow mb-6">Certified Pay Per Click experts</p>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
            {certifications.map((c) => (
              <img
                key={c.name}
                src={c.logo}
                alt={c.name}
                width={140}
                height={44}
                loading="lazy"
                className="h-10 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why losing money */}
      <section className="container-page py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <p className="eyebrow mb-4">Common mistakes</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
              Why most businesses lose money on PPC.
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              Anyone can set up a Google Ads account in minutes — but hundreds of companies burn budget
              because they don&apos;t understand how the auction actually works.
            </p>
          </div>
          <ul className="space-y-4">
            {whyLosingMoney.map((point, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="mt-1 w-2 h-2 rounded-full bg-bid shrink-0" />
                <p className="text-ink/85">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured on */}
      <section className="bg-paper py-10 border-y border-ink-line/10">
        <div className="container-page">
          <p className="eyebrow mb-6">As featured on</p>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
            {featuredOn.map((f) => (
              <img
                key={f.name}
                src={f.logo}
                alt={f.name}
                width={130}
                height={40}
                loading="lazy"
                className="h-9 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us / stats */}
      <section className="bg-ink text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain pointer-events-none" />
        <div className="container-page relative">
          <p className="eyebrow mb-4">Why choose Addicted 2 PPC</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-2xl leading-tight">
            Don&apos;t outspend your competitors. Outsmart them on Google Ads.
          </h2>
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl">
            <StatCounter target={52.2} prefix="£" suffix="M+" decimals={1} label="Managed budget" />
            <StatCounter target={15} suffix="+" label="Years experience" />
            <StatCounter target={30} suffix="+" label="Different industries" />
          </div>
          <Link href="/free-ppc-proposal" className="btn-primary mt-14 inline-flex">
            Get My PPC Proposal
          </Link>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 md:py-28 container-page">
        <p className="eyebrow mb-8">Clients our team has worked with</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 items-center">
          {clientLogos.map((c) => (
            <div key={c.name} className="flex justify-center">
              <img
                src={c.logo}
                alt={c.name}
                width={140}
                height={50}
                loading="lazy"
                className="h-10 w-auto object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Audit */}
      <section className="bg-ink-soft text-white py-20 md:py-28">
        <div className="container-page grid md:grid-cols-2 gap-14">
          <div>
            <p className="eyebrow mb-4">Pay per click audit</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
              Keep your account running at its best.
            </h2>
            <p className="mt-5 text-white/60 leading-relaxed">
              Google constantly changes its algorithm. Just like a car, your account needs regular
              checks under the bonnet to keep performing at its best. Our audit highlights exactly where
              budget is being wasted — and where the next opportunity is.
            </p>
            <Link href="/free-ppc-proposal" className="btn-primary mt-6 inline-flex">
              Get Your PPC Audit
            </Link>
          </div>
          <ul className="space-y-4">
            {auditPoints.map((point, i) => (
              <li key={i} className="flex gap-4 items-start rounded-xl border border-white/10 p-5">
                <span className="font-mono text-xs text-bid pt-0.5">0{i + 1}</span>
                <p className="text-white/80">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="start" className="container-page py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <p className="eyebrow mb-4">Get in touch</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
              Ready to increase your business results?
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              Call our marketing team on{' '}
              <a href={site.phoneHref} className="text-signal font-medium">{site.phoneDisplay}</a>{' '}
              or send us a message and we&apos;ll get back to you within one business day.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
