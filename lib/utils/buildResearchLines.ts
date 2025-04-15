import { ResearchCounts } from '@/types'

const format = (n: number | string) => Number(n).toLocaleString('en-US')

export function buildResearchLines(
  research: ResearchCounts,
  { tone = 'formal' }: { tone?: 'formal' | 'casual' } = {}
): string[] {
  const fallback = (label: string) =>
    tone === 'formal'
      ? `Public data for ${label} was unavailable when I searched—an omission that deeply concerns me.`
      : `No public numbers for ${label} showed up, and I’d like to know why.`

  const lineFor = (label: string, count: number | null) =>
    count === null ? fallback(label) : `${format(count)} ${label}`

  return [
    lineFor('research projects', research.projects),
    lineFor('peer‑reviewed publications', research.publications),
    lineFor('patented discoveries', research.patents),
    lineFor('clinical trials', research.trials),
  ]
}
