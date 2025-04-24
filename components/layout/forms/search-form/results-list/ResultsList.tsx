// ─────────────────────────────────────────────────────────
// /components/layout/forms/search-form/results-list/ResultsList.tsx
// ─────────────────────────────────────────────────────────
import { ResultListItem } from './results-list-item/ResultsListItem'
import type { SearchResults } from '@/types/research'
import { ExternalLink } from '@/components/common/links'
import { BodyText, SmallText } from '@/components/common/body-typography'
import { GridColSection } from '@/components/layout/sections/grid-col-section/GridColSection'
import { Heading } from '@/components/common/headers/Heading'
import styles from './ResultsList.module.scss'
import { FlexColContainer } from '@/components/containers/layout-container/flex-col-container/FlexColContainer'

type ResultsListProps = { results: SearchResults }

export const ResultsList = ({ results }: ResultsListProps) => {
  const term = results.term

  const resultTypes = [
    {
      id: 'proj',
      label: 'Researched Projects',
      count: results.projects?.total,
      url: results.projects?.reporterURL ?? '',
    },
    {
      id: 'pub',
      label: 'Peer-reviewed Publications',
      count: results.publications?.total ?? null,
      url: results.publications?.reporterURL ?? '',
    },
    {
      id: 'ct',
      label: 'Clinical Studies',
      count: results.trials?.total ?? null,
      url: results.trials?.reporterURL ?? '',
    },
  ] as const

  return (
    <GridColSection id='results' className={styles.results}>
      <div className={styles.resultsHeader}>
        <Heading as='h3' size='lg' className='mb-24 center'>
          NIH Impact Summary
        </Heading>

        <BodyText className='mb-18 body-width center'>
          In the last few decades, public investment through the NIH has powered
          research into <strong>{term}</strong> and produced the following:
        </BodyText>
      </div>

      <div className={styles.resultsContainer}>
        <ul className={styles.resultsList}>
          {resultTypes.map((t) => (
            <ResultListItem
              key={t.id}
              id={t.id}
              label={t.label}
              count={t.count ?? null}
              url={t.url}
              className='mb-18'
            />
          ))}
        </ul>

        <ExternalLink
          href={`https://search.nih.gov/search/docs?affiliate=nih&query=${encodeURIComponent(
            term
          )}`}
        >
          Discover More News
        </ExternalLink>
      </div>
      <FlexColContainer className='mb-44'>
        <SmallText className=' mb-44 center'>
          The numbers here represent NIH and Federally Funded research projects
          by the United States government to the best of the APIs&apos; ability.
          Our Health ROI pulls from:
          <FlexColContainer>
            <ExternalLink
              className='mt-44 mb-44 center'
              href='https://www.ncbi.nlm.nih.gov/books/NBK25501/'
            >
              The National Library of Medicine
            </ExternalLink>
            <ExternalLink
              className='mb-44 center'
              href='https://clinicaltrials.gov/'
            >
              NIH&apos;s Clinical Trials
            </ExternalLink>
            <ExternalLink className='center' href='https://reporter.nih.gov/'>
              NIH&apos;s API RePORTER
            </ExternalLink>
          </FlexColContainer>
        </SmallText>
        <SmallText>
          Our Health ROI uses the nih[gr] to limit searches to NIH-funded and
          government-funded projects. For Clinical Studies, we conduct a search
          for NIH-funded studies and Government-funded studies and then combine
          the results. This is why numbers displayed in Our Health ROI may be
          different than what you link to on the actual sites.
        </SmallText>
      </FlexColContainer>
    </GridColSection>
  )
}
