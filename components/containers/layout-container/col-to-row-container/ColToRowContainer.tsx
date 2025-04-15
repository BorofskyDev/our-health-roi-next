import React, { ReactNode } from 'react'
import styles from './ColToRowContainer.module.scss'

type ColToRowContainerProps = {
  children: ReactNode
  id?: string
  className?: string
}

export const ColToRowContainer = ({
  children,
  id,
  className,
}: ColToRowContainerProps) => {
  return (
    <div id={id} className={`${styles.colToRowContainer} ${className}`}>
      {children}
    </div>
  )
}
