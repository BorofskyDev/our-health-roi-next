// components/modals/contact-congress/contact-options-modal/ContactOptionsModal.tsx
'use client'
import { ModalShell } from '../modal-shell/ContactModalShell'
import { EmailIconButton, PhoneIconButton } from '@/components/common/buttons'
import { BodyText } from '@/components/common/body-typography'
import { useModal } from '@/context/ModalContext'
import { useSearchResults } from '@/lib/hooks/useSearchResults'
import { ContactDetailsModal } from '../contact-details-modal/ContactDetailsModal'
import { MessagePreviewModal } from '../message-preview-modal/MessagePreviewModal'
import styles from './ContactOptionsModal.module.scss'
import { FlexColContainer } from '@/components/containers/layout-container/flex-col-container/FlexColContainer'
import { Heading } from '@/components/common/headers/Heading'

export const ContactOptionsModal = () => {
  const { openModal } = useModal()
  const { term, counts } = useSearchResults()

  const getResearchObject = () => {
    if (!counts) return { projects: 0, publications: 0, trials: 0 }
    return {
      projects: counts.projects,
      publications: counts.publications,
      trials: counts.trials,
    }
  }

  const handleEmailRep = () => {
    openModal(
      <MessagePreviewModal
        searchTerm={term || ''}
        research={getResearchObject()}
        contactType='email'
        recipientType='rep'
        title='Email Your Representative'
      />
    )
  }

  const handleEmailSenators = () => {
    openModal(
      <MessagePreviewModal
        searchTerm={term || ''}
        research={getResearchObject()}
        contactType='email'
        recipientType='senators'
        title='Email Your Senators'
      />
    )
  }

  const handleCallRep = () => {
    openModal(
      <MessagePreviewModal
        searchTerm={term || ''}
        research={getResearchObject()}
        contactType='call'
        recipientType='rep'
        title='Call Your Representative'
      />
    )
  }

  const handleCallSenators = () => {
    openModal(
      <MessagePreviewModal
        searchTerm={term || ''}
        research={getResearchObject()}
        contactType='call'
        recipientType='senators'
        title='Call Your Senators'
      />
    )
  }

  const handleEditInfo = () => {
    const handleReturnToOptions = () => {
      openModal(<ContactOptionsModal />)
    }

    openModal(<ContactDetailsModal onComplete={handleReturnToOptions} />)
  }

  return (
    <ModalShell title='Contact Your Representatives'>
      <BodyText className='mb-18 center'>
        Choose how you&apos;d like to contact your representatives about NIH
        funding for {term || 'research'}.
      </BodyText>

      <FlexColContainer>
        <div className={styles.section}>
          <Heading as='h4' size='md' className='mb-24 center'>Representative</Heading>
          <div className={styles.buttonGroup}>
            <EmailIconButton
              text='Email Rep'
              id='emailRepBtn'
              className=' mb-44'
              onClick={handleEmailRep}
            />
            <PhoneIconButton
              text='Call Rep'
              id='callRepBtn'
              className='icon-modal-btn-secondary'
              onClick={handleCallRep}
            />
          </div>
        </div>

        <div className={styles.section}>
          <Heading as='h4' size='md' className='mb-24 center'>Senators</Heading>
          <div className={styles.buttonGroup}>
            <EmailIconButton
              text='Email Senators'
              id='emailSenatorsBtn'
              className=' mb-44'
              onClick={handleEmailSenators}
            />
            <PhoneIconButton
              text='Call Senators'
              id='callSenatorsBtn'
              className='icon-modal-btn-secondary'
              onClick={handleCallSenators}
            />
          </div>
        </div>
      </FlexColContainer>

      <div className={styles.footer}>
        <button className={styles.editButton} onClick={handleEditInfo}>
          Edit Contact Information
        </button>
      </div>
    </ModalShell>
  )
}
