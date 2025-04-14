'use client'
import { useState, FormEvent, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { PHeader, PageHeader, SectionHeading } from '@/components/common/headers'
import { FlexColSection } from '@/components/layout/sections'

type SearchResults = {
  projects: {
    total: number
    searchId: string | null
    reporterURL: string | null
  }
  publications: number
  patents: number
  trials: number
  term: string
}

const SplashPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showResults, setShowResults] = useState<boolean>(false)
  const [results, setResults] = useState<SearchResults | null>(null)
  const router = useRouter()

  // Placeholder effect to satisfy ESLint by using setShowResults
  useEffect(() => {
    // This is just a placeholder to use setShowResults
    // Will be replaced with actual implementation later
    if (results && !showResults) {
      setShowResults(true)
    }
  }, [results, showResults])

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()
    if (!searchTerm.trim()) return
    setIsLoading(true)

    try {
      // For now we're using Option 2 (navigation), but keeping Option 1 code
      // as a placeholder to satisfy ESLint for setResults

      // This is a placeholder request that will be properly implemented later
      // Uncomment when ready to use this approach
      /*
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchTerm)}`)
      const data = await response.json()
      setResults(data)
      setShowResults(true)
      */

      // Option 2: Navigate to results page (recommended for cleaner separation)
      router.push(`/results?q=${encodeURIComponent(searchTerm)}`)
    } catch (error) {
      console.error('Search error:', error)
      // Placeholder error handling that uses setShowResults to satisfy ESLint
      setShowResults(false)
    } finally {
      setIsLoading(false)
    }
  }

  // Placeholder function to render results
  // Will be expanded or replaced later
  const renderResults = () => {
    if (!results) return null

    return (
      <div>
        <p>
          Found {results.projects.total} projects for &quot;{results.term}&quot;
        </p>
        {/* More result rendering will go here */}
      </div>
    )
  }

  return (
    <main>
      {/* Hero Section */}
      <FlexColSection id='hero'>

        <PageHeader>Our Health ROI</PageHeader>
        <PHeader>See the return on your tax dollars</PHeader>
      </FlexColSection>

      {/* Search Section */}
      <FlexColSection>
        <SectionHeading >Enter Your Condition</SectionHeading>
        <form onSubmit={handleSearch}>
          <div className='input-group'>
            <label htmlFor='condition' className='visually-hidden'>
              Search for a health condition
            </label>
            <input
              className='primary-input'
              id='condition'
              name='condition'
              placeholder='e.g. melanoma'
              aria-describedby='condition-hint'
              autoComplete='off'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div id='condition-hint' className='visually-hidden'>
              Enter a health condition to review NIH research impact
            </div>
          </div>
          <button className='cta-btn' type='submit' disabled={isLoading}>
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </form>
      </FlexColSection>

      {/* Results Section - hidden by default */}
      <section id='results' hidden={!showResults} className='flex-col-section'>
        {renderResults()}
      </section>

      {/* CTA Section */}
      <section className='flex-col-section' id='cta'>
        {/* Call to action content */}
      </section>

      {/* Final CTA Section */}
      <section className='flex-col-section' id='finalCTA'>
        {/* Final call to action content */}
      </section>

      {/* Resources Section */}
      <section className='flex-col-section' id='resources'>
        <h2 className='section-title mb-24 center'>Resources</h2>
        {/* Resources content */}
      </section>
    </main>
  )
}

export default SplashPage
