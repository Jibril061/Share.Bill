import React from 'react'

export interface CardProps {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  children: React.ReactNode
  className?: string
  as?: 'section' | 'article' | 'div'
  headerAction?: React.ReactNode
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  className = '',
  as: Component = 'section',
  headerAction,
}) => {
  const hasHeader = Boolean(title || subtitle || headerAction)

  return (
    <Component className={`card ${className}`.trim()}>
      {hasHeader && (
        <header className="card-header">
          <div className="card-title-group">
            {title &&
              (typeof title === 'string' ? (
                <h2 className="card-title">{title}</h2>
              ) : (
                title
              ))}
            {subtitle &&
              (typeof subtitle === 'string' ? (
                <p className="card-subtitle">{subtitle}</p>
              ) : (
                subtitle
              ))}
          </div>
          {headerAction && <div className="card-action">{headerAction}</div>}
        </header>
      )}
      <div className="card-body">{children}</div>
    </Component>
  )
}

export default Card
