// components/containers/page-containers/SplashPage.tsx

import { PHeader, PageHeader, SectionTitle } from '@/components/common/headers'
import { FlexColSection } from '@/components/layout/sections'
import { SearchForm } from '@/components/layout/forms'
import { Page } from '@/components/layout/page/Page'
import { BodyText } from '@/components/common/body-typography'
import { ContactContainer } from '../containers/contact-container/ContactContainer'

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
      <FlexColSection id='cta'>
        <SectionTitle className='mb-24 center'>
          What To Do About It
        </SectionTitle>
        <BodyText className='mb-18 body-width center'>
          If the above information has played an impact in your life or in the
          life of someone close to you, then you need the NIH. Don&apos;t let
          billionaires or politicians slash that lifeline. Email and call your
          U.S. representative and both senators today; share your story, thank
          them for past support, and urge them to protect and grow NIH funding.
          Our personal message can keep the breakthroughs coming.
        </BodyText>
        <ContactContainer
          title='Contact Your Representative'
          findLink={{
            href: 'https://www.house.gov/representatives/find-your-representative',
            text: 'Find My Representative',
            ariaLabel:
              'Visit site to find your U.S. Congressional Representative (opens in a new tab)',
          }}
          emailButton={{ text: 'Email My Rep', id: 'emailRepBtn' }}
          callButton={{ text: 'Call My Rep', id: 'callRepBtn' }}
        />
        <ContactContainer
          title='Contact Your Senators'
          findLink={{
            href: 'https://www.senate.gov/senators/senators-contact.htm',
            text: 'Find My Senators',
            ariaLabel:
              'Visit site to find your U.S. Senators (opens in a new tab)',
          }}
          emailButton={{ text: 'Email My Senators', id: 'emailSenatorsBtn' }}
          callButton={{ text: 'Call My Senators', id: 'callSenatorsBtn' }}
        />
      </FlexColSection>

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
