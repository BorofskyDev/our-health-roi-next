import { FlexColSection } from '@/components/layout/sections'
import { ExternalLink } from '@/components/common/links'
import { resources } from './data'
import styles from './ResourcesSection.module.scss'
import { Heading } from '@/components/common/headers/Heading'

export const ResourcesSection = () => (
  <FlexColSection id='resources'>
    <Heading as='h2' size='xl' className='mb-24 center'>
      Resources
    </Heading>
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
