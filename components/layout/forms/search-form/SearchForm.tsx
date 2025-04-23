// components/layout/forms/search-form/SearchForm.tsx

'use client'
import { useState, FormEvent } from 'react'
import { FlexColSection } from '@/components/layout/sections'
import { ResultsList } from './results-list/ResultsList'
import { CTAButton } from '@/components/common/buttons'
import { TextInput } from '@/components/common/inputs'
import { useSearchResults } from '@/lib/hooks/useSearchResults'
import { Heading } from '@/components/common/headers/heading/Heading'
import styles from './SearchForm.module.scss'

import type { SearchResults, ResearchCounts } from '@/types/research' // ← centralised types

export const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<SearchResults | null>(null)
  const [error, setError] = useState<string | null>(null)

  const { setResults: setContextResults } = useSearchResults()

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()
    if (!searchTerm.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(searchTerm)}`)

      if (!res.ok) throw new Error(`Search error: ${res.status}`)

      const data: SearchResults = await res.json()
      setResults(data)

      /** derive plain-number counts for downstream email / phone templates */
      const counts: ResearchCounts = {
        projects: data.projects?.total ?? null,
        publications: data.publications?.total ?? null,
        trials: data.trials?.total ?? null,
      }

    
      setContextResults(data.term, counts)
      setShowResults(true)
    } catch (err) {
      console.error('Search error:', err)
      setError(
        err instanceof Error ? err.message : 'An unexpected error occurred'
      )
      setShowResults(false)
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <>

      <FlexColSection id='search'>
        <Heading as='h3' size='lg' className='center mb-24'>
          Enter a health condition to review NIH research impact
        </Heading>

        <form className={styles.searchForm} onSubmit={handleSearch}>
          <TextInput
            id='condition'
            label='Enter a health condition to review NIH research impact'
            hideLabel
            hint='e.g. "melanoma", "ALS", "long COVID"'
            placeholder='e.g. melanoma'
            autoComplete='off'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <CTAButton
            type='submit'
            isLoading={isLoading}
            loadingText='Searching…'
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

    
      {showResults && results && <ResultsList results={results} />}
    </>
  )
}
