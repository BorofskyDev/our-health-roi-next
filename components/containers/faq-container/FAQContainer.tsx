// components/containers/faq-container/FAQContainer.tsx

import FAQCard from '@/components/cards/faq-card/FAQCard'
import { faqData } from './faqData'
import styles from './FAQContainer.module.scss'

export default function FAQContainer() {
  return (
    <div
      className={styles.faqContainer}
      
      role='region'
      aria-label='Frequently Asked Questions'
    >
      {faqData.map((item, index) => (
        <FAQCard key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  )
}