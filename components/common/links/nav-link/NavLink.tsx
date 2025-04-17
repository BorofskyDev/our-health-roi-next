'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { forwardRef, ReactNode } from 'react'
import styles from './NavLink.module.scss'

interface NavLinkProps {
  href: string
  children: ReactNode
  onClick?: () => void
  className?: string
  tabIndex?: number
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, children, onClick, className = '', tabIndex }, ref) => {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
      <Link
        href={href}
        className={`${styles.navLink} ${
          isActive ? styles.active : ''
        } ${className}`}
        onClick={onClick}
        ref={ref}
        tabIndex={tabIndex}
      >
        {children}
      </Link>
    )
  }
)

// Add display name for better debugging
NavLink.displayName = 'NavLink'
