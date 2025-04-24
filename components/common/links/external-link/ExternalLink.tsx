import { ReactNode } from 'react'
import { ExternalLinkIcon } from '@/components/icons'
import styles from './ExternalLink.module.scss'

type ExternalLinkProps = {
  href: string
  children: ReactNode
  fileSizeKB?: number
  fileType?: 'pdf' | 'doc' | 'xls' | 'ppt' | 'zip' | 'csv' | 'txt'
  className?: string
  ariaLabel?: string
}

export const ExternalLink = ({
  href,
  children,
  fileSizeKB,
  fileType,
  className,
  ariaLabel,
}: ExternalLinkProps) => {
  const detectedType =
    fileType ?? (href.toLowerCase().endsWith('.pdf') ? 'pdf' : undefined)

  const sizeLabel =
    fileSizeKB !== undefined
      ? ` (${(fileSizeKB / 1024).toFixed(1)} MB ${detectedType?.toUpperCase()})`
      : detectedType
      ? ` (${detectedType.toUpperCase()})`
      : ''
  return (
    
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={ariaLabel}
      className={`${styles.externalLink} ${className}`}
    >
      <span className={styles.externalLink__text}>
        {children}
        {sizeLabel}
        <ExternalLinkIcon />
      </span>
      <span className='visually-hidden'> opens in a new window</span>
    </a>
  )
}
