// ─────────────────────────────────────────────────────────
// /lib/utils/buildResearchLines.ts
// ─────────────────────────────────────────────────────────
import type { ResearchCounts } from '@/types/research'

const format = (n: number | null) =>
  n === null ? '—' : n.toLocaleString('en-US')

export const buildResearchLines = (
  r: ResearchCounts,
  { tone = 'formal' }: { tone?: 'formal' | 'casual' } = {}
): string[] => {
  const fallback = (label: string) =>
    tone === 'formal'
      ? `Public data for ${label} was unavailable when I searched—an omission that deeply concerns me.`
      : `No public numbers for ${label} showed up, and I’d like to know why.`

  const lineFor = (label: string, n: number | null) =>
    n === null ? fallback(label) : `${format(n)} ${label}`

  return [
    lineFor('research projects', r.projects),
    lineFor('peer-reviewed publications', r.publications),
    lineFor('patented discoveries', r.patents),
    lineFor('clinical trials', r.trials),
  ]
}
