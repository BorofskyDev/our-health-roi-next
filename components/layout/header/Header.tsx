// components/layout/header/Header.tsx
'use client'
import { useState } from 'react'
import { ThemeToggleBtn } from '@/components/common/buttons'
import styles from './Header.module.scss'
import { Navigation } from './navigation/Navigation'

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Navigation isOpen={navOpen} setIsOpen={setNavOpen} />
        <div
          className={`${styles.actions} ${navOpen ? styles.actionsOpen : ''}`}
        >
          <ThemeToggleBtn />
        </div>
      </div>
    </header>
  )
}
