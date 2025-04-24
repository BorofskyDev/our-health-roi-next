// components/typography/Heading.tsx
import React, { ReactNode, ElementType } from 'react'
import styles from './Heading.module.scss'

export type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

type HeadingProps<C extends ElementType = 'h2'> = {
  as?: C
  size?: HeadingSize
  children: ReactNode
  className?: string
} & React.ComponentPropsWithoutRef<C>

export const Heading = <C extends ElementType = 'h2'>({
  as,
  size = 'md',
  children,
  className,
  ...rest
}: HeadingProps<C>) => {
  const Tag = as || 'h2'

  return (
    <Tag
      className={`${styles.heading} ${styles[`heading--${size}`]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
