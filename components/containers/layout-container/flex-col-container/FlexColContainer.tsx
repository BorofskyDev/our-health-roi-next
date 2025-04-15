import React, { ReactNode } from 'react'
import styles from './FlexColContainer.module.scss'

type FlexColContainerProps = {
  children: ReactNode
  id?: string
  className?: string
}

export const FlexColContainer = ({
  children,
  id,
  className,
}: FlexColContainerProps) => {
  

  return (
    <div id={id} className={`${styles.flexColContainer} ${className}`}>
      {children}
    </div>
  )
}
