// 'use client'
// import { SectionTitle } from '@/components/common/headers'
// import { BodyText } from '@/components/common/body-typography'
// import { FlexColSection } from '@/components/layout/sections'
// import { ContactContainer } from '@/components/containers/containers/contact-container/ContactContainer'
// import { useModal } from '@/context/ModalContext'
// import {
//   CallRepModal,
//   CallSenatorsModal,
//   EmailRepModal,
//   EmailSenatorsModal,
// } from '@/components/modals/contact-congress'
// import { useSearchResults } from '@/context/SearchResultsContext'

// export const CTASection = () => {
//   const { openModal } = useModal()
//   const { term, counts } = useSearchResults()

//   // Helper to create research object from counts
//   const getResearchObject = () => {
//     if (!counts) return { projects: 0, publications: 0, patents: 0, trials: 0 }
//     return {
//       projects: counts.projects,
//       publications: counts.publications,
//       patents: counts.patents,
//       trials: counts.trials,
//     }
//   }

//   // Modal handler functions
//   const handleEmailRep = () => {
//     if (!term) return
//     openModal(
//       <EmailRepModal searchTerm={term} research={getResearchObject()} />
//     )
//   }

//   const handleEmailSenators = () => {
//     if (!term) return
//     openModal(
//       <EmailSenatorsModal searchTerm={term} research={getResearchObject()} />
//     )
//   }

//   const handleCallRep = () => {
//     openModal(
//       <CallRepModal searchTerm={term || ''} research={getResearchObject()} />
//     )
//   }

//   const handleCallSenators = () => {
//     openModal(
//       <CallSenatorsModal
//         searchTerm={term || ''}
//         research={getResearchObject()}
//       />
//     )
//   }

//   return (
//     <FlexColSection id='cta'>
//       <SectionTitle className='mb-24 center'>What To Do About It</SectionTitle>
//       <BodyText className='mb-18 body-width center'>
//         If the above information has played an impact in your life or in the
//         life of someone close to you, then you need the NIH. Don&apos;t let
//         billionaires or politicians slash that lifeline. Email and call your
//         U.S. representative and both senators today; share your story, thank
//         them for past support, and urge them to protect and grow NIH funding.
//         Your personal message can keep the breakthroughs coming.
//       </BodyText>
//       {/* Representatives */}
//       <ContactContainer
//         title='Contact Your Representative'
//         findLink={{
//           href: 'https://www.house.gov/representatives/find-your-representative',
//           text: 'Find My Representative',
//           ariaLabel:
//             'Visit site to find your U.S. Congressional Representative (opens in a new tab)',
//         }}
//         emailButton={{
//           text: 'Email My Rep',
//           id: 'emailRepBtn',
//           onClick: handleEmailRep,
//         }}
//         callButton={{
//           text: 'Call My Rep',
//           id: 'callRepBtn',
//           onClick: handleCallRep,
//         }}
//       />
//       {/* Senators */}
//       <ContactContainer
//         title='Contact Your Senators'
//         findLink={{
//           href: 'https://www.senate.gov/senators/senators-contact.htm',
//           text: 'Find My Senators',
//           ariaLabel:
//             'Visit site to find your U.S. Senators (opens in a new tab)',
//         }}
//         emailButton={{
//           text: 'Email My Senators',
//           id: 'emailSenatorsBtn',
//           onClick: handleEmailSenators,
//         }}
//         callButton={{
//           text: 'Call My Senators',
//           id: 'callSenatorsBtn',
//           onClick: handleCallSenators,
//         }}
//       />
//     </FlexColSection>
//   )
// }
// components/layout/sections/cta/CTASection.tsx
'use client'
import { SectionTitle } from '@/components/common/headers'
import { BodyText } from '@/components/common/body-typography'
import { FlexColSection } from '@/components/layout/sections'
import { CTAButton } from '@/components/common/buttons'
import { ExternalLink } from '@/components/common/links'
import { useModal } from '@/context/ModalContext'
import { ContactDetailsModal } from '@/components/modals/contact-congress/contact-details-modal/ContactDetailsModal'
import { useContactDetails } from '@/lib/hooks/useContactDetails'
import { ContactOptionsModal } from '@/components/modals/contact-congress/contact-options-modal/ContactOptionsModal'
import styles from './CTASection.module.scss'

export const CTASection = () => {
  const { openModal } = useModal()
  const { hasCompletedDetails } = useContactDetails()

  const handleShowOptionsModal = () => {
    openModal(<ContactOptionsModal />)
  }

  const handleTakeAction = () => {
    // If they've already entered their details, go straight to options
    if (hasCompletedDetails) {
      handleShowOptionsModal()
    } else {
      // Otherwise show the contact details form with an onComplete callback
      openModal(<ContactDetailsModal onComplete={handleShowOptionsModal} />)
    }
  }

  return (
    <FlexColSection id='cta'>
      <SectionTitle className='mb-24 center'>Take Action</SectionTitle>
      <BodyText className='mb-18 body-width center'>
        If the above information has played an impact in your life or in the
        life of someone close to you, then you need the NIH. Don&apos;t let
        billionaires or politicians slash that lifeline. Email and call your
        U.S. representative and both senators today; share your story, thank
        them for past support, and urge them to protect and grow NIH funding.
        Your personal message can keep the breakthroughs coming.
      </BodyText>
      <div className={styles.findLinksContainer}>
        <div className={styles.findLink}>
          <h3>Find Your Representative</h3>
          <ExternalLink
            href='https://www.house.gov/representatives/find-your-representative'
            ariaLabel='Visit site to find your U.S. Congressional Representative (opens in a new tab)'
          >
            Find My Representative
          </ExternalLink>
        </div>
        <div className={styles.findLink}>
          <h3>Find Your Senators</h3>
          <ExternalLink
            href='https://www.senate.gov/senators/senators-contact.htm'
            ariaLabel='Visit site to find your U.S. Senators (opens in a new tab)'
          >
            Find My Senators
          </ExternalLink>
        </div>
      </div>
      <div className={styles.actionButtonContainer}>
        <CTAButton onClick={handleTakeAction} className={styles.actionButton}>
          {hasCompletedDetails ? 'Contact Congress' : 'Start Contact Form'}
        </CTAButton>
      </div>
    </FlexColSection>
  )
}
