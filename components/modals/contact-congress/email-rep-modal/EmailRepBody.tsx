// components/modals/contact-congress/email-rep-modal/EmailRepBody.tsx

'use client'

import { CTAButton } from '@/components/common/buttons'
import { TextInput } from '@/components/common/inputs/'
import { TextAreaWithCount } from '@/components/common/inputs/'
import { BodyText } from '@/components/common/body-typography'
import { useEmailRepForm } from '@/lib/hooks/'
import { ResearchCounts } from '@/lib/utils/emailTemplates'

type Props = {
  searchTerm: string
  research: ResearchCounts
}

export const EmailRepBody = ({ searchTerm, research }: Props) => {
  const { values, handleChange, handleSubmit, preview, resetPreview } =
    useEmailRepForm(searchTerm, research)

  if (preview) {
    return (
      <>
        <BodyText className='preview-content'>
          {preview}
        </BodyText>
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

  return (
    <form onSubmit={handleSubmit} className='modal-form'>
      <TextInput
        id='rep-name'
        label="Representative's Name"
        placeholder='Enter your representative’s name'
        required
        value={values.repName}
        onChange={handleChange('repName')}
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

      <CTAButton type='submit'>Preview Email</CTAButton>
    </form>
  )
}
