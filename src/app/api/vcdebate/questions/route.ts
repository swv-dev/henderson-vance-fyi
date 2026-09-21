import { vcdebateAdmin } from '../db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { question, submitter_name } = await req.json()

    if (!question || typeof question !== 'string' || question.trim().length === 0) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 })
    }

    if (question.trim().length > 500) {
      return NextResponse.json(
        { error: 'Question must be 500 characters or fewer' },
        { status: 400 }
      )
    }

    const supabase = vcdebateAdmin()
    const { data, error } = await supabase
      .from('vcdebate_questions')
      .insert({
        question: question.trim(),
        submitter_name: submitter_name?.trim() || null,
      })
      .select('id, created_at')
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ question: data })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
