import type { Metadata } from 'next';
import Link from 'next/link';
import { aboutBanner, certifications, founderPhoto } from '@/lib/data/site';
/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet the team behind Addicted 2 PPC — a Pay Per Click marketing agency in Sussex built on transparent reporting and hands-on Google Ads experience.',
};

const timeline = [
  {
    year: 'Early career',
    title: 'Ecommerce at TUI Travel',
    body: 'Esteban Martinez built his in-house ecommerce experience at TUI Travel, Europe\u2019s largest travel company — learning how paid channels perform at real scale.',
  },
  {
    year: 'Founding',
    title: 'Co-founded Active Online Marketing Group',
    body: 'What began as a focused Pay Per Click practice grew, as clients needed more: SEO, social, email marketing, CRO and branding, into a full digital marketing stack.',
  },
  {
    year: 'Today',
    title: 'Addicted 2 PPC',
    body: 'A YouTube channel and regular writing on Quora and Twitter now share what we learn managing live accounts — while the agency stays laser-focused on one thing: Pay Per Click that pays for itself.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink text-white py-24 md:py-32">
        <div className="container-page grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow mb-4">About us</p>
            <h1 className="font-display font-bold text-4xl md:text-6xl leading-[1.05]">
              Marketers first. Media buyers second.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              With a strong focus on exceptional service and constant growth, Esteban Martinez lives and
              breathes every part of digital marketing — and built this agency around one goal: clear,
              transparent results you can actually see.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <img
              src={aboutBanner}
              alt="Addicted 2 PPC"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="grid md:grid-cols-[220px_1fr] gap-10 items-start mb-14">
          <div className="relative aspect-square w-full max-w-[220px] rounded-2xl overflow-hidden">
            <img
              src={founderPhoto}
              alt="Esteban Martinez, Founder of Addicted 2 PPC"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="eyebrow mb-3">Founder</p>
            <h2 className="font-display text-2xl font-semibold">Esteban Martinez</h2>
            <p className="text-muted mt-2 max-w-md leading-relaxed">
              Founder of Addicted 2 PPC, previously building ecommerce experience in-house at TUI Travel.
            </p>
          </div>
        </div>

        <p className="eyebrow mb-4">The story so far</p>
        <div className="mt-10 space-y-10">
          {timeline.map((item, i) => (
            <div key={i} className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-10 border-t border-ink-line/10 pt-8">
              <span className="font-mono text-xs uppercase tracking-wide text-bid">{item.year}</span>
              <div>
                <h2 className="font-display text-2xl font-semibold mb-3">{item.title}</h2>
                <p className="text-muted leading-relaxed max-w-2xl">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink-soft text-white py-20 md:py-28">
        <div className="container-page grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow mb-4">How we work</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
              Full transparency, every step.
            </h2>
            <p className="mt-5 text-white/60 leading-relaxed">
              We provide clear, transparent reporting on how your account is actually performing — so
              you have one less thing to worry about, and can stay focused on running your business.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
            <p className="eyebrow mb-4">Certifications</p>
            <ul className="space-y-4">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-center gap-3">
                  <img src={c.logo} alt={c.name} className="h-8 w-auto object-contain bg-white rounded px-2 py-1" loading="lazy" />
                  <span className="text-white/85">{c.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-xl mx-auto leading-tight">
          Want to work with a team that treats your budget like their own?
        </h2>
        <Link href="/free-ppc-proposal" className="btn-primary mt-8 inline-flex">
          Get My PPC Proposal
        </Link>
      </section>
    </>
  );
}
