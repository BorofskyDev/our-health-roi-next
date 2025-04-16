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

  return (
    <div
      className={`${styles.faqCard} ${isFlipped ? styles.flipped : ''}`}
      onClick={handleClick}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <div className={styles.header}>
            <ParagraphTitle>{question}</ParagraphTitle>
            <span className={styles.icon}>+</span>
          </div>
        </div>
        <div className={styles.cardBack}>
          <div className={styles.header}>
            <ParagraphTitle>{question}</ParagraphTitle>
            <span className={styles.icon}>−</span>
          </div>
          <p className={styles.answer}>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default FAQCard
