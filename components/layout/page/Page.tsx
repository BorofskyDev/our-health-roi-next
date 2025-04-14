import React, { ReactNode } from 'react'
import styles from './Page.module.scss'

type Page = {
  children: ReactNode
  className?: string
}

export const Page = ({
  children,
  className,
}: Page) => {
  return (
    <main className={`${styles.page} ${className}`}>
      {children}
    </main>
  )
}
