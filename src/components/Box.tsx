import type { ReactNode } from 'react'

interface BoxProps {
  children: ReactNode
}

export default function Box({ children }: BoxProps) {
  return (
    <div className="rounded-xl border border-neutral-700 p-6 bg-neutral-950">
      <div className="card">{children}</div>
    </div>
  )
}
