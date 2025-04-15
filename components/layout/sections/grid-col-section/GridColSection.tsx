import React, { ReactNode } from 'react'
import styles from './GridColSection.module.scss'

type GridColSectionProps = {
  children: ReactNode
  id?: string
  className?: string
}

export const GridColSection = ({
  children,
  id,
  className,
}: GridColSectionProps) => {
  return (
    <section id={id} className={`${styles.gridColSection} ${className}`}>
      {children}
    </section>
  )
}
