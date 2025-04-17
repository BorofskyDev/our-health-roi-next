import styles from './IconContainer.module.scss'

export function IconContainer({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`${styles.iconContainer} ${className}`}>{children}</div>
}