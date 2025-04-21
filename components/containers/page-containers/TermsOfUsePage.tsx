// components/containers/page-containers/TermsOfUsePage.tsx

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
  title: 'Terms of Use',
  description:
    'Terms and conditions for using Our Health ROI platform. Understand your rights and responsibilities when accessing our medical research data.',
  openGraph: {
    title: 'Terms of Use | Our Health ROI',
    description: 'Terms and conditions for using Our Health ROI platform.',
    images: [
      {
        url: '/api/og?title=Terms%20of%20Use&subtitle=Understanding Your Rights and Responsibilities',
        width: 1200,
        height: 630,
        alt: 'Terms of Use - Our Health ROI',
      },
    ],
  },
  robots: {
    index: false, // Typically don't index terms pages
    follow: true,
  },
}

const TermsOfUsePage = () => {
  return (
    <Page>
      <FlexColSection id='main'>
        <Heading as='h1' size='2xl' className='mb-44 center'>
          Terms of Use
        </Heading>
        <Heading as='h2' size='md'>
          Our Digital Agreement
        </Heading>
        <BodyText className='mb-24'>
          Welcome to Our Health ROI. By using this website, you&apos;re engaging
          with a citizen-built tool designed to connect people with information
          about NIH funding and facilitate communication with elected
          representatives. We&apos;ve created these terms to be straightforward
          and fair, emphasizing both your rights as a user and the boundaries
          necessary to keep this service sustainable and accessible for
          everyone.
        </BodyText>
        <ColToRowContainer>
          <FlexColContainer>
            <Heading as='h3' size='lg' className='mb-30'>
              How You Can Use This Site
            </Heading>
            <BodyText>
              You&apos;re welcome to search for health conditions, view NIH
              funding data, and generate letters to your representatives as
              often as you need. The information is provided for educational and
              civic engagement purposes. We encourage you to use the data in
              conversations with policymakers, share insights with others, and
              integrate what you learn into your advocacy efforts. This is,
              after all, why we built this tool.
            </BodyText>
            <BodyText>
              While we don&apos;t require an account or login, we do ask that
              you use the site in good faith. The API that powers our searches
              has rate limits, and we want to ensure everyone has equal access
              to this resource. Please avoid automated scraping, excessive
              requests, or any activities that could overwhelm our systems and
              prevent others from accessing the service.
            </BodyText>
          </FlexColContainer>
          <IconContainer>
            <AnimatedIcon id='search' size='25rem' className='mb-24' />
          </IconContainer>
        </ColToRowContainer>
        <ColToRowContainer>
          <IconContainer>
            <AnimatedIcon id='terms' size='25rem' className='mb-24' />
          </IconContainer>
          <FlexColContainer>
            <BodyText>
              The letter templates we provide are starting points, not legal
              documents. We encourage you to personalize them with your own
              experiences and perspectives. While our goal is to facilitate
              communication with elected officials, how you use these templates
              is ultimately up to you. We simply ask that you maintain a
              respectful tone when representing yourself as a constituent.
            </BodyText>
            <BodyText className='mb-24'>
              The code for this website is open source under an MIT license,
              available on GitHub. You&apos;re welcome to fork the repository,
              suggest improvements, or adapt it for other civic engagement
              purposes. We believe in transparency and collaboration—if you see
              ways to make this tool better, we&apos;re open to contributions
              that align with our mission of connecting citizens with data about
              public health research funding.
            </BodyText>
          </FlexColContainer>
        </ColToRowContainer>
        <Heading as='h3' size='lg' className='mb-30'>
          Our Responsibilities
        </Heading>
        <ColToRowContainer>
          <FlexColContainer>
            <BodyText>
              We strive to provide accurate information pulled directly from the
              NIH RePORTER API. However, we can&apos;t guarantee that the data
              is always complete or up-to-date, as we depend on external data
              sources. We present the data as-is, without warranties about its
              accuracy, completeness, or reliability. If you spot discrepancies
              in the data, we appreciate you letting us know so we can
              investigate.
            </BodyText>
            <BodyText>
              We aim for 24/7 availability, but as a small, citizen-led project,
              we may experience occasional downtime for maintenance or due to
              technical issues. Our service uses a secure connection (HTTPS),
              but no online transmission is 100% secure. Given that we collect
              minimal user data, the privacy risks are correspondingly low, but
              we still implement reasonable security measures to protect the
              integrity of the site.
            </BodyText>
          </FlexColContainer>
          <IconContainer>
            <AnimatedIcon id='api' size='25rem' className='mb-24' />
          </IconContainer>
        </ColToRowContainer>
        <ColToRowContainer>
          <IconContainer>
            <AnimatedIcon id='volunteer' size='25rem' className='mb-24' />
          </IconContainer>
          <FlexColContainer>
            <BodyText>
              We reserve the right to modify this website, including its
              features, design, and availability, without prior notice. We may
              update these terms periodically, and your continued use of the
              site after changes indicates your acceptance of the updated terms.
              While we hope to maintain this service indefinitely, we make no
              guarantees about its long-term availability.
            </BodyText>
            <BodyText className='mb-24'>
              This project operates on a voluntary basis with minimal resources.
              We do not offer refunds, as we do not charge for access. Any
              voluntary donations to support hosting costs are appreciated but
              non-refundable. While we&apos;re passionate about this project,
              it&apos;s important to understand that it comes with no warranty
              and limited support capacity.
            </BodyText>
          </FlexColContainer>
        </ColToRowContainer>

        <Heading as='h3' size='lg'>
          Working Together
        </Heading>
        <BodyText>
          <strong>Respect the purpose.</strong> This tool is designed to promote
          informed civic engagement around public health research funding. While
          we can&apos;t control how you use the information you gather here, we
          ask that you maintain the spirit of constructive, fact-based advocacy
          that inspired this project.
        </BodyText>
        <BodyText className='mb-24'>
          <strong>Help us improve.</strong> If you encounter bugs, issues with
          data accuracy, or have ideas for enhancing the site, please let us
          know through GitHub or the contact methods provided. This is a
          community resource, and your feedback helps make it better for
          everyone.
        </BodyText>

        <BodyText>
          We created Our Health ROI to make public health funding data more
          accessible and actionable for everyday citizens. These terms are
          designed to support that mission while protecting the sustainability
          of the project. Thank you for being part of this effort to strengthen
          the connection between public science and the people it serves.
        </BodyText>
        <ExternalLink
          className='mb-44'
          href='https://github.com/BorofskyDev/our-health-roi-next'
        >
          Contribute on GitHub
        </ExternalLink>

        <Heading as='h2' size='lg'>
          The Legal Explanation
        </Heading>
        <BodyText>
          <strong>Acceptance of Terms:</strong> By accessing or using Our Health
          ROI, you agree to be bound by these Terms of Use. If you do not agree
          to these terms, please do not use this website.
        </BodyText>
        <BodyText>
          <strong>Use License:</strong> Permission is granted to temporarily
          access the materials on Our Health ROI for personal, non-commercial
          transitory viewing and civic engagement purposes only. This is the
          grant of a license, not a transfer of title. Under this license, you
          may not: modify or copy the materials; use the materials for any
          commercial purpose; attempt to decompile or reverse engineer any
          software contained on the website; remove any copyright or other
          proprietary notations from the materials; or transfer the materials to
          another person or &quot;mirror&quot; the materials on any other
          server.
        </BodyText>
        <BodyText>
          <strong>Disclaimer:</strong> The materials on Our Health ROI are
          provided on an &apos;as is&apos; basis. We make no warranties,
          expressed or implied, and hereby disclaim and negate all other
          warranties including, without limitation, implied warranties or
          conditions of merchantability, fitness for a particular purpose, or
          non-infringement of intellectual property or other violation of
          rights. Further, we do not warrant or make any representations
          concerning the accuracy, likely results, or reliability of the use of
          the materials on our website or otherwise relating to such materials
          or on any sites linked to this site.
        </BodyText>
        <BodyText>
          <strong>Limitations:</strong> In no event shall Our Health ROI or its
          suppliers be liable for any damages (including, without limitation,
          damages for loss of data or profit, or due to business interruption)
          arising out of the use or inability to use the materials on Our Health
          ROI, even if we or an authorized representative has been notified
          orally or in writing of the possibility of such damage.
        </BodyText>
        <BodyText>
          <strong>Accuracy of Materials:</strong> The materials appearing on Our
          Health ROI could include technical, typographical, or photographic
          errors. We do not warrant that any of the materials on its website are
          accurate, complete, or current. We may make changes to the materials
          contained on its website at any time without notice.
        </BodyText>
        <BodyText>
          <strong>Links:</strong> Our Health ROI has not reviewed all of the
          sites linked to its website and is not responsible for the contents of
          any such linked site. The inclusion of any link does not imply
          endorsement by Our Health ROI. Use of any such linked website is at
          the user&apos;s own risk.
        </BodyText>
        <BodyText>
          <strong>Modifications:</strong> We may revise these terms of service
          for our website at any time without notice. By using this website, you
          are agreeing to be bound by the then current version of these terms of
          service.
        </BodyText>
        <BodyText>
          <strong>Governing Law:</strong> These terms and conditions are
          governed by and construed in accordance with the laws of the United
          States and you irrevocably submit to the exclusive jurisdiction of the
          courts in that location.
        </BodyText>
        <BodyText className='mb-44'>
          <strong>Termination:</strong> We may terminate or suspend access to
          our service immediately, without prior notice or liability, for any
          reason whatsoever, including without limitation if you breach the
          Terms.
        </BodyText>
        <BodyText className='mb-24'>
          This policy was last updated on April 16, 2025.
        </BodyText>
      </FlexColSection>
    </Page>
  )
}

export default TermsOfUsePage
