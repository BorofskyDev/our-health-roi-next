// lib/hooks/useSearchResults.ts

'use client'
import { useContext } from 'react'
import { SearchResultsContext } from '@/context/SearchResultsContext'
import { ResearchCounts } from '@/lib/utils/messageTemplates'

export const useSearchResults = () => {
  const ctx = useContext(SearchResultsContext)
  if (!ctx) {

    const noop = (_term: string, _counts: ResearchCounts) => {
      void _counts; 
      
    }

    return {
      term: null,
      counts: null,
      setResults: noop,
    }
  }
  return ctx
}