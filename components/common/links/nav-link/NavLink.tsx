import { ReactNode } from 'react'
import Link from 'next/link'
import styles from './NavLink.module.scss'

type NavLinkProps = {
  href: string
  children: ReactNode
  className?: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

export const NavLink = ({ href, children, className, onClick }: NavLinkProps) => {
  return (
    <Link onClick={onClick} className={`${styles.navLink} ${className}`} href={href}>
      {children}
    </Link>
  )
}
