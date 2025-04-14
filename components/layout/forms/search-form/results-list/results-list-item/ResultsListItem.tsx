import { ExternalLink } from '@/components/common/links'
import styles from './ResultsListItem.module.scss'

type ResultListItemProps = {
  id: string
  label: string
  count: number
  url: string
  className?: string
}

export const ResultListItem = ({
  id,
  label,
  count,
  url,
  className,
}: ResultListItemProps) => {
  return (
    <li className={` ${className} ${styles.resultsListItem} `}>
      <ExternalLink href={url}>
        <span id={id}>{count.toLocaleString()}</span>
      </ExternalLink>

      <span>{label}</span>
    </li>
  )
}
