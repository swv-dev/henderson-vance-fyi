import { vcdebateAdmin } from '../db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { code } = await req.json()
    if (!code || typeof code !== 'string' || code.trim().length < 4) {
      return NextResponse.json({ error: 'Valid code required' }, { status: 400 })
    }

    const supabase = vcdebateAdmin()
    const { data, error } = await supabase
      .from('vcdebate_candidates')
      .select('id, name, race, party, color, no_availability')
      .eq('code', code.toUpperCase().trim())
      .single()

    if (error || !data) {
      return NextResponse.json({ error: 'Invalid code' }, { status: 401 })
    }

    return NextResponse.json({ candidate: data })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
