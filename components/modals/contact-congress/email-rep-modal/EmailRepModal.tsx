// components/modals/contact-congress/EmailRepModal.tsx
import { ModalShell } from '../contact-modal-shell/ContactModalShell'
import { EmailRepBody } from './EmailRepBody'
import { ResearchCounts } from '@/lib/utils/emailTemplates'

type Props = {
  searchTerm: string
  research: ResearchCounts
}

export const EmailRepModal = ({ searchTerm, research }: Props) => (
  <ModalShell title='Email Your Representative'>
    <EmailRepBody searchTerm={searchTerm} research={research} />
  </ModalShell>
)
