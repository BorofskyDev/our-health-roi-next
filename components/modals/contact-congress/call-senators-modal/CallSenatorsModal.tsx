// components/modals/contact-congress/CallSenatorsModal.tsx
import { ModalShell } from '../modal-shell/ContactModalShell'
import { MessageBody } from '../messages/MessageBody'
import { ResearchCounts } from '@/lib/utils/messageTemplates'

type Props = {
  searchTerm?: string
  research?: ResearchCounts
}

export const CallSenatorsModal = ({
  searchTerm = '',
  research = { projects: 0, publications: 0, patents: 0, trials: 0 },
}: Props) => (
  <ModalShell title='Call Your Senators'>
    <MessageBody
      searchTerm={searchTerm}
      research={research}
      contactType='call'
      recipientType='senators'
      submitButtonText='Show Call Script'
    />
  </ModalShell>
)
