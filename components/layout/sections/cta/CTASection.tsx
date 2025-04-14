// components/layout/sections/cta/CTASection.tsx

'use client'
import { SectionTitle } from '@/components/common/headers'
import { BodyText } from '@/components/common/body-typography'
import { FlexColSection } from '@/components/layout/sections'
import { ContactContainer } from '@/components/containers/containers/contact-container/ContactContainer'
import { useModal } from '@/context/ModalContext'
import {
  CallRepModal,
  CallSenatorsModal,
  EmailRepModal,
  EmailSenatorsModal,
} from '@/components/modals/contact-congress'
import { useSearchResults } from '@/context/SearchResultsContext'

export const CTASection = () => {
  const { openModal } = useModal()
  const { term, counts } = useSearchResults()

  const handleEmailRep = () => {
    if (!term || !counts) return
    openModal(
      <EmailRepModal
        searchTerm={term}
        research={{
          projects: counts.projects,
          publications: counts.publications,
          patents: counts.patents,
          trials: counts.trials,
        }}
      />
    )
  }

  return (
    <FlexColSection id='cta'>
      <SectionTitle className='mb-24 center'>What To Do About It</SectionTitle>
      <BodyText className='mb-18 body-width center'>
        If the above information has played an impact in your life or in the
        life of someone close to you, then you need the NIH. Don&apos;t let
        billionaires or politicians slash that lifeline. Email and call your
        U.S. representative and both senators today; share your story, thank
        them for past support, and urge them to protect and grow NIH funding.
        Your personal message can keep the breakthroughs coming.
      </BodyText>
      {/* Representatives */}
      <ContactContainer
        title='Contact Your Representative'
        findLink={{
          href: 'https://www.house.gov/representatives/find-your-representative',
          text: 'Find My Representative',
          ariaLabel:
            'Visit site to find your U.S. Congressional Representative (opens in a new tab)',
        }}
        emailButton={{
          text: 'Email My Rep',
          id: 'emailRepBtn',
          onClick: handleEmailRep,
        }}
        callButton={{
          text: 'Call My Rep',
          id: 'callRepBtn',
          onClick: () => openModal(<CallRepModal />),
        }}
      />
      {/* Senators */}
      <ContactContainer
        title='Contact Your Senators'
        findLink={{
          href: 'https://www.senate.gov/senators/senators-contact.htm',
          text: 'Find My Senators',
          ariaLabel:
            'Visit site to find your U.S. Senators (opens in a new tab)',
        }}
        emailButton={{
          text: 'Email My Senators',
          id: 'emailSenatorsBtn',
          onClick: () => openModal(<EmailSenatorsModal />),
        }}
        callButton={{
          text: 'Call My Senators',
          id: 'callSenatorsBtn',
          onClick: () => openModal(<CallSenatorsModal />),
        }}
      />
    </FlexColSection>
  )
}
