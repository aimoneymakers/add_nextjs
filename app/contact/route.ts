import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { first_name, last_name, email, phone, company, website, message } = body || {};

  if (!first_name || !last_name || !email || !phone || !company) {
    return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
  }

  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json(
      { error: 'Form storage is not configured yet. Add Supabase env vars to enable this.' },
      { status: 503 }
    );
  }

  const { error } = await supabase.from('contact_messages').insert({
    first_name,
    last_name,
    email,
    phone,
    company,
    website: website || null,
    message: message || null,
  });

  if (error) {
    return NextResponse.json({ error: 'Could not save your message. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
