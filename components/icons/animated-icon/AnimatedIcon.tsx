'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { useId } from 'react'
import { decorativeIcons, DecorativeIconId } from '../decorative-icon/decorativeIcon'
import styles from './AnimatedIcon.module.scss'

type AnimatedIconProps = {
  id: DecorativeIconId // 'dna' | 'heart' | …
  className?: string
  size?: number | string // optional override (px | rem | etc.)
}

export const AnimatedIcon = ({
  id,
  className,
  size = '25rem', // default wrapper size
}: AnimatedIconProps) => {
  const { viewBox, path } = decorativeIcons[id]

  /* unique IDs so multiple instances never clash */
  const gradId = useId()
  const glowId = `${gradId}-glow`

  /* respect prefers‑reduced‑motion */
  const shouldReduce = useReducedMotion()

  return (
    <div
      aria-hidden
      className={` ${styles.animatedIcon} ${className}`}
      style={{  width: size, aspectRatio: '1 / 1' }}
    >
      <svg
        viewBox={viewBox}
        width='100%'
        height='100%'
        focusable='false'
        style={{ filter: `url(#${glowId})` }}
      >
        {/* --- defs -------------------------------------------------- */}
        <defs>
          <motion.linearGradient
            id={gradId}
            gradientUnits='userSpaceOnUse'
            x1='0'
            y1='0'
            x2='50'
            y2='50'
            /* animate only when motion is allowed */
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

          <filter id={glowId} x='-30%' y='-30%' width='160%' height='160%'>
            <feGaussianBlur stdDeviation='2' result='blur' />
            <feMerge>
              <feMergeNode in='blur' />
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
