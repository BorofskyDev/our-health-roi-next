'use client'

import { Dialog, Transition, TransitionChild, DialogBackdrop } from '@headlessui/react'
import { motion } from 'framer-motion'
import { Fragment, ReactNode } from 'react'
import { useModal } from './ModalContext'

export const ModalRoot = ({ children }: { children: ReactNode }) => {
  const { closeModal } = useModal()
  const isOpen = !!children

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-50 flex items-center justify-center'
        onClose={closeModal}
      >
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-200'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <DialogBackdrop className='fixed inset-0 bg-black/40' />
        </TransitionChild>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='relative z-50 max-w-lg w-full bg-white rounded-lg p-24 shadow-xl'
        >
          {children}
        </motion.div>
      </Dialog>
    </Transition>
  )
}
