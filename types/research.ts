/* ------------------------------------------------------------------ */
/*  Canonical API payload                                             */
/* ------------------------------------------------------------------ */
export interface MetricWithLink {
  total: number | null
  reporterURL: string | null
}

/** What the search API route returns to the client-side: */
export interface SearchResults {
  term: string
  projects: MetricWithLink | null
  publications: MetricWithLink | null
  patents: MetricWithLink | null
  trials: MetricWithLink | null
}

/* ------------------------------------------------------------------ */
/*  Slimmed-down “numbers only” view used in emails, call scripts, etc */
/* ------------------------------------------------------------------ */
export type ResearchCounts = {
  projects: number | null
  publications: number | null
  patents: number | null
  trials: number | null
}
