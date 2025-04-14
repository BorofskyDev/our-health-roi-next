import React, { ReactNode } from 'react'
import styles from './ParagraphTitle.module.scss'

type ParagraphTitleProps = {
  children: ReactNode
  className?: string
}

export const ParagraphTitle = ({
  children,
  className,
}: ParagraphTitleProps) => {
  return <h4 className={`${styles.paragraphTitle} ${className}`}>{children}</h4>
}
