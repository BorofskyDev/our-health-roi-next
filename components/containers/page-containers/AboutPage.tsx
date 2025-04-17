// components/containers/page-containers/AboutPage.tsx

import { BodyText } from '@/components/common/body-typography'
import {
  PageHeader,
  SectionHeading,
  SectionTitle,
} from '@/components/common/headers'
import { ExternalLink } from '@/components/common/links'
import { Page } from '@/components/layout/page/Page'
import { FlexColSection } from '@/components/layout/sections'
import { ColToRowContainer } from '../layout-container/col-to-row-container/ColToRowContainer'
import { FlexColContainer } from '../layout-container/flex-col-container/FlexColContainer'
import { AnimatedIcon } from '@/components/icons'
import { IconContainer } from '../icon-container/IconContainer'

const AboutPage = () => {
  return (
    <Page>
      <FlexColSection id='main'>
        <PageHeader className='mb-44 center'>About Our Health ROI</PageHeader>
        <SectionTitle>Why this site?</SectionTitle>
        <BodyText className='mb-24'>
          Our Health ROI is a citizen‑built tool that turns cold NIH funding
          data into a warm, unmistakable story: public dollars save lives, spark
          private‑sector breakthroughs, and keep the United States at the
          forefront of global health science. Search any medical condition, see
          exactly how much NIH support it has received since 1985, and—within
          seconds—generate an email or phone script that puts those numbers on
          your lawmakers&apos; desks.
        </BodyText>
        <ColToRowContainer>
          <FlexColContainer>
            <SectionHeading className='mb-30'>
              The NIH: America&apos;s Biomedical Engine
            </SectionHeading>
            <BodyText>
              Created in 1930 (with roots reaching back to an 1887 one‑room
              laboratory on Staten Island), the National Institutes of Health
              grew from a single hygienic lab into the world&apos;s largest
              public funder of biomedical research. Today its 27 specialized
              institutes and centers channel roughly $48 billion each year into
              everything from basic cell biology to first‑in‑human clinical
              trials.
            </BodyText>
            <BodyText>
              For nearly a century, NIH grants have formed the launchpad for
              discoveries that private industry later transforms into lifesaving
              treatments: the first chemotherapy agents in the 1940s,
              antiretroviral therapies that turned HIV from a death sentence
              into a chronic condition, and the mRNA vaccine platforms that
              helped curb COVID‑19 in record time. Without those early‑stage,
              high‑risk investments, many breakthroughs would never leave the
              lab—or would debut at prices only the ultra‑wealthy could afford.
            </BodyText>
          </FlexColContainer>
          <IconContainer>
            <AnimatedIcon id='world' size='25rem' className='mb-24' />
          </IconContainer>
        </ColToRowContainer>
        <ColToRowContainer>
          <IconContainer>
            <AnimatedIcon id='capitol' size='25rem' className='mb-24' />
          </IconContainer>
          <FlexColContainer>
            <BodyText>
              Beyond direct health impacts, NIH funding is an economic
              powerhouse. Every research dollar circulates through universities,
              startups, and biotech hubs, generating an estimated 7‑to‑1 return
              in jobs, patents, and tax revenue. Cutting that pipeline
              doesn&apos;t merely slow science; it cedes future industries—and
              the high‑paying jobs they create—to nations that choose to invest
              where we hesitate.
            </BodyText>
            <BodyText className='mb-24'>
              Finally, the NIH embodies a uniquely American partnership: public
              funding de‑risks discovery, and private companies race to
              commercialize it, accelerating cures while keeping the U.S.
              competitive against the EU, China, and other rising research
              powers. Protecting that model isn&apos;t charity; it&apos;s
              strategic self‑interest—and a patriotic duty for anyone who
              believes taxes should work as hard as the people who pay them.
            </BodyText>
          </FlexColContainer>
        </ColToRowContainer>
        <SectionHeading className='mb-30'>Why I Built This Site</SectionHeading>
        <ColToRowContainer>
          <FlexColContainer>
            <BodyText>
              In 2018 a dermatologist told me the dark speck on my head was
              melanoma. A plastic surgeon, armed with NIH‑funded research, used
              a then‑new “pinwheel” closure technique that spared me skin grafts
              and left only a faint swirl of scar tissue. Within weeks I was
              back at work—grateful, amazed, and suddenly aware of how invisible
              public science can be when it works perfectly.
            </BodyText>
            <BodyText>
              While on Bluesky someone quipped,{' '}
              <em>
                &quot;Why isn’t there an app that shows how much NIH money went
                into the disease that saved your life? Throw the stats on a
                coffee mug and profit.&quote;
              </em>{' '}
              My reflex was to reply,
              <em> Nothing in development is ever easy.</em> Then I discovered
              the NIH RePORTER API and realized that at least the data‑to‑email
              part was easy. One caffeine‑fueled week later, the prototype
              you&apos;re using was launched.
            </BodyText>
          </FlexColContainer>
          <IconContainer>
            <AnimatedIcon id='about' size='25rem' className='mb-24' />
          </IconContainer>
        </ColToRowContainer>
        <ColToRowContainer>
          <IconContainer>
            <AnimatedIcon id='people' size='25rem' className='mb-24' />
          </IconContainer>
          <FlexColContainer>
            <BodyText>
              This site isn&apos;t about single‑handedly flipping congressional
              votes—some lawmakers will ignore a million emails if it suits
              them. The goal is to change our habits. For most Americans,
              democracy happens once every four years in a voting booth. Voting
              is necessary, but it is not sufficient. Sending a data‑backed note
              to your representatives takes five minutes and reminds
              everyone—citizens and officials alike—that participation is a
              daily practice, not a quadrennial chore.
            </BodyText>
            <BodyText className='mb-24'>
              There&apos;s no hidden agenda here. I run no ads, collect no
              personal data, and the entire codebase is open‑source on GitHub
              for anyone to audit or improve. If this project nudges you to flex
              your civic muscles, mission accomplished. If it also helps keep
              NIH funding off the chopping block, that&apos;s the cherry on top
              of my tiny pinwheel scar.
            </BodyText>
            <ExternalLink
              className='mb-24'
              href='https://github.com/BorofskyDev/our-health-roi-next'
            >
              See the Code For Yourself
            </ExternalLink>
          </FlexColContainer>
        </ColToRowContainer>

        <SectionHeading>How the Site Works</SectionHeading>
        <BodyText>
          <strong>Search any condition</strong>—from melanoma to rare genetic
          disorders—and instantly see every NIH‑funded project, publication,
          patent, and clinical trial since as far back as 1985 (not all searches
          will go that far back).
        </BodyText>
        <BodyText className='mb-24'>
          <strong>Generate a ready‑to‑send email or phone script</strong>{' '}
          addressed to your representative or senators, personalized with the
          data you just pulled.
        </BodyText>

        <BodyText>
          This project is <em>100 % independent</em>. No PAC, no foundation, no
          corporate sponsor—just a concerned citizen and the occasional coffee
          funded by PayPal tips to keep the servers humming. If you&apos;d like
          to help with hosting costs, you can{' '}
        </BodyText>
      </FlexColSection>
    </Page>
  )
}

export default AboutPage
