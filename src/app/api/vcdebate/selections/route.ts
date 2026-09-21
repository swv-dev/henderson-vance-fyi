import { vcdebateAdmin } from '../db'
import { NextResponse } from 'next/server'

const VALID_WINDOWS = [
  '10:00-12:00', '12:00-14:00', '14:00-16:00',
  '16:00-18:00', '18:00-20:00', '19:00-21:00',
]

async function verifyCode(
  supabase: ReturnType<typeof vcdebateAdmin>,
  candidateId: string,
  code: string
): Promise<boolean> {
  const { data } = await supabase
    .from('vcdebate_candidates')
    .select('id')
    .eq('id', candidateId)
    .eq('code', code.toUpperCase().trim())
    .single()
  return !!data
}

export async function GET(req: Request) {
  const url = new URL(req.url)
  const candidateId = url.searchParams.get('candidate_id')
  const code = url.searchParams.get('code')

  if (!candidateId || !code) {
    return NextResponse.json({ error: 'Missing params' }, { status: 400 })
  }

  const supabase = vcdebateAdmin()
  if (!(await verifyCode(supabase, candidateId, code))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { data } = await supabase
    .from('vcdebate_selections')
    .select('id, selected_date, time_window')
    .eq('candidate_id', candidateId)
    .order('selected_date')

  return NextResponse.json({ selections: data ?? [] })
}

export async function POST(req: Request) {
  try {
    const { candidate_id, code, selected_date, time_window } = await req.json()

    if (!candidate_id || !code || !selected_date || !time_window) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    if (!VALID_WINDOWS.includes(time_window)) {
      return NextResponse.json({ error: 'Invalid time window' }, { status: 400 })
    }

    const d = new Date(selected_date + 'T00:00:00')
    if (d.getFullYear() !== 2026 || d.getMonth() !== 9) {
      return NextResponse.json({ error: 'Date must be in October 2026' }, { status: 400 })
    }

    const supabase = vcdebateAdmin()
    if (!(await verifyCode(supabase, candidate_id, code))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: existing } = await supabase
      .from('vcdebate_selections')
      .select('id')
      .eq('candidate_id', candidate_id)
      .eq('selected_date', selected_date)

    if (existing && existing.length >= 2) {
      return NextResponse.json(
        { error: 'Maximum 2 time windows per date. Remove one first.' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('vcdebate_selections')
      .insert({ candidate_id, selected_date, time_window })
      .select('id, selected_date, time_window')
      .single()

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ error: 'Already selected' }, { status: 409 })
      }
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ selection: data })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { candidate_id, code, selection_id } = await req.json()

    if (!candidate_id || !code || !selection_id) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const supabase = vcdebateAdmin()
    if (!(await verifyCode(supabase, candidate_id, code))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { error } = await supabase
      .from('vcdebate_selections')
      .delete()
      .eq('id', selection_id)
      .eq('candidate_id', candidate_id)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
