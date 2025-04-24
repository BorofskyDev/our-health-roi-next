import { ExternalLink } from '@/components/common/links'
import { EmailIconButton, PhoneIconButton } from '@/components/common/buttons'
import { FlexColSection } from '@/components/layout/sections'
import styles from './ContactContainer.module.scss'
import { Heading } from '@/components/common/headers/Heading'

type ContactButton = {
  /** Visible text, e.g. “Email My Rep” */
  text: string
  /** Stable id you’ll hook the modal to later */
  id: string
  onClick?: () => void
}

type ContactContainerProps = {
  title: string
  findLink: {
    href: string
    text: string
    ariaLabel: string
  }
  emailButton: ContactButton
  callButton: ContactButton
}

export const ContactContainer = ({
  title,
  findLink,
  emailButton,
  callButton,
}: ContactContainerProps) => (
  <FlexColSection id='congressContact'>
    <Heading as='h3' size='md' className='mb-44 center'>{title}</Heading>

    <ExternalLink href={findLink.href} ariaLabel={findLink.ariaLabel}>
      {findLink.text}
    </ExternalLink>

    <div className={styles.buttonGroup}>
      <EmailIconButton
        text={emailButton.text}
        id={emailButton.id}
        className='icon-modal-btn-primary mb-44'
        onClick={emailButton.onClick}
      />

      <PhoneIconButton
        text={callButton.text}
        id={callButton.id}
        className='icon-modal-btn-secondary'
        onClick={callButton.onClick}
      />
    </div>
  </FlexColSection>
)
