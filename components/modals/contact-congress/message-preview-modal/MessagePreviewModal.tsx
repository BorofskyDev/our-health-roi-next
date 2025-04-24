// components/modals/contact-congress/message-preview-modal/MessagePreviewModal.tsx
'use client'
import { useEffect, useState } from 'react'
import { ModalShell } from '../modal-shell/ContactModalShell'
import { CTAButton } from '@/components/common/buttons'
import { BodyText } from '@/components/common/body-typography'
import { useContactDetails } from '@/lib/hooks/useContactDetails'
import { useModal } from '@/context/ModalContext'
import { ContactOptionsModal } from '../contact-options-modal/ContactOptionsModal'
import { ContactDetailsModal } from '../contact-details-modal/ContactDetailsModal'
import {
  generateMessagePreview,
} from '@/lib/utils/messageTemplates'
import { ContactType, RecipientType } from '../messages/MessageBody'
import { CopyIcon, CopiedIcon } from '@/components/icons'
import type { ResearchCounts } from '@/types/research'
import styles from './MessagePreviewModal.module.scss'

type Props = {
  searchTerm: string
  research: ResearchCounts
  contactType: ContactType
  recipientType: RecipientType
  title: string
}

export const MessagePreviewModal = ({
  searchTerm,
  research,
  contactType,
  recipientType,
  title,
}: Props) => {
  const { contactDetails } = useContactDetails()
  const { openModal } = useModal()
  const [preview, setPreview] = useState<string | null>(null)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (!contactDetails) {
      return
    }

    if (recipientType === 'senators' && contactType === 'email') {
      const preview1 = contactDetails.senatorName1
        ? generateMessagePreview(
            { ...contactDetails, currentSenator: contactDetails.senatorName1 },
            searchTerm,
            research,
            contactType,
            recipientType
          )
        : null

      const preview2 = contactDetails.senatorName2
        ? generateMessagePreview(
            { ...contactDetails, currentSenator: contactDetails.senatorName2 },
            searchTerm,
            research,
            contactType,
            recipientType
          )
        : null

      let combinedPreview = ''

      if (preview1) {
        combinedPreview += preview1
      }

      if (preview1 && preview2) {
        combinedPreview += '\n\n----------- SECOND SENATOR -----------\n\n'
      }

      if (preview2) {
        combinedPreview += preview2
      }

      setPreview(combinedPreview || null)
    } else {
      const generatedPreview = generateMessagePreview(
        contactDetails,
        searchTerm,
        research,
        contactType,
        recipientType
      )
      setPreview(generatedPreview)
    }
  }, [contactDetails, searchTerm, research, contactType, recipientType])

   const handleCopy = () => {
     if (!preview) return;
     navigator.clipboard.writeText(preview)
     setIsCopied(true)

     // Reset after 5 seconds
     setTimeout(() => {
       setIsCopied(false)
     }, 5000)
   }
  const handleBack = () => {
    openModal(<ContactOptionsModal />)
  }

  const handleEditDetails = () => {
    openModal(
      <ContactDetailsModal
        onComplete={() =>
          openModal(
            <MessagePreviewModal
              searchTerm={searchTerm}
              research={research}
              contactType={contactType}
              recipientType={recipientType}
              title={title}
            />
          )
        }
      />
    )
  }

  if (!contactDetails) {
    return (
      <ModalShell title={title}>
        <BodyText>Missing contact information.</BodyText>
        <div className='mt-24'>
          <CTAButton onClick={handleEditDetails}>
            Enter Contact Information
          </CTAButton>
        </div>
      </ModalShell>
    )
  }

  if (!preview) {
    return (
      <ModalShell title={title}>
        <BodyText>Loading your message...</BodyText>
      </ModalShell>
    )
  }

  return (
    <ModalShell title={title}>
      <BodyText className='preview-content'>{preview}</BodyText>
      <div className={styles.buttonGroup}>
        <CTAButton
          className={styles.optionsBtn}
          type='button'
          onClick={handleBack}
        >
          Back to Options
        </CTAButton>
        <CTAButton
          type='button'
          onClick={handleCopy}
          className={isCopied ? styles.copied : styles.copyBtn}
        >
          {isCopied ? (
            <>
              Copied! <CopiedIcon />
            </>
          ) : (
            <>
              Copy Text <CopyIcon />
            </>
          )}
        </CTAButton>
      </div>
    </ModalShell>
  )
}
