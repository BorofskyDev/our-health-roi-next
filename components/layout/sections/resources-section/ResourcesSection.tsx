import { FlexColSection } from '@/components/layout/sections'
import { SectionTitle } from '@/components/common/headers'
import { ExternalLink } from '@/components/common/links'
import { resources } from './data'


export const ResourcesSection = () => (
  <FlexColSection id='resources'>
    <SectionTitle className='mb-24 center'>Resources</SectionTitle>

    {resources.map(({ href, text, ariaLabel }, idx) => (
      <div key={idx}>
        <ExternalLink href={href} ariaLabel={ariaLabel}>
          {text}
        </ExternalLink>
      </div>
    ))}
  </FlexColSection>
)
