// context/SearchResultsContext.tsx 

import { ReactNode, createContext, useContext, useState } from 'react'

export type ResearchCounts = {
  projects: number
  publications: number
  patents: number
  trials: number
}

export type SearchResultsContextType = {
  term: string | null
  counts: ResearchCounts | null
  /** called by SearchForm after a successful fetch */
  setResults: (term: string, counts: ResearchCounts) => void
}

const SearchResultsContext = createContext<
  SearchResultsContextType | undefined
>(undefined)

export const useSearchResults = () => {
  const ctx = useContext(SearchResultsContext)
  if (!ctx) throw new Error('useSearchResults must be used inside <Providers>')
  return ctx
}

export default function SearchResultsProvider({ children }: { children: ReactNode }) {
  const [term, setTerm] = useState<string | null>(null)
  const [counts, setCounts] = useState<ResearchCounts | null>(null)

  const setResults = (newTerm: string, newCounts: ResearchCounts) => {
    setTerm(newTerm)
    setCounts(newCounts)
  }

  return (
    <SearchResultsContext.Provider value={{ term, counts, setResults }}>
      {children}
    </SearchResultsContext.Provider>
  )
}
