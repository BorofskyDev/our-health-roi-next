import React, { ReactNode } from 'react'
import styles from './SectionHeading.module.scss'

type SectionHeadingProps = {
  children: ReactNode
  className?: string
}

export const SectionHeading = ({ children, className }: SectionHeadingProps) => {
  return <h3 className={`${styles.sectionHeading} ${className}`}>{children}</h3>
}
