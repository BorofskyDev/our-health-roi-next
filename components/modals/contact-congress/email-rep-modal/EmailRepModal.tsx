// components/modals/contact-congress/EmailRepModal.tsx
import { ModalShell } from '../modal-shell/ContactModalShell'
import { MessageBody } from '../messages/MessageBody'
import { ResearchCounts } from '@/lib/utils/messageTemplates'

type Props = {
  searchTerm: string
  research: ResearchCounts
}

export const EmailRepModal = ({ searchTerm, research }: Props) => (
  <ModalShell title='Email Your Representative'>
    <MessageBody
      searchTerm={searchTerm}
      research={research}
      contactType='email'
      recipientType='rep'
      submitButtonText='Preview Email'
    />
  </ModalShell>
)
