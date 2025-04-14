import React, { InputHTMLAttributes } from 'react'
import styles from './TextInput.module.scss'

type TextInputProps = {
  /** Label text displayed for accessibility or visible text if not hidden */
  label: string
  /** Hint text that appears in a `div` linked by `aria-describedby` */
  hint?: string
  /** If true, the label is visually hidden (for screen readers only) */
  hideLabel?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const TextInput = ({
  label,
  hint,
  hideLabel = false,
  id,
  className,
  ...rest
}: TextInputProps) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id} className={hideLabel ? 'visually-hidden' : undefined}>
        {label}
      </label>

      <input
        id={id}
        aria-describedby={hint ? `${id}-hint` : undefined}
        className={`${styles.textInput} ${className}`}
        {...rest}
      />

      {hint && (
        <div id={`${id}-hint`} className={styles.hint}>
          {hint}
        </div>
      )}
    </div>
  )
}
