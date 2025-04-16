'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { CTAButton } from '../cta-button/CTAButton'

export const ThemeToggleBtn = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDarkMode = resolvedTheme === 'dark'

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark')
  }

  return (
    <CTAButton onClick={toggleTheme}>
      {isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </CTAButton>
  )
}
