// components/containers/page-containers/SplashPage.tsx
'use client'
import { PHeader, PageHeader } from '@/components/common/headers'
import { FlexColSection } from '@/components/layout/sections'
import { SearchForm } from '@/components/layout/forms'
import { Page } from '@/components/layout/page/Page'
import { FinalCTA } from '@/components/layout/sections/final-cta-section/FinalCTA'
import { ResourcesSection } from '@/components/layout/sections/resources-section/ResourcesSection'
import { CTASection } from '@/components/layout/sections/cta/CTASection'
import { ColToRowContainer } from '../layout-container/col-to-row-container/ColToRowContainer'
import { AnimatedIcon } from '@/components/icons'
import { useSearchResults } from '@/lib/hooks/useSearchResults'

const SplashPage = () => {
  const searchContext = useSearchResults()

  const showCTA =
    searchContext?.term !== null && searchContext?.term !== undefined
  return (
    <Page>
      <ColToRowContainer>
        <FlexColSection id='main'>
          <PageHeader className='center'>Our Health ROI</PageHeader>
          <PHeader>See the return on your tax dollars</PHeader>
          <AnimatedIcon id='dna' size='25rem' />
        </FlexColSection>
        <SearchForm />
      </ColToRowContainer>
      {showCTA && <CTASection />}

      <FlexColSection id='finalCTA'>
        <FinalCTA />
      </FlexColSection>

      <FlexColSection id='resources'>
        <ResourcesSection />
      </FlexColSection>
    </Page>
  )
}

export default SplashPage
