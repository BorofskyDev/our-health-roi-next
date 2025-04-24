// components/containers/page-containers/AboutPage.tsx

import { BodyText } from '@/components/common/body-typography'

import { ExternalLink, NavLink } from '@/components/common/links'
import { Page } from '@/components/layout/page/Page'
import { FlexColSection } from '@/components/layout/sections'
import { ColToRowContainer } from '../layout-container/col-to-row-container/ColToRowContainer'
import { FlexColContainer } from '../layout-container/flex-col-container/FlexColContainer'
import { AnimatedIcon } from '@/components/icons'
import { IconContainer } from '../icon-container/IconContainer'
import { Heading } from '@/components/common/headers/Heading'
import { Metadata } from 'next'
import photo from '@/public/kjames.webp'
import Image from 'next/image'
import { ImageContainer } from '../image-container/ImageContainer'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Our Health ROI initiative and our mission to showcase the impact of medical research funding.',
  openGraph: {
    title: 'About | Our Health ROI',
    description: 'Learn about our mission to showcase medical research impact.',
    images: [
      {
        url: '/api/og?title=About&subtitle=Our mission to showcase medical research impact',
        width: 1200,
        height: 630,
        alt: 'About Our Health ROI',
      },
    ],
  },
}

const AboutPage = () => {
  return (
    <Page>
      <FlexColSection id='main'>
        <Heading as='h1' size='2xl' className='center'>
          About Our Health ROI
        </Heading>

        <Heading as='h2' size='lg'>
          Why This Site?
        </Heading>
        <BodyText className='mb-24'>
          Our Health ROI is a free citizen-built tool that turns NIH funding
          data into action. Public dollars save lives, spark private-sector
          breakthroughs, and keeps the United States at the forefront of global
          science. Search any condition to see how the NIH and taxpayer-backed
          research has helped you and those you love throughout the years.
        </BodyText>
        <ColToRowContainer>
          <FlexColContainer>
            <Heading as='h2' size='md' className='mb-30'>
              The NIH: America&apos;s Biomedical Engin
            </Heading>

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
        <Heading as='h2' size='md' className='mb-30'>
          Why I Built This Site
        </Heading>
        <ColToRowContainer>
          <FlexColContainer>
            <BodyText>
              In the movies, there&apos;s always a hero or group of heros, a
              single person or group of individuals who overcome all the odds
              and save the day while the masses flail about. That, however, only
              happens in the movies. In reality, our salvation has to come from
              a collective effort, each of us taking our own part. That means
              listening to each other and paying attention to ideas, even if
              they seem far-fetched.
            </BodyText>
            <BodyText>
              <ImageContainer>
                <Image
                  src={photo}
                  alt='Social media post on bluesky by Karen James @kejames.bsky.social. Content: Free Idea, a website where you enter the name of your disease/injury/condition/procedure and get shirts, stickers, signs, etc. with NIH grand number X saved my life.'
                  height='1260'
                  width='1960'
                />
              </ImageContainer>
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
              <ExternalLink href='https://bsky.app/profile/kejames.bsky.social/post/3lmg3zxmwhk2c'>
                This post
              </ExternalLink>
              sparked the idea for Our Health ROI. While we can&apos;t make
              t-shirts and signs, we can create form letters to send to your
              congressional representatives and senators. No single one of us is
              the hero or the knight riding in to save the day, but what this
              means is that if we all take action, then each of us are
              contributing to a heroic movement.
            </BodyText>
            <BodyText className='mb-24'>
              There&apos;s no hidden agenda here. I run no ads, collect no
              personal data, and the entire codebase is
              <ExternalLink href='https://github.com/BorofskyDev/our-health-roi-next'>
                open-source on GitHub
              </ExternalLink>
              for anyone to audit or improve. The whole point is to get you to
              take action. If only some of us act then all of us are at risk.
            </BodyText>
          </FlexColContainer>
        </ColToRowContainer>

        <Heading as='h2' size='md'>
          How the Site Works
        </Heading>
        <BodyText>
          <strong>Search any condition</strong>—from melanoma to rare genetic
          disorders—and instantly see every NIH‑funded project, publication, and
          clinical trial since as far back as 1985 (not all searches will go
          that far back). Our Health ROI numbers might be different than the
          search results from the site because we apply filters to do our best
          to narrow down the search to NIH-funded and government-funded
          programs.
        </BodyText>
        <BodyText className='mb-24'>
          <strong>Generate a ready‑to‑send email or phone script</strong>{' '}
          addressed to your representative or senators, personalized with the
          data you just pulled.
        </BodyText>

        <BodyText>
          This project is <em>100 % independent</em>. No PAC, no foundation, no
          corporate sponsor—just a concerned citizen and the occasional coffee
          funded by PayPal tips to keep everything running. If you&apos;d like
          to help with hosting costs, you can{' '}
          <NavLink href='/support' className='mb-24'>
            <strong>donate to me here</strong>
          </NavLink>
          .
        </BodyText>
      </FlexColSection>
    </Page>
  )
}

export default AboutPage
