import { TextareaHTMLAttributes } from 'react'
import styles from './TextAreaWithCount.module.scss'

type Props = {
  maxLength: number
  label: string
  hideLabel?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>

export const TextAreaWithCount = ({
  label,
  hideLabel = false,
  maxLength,
  value,
  onChange,
  id,
  ...rest
}: Props) => (
  <div className={styles.inputGroup}>
    <label htmlFor={id} className={hideLabel ? 'visually-hidden' : undefined}>
      {label}
    </label>

    <textarea
      id={id}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      {...rest}
      className={styles.textArea}
    />

    <div className={styles.charCount}>
      {value.length}/{maxLength}
    </div>
  </div>
)
