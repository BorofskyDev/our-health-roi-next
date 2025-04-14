import React, { ReactNode } from 'react'
import styles from './PageHeader.module.scss'

type PageHeaderProps = {
  children: ReactNode
  className?: string
}

export const PageHeader = ({
  children,
  className,
}: PageHeaderProps) => {
  return <h1 className={`${styles.pageHeader} ${className}`}>{children}</h1>
}
