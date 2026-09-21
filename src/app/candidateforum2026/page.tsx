'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

// ─── Types ───────────────────────────────────────────────────────────

interface Candidate {
  id: string
  name: string
  race: string
  party: string
  color: string
  no_availability: boolean
}

interface Selection {
  id: string
  selected_date: string
  time_window: string
  candidate_id?: string
}

const TIME_WINDOWS = [
  { value: '10:00-12:00', label: '10 AM – 12 PM' },
  { value: '12:00-14:00', label: '12 PM – 2 PM' },
  { value: '14:00-16:00', label: '2 PM – 4 PM' },
  { value: '16:00-18:00', label: '4 PM – 6 PM' },
  { value: '18:00-20:00', label: '6 PM – 8 PM' },
  { value: '19:00-21:00', label: '7 PM – 9 PM' },
] as const

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// October 2026: starts on Thursday (day index 4), 31 days
function getOctoberDays(): (number | null)[] {
  const firstDayOfWeek = 4
  const totalDays = 31
  const cells: (number | null)[] = []
  for (let i = 0; i < firstDayOfWeek; i++) cells.push(null)
  for (let d = 1; d <= totalDays; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}

const OCTOBER_CELLS = getOctoberDays()

function formatDate(day: number): string {
  return `2026-10-${String(day).padStart(2, '0')}`
}

function windowLabel(value: string): string {
  return TIME_WINDOWS.find((w) => w.value === value)?.label ?? value
}

// ─── Main Page ───────────────────────────────────────────────────────

export default function VCDebate2026Page() {
  // Auth state
  const [code, setCode] = useState('')
  const [candidate, setCandidate] = useState<Candidate | null>(null)
  const [authError, setAuthError] = useState('')
  const [authLoading, setAuthLoading] = useState(false)

  // Selection state
  const [selections, setSelections] = useState<Selection[]>([])
  const [activeDay, setActiveDay] = useState<number | null>(null)
  const [saving, setSaving] = useState(false)

  // Published state
  const [published, setPublished] = useState(false)
  const [allCandidates, setAllCandidates] = useState<Candidate[]>([])
  const [allSelections, setAllSelections] = useState<Selection[]>([])

  // Question state
  const [question, setQuestion] = useState('')
  const [submitterName, setSubmitterName] = useState('')
  const [questionSubmitted, setQuestionSubmitted] = useState(false)
  const [questionError, setQuestionError] = useState('')

  // Check published status on mount
  useEffect(() => {
    fetch('/api/vcdebate/published')
      .then((r) => r.json())
      .then((data) => {
        if (data.published) {
          setPublished(true)
          setAllCandidates(data.candidates)
          setAllSelections(data.selections)
        }
      })
      .catch(() => {})
  }, [])

  // ─── Auth ────────────────────────────────────────────────────────

  const handleAuth = async () => {
    setAuthError('')
    setAuthLoading(true)
    try {
      const res = await fetch('/api/vcdebate/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code.trim() }),
      })
      const data = await res.json()
      if (!res.ok) {
        setAuthError(data.error || 'Invalid code')
        return
      }
      setCandidate(data.candidate)
      const selRes = await fetch(
        `/api/vcdebate/selections?candidate_id=${data.candidate.id}&code=${encodeURIComponent(code.trim().toUpperCase())}`
      )
      const selData = await selRes.json()
      if (selRes.ok) setSelections(selData.selections)
    } catch {
      setAuthError('Network error. Please try again.')
    } finally {
      setAuthLoading(false)
    }
  }

  const handleLogout = () => {
    setCandidate(null)
    setSelections([])
    setCode('')
    setActiveDay(null)
  }

  // ─── Selections ──────────────────────────────────────────────────

  const selectionsForDay = useCallback(
    (day: number) => selections.filter((s) => s.selected_date === formatDate(day)),
    [selections]
  )

  const addSelection = async (day: number, window: string) => {
    if (!candidate || saving) return
    setSaving(true)
    try {
      const res = await fetch('/api/vcdebate/selections', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          candidate_id: candidate.id,
          code: code.trim().toUpperCase(),
          selected_date: formatDate(day),
          time_window: window,
        }),
      })
      const data = await res.json()
      if (res.ok) {
        setSelections((prev) => [...prev, data.selection])
      } else {
        alert(data.error)
      }
    } catch {
      alert('Network error')
    } finally {
      setSaving(false)
    }
  }

  const removeSelection = async (selectionId: string) => {
    if (!candidate || saving) return
    setSaving(true)
    try {
      const res = await fetch('/api/vcdebate/selections', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          candidate_id: candidate.id,
          code: code.trim().toUpperCase(),
          selection_id: selectionId,
        }),
      })
      if (res.ok) {
        setSelections((prev) => prev.filter((s) => s.id !== selectionId))
      }
    } catch {
      alert('Network error')
    } finally {
      setSaving(false)
    }
  }

  const toggleNoAvailability = async () => {
    if (!candidate || saving) return
    const newValue = !candidate.no_availability
    if (
      newValue &&
      selections.length > 0 &&
      !confirm(
        'Declaring no availability will remove all your selected dates. Continue?'
      )
    )
      return

    setSaving(true)
    try {
      const res = await fetch('/api/vcdebate/no-availability', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          candidate_id: candidate.id,
          code: code.trim().toUpperCase(),
          value: newValue,
        }),
      })
      if (res.ok) {
        setCandidate({ ...candidate, no_availability: newValue })
        if (newValue) {
          setSelections([])
          setActiveDay(null)
        }
      }
    } catch {
      alert('Network error')
    } finally {
      setSaving(false)
    }
  }

  // ─── Questions ───────────────────────────────────────────────────

  const submitQuestion = async () => {
    setQuestionError('')
    if (!question.trim()) {
      setQuestionError('Please enter a question.')
      return
    }
    try {
      const res = await fetch('/api/vcdebate/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: question.trim(),
          submitter_name: submitterName.trim() || null,
        }),
      })
      if (res.ok) {
        setQuestion('')
        setSubmitterName('')
        setQuestionSubmitted(true)
        setTimeout(() => setQuestionSubmitted(false), 4000)
      } else {
        const data = await res.json()
        setQuestionError(data.error || 'Failed to submit')
      }
    } catch {
      setQuestionError('Network error')
    }
  }

  // ─── Published helpers ───────────────────────────────────────────

  function publishedSelectionsForDay(day: number) {
    const date = formatDate(day)
    return allSelections.filter((s) => s.selected_date === date)
  }

  function candidateById(id: string) {
    return allCandidates.find((c) => c.id === id)
  }

  function getOverlapCounts(): Record<string, number> {
    const counts: Record<string, Set<string>> = {}
    for (const s of allSelections) {
      if (!counts[s.selected_date]) counts[s.selected_date] = new Set()
      if (s.candidate_id) counts[s.selected_date].add(s.candidate_id)
    }
    const result: Record<string, number> = {}
    for (const [date, set] of Object.entries(counts)) result[date] = set.size
    return result
  }

  // ─── Render ──────────────────────────────────────────────────────

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-card-border">
        <div className="max-w-5xl mx-auto px-4 py-6 flex items-center gap-4">
          <div>
            <a
              href="/"
              className="text-xs text-subtle hover:text-gold transition"
            >
              &larr; Henderson-Vance FYI
            </a>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
              Vance County Candidate Forum 2026
            </h1>
            <p className="text-sm text-muted mt-1">
              Scheduling &amp; Public Questions
            </p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-xs text-subtle hidden sm:inline">
              Presented by
            </span>
            <Image
              src="/images/house-of-toyz-logo.png"
              alt="House of Toyz"
              width={100}
              height={32}
              className="object-contain"
            />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* ── About ────────────────────────────────────────────────── */}
        <section className="rounded-xl border border-card-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-gold mb-4">
            About This Forum
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-muted">
            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                Henderson-Vance FYI is coordinating a public candidate
                forum for the{' '}
                <strong className="text-foreground">November 3, 2026 Vance County General Election</strong>.
                This page allows each candidate to privately select dates they
                are available in <strong className="text-foreground">October 2026</strong> for a moderated
                debate/forum lasting up to 2 hours.
              </p>
              <p>
                <strong className="text-foreground">
                  This initiative is built on complete fairness and equal
                  opportunity.
                </strong>{' '}
                Every candidate on the November ballot has been contacted
                with the same invitation, using the same process, on the
                same timeline. No candidate receives preferential treatment,
                advance information, or special access. The exact email sent
                to each candidate is published below for full transparency.
              </p>
              <p>
                Once all candidates have submitted their availability, a
                unified calendar will be published here so the public can see
                which dates have the most overlap, helping the community
                identify the best date for the event.
              </p>
            </div>
            <div className="rounded-lg border border-card-border bg-navy p-5 space-y-2 text-sm">
              <div className="flex gap-2">
                <span className="font-semibold text-gold w-24 shrink-0">
                  Sponsor:
                </span>
                <span className="text-foreground">House of Toyz</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-gold w-24 shrink-0">
                  Venue:
                </span>
                <span className="text-foreground">McGregor Hall Performing Arts Center</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-gold w-24 shrink-0">
                  Moderators:
                </span>
                <span className="text-foreground">Board of up to 3 moderators (TBA)</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-gold w-24 shrink-0">
                  Broadcast:
                </span>
                <span className="text-foreground">WIZS Radio</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-gold w-24 shrink-0">
                  Coverage:
                </span>
                <span className="text-foreground">The Daily Dispatch</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-gold w-24 shrink-0">
                  Duration:
                </span>
                <span className="text-foreground">Up to 2 hours</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-gold w-24 shrink-0">
                  Election:
                </span>
                <span className="text-foreground">November 3, 2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Instructions ─────────────────────────────────────────── */}
        <section className="rounded-xl border border-card-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-gold mb-4">
            Instructions for Candidates
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-muted text-sm leading-relaxed">
            <li>
              Enter your <strong className="text-foreground">unique access code</strong> below. This code
              was provided to you via email and is linked to your name. It
              ensures only you can submit availability on your behalf.
            </li>
            <li>
              On the October 2026 calendar, click any date you are available.
              For each date, select{' '}
              <strong className="text-foreground">up to two 2-hour time windows</strong> when you could
              attend.
            </li>
            <li>
              If you have <strong className="text-foreground">no availability</strong> at all in October,
              click the &quot;I Have No Availability&quot; button instead.
            </li>
            <li>
              You may return at any time using your code to add or remove
              dates. Your selections are saved automatically.
            </li>
            <li>
              <strong className="text-foreground">Your selections are private</strong>. No candidate can
              see another&apos;s availability until the unified calendar is
              published.
            </li>
          </ol>
        </section>

        {/* ── Candidate Portal ─────────────────────────────────────── */}
        <section className="rounded-xl border border-card-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-gold mb-6">
            Candidate Portal
          </h2>

          {!candidate ? (
            /* ── Code Entry ──────────────────────────────────────── */
            <div className="max-w-md mx-auto text-center space-y-4">
              <p className="text-muted text-sm">
                Enter your candidate access code to begin.
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
                  placeholder="Enter your code"
                  maxLength={6}
                  className="flex-1 px-4 py-3 border-2 border-card-border rounded-lg text-center text-lg font-mono tracking-widest uppercase bg-navy text-foreground focus:border-gold focus:outline-none transition"
                />
                <button
                  onClick={handleAuth}
                  disabled={authLoading || code.trim().length < 4}
                  className="px-6 py-3 bg-gold text-background rounded-lg font-bold hover:bg-gold-dim disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  {authLoading ? 'Verifying...' : 'Enter'}
                </button>
              </div>
              {authError && (
                <p className="text-red text-sm font-medium">{authError}</p>
              )}
            </div>
          ) : (
            /* ── Authenticated View ──────────────────────────────── */
            <div className="space-y-6">
              {/* Candidate header */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full ring-2 ring-card-border shadow"
                    style={{ backgroundColor: candidate.color }}
                  />
                  <div>
                    <p className="font-bold text-lg text-foreground">
                      {candidate.name}
                    </p>
                    <p className="text-sm text-subtle">
                      {candidate.race} &middot; {candidate.party}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={toggleNoAvailability}
                    disabled={saving}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
                      candidate.no_availability
                        ? 'bg-red/20 border-red/40 text-red'
                        : 'bg-navy border-card-border text-muted hover:border-red/40 hover:text-red'
                    }`}
                  >
                    {candidate.no_availability
                      ? 'No Availability Declared'
                      : 'I Have No Availability'}
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-navy border border-card-border text-subtle hover:text-foreground transition"
                  >
                    Sign Out
                  </button>
                </div>
              </div>

              {candidate.no_availability ? (
                <div className="bg-red/10 border border-red/30 rounded-lg p-6 text-center">
                  <p className="text-red font-medium">
                    You have declared no availability for October 2026.
                  </p>
                  <p className="text-red/70 text-sm mt-1">
                    Click &quot;No Availability Declared&quot; above to undo
                    this and select dates instead.
                  </p>
                </div>
              ) : (
                <>
                  {/* Selection summary */}
                  {selections.length > 0 && (
                    <div className="bg-blue/10 border border-blue/30 rounded-lg p-4">
                      <p className="text-blue font-medium text-sm">
                        You have selected{' '}
                        <strong>{selections.length}</strong> time
                        {selections.length === 1 ? ' window' : ' windows'}{' '}
                        across{' '}
                        <strong>
                          {new Set(selections.map((s) => s.selected_date)).size}
                        </strong>{' '}
                        date{new Set(selections.map((s) => s.selected_date)).size === 1 ? '' : 's'}.
                      </p>
                    </div>
                  )}

                  {/* Calendar */}
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      October 2026
                    </h3>
                    <div className="grid grid-cols-7 gap-1">
                      {DAYS_OF_WEEK.map((day) => (
                        <div
                          key={day}
                          className="text-center text-xs font-semibold text-subtle py-2"
                        >
                          {day}
                        </div>
                      ))}
                      {OCTOBER_CELLS.map((day, idx) => {
                        if (day === null)
                          return <div key={`empty-${idx}`} />
                        const daySelections = selectionsForDay(day)
                        const isActive = activeDay === day
                        const hasSelections = daySelections.length > 0
                        return (
                          <button
                            key={day}
                            onClick={() =>
                              setActiveDay(isActive ? null : day)
                            }
                            className={`relative aspect-square rounded-lg border-2 flex flex-col items-center justify-center text-sm font-medium transition ${
                              isActive
                                ? 'border-gold bg-gold/10 shadow-md'
                                : hasSelections
                                  ? 'border-green-400 bg-green-400/10'
                                  : 'border-card-border hover:border-subtle hover:bg-navy'
                            }`}
                          >
                            <span
                              className={
                                isActive
                                  ? 'text-gold font-bold'
                                  : 'text-foreground'
                              }
                            >
                              {day}
                            </span>
                            {hasSelections && (
                              <div className="flex gap-0.5 mt-0.5">
                                {daySelections.map((_, i) => (
                                  <div
                                    key={i}
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{
                                      backgroundColor: candidate.color,
                                    }}
                                  />
                                ))}
                              </div>
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Time window picker */}
                  {activeDay !== null && (
                    <div className="bg-navy rounded-lg border border-card-border p-5">
                      <h4 className="font-bold text-foreground mb-3">
                        October {activeDay}: Select Time Windows
                        <span className="font-normal text-subtle text-sm ml-2">
                          (max 2)
                        </span>
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {TIME_WINDOWS.map((tw) => {
                          const existing = selectionsForDay(activeDay).find(
                            (s) => s.time_window === tw.value
                          )
                          const atMax =
                            selectionsForDay(activeDay).length >= 2 &&
                            !existing
                          return (
                            <button
                              key={tw.value}
                              disabled={saving || atMax}
                              onClick={() =>
                                existing
                                  ? removeSelection(existing.id)
                                  : addSelection(activeDay, tw.value)
                              }
                              className={`px-4 py-3 rounded-lg text-sm font-medium border-2 transition ${
                                existing
                                  ? 'text-white border-transparent shadow'
                                  : atMax
                                    ? 'bg-navy-light border-card-border text-subtle cursor-not-allowed'
                                    : 'bg-card border-card-border text-muted hover:border-gold hover:text-gold'
                              }`}
                              style={
                                existing
                                  ? { backgroundColor: candidate.color }
                                  : undefined
                              }
                            >
                              {tw.label}
                              {existing && ' \u2713'}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Current selections list */}
                  {selections.length > 0 && (
                    <div>
                      <h4 className="font-bold text-foreground mb-2">
                        Your Selected Windows
                      </h4>
                      <div className="space-y-1">
                        {[...selections]
                          .sort((a, b) =>
                            a.selected_date.localeCompare(b.selected_date)
                          )
                          .map((s) => (
                            <div
                              key={s.id}
                              className="flex items-center justify-between bg-navy rounded-lg px-4 py-2 border border-card-border"
                            >
                              <span className="text-sm text-muted">
                                <strong className="text-foreground">Oct {parseInt(s.selected_date.split('-')[2])}</strong>
                                {', '}
                                {windowLabel(s.time_window)}
                              </span>
                              <button
                                onClick={() => removeSelection(s.id)}
                                disabled={saving}
                                className="text-red hover:text-red/80 text-xs font-medium"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </section>

        {/* ── Published Calendar ────────────────────────────────────── */}
        {published && (
          <section className="rounded-xl border border-card-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-extrabold text-gold mb-2">
              Candidate Availability: All Submissions
            </h2>
            <p className="text-muted mb-6 text-sm">
              The calendar below shows all candidates&apos; submitted
              availability. Dates with the most overlap are highlighted.
            </p>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 mb-6">
              {allCandidates.map((c) => (
                <div key={c.id} className="flex items-center gap-1.5 text-xs">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: c.color }}
                  />
                  <span className="text-muted">
                    {c.name}
                    {c.no_availability && (
                      <span className="text-red ml-1">(unavailable)</span>
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {DAYS_OF_WEEK.map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-semibold text-subtle py-2"
                >
                  {day}
                </div>
              ))}
              {(() => {
                const overlapCounts = getOverlapCounts()
                const maxOverlap = Math.max(
                  0,
                  ...Object.values(overlapCounts)
                )
                return OCTOBER_CELLS.map((day, idx) => {
                  if (day === null)
                    return <div key={`pub-empty-${idx}`} />
                  const date = formatDate(day)
                  const daySels = publishedSelectionsForDay(day)
                  const overlap = overlapCounts[date] || 0
                  const isBest = overlap === maxOverlap && maxOverlap >= 2
                  const uniqueCandidates = Array.from(
                    new Set(daySels.map((s) => s.candidate_id))
                  )
                  return (
                    <div
                      key={day}
                      className={`rounded-lg border-2 p-1.5 min-h-[72px] transition ${
                        isBest
                          ? 'border-green-500 bg-green-500/10 ring-2 ring-green-500/30'
                          : daySels.length > 0
                            ? 'border-blue/30 bg-blue/10'
                            : 'border-card-border'
                      }`}
                    >
                      <div className="text-xs font-semibold text-foreground mb-1">
                        {day}
                      </div>
                      <div className="flex flex-wrap gap-0.5">
                        {uniqueCandidates.map((cid) => {
                          const c = candidateById(cid!)
                          if (!c) return null
                          return (
                            <div
                              key={cid}
                              className="w-3 h-3 rounded-full"
                              title={`${c.name} (${daySels.filter((s) => s.candidate_id === cid).length} window${daySels.filter((s) => s.candidate_id === cid).length > 1 ? 's' : ''})`}
                              style={{ backgroundColor: c.color }}
                            />
                          )
                        })}
                      </div>
                    </div>
                  )
                })
              })()}
            </div>

            {/* Overlap summary */}
            {(() => {
              const overlapCounts = getOverlapCounts()
              const entries = Object.entries(overlapCounts)
                .filter(([, count]) => count >= 2)
                .sort((a, b) => b[1] - a[1])
              if (entries.length === 0) return null
              return (
                <div className="mt-6 bg-green-500/10 border border-green-500/30 rounded-lg p-5">
                  <h3 className="font-bold text-green-400 mb-3">
                    Dates With Most Overlap
                  </h3>
                  <div className="space-y-2">
                    {entries.map(([date, count]) => {
                      const day = parseInt(date.split('-')[2])
                      const daySels = publishedSelectionsForDay(day)
                      return (
                        <div key={date} className="text-sm">
                          <span className="font-semibold text-green-400">
                            October {day}
                          </span>
                          <span className="text-muted">
                            {' '}
                            : {count} candidate{count > 1 ? 's' : ''} available
                          </span>
                          <div className="flex flex-wrap gap-2 mt-1 ml-4">
                            {Array.from(
                              new Set(
                                daySels.map((s) => s.candidate_id)
                              )
                            ).map((cid) => {
                              const c = candidateById(cid!)
                              if (!c) return null
                              const windows = daySels
                                .filter((s) => s.candidate_id === cid)
                                .map((s) => windowLabel(s.time_window))
                              return (
                                <span
                                  key={cid}
                                  className="inline-flex items-center gap-1 text-xs bg-navy rounded-full px-2 py-0.5 border border-card-border"
                                >
                                  <span
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: c.color }}
                                  />
                                  <span className="text-muted">
                                    {c.name}: {windows.join(', ')}
                                  </span>
                                </span>
                              )
                            })}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })()}
          </section>
        )}

        {/* ── Public Questions ──────────────────────────────────────── */}
        <section className="rounded-xl border border-card-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-gold mb-2">
            Submit a Question
          </h2>
          <p className="text-muted mb-6 text-sm">
            Have a question you&apos;d like asked at the forum? Submit it
            below. Questions may be selected by the moderator board for use
            during the event. You may submit as many questions as you like,
            one at a time.
          </p>
          <div className="max-w-lg space-y-3">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Your Question <span className="text-red">*</span>
              </label>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                maxLength={500}
                rows={3}
                placeholder="What would you like to ask the candidates?"
                className="w-full px-4 py-3 border border-card-border rounded-lg bg-navy text-foreground placeholder:text-subtle focus:border-gold focus:outline-none resize-none transition"
              />
              <p className="text-xs text-subtle mt-1 text-right">
                {question.length}/500
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Your Name{' '}
                <span className="text-subtle font-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={submitterName}
                onChange={(e) => setSubmitterName(e.target.value)}
                placeholder="Anonymous"
                className="w-full px-4 py-3 border border-card-border rounded-lg bg-navy text-foreground placeholder:text-subtle focus:border-gold focus:outline-none transition"
              />
            </div>
            <button
              onClick={submitQuestion}
              disabled={!question.trim()}
              className="px-6 py-3 bg-gold text-background rounded-lg font-bold hover:bg-gold-dim disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Submit Question
            </button>
            {questionSubmitted && (
              <p className="text-green-400 text-sm font-medium">
                Thank you! Your question has been submitted.
              </p>
            )}
            {questionError && (
              <p className="text-red text-sm font-medium">
                {questionError}
              </p>
            )}
          </div>
        </section>

        {/* ── Email Transparency ──────────────────────────────────── */}
        <section className="rounded-xl border border-card-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-gold mb-2">
            Invitation Email Sent to All Candidates
          </h2>
          <p className="text-muted mb-4 text-sm">
            In the interest of full transparency, the exact email sent to
            every candidate is published here. Each candidate received an
            identical message, with only their name and unique access code
            personalized. No candidate was given advance notice, additional
            context, or different terms.
          </p>
          <div className="bg-navy rounded-lg border border-card-border p-5 text-sm text-muted space-y-4 font-mono leading-relaxed">
            <p>
              <strong className="text-foreground">Subject:</strong> Invitation: Vance County Candidate
              Forum, October 2026 Availability
            </p>
            <hr className="border-card-border" />
            <p>Dear [Candidate Name],</p>
            <p>
              You are invited to participate in a public candidate forum
              ahead of the November 3, 2026 Vance County General Election.
            </p>
            <p>
              <strong className="text-foreground">Event Details:</strong>
              <br />
              Sponsor: House of Toyz
              <br />
              Venue: McGregor Hall Performing Arts Center, Henderson, NC
              <br />
              Format: Moderated debate/forum (up to 2 hours)
              <br />
              Moderators: Board of up to 3 moderators (to be announced)
              <br />
              Broadcast: WIZS Radio
              <br />
              Coverage: The Daily Dispatch
            </p>
            <p>
              To help identify a date that works for the most candidates,
              we have set up a private scheduling page. Please visit the
              link below, enter your unique access code, and select the
              dates and time windows you are available in October 2026.
            </p>
            <p>
              Page: henderson-vance.fyi/candidateforum2026
              <br />
              Your Access Code: [CODE]
            </p>
            <p>
              <strong className="text-foreground">How it works:</strong>
              <br />
              1. Visit the link above and enter your access code
              <br />
              2. Click dates on the October calendar when you are available
              <br />
              3. For each date, select up to two 2-hour time windows
              <br />
              4. If you have no availability in October, there is a button
              for that as well
            </p>
            <p>
              Your selections are completely private. No candidate can see
              another&apos;s availability. Once all responses are in, a unified
              calendar will be published showing where availability overlaps,
              so the public can see which dates work best.
            </p>
            <p>
              The community is also invited to submit questions on the same
              page that may be used during the forum.
            </p>
            <p>
              <strong className="text-foreground">
                Please submit your availability by September 28, 2026.
              </strong>
            </p>
            <p>
              You may return to the page at any time before the deadline to
              update your selections using the same code.
            </p>
            <p>
              If you have any questions, please reply to this email or
              contact us at info@henderson-vance.fyi.
            </p>
            <p>
              Thank you for your commitment to public engagement in Vance
              County.
            </p>
            <p>
              Respectfully,
              <br />
              Stephen Wolf
              <br />
              Henderson-Vance FYI
            </p>
          </div>
        </section>

        {/* ── Footer ───────────────────────────────────────────────── */}
        <footer className="text-center text-xs text-subtle py-6 border-t border-card-border">
          <p>
            Organized by{' '}
            <strong className="text-muted">Henderson-Vance FYI</strong>{' '}
            in partnership with WIZS Radio &amp; The Daily Dispatch.
          </p>
          <p className="mt-1">
            Questions? Email{' '}
            <a
              href="mailto:info@henderson-vance.fyi"
              className="text-gold hover:text-gold-dim underline transition"
            >
              info@henderson-vance.fyi
            </a>
          </p>
          <p className="mt-2 text-subtle/60">
            This page is independently funded and is not affiliated with any
            candidate, party, or government entity.
          </p>
        </footer>
      </main>
    </div>
  )
}
