// components/containers/page-containers/ContactPage.tsx

import { Page } from '@/components/layout/page/Page'
import React from 'react'
import { SiteContactContainer } from '../site-contact-container/SiteContactContainer'
import { FlexColContainer } from '../layout-container/flex-col-container/FlexColContainer'
import { Metadata } from 'next'
import { Heading } from '@/components/common/headers/Heading'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Our Health ROI team. Find contact information, submit inquiries, and learn how to connect with us about medical research funding.',
  openGraph: {
    title: 'Contact | Our Health ROI',
    description: 'Connect with us about medical research funding and impact.',
    images: [
      {
        url: '/api/og?title=Contact%20Us&subtitle=Get in Touch with Our Health ROI Team',
        width: 1200,
        height: 630,
        alt: 'Contact Our Health ROI',
      },
    ],
  },
}
export default function ContactPage() {
  return (
    <Page>
      <FlexColContainer id='main'>
        <Heading as='h1' size='2xl' className='mb-44 center'>
          Contact Our Health ROI
        </Heading>
      </FlexColContainer>
      <SiteContactContainer
        title='Please select the category that your contact falls into. I cannot guarantee I will respond to all emails, but will do my best.'
        findLink='/faq'
      />
    </Page>
  )
}
