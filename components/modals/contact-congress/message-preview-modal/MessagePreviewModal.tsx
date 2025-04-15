'use client'
import { useEffect, useState } from 'react'
import { ModalShell } from '../modal-shell/ContactModalShell'
import { CTAButton } from '@/components/common/buttons'
import { BodyText } from '@/components/common/body-typography'
import { useContactDetails } from '@/lib/hooks/useContactDetails'
import { useModal } from '@/context/ModalContext'
import { ContactOptionsModal } from '../contact-options-modal/ContactOptionsModal'
import {
  generateMessagePreview,
  ResearchCounts,
} from '@/lib/utils/messageTemplates'
import { ContactType, RecipientType } from '../messages/MessageBody'

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

  useEffect(() => {
    if (!contactDetails) return

    // Generate previews based on recipient type
    if (recipientType === 'senators' && contactType === 'email') {
      // Generate for the first senator
      const preview1 = contactDetails.senatorName1
        ? generateMessagePreview(
            { ...contactDetails, currentSenator: contactDetails.senatorName1 },
            searchTerm,
            research,
            contactType,
            recipientType
          )
        : null

      // Generate for the second senator
      const preview2 = contactDetails.senatorName2
        ? generateMessagePreview(
            { ...contactDetails, currentSenator: contactDetails.senatorName2 },
            searchTerm,
            research,
            contactType,
            recipientType
          )
        : null

      // Combine the previews with a separator
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
      // For representatives or call scripts, just generate a single preview
      setPreview(
        generateMessagePreview(
          contactDetails,
          searchTerm,
          research,
          contactType,
          recipientType
        )
      )
    }
  }, [contactDetails, searchTerm, research, contactType, recipientType])

  const handleBack = () => {
    openModal(<ContactOptionsModal />)
  }

  if (!contactDetails || !preview) {
    return (
      <ModalShell title={title}>
        <BodyText>Loading your message...</BodyText>
      </ModalShell>
    )
  }

  return (
    <ModalShell title={title}>
      <BodyText className='preview-content'>{preview}</BodyText>
      <div className='flex gap-16 mt-24'>
        <CTAButton type='button' onClick={handleBack}>
          Back to Options
        </CTAButton>
        <CTAButton
          type='button'
          onClick={() => navigator.clipboard.writeText(preview)}
        >
          Copy Text
        </CTAButton>
      </div>
    </ModalShell>
  )
}
