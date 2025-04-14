import { MouseEventHandler } from 'react'
import { IconButton } from '../icon-button/IconButton'
import { EmailIcon } from '@/components/icons/EmailIcon'
import styles from './EmailIconButton.module.scss'

type EmailIconButtonProps = {
  text: string
  className?: string
  id?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const EmailIconButton = ({
  text,
  className ,
  id,
  onClick,
}: EmailIconButtonProps) => {


  return (
    <IconButton
      icon={<EmailIcon />}
      text={text}
      className={`${styles.emailIconButton} ${className}`}
      id={id}
      onClick={onClick}
    />
  )
}
