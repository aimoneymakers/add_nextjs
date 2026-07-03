import type { Metadata } from 'next';
import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.addicted2ppc.com'),
  title: {
    default: 'Addicted 2 PPC — Pay Per Click Marketing Agency',
    template: '%s | Addicted 2 PPC',
  },
  description:
    'A data-driven PPC agency helping businesses grow sales, leads and revenue through Google Ads, Bing Ads and Google Shopping. Certified Pay Per Click experts.',
  openGraph: {
    title: 'Addicted 2 PPC — Pay Per Click Marketing Agency',
    description:
      'Data-driven Google Ads management for businesses that want measurable growth. You only pay for results.',
    url: 'https://www.addicted2ppc.com',
    siteName: 'Addicted 2 PPC',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@addicted2ppc',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
