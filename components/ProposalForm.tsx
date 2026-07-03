'use client';

import { FormEvent, useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ProposalForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/proposal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error((await res.json()).error || 'Something went wrong');
      setStatus('success');
      form.reset();
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please call us instead.');
    }
  }

  if (status === 'success') {
    return (
      <div className="card p-10 text-center">
        <p className="font-display text-2xl mb-2">Proposal request received</p>
        <p className="text-muted text-sm max-w-sm mx-auto">
          One of our certified PPC strategists will review your business and send your proposal within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 md:p-10 space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Full name" name="name" required />
        <Field label="Business name" name="business" required />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Website" name="website" />
        <div>
          <label className="block text-xs font-mono uppercase tracking-wide text-muted mb-1.5" htmlFor="budget">
            Monthly ad budget
          </label>
          <select
            id="budget"
            name="budget"
            className="w-full rounded-lg border border-ink-line/20 px-4 py-3 text-sm focus:border-signal outline-none bg-white"
          >
            <option>Under £1,000</option>
            <option>£1,000 – £5,000</option>
            <option>£5,000 – £15,000</option>
            <option>£15,000+</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-mono uppercase tracking-wide text-muted mb-1.5" htmlFor="goals">
          What are you looking to achieve?
        </label>
        <textarea
          id="goals"
          name="goals"
          rows={4}
          className="w-full rounded-lg border border-ink-line/20 px-4 py-3 text-sm focus:border-signal outline-none"
        />
      </div>
      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full md:w-auto">
        {status === 'loading' ? 'Submitting…' : 'Get my free proposal'}
      </button>
      {status === 'error' && <p className="text-sm text-bid">{errorMsg}</p>}
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-wide text-muted mb-1.5" htmlFor={name}>
        {label}
        {required && <span className="text-bid"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-ink-line/20 px-4 py-3 text-sm focus:border-signal outline-none"
      />
    </div>
  );
}
