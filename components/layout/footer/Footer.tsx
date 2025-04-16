// components/layout/footer/Footer.tsx
'use client'
import Link from 'next/link'
import styles from './Footer.module.scss'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* 1. Site Navigation */}
        <nav className={styles.footerNav}>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/faq'>FAQ</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>

        {/* 2. Legal and Accessibility */}
        <div className={styles.legal}>
          <Link href='/privacy-policy'>Privacy Policy</Link>
          <span>|</span>
          <Link href='/terms-of-use'>Terms of Use</Link>
          <span>|</span>
          <Link href='/accessibility'>Accessibility</Link>
        </div>

        {/* 3. Branding & Copyright */}
        <div className={styles.branding}>
          <span>© {currentYear}</span>
          <span>
            Designed and Developed by{' '}
            <Link
              href='https://jbsky.dev'
              target='_blank'
              rel='noopener noreferrer'
            >
              JBSky Dev
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
