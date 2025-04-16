// components/containers/contact-container/ContactContainer.tsx

import React from 'react'
import SiteContactForm from '@/components/layout/forms/site-contact-form/SiteContactForm'
import { FlexColSection } from '@/components/layout/sections'
import { ParagraphTitle } from '@/components/common/headers'
import { NavLink } from '@/components/common/links/'

export interface SiteContactContainerProps {
  /** The title you want shown above the form */
  title: string
  /** An optional “find more info” link under the title */
  findLink?: string
}

export const SiteContactContainer: React.FC<SiteContactContainerProps> = ({
  title,
  findLink,
}) => {
  return (
    <FlexColSection id='contact-container'>
      <ParagraphTitle className='center body-width mb-44'>{title}</ParagraphTitle>
      {findLink && (
        <NavLink href={findLink} className='mb-44'>
          See FAQs
        </NavLink>
      )}

      <SiteContactForm />
    </FlexColSection>
  )
}
