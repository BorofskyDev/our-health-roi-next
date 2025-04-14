import React, { ReactNode } from 'react'
import styles from './SectionTitle.module.scss'

type SectionTitleProps = {
  children: ReactNode
  className?: string
}

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return <h2 className={`${styles.sectionTitle} ${className}`}>{children}</h2>
}
