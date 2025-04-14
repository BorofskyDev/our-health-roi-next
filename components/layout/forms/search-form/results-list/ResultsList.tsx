import { SectionHeading } from '@/components/common/headers'
import { ResultListItem } from './results-list-item/ResultsListItem'
import { SearchResults } from '../SearchForm'
import { ExternalLink } from '@/components/common/links'
import { FlexColSection } from '@/components/layout/sections'
import { BodyText } from '@/components/common/body-typography'
import styles from './ResultsList.module.scss'

type ResultsListProps = {
  results: SearchResults
}

export const ResultsList = ({ results }: ResultsListProps) => {
  const resultTypes = [
    {
      id: 'proj',
      label: 'Researched Projects',
      count: results.projects.total,
      url:
        results.projects.reporterURL ||
        `https://reporter.nih.gov/search/results?projects/text:${encodeURIComponent(
          results.term
        )}`,
    },
    {
      id: 'pub',
      label: 'Peer-reviewed Publications',
      count: results.publications,
      url: `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(
        results.term
      )}`,
    },
    {
      id: 'pat',
      label: 'Patented Discoveries',
      count: results.patents,
      url: `https://patentsview.org/search/?q=${encodeURIComponent(
        `{"_text_any":{"patent_title":"${results.term}"},"_and":[]}`
      )}`,
    },
    {
      id: 'ct',
      label: 'Clinical Studies',
      count: results.trials,
      url: `https://clinicaltrials.gov/search?cond=${encodeURIComponent(
        results.term
      )}`,
    },
  ]

  return (
    <FlexColSection id='results'>
      <SectionHeading className='mb-24 center'>
        NIH Impact Summary
      </SectionHeading>
      <BodyText className=' mb-18 body-width center'>
        Since 1985, public investment through the NIH has powered research into
        <strong> {results.term} </strong> and produced the following:
      </BodyText>
      <ul className={styles.resultsList}>
        {resultTypes.map((type) => (
          <ResultListItem
            key={type.id}
            id={type.id}
            label={type.label}
            count={type.count}
            url={type.url}
            className='mb-18'
          />
        ))}
      </ul>
      <ExternalLink href={`https://www.nih.gov/news-events/news-releases/search/${encodeURIComponent(
            results.term
          )}`}>Discover More News</ExternalLink>
    </FlexColSection>
  )
}
