'use client';

import Link from 'next/link';
import { useState } from 'react';
import { nav, site } from '@/lib/data/site';
/* eslint-disable @next/next/no-img-element */

const tickerItems = [
  '£52.2M+ managed ad spend',
  'Google Partner agency',
  'You only pay for results',
  '15+ years running PPC accounts',
  'Certified across Google Ads · Bing Ads · Shopping',
  '72% of PPC spend fails to convert — we fix that',
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-ink text-white/70 overflow-hidden">
        <div className="flex whitespace-nowrap py-2 font-mono text-[11px] tracking-wide animate-ticker">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center px-6">
              <span className="text-bid mr-2">●</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-ink/95 backdrop-blur border-b border-white/10">
        <div className="container-page flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="bg-white rounded-lg p-1">
              <img src="/images/2019/06/Addicted2PPC-logo.png" alt="Addicted 2 PPC" className="h-8 w-auto" />
            </span>
            <span className="font-display font-bold text-white text-lg tracking-tight hidden sm:inline">
              Addicted<span className="text-bid">2</span>PPC
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={site.phoneHref} className="text-sm font-mono text-white/70 hover:text-white">
              {site.phoneDisplay}
            </a>
            <Link href="/free-ppc-proposal" className="btn-primary">
              Get My Proposal
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-white p-2 -mr-2"
          >
            <span className="block w-6 h-0.5 bg-white mb-1.5" />
            <span className="block w-6 h-0.5 bg-white mb-1.5" />
            <span className="block w-4 h-0.5 bg-white" />
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 px-6 pb-6 pt-2">
            <nav className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-white/85 border-b border-white/5 text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-4">
              <a href={site.phoneHref} className="font-mono text-white/70 text-sm">
                {site.phoneDisplay}
              </a>
              <Link href="/free-ppc-proposal" className="btn-primary w-full">
                Get My Proposal
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
