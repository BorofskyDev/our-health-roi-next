import React, { ReactNode } from 'react'
import styles from './FlexColSection.module.scss'

type FlexColSectionProps = {
  children: ReactNode
  id?: string
  className?: string
}

export const FlexColSection = ({
  children,
  id,
  className,
}: FlexColSectionProps) => {
  

  return (
    <section id={id} className={`${styles.flexColSection} ${className}`}>
      {children}
    </section>
  )
}
