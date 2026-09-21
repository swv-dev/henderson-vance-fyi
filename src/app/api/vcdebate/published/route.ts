import { vcdebateAdmin } from '../db'
import { NextResponse } from 'next/server'

export async function GET() {
  const isPublished = process.env.NEXT_PUBLIC_VCDEBATE_PUBLISHED === 'true'

  if (!isPublished) {
    return NextResponse.json({ published: false, candidates: [], selections: [] })
  }

  const supabase = vcdebateAdmin()

  const { data: candidates } = await supabase
    .from('vcdebate_candidates')
    .select('id, name, race, party, color, no_availability')
    .order('race')

  const { data: selections } = await supabase
    .from('vcdebate_selections')
    .select('id, candidate_id, selected_date, time_window')
    .order('selected_date')

  return NextResponse.json({
    published: true,
    candidates: candidates ?? [],
    selections: selections ?? [],
  })
}
