import type { Metadata } from 'next';
import ProposalForm from '@/components/ProposalForm';
import { proposalSteps } from '@/lib/data/site';

export const metadata: Metadata = {
  title: 'Free PPC Proposal',
  description:
    'Get a free, no-obligation Pay Per Click proposal from our certified team — a clear plan for spend, structure and expected results.',
};

export default function ProposalPage() {
  return (
    <>
      <section className="bg-ink text-white py-24 md:py-32">
        <div className="container-page grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow mb-4">Free proposal</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl leading-[1.05]">
              Get your free PPC proposal.
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Tell us about your business and we&apos;ll size the opportunity, review your current setup,
              and send back a clear, straight-talking plan — no jargon, no pressure.
            </p>
            <div className="mt-10 space-y-6">
              {proposalSteps.map((s, i) => (
                <div key={i} className="flex gap-4">
                  <span className="font-mono text-xs text-bid pt-1">0{i + 1}</span>
                  <div>
                    <p className="font-semibold">{s.title}</p>
                    <p className="text-white/50 text-sm mt-1">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ProposalForm />
        </div>
      </section>
    </>
  );
}
