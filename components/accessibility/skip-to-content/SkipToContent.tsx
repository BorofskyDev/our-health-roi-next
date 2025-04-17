import React from 'react'
import styles from './SkipToContent.module.scss'

interface SkipToContentProps {
  mainId?: string
  label?: string
  className?: string
}

const SkipToContent: React.FC<SkipToContentProps> = ({
  mainId = 'main',
  label = 'Skip to content',
  className,
}) => {
  return (
    <a href={`#${mainId}`} className={`${styles.skipToContent} ${className}`}>
      {label}
    </a>
  )
}

export default SkipToContent
