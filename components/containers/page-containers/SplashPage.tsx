// components/containers/page-containers/SplashPage.tsx

import { PHeader, PageHeader } from '@/components/common/headers'
import { FlexColSection } from '@/components/layout/sections'
import { SearchForm } from '@/components/layout/forms'
import { Page } from '@/components/layout/page/Page'
import { FinalCTA } from '@/components/layout/sections/final-cta-section/FinalCTA'
import { ResourcesSection } from '@/components/layout/sections/resources-section/ResourcesSection'
import { CTASection } from '@/components/layout/sections/cta/CTASection'

const SplashPage = () => {
  return (
    <Page>
      <FlexColSection id='hero'>
        <PageHeader>Our Health ROI</PageHeader>
        <PHeader>See the return on your tax dollars</PHeader>
      </FlexColSection>

      <SearchForm />

      <CTASection />

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
