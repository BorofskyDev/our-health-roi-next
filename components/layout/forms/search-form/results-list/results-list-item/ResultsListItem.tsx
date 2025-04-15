// components/layout/forms/search-form/results-list/results-list-item/ResultsListItem.tsx

import { ExternalLink } from '@/components/common/links'
import { CTAButton } from '@/components/common/buttons'
import { useModal } from '@/context/ModalContext'
import { UnavailableDataModal } from '@/components/modals/unavailable-data-modal/UnavailableDataModal'
import styles from './ResultsListItem.module.scss'

type ResultListItemProps = {
  id: string
  label: string
  count: number | null
  url: string | null
  className?: string
}

export const ResultListItem = ({
  id,
  label,
  count,
  url,
  className,
}: ResultListItemProps) => {
  const { openModal, closeModal } = useModal()

  if (count === null) {
    return (
      <li className={`${className ?? ''} ${styles.resultsListItem}`}>
        <CTAButton
          onClick={() =>
            openModal(
              <UnavailableDataModal metricLabel={label} close={closeModal} />
            )
          }
        >
          Data Unavailable
        </CTAButton>
        <span>{label}</span>
      </li>
    )
  }

  return (
    <li className={`${className ?? ''} ${styles.resultsListItem}`}>
      {url ? (
        <ExternalLink href={url}>
          <span id={id}>{count.toLocaleString()}</span>
        </ExternalLink>
      ) : (
        <span id={id}>{count.toLocaleString()}</span>
      )}
      <span>{label}</span>
    </li>
  )
}

