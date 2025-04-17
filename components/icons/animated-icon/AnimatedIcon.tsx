'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { useId } from 'react'
import {
  decorativeIcons,
  DecorativeIconId,
} from '../decorative-icon/decorativeIcon'
import styles from './AnimatedIcon.module.scss'

type AnimatedIconProps = {
  id: DecorativeIconId
  className?: string
  size?: number | string
}

export const AnimatedIcon = ({
  id,
  className,
  size = '25rem',
}: AnimatedIconProps) => {
  const { viewBox, path } = decorativeIcons[id]

  const gradId = useId()
  const glowId = `${gradId}-glow`

  const shouldReduce = useReducedMotion()

  return (
    <div
      aria-hidden
      className={` ${styles.animatedIcon} ${className}`}
      style={{ width: size, aspectRatio: '1 / 1' }}
    >
      <svg
        viewBox={viewBox}
        width='100%'
        height='100%'
        focusable='false'
        style={{ filter: `url(#${glowId})` }}
      >
        <defs>
          <motion.linearGradient
            id={gradId}
            gradientUnits='userSpaceOnUse'
            x1='0'
            y1='0'
            x2='50'
            y2='50'
            animate={
              shouldReduce
                ? undefined
                : {
                    gradientTransform: ['rotate(0 25 25)', 'rotate(360 25 25)'],
                  }
            }
            transition={
              shouldReduce
                ? undefined
                : { duration: 20, ease: 'linear', repeat: Infinity }
            }
          >
            <stop
              offset='0%'
              style={{ stopColor: 'hsl(var(--color-accent))' }}
            />
            <stop
              offset='25%'
              style={{ stopColor: 'hsl(var(--color-primary))' }}
            />
            <stop
              offset='75%'
              style={{ stopColor: 'hsl(var(--color-accent))' }}
            />
            <stop
              offset='100%'
              style={{ stopColor: 'hsl(var(--color-primary))' }}
            />
          </motion.linearGradient>

          <filter id={glowId} x='-50%' y='-50%' width='200%' height='200%'>
            <feGaussianBlur in='SourceAlpha' stdDeviation='3' result='blur' />

            <feFlood
              floodColor='hsl(var(--color-primary))'
              floodOpacity='0.6'
              result='color1'
            />
            <feComposite
              in='color1'
              in2='blur'
              operator='in'
              result='shadow1'
            />

            <feFlood
              floodColor='hsl(var(--color-accent))'
              floodOpacity='0.4'
              result='color2'
            />
            <feComposite
              in='color2'
              in2='blur'
              operator='in'
              result='shadow2'
            />

            <feOffset in='shadow1' dx='10' dy='5' result='offsetShadow1' />
            <feOffset in='shadow2' dx='12' dy='7' result='offsetShadow2' />

            <feBlend
              in='offsetShadow1'
              in2='offsetShadow2'
              mode='screen'
              result='blendedShadow'
            />

            <feGaussianBlur in='SourceGraphic' stdDeviation='1' result='glow' />

            <feMerge>
              <feMergeNode in='blendedShadow' />
              <feMergeNode in='glow' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>

        {/* --- icon path -------------------------------------------- */}
        <path d={path} fill={`url(#${gradId})`} />
      </svg>
    </div>
  )
}
