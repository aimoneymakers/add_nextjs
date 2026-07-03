import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, business, email, phone, website, budget, goals } = body || {};

  if (!name || !business || !email || !phone) {
    return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
  }

  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json(
      { error: 'Form storage is not configured yet. Add Supabase env vars to enable this.' },
      { status: 503 }
    );
  }

  const { error } = await supabase.from('proposal_requests').insert({
    name,
    business,
    email,
    phone,
    website: website || null,
    budget: budget || null,
    goals: goals || null,
  });

  if (error) {
    return NextResponse.json({ error: 'Could not save your request. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
