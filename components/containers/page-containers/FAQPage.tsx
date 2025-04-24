// components/containers/page-containers/FAQPage.tsx

import { Page } from '@/components/layout/page/Page'
import React from 'react'
import FAQContainer from '../faq-container/FAQContainer'
import { FlexColSection } from '@/components/layout/sections'
import { Metadata } from 'next'
import { Heading } from '@/components/common/headers/Heading'

export const metadata: Metadata = {
  title: 'Tip',
  description:
    'Support medical research advocacy by donating to Our Health ROI or getting involved in our mission to highlight the impact of NIH funding.',
  openGraph: {
    title: 'Tip | Our Health ROI',
    description:
      'Support medical research advocacy through donations or volunteer opportunities.',
    images: [
      {
        url: '/api/og?title=Support%20Our%20Mission&subtitle=Donate or Get Involved in Medical Research Advocacy',
        width: 1200,
        height: 630,
        alt: 'Support Our Health ROI',
      },
    ],
  },
}

export default function FAQPage() {
  return (
    <Page>
      <FlexColSection id='main'>
        <Heading as='h1' size='2xl' className='mb-44 center'>
          Frequently Asked Questions
        </Heading>
      </FlexColSection>
        <FAQContainer />
    </Page>
  )
}
