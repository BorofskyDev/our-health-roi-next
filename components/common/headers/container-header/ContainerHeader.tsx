import React, { ReactNode } from 'react'
import styles from './ContainerHeader.module.scss'

type ContainerHeaderProps = {
  children: ReactNode
  className?: string
}

export const ContainerHeader = ({
  children,
  className,
}: ContainerHeaderProps) => {
  return <h5 className={`${styles.containerHeader} ${className}`}>{children}</h5>
}
