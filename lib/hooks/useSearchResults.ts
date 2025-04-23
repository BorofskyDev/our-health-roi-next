// ─────────────────────────────────────────────────────────
// /lib/hooks/useSearchResults.ts
// ─────────────────────────────────────────────────────────
'use client'
import { useContext } from 'react'
import {
  SearchResultsContext,
  SearchResultsContextType,
} from '@/context/SearchResultsContext'
import type { ResearchCounts } from '@/types/research'

export const useSearchResults = () => {
  const ctx = useContext(SearchResultsContext)

  // SSR safety / when provider is missing
  if (!ctx) {
    const noop = (_term: string, _counts: ResearchCounts) => {
      void _term;
      void _counts;
    }
    const fallback: SearchResultsContextType = {
      term: null,
      counts: null,
      setResults: noop,
    }
    return fallback
  }

  return ctx
}
