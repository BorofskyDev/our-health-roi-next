'use client'
import { useState, FormEvent } from 'react'
import { SectionHeading } from '@/components/common/headers'
import { FlexColSection } from '@/components/layout/sections'
import { ResultsList } from './results-list/ResultsList'
import { CTAButton } from '@/components/common/buttons'
import { TextInput } from '@/components/common/inputs'
import { useSearchResults } from '@/lib/hooks/useSearchResults'
import styles from './SearchForm.module.scss'

export type SearchResults = {
  projects: {
    total: number | null
    searchId: string | null
    reporterURL: string | null
  } | null
  publications: number | null
  patents: number | null
  trials: number | null
  term: string
}

export const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showResults, setShowResults] = useState<boolean>(false)
  const [results, setResults] = useState<SearchResults | null>(null)
  const [error, setError] = useState<string | null>(null)
  const { setResults: setContextResults } = useSearchResults()

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()
    if (!searchTerm.trim()) return
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(searchTerm)}`
      )
      if (!response.ok) {
        throw new Error(`Search error: ${response.status}`)
      }
      const data = await response.json()
      setResults(data)
      setContextResults(data.term, {
        projects: data.projects?.total ?? null,
        publications: data.publications,
        patents: data.patents,
        trials: data.trials,
      })
      setShowResults(true)
    } catch (error) {
      console.error('Search error:', error)
      setError(
        error instanceof Error ? error.message : 'An unexpected error occurred'
      )
      setShowResults(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Search Section */}
      <FlexColSection id='search'>
        <SectionHeading className='center'>
          Enter a health condition to review NIH research impact
        </SectionHeading>
        <form className={styles.searchForm} onSubmit={handleSearch}>
          <TextInput
            id='condition'
            name='condition'
            label='Enter a health condition to review NIH research impact'
            hideLabel
            hint='Enter a health condition to review the NIH research impact, e.g. "melanoma"'
            placeholder='e.g. melanoma'
            autoComplete='off'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <CTAButton
            type='submit'
            isLoading={isLoading}
            loadingText='Searching..'
          >
            Search
          </CTAButton>
        </form>
        {error && (
          <div className='error-message'>
            <p>{error}</p>
          </div>
        )}
      </FlexColSection>
      {/* Results Section */}
      {showResults && results && (
        <FlexColSection id='results'>
          <ResultsList results={results} />
        </FlexColSection>
      )}
    </>
  )
}
