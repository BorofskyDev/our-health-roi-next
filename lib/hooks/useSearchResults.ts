// lib/hooks/useSearchResults.ts

'use client'
import { useContext } from 'react'
import { SearchResultsContext } from '@/context/SearchResultsContext'
import type { ResearchCounts, SearchResults } from '@/types/research'

export const useSearchResults = () => {
  const ctx = useContext(SearchResultsContext)

  /* Fallback for server components or outside provider */
  if (!ctx) {
    const noop = (_term: string, _r: SearchResults) => {
      void _term;
      void _r;
    }

    return {
      term: null,
      results: null,
      counts: null as ResearchCounts | null,
      setResults: noop,
    }
  }
  return ctx
}
