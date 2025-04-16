// components/containers/page-containers/ContactPage.tsx

import { Page } from '@/components/layout/page/Page'
import React from 'react'
import { PageHeader } from '@/components/common/headers'
import { SiteContactContainer } from '../contact-container/site-contact-container/SiteContactContainer'

export default function ContactPage() {
  return (
    <Page>
      <PageHeader className='mb-44 center'>
        Frequently Asked Questions
      </PageHeader>
      <SiteContactContainer
        title='Contact Us'
        findLink='https://www.example.com/contact'
      />
    </Page>
  )
}
