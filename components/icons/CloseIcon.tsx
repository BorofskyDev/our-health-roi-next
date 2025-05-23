import React from 'react'

interface IconProps {
  className?: string
}

export const CloseIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    x='0px'
    y='0px'
    width='50'
    height='50'
    viewBox='0 0 50 50'
    className={className}
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    aria-hidden='true'
    focusable='false'
  >
    <path
      fill='currentColor'
      d='M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z'
    ></path>
  </svg>
)
