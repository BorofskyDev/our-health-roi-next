'use client'
import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { ModalShell } from '../modal-shell/ContactModalShell'
import { TextInput } from '@/components/common/inputs'
import { TextAreaWithCount } from '@/components/common/inputs'
import { CTAButton } from '@/components/common/buttons'
import { useContactDetails } from '@/lib/hooks/useContactDetails'
import { useModal } from '@/context/ModalContext'
import { MessageFormValues } from '@/lib/utils/messageTemplates'

export const ContactDetailsModal = ({
  onComplete,
}: {
  onComplete?: () => void
}) => {
  const { contactDetails, setContactDetails } = useContactDetails()
  const { closeModal } = useModal()

  // Add debugging to see if our hook is working
  console.log(
    'ContactDetailsModal rendering with contactDetails:',
    contactDetails
  )

  // Initialize form with existing values or defaults
  const [values, setValues] = useState<MessageFormValues>({
    repName: '',
    senatorName1: '',
    senatorName2: '',
    cityState: '',
    personalImpact: '',
    fullName: '',
  })

  // Sync form with context values when the component mounts or contactDetails changes
  useEffect(() => {
    if (contactDetails) {
      console.log('Syncing form with contactDetails:', contactDetails)
      setValues(contactDetails)
    }
  }, [contactDetails])

  const handleChange =
    (field: keyof MessageFormValues) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault() // Prevent default form submission behavior

    // Log what we're about to save
    console.log('Saving contact details:', values)

    // Save the contact details
    setContactDetails({ ...values }) // Pass a new object to ensure state update

    // Close the modal and trigger the completion callback
    closeModal()

    // Use a small delay to ensure state updates have been processed
    setTimeout(() => {
      if (onComplete) {
        onComplete()
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
