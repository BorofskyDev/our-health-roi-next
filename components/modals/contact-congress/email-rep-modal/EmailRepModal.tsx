// components/modals/EmailRepModal.tsx
import { DialogTitle } from '@headlessui/react'
import { useModal } from '@/components/modals/ModalContext'

export const EmailRepModal = () => {
  const { closeModal } = useModal()
  return (
    <>
      <DialogTitle className='h4 mb-16'>Email Your Representative</DialogTitle>
      <p className='body-text mb-24'>Form letter & inputs will live here.</p>
      <button className='cta-btn' onClick={closeModal}>
        Close
      </button>
    </>
  )
}

// Duplicate & tweak for CallRepModal, EmailSenatorsModal, CallSenatorsModal
