'use client';

import { FormEvent, useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
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
      <div className="card p-8 text-center">
        <p className="font-display text-xl mb-2">Message sent</p>
        <p className="text-muted text-sm">
          Thanks — we&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 md:p-8 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="First name" name="first_name" required />
        <Field label="Last name" name="last_name" required />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Company name" name="company" required />
        <Field label="Website" name="website" />
      </div>
      <div>
        <label className="block text-xs font-mono uppercase tracking-wide text-muted mb-1.5" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-ink-line/20 px-4 py-3 text-sm focus:border-signal outline-none"
        />
      </div>
      <button type="submit" disabled={status === 'loading'} className="btn-dark w-full md:w-auto">
        {status === 'loading' ? 'Sending…' : 'Send message'}
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
