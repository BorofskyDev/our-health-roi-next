// components/common/buttons/cta-button/CTAButton.tsx, but called { CTAButton} from my buttons/index.ts file.

import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import styles from './CTAButton.module.scss'

type CTAButtonProps = PropsWithChildren<
  {
    isLoading?: boolean
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
