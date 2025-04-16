// components/containers/faq-container/FAQContainer.tsx

import styles from './FAQContainer.module.scss'
import FAQCard from '@/components/cards/faq-card/FAQCard'
import { faqData } from './faqData'

export default function FAQContainer() {
  return (
    <div className={styles.faqContainer}>
      {faqData.map((item, index) => (
        <FAQCard key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  )
}