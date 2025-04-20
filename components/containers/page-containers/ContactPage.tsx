// components/containers/page-containers/ContactPage.tsx

import { Page } from '@/components/layout/page/Page'
import React from 'react'
import { PageHeader } from '@/components/common/headers'
import { SiteContactContainer } from '../site-contact-container/SiteContactContainer'
import { FlexColContainer } from '../layout-container/flex-col-container/FlexColContainer'

export default function ContactPage() {
  return (
    <Page>
      <FlexColContainer id='main'>

      <PageHeader className='mb-44 center'>Contact Our Health ROI</PageHeader>
      </FlexColContainer>
      <SiteContactContainer
        title='Please select the category that your contact falls into. I cannot guarantee I will respond to all emails, but will do my best.'
        findLink='/faq'
      />
    </Page>
  )
}
