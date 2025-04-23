'use client'
import { createContext, useState, ReactNode } from 'react'
import type { SearchResults, ResearchCounts } from '@/types/research'


const toCounts = (sr: SearchResults): ResearchCounts => ({
  projects: sr.projects?.total ?? null,
  publications: sr.publications?.total ?? null,
  patents: sr.patents?.total ?? null,
  trials: sr.trials?.total ?? null,
})

export type SearchResultsContextType = {
  term: string | null
  results: SearchResults | null 
  counts: ResearchCounts | null 
  setResults: (term: string, results: SearchResults) => void
}

export const SearchResultsContext = createContext<
  SearchResultsContextType | undefined
>(undefined)

export default function SearchResultsProvider({
  children,
}: {
  children: ReactNode
}) {
  const [term, setTerm] = useState<string | null>(null)
  const [results, setResultsRaw] = useState<SearchResults | null>(null)
  const [counts, setCounts] = useState<ResearchCounts | null>(null)

  const setResults = (newTerm: string, sr: SearchResults) => {
    setTerm(newTerm)
    setResultsRaw(sr)
    setCounts(toCounts(sr))
  }

  return (
    <SearchResultsContext.Provider
      value={{ term, results, counts, setResults }}
    >
      {children}
    </SearchResultsContext.Provider>
  )
}
