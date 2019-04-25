import React from 'react'

export function CardDesign ({ children, className = '' }) {
  return (
    <div className={`white-card ${className}`}>{children}</div>
  )
}
