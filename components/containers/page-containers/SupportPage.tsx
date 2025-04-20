import { BodyText } from '@/components/common/body-typography'
import { PageHeader, SectionHeading } from '@/components/common/headers'
import { Page } from '@/components/layout/page/Page'
import { ColToRowContainer } from '../layout-container/col-to-row-container/ColToRowContainer'
import { AnimatedIcon } from '@/components/icons'
import { FlexColSection } from '@/components/layout/sections'
import { ExternalLink, NavLink } from '@/components/common/links'
import { IconContainer } from '../icon-container/IconContainer'

export default function SupportPage() {
  return (
    <Page>
      <PageHeader className='center mb-24'>How you can support me</PageHeader>
      <BodyText className='center mb-60'>
        You&apos;ve seen how NIH funding saves lives - now let&apos;s make sure
        it endures. Fuel this fight with your support - whether that&apos;s a
        tip, your expertise, or simply sharing our mission - to keep Our Health
        ROI running and send a clear, united mesasge to Congress: science
        matters.{' '}
      </BodyText>
      <ColToRowContainer className='mb-24'>
        <FlexColSection id='main'>
          <SectionHeading className='mb-24'>
            Support Our Health ROI with a tip
          </SectionHeading>
          <BodyText className=''>
            Site costs, for now, are relatively cheap. But this still takes time
            and at the moment I am the only person working on this project.
            Every contribution - no matter the size - helps cover hosting costs,
            traffic, and ongoing development. It is greatly appreciated.
          </BodyText>
          <ColToRowContainer>
            <ExternalLink
              href='https://paypal.me/ourHealthROI?country.x=US&locale.x=en_US'
              className='mb-44'
            >
              Tip via PayPal
            </ExternalLink>
            <ExternalLink href='https://venmo.com/jbskydev'>
              Tip via Venmo
            </ExternalLink>
          </ColToRowContainer>
        </FlexColSection>
        <IconContainer>
          <AnimatedIcon id='tip' size='25rem' />
        </IconContainer>
      </ColToRowContainer>
      <ColToRowContainer className='mb-24'>
        <IconContainer>
          <AnimatedIcon id='expert' size='25rem' />
        </IconContainer>
        <FlexColSection id='expert'>
          <SectionHeading className='mb-24'>
            Support Our Health ROI with your expertise
          </SectionHeading>
          <BodyText className=''>
            If you are a developer, designer, researcher, illustrator, or have
            experience in fundraising, NGOs, or anything related to this
            project, your skills accelerate our impact.
          </BodyText>
          <NavLink href='/contact' className=' mb-44'>
            Contact Me
          </NavLink>
        </FlexColSection>
      </ColToRowContainer>
      <ColToRowContainer className='mb-24'>
        <FlexColSection id='share'>
          <SectionHeading className='mb-24'>Amplify Your Voice</SectionHeading>
          <BodyText>
            Spread the word - the more people who know about this fight, the
            louder our collective call to Congress becomes. Share this site on
            Twitter, Bluesky, Facebook, or among your social groups. Get people
            involved! It&apos;s not just about writing to Congress, it&apos;s
            about awakening the public to action.
          </BodyText>
        </FlexColSection>
        <IconContainer>
          <AnimatedIcon id='listen' size='25rem' />
        </IconContainer>
      </ColToRowContainer>
      <ColToRowContainer className='mb-24'>
        <IconContainer>
          <AnimatedIcon id='protest' size='25rem' />
        </IconContainer>
        <FlexColSection id='protest'>
          <SectionHeading className='mb-24'>Shape the Future</SectionHeading>
          <BodyText>
            Bring your ideas and energy to make this platform truly democratic.
            Suggest new conditions, data points, or outreach tactics. Point out
            protests and other activities that can help further the cause of
            funding our democracy. And above all, where you can, help and spread
            the word. Democracy cannot be granted, it must be earned.
          </BodyText>
        </FlexColSection>
      </ColToRowContainer>
    </Page>
  )
}
