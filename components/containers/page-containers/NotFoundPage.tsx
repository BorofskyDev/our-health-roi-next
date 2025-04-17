// components/containers/page-containers/NotFoundPage.tsx

import { BodyText } from '@/components/common/body-typography'
import {
  PageHeader,
  SectionHeading,
  SectionTitle,
} from '@/components/common/headers'
import { NavLink } from '@/components/common/links/nav-link/NavLink'
import { Page } from '@/components/layout/page/Page'
import { FlexColSection } from '@/components/layout/sections'
import { ColToRowContainer } from '../layout-container/col-to-row-container/ColToRowContainer'
import { FlexColContainer } from '../layout-container/flex-col-container/FlexColContainer'
import { AnimatedIcon } from '@/components/icons'
import { IconContainer } from '../icon-container/IconContainer'

const NotFoundPage = () => {
  return (
    <Page>
      <FlexColSection id='main'>
        <PageHeader className='mb-44 center'>Page Not Found (404)</PageHeader>
        <SectionTitle>What&apos;s a 404 Error?</SectionTitle>
        <BodyText className='mb-24'>
          You&apos;ve encountered what&apos;s known as a &quot;404 error&quot; —
          one of the most common messages on the internet. This code is part of
          the HTTP protocol, the language that web browsers and servers use to
          communicate. A 404 simply means the page you&apos;re looking for
          couldn&apos;t be found on our server. Think of it like going to a
          library with a call number, only to find that particular shelf is
          empty.
        </BodyText>
        <div className='center mb-44'>
          <NavLink href='/' className='mb-24'>
            Return to Homepage
          </NavLink>
        </div>
        <ColToRowContainer>
          <FlexColContainer>
            <SectionHeading className='mb-30'>
              Why Am I Seeing This?
            </SectionHeading>
            <BodyText>
              There are several common reasons you might have landed here. The
              link you followed might contain a typo or might have been changed
              since it was created. Perhaps the page existed once but has been
              moved or removed during a site update. Or maybe you typed a URL
              directly and made a small error — even a single incorrect
              character can lead to a 404 error.
            </BodyText>
            <BodyText>
              While frustrating, 404 errors are a normal part of how the web
              works. They&apos;re actually a good thing — instead of taking you
              to the wrong content or creating security risks by guessing what
              you wanted, the server honestly tells you &quot;I don&apos;t have
              what you&apos;re looking for.&quot; This transparent communication
              helps keep the internet functioning reliably, even if it sometimes
              leads to moments of confusion.
            </BodyText>
          </FlexColContainer>
          <IconContainer>
            <AnimatedIcon id='robot' size='25rem' className='mb-24' />
          </IconContainer>
        </ColToRowContainer>
        <ColToRowContainer className='mb-44'>
          <IconContainer>
            <AnimatedIcon id='code' size='25rem' className='mb-24' />
          </IconContainer>
          <FlexColContainer>
            <BodyText>
              The &quot;404&quot; itself comes from the early days of the
              internet. When you request a webpage, the server responds with a
              status code. Successful requests get a 200-level code (like the
              common &quot;200 OK&quot;). Redirects use 300-level codes. Client
              errors like mistyped URLs use 400-level codes, with 404
              specifically meaning &quot;Not Found.&quot; Server problems use
              500-level codes. We&apos;ve designed our system to gracefully
              handle these 500-level errors in our API calls, which is why
              sometimes if NIH data comes back incomplete, you&apos;ll see an
              explanation rather than just an error number.
            </BodyText>
            <BodyText className='mb-24'>
              When our system encounters data gaps from the NIH database, we
              don&apos;t just show an error—we pass that information along in
              the letters to your representatives, noting that &quot;publicly
              available information was unavailable.&quot; While the reason
              could be innocent, such gaps often point to maintenance issues
              and, ultimately, funding shortfalls. This way, even error handling
              becomes an opportunity for civic engagement—turning technical
              problems into meaningful policy conversations about research
              infrastructure.
            </BodyText>
          </FlexColContainer>
        </ColToRowContainer>
        <div className='center mb-44'>
          <NavLink href='/' className='mb-24'>
            Return to Homepage
          </NavLink>
        </div>
      </FlexColSection>
    </Page>
  )
}

export default NotFoundPage
