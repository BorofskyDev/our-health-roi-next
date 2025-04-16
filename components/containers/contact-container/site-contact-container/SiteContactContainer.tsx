// components/containers/contact-container/ContactContainer.tsx
'use client'

import React from 'react'
import SiteContactForm from '@/components/layout/forms/site-contact-form/SiteContactForm'

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
    <section className='max-w-2xl mx-auto px-4'>
      <h2 className='text-3xl font-semibold mb-4 text-center'>{title}</h2>
      {findLink && (
        <p className='mb-8 text-center'>
          <a
            href={findLink}
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:text-primary'
          >
            More info here
          </a>
        </p>
      )}
      <SiteContactForm />
    </section>
  )
}
