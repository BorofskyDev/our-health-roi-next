import { FlexColSection } from '@/components/layout/sections'
import { SectionTitle } from '@/components/common/headers'
import { BodyText } from '@/components/common/body-typography'
import { finalCtaParagraphs } from './data'

export const FinalCTA = () => (
  <FlexColSection id='finalCTA'>
    <SectionTitle className='mb-24 center'>Why The NIH Matters</SectionTitle>

    {finalCtaParagraphs.map((para, idx) => (
      <BodyText className='body-width' key={idx}>
        {para}
      </BodyText>
    ))}
  </FlexColSection>
)
