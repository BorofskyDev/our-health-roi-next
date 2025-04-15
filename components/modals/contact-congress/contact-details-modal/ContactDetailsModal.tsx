// components/modals/contact-congress/contact-details-modal/ContactDetailsModal.tsx
'use client'
import { useState, FormEvent, ChangeEvent } from 'react'
import { ModalShell } from '../modal-shell/ContactModalShell'
import { TextInput } from '@/components/common/inputs'
import { TextAreaWithCount } from '@/components/common/inputs'
import { CTAButton } from '@/components/common/buttons'
import { useContactDetails } from '@/lib/hooks/useContactDetails'
import { useModal } from '@/context/ModalContext'
import { MessageFormValues } from '@/lib/utils/messageTemplates'
import { ContactOptionsModal } from '../contact-options-modal/ContactOptionsModal'

export const ContactDetailsModal = ({
  onComplete,
}: {
  onComplete?: () => void
}) => {
  const { contactDetails, setContactDetails } = useContactDetails()
  const { closeModal, openModal } = useModal()
  const [values, setValues] = useState<MessageFormValues>(
    contactDetails || {
      repName: '',
      senatorName1: '',
      senatorName2: '',
      cityState: '',
      personalImpact: '',
      fullName: '',
    }
  )

  const handleChange =
    (field: keyof MessageFormValues) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    setContactDetails(values)

    closeModal()

    setTimeout(() => {
      if (onComplete) {
        onComplete()
      } else {
        openModal(<ContactOptionsModal />)
      }
    }, 50)
  }

  return (
    <ModalShell title='Your Contact Information'>
      <form onSubmit={handleSubmit} className='modal-form'>
        <TextInput
          id='rep-name'
          label="Representative's Name"
          placeholder="Enter your representative's name"
          value={values.repName}
          onChange={handleChange('repName')}
        />

        <TextInput
          id='senator-name-1'
          label="First Senator's Name"
          placeholder="Enter your first senator's name"
          value={values.senatorName1}
          onChange={handleChange('senatorName1')}
        />

        <TextInput
          id='senator-name-2'
          label="Second Senator's Name"
          placeholder="Enter your second senator's name"
          value={values.senatorName2}
          onChange={handleChange('senatorName2')}
        />

        <TextInput
          id='city-state'
          label='Your City, State'
          placeholder='e.g. Columbus, OH'
          required
          value={values.cityState}
          onChange={handleChange('cityState')}
        />

        <TextAreaWithCount
          id='personal-impact'
          label='Personal Impact Statement'
          hideLabel
          maxLength={500}
          rows={4}
          placeholder='How has NIH funding for this condition impacted you personally?'
          required
          value={values.personalImpact}
          onChange={handleChange('personalImpact')}
        />

        <TextInput
          id='full-name'
          label='Your Full Name'
          placeholder='Enter your full name'
          required
          value={values.fullName}
          onChange={handleChange('fullName')}
        />

        <CTAButton type='submit'>Continue to Contact Options</CTAButton>
      </form>
    </ModalShell>
  )
}
