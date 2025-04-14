// lib/utils/emailTemplates.ts

export type ResearchCounts = {
  projects: number
  publications: number
  patents: number
  trials: number
}

export type EmailRepFormValues = {
  repName: string
  cityState: string
  personalImpact: string
  fullName: string
}

const format = (n: number | string) => Number(n).toLocaleString('en-US')

export function generateEmailRepPreview(
  values: EmailRepFormValues,
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

These investments are not partisan – they are lifesaving.

${personalImpact}

Cuts to the NIH budget would stall breakthroughs, increase health‑care costs, and put American leadership in science at risk. I urge you to oppose any proposal that reduces NIH funding and, instead, champion increased support for biomedical research that saves lives and drives economic growth in every district – including ours.

Thank you for your time and service. I look forward to your response.

Sincerely,
${fullName}
${city}, ${state}`
}
