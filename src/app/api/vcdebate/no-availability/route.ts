import { vcdebateAdmin } from '../db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { candidate_id, code, value } = await req.json()

    if (!candidate_id || !code || typeof value !== 'boolean') {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const supabase = vcdebateAdmin()

    const { data: candidate } = await supabase
      .from('vcdebate_candidates')
      .select('id')
      .eq('id', candidate_id)
      .eq('code', code.toUpperCase().trim())
      .single()

    if (!candidate) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { error: updateError } = await supabase
      .from('vcdebate_candidates')
      .update({ no_availability: value })
      .eq('id', candidate_id)

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 400 })
    }

    if (value) {
      await supabase
        .from('vcdebate_selections')
        .delete()
        .eq('candidate_id', candidate_id)
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
