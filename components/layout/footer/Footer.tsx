'use client'

import styles from './Footer.module.scss'
import { ExternalLink, NavLink } from '@/components/common/links'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      {/* inner wrapper that changes direction */}
      <div className={styles['footer__inner']}>
        {/* ①  Site navigation */}
        <nav className={styles['footer__nav']} aria-label='Footer navigation'>
          <ul>
            <li>
              <NavLink href='/'>Home</NavLink>
            </li>
            <li>
              <NavLink href='/about'>About</NavLink>
            </li>
            <li>
              <NavLink href='/faq'>FAQ</NavLink>
            </li>
            <li>
              <NavLink href='/contact'>Contact</NavLink>
            </li>
            <li>
              <NavLink href='/tip'>Support Us</NavLink>
            </li>
          </ul>
        </nav>

        {/* ②  Legal links */}
        <nav className={styles['footer__legal']} aria-label='Legal navigation'>
          <NavLink href='/privacy-policy'>Privacy Policy</NavLink>
          <span aria-hidden>│</span>
          <NavLink href='/terms-of-use'>Terms of Use</NavLink>
          <span aria-hidden>│</span>
          <NavLink href='/accessibility'>Accessibility</NavLink>
        </nav>

        {/* ③  Branding */}
        <div className={styles['footer__branding']}>
          <span>© {year} Our Health ROI</span>
          <span>
            Designed & Developed by{' '}
            <ExternalLink href='https://joelborofsky.com'>JBSky Dev</ExternalLink>
          </span>
        </div>
      </div>
    </footer>
  )
}
