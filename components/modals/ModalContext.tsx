import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'
import { ModalRoot } from './ModalRoot'

type ModalState = ReactNode | null

type ModalContextType = {
  openModal: (content: ReactNode) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const useModal = () => {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used inside <ModalProvider>')
  return ctx
}

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalContent, setModalContent] = useState<ModalState>(null)

  const openModal = useCallback(
    (content: ReactNode) => setModalContent(content),
    []
  )
  const closeModal = useCallback(() => setModalContent(null), [])

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {/* Root is rendered once, content changes */}
      <ModalRoot>{modalContent}</ModalRoot>
    </ModalContext.Provider>
  )
}
