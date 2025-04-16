// components/containers/contact-container/ContactContainer.tsx
'use client'

import React from 'react'
import SiteContactForm from '@/components/layout/forms/site-contact-form/SiteContactForm'
import { FlexColSection } from '@/components/layout/sections'
import Link from 'next/link'
import { ParagraphTitle } from '@/components/common/headers'

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
    <FlexColSection id='contact-container' >
      <ParagraphTitle className='center body-width'>{title}</ParagraphTitle>
      {findLink && (
        <p className='mb-8 text-center'>
          <Link
            href={findLink}
          >
            More info here
          </Link>
        </p>
      )}
      <SiteContactForm />
    </FlexColSection>
  )
}
