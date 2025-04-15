import { ModalShell } from '../modal-shell/ContactModalShell'
import { MessageBody } from '../messages/MessageBody'
import { ResearchCounts } from '@/lib/utils/messageTemplates'

type Props = {
  searchTerm: string
  research: ResearchCounts
}

export const EmailSenatorsModal = ({ searchTerm, research }: Props) => (
  <ModalShell title='Email Your Senators'>
    <MessageBody
      searchTerm={searchTerm}
      research={research}
      contactType='email'
      recipientType='senators'
      submitButtonText='Preview Emails'
    />
  </ModalShell>
)
