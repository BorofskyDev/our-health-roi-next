import styles from './ImageContainer.module.scss'

export function ImageContainer({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`${styles.imageContainer} ${className}`}>{children}</div>
  )
}
