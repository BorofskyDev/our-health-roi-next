// components/layout/forms/search-form/results-list/ResultsList.tsx
import { ResultListItem } from './results-list-item/ResultsListItem'
import { SearchResults } from '../SearchForm'
import { ExternalLink } from '@/components/common/links'
import { BodyText } from '@/components/common/body-typography'
import styles from './ResultsList.module.scss'
import { GridColSection } from '@/components/layout/sections/grid-col-section/GridColSection'
import { Heading } from '@/components/common/headers/heading/Heading'

type ResultsListProps = { results: SearchResults }

export const ResultsList = ({ results }: ResultsListProps) => {
  const term = results.term

  const resultTypes = [
    {
      id: 'proj',
      label: 'Researched Projects',
      count: results.projects?.total ?? null,
      url:
        results.projects?.reporterURL ??
        `https://reporter.nih.gov/search/results?projects/text:${encodeURIComponent(
          term
        )}`,
    },
    {
      id: 'pub',
      label: 'Peer‑reviewed Publications',
      count: results.publications,
      url: `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(term)}`,
    },
    {
      id: 'pat',
      label: 'Patented Discoveries',
      count: results.patents,
      url:
        results.projects?.reporterURL &&
        results.projects.reporterURL.includes('/search/')
          ? results.projects.reporterURL.replace(/\/projects$/, '/patents')
          : `https://reporter.nih.gov/search-results?projects/text:${encodeURIComponent(
              term
            )}/patents`,
    },
    {
      id: 'ct',
      label: 'Clinical Studies',
      count: results.trials,
      url: `https://clinicaltrials.gov/search?cond=${encodeURIComponent(term)}`,
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
          research into
          <strong> {term} </strong> and produced the following:
        </BodyText>
      </div>

      <div className={styles.resultsContainer}>
        <ul className={`${styles.resultsList}`}>
          {resultTypes.map((t) => (
            <ResultListItem
              key={t.id}
              id={t.id}
              label={t.label}
              count={t.count}
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
    </GridColSection>
  )
}
