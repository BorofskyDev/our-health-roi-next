// components/layout/sections/final-cta-section/FinalCTA.tsx

'use client'
import React from 'react'
import { FlexColSection } from '@/components/layout/sections'
import { SectionTitle } from '@/components/common/headers'
import { BodyText } from '@/components/common/body-typography'
import { AnimatedIcon } from '@/components/icons'
import { finalCtaParagraphs } from './data'
import { ColToRowContainer } from '@/components/containers/layout-container/col-to-row-container/ColToRowContainer'

import { IconContainer } from '@/components/containers/icon-container/IconContainer'
// Helper to group paragraphs into blocks (3 paragraphs each)
const groupArray = (arr: string[], groupSize: number): string[][] =>
  arr.reduce((acc, cur, idx) => {
    const groupIdx = Math.floor(idx / groupSize)
    if (!acc[groupIdx]) {
      acc[groupIdx] = []
    }
    acc[groupIdx].push(cur)
    return acc
  }, [] as string[][])

export const FinalCTA = () => {
  const groupedParagraphs = groupArray(finalCtaParagraphs, 3)

  return (
    <FlexColSection id='finalCTA'>
      <SectionTitle className='mb-24 center'>Why The NIH Matters</SectionTitle>
      {groupedParagraphs.map((group, groupIndex) => (
        <ColToRowContainer
          key={groupIndex}
          className={groupIndex % 2 !== 0 ? 'reverse' : ''}
        >
          {groupIndex % 2 === 0 ? (
            <>
              {/* Text first, then icon */}
              <div className='text-container'>
                {group.map((para, idx) => (
                  <BodyText className='mb-18 body-width' key={idx}>
                    {para}
                  </BodyText>
                ))}
              </div>
              <IconContainer>

              <AnimatedIcon  id='medical' size='25rem' />
              </IconContainer>
           
            </>
          ) : (
            <>
              {/* Icon first, then text */}
              <IconContainer>
                <AnimatedIcon id='flag' size='25rem' />
              </IconContainer>
              <div className='text-container'>
                {group.map((para, idx) => (
                  <BodyText className='mb-18 body-width' key={idx}>
                    {para}
                  </BodyText>
                ))}
              </div>
            </>
          )}
        </ColToRowContainer>
      ))}
    </FlexColSection>
  )
}

export default FinalCTA
