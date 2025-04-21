// components/containers/page-containers/PrivacyPolicyPage.tsx

import { BodyText } from '@/components/common/body-typography'
import { ExternalLink } from '@/components/common/links'
import { Page } from '@/components/layout/page/Page'
import { FlexColSection } from '@/components/layout/sections'
import { ColToRowContainer } from '../layout-container/col-to-row-container/ColToRowContainer'
import { FlexColContainer } from '../layout-container/flex-col-container/FlexColContainer'
import { AnimatedIcon } from '@/components/icons'
import { IconContainer } from '../icon-container/IconContainer'
import { Metadata } from 'next'
import { Heading } from '@/components/common/headers/heading/Heading'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Our Health ROI privacy policy - Learn how we collect, use, and protect your personal information on our medical research impact platform.',
  openGraph: {
    title: 'Privacy Policy | Our Health ROI',
    description: 'How we collect, use, and protect your personal information.',
    images: [
      {
        url: '/api/og?title=Privacy%20Policy&subtitle=How We Protect Your Information',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - Our Health ROI',
      },
    ],
  },
  robots: {
    index: false, // Typically don't index privacy pages
    follow: true,
  },
}

const PrivacyPolicyPage = () => {
  return (
    <Page>
      <FlexColSection id='main'>
        <Heading as='h1' size='2xl' className='mb-44 center'>
          Privacy Policy
        </Heading>
        <Heading as='h2' size='md'>
          Our Approach to Your Privacy
        </Heading>
        <BodyText className='mb-24'>
          Our Health ROI is designed with privacy as a core value. We believe
          that civic participation shouldn&apos;t come at the cost of your
          personal data. That&apos;s why we&apos;ve built this platform to
          collect as little information as possible while still providing you
          with the tools you need to advocate for health research funding.
        </BodyText>
        <ColToRowContainer>
          <FlexColContainer>
            <Heading as='h3' size='lg' className='mb-30'>
              What We Don&apos;t Collect
            </Heading>
            <BodyText>
              We don&apos;t track what conditions you search for. Your health
              interests and concerns remain completely private. We don&apos;t
              monitor which representatives you contact or what you write to
              them. The letters and messages you generate are your own private
              communication with your elected officials, and we have no way of
              knowing their content while on our site or once you leave our
              site.
            </BodyText>
            <BodyText>
              We don&apos;t store search results or form letters between
              sessions. When you refresh the page or return later, you start
              with a clean slate. This is by design—it&apos;s proof that
              we&apos;re not retaining your data. We don&apos;t use tracking
              cookies, advertising pixels, or any other technologies designed to
              follow you across the web or build a profile of your interests or
              activities.
            </BodyText>
          </FlexColContainer>
          <IconContainer>
            <AnimatedIcon id='privacy' size='25rem' className='mb-24' />
          </IconContainer>
        </ColToRowContainer>
        <ColToRowContainer>
          <IconContainer>
            <AnimatedIcon id='cookies' size='25rem' className='mb-24' />
          </IconContainer>
          <FlexColContainer>
            <BodyText>
              We don&apos;t sell your data—because we don&apos;t collect it in
              the first place. There are no advertisers, data brokers, or third
              parties receiving information about your usage of this site. Your
              interaction with Our Health ROI remains between you, your device,
              and the minimal hosting infrastructure required to deliver the
              service.
            </BodyText>
            <BodyText className='mb-24'>
              We don&apos;t track how many people write letters or make calls
              through our platform. While this metric might be interesting from
              an impact perspective, we&apos;ve chosen to prioritize your
              privacy over our curiosity. The effectiveness of this tool will be
              measured by broader societal outcomes, not by monitoring
              individual user actions.
            </BodyText>
          </FlexColContainer>
        </ColToRowContainer>
        <Heading as='h3' size='lg' className='mb-30'>
          What We Do Collect
        </Heading>
        <ColToRowContainer>
          <FlexColContainer>
            <BodyText>
              We use Vercel for hosting, which provides us with basic, anonymous
              aggregated analytics. This includes the total number of visitors
              to the site and which pages are viewed most often. This
              information helps us understand overall usage patterns and ensure
              we have adequate server capacity. It does not identify individual
              users or their activities.
            </BodyText>
            <BodyText>
              We use temporary browser storage (like localStorage or
              sessionStorage) to maintain the state of your current session—for
              example, saving your search results temporarily so you can use
              them to generate a letter. This data never leaves your device and
              is automatically cleared when you close your browser or after a
              short period of inactivity.
            </BodyText>
          </FlexColContainer>
          <IconContainer>
            <AnimatedIcon id='lock' size='25rem' className='mb-24' />
          </IconContainer>
        </ColToRowContainer>
        <ColToRowContainer>
          <IconContainer>
            <AnimatedIcon id='spy' size='25rem' className='mb-24' />
          </IconContainer>
          <FlexColContainer>
            <BodyText>
              We monitor API usage to prevent abuse and ensure fair access for
              all users. This helps us maintain service quality and manage
              costs. These metrics are technical and infrastructural in
              nature—they don&apos;t track your searches or the content you
              generate, only the overall load on our systems.
            </BodyText>
            <BodyText className='mb-24'>
              We use essential cookies required for the site to function
              properly. These don&apos;t track you for advertising purposes or
              build a profile of your interests. They simply enable basic
              features like maintaining a secure connection while you use the
              site. Without these, core functionality would break.
            </BodyText>
          </FlexColContainer>
        </ColToRowContainer>

        <Heading as='h3' size='lg'>
          Your Control & Our Commitment
        </Heading>
        <BodyText>
          <strong>No account required.</strong> You can use Our Health ROI
          without creating an account or providing any personal information.
          This is a deliberate choice to maintain your privacy and reduce
          barriers to civic participation.
        </BodyText>
        <BodyText className='mb-24'>
          <strong>Open source transparency.</strong> Our code is publicly
          available on GitHub, allowing anyone to verify our privacy practices.
          We believe transparency is the foundation of trust, especially when it
          comes to digital tools for civic engagement.
        </BodyText>

        <BodyText>
          Our commitment to privacy reflects our broader values around civic
          participation and health advocacy. We believe you shouldn&apos;t have
          to sacrifice your personal data to make your voice heard on issues
          that matter. If you have questions about our privacy practices or
          suggestions for improvement, please reach out.
        </BodyText>
        <ExternalLink
          className='mb-44'
          href='https://github.com/BorofskyDev/our-health-roi-next'
        >
          Review Our Code on GitHub
        </ExternalLink>

        <Heading as='h2' size='xl'>
          The Legal Explanation
        </Heading>
        <BodyText>
          <strong>Information Collection:</strong> Our Health ROI uses Vercel
          Analytics which collects anonymous, aggregated data about site traffic
          and page views. This data does not personally identify users and is
          used solely for the purpose of understanding site usage patterns and
          managing server resources.
        </BodyText>
        <BodyText>
          <strong>Cookies and Local Storage:</strong> This website uses
          essential cookies necessary for the proper functioning of the website.
          We use browser local storage to temporarily store search results and
          form content during your current session. This information is not
          transmitted to our servers and is automatically deleted when you close
          your browser or when the session expires.
        </BodyText>
        <BodyText>
          <strong>Third-Party Services:</strong> We use Vercel for hosting and
          analytics. Their privacy policies apply to their collection and
          processing of anonymous usage data. We do not use any third-party
          analytics, advertising, or tracking services beyond what is provided
          by our hosting platform.
        </BodyText>
        <BodyText>
          <strong>Data Sharing:</strong> We do not collect, and therefore do not
          share, sell, or transfer any personally identifiable information to
          third parties. The anonymous usage statistics collected by Vercel are
          not shared with external entities except as required by law.
        </BodyText>
        <BodyText>
          <strong>Data Security:</strong> While we do not collect personal data,
          we implement standard security measures to protect the integrity of
          our website and the temporary data stored in your browser during your
          session.
        </BodyText>
        <BodyText>
          <strong>User Rights:</strong> As we do not collect personally
          identifiable information, there is no personal data for users to
          access, correct, or delete. Your browser may allow you to clear local
          storage and cookies at any time.
        </BodyText>
        <BodyText>
          <strong>Policy Changes:</strong> Any changes to this privacy policy
          will be posted on this page. We encourage users to periodically review
          this page for any changes.
        </BodyText>
        <BodyText className='mb-44'>
          <strong>Contact Information:</strong> If you have any questions about
          this privacy policy or our practices, please contact us via GitHub or
          the contact methods provided on this website.
        </BodyText>
        <BodyText className='mb-24'>
          This policy was last updated on April 16, 2025.
        </BodyText>
      </FlexColSection>
    </Page>
  )
}

export default PrivacyPolicyPage
