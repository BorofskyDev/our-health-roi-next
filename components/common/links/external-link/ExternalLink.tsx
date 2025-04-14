import { ReactNode } from 'react'
import { ExternalLinkIcon } from '@/components/icons'
import styles from './ExternalLink.module.scss'

type ExternalLinkProps = {
  href: string
  children: ReactNode
  className?: string
  ariaLabel?: string
}

export const ExternalLink = ({
  href,
  children,
  className,
  ariaLabel,
}: ExternalLinkProps) => {
  return (
    <p className={`${styles.externalLink} ${className}`}>
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={ariaLabel}
      >
        {children}
        <ExternalLinkIcon />
      </a>
    </p>
  )
}
