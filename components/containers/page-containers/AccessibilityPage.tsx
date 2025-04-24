// components/containers/page-containers/AccessibilityPage.tsx

import { BodyText } from '@/components/common/body-typography'
import { ExternalLink, NavLink } from '@/components/common/links'
import { Page } from '@/components/layout/page/Page'
import { FlexColSection } from '@/components/layout/sections'
import { ColToRowContainer } from '../layout-container/col-to-row-container/ColToRowContainer'
import { FlexColContainer } from '../layout-container/flex-col-container/FlexColContainer'
import { AnimatedIcon } from '@/components/icons'
import { IconContainer } from '../icon-container/IconContainer'
import { Metadata } from 'next'
import { Heading } from '@/components/common/headers/Heading'

export const metadata: Metadata = {
  title: 'Accessibility',
  description:
    'Our Health ROI accessibility statement - Learn about our commitment to making medical research data accessible to all users.',
  openGraph: {
    title: 'Accessibility | Our Health ROI',
    description:
      'Our commitment to making medical research data accessible to all.',
    images: [
      {
        url: '/api/og?title=Accessibility&subtitle=Committed to Inclusive Access for All Users',
        width: 1200,
        height: 630,
        alt: 'Accessibility - Our Health ROI',
      },
    ],
  },
  robots: {
    index: false, // Typically don't index accessibility pages
    follow: true,
  },
}

const AccessibilityPage = () => {
  return (
    <Page>
      <FlexColSection id='main'>
        <Heading as='h1' size='2xl' className='mb-44 center'>
          Accessibility Commitment
        </Heading>
        <Heading as='h2' size='md'>
          Our Accessibility Philosophy
        </Heading>
        <BodyText className='mb-24'>
          Our Health ROI is built with the firm belief that accessibility
          isn&apos;t an add-on feature—it&apos;s a fundamental requirement. We
          believe a website isn&apos;t truly functional unless it&apos;s fully
          accessible to everyone, regardless of ability or disability. Our goal
          is to ensure that every visitor can access the vital health funding
          information we provide and use it to participate in our democratic
          process.
        </BodyText>
        <ColToRowContainer>
          <FlexColContainer>
            <Heading as='h3' size='lg' className='mb-30'>
              Our Accessibility Standards
            </Heading>
            <BodyText>
              We strive to meet WCAG 2.1 AA standards across our entire
              platform. This means implementing proper semantic HTML, ensuring
              keyboard navigability, maintaining sufficient color contrast,
              providing meaningful alt text for images, and creating a
              responsive design that works across devices and assistive
              technologies. We&apos;ve also included features like the
              &quot;Skip to Content&quot; link to improve navigation for screen
              reader users.
            </BodyText>
            <BodyText>
              Our commitment extends beyond technical compliance to embrace the
              spirit of inclusive design. We&apos;ve taken care to write in
              plain language, maintain consistent navigation patterns, and
              provide clear feedback for all interactive elements. Every piece
              of data visualization is designed with accessibility in mind,
              offering alternative ways to access the information beyond visual
              representations alone.
            </BodyText>
          </FlexColContainer>
          <IconContainer>
            <AnimatedIcon id='accessibility' size='25rem' className='mb-24' />
          </IconContainer>
        </ColToRowContainer>
        <ColToRowContainer>
          <IconContainer>
            <AnimatedIcon id='assist' size='25rem' className='mb-24' />
          </IconContainer>
          <FlexColContainer>
            <BodyText>
              We recognize that accessibility is especially crucial for a civic
              engagement tool like ours. Health conditions and disabilities
              affect millions of Americans who deserve equal access to advocate
              for research funding. By making our platform accessible, we ensure
              that the very people who may benefit most from NIH funding can
              effectively make their voices heard in the democratic process.
            </BodyText>
            <BodyText className='mb-24'>
              Our commitment to accessibility mirrors our broader mission of
              inclusivity and civic participation. Just as we believe public
              health research should benefit everyone, we believe public
              advocacy tools should be usable by everyone. This isn&apos;t just
              about meeting legal requirements—it&apos;s about living up to our
              values and respecting the dignity and rights of all visitors to
              our site.
            </BodyText>
          </FlexColContainer>
        </ColToRowContainer>
        <Heading as='h3' size='lg' className='mb-30'>
          Continuous Improvement
        </Heading>
        <ColToRowContainer>
          <FlexColContainer>
            <BodyText>
              We acknowledge that achieving perfect accessibility is an ongoing
              journey, not a destination. Despite our best efforts, there may be
              gaps or oversights in our implementation. These aren&apos;t
              intentional but stem from our own limitations and the evolving
              nature of web technologies. We view accessibility as a process of
              continuous improvement, and we&apos;re committed to learning and
              adapting.
            </BodyText>
            <BodyText>
              That&apos;s why we welcome your feedback. If you encounter any
              barriers while using Our Health ROI, please let us know. Your
              insights help us identify issues we might have missed and make the
              site better for everyone. We promise to take your feedback
              seriously and address issues promptly. After all, this is a
              citizen-built tool intended to serve all citizens—and your input
              is essential to fulfilling that mission.
            </BodyText>
          </FlexColContainer>
          <IconContainer>
            <AnimatedIcon id='ticket' size='25rem' className='mb-24' />
          </IconContainer>
        </ColToRowContainer>
        <ColToRowContainer>
          <IconContainer>
            <AnimatedIcon id='thanks' size='25rem' className='mb-24' />
          </IconContainer>
          <FlexColContainer>
            <BodyText>
              We test our site regularly with various assistive technologies,
              including screen readers and keyboard-only navigation. However, we
              recognize that real-world usage often reveals issues that testing
              can miss. If you use assistive technology and have suggestions for
              how we can better accommodate your needs, your expertise is
              invaluable to us. Together, we can make this platform truly
              inclusive.
            </BodyText>
            <BodyText className='mb-24'>
              Accessibility isn&apos;t just a technical requirement—it&apos;s a
              reflection of our values. We believe in digital equity and in
              removing barriers to civic participation. By making our site
              accessible, we&apos;re working to ensure that everyone has an
              equal opportunity to advocate for the health research funding that
              affects us all. Because a democracy works best when everyone can
              participate fully.
            </BodyText>
            <NavLink className='mb-44' href='/contact'>
              Contact us here
            </NavLink>
          </FlexColContainer>
        </ColToRowContainer>

        <Heading as='h3' size='lg'>
          Report Accessibility Issues
        </Heading>
        <BodyText>
          <strong>Found an accessibility barrier?</strong> We want to know about
          it. Please contact us with details about the issue you encountered,
          including the page where it occurred, the device and assistive
          technology you were using, and a description of the problem. This
          helps us address it quickly and effectively.
        </BodyText>
        <BodyText className='mb-24'>
          <strong>Have suggestions for improvement?</strong> We welcome your
          ideas on how we can make Our Health ROI more accessible and
          user-friendly. Your perspective helps us build a better tool for
          everyone. Together, we can ensure that all voices are heard in
          discussions about public health funding.
        </BodyText>

        <BodyText>
          Our accessibility efforts are ongoing. We regularly review our site
          against the latest standards and best practices to ensure we&apos;re
          providing the best possible experience for all users. If you&apos;d
          like to contribute to our accessibility improvements, you can also
          check out our code on GitHub and submit pull requests.
        </BodyText>
        <ExternalLink
          className='mb-24'
          href='https://github.com/BorofskyDev/our-health-roi-next'
        >
          Contribute to Our Accessibility Efforts on GitHub
        </ExternalLink>
      </FlexColSection>
    </Page>
  )
}

export default AccessibilityPage
