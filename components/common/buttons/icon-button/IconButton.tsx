import { MouseEventHandler, ReactNode } from 'react'
import styles from './IconButton.module.scss'

type IconButtonProps = {
  icon: ReactNode
  text: string
  className?: string
  id?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const IconButton = ({
  icon,
  text,
  className,
  id,
  onClick,
}: IconButtonProps) => {

  return (
    <button
      className={`${styles.iconButton} ${className}`}
      id={id}
      onClick={onClick}
      type='button'
    >
      {icon}
      <span>{text}</span>
    </button>
  )
}
