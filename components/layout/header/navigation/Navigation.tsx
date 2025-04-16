// components/layout/header/navigation/Navigation.tsx
'use client'
import { motion } from 'framer-motion'
import { NavLink } from '@/components/common/links/nav-link/NavLink'
import styles from './Navigation.module.scss'

interface NavigationProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export const Navigation = ({ isOpen, setIsOpen }: NavigationProps) => {
  const toggleNavigation = () => {
    setIsOpen(!isOpen)
  }

  // Framer Motion variants for the mobile navigation overlay
  const navContainerVariants = {
    hidden: { x: '-100vw', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  }

  // Variants for each navigation link item
  const navLinkVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  }

  return (
    <div className={styles.navigationContainer}>
      {/* Hamburger / X Toggle Button for Mobile */}
      <div className={styles.hamburgerWrapper} onClick={toggleNavigation}>
        <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <motion.nav
        className={styles.mobileNav}
        variants={navContainerVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
      >
        <motion.ul className={styles.navList}>
          <motion.li variants={navLinkVariants}>
            <NavLink href='/' onClick={toggleNavigation}>
              Home
            </NavLink>
          </motion.li>
          <motion.li variants={navLinkVariants}>
            <NavLink href='/about' onClick={toggleNavigation}>
              About
            </NavLink>
          </motion.li>
          <motion.li variants={navLinkVariants}>
            <NavLink href='/faq' onClick={toggleNavigation}>
              FAQ
            </NavLink>
          </motion.li>
          <motion.li variants={navLinkVariants}>
            <NavLink href='/contact' onClick={toggleNavigation}>
              Contact
            </NavLink>
          </motion.li>
        </motion.ul>
      </motion.nav>

      {/* Desktop Navigation (visible only on larger screens) */}
      <nav className={styles.desktopNav}>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/about'>About</NavLink>
        <NavLink href='/faq'>FAQ</NavLink>
        <NavLink href='/contact'>Contact</NavLink>
      </nav>
    </div>
  )
}
