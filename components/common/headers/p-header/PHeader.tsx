import React, { ReactNode } from 'react'
import styles from './PHeader.module.scss'

type PHeaderProps = {
  children: ReactNode
  className?: string
}

export const PHeader = ({ children, className }: PHeaderProps) => {
  return <p className={`${styles.pHeader} ${className}`}>{children}</p>
}
