// components/common/body-typography/body-text/BodyText.tsx but imported through body-typography/index.ts

import React, { ReactNode } from 'react'
import styles from './BodyText.module.scss'

type BodyTextProps = {
  children: ReactNode
  className?: string
}

export const BodyText = ({ children, className }: BodyTextProps) => {
  return <h1 className={`${styles.bodyText} ${className}`}>{children}</h1>
}
