'use client'

import { DialogTitle } from '@headlessui/react'
import { ReactNode } from 'react'
import { ParagraphTitle } from '@/components/common/headers'
import { BodyText } from '@/components/common/body-typography'
import { useModal } from '@/context/ModalContext'
import { CloseButton } from '@/components/common/buttons/close-button/CloseButton'

type ModalShellProps = {
  title: string
  children?: ReactNode
}

export const ModalShell = ({ title, children }: ModalShellProps) => {
  const { closeModal } = useModal()

  return (
    <>
      <DialogTitle>
        <ParagraphTitle>{title}</ParagraphTitle>
      </DialogTitle>

      {/* Placeholder until you add the real form */}
      <BodyText className='mb-24'>
        Form letter &amp; inputs will live here.
      </BodyText>

      {children}

      <CloseButton onClick={closeModal} />
    </>
  )
}
