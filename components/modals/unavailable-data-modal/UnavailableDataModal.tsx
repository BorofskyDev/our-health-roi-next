import { ParagraphTitle, PHeader } from '@/components/common/headers'
import { BodyText } from '@/components/common/body-typography'
import { CTAButton } from '@/components/common/buttons'
import { FlexColSection } from '@/components/layout/sections'

type Props = {
  metricLabel: string
  close: () => void
}

export const UnavailableDataModal = ({ metricLabel, close }: Props) => (
  <FlexColSection>
    <ParagraphTitle>Why is {metricLabel} data missing?</ParagraphTitle>
    <PHeader>Possible reasons the data isn&apos;t being retrieved</PHeader>
    <BodyText>
      <strong>Temporary outages or maintenance</strong> – NIH public servers
      sometimes go offline for scheduled upgrades, high traffic, or the
      occasional technical failure. Better funding would improve uptime and
      reliability.
    </BodyText>
    <BodyText>
      <strong>Rate-limiting</strong> – This API is restricted to 1 search per
      second to control costs and reduce abuse. With better oversight and
      support, infrastructure could stay open and responsive while protecting
      against bad actors.
    </BodyText>
    <BodyText>
      <strong>Data access delays</strong> – At times, information is temporarily
      withheld due to internal policy changes or security reviews. While some of
      these pauses are justified, others may be driven by political pressure.
    </BodyText>
    <BodyText>
      <strong>Intentional disruption</strong> – There is growing concern that
      strategic defunding or political interference is quietly restricting
      access to public scientific data. If that possibility concerns you,
      contact your Congressperson <strong>today</strong>.
    </BodyText>

    <BodyText>
      NIH research belongs to the public. When access is blocked—whether for
      maintenance or political motives—it undermines transparency, trust, and
      the return on your tax dollars.
      <br />
      <br />A well-funded, independent NIH is essential for open science. Demand
      stable funding, modern infrastructure, and strong protections for public
      access.
    </BodyText>

    <CTAButton onClick={close} className='self-end'>
      Got it
    </CTAButton>
  </FlexColSection>
)
