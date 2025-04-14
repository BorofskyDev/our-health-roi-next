'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { CloseIcon } from '@/components/icons/'
import styles from './CloseButton.module.scss'

type CloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ className, ...rest }, ref) => (
    <button
      ref={ref}
      type='button'
      aria-label='Close modal'
      className={`${styles.closeButton} ${className ?? ''}`}
      {...rest}
    >
      <CloseIcon/>
      <span>Close</span>
    </button>
  )
)
CloseButton.displayName = 'CloseButton'
