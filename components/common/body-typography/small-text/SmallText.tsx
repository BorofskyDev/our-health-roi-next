// components/common/body-typography/small-text/SmallText.tsx but imported through body-typography/index.ts

import React, { ReactNode } from 'react'
import styles from './SmallText.module.scss'

type SmallTextProps = {
  children: ReactNode
  className?: string
}

export const SmallText = ({ children, className }: SmallTextProps) => {
  return <p className={`${styles.smallText} ${className}`}>{children}</p>
}
