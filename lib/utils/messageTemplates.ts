import {
  ContactType,
  RecipientType,
} from '@/components/modals/contact-congress/messages/MessageBody'

export type ResearchCounts = {
  projects: number
  publications: number
  patents: number
  trials: number
}

export type MessageFormValues = {
  repName: string
  senatorName1: string
  senatorName2: string
  cityState: string
  personalImpact: string
  fullName: string
  currentSenator?: string // Used internally for generating senator emails
}

const format = (n: number | string) => Number(n).toLocaleString('en-US')

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
  } else {
    return recipientType === 'rep'
      ? generateCallRepPreview(values, searchTerm, research)
      : generateCallSenatorPreview(values, searchTerm, research)
  }
}

// Email templates
export function generateEmailRepPreview(
  values: MessageFormValues,
  searchTerm: string,
  research: ResearchCounts
) {
  const { repName, cityState, personalImpact, fullName } = values
  // split "Columbus, OH"
  const [city = '', state = ''] = cityState.split(',').map((s) => s.trim())

  return `Dear Representative ${repName},

I'm writing as a constituent from ${cityState} about NIH support for ${searchTerm} research.

Since 1985, the National Institutes of Health has funded:
${format(research.projects)} research projects
${format(research.publications)} peer‑reviewed publications
${format(research.patents)} patented discoveries
${format(research.trials)} clinical studies

These investments are not partisan – they are lifesaving.

${personalImpact}

Cuts to the NIH budget would stall breakthroughs, increase health‑care costs, and put American leadership in science at risk. I urge you to oppose any proposal that reduces NIH funding and, instead, champion increased support for biomedical research that saves lives and drives economic growth in every district – including ours.

Thank you for your time and service. I look forward to your response.

Sincerely,
${fullName}
${city}, ${state}`
}

export function generateEmailSenatorPreview(
  values: MessageFormValues,
  searchTerm: string,
  research: ResearchCounts
) {
  const { currentSenator, cityState, personalImpact, fullName } = values
  // split "Columbus, OH"
  const [city = '', state = ''] = cityState.split(',').map((s) => s.trim())

  const senatorName = currentSenator || values.senatorName1 || 'Senator'

  return `Dear Senator ${senatorName},

I'm writing as a constituent from ${cityState} about NIH support for ${searchTerm} research.

Since 1985, the National Institutes of Health has funded:
${format(research.projects)} research projects
${format(research.publications)} peer‑reviewed publications
${format(research.patents)} patented discoveries
${format(research.trials)} clinical studies

These investments are not partisan – they are lifesaving.

${personalImpact}

Cuts to the NIH budget would stall breakthroughs, increase health‑care costs, and put American leadership in science at risk. I urge you to oppose any proposal that reduces NIH funding and, instead, champion increased support for biomedical research that saves lives and drives economic growth in our state.

Thank you for your time and service. I look forward to your response.

Sincerely,
${fullName}
${city}, ${state}`
}

// Call script templates
export function generateCallRepPreview(
  values: MessageFormValues,
  searchTerm: string,
  research: ResearchCounts
) {
  const { cityState, personalImpact, fullName } = values

  return `CALL SCRIPT: REPRESENTATIVE

Hello, my name is ${fullName} from ${cityState}.

I'm calling about NIH funding for ${searchTerm} research.

Since 1985, the NIH has funded ${format(
    research.projects
  )} research projects, ${format(
    research.publications
  )} publications, and ${format(
    research.trials
  )} clinical studies related to ${searchTerm}.

[PERSONAL IMPACT STATEMENT]:
${personalImpact}

I urge Representative [Name] to protect and increase NIH funding. These investments save lives and drive innovation.

Thank you for your time.`
}

export function generateCallSenatorPreview(
  values: MessageFormValues,
  searchTerm: string,
  research: ResearchCounts
) {
  const { cityState, personalImpact, fullName } = values

  return `CALL SCRIPT: SENATOR

Hello, my name is ${fullName} from ${cityState}.

I'm calling about NIH funding for ${searchTerm} research.

Since 1985, the NIH has funded ${format(
    research.projects
  )} research projects, ${format(
    research.publications
  )} publications, and ${format(
    research.trials
  )} clinical studies related to ${searchTerm}.

[PERSONAL IMPACT STATEMENT]:
${personalImpact}

I urge Senator [Name] to protect and increase NIH funding. These investments save lives and drive innovation.

Thank you for your time.`
}
