'use client'

import { DialogTitle } from '@headlessui/react'
import { ReactNode } from 'react'
import { BodyText } from '@/components/common/body-typography'
import { useModal } from '@/context/ModalContext'
import { CloseButton } from '@/components/common/buttons/close-button/CloseButton'
import styles from './ContactModal.module.scss'
import { FlexColContainer } from '@/components/containers/layout-container/flex-col-container/FlexColContainer'

type ModalShellProps = {
  title: string
  children?: ReactNode
}

export const ModalShell = ({ title, children }: ModalShellProps) => {
  const { closeModal } = useModal()

  return (
    <>
      <DialogTitle>
        <p className={`${styles.title} center mb-16`}>{title}</p>
      </DialogTitle>

      <FlexColContainer>
        <BodyText className='mb-24 center'>
          Fill this out to reach out to both your US Senators and US
          Representative
        </BodyText>

        {children}

        <CloseButton onClick={closeModal} />
      </FlexColContainer>
    </>
  )
}
