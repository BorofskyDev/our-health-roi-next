// components/containers/contact-container/ContactContainer.tsx

import React from 'react'
import SiteContactForm from '@/components/layout/forms/site-contact-form/SiteContactForm'
import { FlexColSection } from '@/components/layout/sections'
import { NavLink } from '@/components/common/links/'
import { Heading } from '@/components/common/headers/Heading'

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
      <Heading as='h2' size='sm' className='center body-width mb-44'>
        {title}
      </Heading>
      {findLink && (
        <NavLink href={findLink} className='mb-44'>
          See FAQs
        </NavLink>
      )}

      <SiteContactForm />
    </FlexColSection>
  )
}
