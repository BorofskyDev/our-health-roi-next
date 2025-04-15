
// components/modals/contact-congress/messages/MessageBody.tsx
'use client'
import { CTAButton } from '@/components/common/buttons'
import { TextInput } from '@/components/common/inputs/'
import { TextAreaWithCount } from '@/components/common/inputs/'
import { BodyText } from '@/components/common/body-typography'
import { useMessageForm } from '@/lib/hooks/useMessageForm'
import { ResearchCounts } from '@/types/'

export type ContactType = 'email' | 'call'
export type RecipientType = 'rep' | 'senators'

type Props = {
  searchTerm: string
  research: ResearchCounts
  contactType: ContactType
  recipientType: RecipientType
  submitButtonText?: string
}

export const MessageBody = ({
  searchTerm,
  research,
  contactType,
  recipientType,
  submitButtonText = 'Preview Message',
}: Props) => {
  const { values, handleChange, handleSubmit, preview, resetPreview } =
    useMessageForm(searchTerm, research, contactType, recipientType)

  // If we have a preview, show it with edit and copy buttons
  if (preview) {
    return (
      <>
        <BodyText className='preview-content'>{preview}</BodyText>
        <div className='flex gap-16 mt-24'>
          <CTAButton type='button' onClick={resetPreview}>
            Edit
          </CTAButton>
          <CTAButton
            type='button'
            onClick={() => navigator.clipboard.writeText(preview)}
          >
            Copy Text
          </CTAButton>
        </div>
      </>
    )
  }

  // Otherwise show the form
  const isRep = recipientType === 'rep'
  const isSenators = recipientType === 'senators'
  const isEmail = contactType === 'email'

  return (
    <form onSubmit={handleSubmit} className='modal-form'>
      {isRep && (
        <TextInput
          id='rep-name'
          label="Representative's Name"
          placeholder="Enter your representative's name"
          required={isEmail} // Only required for email, not for call scripts
          value={values.repName}
          onChange={handleChange('repName')}
        />
      )}

      {isSenators && (
        <>
          <TextInput
            id='senator-name-1'
            label="First Senator's Name"
            placeholder="Enter your first senator's name"
            required={isEmail} // Only required for email, not for call scripts
            value={values.senatorName1}
            onChange={handleChange('senatorName1')}
          />
          <TextInput
            id='senator-name-2'
            label="Second Senator's Name"
            placeholder="Enter your second senator's name"
            required={isEmail} // Only required for email, not for call scripts
            value={values.senatorName2}
            onChange={handleChange('senatorName2')}
          />
        </>
      )}

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

      <CTAButton type='submit'>{submitButtonText}</CTAButton>
    </form>
  )
}
