import { MouseEventHandler } from 'react'
import { IconButton } from '../icon-button/IconButton'
import { PhoneIcon } from '@/components/icons/PhoneIcon'
import styles from './PhoneIconButton.module.scss'

type PhoneIconButtonProps = {
  text: string
  className?: string
  id?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const PhoneIconButton = ({
  text,
  className,
  id,
  onClick,
}: PhoneIconButtonProps) => {
  

  return (
    <IconButton
      icon={<PhoneIcon className={styles.icon} />}
      text={text}
      className={`${styles.phoneIconButton} ${className}`}
      id={id}
      onClick={onClick}
    />
  )
}
