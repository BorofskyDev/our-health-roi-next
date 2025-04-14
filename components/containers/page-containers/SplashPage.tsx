import { PHeader, PageHeader } from '@/components/common/headers'
import { FlexColSection } from '@/components/layout/sections'
import { SearchForm } from '@/components/layout/forms'
import { Page } from '@/components/layout/page/Page'

const SplashPage = () => {
  return (
    <Page>
      {/* Hero Section */}
      <FlexColSection id='hero'>
        <PageHeader>Our Health ROI</PageHeader>
        <PHeader>See the return on your tax dollars</PHeader>
      </FlexColSection>

      {/* Search Section */}
      <SearchForm />

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
    </Page>
  )
}

export default SplashPage
