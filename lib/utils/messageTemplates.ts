import {
  ContactType,
  RecipientType,
} from '@/components/modals/contact-congress/messages/MessageBody'
import { ResearchCounts } from '@/types/'
import { buildResearchLines } from './buildResearchLines'

export type MessageFormValues = {
  repName: string
  senatorName1: string
  senatorName2: string
  cityState: string
  personalImpact: string
  fullName: string
  currentSenator?: string
}

export function generateMessagePreview(
  values: MessageFormValues,
  searchTerm: string,
  research: ResearchCounts,
  contactType: ContactType,
  recipientType: RecipientType
) {
  if (contactType === 'email') {
    return recipientType === 'rep'
      ? generateEmailRepPreview(values, searchTerm, research)
      : generateEmailSenatorPreview(values, searchTerm, research)
  }
  return recipientType === 'rep'
    ? generateCallRepPreview(values, searchTerm, research)
    : generateCallSenatorPreview(values, searchTerm, research)
}

/* ------------------------------------------------------------ */
/*  EMAIL templates                                             */
/* ------------------------------------------------------------ */

export function generateEmailRepPreview(
  values: MessageFormValues,
  searchTerm: string,
  research: ResearchCounts
) {
  const { repName, cityState, personalImpact, fullName } = values
  const [city = '', state = ''] = cityState.split(',').map((s) => s.trim())

  const lines = buildResearchLines(research, { tone: 'formal' })
    .map((l) => `- ${l}`)
    .join('\n')

  return `Dear Representative ${repName},

As your constituent from ${cityState}, I'm deeply concerned about the critical need to maintain robust NIH funding, especially for research into ${searchTerm}.

In the last few decades, NIH‑funded research has achieved remarkable progress, including:
${lines}

This investment is not just scientific—it’s personal.

${personalImpact}

Drastic cuts to NIH funding threaten our nation's health, economic prosperity, and global leadership in science. Protecting and enhancing NIH funding is essential, not partisan. I urge you to vigorously oppose any measure that would reduce this essential investment and, instead, support increasing NIH funding to safeguard lives, reduce healthcare costs, and strengthen our economy—starting right here at home.

Thank you for your leadership on this urgent issue. I eagerly await your support.

Respectfully,
${fullName}
${city}, ${state}`
}

export function generateEmailSenatorPreview(
  values: MessageFormValues,
  searchTerm: string,
  research: ResearchCounts
) {
  const { currentSenator, cityState, personalImpact, fullName } = values
  const [city = '', state = ''] = cityState.split(',').map((s) => s.trim())
  const senatorName = currentSenator || values.senatorName1 || 'Senator'

  const lines = buildResearchLines(research, { tone: 'formal' })
    .map((l) => `- ${l}`)
    .join('\n')

  return `Dear Senator ${senatorName},

As your constituent from ${cityState}, I urge your strong support for sustained funding of the National Institutes of Health, particularly for research related to ${searchTerm}.

In the last few decades, NIH funding has yielded significant advancements, including:
${lines}

These achievements transcend politics—they profoundly impact real lives.

${personalImpact}

Reducing NIH funding endangers our health security, stalls scientific innovation, and weakens America's global leadership in biomedical research. I respectfully ask you to actively oppose any proposals that threaten NIH funding and to support policies that invest in scientific research, benefiting both our state and our nation's future.

Thank you for your dedicated service and consideration. I look forward to your commitment to this essential cause.

Sincerely,
${fullName}
${city}, ${state}`
}

/* ------------------------------------------------------------ */
/*  PHONE templates (casual tone)                               */
/* ------------------------------------------------------------ */

export function generateCallRepPreview(
  values: MessageFormValues,
  searchTerm: string,
  research: ResearchCounts
) {
  const { repName, cityState, personalImpact, fullName } = values
  const bulletPoints = buildResearchLines(research, { tone: 'casual' })
    .map((l) => `- ${l}`)
    .join('\n')

  return `CALL SCRIPT: REPRESENTATIVE

Hello, my name is ${fullName}. I'm from ${cityState}.

I'm calling about funding for NIH research on ${searchTerm}.

The NIH has done important work:
${bulletPoints}

Here's why this matters to me:
${personalImpact}

Please ask Representative ${repName} to support NIH funding. This funding helps people here in our community.

Thank you for listening.`
}

export function generateCallSenatorPreview(
  values: MessageFormValues,
  searchTerm: string,
  research: ResearchCounts
) {
  const { currentSenator, cityState, personalImpact, fullName } = values
  const senatorName = currentSenator || values.senatorName1 || 'Senator'
  const bulletPoints = buildResearchLines(research, { tone: 'casual' })
    .map((l) => `- ${l}`)
    .join('\n')

  return `CALL SCRIPT: SENATOR

Hello, my name is ${fullName}. I'm from ${cityState}.

I'm calling about NIH funding for research on ${searchTerm}.

The NIH has helped our state by funding:
${bulletPoints}

Here's why NIH research matters to me:
${personalImpact}

Please ask Senator ${senatorName} to support and increase NIH funding. This funding saves lives and benefits our state.

Thank you for your time.`
}
