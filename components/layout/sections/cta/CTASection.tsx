'use client'
import { BodyText } from '@/components/common/body-typography'
import { FlexColSection } from '@/components/layout/sections'
import { CTAButton } from '@/components/common/buttons'
import { ExternalLink } from '@/components/common/links'
import { useModal } from '@/context/ModalContext'
import { ContactDetailsModal } from '@/components/modals/contact-congress/contact-details-modal/ContactDetailsModal'
import { useContactDetails } from '@/lib/hooks/useContactDetails'
import { ContactOptionsModal } from '@/components/modals/contact-congress/contact-options-modal/ContactOptionsModal'
import { FlexColContainer } from '@/components/containers/layout-container/flex-col-container/FlexColContainer'
import { ColToRowContainer } from '@/components/containers/layout-container/col-to-row-container/ColToRowContainer'
import { Heading } from '@/components/common/headers/heading/Heading'
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
      <ColToRowContainer >
        <div className='mb-44'>
          <Heading as='h3' size='lg' className='mb-24 center'>
            Take Action
          </Heading>
          <BodyText className='mb-18 body-width center'>
            If the above information has played an impact in your life or in the
            life of someone close to you, then you need the NIH. Don&apos;t let
            billionaires or politicians slash that lifeline. Email and call your
            U.S. representative and both senators today; share your story, thank
            them for past support, and urge them to protect and grow NIH
            funding. Your personal message can keep the breakthroughs coming.
          </BodyText>
        </div>
        <FlexColContainer>
          <FlexColContainer className='mb-44'>
            <div className={styles.findLink}>
              <Heading as='h4' size='sm'>
                Find Your Representative
              </Heading>
              <ExternalLink
                href='https://www.house.gov/representatives/find-your-representative'
                ariaLabel='Visit site to find your U.S. Congressional Representative (opens in a new tab)'
              >
                Find My Representative
              </ExternalLink>
            </div>
            <div className={styles.findLink}>
              <Heading as='h4' size='sm'>
                Find Your Senators
              </Heading>
              <ExternalLink
                href='https://www.senate.gov/senators/senators-contact.htm'
                ariaLabel='Visit site to find your U.S. Senators (opens in a new tab)'
              >
                Find My Senators
              </ExternalLink>
            </div>
          </FlexColContainer>
          <div className={styles.actionButtonContainer}>
            <CTAButton
              onClick={handleTakeAction}
              className={styles.actionButton}
            >
              {hasCompletedDetails ? 'Contact Congress' : 'Start Contact Form'}
            </CTAButton>
          </div>
        </FlexColContainer>
      </ColToRowContainer>
    </FlexColSection>
  )
}
