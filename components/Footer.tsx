import Link from 'next/link';
import { footerServices, nav, site } from '@/lib/data/site';
/* eslint-disable @next/next/no-img-element */

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-page py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="bg-white rounded-lg p-1">
              <img src="/images/2019/06/Addicted2PPC-logo.png" alt="Addicted 2 PPC" className="h-8 w-auto" />
            </span>
            <span className="font-display font-bold text-white text-lg">
              Addicted<span className="text-bid">2</span>PPC
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/50 max-w-[220px]">
            A data-driven Pay Per Click agency helping businesses turn ad spend into sales.
          </p>
          <div className="flex gap-4 mt-6 font-mono text-xs">
            <a href={site.facebook} target="_blank" rel="noreferrer" className="hover:text-white">FB</a>
            <a href={site.twitter} target="_blank" rel="noreferrer" className="hover:text-white">X</a>
            <a href={site.youtube} target="_blank" rel="noreferrer" className="hover:text-white">YT</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">IN</a>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Site</p>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">PPC Services</p>
          <ul className="space-y-2 text-sm">
            {footerServices.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href={site.phoneHref} className="hover:text-white font-mono">{site.phoneDisplay}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            <li className="pt-1">{site.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 text-xs text-white/40 flex flex-col md:flex-row gap-2 justify-between">
          <p>© {new Date().getFullYear()} {site.name} Online Marketing Agency. All rights reserved.</p>
          <p>Built for performance — Next.js &amp; Supabase</p>
        </div>
      </div>
    </footer>
  );
}
