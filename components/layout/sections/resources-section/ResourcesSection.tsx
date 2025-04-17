import { FlexColSection } from '@/components/layout/sections'
import { SectionTitle } from '@/components/common/headers'
import { ExternalLink } from '@/components/common/links'
import { resources } from './data'
import styles from './ResourcesSection.module.scss'

export const ResourcesSection = () => (
  <FlexColSection id='resources'>
    <SectionTitle className='mb-24 center'>Resources</SectionTitle>
    <div className={styles.resourcesGrid}>
      {resources.map(({ href, text, ariaLabel }, idx) => (
        <div key={idx}>
          <ExternalLink className='center' href={href} ariaLabel={ariaLabel}>
            {text}
          </ExternalLink>
        </div>
      ))}
    </div>
  </FlexColSection>
)
