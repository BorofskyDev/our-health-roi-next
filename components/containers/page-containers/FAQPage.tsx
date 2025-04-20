// components/containers/page-containers/FAQPage.tsx

import { Page } from '@/components/layout/page/Page'
import React from 'react'
import FAQContainer from '../faq-container/FAQContainer'
import { PageHeader } from '@/components/common/headers'
import { FlexColSection } from '@/components/layout/sections'

export default function FAQPage() {
  return (
    <Page>
      <FlexColSection id='main'>
        <PageHeader className='mb-44 center'>
          Frequently Asked Questions
        </PageHeader>
      </FlexColSection>
        <FAQContainer />
    </Page>
  )
}
