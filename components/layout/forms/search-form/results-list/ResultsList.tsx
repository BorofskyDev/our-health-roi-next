// components/layout/forms/search-form/results-list/ResultsList.tsx
import { SectionHeading } from '@/components/common/headers'
import { ResultListItem } from './results-list-item/ResultsListItem'
import { SearchResults } from '../SearchForm'
import { ExternalLink } from '@/components/common/links'
import { FlexColSection } from '@/components/layout/sections'
import { BodyText } from '@/components/common/body-typography'
import styles from './ResultsList.module.scss'

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
      url: `https://patentsview.org/search/?q=${encodeURIComponent(
        `{"_text_any":{"patent_title":"${term}"},"_and":[]}`
      )}`,
    },
    {
      id: 'ct',
      label: 'Clinical Studies',
      count: results.trials,
      url: `https://clinicaltrials.gov/search?cond=${encodeURIComponent(term)}`,
    },
  ] as const

  return (
    <FlexColSection id='results'>
      <SectionHeading className='mb-24 center'>
        NIH Impact Summary
      </SectionHeading>

      <BodyText className='mb-18 body-width center'>
        Since 1985, public investment through the NIH has powered research into
        <strong> {term} </strong> and produced the following:
      </BodyText>

      <ul className={styles.resultsList}>
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
        href={`https://www.nih.gov/news-events/news-releases/search/${encodeURIComponent(
          term
        )}`}
      >
        Discover More News
      </ExternalLink>
    </FlexColSection>
  )
}
