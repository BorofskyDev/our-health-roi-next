import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import styles from './CTAButton.module.scss'

type CTAButtonProps = PropsWithChildren<
  {
    /** Show a spinner / alt label while async work happens */
    isLoading?: boolean
    /** Text to display while `isLoading` is true (defaults to “Loading…”) */
    loadingText?: string
  } & ButtonHTMLAttributes<HTMLButtonElement>
>

export const CTAButton = ({
  isLoading = false,
  loadingText = 'Loading…',
  children,
  className,
  disabled,
  ...rest
}: CTAButtonProps) => (
  <button
    className={`${styles.ctaButton} ${className ?? ''}`}
    disabled={isLoading || disabled}
    {...rest}
  >
    {isLoading ? loadingText : children}
  </button>
)
