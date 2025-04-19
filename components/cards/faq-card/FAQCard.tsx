// components/cards/faq-card/FAQCard.tsx
'use client'
import React, { useState } from 'react'
import styles from './FAQCard.module.scss'
import { ParagraphTitle } from '@/components/common/headers'

interface FAQCardProps {
  question: string
  answer: string
}

const FAQCard: React.FC<FAQCardProps> = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  const cardId = `faq-answer-${question.replace(/\s+/g, '_').toLowerCase()}`

  return (
    <div
      className={`${styles.faqCard} ${isFlipped ? styles.flipped : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role='button'
      aria-expanded={isFlipped}
      aria-controls={cardId}
      id={cardId}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <div className={styles.header}>
            <ParagraphTitle>{question}</ParagraphTitle>
            <span className={styles.icon} aria-hidden='true'>+</span>
          </div>
        </div>
        <div className={styles.cardBack} id={cardId}>
          <div className={styles.header}>
            <ParagraphTitle>{question}</ParagraphTitle>
            <span className={styles.icon} aria-hidden='true'>−</span>
          </div>
          <p className={styles.answer}>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default FAQCard
